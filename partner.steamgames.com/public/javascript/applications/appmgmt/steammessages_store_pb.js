/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import {
  Ct as e,
  K as t,
  Pt as n,
  St as r,
  _t as i,
  bt as a,
  gt as o,
  ht as s,
  mt as c,
  vt as l,
  wt as u,
  xt as d,
  yt as f,
} from "./chunk~de7f2df91c.js";
import { B as p, F as m, I as h, R as g } from "./chunk~44f252525d.js";
var _ = n(u(), 1),
  ee = class t extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.activation_code || o(t.M()),
        _.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            activation_code: { n: 1, br: f.readString, bw: e.writeString },
            purchase_platform: { n: 2, br: f.readInt32, bw: e.writeInt32 },
            is_request_from_client: { n: 3, br: f.readBool, bw: e.writeBool },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= a(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return r(t.M(), e, n);
    }
    static fromObject(e) {
      return l(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new _.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new _.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      d(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new _.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CStore_RegisterCDKey_Request`;
    }
  },
  v = class t extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.transactionid || o(t.M()),
        _.Message.initialize(this, e, 0, -1, [18], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            transactionid: {
              n: 1,
              br: f.readUint64String,
              bw: e.writeUint64String,
            },
            packageid: { n: 2, br: f.readUint32, bw: e.writeUint32 },
            purchase_status: { n: 3, br: f.readUint32, bw: e.writeUint32 },
            result_detail: { n: 4, br: f.readUint32, bw: e.writeUint32 },
            transaction_time: { n: 5, br: f.readUint32, bw: e.writeUint32 },
            payment_method: { n: 6, br: f.readUint32, bw: e.writeUint32 },
            base_price: {
              n: 7,
              br: f.readUint64String,
              bw: e.writeUint64String,
            },
            total_discount: {
              n: 8,
              br: f.readUint64String,
              bw: e.writeUint64String,
            },
            tax: { n: 9, br: f.readUint64String, bw: e.writeUint64String },
            shipping: {
              n: 10,
              br: f.readUint64String,
              bw: e.writeUint64String,
            },
            currency_code: { n: 11, br: f.readUint32, bw: e.writeUint32 },
            country_code: { n: 12, br: f.readString, bw: e.writeString },
            error_headline: { n: 13, br: f.readString, bw: e.writeString },
            error_string: { n: 14, br: f.readString, bw: e.writeString },
            error_link_text: { n: 15, br: f.readString, bw: e.writeString },
            error_link_url: { n: 16, br: f.readString, bw: e.writeString },
            error_appid: { n: 17, br: f.readUint32, bw: e.writeUint32 },
            line_items: { n: 18, c: y, r: !0, q: !0 },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= a(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return r(t.M(), e, n);
    }
    static fromObject(e) {
      return l(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new _.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new _.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      d(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new _.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CStore_PurchaseReceiptInfo`;
    }
  },
  y = class t extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.packageid || o(t.M()),
        _.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            packageid: { n: 1, br: f.readUint32, bw: e.writeUint32 },
            appid: { n: 2, br: f.readUint32, bw: e.writeUint32 },
            line_item_description: {
              n: 3,
              br: f.readString,
              bw: e.writeString,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= a(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return r(t.M(), e, n);
    }
    static fromObject(e) {
      return l(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new _.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new _.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      d(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new _.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CStore_PurchaseReceiptInfo_LineItem`;
    }
  },
  b = class t extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.purchase_result_details || o(t.M()),
        _.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            purchase_result_details: {
              n: 1,
              br: f.readInt32,
              bw: e.writeInt32,
            },
            purchase_receipt_info: { n: 2, c: v },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= a(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return r(t.M(), e, n);
    }
    static fromObject(e) {
      return l(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new _.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new _.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      d(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new _.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CStore_RegisterCDKey_Response`;
    }
  },
  x = class t extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.language || o(t.M()),
        _.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            language: { n: 2, br: f.readString, bw: e.writeString },
            country_code: { n: 3, br: f.readString, bw: e.writeString },
            favor_rarer_tags: { n: 4, br: f.readBool, bw: e.writeBool },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= a(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return r(t.M(), e, n);
    }
    static fromObject(e) {
      return l(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new _.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new _.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      d(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new _.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CStore_GetRecommendedTagsForUser_Request`;
    }
  },
  te = class e extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.tags || o(e.M()),
        _.Message.initialize(this, t, 0, -1, [1], null));
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
      return ((e.sm_mbf ||= a(e.M())), e.sm_mbf);
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
      let n = new _.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return i(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new _.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      d(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new _.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_GetRecommendedTagsForUser_Response`;
    }
  },
  S = class t extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.tagid || o(t.M()),
        _.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            tagid: { n: 1, br: f.readUint32, bw: e.writeUint32 },
            name: { n: 2, br: f.readString, bw: e.writeString },
            weight: { n: 3, br: f.readFloat, bw: e.writeFloat },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= a(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return r(t.M(), e, n);
    }
    static fromObject(e) {
      return l(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new _.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new _.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      d(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new _.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CStore_GetRecommendedTagsForUser_Response_Tag`;
    }
  },
  ne = class t extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.language || o(t.M()),
        _.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: { language: { n: 1, br: f.readString, bw: e.writeString } },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= a(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return r(t.M(), e, n);
    }
    static fromObject(e) {
      return l(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new _.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new _.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      d(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new _.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CStore_GetMostPopularTags_Request`;
    }
  },
  re = class e extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.tags || o(e.M()),
        _.Message.initialize(this, t, 0, -1, [1], null));
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
      return ((e.sm_mbf ||= a(e.M())), e.sm_mbf);
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
      let n = new _.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return i(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new _.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      d(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new _.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_GetMostPopularTags_Response`;
    }
  },
  C = class t extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.tagid || o(t.M()),
        _.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            tagid: { n: 1, br: f.readUint32, bw: e.writeUint32 },
            name: { n: 2, br: f.readString, bw: e.writeString },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= a(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return r(t.M(), e, n);
    }
    static fromObject(e) {
      return l(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new _.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new _.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      d(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new _.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CStore_GetMostPopularTags_Response_Tag`;
    }
  },
  w = class t extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.language || o(t.M()),
        _.Message.initialize(this, e, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            language: { n: 1, br: f.readString, bw: e.writeString },
            tagids: {
              n: 2,
              r: !0,
              q: !0,
              br: f.readUint32,
              pbr: f.readPackedUint32,
              bw: e.writeRepeatedUint32,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= a(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return r(t.M(), e, n);
    }
    static fromObject(e) {
      return l(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new _.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new _.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      d(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new _.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CStore_GetLocalizedNameForTags_Request`;
    }
  },
  T = class e extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.tags || o(e.M()),
        _.Message.initialize(this, t, 0, -1, [1], null));
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
      return ((e.sm_mbf ||= a(e.M())), e.sm_mbf);
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
      let n = new _.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return i(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new _.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      d(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new _.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_GetLocalizedNameForTags_Response`;
    }
  },
  E = class t extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.tagid || o(t.M()),
        _.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            tagid: { n: 1, br: f.readUint32, bw: e.writeUint32 },
            english_name: { n: 2, br: f.readString, bw: e.writeString },
            name: { n: 3, br: f.readString, bw: e.writeString },
            normalized_name: { n: 4, br: f.readString, bw: e.writeString },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= a(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return r(t.M(), e, n);
    }
    static fromObject(e) {
      return l(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new _.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new _.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      d(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new _.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CStore_GetLocalizedNameForTags_Response_Tag`;
    }
  },
  D = class t extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.language || o(t.M()),
        _.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            language: { n: 1, br: f.readString, bw: e.writeString },
            have_version_hash: { n: 2, br: f.readString, bw: e.writeString },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= a(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return r(t.M(), e, n);
    }
    static fromObject(e) {
      return l(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new _.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new _.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      d(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new _.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CStore_GetTagList_Request`;
    }
  },
  ie = class t extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.version_hash || o(t.M()),
        _.Message.initialize(this, e, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            version_hash: { n: 1, br: f.readString, bw: e.writeString },
            tags: { n: 2, c: O, r: !0, q: !0 },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= a(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return r(t.M(), e, n);
    }
    static fromObject(e) {
      return l(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new _.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new _.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      d(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new _.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CStore_GetTagList_Response`;
    }
  },
  O = class t extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.tagid || o(t.M()),
        _.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            tagid: { n: 1, br: f.readUint32, bw: e.writeUint32 },
            name: { n: 2, br: f.readString, bw: e.writeString },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= a(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return r(t.M(), e, n);
    }
    static fromObject(e) {
      return l(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new _.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new _.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      d(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new _.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CStore_GetTagList_Response_Tag`;
    }
  },
  k = class t extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.os_win || o(t.M()),
        _.Message.initialize(this, e, 0, -1, [10, 16], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            os_win: { n: 4, br: f.readBool, bw: e.writeBool },
            os_mac: { n: 5, br: f.readBool, bw: e.writeBool },
            os_linux: { n: 6, br: f.readBool, bw: e.writeBool },
            full_controller_support: { n: 7, br: f.readBool, bw: e.writeBool },
            native_steam_controller: { n: 8, br: f.readBool, bw: e.writeBool },
            include_coming_soon: { n: 9, br: f.readBool, bw: e.writeBool },
            excluded_tagids: {
              n: 10,
              r: !0,
              q: !0,
              br: f.readUint32,
              pbr: f.readPackedUint32,
              bw: e.writeRepeatedUint32,
            },
            exclude_early_access: { n: 11, br: f.readBool, bw: e.writeBool },
            exclude_videos: { n: 12, br: f.readBool, bw: e.writeBool },
            exclude_software: { n: 13, br: f.readBool, bw: e.writeBool },
            exclude_dlc: { n: 14, br: f.readBool, bw: e.writeBool },
            exclude_soundtracks: { n: 15, br: f.readBool, bw: e.writeBool },
            featured_tagids: {
              n: 16,
              r: !0,
              q: !0,
              br: f.readUint32,
              pbr: f.readPackedUint32,
              bw: e.writeRepeatedUint32,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= a(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return r(t.M(), e, n);
    }
    static fromObject(e) {
      return l(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new _.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new _.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      d(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new _.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CStoreDiscoveryQueueSettings`;
    }
  },
  A = class t extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.queue_type || o(t.M()),
        _.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            queue_type: { n: 1, br: f.readEnum, bw: e.writeEnum },
            country_code: { n: 2, br: f.readString, bw: e.writeString },
            rebuild_queue: { n: 3, br: f.readBool, bw: e.writeBool },
            settings_changed: { n: 4, br: f.readBool, bw: e.writeBool },
            settings: { n: 5, c: k },
            rebuild_queue_if_stale: { n: 6, br: f.readBool, bw: e.writeBool },
            ignore_user_preferences: { n: 8, br: f.readBool, bw: e.writeBool },
            no_experimental_results: { n: 9, br: f.readBool, bw: e.writeBool },
            experimental_cohort: { n: 10, br: f.readUint32, bw: e.writeUint32 },
            debug_get_solr_query: { n: 11, br: f.readBool, bw: e.writeBool },
            store_page_filter: { n: 12, c: p },
            context: { n: 13, c: m },
            data_request: { n: 14, c: h },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= a(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return r(t.M(), e, n);
    }
    static fromObject(e) {
      return l(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new _.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new _.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      d(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new _.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CStore_GetDiscoveryQueue_Request`;
    }
  },
  ae = class t extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.appids || o(t.M()),
        _.Message.initialize(this, e, 0, -1, [1, 8], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            appids: {
              n: 1,
              r: !0,
              q: !0,
              br: f.readUint32,
              pbr: f.readPackedUint32,
              bw: e.writeRepeatedUint32,
            },
            country_code: { n: 2, br: f.readString, bw: e.writeString },
            settings: { n: 3, c: k },
            skipped: { n: 4, br: f.readInt32, bw: e.writeInt32 },
            exhausted: { n: 5, br: f.readBool, bw: e.writeBool },
            experimental_cohort: { n: 6, br: f.readUint32, bw: e.writeUint32 },
            debug_solr_query: { n: 7, br: f.readString, bw: e.writeString },
            store_items: { n: 8, c: g, r: !0, q: !0 },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= a(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return r(t.M(), e, n);
    }
    static fromObject(e) {
      return l(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new _.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new _.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      d(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new _.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CStore_GetDiscoveryQueue_Response`;
    }
  },
  oe = class t extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.queue_type || o(t.M()),
        _.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            queue_type: { n: 1, br: f.readEnum, bw: e.writeEnum },
            store_page_filter: { n: 2, c: p },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= a(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return r(t.M(), e, n);
    }
    static fromObject(e) {
      return l(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new _.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new _.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      d(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new _.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CStore_GetDiscoveryQueueSettings_Request`;
    }
  },
  se = class t extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.country_code || o(t.M()),
        _.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            country_code: { n: 1, br: f.readString, bw: e.writeString },
            settings: { n: 2, c: k },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= a(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return r(t.M(), e, n);
    }
    static fromObject(e) {
      return l(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new _.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new _.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      d(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new _.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CStore_GetDiscoveryQueueSettings_Response`;
    }
  },
  ce = class t extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.queue_type || o(t.M()),
        _.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            queue_type: { n: 1, br: f.readEnum, bw: e.writeEnum },
            appid: { n: 2, br: f.readUint32, bw: e.writeUint32 },
            store_page_filter: { n: 3, c: p },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= a(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return r(t.M(), e, n);
    }
    static fromObject(e) {
      return l(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new _.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new _.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      d(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new _.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CStore_SkipDiscoveryQueueItem_Request`;
    }
  },
  j = class e extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), _.Message.initialize(this, e, 0, -1, void 0, null));
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
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new _.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_SkipDiscoveryQueueItem_Response`;
    }
  },
  M = class t extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.appid || o(t.M()),
        _.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            appid: { n: 1, br: f.readUint32, bw: e.writeUint32 },
            store_appid: { n: 2, br: f.readUint32, bw: e.writeUint32 },
            beta_appid: { n: 3, br: f.readUint32, bw: e.writeUint32 },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= a(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return r(t.M(), e, n);
    }
    static fromObject(e) {
      return l(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new _.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new _.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      d(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new _.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CStore_GetUserGameInterestState_Request`;
    }
  },
  N = class t extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.owned || o(t.M()),
        _.Message.initialize(this, e, 0, -1, [5, 6, 7, 8, 10], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            owned: { n: 1, br: f.readBool, bw: e.writeBool },
            wishlist: { n: 2, br: f.readBool, bw: e.writeBool },
            ignored: { n: 3, br: f.readBool, bw: e.writeBool },
            following: { n: 4, br: f.readBool, bw: e.writeBool },
            in_queues: {
              n: 5,
              r: !0,
              q: !0,
              br: f.readEnum,
              pbr: f.readPackedEnum,
              bw: e.writeRepeatedEnum,
            },
            queues_with_skip: {
              n: 6,
              r: !0,
              q: !0,
              br: f.readEnum,
              pbr: f.readPackedEnum,
              bw: e.writeRepeatedEnum,
            },
            queue_items_remaining: {
              n: 7,
              r: !0,
              q: !0,
              br: f.readInt32,
              pbr: f.readPackedInt32,
              bw: e.writeRepeatedInt32,
            },
            queue_items_next_appid: {
              n: 8,
              r: !0,
              q: !0,
              br: f.readUint32,
              pbr: f.readPackedUint32,
              bw: e.writeRepeatedUint32,
            },
            temporarily_owned: { n: 9, br: f.readBool, bw: e.writeBool },
            queues: { n: 10, c: P, r: !0, q: !0 },
            ignored_reason: { n: 11, br: f.readInt32, bw: e.writeInt32 },
            beta_status: { n: 12, br: f.readEnum, bw: e.writeEnum },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= a(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return r(t.M(), e, n);
    }
    static fromObject(e) {
      return l(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new _.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new _.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      d(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new _.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CStore_GetUserGameInterestState_Response`;
    }
  },
  P = class t extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.type || o(t.M()),
        _.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            type: { n: 1, br: f.readEnum, bw: e.writeEnum },
            skipped: { n: 2, br: f.readBool, bw: e.writeBool },
            items_remaining: { n: 3, br: f.readInt32, bw: e.writeInt32 },
            next_appid: { n: 4, br: f.readUint32, bw: e.writeUint32 },
            experimental_cohort: { n: 5, br: f.readUint32, bw: e.writeUint32 },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= a(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return r(t.M(), e, n);
    }
    static fromObject(e) {
      return l(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new _.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new _.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      d(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new _.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CStore_GetUserGameInterestState_Response_InQueue`;
    }
  },
  F = class t extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.steamid || o(t.M()),
        _.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            steamid: {
              n: 1,
              br: f.readFixed64String,
              bw: e.writeFixed64String,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= a(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return r(t.M(), e, n);
    }
    static fromObject(e) {
      return l(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new _.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new _.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      d(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new _.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CStore_GetGamesFollowed_Request`;
    }
  },
  I = class t extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.appids || o(t.M()),
        _.Message.initialize(this, e, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            appids: {
              n: 1,
              r: !0,
              q: !0,
              br: f.readUint32,
              pbr: f.readPackedUint32,
              bw: e.writeRepeatedUint32,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= a(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return r(t.M(), e, n);
    }
    static fromObject(e) {
      return l(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new _.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new _.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      d(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new _.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CStore_GetGamesFollowed_Response`;
    }
  },
  L = class t extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.steamid || o(t.M()),
        _.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            steamid: {
              n: 1,
              br: f.readFixed64String,
              bw: e.writeFixed64String,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= a(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return r(t.M(), e, n);
    }
    static fromObject(e) {
      return l(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new _.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new _.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      d(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new _.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CStore_GetGamesFollowedCount_Request`;
    }
  },
  R = class t extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.followed_game_count || o(t.M()),
        _.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            followed_game_count: { n: 1, br: f.readUint32, bw: e.writeUint32 },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= a(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return r(t.M(), e, n);
    }
    static fromObject(e) {
      return l(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new _.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new _.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      d(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new _.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CStore_GetGamesFollowedCount_Response`;
    }
  },
  z = class t extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.appid || o(t.M()),
        _.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            appid: { n: 1, br: f.readUint32, bw: e.writeUint32 },
            report_type: { n: 2, br: f.readEnum, bw: e.writeEnum },
            report: { n: 3, br: f.readString, bw: e.writeString },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= a(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return r(t.M(), e, n);
    }
    static fromObject(e) {
      return l(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new _.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new _.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      d(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new _.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CStore_ReportApp_Request`;
    }
  },
  B = class e extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), _.Message.initialize(this, e, 0, -1, void 0, null));
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
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new _.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_ReportApp_Response`;
    }
  },
  V = class t extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.primary_language || o(t.M()),
        _.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            primary_language: { n: 1, br: f.readInt32, bw: e.writeInt32 },
            secondary_languages: {
              n: 2,
              br: f.readUint64String,
              bw: e.writeUint64String,
            },
            platform_windows: { n: 3, br: f.readBool, bw: e.writeBool },
            platform_mac: { n: 4, br: f.readBool, bw: e.writeBool },
            platform_linux: { n: 5, br: f.readBool, bw: e.writeBool },
            timestamp_updated: { n: 8, br: f.readUint32, bw: e.writeUint32 },
            hide_store_broadcast: { n: 9, br: f.readBool, bw: e.writeBool },
            review_score_preference: { n: 10, br: f.readEnum, bw: e.writeEnum },
            timestamp_content_descriptor_preferences_updated: {
              n: 11,
              br: f.readInt32,
              bw: e.writeInt32,
            },
            provide_deck_feedback: { n: 12, br: f.readEnum, bw: e.writeEnum },
            additional_languages: {
              n: 13,
              br: f.readString,
              bw: e.writeString,
            },
            game_frame_rate_reporting: {
              n: 14,
              br: f.readEnum,
              bw: e.writeEnum,
            },
            disable_microtrailers: { n: 15, br: f.readBool, bw: e.writeBool },
            disable_animated_marketing: {
              n: 16,
              br: f.readBool,
              bw: e.writeBool,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= a(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return r(t.M(), e, n);
    }
    static fromObject(e) {
      return l(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new _.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new _.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      d(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new _.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CStore_UserPreferences`;
    }
  },
  H = class e extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.tags_to_exclude || o(e.M()),
        _.Message.initialize(this, t, 0, -1, [1], null));
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
      return ((e.sm_mbf ||= a(e.M())), e.sm_mbf);
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
      let n = new _.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return i(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new _.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      d(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new _.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_UserTagPreferences`;
    }
  },
  U = class t extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.tagid || o(t.M()),
        _.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            tagid: { n: 1, br: f.readUint32, bw: e.writeUint32 },
            name: { n: 2, br: f.readString, bw: e.writeString },
            timestamp_added: { n: 3, br: f.readUint32, bw: e.writeUint32 },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= a(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return r(t.M(), e, n);
    }
    static fromObject(e) {
      return l(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new _.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new _.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      d(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new _.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CStore_UserTagPreferences_Tag`;
    }
  },
  W = class t extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.country_code || o(t.M()),
        _.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            country_code: { n: 1, br: f.readString, bw: e.writeString },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= a(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return r(t.M(), e, n);
    }
    static fromObject(e) {
      return l(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new _.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new _.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      d(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new _.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CStore_GetStorePreferences_Request`;
    }
  },
  G = class e extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.preferences || o(e.M()),
        _.Message.initialize(this, t, 0, -1, void 0, null));
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
            content_descriptor_preferences: { n: 3, c: s },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= a(e.M())), e.sm_mbf);
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
      let n = new _.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return i(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new _.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      d(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new _.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_GetStorePreferences_Response`;
    }
  },
  le = class t extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.num_apps || o(t.M()),
        _.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            num_apps: { n: 1, br: f.readUint32, bw: e.writeUint32 },
            num_top_friends: { n: 2, br: f.readUint32, bw: e.writeUint32 },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= a(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return r(t.M(), e, n);
    }
    static fromObject(e) {
      return l(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new _.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new _.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      d(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new _.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CStore_GetTrendingAppsAmongFriends_Request`;
    }
  },
  ue = class e extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.trending_apps || o(e.M()),
        _.Message.initialize(this, t, 0, -1, [1], null));
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
      return ((e.sm_mbf ||= a(e.M())), e.sm_mbf);
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
      let n = new _.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return i(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new _.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      d(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new _.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_GetTrendingAppsAmongFriends_Response`;
    }
  },
  de = class t extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.appid || o(t.M()),
        _.Message.initialize(this, e, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            appid: { n: 1, br: f.readUint32, bw: e.writeUint32 },
            steamids_top_friends: {
              n: 2,
              r: !0,
              q: !0,
              br: f.readUint64String,
              pbr: f.readPackedUint64String,
              bw: e.writeRepeatedUint64String,
            },
            total_friends: { n: 3, br: f.readUint32, bw: e.writeUint32 },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= a(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return r(t.M(), e, n);
    }
    static fromObject(e) {
      return l(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new _.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new _.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      d(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new _.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CStore_GetTrendingAppsAmongFriends_Response_TrendingAppData`;
    }
  },
  fe = class t extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.packages_to_reserve || o(t.M()),
        _.Message.initialize(this, e, 0, -1, [1, 2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            packages_to_reserve: {
              n: 1,
              r: !0,
              q: !0,
              br: f.readUint32,
              pbr: f.readPackedUint32,
              bw: e.writeRepeatedUint32,
            },
            packages_to_unreserve: {
              n: 2,
              r: !0,
              q: !0,
              br: f.readUint32,
              pbr: f.readPackedUint32,
              bw: e.writeRepeatedUint32,
            },
            country_code: { n: 3, br: f.readString, bw: e.writeString },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= a(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return r(t.M(), e, n);
    }
    static fromObject(e) {
      return l(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new _.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new _.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      d(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new _.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CStore_UpdatePackageReservations_Request`;
    }
  },
  pe = class e extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.reservation_status || o(e.M()),
        _.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { reservation_status: { n: 1, c, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= a(e.M())), e.sm_mbf);
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
      let n = new _.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return i(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new _.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      d(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new _.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_UpdatePackageReservations_Response`;
    }
  },
  K = class t extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.edistributor || o(t.M()),
        _.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            edistributor: { n: 1, br: f.readUint32, bw: e.writeUint32 },
            product_identifier: { n: 2, br: f.readString, bw: e.writeString },
            start_queue_position: { n: 3, br: f.readUint32, bw: e.writeUint32 },
            rtime_estimated_notification: {
              n: 4,
              br: f.readUint32,
              bw: e.writeUint32,
            },
            localization_token: { n: 5, br: f.readString, bw: e.writeString },
            accountid: { n: 6, br: f.readUint32, bw: e.writeUint32 },
            rtime_created: { n: 7, br: f.readUint32, bw: e.writeUint32 },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= a(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return r(t.M(), e, n);
    }
    static fromObject(e) {
      return l(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new _.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new _.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      d(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new _.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CReservationPositionMessage`;
    }
  },
  q = class e extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.settings || o(e.M()),
        _.Message.initialize(this, t, 0, -1, [1], null));
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
      return ((e.sm_mbf ||= a(e.M())), e.sm_mbf);
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
      let n = new _.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return i(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new _.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      d(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new _.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_SetReservationPositionMessage_Request`;
    }
  },
  me = class e extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), _.Message.initialize(this, e, 0, -1, void 0, null));
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
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new _.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_SetReservationPositionMessage_Response`;
    }
  },
  J = class t extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.edistributor || o(t.M()),
        _.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            edistributor: { n: 1, br: f.readUint32, bw: e.writeUint32 },
            product_identifier: { n: 2, br: f.readString, bw: e.writeString },
            start_queue_position: { n: 3, br: f.readUint32, bw: e.writeUint32 },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= a(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return r(t.M(), e, n);
    }
    static fromObject(e) {
      return l(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new _.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new _.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      d(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new _.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CStore_DeleteReservationPositionMessage_Request`;
    }
  },
  he = class e extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), _.Message.initialize(this, e, 0, -1, void 0, null));
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
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new _.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_DeleteReservationPositionMessage_Response`;
    }
  },
  ge = class e extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), _.Message.initialize(this, e, 0, -1, void 0, null));
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
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new _.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_GetAllReservationPositionMessages_Request`;
    }
  },
  _e = class e extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.settings || o(e.M()),
        _.Message.initialize(this, t, 0, -1, [1], null));
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
      return ((e.sm_mbf ||= a(e.M())), e.sm_mbf);
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
      let n = new _.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return i(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new _.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      d(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new _.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_GetAllReservationPositionMessages_Response`;
    }
  },
  Y = class e extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), _.Message.initialize(this, e, 0, -1, void 0, null));
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
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new _.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_ReloadAllReservationPositionMessages_Notification`;
    }
  },
  ve = class t extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.accountid || o(t.M()),
        _.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            accountid: { n: 1, br: f.readUint32, bw: e.writeUint32 },
            browserid: {
              n: 2,
              br: f.readUint64String,
              bw: e.writeUint64String,
            },
            backfill_source: { n: 3, br: f.readEnum, bw: e.writeEnum },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= a(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return r(t.M(), e, n);
    }
    static fromObject(e) {
      return l(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new _.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new _.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      d(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new _.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CStore_MigratePartnerLinkTracking_Notification`;
    }
  },
  ye = class t extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.appid || o(t.M()),
        _.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            appid: { n: 1, br: f.readUint32, bw: e.writeUint32 },
            feedback: { n: 2, br: f.readEnum, bw: e.writeEnum },
            feedback_details: { n: 3, br: f.readUint32, bw: e.writeUint32 },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= a(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return r(t.M(), e, n);
    }
    static fromObject(e) {
      return l(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new _.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new _.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      d(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new _.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CSteamDeckCompatibility_SetFeedback_Request`;
    }
  },
  be = class e extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), _.Message.initialize(this, e, 0, -1, void 0, null));
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
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new _.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamDeckCompatibility_SetFeedback_Response`;
    }
  },
  xe = class t extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.appid || o(t.M()),
        _.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: { appid: { n: 1, br: f.readUint32, bw: e.writeUint32 } },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= a(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return r(t.M(), e, n);
    }
    static fromObject(e) {
      return l(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new _.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new _.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      d(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new _.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CSteamDeckCompatibility_ShouldPrompt_Request`;
    }
  },
  Se = class t extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.prompt || o(t.M()),
        _.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            prompt: { n: 1, br: f.readBool, bw: e.writeBool },
            feedback_eligible: { n: 2, br: f.readBool, bw: e.writeBool },
            existing_feedback: { n: 3, br: f.readEnum, bw: e.writeEnum },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= a(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return r(t.M(), e, n);
    }
    static fromObject(e) {
      return l(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new _.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new _.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      d(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new _.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CSteamDeckCompatibility_ShouldPrompt_Response`;
    }
  },
  X = class t extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.appid || o(t.M()),
        _.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            appid: { n: 1, br: f.readUint32, bw: e.writeUint32 },
            demo_appid: { n: 2, br: f.readUint32, bw: e.writeUint32 },
            allow_late_firing: { n: 3, br: f.readBool, bw: e.writeBool },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= a(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return r(t.M(), e, n);
    }
    static fromObject(e) {
      return l(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new _.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new _.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      d(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new _.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CStore_GetWishlistDemoEmailStatus_Request`;
    }
  },
  Ce = class t extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.can_fire || o(t.M()),
        _.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            can_fire: { n: 1, d: !1, br: f.readBool, bw: e.writeBool },
            time_staged: { n: 2, br: f.readUint32, bw: e.writeUint32 },
            demo_release_date: { n: 3, br: f.readUint32, bw: e.writeUint32 },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= a(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return r(t.M(), e, n);
    }
    static fromObject(e) {
      return l(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new _.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new _.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      d(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new _.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CStore_GetWishlistDemoEmailStatus_Response`;
    }
  },
  Z = class t extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.appid || o(t.M()),
        _.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            appid: { n: 1, br: f.readUint32, bw: e.writeUint32 },
            demo_appid: { n: 2, br: f.readUint32, bw: e.writeUint32 },
            allow_late_firing: { n: 3, br: f.readBool, bw: e.writeBool },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= a(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return r(t.M(), e, n);
    }
    static fromObject(e) {
      return l(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new _.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new _.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      d(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new _.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CStore_QueueWishlistDemoEmailToFire_Request`;
    }
  },
  we = class e extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), _.Message.initialize(this, e, 0, -1, void 0, null));
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
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new _.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_QueueWishlistDemoEmailToFire_Response`;
    }
  },
  Te = class t extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.steamid || o(t.M()),
        _.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            steamid: {
              n: 1,
              br: f.readFixed64String,
              bw: e.writeFixed64String,
            },
            queue_type: { n: 2, br: f.readEnum, bw: e.writeEnum },
            store_page_filter: { n: 3, c: p },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= a(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return r(t.M(), e, n);
    }
    static fromObject(e) {
      return l(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new _.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new _.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      d(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new _.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CStore_GetDiscoveryQueueSkippedApps_Request`;
    }
  },
  Ee = class t extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.appids || o(t.M()),
        _.Message.initialize(this, e, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            appids: {
              n: 1,
              r: !0,
              q: !0,
              br: f.readUint32,
              pbr: f.readPackedUint32,
              bw: e.writeRepeatedUint32,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= a(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return r(t.M(), e, n);
    }
    static fromObject(e) {
      return l(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new _.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new _.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      d(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new _.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CStore_GetDiscoveryQueueSkippedApps_Response`;
    }
  },
  De = class e extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.preferences || o(e.M()),
        _.Message.initialize(this, t, 0, -1, void 0, null));
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
            content_descriptor_preferences: { n: 3, c: s },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= a(e.M())), e.sm_mbf);
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
      let n = new _.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return i(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new _.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      d(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new _.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_StorePreferencesChanged_Notification`;
    }
  },
  Oe = class t extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.appid || o(t.M()),
        _.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            appid: { n: 1, br: f.readUint32, bw: e.writeUint32 },
            steamid: {
              n: 2,
              br: f.readFixed64String,
              bw: e.writeFixed64String,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= a(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return r(t.M(), e, n);
    }
    static fromObject(e) {
      return l(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new _.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new _.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      d(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new _.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPlaytest_RequestInvite_Request`;
    }
  },
  ke = class t extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.invites_remaining || o(t.M()),
        _.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            invites_remaining: { n: 1, br: f.readInt32, bw: e.writeInt32 },
            status: { n: 2, br: f.readEnum, bw: e.writeEnum },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= a(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return r(t.M(), e, n);
    }
    static fromObject(e) {
      return l(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new _.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new _.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      d(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new _.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPlaytest_RequestInvite_Response`;
    }
  },
  Ae = class t extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.invite_ids || o(t.M()),
        _.Message.initialize(this, e, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            invite_ids: {
              n: 1,
              r: !0,
              q: !0,
              br: f.readUint64String,
              pbr: f.readPackedUint64String,
              bw: e.writeRepeatedUint64String,
            },
            status: { n: 2, br: f.readEnum, bw: e.writeEnum },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= a(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return r(t.M(), e, n);
    }
    static fromObject(e) {
      return l(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new _.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new _.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      d(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new _.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPlaytest_UpdateInvites_Request`;
    }
  },
  je = class t extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.invites_updated || o(t.M()),
        _.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            invites_updated: { n: 1, br: f.readUint32, bw: e.writeUint32 },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= a(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return r(t.M(), e, n);
    }
    static fromObject(e) {
      return l(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new _.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new _.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      d(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new _.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPlaytest_UpdateInvites_Response`;
    }
  },
  Me = class t extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.invite_id || o(t.M()),
        _.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            invite_id: {
              n: 1,
              br: f.readUint64String,
              bw: e.writeUint64String,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= a(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return r(t.M(), e, n);
    }
    static fromObject(e) {
      return l(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new _.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new _.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      d(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new _.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPlaytest_GetInvites_Request`;
    }
  },
  Ne = class e extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.invites || o(e.M()),
        _.Message.initialize(this, t, 0, -1, [1], null));
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
      return ((e.sm_mbf ||= a(e.M())), e.sm_mbf);
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
      let n = new _.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return i(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new _.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      d(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new _.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPlaytest_GetInvites_Response`;
    }
  },
  Pe = class t extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.invite_id || o(t.M()),
        _.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            invite_id: {
              n: 1,
              br: f.readUint64String,
              bw: e.writeUint64String,
            },
            appid: { n: 2, br: f.readUint32, bw: e.writeUint32 },
            steamid_inviter: {
              n: 3,
              br: f.readFixed64String,
              bw: e.writeFixed64String,
            },
            status: { n: 4, br: f.readEnum, bw: e.writeEnum },
            time_created: { n: 5, br: f.readUint32, bw: e.writeUint32 },
            app_name: { n: 6, br: f.readString, bw: e.writeString },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= a(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return r(t.M(), e, n);
    }
    static fromObject(e) {
      return l(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new _.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new _.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      d(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new _.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPlaytest_GetInvites_Response_Invite`;
    }
  },
  Fe = class t extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.limit || o(t.M()),
        _.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            limit: { n: 1, br: f.readUint32, bw: e.writeUint32 },
            time_before: { n: 2, br: f.readUint32, bw: e.writeUint32 },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= a(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return r(t.M(), e, n);
    }
    static fromObject(e) {
      return l(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new _.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new _.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      d(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new _.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPlaytest_GetInviteHistory_Request`;
    }
  },
  Q = class e extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.invites || o(e.M()),
        _.Message.initialize(this, t, 0, -1, [1], null));
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
      return ((e.sm_mbf ||= a(e.M())), e.sm_mbf);
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
      let n = new _.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return i(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new _.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      d(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new _.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPlaytest_GetInviteHistory_Response`;
    }
  },
  Ie = class t extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.appid || o(t.M()),
        _.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            appid: { n: 1, br: f.readUint32, bw: e.writeUint32 },
            steamid_invited: {
              n: 2,
              br: f.readFixed64String,
              bw: e.writeFixed64String,
            },
            time_created: { n: 3, br: f.readUint32, bw: e.writeUint32 },
            app_name: { n: 4, br: f.readString, bw: e.writeString },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= a(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return r(t.M(), e, n);
    }
    static fromObject(e) {
      return l(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new _.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new _.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      d(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new _.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPlaytest_GetInviteHistory_Response_Invite`;
    }
  },
  Le = class t extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.appid || o(t.M()),
        _.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: { appid: { n: 1, br: f.readUint32, bw: e.writeUint32 } },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= a(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return r(t.M(), e, n);
    }
    static fromObject(e) {
      return l(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new _.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new _.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      d(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new _.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPlaytest_GetUserStatus_Request`;
    }
  },
  Re = class e extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.results || o(e.M()),
        _.Message.initialize(this, t, 0, -1, [1], null));
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
      return ((e.sm_mbf ||= a(e.M())), e.sm_mbf);
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
      let n = new _.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return i(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new _.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      d(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new _.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPlaytest_GetUserStatus_Response`;
    }
  },
  ze = class t extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.appid || o(t.M()),
        _.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            appid: { n: 1, br: f.readUint32, bw: e.writeUint32 },
            status: { n: 2, br: f.readEnum, bw: e.writeEnum },
            invites_remaining: { n: 3, br: f.readInt32, bw: e.writeInt32 },
            time_joined: { n: 4, br: f.readUint32, bw: e.writeUint32 },
            packageid: { n: 5, br: f.readUint32, bw: e.writeUint32 },
            invites_sent: { n: 6, br: f.readInt32, bw: e.writeInt32 },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= a(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return r(t.M(), e, n);
    }
    static fromObject(e) {
      return l(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new _.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new _.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      d(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new _.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPlaytest_GetUserStatus_Response_AppStatus`;
    }
  },
  Be = class t extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.appid || o(t.M()),
        _.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: { appid: { n: 1, br: f.readUint32, bw: e.writeUint32 } },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= a(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return r(t.M(), e, n);
    }
    static fromObject(e) {
      return l(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new _.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new _.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      d(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new _.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPlaytest_GetInviteOptions_Request`;
    }
  },
  Ve = class t extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.ineligible_friends || o(t.M()),
        _.Message.initialize(this, e, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            ineligible_friends: {
              n: 1,
              r: !0,
              q: !0,
              br: f.readUint32,
              pbr: f.readPackedUint32,
              bw: e.writeRepeatedUint32,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= a(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return r(t.M(), e, n);
    }
    static fromObject(e) {
      return l(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new _.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new _.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      d(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new _.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPlaytest_GetInviteOptions_Response`;
    }
  },
  $;
(function (e) {
  function n(e, n, r) {
    return e.SendMsg(`Store.RegisterCDKey#1`, t(ee, n, r), b, {
      ePrivilege: 1,
    });
  }
  e.RegisterCDKey = n;
  function r(e, n, r) {
    return e.SendMsg(`Store.GetRecommendedTagsForUser#1`, t(x, n, r), te, {
      bConstMethod: !0,
      ePrivilege: 1,
      rgBrowserAPISites: [`store`],
    });
  }
  e.GetRecommendedTagsForUser = r;
  function i(e, n, r) {
    return e.SendMsg(`Store.GetMostPopularTags#1`, t(ne, n, r), re, {
      bConstMethod: !0,
      ePrivilege: 1,
      eWebAPIKeyRequirement: 1,
    });
  }
  e.GetMostPopularTags = i;
  function a(e, n, r) {
    return e.SendMsg(`Store.GetLocalizedNameForTags#1`, t(w, n, r), T, {
      bConstMethod: !0,
      ePrivilege: 1,
      eWebAPIKeyRequirement: 1,
    });
  }
  e.GetLocalizedNameForTags = a;
  function o(e, n, r) {
    return e.SendMsg(`Store.GetTagList#1`, t(D, n, r), ie, {
      bConstMethod: !0,
      ePrivilege: 1,
      eWebAPIKeyRequirement: 1,
      rgBrowserAPISites: [`all`],
    });
  }
  e.GetTagList = o;
  function s(e, n, r) {
    return e.SendMsg(`Store.GetDiscoveryQueue#1`, t(A, n, r), ae, {
      bConstMethod: !0,
      ePrivilege: 1,
      rgBrowserAPISites: [`all`],
    });
  }
  e.GetDiscoveryQueue = s;
  function c(e, n, r) {
    return e.SendMsg(`Store.GetDiscoveryQueueSettings#1`, t(oe, n, r), se, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  e.GetDiscoveryQueueSettings = c;
  function l(e, n, r) {
    return e.SendMsg(`Store.SkipDiscoveryQueueItem#1`, t(ce, n, r), j, {
      ePrivilege: 1,
      rgBrowserAPISites: [`all`],
    });
  }
  e.SkipDiscoveryQueueItem = l;
  function u(e, n, r) {
    return e.SendMsg(`Store.GetUserGameInterestState#1`, t(M, n, r), N, {
      ePrivilege: 1,
    });
  }
  e.GetUserGameInterestState = u;
  function d(e, n, r) {
    return e.SendMsg(`Store.GetGamesFollowed#1`, t(F, n, r), I, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
      rgBrowserAPISites: [`all`],
    });
  }
  e.GetGamesFollowed = d;
  function f(e, n, r) {
    return e.SendMsg(`Store.GetGamesFollowedCount#1`, t(L, n, r), R, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
      rgBrowserAPISites: [`all`],
    });
  }
  e.GetGamesFollowedCount = f;
  function p(e, n, r) {
    return e.SendMsg(`Store.GetDiscoveryQueueSkippedApps#1`, t(Te, n, r), Ee, {
      bConstMethod: !0,
      ePrivilege: 1,
      rgBrowserAPISites: [`all`],
    });
  }
  e.GetDiscoveryQueueSkippedApps = p;
  function m(e, n, r) {
    return e.SendMsg(`Store.ReportApp#1`, t(z, n, r), B, { ePrivilege: 3 });
  }
  e.ReportApp = m;
  function h(e, n, r) {
    return e.SendMsg(`Store.GetStorePreferences#1`, t(W, n, r), G, {
      bConstMethod: !0,
      ePrivilege: 1,
      rgBrowserAPISites: [`all`],
    });
  }
  e.GetStorePreferences = h;
  function g(e, n, r) {
    return e.SendMsg(`Store.GetTrendingAppsAmongFriends#1`, t(le, n, r), ue, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  e.GetTrendingAppsAmongFriends = g;
  function _(e, n) {
    return e.SendNotification(`Store.MigratePartnerLinkTracking#1`, t(ve, n), {
      ePrivilege: 1,
    });
  }
  e.MigratePartnerLinkTracking = _;
  function v(e, n, r) {
    return e.SendMsg(`Store.UpdatePackageReservations#1`, t(fe, n, r), pe, {
      ePrivilege: 1,
      rgBrowserAPISites: [`all`],
    });
  }
  e.UpdatePackageReservations = v;
  function y(e, n, r) {
    return e.SendMsg(`Store.GetWishlistDemoEmailStatus#1`, t(X, n, r), Ce, {
      ePrivilege: 1,
      rgBrowserAPISites: [`partner`],
    });
  }
  e.GetWishlistDemoEmailStatus = y;
  function S(e, n, r) {
    return e.SendMsg(`Store.QueueWishlistDemoEmailToFire#1`, t(Z, n, r), we, {
      ePrivilege: 1,
      rgBrowserAPISites: [`partner`],
    });
  }
  e.QueueWishlistDemoEmailToFire = S;
  function C(e, n, r) {
    return e.SendMsg(`Store.SetReservationPositionMessage#1`, t(q, n, r), me, {
      ePrivilege: 4,
      rgBrowserAPISites: [`partner`],
    });
  }
  e.SetReservationPositionMessage = C;
  function E(e, n, r) {
    return e.SendMsg(
      `Store.DeleteReservationPositionMessage#1`,
      t(J, n, r),
      he,
      { ePrivilege: 4, rgBrowserAPISites: [`partner`] },
    );
  }
  e.DeleteReservationPositionMessage = E;
  function O(e, n, r) {
    return e.SendMsg(
      `Store.GetAllReservationPositionMessages#1`,
      t(ge, n, r),
      _e,
      { bConstMethod: !0, ePrivilege: 4 },
    );
  }
  e.GetAllReservationPositionMessages = O;
  function k(e, n) {
    return e.SendNotification(
      `Store.ReloadAllReservationPositionMessages#1`,
      t(Y, n),
      { ePrivilege: 4, rgBrowserAPISites: [`partner`] },
    );
  }
  e.ReloadAllReservationPositionMessages = k;
  function P(e, n, r) {
    return e.SendMsg(`Store.SetCompatibilityFeedback#1`, t(ye, n, r), be, {
      ePrivilege: 1,
    });
  }
  e.SetCompatibilityFeedback = P;
  function V(e, n, r) {
    return e.SendMsg(
      `Store.ShouldPromptForCompatibilityFeedback#1`,
      t(xe, n, r),
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
  function n(e, n, r) {
    return e.SendMsg(`Playtest.RequestInvite#1`, t(Oe, n, r), ke, {
      ePrivilege: 1,
      rgBrowserAPISites: [`store`],
    });
  }
  e.RequestInvite = n;
  function r(e, n, r) {
    return e.SendMsg(`Playtest.UpdateInvites#1`, t(Ae, n, r), je, {
      ePrivilege: 1,
      rgBrowserAPISites: [`store`],
    });
  }
  e.UpdateInvites = r;
  function i(e, n, r) {
    return e.SendMsg(`Playtest.GetInvites#1`, t(Me, n, r), Ne, {
      ePrivilege: 1,
      rgBrowserAPISites: [`store`],
    });
  }
  e.GetInvites = i;
  function a(e, n, r) {
    return e.SendMsg(`Playtest.GetInviteHistory#1`, t(Fe, n, r), Q, {
      ePrivilege: 1,
      rgBrowserAPISites: [`store`],
    });
  }
  e.GetInviteHistory = a;
  function o(e, n, r) {
    return e.SendMsg(`Playtest.GetUserStatus#1`, t(Le, n, r), Re, {
      ePrivilege: 1,
      rgBrowserAPISites: [`store`],
    });
  }
  e.GetUserStatus = o;
  function s(e, n, r) {
    return e.SendMsg(`Playtest.GetInviteOptions#1`, t(Be, n, r), Ve, {
      ePrivilege: 1,
      rgBrowserAPISites: [`store`],
    });
  }
  e.GetInviteOptions = s;
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
