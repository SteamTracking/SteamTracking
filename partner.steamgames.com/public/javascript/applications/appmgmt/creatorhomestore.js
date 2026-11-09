/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import {
  Gt as e,
  Ht as t,
  Jt as n,
  Kt as r,
  S as i,
  T as a,
  Ut as o,
  Wt as s,
  Xt as c,
  Y as l,
  Yt as u,
  Z as d,
  i as f,
  k as p,
  nt as m,
  on as h,
  qt as g,
  vt as _,
  x as v,
  yt as y,
} from "./mobx.esm.js";
import { t as b } from "./src.js";
import { t as x } from "./useQuery.js";
import "./steammessages_clan_pb.js";
import { t as S } from "./axios.js";
import { t as C } from "./debugglobal.js";
import "./steamid.js";
import { r as w, t as T } from "./browserapi.js";
var E = h(c(), 1),
  D = class i extends E.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        i.prototype.appid || t(i.M()),
        E.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (i.sm_m ||= {
          proto: i,
          fields: {
            appid: { n: 1, br: e.readUint32, bw: u.writeUint32 },
            clan_steamid: {
              n: 2,
              br: e.readFixed64String,
              bw: u.writeFixed64String,
            },
            relation: { n: 3, br: e.readEnum, bw: u.writeEnum },
            linkname: { n: 4, br: e.readString, bw: u.writeString },
            json: { n: 5, br: e.readString, bw: u.writeString },
          },
        }),
        i.sm_m
      );
    }
    static MBF() {
      return (i.sm_mbf ||= r(i.M())), i.sm_mbf;
    }
    toObject(e = !1) {
      return i.toObject(e, this);
    }
    static toObject(e, t) {
      return n(i.M(), e, t);
    }
    static fromObject(e) {
      return s(i.M(), e);
    }
    static deserializeBinary(e) {
      let t = new E.BinaryReader(e),
        n = new i();
      return i.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return o(i.MBF(), e, t);
    }
    serializeBinary() {
      var e = new E.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      g(i.M(), e, t);
    }
    serializeBase64String() {
      var e = new E.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CDeveloperPageLink`;
    }
  },
  O = class i extends E.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        i.prototype.clan_account_id || t(i.M()),
        E.Message.initialize(this, e, 0, -1, [2], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (i.sm_m ||= {
          proto: i,
          fields: {
            clan_account_id: { n: 1, br: e.readUint32, bw: u.writeUint32 },
            appid_list: {
              n: 2,
              r: !0,
              q: !0,
              br: e.readUint32,
              pbr: e.readPackedUint32,
              bw: u.writeRepeatedUint32,
            },
          },
        }),
        i.sm_m
      );
    }
    static MBF() {
      return (i.sm_mbf ||= r(i.M())), i.sm_mbf;
    }
    toObject(e = !1) {
      return i.toObject(e, this);
    }
    static toObject(e, t) {
      return n(i.M(), e, t);
    }
    static fromObject(e) {
      return s(i.M(), e);
    }
    static deserializeBinary(e) {
      let t = new E.BinaryReader(e),
        n = new i();
      return i.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return o(i.MBF(), e, t);
    }
    serializeBinary() {
      var e = new E.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      g(i.M(), e, t);
    }
    serializeBase64String() {
      var e = new E.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CDeveloperPageToApps`;
    }
  },
  k = class i extends E.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        i.prototype.appid || t(i.M()),
        E.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (i.sm_m ||= {
          proto: i,
          fields: {
            appid: { n: 1, br: e.readUint32, bw: u.writeUint32 },
            link: { n: 2, c: D },
            remove: { n: 3, d: !1, br: e.readBool, bw: u.writeBool },
            update_json_only: { n: 4, d: !1, br: e.readBool, bw: u.writeBool },
            skip_clan_permissions: {
              n: 5,
              d: !1,
              br: e.readBool,
              bw: u.writeBool,
            },
            partner_id: { n: 6, br: e.readUint32, bw: u.writeUint32 },
          },
        }),
        i.sm_m
      );
    }
    static MBF() {
      return (i.sm_mbf ||= r(i.M())), i.sm_mbf;
    }
    toObject(e = !1) {
      return i.toObject(e, this);
    }
    static toObject(e, t) {
      return n(i.M(), e, t);
    }
    static fromObject(e) {
      return s(i.M(), e);
    }
    static deserializeBinary(e) {
      let t = new E.BinaryReader(e),
        n = new i();
      return i.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return o(i.MBF(), e, t);
    }
    serializeBinary() {
      var e = new E.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      g(i.M(), e, t);
    }
    serializeBase64String() {
      var e = new E.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CStoreCatalog_SetDevPageLink_Request`;
    }
  },
  A = class e extends E.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), E.Message.initialize(this, e, 0, -1, void 0, null);
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
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new E.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CStoreCatalog_SetDevPageLink_Response`;
    }
  },
  j = class i extends E.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        i.prototype.appid || t(i.M()),
        E.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (i.sm_m ||= {
          proto: i,
          fields: { appid: { n: 1, br: e.readUint32, bw: u.writeUint32 } },
        }),
        i.sm_m
      );
    }
    static MBF() {
      return (i.sm_mbf ||= r(i.M())), i.sm_mbf;
    }
    toObject(e = !1) {
      return i.toObject(e, this);
    }
    static toObject(e, t) {
      return n(i.M(), e, t);
    }
    static fromObject(e) {
      return s(i.M(), e);
    }
    static deserializeBinary(e) {
      let t = new E.BinaryReader(e),
        n = new i();
      return i.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return o(i.MBF(), e, t);
    }
    serializeBinary() {
      var e = new E.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      g(i.M(), e, t);
    }
    serializeBase64String() {
      var e = new E.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CStoreCatalog_GetDevPageLinks_Request`;
    }
  },
  M = class e extends E.Message {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      super(),
        e.prototype.links || t(e.M()),
        E.Message.initialize(this, n, 0, -1, [1], null);
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
      return (e.sm_mbf ||= r(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return n(e.M(), t, r);
    }
    static fromObject(t) {
      return s(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new E.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return o(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new E.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      g(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new E.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CStoreCatalog_GetDevPageLinks_Response`;
    }
  },
  N = class i extends E.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        i.prototype.clan_account_ids || t(i.M()),
        E.Message.initialize(this, e, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (i.sm_m ||= {
          proto: i,
          fields: {
            clan_account_ids: {
              n: 1,
              r: !0,
              q: !0,
              br: e.readUint32,
              pbr: e.readPackedUint32,
              bw: u.writeRepeatedUint32,
            },
            ignore_dlc: { n: 2, br: e.readBool, bw: u.writeBool },
          },
        }),
        i.sm_m
      );
    }
    static MBF() {
      return (i.sm_mbf ||= r(i.M())), i.sm_mbf;
    }
    toObject(e = !1) {
      return i.toObject(e, this);
    }
    static toObject(e, t) {
      return n(i.M(), e, t);
    }
    static fromObject(e) {
      return s(i.M(), e);
    }
    static deserializeBinary(e) {
      let t = new E.BinaryReader(e),
        n = new i();
      return i.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return o(i.MBF(), e, t);
    }
    serializeBinary() {
      var e = new E.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      g(i.M(), e, t);
    }
    serializeBase64String() {
      var e = new E.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CStoreCatalog_GetDevPageAllAppsLinked_Request`;
    }
  },
  P = class e extends E.Message {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      super(),
        e.prototype.results || t(e.M()),
        E.Message.initialize(this, n, 0, -1, [1], null);
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
      return (e.sm_mbf ||= r(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return n(e.M(), t, r);
    }
    static fromObject(t) {
      return s(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new E.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return o(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new E.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      g(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new E.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CStoreCatalog_GetDevPageAllAppsLinked_Response`;
    }
  },
  F = class i extends E.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        i.prototype.clan_account_id || t(i.M()),
        E.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (i.sm_m ||= {
          proto: i,
          fields: {
            clan_account_id: { n: 1, br: e.readUint32, bw: u.writeUint32 },
            listid: { n: 2, br: e.readUint64String, bw: u.writeUint64String },
            ignore_dlc: { n: 3, br: e.readBool, bw: u.writeBool },
          },
        }),
        i.sm_m
      );
    }
    static MBF() {
      return (i.sm_mbf ||= r(i.M())), i.sm_mbf;
    }
    toObject(e = !1) {
      return i.toObject(e, this);
    }
    static toObject(e, t) {
      return n(i.M(), e, t);
    }
    static fromObject(e) {
      return s(i.M(), e);
    }
    static deserializeBinary(e) {
      let t = new E.BinaryReader(e),
        n = new i();
      return i.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return o(i.MBF(), e, t);
    }
    serializeBinary() {
      var e = new E.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      g(i.M(), e, t);
    }
    serializeBase64String() {
      var e = new E.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CStoreCatalog_GetDevPageListApps_Request`;
    }
  },
  I = class e extends E.Message {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      super(),
        e.prototype.apps || t(e.M()),
        E.Message.initialize(this, n, 0, -1, [1], null);
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
      return (e.sm_mbf ||= r(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return n(e.M(), t, r);
    }
    static fromObject(t) {
      return s(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new E.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return o(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new E.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      g(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new E.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CStoreCatalog_GetDevPageListApps_Response`;
    }
  },
  L = class i extends E.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        i.prototype.appid || t(i.M()),
        E.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (i.sm_m ||= {
          proto: i,
          fields: {
            appid: { n: 1, br: e.readUint32, bw: u.writeUint32 },
            sort_order: { n: 2, br: e.readUint32, bw: u.writeUint32 },
          },
        }),
        i.sm_m
      );
    }
    static MBF() {
      return (i.sm_mbf ||= r(i.M())), i.sm_mbf;
    }
    toObject(e = !1) {
      return i.toObject(e, this);
    }
    static toObject(e, t) {
      return n(i.M(), e, t);
    }
    static fromObject(e) {
      return s(i.M(), e);
    }
    static deserializeBinary(e) {
      let t = new E.BinaryReader(e),
        n = new i();
      return i.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return o(i.MBF(), e, t);
    }
    serializeBinary() {
      var e = new E.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      g(i.M(), e, t);
    }
    serializeBase64String() {
      var e = new E.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CStoreCatalog_GetDevPageListApps_Response_ListApp`;
    }
  },
  R = class i extends E.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        i.prototype.partnerid || t(i.M()),
        E.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (i.sm_m ||= {
          proto: i,
          fields: { partnerid: { n: 1, br: e.readUint32, bw: u.writeUint32 } },
        }),
        i.sm_m
      );
    }
    static MBF() {
      return (i.sm_mbf ||= r(i.M())), i.sm_mbf;
    }
    toObject(e = !1) {
      return i.toObject(e, this);
    }
    static toObject(e, t) {
      return n(i.M(), e, t);
    }
    static fromObject(e) {
      return s(i.M(), e);
    }
    static deserializeBinary(e) {
      let t = new E.BinaryReader(e),
        n = new i();
      return i.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return o(i.MBF(), e, t);
    }
    serializeBinary() {
      var e = new E.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      g(i.M(), e, t);
    }
    serializeBase64String() {
      var e = new E.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CStoreCatalog_GetDevPagesForPartner_Request`;
    }
  },
  z = class e extends E.Message {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      super(),
        e.prototype.results || t(e.M()),
        E.Message.initialize(this, n, 0, -1, [1], null);
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
      return (e.sm_mbf ||= r(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return n(e.M(), t, r);
    }
    static fromObject(t) {
      return s(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new E.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return o(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new E.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      g(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new E.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CStoreCatalog_GetDevPagesForPartner_Response`;
    }
  },
  B = class i extends E.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        i.prototype.clan_accountid || t(i.M()),
        E.Message.initialize(this, e, 0, -1, [2], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (i.sm_m ||= {
          proto: i,
          fields: {
            clan_accountid: { n: 1, br: e.readUint32, bw: u.writeUint32 },
            linknames: {
              n: 2,
              r: !0,
              q: !0,
              br: e.readString,
              bw: u.writeRepeatedString,
            },
          },
        }),
        i.sm_m
      );
    }
    static MBF() {
      return (i.sm_mbf ||= r(i.M())), i.sm_mbf;
    }
    toObject(e = !1) {
      return i.toObject(e, this);
    }
    static toObject(e, t) {
      return n(i.M(), e, t);
    }
    static fromObject(e) {
      return s(i.M(), e);
    }
    static deserializeBinary(e) {
      let t = new E.BinaryReader(e),
        n = new i();
      return i.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return o(i.MBF(), e, t);
    }
    serializeBinary() {
      var e = new E.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      g(i.M(), e, t);
    }
    serializeBase64String() {
      var e = new E.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CStoreCatalog_GetDevPagesForPartner_Response_CDevPageInfo`;
    }
  },
  V;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(`StoreCatalog.SetDevPageLink#1`, y(k, t, n), A, {
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
      rgBrowserAPISites: [`partner`],
    });
  }
  e.SetDevPageLink = t;
  function n(e, t, n) {
    return e.SendMsg(`StoreCatalog.GetDevPageLinks#1`, y(j, t, n), M, {
      bConstMethod: !0,
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
      rgBrowserAPISites: [`partner`],
    });
  }
  e.GetDevPageLinks = n;
  function r(e, t, n) {
    return e.SendMsg(`StoreCatalog.GetDevPageAllAppsLinked#1`, y(N, t, n), P, {
      ePrivilege: 1,
      rgBrowserAPISites: [`partner`, `community`],
    });
  }
  e.GetDevPageAllAppsLinked = r;
  function i(e, t, n) {
    return e.SendMsg(`StoreCatalog.GetDevPageListApps#1`, y(F, t, n), I, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
      rgBrowserAPISites: [`partner`, `community`],
    });
  }
  e.GetDevPageListApps = i;
  function a(e, t, n) {
    return e.SendMsg(`StoreCatalog.GetDevPagesForPartner#1`, y(R, t, n), z, {
      bConstMethod: !0,
      ePrivilege: 1,
      rgBrowserAPISites: [`partner`],
    });
  }
  e.GetDevPagesForPartner = a;
})((V ||= {}));
var H = h(S()),
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
      v(this), (this.m_clanSteamID = e);
    }
    Initialize(e) {
      (this.m_strName = e.name || ``),
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
        (this.m_bIsLoaded = !0);
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
            return m.STORE_BASE_URL + `publisher/` + this.m_strVanity + `/`;
          case `franchise`:
            return m.STORE_BASE_URL + `franchise/` + this.m_strVanity + `/`;
        }
        return m.STORE_BASE_URL + `developer/` + this.m_strVanity + `/`;
      }
      return (
        m.STORE_BASE_URL + `curator/` + this.m_clanSteamID.GetAccountID() + `/`
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
      let n = m.PARTNER_BASE_URL + `sales/ajaxupdateclanaccountflags`,
        r = this.m_clanAccountFlags;
      if (
        (e.forEach((e) => {
          t ? (r |= e) : (r &= ~e);
        }),
        r == this.m_clanAccountFlags)
      )
        return;
      let i = [];
      r & 1 && i.push(1),
        r & 8 && i.push(8),
        r & 2 && i.push(2),
        r & 4 && i.push(4),
        r & 16 && i.push(16),
        r & 32 && i.push(32),
        r & 64 && i.push(64),
        r & 128 && i.push(128),
        r & 256 && i.push(256);
      let a = new FormData();
      a.append(`sessionid`, l()),
        a.append(`clan_account_id`, this.GetClanAccountID().toString()),
        a.append(`accountflags`, JSON.stringify(i));
      let o = await H.default.post(n, a);
      o &&
        o.status == 200 &&
        o.data.success == 1 &&
        (this.m_clanAccountFlags = r);
    }
  };
p([i], U.prototype, `m_appidList`, void 0),
  p([i], U.prototype, `m_nFollowers`, void 0),
  p([i], U.prototype, `m_clanAccountFlags`, void 0);
var W = class e {
  constructor() {
    v(this);
  }
  m_mapClanToCreatorHome = new Map();
  m_mapAppToCreatorIDList = new Map();
  m_bLoadedFromConfig = !1;
  m_serviceTransport = void 0;
  LazyInit() {
    if (!this.m_bLoadedFromConfig) {
      let t = d(`creatorhome`, `application_config`);
      this.ValidateStoreDefault(t) &&
        t.forEach((t) => {
          let n = Number(t.creator_clan_id),
            r = new U(b.InitFromClanID(n, m.EUNIVERSE));
          r.Initialize(t),
            (r.m_promise = e.GetAsPromise(r)),
            this.m_mapClanToCreatorHome.set(n, r);
        });
      let n = d(`creatorhomeforapp`, `application_config`);
      this.ValidateStoreDefaultAppList(n) &&
        n.forEach((e) => {
          e.appid !== void 0 &&
            (this.m_mapAppToCreatorIDList.has(e.appid) ||
              this.m_mapAppToCreatorIDList.set(e.appid, []),
            this.m_mapAppToCreatorIDList.get(e.appid).push(e));
        }),
        (this.m_bLoadedFromConfig = !0);
    }
  }
  GetServiceTransport() {
    if (!this.m_serviceTransport) {
      let e = d(`loyalty_webapi_token`, `application_config`),
        t = T(new w(m.WEBAPI_BASE_URL, e || void 0));
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
      (t.m_promise = this.InternalCreatorHome(t, n)),
        await t.m_promise,
        this.m_mapClanToCreatorHome.set(e.GetAccountID(), t);
    }
    return this.m_mapClanToCreatorHome.get(e.GetAccountID()).m_promise;
  }
  async InternalCreatorHome(e, t) {
    let n = { get_appids: !0, l: m.LANGUAGE },
      r =
        m.STORE_BASE_URL +
        `curator/` +
        e.GetClanAccountID() +
        `/ajaxgetcreatorhomeinfo`,
      i = await H.default.get(r, { params: n, cancelToken: t && t.token });
    return e.Initialize(i.data), e;
  }
  async LoadCreatorHomeListForAppIncludeHiddden(e, t) {
    if ((this.LazyInit(), !this.m_mapAppToCreatorIDList.has(e))) {
      let n = { appid: e },
        r = m.STORE_BASE_URL + `events/ajaxgetcreatorhomeidforapp`,
        i = await H.default.get(r, {
          params: n,
          cancelToken: t && t.token,
          withCredentials: !0,
        });
      this.m_mapAppToCreatorIDList.set(e, i.data.creator_list);
    }
    return this.m_mapAppToCreatorIDList.get(e);
  }
  async SearchCreatorHomeStore(e, t, n) {
    let r = `${m.STORE_BASE_URL}curator/0/ajaxsearchcurators`,
      i = {
        term: e.replace(` `, `+`),
        require_creator: t,
        cc: m.COUNTRY,
        l: m.LANGUAGE,
        origin: self.origin,
      },
      o = [],
      s = await H.default.get(r, { params: i, cancelToken: n.token });
    return (
      s.data.curators &&
        a(() => {
          s.data.curators.forEach((e) => {
            if (!this.m_mapClanToCreatorHome.has(e.creator_clan_id)) {
              let t = new U(b.InitFromClanID(e.creator_clan_id, m.EUNIVERSE));
              t.Initialize(e),
                this.m_mapClanToCreatorHome.set(e.creator_clan_id, t);
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
p([i], W.prototype, `m_mapClanToCreatorHome`, void 0),
  p([i], W.prototype, `m_mapAppToCreatorIDList`, void 0),
  p([f], W.prototype, `LazyInit`, null);
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
  let t = d(`creator_home_list_info`, `application_config`);
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
  let t = b.InitFromClanID(e, m.EUNIVERSE);
  return {
    queryKey: [`CreatorHome`, e],
    initialData: () => G.GetCreatorHome(t),
    queryFn: async () => {
      let t = b.InitFromClanID(e, m.EUNIVERSE);
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
      let r = _.Init(N);
      r.Body().add_clan_account_ids(t), n && r.Body().set_ignore_dlc(!0);
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
function $(e, t, n) {
  return {
    queryKey: [`GetCreatorHomeListAppsQuery`, e, t, n],
    queryFn: async () => {
      let r = G.GetServiceTransport(),
        i = _.Init(F);
      i.Body().set_clan_account_id(e),
        i.Body().set_listid(t),
        n && i.Body().set_ignore_dlc(!0);
      let a = await V.GetDevPageListApps(r, i);
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
export {
  K as a,
  Z as c,
  k as d,
  V as f,
  X as i,
  j as l,
  Y as n,
  G as o,
  J as r,
  Q as s,
  $ as t,
  R as u,
};
