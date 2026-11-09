/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import {
  Gt as e,
  Ht as t,
  Jt as n,
  Kt as r,
  Ut as i,
  Wt as a,
  Xt as o,
  Yt as s,
  on as c,
  qt as l,
  yt as u,
} from "./mobx.esm.js";
var d = c(o(), 1),
  f = class o extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        o.prototype.partnerid || t(o.M()),
        d.Message.initialize(this, e, 0, -1, [5], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (o.sm_m ||= {
          proto: o,
          fields: {
            partnerid: { n: 1, br: e.readUint32, bw: s.writeUint32 },
            accountid: { n: 13, br: e.readUint32, bw: s.writeUint32 },
            type: { n: 2, br: e.readEnum, bw: s.writeEnum },
            status: { n: 3, br: e.readEnum, bw: s.writeEnum },
            due_date: { n: 4, br: e.readUint32, bw: s.writeUint32 },
            email_days_before_due: {
              n: 5,
              r: !0,
              q: !0,
              br: e.readUint32,
              pbr: e.readPackedUint32,
              bw: s.writeRepeatedUint32,
            },
            gid: { n: 6, br: e.readFixed64String, bw: s.writeFixed64String },
            store_item_type: { n: 7, br: e.readEnum, bw: s.writeEnum },
            store_item_id: { n: 8, br: e.readUint32, bw: s.writeUint32 },
            discount_event_id: { n: 9, br: e.readUint32, bw: s.writeUint32 },
            required_rights: {
              n: 11,
              br: e.readUint64String,
              bw: s.writeUint64String,
            },
            description_jsondata: {
              n: 10,
              br: e.readString,
              bw: s.writeString,
            },
            send_email_on_creation: { n: 12, br: e.readBool, bw: s.writeBool },
          },
        }),
        o.sm_m
      );
    }
    static MBF() {
      return ((o.sm_mbf ||= r(o.M())), o.sm_mbf);
    }
    toObject(e = !1) {
      return o.toObject(e, this);
    }
    static toObject(e, t) {
      return n(o.M(), e, t);
    }
    static fromObject(e) {
      return a(o.M(), e);
    }
    static deserializeBinary(e) {
      let t = new d.BinaryReader(e),
        n = new o();
      return o.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return i(o.MBF(), e, t);
    }
    serializeBinary() {
      var e = new d.BinaryWriter();
      return (o.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {
      l(o.M(), e, t);
    }
    serializeBase64String() {
      var e = new d.BinaryWriter();
      return (o.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPartnerDeadline`;
    }
  },
  p = class o extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        o.prototype.deadlineid || t(o.M()),
        d.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (o.sm_m ||= {
          proto: o,
          fields: {
            deadlineid: {
              n: 1,
              br: e.readFixed64String,
              bw: s.writeFixed64String,
            },
            partnerid: { n: 2, br: e.readUint32, bw: s.writeUint32 },
            accountid: { n: 8, br: e.readUint32, bw: s.writeUint32 },
            type: { n: 3, br: e.readEnum, bw: s.writeEnum },
            gid: { n: 4, br: e.readFixed64String, bw: s.writeFixed64String },
            store_item_type: { n: 5, br: e.readEnum, bw: s.writeEnum },
            store_item_id: { n: 6, br: e.readUint32, bw: s.writeUint32 },
            discount_event_id: { n: 7, br: e.readUint32, bw: s.writeUint32 },
          },
        }),
        o.sm_m
      );
    }
    static MBF() {
      return ((o.sm_mbf ||= r(o.M())), o.sm_mbf);
    }
    toObject(e = !1) {
      return o.toObject(e, this);
    }
    static toObject(e, t) {
      return n(o.M(), e, t);
    }
    static fromObject(e) {
      return a(o.M(), e);
    }
    static deserializeBinary(e) {
      let t = new d.BinaryReader(e),
        n = new o();
      return o.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return i(o.MBF(), e, t);
    }
    serializeBinary() {
      var e = new d.BinaryWriter();
      return (o.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {
      l(o.M(), e, t);
    }
    serializeBase64String() {
      var e = new d.BinaryWriter();
      return (o.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPartnerDeadlineLookUpKey`;
    }
  },
  m = class o extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        o.prototype.partnerid || t(o.M()),
        d.Message.initialize(this, e, 0, -1, [5], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (o.sm_m ||= {
          proto: o,
          fields: {
            partnerid: { n: 1, br: e.readUint32, bw: s.writeUint32 },
            accountid: { n: 6, br: e.readUint32, bw: s.writeUint32 },
            start_date: { n: 2, br: e.readUint32, bw: s.writeUint32 },
            end_date: { n: 3, br: e.readUint32, bw: s.writeUint32 },
            include_complete: { n: 4, br: e.readBool, bw: s.writeBool },
            lookup_key: { n: 5, c: p, r: !0, q: !0 },
          },
        }),
        o.sm_m
      );
    }
    static MBF() {
      return ((o.sm_mbf ||= r(o.M())), o.sm_mbf);
    }
    toObject(e = !1) {
      return o.toObject(e, this);
    }
    static toObject(e, t) {
      return n(o.M(), e, t);
    }
    static fromObject(e) {
      return a(o.M(), e);
    }
    static deserializeBinary(e) {
      let t = new d.BinaryReader(e),
        n = new o();
      return o.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return i(o.MBF(), e, t);
    }
    serializeBinary() {
      var e = new d.BinaryWriter();
      return (o.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {
      l(o.M(), e, t);
    }
    serializeBase64String() {
      var e = new d.BinaryWriter();
      return (o.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPartnerDeadline_GetDeadlinesForPartner_Request`;
    }
  },
  h = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      (super(),
        e.prototype.deadlines || t(e.M()),
        d.Message.initialize(this, n, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { deadlines: { n: 1, c: g, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= r(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return n(e.M(), t, r);
    }
    static fromObject(t) {
      return a(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return i(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      l(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPartnerDeadline_GetDeadlinesForPartner_Response`;
    }
  },
  g = class o extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        o.prototype.deadlineid || t(o.M()),
        d.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (o.sm_m ||= {
          proto: o,
          fields: {
            deadlineid: {
              n: 1,
              br: e.readFixed64String,
              bw: s.writeFixed64String,
            },
            data: { n: 2, c: f },
          },
        }),
        o.sm_m
      );
    }
    static MBF() {
      return ((o.sm_mbf ||= r(o.M())), o.sm_mbf);
    }
    toObject(e = !1) {
      return o.toObject(e, this);
    }
    static toObject(e, t) {
      return n(o.M(), e, t);
    }
    static fromObject(e) {
      return a(o.M(), e);
    }
    static deserializeBinary(e) {
      let t = new d.BinaryReader(e),
        n = new o();
      return o.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return i(o.MBF(), e, t);
    }
    serializeBinary() {
      var e = new d.BinaryWriter();
      return (o.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {
      l(o.M(), e, t);
    }
    serializeBase64String() {
      var e = new d.BinaryWriter();
      return (o.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPartnerDeadline_GetDeadlinesForPartner_Response_Result`;
    }
  },
  _ = class o extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        o.prototype.type || t(o.M()),
        d.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (o.sm_m ||= {
          proto: o,
          fields: {
            type: { n: 1, br: e.readEnum, bw: s.writeEnum },
            start_date: { n: 2, br: e.readUint32, bw: s.writeUint32 },
            end_date: { n: 3, br: e.readUint32, bw: s.writeUint32 },
            include_complete: { n: 4, br: e.readBool, bw: s.writeBool },
            store_item_type: { n: 7, br: e.readEnum, bw: s.writeEnum },
            store_item_id: { n: 8, br: e.readUint32, bw: s.writeUint32 },
          },
        }),
        o.sm_m
      );
    }
    static MBF() {
      return ((o.sm_mbf ||= r(o.M())), o.sm_mbf);
    }
    toObject(e = !1) {
      return o.toObject(e, this);
    }
    static toObject(e, t) {
      return n(o.M(), e, t);
    }
    static fromObject(e) {
      return a(o.M(), e);
    }
    static deserializeBinary(e) {
      let t = new d.BinaryReader(e),
        n = new o();
      return o.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return i(o.MBF(), e, t);
    }
    serializeBinary() {
      var e = new d.BinaryWriter();
      return (o.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {
      l(o.M(), e, t);
    }
    serializeBase64String() {
      var e = new d.BinaryWriter();
      return (o.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPartnerDeadline_GetDeadlineByTimeRange_Request`;
    }
  },
  v = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      (super(),
        e.prototype.deadlines || t(e.M()),
        d.Message.initialize(this, n, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { deadlines: { n: 1, c: y, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= r(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return n(e.M(), t, r);
    }
    static fromObject(t) {
      return a(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return i(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      l(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPartnerDeadline_GetDeadlineByTimeRange_Response`;
    }
  },
  y = class o extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        o.prototype.deadlineid || t(o.M()),
        d.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (o.sm_m ||= {
          proto: o,
          fields: {
            deadlineid: {
              n: 1,
              br: e.readFixed64String,
              bw: s.writeFixed64String,
            },
            data: { n: 2, c: f },
          },
        }),
        o.sm_m
      );
    }
    static MBF() {
      return ((o.sm_mbf ||= r(o.M())), o.sm_mbf);
    }
    toObject(e = !1) {
      return o.toObject(e, this);
    }
    static toObject(e, t) {
      return n(o.M(), e, t);
    }
    static fromObject(e) {
      return a(o.M(), e);
    }
    static deserializeBinary(e) {
      let t = new d.BinaryReader(e),
        n = new o();
      return o.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return i(o.MBF(), e, t);
    }
    serializeBinary() {
      var e = new d.BinaryWriter();
      return (o.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {
      l(o.M(), e, t);
    }
    serializeBase64String() {
      var e = new d.BinaryWriter();
      return (o.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPartnerDeadline_GetDeadlineByTimeRange_Response_Result`;
    }
  },
  b = class o extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        o.prototype.state || t(o.M()),
        d.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (o.sm_m ||= {
          proto: o,
          fields: {
            state: { n: 1, br: e.readEnum, bw: s.writeEnum },
            accountid: { n: 2, br: e.readUint32, bw: s.writeUint32 },
            key_json: { n: 3, br: e.readString, bw: s.writeString },
            partnerid: { n: 4, br: e.readUint32, bw: s.writeUint32 },
            rtime_create: { n: 5, br: e.readUint32, bw: s.writeUint32 },
            rtime_validity: { n: 6, br: e.readUint32, bw: s.writeUint32 },
            dismiss_id: {
              n: 7,
              br: e.readFixed64String,
              bw: s.writeFixed64String,
            },
          },
        }),
        o.sm_m
      );
    }
    static MBF() {
      return ((o.sm_mbf ||= r(o.M())), o.sm_mbf);
    }
    toObject(e = !1) {
      return o.toObject(e, this);
    }
    static toObject(e, t) {
      return n(o.M(), e, t);
    }
    static fromObject(e) {
      return a(o.M(), e);
    }
    static deserializeBinary(e) {
      let t = new d.BinaryReader(e),
        n = new o();
      return o.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return i(o.MBF(), e, t);
    }
    serializeBinary() {
      var e = new d.BinaryWriter();
      return (o.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {
      l(o.M(), e, t);
    }
    serializeBase64String() {
      var e = new d.BinaryWriter();
      return (o.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CDismissPinData`;
    }
  },
  x = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      (super(),
        e.prototype.dismiss_list || t(e.M()),
        d.Message.initialize(this, n, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { dismiss_list: { n: 1, c: b, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= r(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return n(e.M(), t, r);
    }
    static fromObject(t) {
      return a(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return i(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      l(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPartnerDismiss_CreateDismiss_Request`;
    }
  },
  S = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      (super(),
        e.prototype.dismiss_list || t(e.M()),
        d.Message.initialize(this, n, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { dismiss_list: { n: 1, c: b, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= r(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return n(e.M(), t, r);
    }
    static fromObject(t) {
      return a(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return i(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      l(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPartnerDismiss_CreateDismiss_Response`;
    }
  },
  C = class o extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        o.prototype.partnerid || t(o.M()),
        d.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (o.sm_m ||= {
          proto: o,
          fields: {
            partnerid: { n: 1, br: e.readUint32, bw: s.writeUint32 },
            accountid: { n: 2, br: e.readUint32, bw: s.writeUint32 },
            rtime_after: { n: 3, br: e.readUint32, bw: s.writeUint32 },
          },
        }),
        o.sm_m
      );
    }
    static MBF() {
      return ((o.sm_mbf ||= r(o.M())), o.sm_mbf);
    }
    toObject(e = !1) {
      return o.toObject(e, this);
    }
    static toObject(e, t) {
      return n(o.M(), e, t);
    }
    static fromObject(e) {
      return a(o.M(), e);
    }
    static deserializeBinary(e) {
      let t = new d.BinaryReader(e),
        n = new o();
      return o.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return i(o.MBF(), e, t);
    }
    serializeBinary() {
      var e = new d.BinaryWriter();
      return (o.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {
      l(o.M(), e, t);
    }
    serializeBase64String() {
      var e = new d.BinaryWriter();
      return (o.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPartnerDismiss_GetDismissTimeRange_Request`;
    }
  },
  w = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      (super(),
        e.prototype.dismiss_list || t(e.M()),
        d.Message.initialize(this, n, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { dismiss_list: { n: 1, c: b, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= r(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return n(e.M(), t, r);
    }
    static fromObject(t) {
      return a(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return i(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      l(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPartnerDismiss_GetDismissTimeRange_Response`;
    }
  },
  T = class o extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        o.prototype.dismiss_id || t(o.M()),
        d.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (o.sm_m ||= {
          proto: o,
          fields: {
            dismiss_id: {
              n: 7,
              br: e.readFixed64String,
              bw: s.writeFixed64String,
            },
          },
        }),
        o.sm_m
      );
    }
    static MBF() {
      return ((o.sm_mbf ||= r(o.M())), o.sm_mbf);
    }
    toObject(e = !1) {
      return o.toObject(e, this);
    }
    static toObject(e, t) {
      return n(o.M(), e, t);
    }
    static fromObject(e) {
      return a(o.M(), e);
    }
    static deserializeBinary(e) {
      let t = new d.BinaryReader(e),
        n = new o();
      return o.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return i(o.MBF(), e, t);
    }
    serializeBinary() {
      var e = new d.BinaryWriter();
      return (o.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {
      l(o.M(), e, t);
    }
    serializeBase64String() {
      var e = new d.BinaryWriter();
      return (o.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPartnerDismiss_DeleteDismiss_Request`;
    }
  },
  E = class e extends d.Message {
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
      return `CPartnerDismiss_DeleteDismiss_Response`;
    }
  },
  D;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(
      `PartnerDeadline.GetDeadlinesForPartner#1`,
      u(m, t, n),
      h,
      { bConstMethod: !0, ePrivilege: 1 },
    );
  }
  e.GetDeadlinesForPartner = t;
  function n(e, t, n) {
    return e.SendMsg(
      `PartnerDeadline.GetDeadlineByTimeRange#1`,
      u(_, t, n),
      v,
      { bConstMethod: !0, ePrivilege: 4 },
    );
  }
  e.GetDeadlineByTimeRange = n;
})((D ||= {}));
var O;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(`PartnerDismiss.CreateDismiss#1`, u(x, t, n), S, {
      ePrivilege: 1,
      rgBrowserAPISites: [`partner`],
    });
  }
  e.CreateDismiss = t;
  function n(e, t, n) {
    return e.SendMsg(`PartnerDismiss.GetDismissTimeRange#1`, u(C, t, n), w, {
      bConstMethod: !0,
      ePrivilege: 1,
      rgBrowserAPISites: [`partner`],
    });
  }
  e.GetDismissTimeRange = n;
  function r(e, t, n) {
    return e.SendMsg(`PartnerDismiss.DeleteDismiss#1`, u(T, t, n), E, {
      ePrivilege: 1,
      rgBrowserAPISites: [`partner`],
    });
  }
  e.DeleteDismiss = r;
})((O ||= {}));
export { O as a, C as i, x as n, T as r, b as t };
