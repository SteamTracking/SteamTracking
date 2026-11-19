import { o as e } from "./chunk~f025431ab0.js?contenthash=C8f2gWku";
import {
  Ga as t,
  Ia as n,
  Ka as r,
  Ma as i,
  Si as a,
  Xa as o,
  _i as s,
  ar as c,
  bi as l,
  ga as u,
  gi as d,
  hi as f,
  mi as p,
  pn as m,
  va as h,
  vi as g,
  xi as _,
  yi as v,
} from "./chunk~3126832f23.js?contenthash=Bx8rJGPC";
import { hr as y } from "./chunk~6b8ddcaac8.js?contenthash=BqRs3VIz";
import { t as b } from "./chunk~25a6634263.js?contenthash=Cuq2ajP3";
import { t as x } from "./chunk~ede3e357a2.js?contenthash=DGMGRaFx";
import { C as S } from "./library.js?contenthash=CVZWwsCP";
import { r as C, t as w } from "./chunk~70c16cc80c.js?contenthash=NVzsXtAX";
var T = e(a(), 1),
  E = class e extends T.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || p(e.M()),
        T.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: s.readUint32, bw: _.writeUint32 },
            clan_steamid: {
              n: 2,
              br: s.readFixed64String,
              bw: _.writeFixed64String,
            },
            relation: { n: 3, br: s.readEnum, bw: _.writeEnum },
            linkname: { n: 4, br: s.readString, bw: _.writeString },
            json: { n: 5, br: s.readString, bw: _.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= g(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return l(e.M(), t, n);
    }
    static fromObject(t) {
      return d(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new T.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return f(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new T.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      v(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new T.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CDeveloperPageLink`;
    }
  },
  D = class e extends T.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.clan_account_id || p(e.M()),
        T.Message.initialize(this, t, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            clan_account_id: { n: 1, br: s.readUint32, bw: _.writeUint32 },
            appid_list: {
              n: 2,
              r: !0,
              q: !0,
              br: s.readUint32,
              pbr: s.readPackedUint32,
              bw: _.writeRepeatedUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= g(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return l(e.M(), t, n);
    }
    static fromObject(t) {
      return d(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new T.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return f(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new T.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      v(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new T.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CDeveloperPageToApps`;
    }
  },
  O = class e extends T.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || p(e.M()),
        T.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: s.readUint32, bw: _.writeUint32 },
            link: { n: 2, c: E },
            remove: { n: 3, d: !1, br: s.readBool, bw: _.writeBool },
            update_json_only: { n: 4, d: !1, br: s.readBool, bw: _.writeBool },
            skip_clan_permissions: {
              n: 5,
              d: !1,
              br: s.readBool,
              bw: _.writeBool,
            },
            partner_id: { n: 6, br: s.readUint32, bw: _.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= g(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return l(e.M(), t, n);
    }
    static fromObject(t) {
      return d(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new T.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return f(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new T.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      v(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new T.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStoreCatalog_SetDevPageLink_Request`;
    }
  },
  k = class e extends T.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), T.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new T.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new T.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new T.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStoreCatalog_SetDevPageLink_Response`;
    }
  },
  A = class e extends T.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || p(e.M()),
        T.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { appid: { n: 1, br: s.readUint32, bw: _.writeUint32 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= g(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return l(e.M(), t, n);
    }
    static fromObject(t) {
      return d(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new T.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return f(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new T.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      v(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new T.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStoreCatalog_GetDevPageLinks_Request`;
    }
  },
  j = class e extends T.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.links || p(e.M()),
        T.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { links: { n: 1, c: E, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= g(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return l(e.M(), t, n);
    }
    static fromObject(t) {
      return d(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new T.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return f(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new T.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      v(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new T.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStoreCatalog_GetDevPageLinks_Response`;
    }
  },
  M = class e extends T.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.clan_account_ids || p(e.M()),
        T.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            clan_account_ids: {
              n: 1,
              r: !0,
              q: !0,
              br: s.readUint32,
              pbr: s.readPackedUint32,
              bw: _.writeRepeatedUint32,
            },
            ignore_dlc: { n: 2, br: s.readBool, bw: _.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= g(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return l(e.M(), t, n);
    }
    static fromObject(t) {
      return d(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new T.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return f(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new T.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      v(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new T.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStoreCatalog_GetDevPageAllAppsLinked_Request`;
    }
  },
  N = class e extends T.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.results || p(e.M()),
        T.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { results: { n: 1, c: D, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= g(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return l(e.M(), t, n);
    }
    static fromObject(t) {
      return d(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new T.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return f(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new T.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      v(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new T.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStoreCatalog_GetDevPageAllAppsLinked_Response`;
    }
  },
  P = class e extends T.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.clan_account_id || p(e.M()),
        T.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            clan_account_id: { n: 1, br: s.readUint32, bw: _.writeUint32 },
            listid: { n: 2, br: s.readUint64String, bw: _.writeUint64String },
            ignore_dlc: { n: 3, br: s.readBool, bw: _.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= g(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return l(e.M(), t, n);
    }
    static fromObject(t) {
      return d(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new T.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return f(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new T.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      v(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new T.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStoreCatalog_GetDevPageListApps_Request`;
    }
  },
  F = class e extends T.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.apps || p(e.M()),
        T.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { apps: { n: 1, c: I, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= g(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return l(e.M(), t, n);
    }
    static fromObject(t) {
      return d(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new T.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return f(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new T.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      v(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new T.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStoreCatalog_GetDevPageListApps_Response`;
    }
  },
  I = class e extends T.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || p(e.M()),
        T.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: s.readUint32, bw: _.writeUint32 },
            sort_order: { n: 2, br: s.readUint32, bw: _.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= g(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return l(e.M(), t, n);
    }
    static fromObject(t) {
      return d(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new T.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return f(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new T.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      v(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new T.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStoreCatalog_GetDevPageListApps_Response_ListApp`;
    }
  },
  L = class e extends T.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.partnerid || p(e.M()),
        T.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { partnerid: { n: 1, br: s.readUint32, bw: _.writeUint32 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= g(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return l(e.M(), t, n);
    }
    static fromObject(t) {
      return d(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new T.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return f(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new T.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      v(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new T.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStoreCatalog_GetDevPagesForPartner_Request`;
    }
  },
  R = class e extends T.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.results || p(e.M()),
        T.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { results: { n: 1, c: z, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= g(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return l(e.M(), t, n);
    }
    static fromObject(t) {
      return d(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new T.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return f(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new T.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      v(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new T.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStoreCatalog_GetDevPagesForPartner_Response`;
    }
  },
  z = class e extends T.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.clan_accountid || p(e.M()),
        T.Message.initialize(this, t, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            clan_accountid: { n: 1, br: s.readUint32, bw: _.writeUint32 },
            linknames: {
              n: 2,
              r: !0,
              q: !0,
              br: s.readString,
              bw: _.writeRepeatedString,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= g(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return l(e.M(), t, n);
    }
    static fromObject(t) {
      return d(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new T.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return f(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new T.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      v(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new T.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStoreCatalog_GetDevPagesForPartner_Response_CDevPageInfo`;
    }
  },
  B;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(`StoreCatalog.SetDevPageLink#1`, c(O, t, n), k, {
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
      rgBrowserAPISites: [`partner`],
    });
  }
  e.SetDevPageLink = t;
  function n(e, t, n) {
    return e.SendMsg(`StoreCatalog.GetDevPageLinks#1`, c(A, t, n), j, {
      bConstMethod: !0,
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
      rgBrowserAPISites: [`partner`],
    });
  }
  e.GetDevPageLinks = n;
  function r(e, t, n) {
    return e.SendMsg(`StoreCatalog.GetDevPageAllAppsLinked#1`, c(M, t, n), N, {
      ePrivilege: 1,
      rgBrowserAPISites: [`partner`, `community`],
    });
  }
  e.GetDevPageAllAppsLinked = r;
  function i(e, t, n) {
    return e.SendMsg(`StoreCatalog.GetDevPageListApps#1`, c(P, t, n), F, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
      rgBrowserAPISites: [`partner`, `community`],
    });
  }
  e.GetDevPageListApps = i;
  function a(e, t, n) {
    return e.SendMsg(`StoreCatalog.GetDevPagesForPartner#1`, c(L, t, n), R, {
      bConstMethod: !0,
      ePrivilege: 1,
      rgBrowserAPISites: [`partner`],
    });
  }
  e.GetDevPagesForPartner = a;
})((B ||= {}));
var V = e(S()),
  H = class {
    m_clanSteamID;
    m_appidList = [];
    m_strName = ``;
    m_strAvatarURLFullSize = ``;
    m_strTagLineLoc = ``;
    m_nFollowers = 0;
    m_strVanity = ``;
    m_webLink = void 0;
    m_linkedEvent = void 0;
    m_mapListInfo = new Map();
    m_promise;
    m_bIsLoaded = !1;
    m_bIsHidden = !1;
    m_clanAccountFlags = 0;
    constructor(e) {
      (t(this), (this.m_clanSteamID = e));
    }
    Initialize(e) {
      ((this.m_strName = e.name || ``),
        (this.m_strAvatarURLFullSize =
          e.avatar_url_full_size ||
          `https://avatars.steamstatic.com/fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb_full.jpg`),
        (this.m_strTagLineLoc = e.tag_line_localized || ``),
        (this.m_nFollowers = e.followers || 0),
        (this.m_strVanity = e.vanity || void 0),
        (this.m_webLink = e.weblink),
        (this.m_bIsHidden = e.hidden || !1),
        (this.m_clanAccountFlags = e.clan_account_flags ?? 0),
        (this.m_linkedEvent = e.linked_event),
        (this.m_mapListInfo = new Map(Object.entries(e.list_info ?? {}))),
        e.appids && e.appids.forEach((e) => this.m_appidList.push(e)),
        (this.m_bIsLoaded = !0));
    }
    GetCreatorHomeIdentifier() {
      return {
        name: this.m_strName,
        clan_account_id: this.m_clanSteamID.GetAccountID(),
        type: `developer`,
        hidden: this.m_bIsHidden,
      };
    }
    BIsPartnerEventEditorEnabled() {
      return !!(this.m_clanAccountFlags & 8);
    }
    BHasClanAccountFlagSet(e) {
      return !!(this.m_clanAccountFlags & e);
    }
    BIsLoaded() {
      return this.m_bIsLoaded;
    }
    GetClanSteamID() {
      return this.m_clanSteamID;
    }
    GetClanAccountID() {
      return this.m_clanSteamID.GetAccountID();
    }
    GetAppIDList() {
      return this.m_appidList;
    }
    GetName() {
      return this.m_strName;
    }
    GetAvatarURLFullSize() {
      return this.m_strAvatarURLFullSize;
    }
    GetTagLine() {
      return this.m_strTagLineLoc;
    }
    GetNumFollowers() {
      return this.m_nFollowers;
    }
    BIsHidden() {
      return this.m_bIsHidden;
    }
    GetCreatorHomeURL(e) {
      if (this.m_strVanity) {
        switch (e) {
          case `publisher`:
            return i.STORE_BASE_URL + `publisher/` + this.m_strVanity + `/`;
          case `franchise`:
            return i.STORE_BASE_URL + `franchise/` + this.m_strVanity + `/`;
        }
        return i.STORE_BASE_URL + `developer/` + this.m_strVanity + `/`;
      }
      return (
        i.STORE_BASE_URL + `curator/` + this.m_clanSteamID.GetAccountID() + `/`
      );
    }
    BHasWebLink() {
      return this.m_webLink !== void 0;
    }
    GetWebLink() {
      return this.m_webLink;
    }
    GetVanityString() {
      return this.m_strVanity;
    }
    GetLinkedEventGID() {
      return this.m_linkedEvent;
    }
    GetListInfo() {
      return this.m_mapListInfo;
    }
    AdjustFollower(e) {
      this.m_nFollowers += e;
    }
    async EnablePartnerEventEditorFlag() {
      this.BIsPartnerEventEditorEnabled() ||
        (await this.UpdateGroupFlagsFeature([2, 8], !0));
    }
    async UpdateGroupFlagsFeature(e, t) {
      let n = i.PARTNER_BASE_URL + `sales/ajaxupdateclanaccountflags`,
        r = this.m_clanAccountFlags;
      if (
        (e.forEach((e) => {
          t ? (r |= e) : (r &= ~e);
        }),
        r == this.m_clanAccountFlags)
      )
        return;
      let a = [];
      (r & 1 && a.push(1),
        r & 8 && a.push(8),
        r & 2 && a.push(2),
        r & 4 && a.push(4),
        r & 16 && a.push(16),
        r & 32 && a.push(32),
        r & 64 && a.push(64),
        r & 128 && a.push(128),
        r & 256 && a.push(256));
      let o = new FormData();
      (o.append(`sessionid`, u()),
        o.append(`clan_account_id`, this.GetClanAccountID().toString()),
        o.append(`accountflags`, JSON.stringify(a)));
      let s = await V.default.post(n, o);
      s &&
        s.status == 200 &&
        s.data.success == 1 &&
        (this.m_clanAccountFlags = r);
    }
  };
(m([r], H.prototype, `m_appidList`, void 0),
  m([r], H.prototype, `m_nFollowers`, void 0),
  m([r], H.prototype, `m_clanAccountFlags`, void 0));
var U = class e {
  constructor() {
    t(this);
  }
  m_mapClanToCreatorHome = new Map();
  m_mapAppToCreatorIDList = new Map();
  m_bLoadedFromConfig = !1;
  m_serviceTransport = void 0;
  LazyInit() {
    if (!this.m_bLoadedFromConfig) {
      let t = h(`creatorhome`, `application_config`);
      this.ValidateStoreDefault(t) &&
        t.forEach((t) => {
          let n = Number(t.creator_clan_id),
            r = new H(b.InitFromClanID(n, i.EUNIVERSE));
          (r.Initialize(t),
            (r.m_promise = e.GetAsPromise(r)),
            this.m_mapClanToCreatorHome.set(n, r));
        });
      let n = h(`creatorhomeforapp`, `application_config`);
      (this.ValidateStoreDefaultAppList(n) &&
        n.forEach((e) => {
          e.appid !== void 0 &&
            (this.m_mapAppToCreatorIDList.has(e.appid) ||
              this.m_mapAppToCreatorIDList.set(e.appid, []),
            this.m_mapAppToCreatorIDList.get(e.appid).push(e));
        }),
        (this.m_bLoadedFromConfig = !0));
    }
  }
  GetServiceTransport() {
    if (!this.m_serviceTransport) {
      let e = h(`loyalty_webapi_token`, `application_config`),
        t = w(new C(i.WEBAPI_BASE_URL, e || void 0));
      this.m_serviceTransport = t.GetServiceTransport();
    }
    return this.m_serviceTransport;
  }
  static async GetAsPromise(e) {
    return e;
  }
  ValidateStoreDefault(e) {
    let t = e;
    return t && Array.isArray(t) && t.length > 0 && typeof t[0] == `object`
      ? typeof t[0].name == `string` &&
          (typeof t[0].creator_clan_id == `string` ||
            typeof t[0].creator_clan_id == `number`)
      : !1;
  }
  ValidateStoreDefaultAppList(e) {
    let t = e;
    return t && Array.isArray(t) && t.length > 0 && typeof t[0] == `object`
      ? typeof t[0].clan_account_id == `number` &&
          t[0].clan_account_id > 0 &&
          typeof t[0].appid == `number` &&
          t[0].appid > 0
      : !1;
  }
  BHasCreatorHomeLoaded(e) {
    return (
      this.m_mapClanToCreatorHome.has(e.GetAccountID()) &&
      this.m_mapClanToCreatorHome.get(e.GetAccountID()).BIsLoaded()
    );
  }
  GetCreatorHome(e) {
    return this.m_mapClanToCreatorHome.get(e.GetAccountID());
  }
  GetCreatorHomeByID(e) {
    return this.m_mapClanToCreatorHome.get(e.clan_account_id);
  }
  async LoadCreatorHome(e, t = !1, n) {
    if (
      (this.LazyInit(), t || !this.m_mapClanToCreatorHome.has(e.GetAccountID()))
    ) {
      let t = new H(e);
      ((t.m_promise = this.InternalCreatorHome(t, n)),
        await t.m_promise,
        this.m_mapClanToCreatorHome.set(e.GetAccountID(), t));
    }
    return this.m_mapClanToCreatorHome.get(e.GetAccountID()).m_promise;
  }
  async InternalCreatorHome(e, t) {
    let n = { get_appids: !0, l: i.LANGUAGE },
      r =
        i.STORE_BASE_URL +
        `curator/` +
        e.GetClanAccountID() +
        `/ajaxgetcreatorhomeinfo`,
      a = await V.default.get(r, { params: n, cancelToken: t && t.token });
    return (e.Initialize(a.data), e);
  }
  async LoadCreatorHomeListForAppIncludeHiddden(e, t) {
    if ((this.LazyInit(), !this.m_mapAppToCreatorIDList.has(e))) {
      let n = { appid: e },
        r = i.STORE_BASE_URL + `events/ajaxgetcreatorhomeidforapp`,
        a = await V.default.get(r, {
          params: n,
          cancelToken: t && t.token,
          withCredentials: !0,
        });
      this.m_mapAppToCreatorIDList.set(e, a.data.creator_list);
    }
    return this.m_mapAppToCreatorIDList.get(e);
  }
  async SearchCreatorHomeStore(e, t, n) {
    let r = `${i.STORE_BASE_URL}curator/0/ajaxsearchcurators`,
      a = {
        term: e.replace(` `, `+`),
        require_creator: t,
        cc: i.COUNTRY,
        l: i.LANGUAGE,
        origin: self.origin,
      },
      s = [],
      c = await V.default.get(r, { params: a, cancelToken: n.token });
    return (
      c.data.curators &&
        o(() => {
          c.data.curators.forEach((e) => {
            if (!this.m_mapClanToCreatorHome.has(e.creator_clan_id)) {
              let t = new H(b.InitFromClanID(e.creator_clan_id, i.EUNIVERSE));
              (t.Initialize(e),
                this.m_mapClanToCreatorHome.set(e.creator_clan_id, t));
            }
            s.push(this.m_mapClanToCreatorHome.get(e.creator_clan_id));
          });
        }),
      s
    );
  }
  GetCreatorHomeListForAppIncludeHidden(e) {
    return this.m_mapAppToCreatorIDList.has(e)
      ? this.m_mapAppToCreatorIDList.get(e)
      : [];
  }
};
(m([r], U.prototype, `m_mapClanToCreatorHome`, void 0),
  m([r], U.prototype, `m_mapAppToCreatorIDList`, void 0),
  m([n], U.prototype, `LazyInit`, null));
var W = new U();
y(`g_CreatorHomeStore`, W);
function G(e) {
  if (!e) return null;
  let t = W.BHasCreatorHomeLoaded(e.clanSteamID)
    ? W.GetCreatorHome(e.clanSteamID)
    : void 0;
  return e.GetSaleURL(t?.GetCreatorHomeURL(`developer`));
}
function K(e) {
  let t = b.InitFromClanID(e, i.EUNIVERSE);
  return {
    queryKey: [`CreatorHome`, e],
    initialData: () => W.GetCreatorHome(t),
    queryFn: async () => {
      let t = b.InitFromClanID(e, i.EUNIVERSE);
      return await W.LoadCreatorHome(t, !0);
    },
  };
}
function q(e) {
  let { data: t, isFetching: n, refetch: r } = x(K(e));
  return { creatorHome: t, isFetching: n, refetch: r };
}
export { W as n, q as r, G as t };
