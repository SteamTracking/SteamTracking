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
  vt as s,
  wt as c,
  xt as l,
  yt as u,
} from "./chunk~de7f2df91c.js";
var d = n(c(), 1),
  f = class t extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.partnerid || o(t.M()),
        d.Message.initialize(this, e, 0, -1, [5], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            partnerid: { n: 1, br: u.readUint32, bw: e.writeUint32 },
            accountid: { n: 13, br: u.readUint32, bw: e.writeUint32 },
            type: { n: 2, br: u.readEnum, bw: e.writeEnum },
            status: { n: 3, br: u.readEnum, bw: e.writeEnum },
            due_date: { n: 4, br: u.readUint32, bw: e.writeUint32 },
            email_days_before_due: {
              n: 5,
              r: !0,
              q: !0,
              br: u.readUint32,
              pbr: u.readPackedUint32,
              bw: e.writeRepeatedUint32,
            },
            gid: { n: 6, br: u.readFixed64String, bw: e.writeFixed64String },
            store_item_type: { n: 7, br: u.readEnum, bw: e.writeEnum },
            store_item_id: { n: 8, br: u.readUint32, bw: e.writeUint32 },
            discount_event_id: { n: 9, br: u.readUint32, bw: e.writeUint32 },
            required_rights: {
              n: 11,
              br: u.readUint64String,
              bw: e.writeUint64String,
            },
            description_jsondata: {
              n: 10,
              br: u.readString,
              bw: e.writeString,
            },
            send_email_on_creation: { n: 12, br: u.readBool, bw: e.writeBool },
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
      return s(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new d.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new d.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      l(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new d.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPartnerDeadline`;
    }
  },
  p = class t extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.deadlineid || o(t.M()),
        d.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            deadlineid: {
              n: 1,
              br: u.readFixed64String,
              bw: e.writeFixed64String,
            },
            partnerid: { n: 2, br: u.readUint32, bw: e.writeUint32 },
            accountid: { n: 8, br: u.readUint32, bw: e.writeUint32 },
            type: { n: 3, br: u.readEnum, bw: e.writeEnum },
            gid: { n: 4, br: u.readFixed64String, bw: e.writeFixed64String },
            store_item_type: { n: 5, br: u.readEnum, bw: e.writeEnum },
            store_item_id: { n: 6, br: u.readUint32, bw: e.writeUint32 },
            discount_event_id: { n: 7, br: u.readUint32, bw: e.writeUint32 },
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
      return s(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new d.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new d.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      l(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new d.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPartnerDeadlineLookUpKey`;
    }
  },
  m = class t extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.partnerid || o(t.M()),
        d.Message.initialize(this, e, 0, -1, [5], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            partnerid: { n: 1, br: u.readUint32, bw: e.writeUint32 },
            accountid: { n: 6, br: u.readUint32, bw: e.writeUint32 },
            start_date: { n: 2, br: u.readUint32, bw: e.writeUint32 },
            end_date: { n: 3, br: u.readUint32, bw: e.writeUint32 },
            include_complete: { n: 4, br: u.readBool, bw: e.writeBool },
            lookup_key: { n: 5, c: p, r: !0, q: !0 },
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
      return s(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new d.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new d.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      l(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new d.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPartnerDeadline_GetDeadlinesForPartner_Request`;
    }
  },
  h = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.deadlines || o(e.M()),
        d.Message.initialize(this, t, 0, -1, [1], null));
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
      return ((e.sm_mbf ||= a(e.M())), e.sm_mbf);
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
  g = class t extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.deadlineid || o(t.M()),
        d.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            deadlineid: {
              n: 1,
              br: u.readFixed64String,
              bw: e.writeFixed64String,
            },
            data: { n: 2, c: f },
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
      return s(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new d.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new d.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      l(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new d.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPartnerDeadline_GetDeadlinesForPartner_Response_Result`;
    }
  },
  _ = class t extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.type || o(t.M()),
        d.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            type: { n: 1, br: u.readEnum, bw: e.writeEnum },
            start_date: { n: 2, br: u.readUint32, bw: e.writeUint32 },
            end_date: { n: 3, br: u.readUint32, bw: e.writeUint32 },
            include_complete: { n: 4, br: u.readBool, bw: e.writeBool },
            store_item_type: { n: 7, br: u.readEnum, bw: e.writeEnum },
            store_item_id: { n: 8, br: u.readUint32, bw: e.writeUint32 },
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
      return s(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new d.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new d.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      l(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new d.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPartnerDeadline_GetDeadlineByTimeRange_Request`;
    }
  },
  v = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.deadlines || o(e.M()),
        d.Message.initialize(this, t, 0, -1, [1], null));
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
      return ((e.sm_mbf ||= a(e.M())), e.sm_mbf);
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
  y = class t extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.deadlineid || o(t.M()),
        d.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            deadlineid: {
              n: 1,
              br: u.readFixed64String,
              bw: e.writeFixed64String,
            },
            data: { n: 2, c: f },
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
      return s(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new d.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new d.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      l(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new d.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPartnerDeadline_GetDeadlineByTimeRange_Response_Result`;
    }
  },
  b = class t extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.state || o(t.M()),
        d.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            state: { n: 1, br: u.readEnum, bw: e.writeEnum },
            accountid: { n: 2, br: u.readUint32, bw: e.writeUint32 },
            key_json: { n: 3, br: u.readString, bw: e.writeString },
            partnerid: { n: 4, br: u.readUint32, bw: e.writeUint32 },
            rtime_create: { n: 5, br: u.readUint32, bw: e.writeUint32 },
            rtime_validity: { n: 6, br: u.readUint32, bw: e.writeUint32 },
            dismiss_id: {
              n: 7,
              br: u.readFixed64String,
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
      return s(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new d.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new d.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      l(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new d.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CDismissPinData`;
    }
  },
  x = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.dismiss_list || o(e.M()),
        d.Message.initialize(this, t, 0, -1, [1], null));
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
      return ((e.sm_mbf ||= a(e.M())), e.sm_mbf);
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
    constructor(t = null) {
      (super(),
        e.prototype.dismiss_list || o(e.M()),
        d.Message.initialize(this, t, 0, -1, [1], null));
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
      return ((e.sm_mbf ||= a(e.M())), e.sm_mbf);
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
  C = class t extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.partnerid || o(t.M()),
        d.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            partnerid: { n: 1, br: u.readUint32, bw: e.writeUint32 },
            accountid: { n: 2, br: u.readUint32, bw: e.writeUint32 },
            rtime_after: { n: 3, br: u.readUint32, bw: e.writeUint32 },
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
      return s(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new d.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new d.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      l(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new d.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPartnerDismiss_GetDismissTimeRange_Request`;
    }
  },
  w = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.dismiss_list || o(e.M()),
        d.Message.initialize(this, t, 0, -1, [1], null));
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
      return ((e.sm_mbf ||= a(e.M())), e.sm_mbf);
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
  T = class t extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.dismiss_id || o(t.M()),
        d.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            dismiss_id: {
              n: 7,
              br: u.readFixed64String,
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
      return s(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new d.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new d.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      l(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new d.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
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
  function n(e, n, r) {
    return e.SendMsg(
      `PartnerDeadline.GetDeadlinesForPartner#1`,
      t(m, n, r),
      h,
      { bConstMethod: !0, ePrivilege: 1 },
    );
  }
  e.GetDeadlinesForPartner = n;
  function r(e, n, r) {
    return e.SendMsg(
      `PartnerDeadline.GetDeadlineByTimeRange#1`,
      t(_, n, r),
      v,
      { bConstMethod: !0, ePrivilege: 4 },
    );
  }
  e.GetDeadlineByTimeRange = r;
})((D ||= {}));
var O;
(function (e) {
  function n(e, n, r) {
    return e.SendMsg(`PartnerDismiss.CreateDismiss#1`, t(x, n, r), S, {
      ePrivilege: 1,
      rgBrowserAPISites: [`partner`],
    });
  }
  e.CreateDismiss = n;
  function r(e, n, r) {
    return e.SendMsg(`PartnerDismiss.GetDismissTimeRange#1`, t(C, n, r), w, {
      bConstMethod: !0,
      ePrivilege: 1,
      rgBrowserAPISites: [`partner`],
    });
  }
  e.GetDismissTimeRange = r;
  function i(e, n, r) {
    return e.SendMsg(`PartnerDismiss.DeleteDismiss#1`, t(T, n, r), E, {
      ePrivilege: 1,
      rgBrowserAPISites: [`partner`],
    });
  }
  e.DeleteDismiss = i;
})((O ||= {}));
export { O as a, C as i, x as n, T as r, b as t };
