/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import {
  Ct as e,
  G as t,
  K as n,
  Pt as r,
  S as i,
  St as a,
  _t as o,
  bt as s,
  dt as c,
  gt as l,
  k as u,
  lt as d,
  n as f,
  vt as p,
  w as m,
  wt as ee,
  xt as h,
  yt as g,
} from "./chunk~de7f2df91c.js";
import { t as _ } from "./chunk~ede3e357a2.js";
import { r as v, t as y } from "./chunk~70c16cc80c.js";
import { S as b, T as x, i as S, x as C } from "./chunk~96e60d7578.js";
import { t as w } from "./chunk~25a6634263.js";
import { t as T } from "./chunk~f4e4ed5c17.js";
import "./chunk~a6b9ae1345.js";
import { t as E } from "./chunk~f3a565e188.js";
var D = r(ee(), 1),
  te = class t extends D.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.appid || l(t.M()),
        D.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            appid: { n: 1, br: g.readUint32, bw: e.writeUint32 },
            clanid: { n: 2, br: g.readUint32, bw: e.writeUint32 },
            link_url: { n: 3, br: g.readString, bw: e.writeString },
            link_text: { n: 4, br: g.readString, bw: e.writeString },
            blurb: { n: 5, br: g.readString, bw: e.writeString },
            time_recommended: { n: 6, br: g.readUint32, bw: e.writeUint32 },
            comment_count: { n: 7, br: g.readInt32, bw: e.writeInt32 },
            upvote_count: { n: 8, br: g.readInt32, bw: e.writeInt32 },
            accountid_creator: { n: 9, br: g.readUint32, bw: e.writeUint32 },
            recommendation_state: { n: 10, br: g.readEnum, bw: e.writeEnum },
            received_compensation: { n: 11, br: g.readBool, bw: e.writeBool },
            received_for_free: { n: 12, br: g.readBool, bw: e.writeBool },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= s(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return a(t.M(), e, n);
    }
    static fromObject(e) {
      return p(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new D.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return o(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new D.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      h(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new D.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CStoreCuration_RecommendedApp`;
    }
  },
  O = class t extends D.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.listid || l(t.M()),
        D.Message.initialize(this, e, 0, -1, [10, 12, 13, 14], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            listid: { n: 1, br: g.readUint64String, bw: e.writeUint64String },
            title: { n: 2, br: g.readString, bw: e.writeString },
            blurb: { n: 3, br: g.readString, bw: e.writeString },
            link: { n: 4, br: g.readString, bw: e.writeString },
            list_state: { n: 5, br: g.readEnum, bw: e.writeEnum },
            sort_order: { n: 6, br: g.readUint32, bw: e.writeUint32 },
            time_created: { n: 7, br: g.readUint32, bw: e.writeUint32 },
            time_updated: { n: 8, br: g.readUint32, bw: e.writeUint32 },
            accountid: { n: 9, br: g.readUint32, bw: e.writeUint32 },
            apps: { n: 10, c: ne, r: !0, q: !0 },
            list_type: { n: 11, br: g.readEnum, bw: e.writeEnum },
            title_localization: { n: 12, c, r: !0, q: !0 },
            blurb_localization: { n: 13, c, r: !0, q: !0 },
            link_localization: { n: 14, c, r: !0, q: !0 },
            sale_clan_steamid: {
              n: 15,
              br: g.readFixed64String,
              bw: e.writeFixed64String,
            },
            sale_clan_event_gid: {
              n: 16,
              br: g.readFixed64String,
              bw: e.writeFixed64String,
            },
            list_jsondata: { n: 17, br: g.readString, bw: e.writeString },
            clan_account_id: { n: 18, br: g.readUint32, bw: e.writeUint32 },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= s(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return a(t.M(), e, n);
    }
    static fromObject(e) {
      return p(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new D.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return o(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new D.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      h(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new D.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CStoreCuration_ListDetails`;
    }
  },
  ne = class t extends D.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.recommended_app || l(t.M()),
        D.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            recommended_app: { n: 1, c: te },
            blurb: { n: 2, br: g.readString, bw: e.writeString },
            sort_order: { n: 3, br: g.readUint32, bw: e.writeUint32 },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= s(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return a(t.M(), e, n);
    }
    static fromObject(e) {
      return p(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new D.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return o(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new D.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      h(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new D.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CStoreCuration_ListDetails_ListItem`;
    }
  },
  re = class t extends D.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.steamid || l(t.M()),
        D.Message.initialize(this, e, 0, -1, void 0, null));
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
              br: g.readFixed64String,
              bw: e.writeFixed64String,
            },
            list_state: { n: 2, br: g.readEnum, bw: e.writeEnum },
            start: { n: 3, br: g.readUint32, bw: e.writeUint32 },
            count: { n: 4, br: g.readUint32, bw: e.writeUint32 },
            return_total_only: { n: 5, br: g.readBool, bw: e.writeBool },
            return_metadata_only: { n: 6, br: g.readBool, bw: e.writeBool },
            max_apps: { n: 7, br: g.readInt32, bw: e.writeInt32 },
            sale_clan_event_gid: {
              n: 8,
              br: g.readFixed64String,
              bw: e.writeFixed64String,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= s(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return a(t.M(), e, n);
    }
    static fromObject(e) {
      return p(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new D.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return o(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new D.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      h(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new D.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CStoreCuration_GetLists_Request`;
    }
  },
  ie = class t extends D.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.list_details || l(t.M()),
        D.Message.initialize(this, e, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            list_details: { n: 1, c: O, r: !0, q: !0 },
            total: { n: 2, br: g.readUint32, bw: e.writeUint32 },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= s(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return a(t.M(), e, n);
    }
    static fromObject(e) {
      return p(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new D.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return o(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new D.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      h(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new D.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CStoreCuration_GetLists_Response`;
    }
  },
  ae = class t extends D.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.steamid || l(t.M()),
        D.Message.initialize(this, e, 0, -1, void 0, null));
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
              br: g.readFixed64String,
              bw: e.writeFixed64String,
            },
            listid: { n: 2, br: g.readUint64String, bw: e.writeUint64String },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= s(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return a(t.M(), e, n);
    }
    static fromObject(e) {
      return p(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new D.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return o(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new D.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      h(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new D.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CStoreCuration_GetListDetails_Request`;
    }
  },
  oe = class e extends D.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.list_details || l(e.M()),
        D.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= { proto: e, fields: { list_details: { n: 1, c: O } } }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= s(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return p(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new D.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return o(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new D.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new D.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStoreCuration_GetListDetails_Response`;
    }
  },
  se;
(function (e) {
  function t(e, t, r) {
    return e.SendMsg(`StoreCuration.GetLists#1`, n(re, t, r), ie, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
      rgBrowserAPISites: [`all`],
    });
  }
  e.GetLists = t;
  function r(e, t, r) {
    return e.SendMsg(`StoreCuration.GetListDetails#1`, n(ae, t, r), oe, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
      rgBrowserAPISites: [`all`],
    });
  }
  e.GetListDetails = r;
})((se ||= {}));
var k = class t extends D.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.appid || l(t.M()),
        D.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            appid: { n: 1, br: g.readUint32, bw: e.writeUint32 },
            clan_steamid: {
              n: 2,
              br: g.readFixed64String,
              bw: e.writeFixed64String,
            },
            relation: { n: 3, br: g.readEnum, bw: e.writeEnum },
            linkname: { n: 4, br: g.readString, bw: e.writeString },
            json: { n: 5, br: g.readString, bw: e.writeString },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= s(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return a(t.M(), e, n);
    }
    static fromObject(e) {
      return p(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new D.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return o(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new D.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      h(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new D.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CDeveloperPageLink`;
    }
  },
  A = class t extends D.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.clan_account_id || l(t.M()),
        D.Message.initialize(this, e, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            clan_account_id: { n: 1, br: g.readUint32, bw: e.writeUint32 },
            appid_list: {
              n: 2,
              r: !0,
              q: !0,
              br: g.readUint32,
              pbr: g.readPackedUint32,
              bw: e.writeRepeatedUint32,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= s(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return a(t.M(), e, n);
    }
    static fromObject(e) {
      return p(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new D.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return o(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new D.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      h(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new D.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CDeveloperPageToApps`;
    }
  },
  j = class t extends D.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.appid || l(t.M()),
        D.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            appid: { n: 1, br: g.readUint32, bw: e.writeUint32 },
            link: { n: 2, c: k },
            remove: { n: 3, d: !1, br: g.readBool, bw: e.writeBool },
            update_json_only: { n: 4, d: !1, br: g.readBool, bw: e.writeBool },
            skip_clan_permissions: {
              n: 5,
              d: !1,
              br: g.readBool,
              bw: e.writeBool,
            },
            partner_id: { n: 6, br: g.readUint32, bw: e.writeUint32 },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= s(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return a(t.M(), e, n);
    }
    static fromObject(e) {
      return p(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new D.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return o(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new D.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      h(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new D.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CStoreCatalog_SetDevPageLink_Request`;
    }
  },
  M = class e extends D.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), D.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new D.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new D.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new D.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStoreCatalog_SetDevPageLink_Response`;
    }
  },
  N = class t extends D.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.appid || l(t.M()),
        D.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: { appid: { n: 1, br: g.readUint32, bw: e.writeUint32 } },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= s(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return a(t.M(), e, n);
    }
    static fromObject(e) {
      return p(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new D.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return o(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new D.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      h(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new D.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CStoreCatalog_GetDevPageLinks_Request`;
    }
  },
  P = class e extends D.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.links || l(e.M()),
        D.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { links: { n: 1, c: k, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= s(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return p(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new D.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return o(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new D.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new D.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStoreCatalog_GetDevPageLinks_Response`;
    }
  },
  F = class t extends D.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.clan_account_ids || l(t.M()),
        D.Message.initialize(this, e, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            clan_account_ids: {
              n: 1,
              r: !0,
              q: !0,
              br: g.readUint32,
              pbr: g.readPackedUint32,
              bw: e.writeRepeatedUint32,
            },
            ignore_dlc: { n: 2, br: g.readBool, bw: e.writeBool },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= s(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return a(t.M(), e, n);
    }
    static fromObject(e) {
      return p(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new D.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return o(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new D.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      h(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new D.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CStoreCatalog_GetDevPageAllAppsLinked_Request`;
    }
  },
  I = class e extends D.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.results || l(e.M()),
        D.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { results: { n: 1, c: A, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= s(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return p(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new D.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return o(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new D.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new D.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStoreCatalog_GetDevPageAllAppsLinked_Response`;
    }
  },
  L = class t extends D.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.clan_account_id || l(t.M()),
        D.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            clan_account_id: { n: 1, br: g.readUint32, bw: e.writeUint32 },
            listid: { n: 2, br: g.readUint64String, bw: e.writeUint64String },
            ignore_dlc: { n: 3, br: g.readBool, bw: e.writeBool },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= s(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return a(t.M(), e, n);
    }
    static fromObject(e) {
      return p(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new D.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return o(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new D.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      h(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new D.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CStoreCatalog_GetDevPageListApps_Request`;
    }
  },
  R = class e extends D.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.apps || l(e.M()),
        D.Message.initialize(this, t, 0, -1, [1], null));
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
      return ((e.sm_mbf ||= s(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return p(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new D.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return o(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new D.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new D.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStoreCatalog_GetDevPageListApps_Response`;
    }
  },
  z = class t extends D.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.appid || l(t.M()),
        D.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            appid: { n: 1, br: g.readUint32, bw: e.writeUint32 },
            sort_order: { n: 2, br: g.readUint32, bw: e.writeUint32 },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= s(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return a(t.M(), e, n);
    }
    static fromObject(e) {
      return p(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new D.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return o(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new D.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      h(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new D.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CStoreCatalog_GetDevPageListApps_Response_ListApp`;
    }
  },
  B = class t extends D.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.partnerid || l(t.M()),
        D.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: { partnerid: { n: 1, br: g.readUint32, bw: e.writeUint32 } },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= s(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return a(t.M(), e, n);
    }
    static fromObject(e) {
      return p(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new D.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return o(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new D.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      h(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new D.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CStoreCatalog_GetDevPagesForPartner_Request`;
    }
  },
  V = class e extends D.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.results || l(e.M()),
        D.Message.initialize(this, t, 0, -1, [1], null));
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
      return ((e.sm_mbf ||= s(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return p(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new D.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return o(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new D.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new D.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStoreCatalog_GetDevPagesForPartner_Response`;
    }
  },
  H = class t extends D.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.clan_accountid || l(t.M()),
        D.Message.initialize(this, e, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            clan_accountid: { n: 1, br: g.readUint32, bw: e.writeUint32 },
            linknames: {
              n: 2,
              r: !0,
              q: !0,
              br: g.readString,
              bw: e.writeRepeatedString,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= s(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return a(t.M(), e, n);
    }
    static fromObject(e) {
      return p(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new D.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return o(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new D.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      h(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new D.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CStoreCatalog_GetDevPagesForPartner_Response_CDevPageInfo`;
    }
  },
  U;
(function (e) {
  function t(e, t, r) {
    return e.SendMsg(`StoreCatalog.SetDevPageLink#1`, n(j, t, r), M, {
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
      rgBrowserAPISites: [`partner`],
    });
  }
  e.SetDevPageLink = t;
  function r(e, t, r) {
    return e.SendMsg(`StoreCatalog.GetDevPageLinks#1`, n(N, t, r), P, {
      bConstMethod: !0,
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
      rgBrowserAPISites: [`partner`],
    });
  }
  e.GetDevPageLinks = r;
  function i(e, t, r) {
    return e.SendMsg(`StoreCatalog.GetDevPageAllAppsLinked#1`, n(F, t, r), I, {
      ePrivilege: 1,
      rgBrowserAPISites: [`partner`, `community`, `store`, `help`],
    });
  }
  e.GetDevPageAllAppsLinked = i;
  function a(e, t, r) {
    return e.SendMsg(`StoreCatalog.GetDevPageListApps#1`, n(L, t, r), R, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
      rgBrowserAPISites: [`all`],
    });
  }
  e.GetDevPageListApps = a;
  function o(e, t, r) {
    return e.SendMsg(`StoreCatalog.GetDevPagesForPartner#1`, n(B, t, r), V, {
      bConstMethod: !0,
      ePrivilege: 1,
      rgBrowserAPISites: [`partner`],
    });
  }
  e.GetDevPagesForPartner = o;
})((U ||= {}));
var W = r(T()),
  G = class t extends D.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.steamid || l(t.M()),
        D.Message.initialize(this, e, 0, -1, void 0, null));
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
              br: g.readFixed64String,
              bw: e.writeFixed64String,
            },
            accept: { n: 2, br: g.readBool, bw: e.writeBool },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= s(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return a(t.M(), e, n);
    }
    static fromObject(e) {
      return p(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new D.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return o(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new D.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      h(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new D.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CClan_RespondToClanInvite_Request`;
    }
  },
  K = class e extends D.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), D.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new D.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new D.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new D.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClan_RespondToClanInvite_Response`;
    }
  },
  q = class t extends D.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.image || l(t.M()),
        D.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            image: { n: 1, br: g.readString, bw: e.writeString },
            language: { n: 2, br: g.readUint32, bw: e.writeUint32 },
            from_body: { n: 3, br: g.readBool, bw: e.writeBool },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= s(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return a(t.M(), e, n);
    }
    static fromObject(e) {
      return p(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new D.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return o(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new D.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      h(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new D.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPartnerEventSummary_Image`;
    }
  },
  ce = class t extends D.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.background_image || l(t.M()),
        D.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            background_image: { n: 1, br: g.readString, bw: e.writeString },
            scrim_color: { n: 2, br: g.readString, bw: e.writeString },
            desktop_layout: { n: 3, br: g.readString, bw: e.writeString },
            logo: { n: 4, c: q },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= s(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return a(t.M(), e, n);
    }
    static fromObject(e) {
      return p(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new D.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return o(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new D.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      h(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new D.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPartnerEventSummary_CrossPromo`;
    }
  },
  le = class t extends D.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.clan_accountid || l(t.M()),
        D.Message.initialize(this, e, 0, -1, [6], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            clan_accountid: { n: 1, br: g.readUint32, bw: e.writeUint32 },
            clan_event_gid: {
              n: 2,
              br: g.readFixed64String,
              bw: e.writeFixed64String,
            },
            announcement_gid: {
              n: 3,
              br: g.readFixed64String,
              bw: e.writeFixed64String,
            },
            appid: { n: 4, br: g.readUint32, bw: e.writeUint32 },
            event_type: { n: 5, br: g.readEnum, bw: e.writeEnum },
            tags: {
              n: 6,
              r: !0,
              q: !0,
              br: g.readString,
              bw: e.writeRepeatedString,
            },
            rtime32_start_time: { n: 7, br: g.readUint32, bw: e.writeUint32 },
            rtime32_end_time: { n: 8, br: g.readUint32, bw: e.writeUint32 },
            rtime32_visibility_start: {
              n: 9,
              br: g.readUint32,
              bw: e.writeUint32,
            },
            rtime32_visibility_end: {
              n: 10,
              br: g.readUint32,
              bw: e.writeUint32,
            },
            event_name: { n: 11, br: g.readString, bw: e.writeString },
            subtitle: { n: 12, br: g.readString, bw: e.writeString },
            summary: { n: 13, br: g.readString, bw: e.writeString },
            capsule_image: { n: 14, c: q },
            store_path: { n: 15, br: g.readString, bw: e.writeString },
            rtime32_post_time: { n: 20, br: g.readUint32, bw: e.writeUint32 },
            cross_promo: { n: 21, c: ce },
            adult_only_content: { n: 22, br: g.readBool, bw: e.writeBool },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= s(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return a(t.M(), e, n);
    }
    static fromObject(e) {
      return p(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new D.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return o(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new D.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      h(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new D.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPartnerEventSummary`;
    }
  },
  ue = class t extends D.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.steamid || l(t.M()),
        D.Message.initialize(this, e, 0, -1, [2], null));
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
              br: g.readFixed64String,
              bw: e.writeFixed64String,
            },
            events: { n: 2, c: de, r: !0, q: !0 },
            language: { n: 3, br: g.readUint32, bw: e.writeUint32 },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= s(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return a(t.M(), e, n);
    }
    static fromObject(e) {
      return p(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new D.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return o(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new D.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      h(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new D.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CClan_GetPartnerEventSummaries_Request`;
    }
  },
  de = class t extends D.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.clan_accountid || l(t.M()),
        D.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            clan_accountid: { n: 1, br: g.readUint32, bw: e.writeUint32 },
            clan_event_gid: {
              n: 2,
              br: g.readFixed64String,
              bw: e.writeFixed64String,
            },
            announcement_gid: {
              n: 3,
              br: g.readFixed64String,
              bw: e.writeFixed64String,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= s(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return a(t.M(), e, n);
    }
    static fromObject(e) {
      return p(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new D.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return o(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new D.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      h(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new D.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CClan_GetPartnerEventSummaries_Request_Event`;
    }
  },
  fe = class e extends D.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.summaries || l(e.M()),
        D.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { summaries: { n: 1, c: le, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= s(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return p(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new D.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return o(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new D.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new D.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClan_GetPartnerEventSummaries_Response`;
    }
  },
  pe = class t extends D.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.steamid || l(t.M()),
        D.Message.initialize(this, e, 0, -1, [6, 8, 12, 13, 14], null));
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
              br: g.readFixed64String,
              bw: e.writeFixed64String,
            },
            clan_event_gid: {
              n: 2,
              br: g.readFixed64String,
              bw: e.writeFixed64String,
            },
            clan_announcement_gid: {
              n: 3,
              br: g.readFixed64String,
              bw: e.writeFixed64String,
            },
            count_earlier: { n: 4, d: 1, br: g.readUint32, bw: e.writeUint32 },
            count_later: { n: 5, d: 1, br: g.readUint32, bw: e.writeUint32 },
            required_tags: {
              n: 6,
              r: !0,
              q: !0,
              br: g.readString,
              bw: e.writeRepeatedString,
            },
            require_no_tags: { n: 7, br: g.readBool, bw: e.writeBool },
            language_preference: {
              n: 8,
              r: !0,
              q: !0,
              br: g.readUint32,
              pbr: g.readPackedUint32,
              bw: e.writeRepeatedUint32,
            },
            rtime_oldest_date: { n: 9, br: g.readUint32, bw: e.writeUint32 },
            include_old_announcements: {
              n: 10,
              d: !0,
              br: g.readBool,
              bw: e.writeBool,
            },
            include_old_events: {
              n: 11,
              d: !1,
              br: g.readBool,
              bw: e.writeBool,
            },
            exclude_tags: {
              n: 12,
              r: !0,
              q: !0,
              br: g.readString,
              bw: e.writeRepeatedString,
            },
            event_type_filter: {
              n: 13,
              r: !0,
              q: !0,
              br: g.readEnum,
              pbr: g.readPackedEnum,
              bw: e.writeRepeatedEnum,
            },
            exclude_event_types: {
              n: 14,
              r: !0,
              q: !0,
              br: g.readEnum,
              pbr: g.readPackedEnum,
              bw: e.writeRepeatedEnum,
            },
            only_summaries: { n: 15, br: g.readBool, bw: e.writeBool },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= s(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return a(t.M(), e, n);
    }
    static fromObject(e) {
      return p(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new D.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return o(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new D.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      h(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new D.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CClan_GetAdjacentPartnerEvents_Request`;
    }
  },
  me = class t extends D.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.event_data || l(t.M()),
        D.Message.initialize(this, e, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            event_data: { n: 1, c: d, r: !0, q: !0 },
            more_before: { n: 2, br: g.readBool, bw: e.writeBool },
            more_after: { n: 3, br: g.readBool, bw: e.writeBool },
            clan_is_creator_home: { n: 4, br: g.readBool, bw: e.writeBool },
            clan_is_ogg: { n: 5, br: g.readBool, bw: e.writeBool },
            clan_is_ovg: { n: 6, br: g.readBool, bw: e.writeBool },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= s(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return a(t.M(), e, n);
    }
    static fromObject(e) {
      return p(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new D.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return o(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new D.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      h(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new D.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CClan_GetAdjacentPartnerEvents_Response`;
    }
  },
  he = class t extends D.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.steamid || l(t.M()),
        D.Message.initialize(this, e, 0, -1, void 0, null));
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
              br: g.readFixed64String,
              bw: e.writeFixed64String,
            },
            rtime_oldest_date: { n: 2, br: g.readUint32, bw: e.writeUint32 },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= s(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return a(t.M(), e, n);
    }
    static fromObject(e) {
      return p(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new D.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return o(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new D.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      h(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new D.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CClan_GetDraftAndRecentPartnerEventSnippet_Request`;
    }
  },
  ge = class e extends D.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.snippets || l(e.M()),
        D.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { snippets: { n: 1, c: _e, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= s(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return p(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new D.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return o(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new D.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new D.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClan_GetDraftAndRecentPartnerEventSnippet_Response`;
    }
  },
  _e = class t extends D.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.gid || l(t.M()),
        D.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            gid: { n: 1, br: g.readFixed64String, bw: e.writeFixed64String },
            announcement_gid: {
              n: 2,
              br: g.readFixed64String,
              bw: e.writeFixed64String,
            },
            hidden: { n: 3, br: g.readBool, bw: e.writeBool },
            published: { n: 4, br: g.readBool, bw: e.writeBool },
            rtime32_start_time: { n: 5, br: g.readUint32, bw: e.writeUint32 },
            event_name: { n: 6, br: g.readString, bw: e.writeString },
            event_type: { n: 7, br: g.readEnum, bw: e.writeEnum },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= s(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return a(t.M(), e, n);
    }
    static fromObject(e) {
      return p(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new D.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return o(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new D.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      h(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new D.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CClan_GetDraftAndRecentPartnerEventSnippet_Response_CEventSnippetData`;
    }
  },
  ve = class t extends D.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.requests || l(t.M()),
        D.Message.initialize(this, e, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            requests: { n: 1, c: ye, r: !0, q: !0 },
            cursor: { n: 2, br: g.readString, bw: e.writeString },
            count: { n: 3, d: 100, br: g.readUint32, bw: e.writeUint32 },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= s(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return a(t.M(), e, n);
    }
    static fromObject(e) {
      return p(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new D.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return o(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new D.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      h(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new D.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CClan_GetPartnerEventsByBuildIDRange_Request`;
    }
  },
  ye = class t extends D.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.appid || l(t.M()),
        D.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            appid: { n: 1, br: g.readUint32, bw: e.writeUint32 },
            start_build_id: { n: 2, br: g.readUint32, bw: e.writeUint32 },
            end_build_id: { n: 3, br: g.readUint32, bw: e.writeUint32 },
            branch: { n: 4, br: g.readString, bw: e.writeString },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= s(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return a(t.M(), e, n);
    }
    static fromObject(e) {
      return p(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new D.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return o(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new D.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      h(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new D.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CClan_GetPartnerEventsByBuildIDRange_Request_PatchNoteRange`;
    }
  },
  be = class t extends D.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.matches || l(t.M()),
        D.Message.initialize(this, e, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            matches: { n: 1, c: xe, r: !0, q: !0 },
            num_total_results: { n: 2, br: g.readUint32, bw: e.writeUint32 },
            next_cursor: { n: 3, br: g.readString, bw: e.writeString },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= s(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return a(t.M(), e, n);
    }
    static fromObject(e) {
      return p(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new D.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return o(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new D.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      h(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new D.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CClan_GetPartnerEventsByBuildIDRange_Response`;
    }
  },
  xe = class t extends D.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.appid || l(t.M()),
        D.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            appid: { n: 1, br: g.readUint32, bw: e.writeUint32 },
            build_id: { n: 2, br: g.readUint32, bw: e.writeUint32 },
            branch: { n: 3, br: g.readString, bw: e.writeString },
            clan_event_gid: {
              n: 4,
              br: g.readFixed64String,
              bw: e.writeFixed64String,
            },
            clan_account_id: { n: 5, br: g.readUint32, bw: e.writeUint32 },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= s(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return a(t.M(), e, n);
    }
    static fromObject(e) {
      return p(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new D.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return o(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new D.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      h(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new D.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CClan_GetPartnerEventsByBuildIDRange_Response_PatchNotesDesc`;
    }
  },
  Se;
(function (e) {
  function t(e, t, r) {
    return e.SendMsg(`Clan.RespondToClanInvite#1`, n(G, t, r), K, {
      ePrivilege: 1,
    });
  }
  e.RespondToClanInvite = t;
  function r(e, t, r) {
    return e.SendMsg(`Clan.GetPartnerEventSummaries#1`, n(ue, t, r), fe, {
      ePrivilege: 2,
      rgBrowserAPISites: [`all`],
    });
  }
  e.GetPartnerEventSummaries = r;
  function i(e, t, r) {
    return e.SendMsg(`Clan.GetAdjacentPartnerEvents#1`, n(pe, t, r), me, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
      rgBrowserAPISites: [`all`],
    });
  }
  e.GetAdjacentPartnerEvents = i;
  function a(e, t, r) {
    return e.SendMsg(
      `Clan.GetDraftAndRecentPartnerEventSnippet#1`,
      n(he, t, r),
      ge,
      { bConstMethod: !0, ePrivilege: 1 },
    );
  }
  e.GetDraftAndRecentPartnerEventSnippet = a;
  function o(e, t, r) {
    return e.SendMsg(`Clan.GetPartnerEventsByBuildIDRange#1`, n(ve, t, r), be, {
      bConstMethod: !0,
      ePrivilege: 1,
      eWebAPIKeyRequirement: 1,
      rgBrowserAPISites: [`all`],
    });
  }
  e.GetPartnerEventsByBuildIDRange = o;
})((Se ||= {}));
var J = class {
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
    (C(this), (this.m_clanSteamID = e));
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
          return u.STORE_BASE_URL + `publisher/` + this.m_strVanity + `/`;
        case `franchise`:
          return u.STORE_BASE_URL + `franchise/` + this.m_strVanity + `/`;
      }
      return u.STORE_BASE_URL + `developer/` + this.m_strVanity + `/`;
    }
    return (
      u.STORE_BASE_URL + `curator/` + this.m_clanSteamID.GetAccountID() + `/`
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
    let n = u.PARTNER_BASE_URL + `sales/ajaxupdateclanaccountflags`,
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
    (o.append(`sessionid`, i()),
      o.append(`clan_account_id`, this.GetClanAccountID().toString()),
      o.append(`accountflags`, JSON.stringify(a)));
    let s = await W.default.post(n, o);
    s &&
      s.status == 200 &&
      s.data.success == 1 &&
      (this.m_clanAccountFlags = r);
  }
};
(f([b], J.prototype, `m_appidList`, void 0),
  f([b], J.prototype, `m_nFollowers`, void 0),
  f([b], J.prototype, `m_clanAccountFlags`, void 0));
var Y = class e {
  constructor() {
    C(this);
  }
  m_mapClanToCreatorHome = new Map();
  m_mapAppToCreatorIDList = new Map();
  m_bLoadedFromConfig = !1;
  m_serviceTransport = void 0;
  LazyInit() {
    if (!this.m_bLoadedFromConfig) {
      let t = m(`creatorhome`, `application_config`);
      this.ValidateStoreDefault(t) &&
        t.forEach((t) => {
          let n = Number(t.creator_clan_id),
            r = new J(w.InitFromClanID(n, u.EUNIVERSE));
          (r.Initialize(t),
            (r.m_promise = e.GetAsPromise(r)),
            this.m_mapClanToCreatorHome.set(n, r));
        });
      let n = m(`creatorhomeforapp`, `application_config`);
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
      let e = m(`loyalty_webapi_token`, `application_config`),
        t = y(new v(u.WEBAPI_BASE_URL, e || void 0));
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
      let t = new J(e);
      ((t.m_promise = this.InternalCreatorHome(t, n)),
        await t.m_promise,
        this.m_mapClanToCreatorHome.set(e.GetAccountID(), t));
    }
    return this.m_mapClanToCreatorHome.get(e.GetAccountID()).m_promise;
  }
  async InternalCreatorHome(e, t) {
    let n = { get_appids: !0, l: u.LANGUAGE },
      r =
        u.STORE_BASE_URL +
        `curator/` +
        e.GetClanAccountID() +
        `/ajaxgetcreatorhomeinfo`,
      i = await W.default.get(r, { params: n, cancelToken: t && t.token });
    return (e.Initialize(i.data), e);
  }
  async LoadCreatorHomeListForAppIncludeHiddden(e, t) {
    if ((this.LazyInit(), !this.m_mapAppToCreatorIDList.has(e))) {
      let n = { appid: e },
        r = u.STORE_BASE_URL + `events/ajaxgetcreatorhomeidforapp`,
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
    let r = `${u.STORE_BASE_URL}curator/0/ajaxsearchcurators`,
      i = {
        term: e.replace(` `, `+`),
        require_creator: t,
        cc: u.COUNTRY,
        l: u.LANGUAGE,
        origin: self.origin,
      },
      a = [],
      o = await W.default.get(r, { params: i, cancelToken: n.token });
    return (
      o.data.curators &&
        x(() => {
          o.data.curators.forEach((e) => {
            if (!this.m_mapClanToCreatorHome.has(e.creator_clan_id)) {
              let t = new J(w.InitFromClanID(e.creator_clan_id, u.EUNIVERSE));
              (t.Initialize(e),
                this.m_mapClanToCreatorHome.set(e.creator_clan_id, t));
            }
            a.push(this.m_mapClanToCreatorHome.get(e.creator_clan_id));
          });
        }),
      a
    );
  }
  GetCreatorHomeListForAppIncludeHidden(e) {
    return this.m_mapAppToCreatorIDList.has(e)
      ? this.m_mapAppToCreatorIDList.get(e)
      : [];
  }
};
(f([b], Y.prototype, `m_mapClanToCreatorHome`, void 0),
  f([b], Y.prototype, `m_mapAppToCreatorIDList`, void 0),
  f([S], Y.prototype, `LazyInit`, null));
var X = new Y();
E(`g_CreatorHomeStore`, X);
function Z(e) {
  if (!e) return null;
  let t = X.BHasCreatorHomeLoaded(e.clanSteamID)
    ? X.GetCreatorHome(e.clanSteamID)
    : void 0;
  return e.GetSaleURL(t?.GetCreatorHomeURL(`developer`));
}
function Q(e) {
  if (!e) return;
  let t = m(`creator_home_list_info`, `application_config`);
  if (typeof t != `object` || !t || Array.isArray(t)) return;
  let n = t[e];
  if (n && n.title)
    return {
      title: n.title,
      description: n.description?.length ? n.description : void 0,
      imageUrl: n.listtileimage?.length ? n.listtileimage : void 0,
    };
}
function Ce(e) {
  return Q(e)?.title;
}
function we(e) {
  return Q(e)?.description;
}
function $(e) {
  let t = w.InitFromClanID(e, u.EUNIVERSE);
  return {
    queryKey: [`CreatorHome`, e],
    initialData: () => X.GetCreatorHome(t),
    queryFn: async () => {
      let t = w.InitFromClanID(e, u.EUNIVERSE);
      return await X.LoadCreatorHome(t, !0);
    },
  };
}
function Te(e) {
  let { data: t, isFetching: n, refetch: r } = _($(e));
  return { creatorHome: t, isFetching: n, refetch: r };
}
function Ee(e, n, r) {
  let i = _({
    queryKey: [`useCreateHomeLinkedApps`, n, r],
    queryFn: async () => {
      let i = t.Init(F);
      (i.Body().add_clan_account_ids(n), r && i.Body().set_ignore_dlc(!0));
      let a = await U.GetDevPageAllAppsLinked(e, i);
      if (a.GetEResult() != 1)
        throw Error(`Error from useCreateHomeLinkedApps: ${a.GetEResult()}`);
      return a.Body().results().length == 0
        ? []
        : a.Body().results()[0].appid_list();
    },
    enabled: !!(n > 0 && e),
  });
  return i?.isLoading ? null : i.data;
}
export {
  X as a,
  N as c,
  U as d,
  Z as i,
  B as l,
  Ce as n,
  Ee as o,
  $ as r,
  Te as s,
  we as t,
  j as u,
};
