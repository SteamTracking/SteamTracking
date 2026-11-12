/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./chunk~f025431ab0.js";
import {
  At as t,
  Ct as n,
  Pt as r,
  jt as i,
  kt as a,
  st as o,
  tt as s,
} from "./chunk~01cfc309bf.js";
import "./chunk~b7c2818157.js";
import {
  $b as c,
  Ay as l,
  Lb as u,
  Ny as d,
  Qb as f,
  Tu as p,
  Vy as m,
  aS as h,
  bx as g,
  cx as _,
  eS as v,
  ed as y,
  iS as b,
  nS as x,
  nd as S,
  oS as C,
  rS as w,
  sS as T,
  tS as E,
  td as D,
  yx as O,
} from "./main.js";
var k = e(r(), 1),
  A = class e extends k.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || v(e.M()),
        k.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: w.readUint32, bw: T.writeUint32 },
            clan_steamid: {
              n: 2,
              br: w.readFixed64String,
              bw: T.writeFixed64String,
            },
            relation: { n: 3, br: w.readEnum, bw: T.writeEnum },
            linkname: { n: 4, br: w.readString, bw: T.writeString },
            json: { n: 5, br: w.readString, bw: T.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= b(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return C(e.M(), t, n);
    }
    static fromObject(t) {
      return x(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new k.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return E(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new k.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new k.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CDeveloperPageLink`;
    }
  },
  j = class e extends k.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.clan_account_id || v(e.M()),
        k.Message.initialize(this, t, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            clan_account_id: { n: 1, br: w.readUint32, bw: T.writeUint32 },
            appid_list: {
              n: 2,
              r: !0,
              q: !0,
              br: w.readUint32,
              pbr: w.readPackedUint32,
              bw: T.writeRepeatedUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= b(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return C(e.M(), t, n);
    }
    static fromObject(t) {
      return x(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new k.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return E(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new k.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new k.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CDeveloperPageToApps`;
    }
  },
  M = class e extends k.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || v(e.M()),
        k.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: w.readUint32, bw: T.writeUint32 },
            link: { n: 2, c: A },
            remove: { n: 3, d: !1, br: w.readBool, bw: T.writeBool },
            update_json_only: { n: 4, d: !1, br: w.readBool, bw: T.writeBool },
            skip_clan_permissions: {
              n: 5,
              d: !1,
              br: w.readBool,
              bw: T.writeBool,
            },
            partner_id: { n: 6, br: w.readUint32, bw: T.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= b(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return C(e.M(), t, n);
    }
    static fromObject(t) {
      return x(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new k.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return E(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new k.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new k.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStoreCatalog_SetDevPageLink_Request`;
    }
  },
  N = class e extends k.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), k.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new k.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new k.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new k.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStoreCatalog_SetDevPageLink_Response`;
    }
  },
  ee = class e extends k.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || v(e.M()),
        k.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { appid: { n: 1, br: w.readUint32, bw: T.writeUint32 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= b(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return C(e.M(), t, n);
    }
    static fromObject(t) {
      return x(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new k.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return E(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new k.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new k.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStoreCatalog_GetDevPageLinks_Request`;
    }
  },
  P = class e extends k.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.links || v(e.M()),
        k.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { links: { n: 1, c: A, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= b(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return C(e.M(), t, n);
    }
    static fromObject(t) {
      return x(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new k.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return E(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new k.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new k.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStoreCatalog_GetDevPageLinks_Response`;
    }
  },
  F = class e extends k.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.clan_account_ids || v(e.M()),
        k.Message.initialize(this, t, 0, -1, [1], null));
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
              br: w.readUint32,
              pbr: w.readPackedUint32,
              bw: T.writeRepeatedUint32,
            },
            ignore_dlc: { n: 2, br: w.readBool, bw: T.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= b(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return C(e.M(), t, n);
    }
    static fromObject(t) {
      return x(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new k.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return E(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new k.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new k.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStoreCatalog_GetDevPageAllAppsLinked_Request`;
    }
  },
  I = class e extends k.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.results || v(e.M()),
        k.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { results: { n: 1, c: j, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= b(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return C(e.M(), t, n);
    }
    static fromObject(t) {
      return x(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new k.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return E(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new k.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new k.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStoreCatalog_GetDevPageAllAppsLinked_Response`;
    }
  },
  L = class e extends k.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.clan_account_id || v(e.M()),
        k.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            clan_account_id: { n: 1, br: w.readUint32, bw: T.writeUint32 },
            listid: { n: 2, br: w.readUint64String, bw: T.writeUint64String },
            ignore_dlc: { n: 3, br: w.readBool, bw: T.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= b(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return C(e.M(), t, n);
    }
    static fromObject(t) {
      return x(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new k.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return E(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new k.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new k.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStoreCatalog_GetDevPageListApps_Request`;
    }
  },
  R = class e extends k.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.apps || v(e.M()),
        k.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { apps: { n: 1, c: z, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= b(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return C(e.M(), t, n);
    }
    static fromObject(t) {
      return x(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new k.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return E(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new k.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new k.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStoreCatalog_GetDevPageListApps_Response`;
    }
  },
  z = class e extends k.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || v(e.M()),
        k.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: w.readUint32, bw: T.writeUint32 },
            sort_order: { n: 2, br: w.readUint32, bw: T.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= b(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return C(e.M(), t, n);
    }
    static fromObject(t) {
      return x(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new k.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return E(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new k.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new k.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStoreCatalog_GetDevPageListApps_Response_ListApp`;
    }
  },
  B = class e extends k.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.partnerid || v(e.M()),
        k.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { partnerid: { n: 1, br: w.readUint32, bw: T.writeUint32 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= b(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return C(e.M(), t, n);
    }
    static fromObject(t) {
      return x(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new k.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return E(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new k.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new k.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStoreCatalog_GetDevPagesForPartner_Request`;
    }
  },
  V = class e extends k.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.results || v(e.M()),
        k.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { results: { n: 1, c: H, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= b(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return C(e.M(), t, n);
    }
    static fromObject(t) {
      return x(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new k.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return E(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new k.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new k.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStoreCatalog_GetDevPagesForPartner_Response`;
    }
  },
  H = class e extends k.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.clan_accountid || v(e.M()),
        k.Message.initialize(this, t, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            clan_accountid: { n: 1, br: w.readUint32, bw: T.writeUint32 },
            linknames: {
              n: 2,
              r: !0,
              q: !0,
              br: w.readString,
              bw: T.writeRepeatedString,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= b(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return C(e.M(), t, n);
    }
    static fromObject(t) {
      return x(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new k.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return E(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new k.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new k.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStoreCatalog_GetDevPagesForPartner_Response_CDevPageInfo`;
    }
  },
  U;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(`StoreCatalog.SetDevPageLink#1`, g(M, t, n), N, {
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
      rgBrowserAPISites: [`partner`],
    });
  }
  e.SetDevPageLink = t;
  function n(e, t, n) {
    return e.SendMsg(`StoreCatalog.GetDevPageLinks#1`, g(ee, t, n), P, {
      bConstMethod: !0,
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
      rgBrowserAPISites: [`partner`],
    });
  }
  e.GetDevPageLinks = n;
  function r(e, t, n) {
    return e.SendMsg(`StoreCatalog.GetDevPageAllAppsLinked#1`, g(F, t, n), I, {
      ePrivilege: 1,
      rgBrowserAPISites: [`partner`, `community`],
    });
  }
  e.GetDevPageAllAppsLinked = r;
  function i(e, t, n) {
    return e.SendMsg(`StoreCatalog.GetDevPageListApps#1`, g(L, t, n), R, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
      rgBrowserAPISites: [`partner`, `community`],
    });
  }
  e.GetDevPageListApps = i;
  function a(e, t, n) {
    return e.SendMsg(`StoreCatalog.GetDevPagesForPartner#1`, g(B, t, n), V, {
      bConstMethod: !0,
      ePrivilege: 1,
      rgBrowserAPISites: [`partner`],
    });
  }
  e.GetDevPagesForPartner = a;
})((U ||= {}));
var W = e(s()),
  G = class {
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
      (a(this), (this.m_clanSteamID = e));
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
            return _.STORE_BASE_URL + `publisher/` + this.m_strVanity + `/`;
          case `franchise`:
            return _.STORE_BASE_URL + `franchise/` + this.m_strVanity + `/`;
        }
        return _.STORE_BASE_URL + `developer/` + this.m_strVanity + `/`;
      }
      return (
        _.STORE_BASE_URL + `curator/` + this.m_clanSteamID.GetAccountID() + `/`
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
      let n = _.PARTNER_BASE_URL + `sales/ajaxupdateclanaccountflags`,
        r = this.m_clanAccountFlags;
      if (
        (e.forEach((e) => {
          t ? (r |= e) : (r &= ~e);
        }),
        r == this.m_clanAccountFlags)
      )
        return;
      let i = [];
      (r & 1 && i.push(1),
        r & 8 && i.push(8),
        r & 2 && i.push(2),
        r & 4 && i.push(4),
        r & 16 && i.push(16),
        r & 32 && i.push(32),
        r & 64 && i.push(64),
        r & 128 && i.push(128),
        r & 256 && i.push(256));
      let a = new FormData();
      (a.append(`sessionid`, f()),
        a.append(`clan_account_id`, this.GetClanAccountID().toString()),
        a.append(`accountflags`, JSON.stringify(i)));
      let o = await W.default.post(n, a);
      o &&
        o.status == 200 &&
        o.data.success == 1 &&
        (this.m_clanAccountFlags = r);
    }
  };
(u([t], G.prototype, `m_appidList`, void 0),
  u([t], G.prototype, `m_nFollowers`, void 0),
  u([t], G.prototype, `m_clanAccountFlags`, void 0));
var K = class e {
  constructor() {
    a(this);
  }
  m_mapClanToCreatorHome = new Map();
  m_mapAppToCreatorIDList = new Map();
  m_bLoadedFromConfig = !1;
  m_serviceTransport = void 0;
  LazyInit() {
    if (!this.m_bLoadedFromConfig) {
      let t = c(`creatorhome`, `application_config`);
      this.ValidateStoreDefault(t) &&
        t.forEach((t) => {
          let n = Number(t.creator_clan_id),
            r = new G(m.InitFromClanID(n, _.EUNIVERSE));
          (r.Initialize(t),
            (r.m_promise = e.GetAsPromise(r)),
            this.m_mapClanToCreatorHome.set(n, r));
        });
      let n = c(`creatorhomeforapp`, `application_config`);
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
      let e = c(`loyalty_webapi_token`, `application_config`),
        t = l(new d(_.WEBAPI_BASE_URL, e || void 0));
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
      let t = new G(e);
      ((t.m_promise = this.InternalCreatorHome(t, n)),
        await t.m_promise,
        this.m_mapClanToCreatorHome.set(e.GetAccountID(), t));
    }
    return this.m_mapClanToCreatorHome.get(e.GetAccountID()).m_promise;
  }
  async InternalCreatorHome(e, t) {
    let n = { get_appids: !0, l: _.LANGUAGE },
      r =
        _.STORE_BASE_URL +
        `curator/` +
        e.GetClanAccountID() +
        `/ajaxgetcreatorhomeinfo`,
      i = await W.default.get(r, { params: n, cancelToken: t && t.token });
    return (e.Initialize(i.data), e);
  }
  async LoadCreatorHomeListForAppIncludeHiddden(e, t) {
    if ((this.LazyInit(), !this.m_mapAppToCreatorIDList.has(e))) {
      let n = { appid: e },
        r = _.STORE_BASE_URL + `events/ajaxgetcreatorhomeidforapp`,
        i = await W.default.get(r, {
          params: n,
          cancelToken: t && t.token,
          withCredentials: !0,
        });
      this.m_mapAppToCreatorIDList.set(e, i.data.creator_list);
    }
    return this.m_mapAppToCreatorIDList.get(e);
  }
  async SearchCreatorHomeStore(e, t, n) {
    let r = `${_.STORE_BASE_URL}curator/0/ajaxsearchcurators`,
      a = {
        term: e.replace(` `, `+`),
        require_creator: t,
        cc: _.COUNTRY,
        l: _.LANGUAGE,
        origin: self.origin,
      },
      o = [],
      s = await W.default.get(r, { params: a, cancelToken: n.token });
    return (
      s.data.curators &&
        i(() => {
          s.data.curators.forEach((e) => {
            if (!this.m_mapClanToCreatorHome.has(e.creator_clan_id)) {
              let t = new G(m.InitFromClanID(e.creator_clan_id, _.EUNIVERSE));
              (t.Initialize(e),
                this.m_mapClanToCreatorHome.set(e.creator_clan_id, t));
            }
            o.push(this.m_mapClanToCreatorHome.get(e.creator_clan_id));
          });
        }),
      o
    );
  }
  GetCreatorHomeListForAppIncludeHidden(e) {
    return this.m_mapAppToCreatorIDList.has(e)
      ? this.m_mapAppToCreatorIDList.get(e)
      : [];
  }
};
(u([t], K.prototype, `m_mapClanToCreatorHome`, void 0),
  u([t], K.prototype, `m_mapAppToCreatorIDList`, void 0),
  u([n], K.prototype, `LazyInit`, null));
var q = new K();
p(`g_CreatorHomeStore`, q);
function J(e) {
  if (!e) return null;
  let t = q.BHasCreatorHomeLoaded(e.clanSteamID)
    ? q.GetCreatorHome(e.clanSteamID)
    : void 0;
  return e.GetSaleURL(t?.GetCreatorHomeURL(`developer`));
}
function Y(e) {
  if (!e) return;
  let t = c(`creator_home_list_info`, `application_config`);
  if (typeof t != `object` || !t || Array.isArray(t)) return;
  let n = t[e];
  if (n && n.title)
    return {
      title: n.title,
      description: n.description?.length ? n.description : void 0,
      imageUrl: n.listtileimage?.length ? n.listtileimage : void 0,
    };
}
function X(e) {
  return Y(e)?.title;
}
function Z(e) {
  return Y(e)?.description;
}
function Q(e) {
  return Y(e)?.imageUrl;
}
function $(e) {
  let t = m.InitFromClanID(e, _.EUNIVERSE);
  return {
    queryKey: [`CreatorHome`, e],
    initialData: () => q.GetCreatorHome(t),
    queryFn: async () => {
      let t = m.InitFromClanID(e, _.EUNIVERSE);
      return await q.LoadCreatorHome(t, !0);
    },
  };
}
function te(e) {
  let { data: t, isFetching: n, refetch: r } = o($(e));
  return { creatorHome: t, isFetching: n, refetch: r };
}
function ne(e, t, n) {
  return {
    queryKey: [`GetCreatorHomeListAppsQuery`, e, t, n],
    queryFn: async () => {
      let r = q.GetServiceTransport(),
        i = O.Init(L);
      (i.Body().set_clan_account_id(e),
        i.Body().set_listid(t),
        n && i.Body().set_ignore_dlc(!0));
      let a = await U.GetDevPageListApps(r, i);
      if (a.GetEResult() != 1)
        throw Error(
          `Error from GetCreatorHomeListAppsQuery: ${a.GetEResult()}`,
        );
      return a
        .Body()
        .apps()
        .slice()
        .sort((e, t) => (e.sort_order() ?? 0) - (t.sort_order() ?? 0))
        .map((e) => e.appid() ?? 0)
        .filter((e) => e > 0);
    },
    enabled: !!(e > 0 && t),
  };
}
function re(e, t) {
  return {
    queryKey: [`GetCreatorHomeGetAllListsQuery`, e, t],
    queryFn: async () => {
      let n = q.GetServiceTransport(),
        r = O.Init(D);
      (r.Body().set_steamid(new m(e, _.EUNIVERSE, 7, 0).ConvertTo64BitString()),
        r.Body().set_count(100));
      let i = await S.GetLists(n, r);
      return i.BSuccess()
        ? i
            .Body()
            .list_details()
            .filter((e) => t || e.list_state() != 0)
        : null;
    },
    enabled: e > 0,
  };
}
function ie(e, t) {
  return {
    queryKey: [`GetCreatorHomeGetListsDetailsQuery`, e, t],
    queryFn: async () => {
      let n = q.GetServiceTransport(),
        r = O.Init(y);
      (r.Body().set_steamid(new m(e, _.EUNIVERSE, 7, 0).ConvertTo64BitString()),
        r.Body().set_listid(t));
      let i = await S.GetListDetails(n, r);
      return i.BSuccess() ? (i.Body().list_details() ?? null) : null;
    },
    enabled: e > 0,
  };
}
export {
  Q as a,
  J as c,
  Z as i,
  q as l,
  ie as n,
  X as o,
  ne as r,
  $ as s,
  re as t,
  te as u,
};
