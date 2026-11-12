/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import {
  A as e,
  C as t,
  E as n,
  Gt as r,
  Jt as i,
  Kt as a,
  Q as o,
  S as s,
  Ut as c,
  Wt as l,
  X as u,
  Xt as d,
  Yt as f,
  Zt as p,
  a as m,
  bt as h,
  qt as g,
  rt as _,
  sn as v,
  yt as y,
} from "./chunk~de7f2df91c.js";
import { t as b } from "./chunk~25a6634263.js";
import { t as x } from "./chunk~ede3e357a2.js";
import "./chunk~b7c2818157.js";
import { t as S } from "./chunk~f4e4ed5c17.js";
import { t as C } from "./chunk~f3a565e188.js";
import "./chunk~a6b9ae1345.js";
import { r as w, t as T } from "./chunk~70c16cc80c.js";
var E = v(p(), 1),
  D = class e extends E.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || c(e.M()),
        E.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: a.readUint32, bw: d.writeUint32 },
            clan_steamid: {
              n: 2,
              br: a.readFixed64String,
              bw: d.writeFixed64String,
            },
            relation: { n: 3, br: a.readEnum, bw: d.writeEnum },
            linkname: { n: 4, br: a.readString, bw: d.writeString },
            json: { n: 5, br: a.readString, bw: d.writeString },
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
      return f(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new E.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new E.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      i(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new E.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CDeveloperPageLink`;
    }
  },
  O = class e extends E.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.clan_account_id || c(e.M()),
        E.Message.initialize(this, t, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            clan_account_id: { n: 1, br: a.readUint32, bw: d.writeUint32 },
            appid_list: {
              n: 2,
              r: !0,
              q: !0,
              br: a.readUint32,
              pbr: a.readPackedUint32,
              bw: d.writeRepeatedUint32,
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
      return f(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new E.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new E.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      i(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new E.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CDeveloperPageToApps`;
    }
  },
  k = class e extends E.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || c(e.M()),
        E.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: a.readUint32, bw: d.writeUint32 },
            link: { n: 2, c: D },
            remove: { n: 3, d: !1, br: a.readBool, bw: d.writeBool },
            update_json_only: { n: 4, d: !1, br: a.readBool, bw: d.writeBool },
            skip_clan_permissions: {
              n: 5,
              d: !1,
              br: a.readBool,
              bw: d.writeBool,
            },
            partner_id: { n: 6, br: a.readUint32, bw: d.writeUint32 },
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
      return f(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new E.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new E.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      i(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new E.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStoreCatalog_SetDevPageLink_Request`;
    }
  },
  A = class e extends E.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), E.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new E.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new E.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new E.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStoreCatalog_SetDevPageLink_Response`;
    }
  },
  j = class e extends E.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || c(e.M()),
        E.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { appid: { n: 1, br: a.readUint32, bw: d.writeUint32 } },
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
      return f(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new E.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new E.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      i(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new E.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStoreCatalog_GetDevPageLinks_Request`;
    }
  },
  M = class e extends E.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.links || c(e.M()),
        E.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { links: { n: 1, c: D, r: !0, q: !0 } },
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
      return f(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new E.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new E.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      i(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new E.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStoreCatalog_GetDevPageLinks_Response`;
    }
  },
  N = class e extends E.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.clan_account_ids || c(e.M()),
        E.Message.initialize(this, t, 0, -1, [1], null));
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
              br: a.readUint32,
              pbr: a.readPackedUint32,
              bw: d.writeRepeatedUint32,
            },
            ignore_dlc: { n: 2, br: a.readBool, bw: d.writeBool },
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
      return f(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new E.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new E.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      i(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new E.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStoreCatalog_GetDevPageAllAppsLinked_Request`;
    }
  },
  P = class e extends E.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.results || c(e.M()),
        E.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { results: { n: 1, c: O, r: !0, q: !0 } },
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
      return f(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new E.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new E.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      i(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new E.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStoreCatalog_GetDevPageAllAppsLinked_Response`;
    }
  },
  F = class e extends E.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.clan_account_id || c(e.M()),
        E.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            clan_account_id: { n: 1, br: a.readUint32, bw: d.writeUint32 },
            listid: { n: 2, br: a.readUint64String, bw: d.writeUint64String },
            ignore_dlc: { n: 3, br: a.readBool, bw: d.writeBool },
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
      return f(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new E.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new E.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      i(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new E.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStoreCatalog_GetDevPageListApps_Request`;
    }
  },
  I = class e extends E.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.apps || c(e.M()),
        E.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { apps: { n: 1, c: L, r: !0, q: !0 } },
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
      return f(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new E.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new E.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      i(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new E.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStoreCatalog_GetDevPageListApps_Response`;
    }
  },
  L = class e extends E.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || c(e.M()),
        E.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: a.readUint32, bw: d.writeUint32 },
            sort_order: { n: 2, br: a.readUint32, bw: d.writeUint32 },
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
      return f(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new E.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new E.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      i(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new E.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStoreCatalog_GetDevPageListApps_Response_ListApp`;
    }
  },
  R = class e extends E.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.partnerid || c(e.M()),
        E.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { partnerid: { n: 1, br: a.readUint32, bw: d.writeUint32 } },
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
      return f(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new E.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new E.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      i(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new E.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStoreCatalog_GetDevPagesForPartner_Request`;
    }
  },
  z = class e extends E.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.results || c(e.M()),
        E.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { results: { n: 1, c: B, r: !0, q: !0 } },
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
      return f(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new E.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new E.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      i(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new E.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStoreCatalog_GetDevPagesForPartner_Response`;
    }
  },
  B = class e extends E.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.clan_accountid || c(e.M()),
        E.Message.initialize(this, t, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            clan_accountid: { n: 1, br: a.readUint32, bw: d.writeUint32 },
            linknames: {
              n: 2,
              r: !0,
              q: !0,
              br: a.readString,
              bw: d.writeRepeatedString,
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
      return f(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new E.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new E.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      i(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new E.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStoreCatalog_GetDevPagesForPartner_Response_CDevPageInfo`;
    }
  },
  V;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(`StoreCatalog.SetDevPageLink#1`, h(k, t, n), A, {
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
      rgBrowserAPISites: [`partner`],
    });
  }
  e.SetDevPageLink = t;
  function n(e, t, n) {
    return e.SendMsg(`StoreCatalog.GetDevPageLinks#1`, h(j, t, n), M, {
      bConstMethod: !0,
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
      rgBrowserAPISites: [`partner`],
    });
  }
  e.GetDevPageLinks = n;
  function r(e, t, n) {
    return e.SendMsg(`StoreCatalog.GetDevPageAllAppsLinked#1`, h(N, t, n), P, {
      ePrivilege: 1,
      rgBrowserAPISites: [`partner`, `community`],
    });
  }
  e.GetDevPageAllAppsLinked = r;
  function i(e, t, n) {
    return e.SendMsg(`StoreCatalog.GetDevPageListApps#1`, h(F, t, n), I, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
      rgBrowserAPISites: [`partner`, `community`],
    });
  }
  e.GetDevPageListApps = i;
  function a(e, t, n) {
    return e.SendMsg(`StoreCatalog.GetDevPagesForPartner#1`, h(R, t, n), z, {
      bConstMethod: !0,
      ePrivilege: 1,
      rgBrowserAPISites: [`partner`],
    });
  }
  e.GetDevPagesForPartner = a;
})((V ||= {}));
var H = v(S()),
  U = class {
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
      (s(this), (this.m_clanSteamID = e));
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
      (a.append(`sessionid`, u()),
        a.append(`clan_account_id`, this.GetClanAccountID().toString()),
        a.append(`accountflags`, JSON.stringify(i)));
      let o = await H.default.post(n, a);
      o &&
        o.status == 200 &&
        o.data.success == 1 &&
        (this.m_clanAccountFlags = r);
    }
  };
(e([t], U.prototype, `m_appidList`, void 0),
  e([t], U.prototype, `m_nFollowers`, void 0),
  e([t], U.prototype, `m_clanAccountFlags`, void 0));
var W = class e {
  constructor() {
    s(this);
  }
  m_mapClanToCreatorHome = new Map();
  m_mapAppToCreatorIDList = new Map();
  m_bLoadedFromConfig = !1;
  m_serviceTransport = void 0;
  LazyInit() {
    if (!this.m_bLoadedFromConfig) {
      let t = o(`creatorhome`, `application_config`);
      this.ValidateStoreDefault(t) &&
        t.forEach((t) => {
          let n = Number(t.creator_clan_id),
            r = new U(b.InitFromClanID(n, _.EUNIVERSE));
          (r.Initialize(t),
            (r.m_promise = e.GetAsPromise(r)),
            this.m_mapClanToCreatorHome.set(n, r));
        });
      let n = o(`creatorhomeforapp`, `application_config`);
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
      let e = o(`loyalty_webapi_token`, `application_config`),
        t = T(new w(_.WEBAPI_BASE_URL, e || void 0));
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
      let t = new U(e);
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
      i = await H.default.get(r, { params: n, cancelToken: t && t.token });
    return (e.Initialize(i.data), e);
  }
  async LoadCreatorHomeListForAppIncludeHiddden(e, t) {
    if ((this.LazyInit(), !this.m_mapAppToCreatorIDList.has(e))) {
      let n = { appid: e },
        r = _.STORE_BASE_URL + `events/ajaxgetcreatorhomeidforapp`,
        i = await H.default.get(r, {
          params: n,
          cancelToken: t && t.token,
          withCredentials: !0,
        });
      this.m_mapAppToCreatorIDList.set(e, i.data.creator_list);
    }
    return this.m_mapAppToCreatorIDList.get(e);
  }
  async SearchCreatorHomeStore(e, t, r) {
    let i = `${_.STORE_BASE_URL}curator/0/ajaxsearchcurators`,
      a = {
        term: e.replace(` `, `+`),
        require_creator: t,
        cc: _.COUNTRY,
        l: _.LANGUAGE,
        origin: self.origin,
      },
      o = [],
      s = await H.default.get(i, { params: a, cancelToken: r.token });
    return (
      s.data.curators &&
        n(() => {
          s.data.curators.forEach((e) => {
            if (!this.m_mapClanToCreatorHome.has(e.creator_clan_id)) {
              let t = new U(b.InitFromClanID(e.creator_clan_id, _.EUNIVERSE));
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
(e([t], W.prototype, `m_mapClanToCreatorHome`, void 0),
  e([t], W.prototype, `m_mapAppToCreatorIDList`, void 0),
  e([m], W.prototype, `LazyInit`, null));
var G = new W();
C(`g_CreatorHomeStore`, G);
function K(e) {
  if (!e) return null;
  let t = G.BHasCreatorHomeLoaded(e.clanSteamID)
    ? G.GetCreatorHome(e.clanSteamID)
    : void 0;
  return e.GetSaleURL(t?.GetCreatorHomeURL(`developer`));
}
function q(e) {
  if (!e) return;
  let t = o(`creator_home_list_info`, `application_config`);
  if (typeof t != `object` || !t || Array.isArray(t)) return;
  let n = t[e];
  if (n && n.title)
    return {
      title: n.title,
      description: n.description?.length ? n.description : void 0,
      imageUrl: n.listtileimage?.length ? n.listtileimage : void 0,
    };
}
function J(e) {
  return q(e)?.title;
}
function Y(e) {
  return q(e)?.description;
}
function X(e) {
  let t = b.InitFromClanID(e, _.EUNIVERSE);
  return {
    queryKey: [`CreatorHome`, e],
    initialData: () => G.GetCreatorHome(t),
    queryFn: async () => {
      let t = b.InitFromClanID(e, _.EUNIVERSE);
      return await G.LoadCreatorHome(t, !0);
    },
  };
}
function Z(e) {
  let { data: t, isFetching: n, refetch: r } = x(X(e));
  return { creatorHome: t, isFetching: n, refetch: r };
}
function Q(e, t, n) {
  let r = x({
    queryKey: [`useCreateHomeLinkedApps`, t, n],
    queryFn: async () => {
      let r = y.Init(N);
      (r.Body().add_clan_account_ids(t), n && r.Body().set_ignore_dlc(!0));
      let i = await V.GetDevPageAllAppsLinked(e, r);
      if (i.GetEResult() != 1)
        throw Error(`Error from useCreateHomeLinkedApps: ${i.GetEResult()}`);
      return i.Body().results().length == 0
        ? []
        : i.Body().results()[0].appid_list();
    },
    enabled: !!(t > 0 && e),
  });
  return r?.isLoading ? null : r.data;
}
export {
  G as a,
  j as c,
  V as d,
  K as i,
  R as l,
  J as n,
  Q as o,
  X as r,
  Z as s,
  Y as t,
  k as u,
};
