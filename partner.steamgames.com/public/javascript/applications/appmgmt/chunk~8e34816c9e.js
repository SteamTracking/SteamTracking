/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import {
  Gt as e,
  Jt as t,
  Kt as n,
  Ut as r,
  Wt as i,
  Xt as a,
  Yt as o,
  Zt as s,
  bt as c,
  qt as l,
  sn as u,
} from "./chunk~de7f2df91c.js";
var d = u(s(), 1),
  f = class s extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        s.prototype.partnerid || r(s.M()),
        d.Message.initialize(this, e, 0, -1, [5], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (s.sm_m ||= {
          proto: s,
          fields: {
            partnerid: { n: 1, br: n.readUint32, bw: a.writeUint32 },
            accountid: { n: 13, br: n.readUint32, bw: a.writeUint32 },
            type: { n: 2, br: n.readEnum, bw: a.writeEnum },
            status: { n: 3, br: n.readEnum, bw: a.writeEnum },
            due_date: { n: 4, br: n.readUint32, bw: a.writeUint32 },
            email_days_before_due: {
              n: 5,
              r: !0,
              q: !0,
              br: n.readUint32,
              pbr: n.readPackedUint32,
              bw: a.writeRepeatedUint32,
            },
            gid: { n: 6, br: n.readFixed64String, bw: a.writeFixed64String },
            store_item_type: { n: 7, br: n.readEnum, bw: a.writeEnum },
            store_item_id: { n: 8, br: n.readUint32, bw: a.writeUint32 },
            discount_event_id: { n: 9, br: n.readUint32, bw: a.writeUint32 },
            required_rights: {
              n: 11,
              br: n.readUint64String,
              bw: a.writeUint64String,
            },
            description_jsondata: {
              n: 10,
              br: n.readString,
              bw: a.writeString,
            },
            send_email_on_creation: { n: 12, br: n.readBool, bw: a.writeBool },
          },
        }),
        s.sm_m
      );
    }
    static MBF() {
      return ((s.sm_mbf ||= l(s.M())), s.sm_mbf);
    }
    toObject(e = !1) {
      return s.toObject(e, this);
    }
    static toObject(e, t) {
      return o(s.M(), e, t);
    }
    static fromObject(t) {
      return e(s.M(), t);
    }
    static deserializeBinary(e) {
      let t = new d.BinaryReader(e),
        n = new s();
      return s.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return i(s.MBF(), e, t);
    }
    serializeBinary() {
      var e = new d.BinaryWriter();
      return (s.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      t(s.M(), e, n);
    }
    serializeBase64String() {
      var e = new d.BinaryWriter();
      return (s.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPartnerDeadline`;
    }
  },
  p = class s extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        s.prototype.deadlineid || r(s.M()),
        d.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (s.sm_m ||= {
          proto: s,
          fields: {
            deadlineid: {
              n: 1,
              br: n.readFixed64String,
              bw: a.writeFixed64String,
            },
            partnerid: { n: 2, br: n.readUint32, bw: a.writeUint32 },
            accountid: { n: 8, br: n.readUint32, bw: a.writeUint32 },
            type: { n: 3, br: n.readEnum, bw: a.writeEnum },
            gid: { n: 4, br: n.readFixed64String, bw: a.writeFixed64String },
            store_item_type: { n: 5, br: n.readEnum, bw: a.writeEnum },
            store_item_id: { n: 6, br: n.readUint32, bw: a.writeUint32 },
            discount_event_id: { n: 7, br: n.readUint32, bw: a.writeUint32 },
          },
        }),
        s.sm_m
      );
    }
    static MBF() {
      return ((s.sm_mbf ||= l(s.M())), s.sm_mbf);
    }
    toObject(e = !1) {
      return s.toObject(e, this);
    }
    static toObject(e, t) {
      return o(s.M(), e, t);
    }
    static fromObject(t) {
      return e(s.M(), t);
    }
    static deserializeBinary(e) {
      let t = new d.BinaryReader(e),
        n = new s();
      return s.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return i(s.MBF(), e, t);
    }
    serializeBinary() {
      var e = new d.BinaryWriter();
      return (s.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      t(s.M(), e, n);
    }
    serializeBase64String() {
      var e = new d.BinaryWriter();
      return (s.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPartnerDeadlineLookUpKey`;
    }
  },
  m = class s extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        s.prototype.partnerid || r(s.M()),
        d.Message.initialize(this, e, 0, -1, [5], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (s.sm_m ||= {
          proto: s,
          fields: {
            partnerid: { n: 1, br: n.readUint32, bw: a.writeUint32 },
            accountid: { n: 6, br: n.readUint32, bw: a.writeUint32 },
            start_date: { n: 2, br: n.readUint32, bw: a.writeUint32 },
            end_date: { n: 3, br: n.readUint32, bw: a.writeUint32 },
            include_complete: { n: 4, br: n.readBool, bw: a.writeBool },
            lookup_key: { n: 5, c: p, r: !0, q: !0 },
          },
        }),
        s.sm_m
      );
    }
    static MBF() {
      return ((s.sm_mbf ||= l(s.M())), s.sm_mbf);
    }
    toObject(e = !1) {
      return s.toObject(e, this);
    }
    static toObject(e, t) {
      return o(s.M(), e, t);
    }
    static fromObject(t) {
      return e(s.M(), t);
    }
    static deserializeBinary(e) {
      let t = new d.BinaryReader(e),
        n = new s();
      return s.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return i(s.MBF(), e, t);
    }
    serializeBinary() {
      var e = new d.BinaryWriter();
      return (s.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      t(s.M(), e, n);
    }
    serializeBase64String() {
      var e = new d.BinaryWriter();
      return (s.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPartnerDeadline_GetDeadlinesForPartner_Request`;
    }
  },
  h = class n extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        n.prototype.deadlines || r(n.M()),
        d.Message.initialize(this, e, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (n.sm_m ||= {
          proto: n,
          fields: { deadlines: { n: 1, c: g, r: !0, q: !0 } },
        }),
        n.sm_m
      );
    }
    static MBF() {
      return ((n.sm_mbf ||= l(n.M())), n.sm_mbf);
    }
    toObject(e = !1) {
      return n.toObject(e, this);
    }
    static toObject(e, t) {
      return o(n.M(), e, t);
    }
    static fromObject(t) {
      return e(n.M(), t);
    }
    static deserializeBinary(e) {
      let t = new d.BinaryReader(e),
        r = new n();
      return n.deserializeBinaryFromReader(r, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return i(n.MBF(), e, t);
    }
    serializeBinary() {
      var e = new d.BinaryWriter();
      return (n.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      t(n.M(), e, r);
    }
    serializeBase64String() {
      var e = new d.BinaryWriter();
      return (n.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPartnerDeadline_GetDeadlinesForPartner_Response`;
    }
  },
  g = class s extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        s.prototype.deadlineid || r(s.M()),
        d.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (s.sm_m ||= {
          proto: s,
          fields: {
            deadlineid: {
              n: 1,
              br: n.readFixed64String,
              bw: a.writeFixed64String,
            },
            data: { n: 2, c: f },
          },
        }),
        s.sm_m
      );
    }
    static MBF() {
      return ((s.sm_mbf ||= l(s.M())), s.sm_mbf);
    }
    toObject(e = !1) {
      return s.toObject(e, this);
    }
    static toObject(e, t) {
      return o(s.M(), e, t);
    }
    static fromObject(t) {
      return e(s.M(), t);
    }
    static deserializeBinary(e) {
      let t = new d.BinaryReader(e),
        n = new s();
      return s.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return i(s.MBF(), e, t);
    }
    serializeBinary() {
      var e = new d.BinaryWriter();
      return (s.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      t(s.M(), e, n);
    }
    serializeBase64String() {
      var e = new d.BinaryWriter();
      return (s.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPartnerDeadline_GetDeadlinesForPartner_Response_Result`;
    }
  },
  _ = class s extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        s.prototype.type || r(s.M()),
        d.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (s.sm_m ||= {
          proto: s,
          fields: {
            type: { n: 1, br: n.readEnum, bw: a.writeEnum },
            start_date: { n: 2, br: n.readUint32, bw: a.writeUint32 },
            end_date: { n: 3, br: n.readUint32, bw: a.writeUint32 },
            include_complete: { n: 4, br: n.readBool, bw: a.writeBool },
            store_item_type: { n: 7, br: n.readEnum, bw: a.writeEnum },
            store_item_id: { n: 8, br: n.readUint32, bw: a.writeUint32 },
          },
        }),
        s.sm_m
      );
    }
    static MBF() {
      return ((s.sm_mbf ||= l(s.M())), s.sm_mbf);
    }
    toObject(e = !1) {
      return s.toObject(e, this);
    }
    static toObject(e, t) {
      return o(s.M(), e, t);
    }
    static fromObject(t) {
      return e(s.M(), t);
    }
    static deserializeBinary(e) {
      let t = new d.BinaryReader(e),
        n = new s();
      return s.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return i(s.MBF(), e, t);
    }
    serializeBinary() {
      var e = new d.BinaryWriter();
      return (s.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      t(s.M(), e, n);
    }
    serializeBase64String() {
      var e = new d.BinaryWriter();
      return (s.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPartnerDeadline_GetDeadlineByTimeRange_Request`;
    }
  },
  v = class n extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        n.prototype.deadlines || r(n.M()),
        d.Message.initialize(this, e, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (n.sm_m ||= {
          proto: n,
          fields: { deadlines: { n: 1, c: y, r: !0, q: !0 } },
        }),
        n.sm_m
      );
    }
    static MBF() {
      return ((n.sm_mbf ||= l(n.M())), n.sm_mbf);
    }
    toObject(e = !1) {
      return n.toObject(e, this);
    }
    static toObject(e, t) {
      return o(n.M(), e, t);
    }
    static fromObject(t) {
      return e(n.M(), t);
    }
    static deserializeBinary(e) {
      let t = new d.BinaryReader(e),
        r = new n();
      return n.deserializeBinaryFromReader(r, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return i(n.MBF(), e, t);
    }
    serializeBinary() {
      var e = new d.BinaryWriter();
      return (n.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      t(n.M(), e, r);
    }
    serializeBase64String() {
      var e = new d.BinaryWriter();
      return (n.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPartnerDeadline_GetDeadlineByTimeRange_Response`;
    }
  },
  y = class s extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        s.prototype.deadlineid || r(s.M()),
        d.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (s.sm_m ||= {
          proto: s,
          fields: {
            deadlineid: {
              n: 1,
              br: n.readFixed64String,
              bw: a.writeFixed64String,
            },
            data: { n: 2, c: f },
          },
        }),
        s.sm_m
      );
    }
    static MBF() {
      return ((s.sm_mbf ||= l(s.M())), s.sm_mbf);
    }
    toObject(e = !1) {
      return s.toObject(e, this);
    }
    static toObject(e, t) {
      return o(s.M(), e, t);
    }
    static fromObject(t) {
      return e(s.M(), t);
    }
    static deserializeBinary(e) {
      let t = new d.BinaryReader(e),
        n = new s();
      return s.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return i(s.MBF(), e, t);
    }
    serializeBinary() {
      var e = new d.BinaryWriter();
      return (s.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      t(s.M(), e, n);
    }
    serializeBase64String() {
      var e = new d.BinaryWriter();
      return (s.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPartnerDeadline_GetDeadlineByTimeRange_Response_Result`;
    }
  },
  b = class s extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        s.prototype.state || r(s.M()),
        d.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (s.sm_m ||= {
          proto: s,
          fields: {
            state: { n: 1, br: n.readEnum, bw: a.writeEnum },
            accountid: { n: 2, br: n.readUint32, bw: a.writeUint32 },
            key_json: { n: 3, br: n.readString, bw: a.writeString },
            partnerid: { n: 4, br: n.readUint32, bw: a.writeUint32 },
            rtime_create: { n: 5, br: n.readUint32, bw: a.writeUint32 },
            rtime_validity: { n: 6, br: n.readUint32, bw: a.writeUint32 },
            dismiss_id: {
              n: 7,
              br: n.readFixed64String,
              bw: a.writeFixed64String,
            },
          },
        }),
        s.sm_m
      );
    }
    static MBF() {
      return ((s.sm_mbf ||= l(s.M())), s.sm_mbf);
    }
    toObject(e = !1) {
      return s.toObject(e, this);
    }
    static toObject(e, t) {
      return o(s.M(), e, t);
    }
    static fromObject(t) {
      return e(s.M(), t);
    }
    static deserializeBinary(e) {
      let t = new d.BinaryReader(e),
        n = new s();
      return s.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return i(s.MBF(), e, t);
    }
    serializeBinary() {
      var e = new d.BinaryWriter();
      return (s.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      t(s.M(), e, n);
    }
    serializeBase64String() {
      var e = new d.BinaryWriter();
      return (s.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CDismissPinData`;
    }
  },
  x = class n extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        n.prototype.dismiss_list || r(n.M()),
        d.Message.initialize(this, e, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (n.sm_m ||= {
          proto: n,
          fields: { dismiss_list: { n: 1, c: b, r: !0, q: !0 } },
        }),
        n.sm_m
      );
    }
    static MBF() {
      return ((n.sm_mbf ||= l(n.M())), n.sm_mbf);
    }
    toObject(e = !1) {
      return n.toObject(e, this);
    }
    static toObject(e, t) {
      return o(n.M(), e, t);
    }
    static fromObject(t) {
      return e(n.M(), t);
    }
    static deserializeBinary(e) {
      let t = new d.BinaryReader(e),
        r = new n();
      return n.deserializeBinaryFromReader(r, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return i(n.MBF(), e, t);
    }
    serializeBinary() {
      var e = new d.BinaryWriter();
      return (n.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      t(n.M(), e, r);
    }
    serializeBase64String() {
      var e = new d.BinaryWriter();
      return (n.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPartnerDismiss_CreateDismiss_Request`;
    }
  },
  S = class n extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        n.prototype.dismiss_list || r(n.M()),
        d.Message.initialize(this, e, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (n.sm_m ||= {
          proto: n,
          fields: { dismiss_list: { n: 1, c: b, r: !0, q: !0 } },
        }),
        n.sm_m
      );
    }
    static MBF() {
      return ((n.sm_mbf ||= l(n.M())), n.sm_mbf);
    }
    toObject(e = !1) {
      return n.toObject(e, this);
    }
    static toObject(e, t) {
      return o(n.M(), e, t);
    }
    static fromObject(t) {
      return e(n.M(), t);
    }
    static deserializeBinary(e) {
      let t = new d.BinaryReader(e),
        r = new n();
      return n.deserializeBinaryFromReader(r, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return i(n.MBF(), e, t);
    }
    serializeBinary() {
      var e = new d.BinaryWriter();
      return (n.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      t(n.M(), e, r);
    }
    serializeBase64String() {
      var e = new d.BinaryWriter();
      return (n.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPartnerDismiss_CreateDismiss_Response`;
    }
  },
  C = class s extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        s.prototype.partnerid || r(s.M()),
        d.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (s.sm_m ||= {
          proto: s,
          fields: {
            partnerid: { n: 1, br: n.readUint32, bw: a.writeUint32 },
            accountid: { n: 2, br: n.readUint32, bw: a.writeUint32 },
            rtime_after: { n: 3, br: n.readUint32, bw: a.writeUint32 },
          },
        }),
        s.sm_m
      );
    }
    static MBF() {
      return ((s.sm_mbf ||= l(s.M())), s.sm_mbf);
    }
    toObject(e = !1) {
      return s.toObject(e, this);
    }
    static toObject(e, t) {
      return o(s.M(), e, t);
    }
    static fromObject(t) {
      return e(s.M(), t);
    }
    static deserializeBinary(e) {
      let t = new d.BinaryReader(e),
        n = new s();
      return s.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return i(s.MBF(), e, t);
    }
    serializeBinary() {
      var e = new d.BinaryWriter();
      return (s.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      t(s.M(), e, n);
    }
    serializeBase64String() {
      var e = new d.BinaryWriter();
      return (s.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPartnerDismiss_GetDismissTimeRange_Request`;
    }
  },
  w = class n extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        n.prototype.dismiss_list || r(n.M()),
        d.Message.initialize(this, e, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (n.sm_m ||= {
          proto: n,
          fields: { dismiss_list: { n: 1, c: b, r: !0, q: !0 } },
        }),
        n.sm_m
      );
    }
    static MBF() {
      return ((n.sm_mbf ||= l(n.M())), n.sm_mbf);
    }
    toObject(e = !1) {
      return n.toObject(e, this);
    }
    static toObject(e, t) {
      return o(n.M(), e, t);
    }
    static fromObject(t) {
      return e(n.M(), t);
    }
    static deserializeBinary(e) {
      let t = new d.BinaryReader(e),
        r = new n();
      return n.deserializeBinaryFromReader(r, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return i(n.MBF(), e, t);
    }
    serializeBinary() {
      var e = new d.BinaryWriter();
      return (n.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      t(n.M(), e, r);
    }
    serializeBase64String() {
      var e = new d.BinaryWriter();
      return (n.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPartnerDismiss_GetDismissTimeRange_Response`;
    }
  },
  T = class s extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        s.prototype.dismiss_id || r(s.M()),
        d.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (s.sm_m ||= {
          proto: s,
          fields: {
            dismiss_id: {
              n: 7,
              br: n.readFixed64String,
              bw: a.writeFixed64String,
            },
          },
        }),
        s.sm_m
      );
    }
    static MBF() {
      return ((s.sm_mbf ||= l(s.M())), s.sm_mbf);
    }
    toObject(e = !1) {
      return s.toObject(e, this);
    }
    static toObject(e, t) {
      return o(s.M(), e, t);
    }
    static fromObject(t) {
      return e(s.M(), t);
    }
    static deserializeBinary(e) {
      let t = new d.BinaryReader(e),
        n = new s();
      return s.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return i(s.MBF(), e, t);
    }
    serializeBinary() {
      var e = new d.BinaryWriter();
      return (s.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      t(s.M(), e, n);
    }
    serializeBase64String() {
      var e = new d.BinaryWriter();
      return (s.serializeBinaryToWriter(this, e), e.getResultBase64String());
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
      c(m, t, n),
      h,
      { bConstMethod: !0, ePrivilege: 1 },
    );
  }
  e.GetDeadlinesForPartner = t;
  function n(e, t, n) {
    return e.SendMsg(
      `PartnerDeadline.GetDeadlineByTimeRange#1`,
      c(_, t, n),
      v,
      { bConstMethod: !0, ePrivilege: 4 },
    );
  }
  e.GetDeadlineByTimeRange = n;
})((D ||= {}));
var O;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(`PartnerDismiss.CreateDismiss#1`, c(x, t, n), S, {
      ePrivilege: 1,
      rgBrowserAPISites: [`partner`],
    });
  }
  e.CreateDismiss = t;
  function n(e, t, n) {
    return e.SendMsg(`PartnerDismiss.GetDismissTimeRange#1`, c(C, t, n), w, {
      bConstMethod: !0,
      ePrivilege: 1,
      rgBrowserAPISites: [`partner`],
    });
  }
  e.GetDismissTimeRange = n;
  function r(e, t, n) {
    return e.SendMsg(`PartnerDismiss.DeleteDismiss#1`, c(T, t, n), E, {
      ePrivilege: 1,
      rgBrowserAPISites: [`partner`],
    });
  }
  e.DeleteDismiss = r;
})((O ||= {}));
export { O as a, C as i, x as n, T as r, b as t };
