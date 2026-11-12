/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import {
  Gt as e,
  Ht as t,
  Jt as n,
  Kt as r,
  Ut as i,
  Vt as a,
  Wt as o,
  Xt as s,
  Yt as c,
  Zt as l,
  bt as u,
  qt as d,
  sn as f,
} from "./chunk~de7f2df91c.js";
import { B as p, F as m, I as h, R as g } from "./chunk~44f252525d.js";
var _ = f(l(), 1),
  ee = class t extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.activation_code || i(t.M()),
        _.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            activation_code: { n: 1, br: r.readString, bw: s.writeString },
            purchase_platform: { n: 2, br: r.readInt32, bw: s.writeInt32 },
            is_request_from_client: { n: 3, br: r.readBool, bw: s.writeBool },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= d(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return c(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new _.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return o(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new _.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
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
        t.prototype.transactionid || i(t.M()),
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
              br: r.readUint64String,
              bw: s.writeUint64String,
            },
            packageid: { n: 2, br: r.readUint32, bw: s.writeUint32 },
            purchase_status: { n: 3, br: r.readUint32, bw: s.writeUint32 },
            result_detail: { n: 4, br: r.readUint32, bw: s.writeUint32 },
            transaction_time: { n: 5, br: r.readUint32, bw: s.writeUint32 },
            payment_method: { n: 6, br: r.readUint32, bw: s.writeUint32 },
            base_price: {
              n: 7,
              br: r.readUint64String,
              bw: s.writeUint64String,
            },
            total_discount: {
              n: 8,
              br: r.readUint64String,
              bw: s.writeUint64String,
            },
            tax: { n: 9, br: r.readUint64String, bw: s.writeUint64String },
            shipping: {
              n: 10,
              br: r.readUint64String,
              bw: s.writeUint64String,
            },
            currency_code: { n: 11, br: r.readUint32, bw: s.writeUint32 },
            country_code: { n: 12, br: r.readString, bw: s.writeString },
            error_headline: { n: 13, br: r.readString, bw: s.writeString },
            error_string: { n: 14, br: r.readString, bw: s.writeString },
            error_link_text: { n: 15, br: r.readString, bw: s.writeString },
            error_link_url: { n: 16, br: r.readString, bw: s.writeString },
            error_appid: { n: 17, br: r.readUint32, bw: s.writeUint32 },
            line_items: { n: 18, c: y, r: !0, q: !0 },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= d(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return c(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new _.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return o(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new _.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
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
        t.prototype.packageid || i(t.M()),
        _.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            packageid: { n: 1, br: r.readUint32, bw: s.writeUint32 },
            appid: { n: 2, br: r.readUint32, bw: s.writeUint32 },
            line_item_description: {
              n: 3,
              br: r.readString,
              bw: s.writeString,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= d(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return c(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new _.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return o(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new _.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
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
        t.prototype.purchase_result_details || i(t.M()),
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
              br: r.readInt32,
              bw: s.writeInt32,
            },
            purchase_receipt_info: { n: 2, c: v },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= d(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return c(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new _.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return o(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new _.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
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
        t.prototype.language || i(t.M()),
        _.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            language: { n: 2, br: r.readString, bw: s.writeString },
            country_code: { n: 3, br: r.readString, bw: s.writeString },
            favor_rarer_tags: { n: 4, br: r.readBool, bw: s.writeBool },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= d(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return c(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new _.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return o(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new _.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new _.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CStore_GetRecommendedTagsForUser_Request`;
    }
  },
  te = class t extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.tags || i(t.M()),
        _.Message.initialize(this, e, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: { tags: { n: 1, c: S, r: !0, q: !0 } },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= d(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return c(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new _.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return o(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new _.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new _.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CStore_GetRecommendedTagsForUser_Response`;
    }
  },
  S = class t extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.tagid || i(t.M()),
        _.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            tagid: { n: 1, br: r.readUint32, bw: s.writeUint32 },
            name: { n: 2, br: r.readString, bw: s.writeString },
            weight: { n: 3, br: r.readFloat, bw: s.writeFloat },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= d(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return c(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new _.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return o(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new _.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
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
        t.prototype.language || i(t.M()),
        _.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: { language: { n: 1, br: r.readString, bw: s.writeString } },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= d(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return c(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new _.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return o(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new _.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new _.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CStore_GetMostPopularTags_Request`;
    }
  },
  re = class t extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.tags || i(t.M()),
        _.Message.initialize(this, e, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: { tags: { n: 1, c: C, r: !0, q: !0 } },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= d(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return c(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new _.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return o(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new _.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new _.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CStore_GetMostPopularTags_Response`;
    }
  },
  C = class t extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.tagid || i(t.M()),
        _.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            tagid: { n: 1, br: r.readUint32, bw: s.writeUint32 },
            name: { n: 2, br: r.readString, bw: s.writeString },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= d(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return c(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new _.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return o(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new _.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
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
        t.prototype.language || i(t.M()),
        _.Message.initialize(this, e, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            language: { n: 1, br: r.readString, bw: s.writeString },
            tagids: {
              n: 2,
              r: !0,
              q: !0,
              br: r.readUint32,
              pbr: r.readPackedUint32,
              bw: s.writeRepeatedUint32,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= d(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return c(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new _.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return o(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new _.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new _.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CStore_GetLocalizedNameForTags_Request`;
    }
  },
  T = class t extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.tags || i(t.M()),
        _.Message.initialize(this, e, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: { tags: { n: 1, c: E, r: !0, q: !0 } },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= d(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return c(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new _.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return o(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new _.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new _.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CStore_GetLocalizedNameForTags_Response`;
    }
  },
  E = class t extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.tagid || i(t.M()),
        _.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            tagid: { n: 1, br: r.readUint32, bw: s.writeUint32 },
            english_name: { n: 2, br: r.readString, bw: s.writeString },
            name: { n: 3, br: r.readString, bw: s.writeString },
            normalized_name: { n: 4, br: r.readString, bw: s.writeString },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= d(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return c(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new _.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return o(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new _.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
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
        t.prototype.language || i(t.M()),
        _.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            language: { n: 1, br: r.readString, bw: s.writeString },
            have_version_hash: { n: 2, br: r.readString, bw: s.writeString },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= d(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return c(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new _.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return o(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new _.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
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
        t.prototype.version_hash || i(t.M()),
        _.Message.initialize(this, e, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            version_hash: { n: 1, br: r.readString, bw: s.writeString },
            tags: { n: 2, c: O, r: !0, q: !0 },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= d(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return c(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new _.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return o(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new _.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
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
        t.prototype.tagid || i(t.M()),
        _.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            tagid: { n: 1, br: r.readUint32, bw: s.writeUint32 },
            name: { n: 2, br: r.readString, bw: s.writeString },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= d(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return c(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new _.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return o(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new _.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
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
        t.prototype.os_win || i(t.M()),
        _.Message.initialize(this, e, 0, -1, [10, 16], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            os_win: { n: 4, br: r.readBool, bw: s.writeBool },
            os_mac: { n: 5, br: r.readBool, bw: s.writeBool },
            os_linux: { n: 6, br: r.readBool, bw: s.writeBool },
            full_controller_support: { n: 7, br: r.readBool, bw: s.writeBool },
            native_steam_controller: { n: 8, br: r.readBool, bw: s.writeBool },
            include_coming_soon: { n: 9, br: r.readBool, bw: s.writeBool },
            excluded_tagids: {
              n: 10,
              r: !0,
              q: !0,
              br: r.readUint32,
              pbr: r.readPackedUint32,
              bw: s.writeRepeatedUint32,
            },
            exclude_early_access: { n: 11, br: r.readBool, bw: s.writeBool },
            exclude_videos: { n: 12, br: r.readBool, bw: s.writeBool },
            exclude_software: { n: 13, br: r.readBool, bw: s.writeBool },
            exclude_dlc: { n: 14, br: r.readBool, bw: s.writeBool },
            exclude_soundtracks: { n: 15, br: r.readBool, bw: s.writeBool },
            featured_tagids: {
              n: 16,
              r: !0,
              q: !0,
              br: r.readUint32,
              pbr: r.readPackedUint32,
              bw: s.writeRepeatedUint32,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= d(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return c(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new _.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return o(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new _.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
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
        t.prototype.queue_type || i(t.M()),
        _.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            queue_type: { n: 1, br: r.readEnum, bw: s.writeEnum },
            country_code: { n: 2, br: r.readString, bw: s.writeString },
            rebuild_queue: { n: 3, br: r.readBool, bw: s.writeBool },
            settings_changed: { n: 4, br: r.readBool, bw: s.writeBool },
            settings: { n: 5, c: k },
            rebuild_queue_if_stale: { n: 6, br: r.readBool, bw: s.writeBool },
            ignore_user_preferences: { n: 8, br: r.readBool, bw: s.writeBool },
            no_experimental_results: { n: 9, br: r.readBool, bw: s.writeBool },
            experimental_cohort: { n: 10, br: r.readUint32, bw: s.writeUint32 },
            debug_get_solr_query: { n: 11, br: r.readBool, bw: s.writeBool },
            store_page_filter: { n: 12, c: p },
            context: { n: 13, c: m },
            data_request: { n: 14, c: h },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= d(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return c(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new _.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return o(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new _.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
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
        t.prototype.appids || i(t.M()),
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
              br: r.readUint32,
              pbr: r.readPackedUint32,
              bw: s.writeRepeatedUint32,
            },
            country_code: { n: 2, br: r.readString, bw: s.writeString },
            settings: { n: 3, c: k },
            skipped: { n: 4, br: r.readInt32, bw: s.writeInt32 },
            exhausted: { n: 5, br: r.readBool, bw: s.writeBool },
            experimental_cohort: { n: 6, br: r.readUint32, bw: s.writeUint32 },
            debug_solr_query: { n: 7, br: r.readString, bw: s.writeString },
            store_items: { n: 8, c: g, r: !0, q: !0 },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= d(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return c(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new _.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return o(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new _.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
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
        t.prototype.queue_type || i(t.M()),
        _.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            queue_type: { n: 1, br: r.readEnum, bw: s.writeEnum },
            store_page_filter: { n: 2, c: p },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= d(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return c(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new _.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return o(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new _.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
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
        t.prototype.country_code || i(t.M()),
        _.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            country_code: { n: 1, br: r.readString, bw: s.writeString },
            settings: { n: 2, c: k },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= d(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return c(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new _.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return o(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new _.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
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
        t.prototype.queue_type || i(t.M()),
        _.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            queue_type: { n: 1, br: r.readEnum, bw: s.writeEnum },
            appid: { n: 2, br: r.readUint32, bw: s.writeUint32 },
            store_page_filter: { n: 3, c: p },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= d(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return c(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new _.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return o(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new _.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
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
        t.prototype.appid || i(t.M()),
        _.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            appid: { n: 1, br: r.readUint32, bw: s.writeUint32 },
            store_appid: { n: 2, br: r.readUint32, bw: s.writeUint32 },
            beta_appid: { n: 3, br: r.readUint32, bw: s.writeUint32 },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= d(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return c(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new _.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return o(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new _.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
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
        t.prototype.owned || i(t.M()),
        _.Message.initialize(this, e, 0, -1, [5, 6, 7, 8, 10], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            owned: { n: 1, br: r.readBool, bw: s.writeBool },
            wishlist: { n: 2, br: r.readBool, bw: s.writeBool },
            ignored: { n: 3, br: r.readBool, bw: s.writeBool },
            following: { n: 4, br: r.readBool, bw: s.writeBool },
            in_queues: {
              n: 5,
              r: !0,
              q: !0,
              br: r.readEnum,
              pbr: r.readPackedEnum,
              bw: s.writeRepeatedEnum,
            },
            queues_with_skip: {
              n: 6,
              r: !0,
              q: !0,
              br: r.readEnum,
              pbr: r.readPackedEnum,
              bw: s.writeRepeatedEnum,
            },
            queue_items_remaining: {
              n: 7,
              r: !0,
              q: !0,
              br: r.readInt32,
              pbr: r.readPackedInt32,
              bw: s.writeRepeatedInt32,
            },
            queue_items_next_appid: {
              n: 8,
              r: !0,
              q: !0,
              br: r.readUint32,
              pbr: r.readPackedUint32,
              bw: s.writeRepeatedUint32,
            },
            temporarily_owned: { n: 9, br: r.readBool, bw: s.writeBool },
            queues: { n: 10, c: P, r: !0, q: !0 },
            ignored_reason: { n: 11, br: r.readInt32, bw: s.writeInt32 },
            beta_status: { n: 12, br: r.readEnum, bw: s.writeEnum },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= d(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return c(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new _.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return o(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new _.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
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
        t.prototype.type || i(t.M()),
        _.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            type: { n: 1, br: r.readEnum, bw: s.writeEnum },
            skipped: { n: 2, br: r.readBool, bw: s.writeBool },
            items_remaining: { n: 3, br: r.readInt32, bw: s.writeInt32 },
            next_appid: { n: 4, br: r.readUint32, bw: s.writeUint32 },
            experimental_cohort: { n: 5, br: r.readUint32, bw: s.writeUint32 },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= d(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return c(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new _.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return o(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new _.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
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
        t.prototype.steamid || i(t.M()),
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
              br: r.readFixed64String,
              bw: s.writeFixed64String,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= d(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return c(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new _.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return o(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new _.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
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
        t.prototype.appids || i(t.M()),
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
              br: r.readUint32,
              pbr: r.readPackedUint32,
              bw: s.writeRepeatedUint32,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= d(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return c(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new _.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return o(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new _.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
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
        t.prototype.steamid || i(t.M()),
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
              br: r.readFixed64String,
              bw: s.writeFixed64String,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= d(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return c(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new _.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return o(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new _.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
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
        t.prototype.followed_game_count || i(t.M()),
        _.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            followed_game_count: { n: 1, br: r.readUint32, bw: s.writeUint32 },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= d(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return c(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new _.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return o(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new _.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
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
        t.prototype.appid || i(t.M()),
        _.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            appid: { n: 1, br: r.readUint32, bw: s.writeUint32 },
            report_type: { n: 2, br: r.readEnum, bw: s.writeEnum },
            report: { n: 3, br: r.readString, bw: s.writeString },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= d(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return c(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new _.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return o(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new _.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
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
        t.prototype.primary_language || i(t.M()),
        _.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            primary_language: { n: 1, br: r.readInt32, bw: s.writeInt32 },
            secondary_languages: {
              n: 2,
              br: r.readUint64String,
              bw: s.writeUint64String,
            },
            platform_windows: { n: 3, br: r.readBool, bw: s.writeBool },
            platform_mac: { n: 4, br: r.readBool, bw: s.writeBool },
            platform_linux: { n: 5, br: r.readBool, bw: s.writeBool },
            timestamp_updated: { n: 8, br: r.readUint32, bw: s.writeUint32 },
            hide_store_broadcast: { n: 9, br: r.readBool, bw: s.writeBool },
            review_score_preference: { n: 10, br: r.readEnum, bw: s.writeEnum },
            timestamp_content_descriptor_preferences_updated: {
              n: 11,
              br: r.readInt32,
              bw: s.writeInt32,
            },
            provide_deck_feedback: { n: 12, br: r.readEnum, bw: s.writeEnum },
            additional_languages: {
              n: 13,
              br: r.readString,
              bw: s.writeString,
            },
            game_frame_rate_reporting: {
              n: 14,
              br: r.readEnum,
              bw: s.writeEnum,
            },
            disable_microtrailers: { n: 15, br: r.readBool, bw: s.writeBool },
            disable_animated_marketing: {
              n: 16,
              br: r.readBool,
              bw: s.writeBool,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= d(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return c(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new _.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return o(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new _.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new _.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CStore_UserPreferences`;
    }
  },
  H = class t extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.tags_to_exclude || i(t.M()),
        _.Message.initialize(this, e, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: { tags_to_exclude: { n: 1, c: U, r: !0, q: !0 } },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= d(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return c(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new _.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return o(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new _.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new _.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CStore_UserTagPreferences`;
    }
  },
  U = class t extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.tagid || i(t.M()),
        _.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            tagid: { n: 1, br: r.readUint32, bw: s.writeUint32 },
            name: { n: 2, br: r.readString, bw: s.writeString },
            timestamp_added: { n: 3, br: r.readUint32, bw: s.writeUint32 },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= d(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return c(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new _.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return o(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new _.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
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
        t.prototype.country_code || i(t.M()),
        _.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            country_code: { n: 1, br: r.readString, bw: s.writeString },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= d(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return c(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new _.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return o(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new _.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new _.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CStore_GetStorePreferences_Request`;
    }
  },
  G = class r extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        r.prototype.preferences || i(r.M()),
        _.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (r.sm_m ||= {
          proto: r,
          fields: {
            preferences: { n: 1, c: V },
            tag_preferences: { n: 2, c: H },
            content_descriptor_preferences: { n: 3, c: t },
          },
        }),
        r.sm_m
      );
    }
    static MBF() {
      return ((r.sm_mbf ||= d(r.M())), r.sm_mbf);
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return c(r.M(), e, t);
    }
    static fromObject(t) {
      return e(r.M(), t);
    }
    static deserializeBinary(e) {
      let t = new _.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return o(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new _.BinaryWriter();
      return (r.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {
      n(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new _.BinaryWriter();
      return (r.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CStore_GetStorePreferences_Response`;
    }
  },
  le = class t extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.num_apps || i(t.M()),
        _.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            num_apps: { n: 1, br: r.readUint32, bw: s.writeUint32 },
            num_top_friends: { n: 2, br: r.readUint32, bw: s.writeUint32 },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= d(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return c(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new _.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return o(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new _.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new _.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CStore_GetTrendingAppsAmongFriends_Request`;
    }
  },
  ue = class t extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.trending_apps || i(t.M()),
        _.Message.initialize(this, e, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: { trending_apps: { n: 1, c: de, r: !0, q: !0 } },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= d(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return c(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new _.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return o(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new _.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new _.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CStore_GetTrendingAppsAmongFriends_Response`;
    }
  },
  de = class t extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.appid || i(t.M()),
        _.Message.initialize(this, e, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            appid: { n: 1, br: r.readUint32, bw: s.writeUint32 },
            steamids_top_friends: {
              n: 2,
              r: !0,
              q: !0,
              br: r.readUint64String,
              pbr: r.readPackedUint64String,
              bw: s.writeRepeatedUint64String,
            },
            total_friends: { n: 3, br: r.readUint32, bw: s.writeUint32 },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= d(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return c(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new _.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return o(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new _.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
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
        t.prototype.packages_to_reserve || i(t.M()),
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
              br: r.readUint32,
              pbr: r.readPackedUint32,
              bw: s.writeRepeatedUint32,
            },
            packages_to_unreserve: {
              n: 2,
              r: !0,
              q: !0,
              br: r.readUint32,
              pbr: r.readPackedUint32,
              bw: s.writeRepeatedUint32,
            },
            country_code: { n: 3, br: r.readString, bw: s.writeString },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= d(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return c(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new _.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return o(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new _.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new _.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CStore_UpdatePackageReservations_Request`;
    }
  },
  pe = class t extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.reservation_status || i(t.M()),
        _.Message.initialize(this, e, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: { reservation_status: { n: 1, c: a, r: !0, q: !0 } },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= d(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return c(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new _.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return o(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new _.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new _.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CStore_UpdatePackageReservations_Response`;
    }
  },
  K = class t extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.edistributor || i(t.M()),
        _.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            edistributor: { n: 1, br: r.readUint32, bw: s.writeUint32 },
            product_identifier: { n: 2, br: r.readString, bw: s.writeString },
            start_queue_position: { n: 3, br: r.readUint32, bw: s.writeUint32 },
            rtime_estimated_notification: {
              n: 4,
              br: r.readUint32,
              bw: s.writeUint32,
            },
            localization_token: { n: 5, br: r.readString, bw: s.writeString },
            accountid: { n: 6, br: r.readUint32, bw: s.writeUint32 },
            rtime_created: { n: 7, br: r.readUint32, bw: s.writeUint32 },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= d(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return c(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new _.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return o(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new _.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new _.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CReservationPositionMessage`;
    }
  },
  q = class t extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.settings || i(t.M()),
        _.Message.initialize(this, e, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: { settings: { n: 1, c: K, r: !0, q: !0 } },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= d(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return c(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new _.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return o(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new _.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new _.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
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
        t.prototype.edistributor || i(t.M()),
        _.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            edistributor: { n: 1, br: r.readUint32, bw: s.writeUint32 },
            product_identifier: { n: 2, br: r.readString, bw: s.writeString },
            start_queue_position: { n: 3, br: r.readUint32, bw: s.writeUint32 },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= d(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return c(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new _.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return o(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new _.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
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
  _e = class t extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.settings || i(t.M()),
        _.Message.initialize(this, e, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: { settings: { n: 1, c: K, r: !0, q: !0 } },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= d(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return c(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new _.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return o(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new _.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new _.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
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
        t.prototype.accountid || i(t.M()),
        _.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            accountid: { n: 1, br: r.readUint32, bw: s.writeUint32 },
            browserid: {
              n: 2,
              br: r.readUint64String,
              bw: s.writeUint64String,
            },
            backfill_source: { n: 3, br: r.readEnum, bw: s.writeEnum },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= d(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return c(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new _.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return o(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new _.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
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
        t.prototype.appid || i(t.M()),
        _.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            appid: { n: 1, br: r.readUint32, bw: s.writeUint32 },
            feedback: { n: 2, br: r.readEnum, bw: s.writeEnum },
            feedback_details: { n: 3, br: r.readUint32, bw: s.writeUint32 },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= d(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return c(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new _.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return o(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new _.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
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
        t.prototype.appid || i(t.M()),
        _.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: { appid: { n: 1, br: r.readUint32, bw: s.writeUint32 } },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= d(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return c(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new _.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return o(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new _.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
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
        t.prototype.prompt || i(t.M()),
        _.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            prompt: { n: 1, br: r.readBool, bw: s.writeBool },
            feedback_eligible: { n: 2, br: r.readBool, bw: s.writeBool },
            existing_feedback: { n: 3, br: r.readEnum, bw: s.writeEnum },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= d(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return c(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new _.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return o(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new _.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
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
        t.prototype.appid || i(t.M()),
        _.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            appid: { n: 1, br: r.readUint32, bw: s.writeUint32 },
            demo_appid: { n: 2, br: r.readUint32, bw: s.writeUint32 },
            allow_late_firing: { n: 3, br: r.readBool, bw: s.writeBool },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= d(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return c(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new _.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return o(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new _.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
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
        t.prototype.can_fire || i(t.M()),
        _.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            can_fire: { n: 1, d: !1, br: r.readBool, bw: s.writeBool },
            time_staged: { n: 2, br: r.readUint32, bw: s.writeUint32 },
            demo_release_date: { n: 3, br: r.readUint32, bw: s.writeUint32 },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= d(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return c(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new _.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return o(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new _.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
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
        t.prototype.appid || i(t.M()),
        _.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            appid: { n: 1, br: r.readUint32, bw: s.writeUint32 },
            demo_appid: { n: 2, br: r.readUint32, bw: s.writeUint32 },
            allow_late_firing: { n: 3, br: r.readBool, bw: s.writeBool },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= d(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return c(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new _.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return o(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new _.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
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
        t.prototype.steamid || i(t.M()),
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
              br: r.readFixed64String,
              bw: s.writeFixed64String,
            },
            queue_type: { n: 2, br: r.readEnum, bw: s.writeEnum },
            store_page_filter: { n: 3, c: p },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= d(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return c(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new _.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return o(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new _.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
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
        t.prototype.appids || i(t.M()),
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
              br: r.readUint32,
              pbr: r.readPackedUint32,
              bw: s.writeRepeatedUint32,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= d(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return c(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new _.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return o(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new _.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new _.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CStore_GetDiscoveryQueueSkippedApps_Response`;
    }
  },
  De = class r extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        r.prototype.preferences || i(r.M()),
        _.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (r.sm_m ||= {
          proto: r,
          fields: {
            preferences: { n: 1, c: V },
            tag_preferences: { n: 2, c: H },
            content_descriptor_preferences: { n: 3, c: t },
          },
        }),
        r.sm_m
      );
    }
    static MBF() {
      return ((r.sm_mbf ||= d(r.M())), r.sm_mbf);
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return c(r.M(), e, t);
    }
    static fromObject(t) {
      return e(r.M(), t);
    }
    static deserializeBinary(e) {
      let t = new _.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return o(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new _.BinaryWriter();
      return (r.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {
      n(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new _.BinaryWriter();
      return (r.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CStore_StorePreferencesChanged_Notification`;
    }
  },
  Oe = class t extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.appid || i(t.M()),
        _.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            appid: { n: 1, br: r.readUint32, bw: s.writeUint32 },
            steamid: {
              n: 2,
              br: r.readFixed64String,
              bw: s.writeFixed64String,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= d(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return c(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new _.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return o(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new _.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
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
        t.prototype.invites_remaining || i(t.M()),
        _.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            invites_remaining: { n: 1, br: r.readInt32, bw: s.writeInt32 },
            status: { n: 2, br: r.readEnum, bw: s.writeEnum },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= d(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return c(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new _.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return o(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new _.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
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
        t.prototype.invite_ids || i(t.M()),
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
              br: r.readUint64String,
              pbr: r.readPackedUint64String,
              bw: s.writeRepeatedUint64String,
            },
            status: { n: 2, br: r.readEnum, bw: s.writeEnum },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= d(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return c(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new _.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return o(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new _.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
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
        t.prototype.invites_updated || i(t.M()),
        _.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            invites_updated: { n: 1, br: r.readUint32, bw: s.writeUint32 },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= d(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return c(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new _.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return o(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new _.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
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
        t.prototype.invite_id || i(t.M()),
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
              br: r.readUint64String,
              bw: s.writeUint64String,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= d(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return c(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new _.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return o(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new _.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new _.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPlaytest_GetInvites_Request`;
    }
  },
  Ne = class t extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.invites || i(t.M()),
        _.Message.initialize(this, e, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: { invites: { n: 1, c: Pe, r: !0, q: !0 } },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= d(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return c(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new _.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return o(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new _.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new _.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPlaytest_GetInvites_Response`;
    }
  },
  Pe = class t extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.invite_id || i(t.M()),
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
              br: r.readUint64String,
              bw: s.writeUint64String,
            },
            appid: { n: 2, br: r.readUint32, bw: s.writeUint32 },
            steamid_inviter: {
              n: 3,
              br: r.readFixed64String,
              bw: s.writeFixed64String,
            },
            status: { n: 4, br: r.readEnum, bw: s.writeEnum },
            time_created: { n: 5, br: r.readUint32, bw: s.writeUint32 },
            app_name: { n: 6, br: r.readString, bw: s.writeString },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= d(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return c(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new _.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return o(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new _.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
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
        t.prototype.limit || i(t.M()),
        _.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            limit: { n: 1, br: r.readUint32, bw: s.writeUint32 },
            time_before: { n: 2, br: r.readUint32, bw: s.writeUint32 },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= d(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return c(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new _.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return o(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new _.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new _.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPlaytest_GetInviteHistory_Request`;
    }
  },
  Q = class t extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.invites || i(t.M()),
        _.Message.initialize(this, e, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: { invites: { n: 1, c: Ie, r: !0, q: !0 } },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= d(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return c(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new _.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return o(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new _.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new _.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPlaytest_GetInviteHistory_Response`;
    }
  },
  Ie = class t extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.appid || i(t.M()),
        _.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            appid: { n: 1, br: r.readUint32, bw: s.writeUint32 },
            steamid_invited: {
              n: 2,
              br: r.readFixed64String,
              bw: s.writeFixed64String,
            },
            time_created: { n: 3, br: r.readUint32, bw: s.writeUint32 },
            app_name: { n: 4, br: r.readString, bw: s.writeString },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= d(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return c(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new _.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return o(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new _.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
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
        t.prototype.appid || i(t.M()),
        _.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: { appid: { n: 1, br: r.readUint32, bw: s.writeUint32 } },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= d(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return c(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new _.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return o(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new _.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new _.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPlaytest_GetUserStatus_Request`;
    }
  },
  Re = class t extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.results || i(t.M()),
        _.Message.initialize(this, e, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: { results: { n: 1, c: ze, r: !0, q: !0 } },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= d(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return c(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new _.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return o(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new _.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new _.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPlaytest_GetUserStatus_Response`;
    }
  },
  ze = class t extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.appid || i(t.M()),
        _.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            appid: { n: 1, br: r.readUint32, bw: s.writeUint32 },
            status: { n: 2, br: r.readEnum, bw: s.writeEnum },
            invites_remaining: { n: 3, br: r.readInt32, bw: s.writeInt32 },
            time_joined: { n: 4, br: r.readUint32, bw: s.writeUint32 },
            packageid: { n: 5, br: r.readUint32, bw: s.writeUint32 },
            invites_sent: { n: 6, br: r.readInt32, bw: s.writeInt32 },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= d(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return c(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new _.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return o(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new _.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
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
        t.prototype.appid || i(t.M()),
        _.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: { appid: { n: 1, br: r.readUint32, bw: s.writeUint32 } },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= d(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return c(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new _.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return o(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new _.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
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
        t.prototype.ineligible_friends || i(t.M()),
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
              br: r.readUint32,
              pbr: r.readPackedUint32,
              bw: s.writeRepeatedUint32,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= d(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return c(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new _.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return o(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new _.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
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
  function t(e, t, n) {
    return e.SendMsg(`Store.RegisterCDKey#1`, u(ee, t, n), b, {
      ePrivilege: 1,
    });
  }
  e.RegisterCDKey = t;
  function n(e, t, n) {
    return e.SendMsg(`Store.GetRecommendedTagsForUser#1`, u(x, t, n), te, {
      bConstMethod: !0,
      ePrivilege: 1,
      rgBrowserAPISites: [`partner`],
    });
  }
  e.GetRecommendedTagsForUser = n;
  function r(e, t, n) {
    return e.SendMsg(`Store.GetMostPopularTags#1`, u(ne, t, n), re, {
      bConstMethod: !0,
      ePrivilege: 1,
      eWebAPIKeyRequirement: 1,
    });
  }
  e.GetMostPopularTags = r;
  function i(e, t, n) {
    return e.SendMsg(`Store.GetLocalizedNameForTags#1`, u(w, t, n), T, {
      bConstMethod: !0,
      ePrivilege: 1,
      eWebAPIKeyRequirement: 1,
    });
  }
  e.GetLocalizedNameForTags = i;
  function a(e, t, n) {
    return e.SendMsg(`Store.GetTagList#1`, u(D, t, n), ie, {
      bConstMethod: !0,
      ePrivilege: 1,
      eWebAPIKeyRequirement: 1,
      rgBrowserAPISites: [`partner`, `community`],
    });
  }
  e.GetTagList = a;
  function o(e, t, n) {
    return e.SendMsg(`Store.GetDiscoveryQueue#1`, u(A, t, n), ae, {
      bConstMethod: !0,
      ePrivilege: 1,
      rgBrowserAPISites: [`partner`, `community`],
    });
  }
  e.GetDiscoveryQueue = o;
  function s(e, t, n) {
    return e.SendMsg(`Store.GetDiscoveryQueueSettings#1`, u(oe, t, n), se, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  e.GetDiscoveryQueueSettings = s;
  function c(e, t, n) {
    return e.SendMsg(`Store.SkipDiscoveryQueueItem#1`, u(ce, t, n), j, {
      ePrivilege: 1,
      rgBrowserAPISites: [`partner`, `community`],
    });
  }
  e.SkipDiscoveryQueueItem = c;
  function l(e, t, n) {
    return e.SendMsg(`Store.GetUserGameInterestState#1`, u(M, t, n), N, {
      ePrivilege: 1,
    });
  }
  e.GetUserGameInterestState = l;
  function d(e, t, n) {
    return e.SendMsg(`Store.GetGamesFollowed#1`, u(F, t, n), I, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
      rgBrowserAPISites: [`partner`],
    });
  }
  e.GetGamesFollowed = d;
  function f(e, t, n) {
    return e.SendMsg(`Store.GetGamesFollowedCount#1`, u(L, t, n), R, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
      rgBrowserAPISites: [`partner`],
    });
  }
  e.GetGamesFollowedCount = f;
  function p(e, t, n) {
    return e.SendMsg(`Store.GetDiscoveryQueueSkippedApps#1`, u(Te, t, n), Ee, {
      bConstMethod: !0,
      ePrivilege: 1,
      rgBrowserAPISites: [`partner`, `community`],
    });
  }
  e.GetDiscoveryQueueSkippedApps = p;
  function m(e, t, n) {
    return e.SendMsg(`Store.ReportApp#1`, u(z, t, n), B, { ePrivilege: 3 });
  }
  e.ReportApp = m;
  function h(e, t, n) {
    return e.SendMsg(`Store.GetStorePreferences#1`, u(W, t, n), G, {
      bConstMethod: !0,
      ePrivilege: 1,
      rgBrowserAPISites: [`partner`, `community`],
    });
  }
  e.GetStorePreferences = h;
  function g(e, t, n) {
    return e.SendMsg(`Store.GetTrendingAppsAmongFriends#1`, u(le, t, n), ue, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  e.GetTrendingAppsAmongFriends = g;
  function _(e, t) {
    return e.SendNotification(`Store.MigratePartnerLinkTracking#1`, u(ve, t), {
      ePrivilege: 1,
    });
  }
  e.MigratePartnerLinkTracking = _;
  function v(e, t, n) {
    return e.SendMsg(`Store.UpdatePackageReservations#1`, u(fe, t, n), pe, {
      ePrivilege: 1,
      rgBrowserAPISites: [`partner`, `community`],
    });
  }
  e.UpdatePackageReservations = v;
  function y(e, t, n) {
    return e.SendMsg(`Store.GetWishlistDemoEmailStatus#1`, u(X, t, n), Ce, {
      ePrivilege: 1,
      rgBrowserAPISites: [`partner`],
    });
  }
  e.GetWishlistDemoEmailStatus = y;
  function S(e, t, n) {
    return e.SendMsg(`Store.QueueWishlistDemoEmailToFire#1`, u(Z, t, n), we, {
      ePrivilege: 1,
      rgBrowserAPISites: [`partner`],
    });
  }
  e.QueueWishlistDemoEmailToFire = S;
  function C(e, t, n) {
    return e.SendMsg(`Store.SetReservationPositionMessage#1`, u(q, t, n), me, {
      ePrivilege: 4,
      rgBrowserAPISites: [`partner`],
    });
  }
  e.SetReservationPositionMessage = C;
  function E(e, t, n) {
    return e.SendMsg(
      `Store.DeleteReservationPositionMessage#1`,
      u(J, t, n),
      he,
      { ePrivilege: 4, rgBrowserAPISites: [`partner`] },
    );
  }
  e.DeleteReservationPositionMessage = E;
  function O(e, t, n) {
    return e.SendMsg(
      `Store.GetAllReservationPositionMessages#1`,
      u(ge, t, n),
      _e,
      { bConstMethod: !0, ePrivilege: 4 },
    );
  }
  e.GetAllReservationPositionMessages = O;
  function k(e, t) {
    return e.SendNotification(
      `Store.ReloadAllReservationPositionMessages#1`,
      u(Y, t),
      { ePrivilege: 4, rgBrowserAPISites: [`partner`] },
    );
  }
  e.ReloadAllReservationPositionMessages = k;
  function P(e, t, n) {
    return e.SendMsg(`Store.SetCompatibilityFeedback#1`, u(ye, t, n), be, {
      ePrivilege: 1,
    });
  }
  e.SetCompatibilityFeedback = P;
  function V(e, t, n) {
    return e.SendMsg(
      `Store.ShouldPromptForCompatibilityFeedback#1`,
      u(xe, t, n),
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
    return e.SendMsg(`Playtest.RequestInvite#1`, u(Oe, t, n), ke, {
      ePrivilege: 1,
    });
  }
  e.RequestInvite = t;
  function n(e, t, n) {
    return e.SendMsg(`Playtest.UpdateInvites#1`, u(Ae, t, n), je, {
      ePrivilege: 1,
      rgBrowserAPISites: [`partner`],
    });
  }
  e.UpdateInvites = n;
  function r(e, t, n) {
    return e.SendMsg(`Playtest.GetInvites#1`, u(Me, t, n), Ne, {
      ePrivilege: 1,
      rgBrowserAPISites: [`partner`],
    });
  }
  e.GetInvites = r;
  function i(e, t, n) {
    return e.SendMsg(`Playtest.GetInviteHistory#1`, u(Fe, t, n), Q, {
      ePrivilege: 1,
    });
  }
  e.GetInviteHistory = i;
  function a(e, t, n) {
    return e.SendMsg(`Playtest.GetUserStatus#1`, u(Le, t, n), Re, {
      ePrivilege: 1,
      rgBrowserAPISites: [`partner`],
    });
  }
  e.GetUserStatus = a;
  function o(e, t, n) {
    return e.SendMsg(`Playtest.GetInviteOptions#1`, u(Be, t, n), Ve, {
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
