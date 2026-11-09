/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import {
  Gt as e,
  Ht as t,
  Jt as n,
  Kt as r,
  Lt as i,
  Ut as a,
  Wt as o,
  Xt as s,
  Yt as c,
  on as l,
  qt as u,
  yt as d,
} from "./mobx.esm.js";
var f = l(s(), 1),
  p = class i extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        i.prototype.appid || t(i.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (i.sm_m ||= {
          proto: i,
          fields: {
            appid: { n: 1, br: e.readUint32, bw: c.writeUint32 },
            clanid: { n: 2, br: e.readUint32, bw: c.writeUint32 },
            link_url: { n: 3, br: e.readString, bw: c.writeString },
            link_text: { n: 4, br: e.readString, bw: c.writeString },
            blurb: { n: 5, br: e.readString, bw: c.writeString },
            time_recommended: { n: 6, br: e.readUint32, bw: c.writeUint32 },
            comment_count: { n: 7, br: e.readInt32, bw: c.writeInt32 },
            upvote_count: { n: 8, br: e.readInt32, bw: c.writeInt32 },
            accountid_creator: { n: 9, br: e.readUint32, bw: c.writeUint32 },
            recommendation_state: { n: 10, br: e.readEnum, bw: c.writeEnum },
            received_compensation: { n: 11, br: e.readBool, bw: c.writeBool },
            received_for_free: { n: 12, br: e.readBool, bw: c.writeBool },
          },
        }),
        i.sm_m
      );
    }
    static MBF() {
      return ((i.sm_mbf ||= r(i.M())), i.sm_mbf);
    }
    toObject(e = !1) {
      return i.toObject(e, this);
    }
    static toObject(e, t) {
      return n(i.M(), e, t);
    }
    static fromObject(e) {
      return o(i.M(), e);
    }
    static deserializeBinary(e) {
      let t = new f.BinaryReader(e),
        n = new i();
      return i.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return a(i.MBF(), e, t);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (i.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {
      u(i.M(), e, t);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (i.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CStoreCuration_RecommendedApp`;
    }
  },
  m = class s extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        s.prototype.listid || t(s.M()),
        f.Message.initialize(this, e, 0, -1, [10, 12, 13, 14], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (s.sm_m ||= {
          proto: s,
          fields: {
            listid: { n: 1, br: e.readUint64String, bw: c.writeUint64String },
            title: { n: 2, br: e.readString, bw: c.writeString },
            blurb: { n: 3, br: e.readString, bw: c.writeString },
            link: { n: 4, br: e.readString, bw: c.writeString },
            list_state: { n: 5, br: e.readEnum, bw: c.writeEnum },
            sort_order: { n: 6, br: e.readUint32, bw: c.writeUint32 },
            time_created: { n: 7, br: e.readUint32, bw: c.writeUint32 },
            time_updated: { n: 8, br: e.readUint32, bw: c.writeUint32 },
            accountid: { n: 9, br: e.readUint32, bw: c.writeUint32 },
            apps: { n: 10, c: h, r: !0, q: !0 },
            list_type: { n: 11, br: e.readEnum, bw: c.writeEnum },
            title_localization: { n: 12, c: i, r: !0, q: !0 },
            blurb_localization: { n: 13, c: i, r: !0, q: !0 },
            link_localization: { n: 14, c: i, r: !0, q: !0 },
            sale_clan_steamid: {
              n: 15,
              br: e.readFixed64String,
              bw: c.writeFixed64String,
            },
            sale_clan_event_gid: {
              n: 16,
              br: e.readFixed64String,
              bw: c.writeFixed64String,
            },
            list_jsondata: { n: 17, br: e.readString, bw: c.writeString },
            clan_account_id: { n: 18, br: e.readUint32, bw: c.writeUint32 },
          },
        }),
        s.sm_m
      );
    }
    static MBF() {
      return ((s.sm_mbf ||= r(s.M())), s.sm_mbf);
    }
    toObject(e = !1) {
      return s.toObject(e, this);
    }
    static toObject(e, t) {
      return n(s.M(), e, t);
    }
    static fromObject(e) {
      return o(s.M(), e);
    }
    static deserializeBinary(e) {
      let t = new f.BinaryReader(e),
        n = new s();
      return s.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return a(s.MBF(), e, t);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (s.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {
      u(s.M(), e, t);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (s.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CStoreCuration_ListDetails`;
    }
  },
  h = class i extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        i.prototype.recommended_app || t(i.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (i.sm_m ||= {
          proto: i,
          fields: {
            recommended_app: { n: 1, c: p },
            blurb: { n: 2, br: e.readString, bw: c.writeString },
            sort_order: { n: 3, br: e.readUint32, bw: c.writeUint32 },
          },
        }),
        i.sm_m
      );
    }
    static MBF() {
      return ((i.sm_mbf ||= r(i.M())), i.sm_mbf);
    }
    toObject(e = !1) {
      return i.toObject(e, this);
    }
    static toObject(e, t) {
      return n(i.M(), e, t);
    }
    static fromObject(e) {
      return o(i.M(), e);
    }
    static deserializeBinary(e) {
      let t = new f.BinaryReader(e),
        n = new i();
      return i.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return a(i.MBF(), e, t);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (i.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {
      u(i.M(), e, t);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (i.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CStoreCuration_ListDetails_ListItem`;
    }
  },
  g = class i extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        i.prototype.steamid || t(i.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (i.sm_m ||= {
          proto: i,
          fields: {
            steamid: {
              n: 1,
              br: e.readFixed64String,
              bw: c.writeFixed64String,
            },
            list_state: { n: 2, br: e.readEnum, bw: c.writeEnum },
            start: { n: 3, br: e.readUint32, bw: c.writeUint32 },
            count: { n: 4, br: e.readUint32, bw: c.writeUint32 },
            return_total_only: { n: 5, br: e.readBool, bw: c.writeBool },
            return_metadata_only: { n: 6, br: e.readBool, bw: c.writeBool },
            max_apps: { n: 7, br: e.readInt32, bw: c.writeInt32 },
            sale_clan_event_gid: {
              n: 8,
              br: e.readFixed64String,
              bw: c.writeFixed64String,
            },
          },
        }),
        i.sm_m
      );
    }
    static MBF() {
      return ((i.sm_mbf ||= r(i.M())), i.sm_mbf);
    }
    toObject(e = !1) {
      return i.toObject(e, this);
    }
    static toObject(e, t) {
      return n(i.M(), e, t);
    }
    static fromObject(e) {
      return o(i.M(), e);
    }
    static deserializeBinary(e) {
      let t = new f.BinaryReader(e),
        n = new i();
      return i.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return a(i.MBF(), e, t);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (i.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {
      u(i.M(), e, t);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (i.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CStoreCuration_GetLists_Request`;
    }
  },
  _ = class i extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        i.prototype.list_details || t(i.M()),
        f.Message.initialize(this, e, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (i.sm_m ||= {
          proto: i,
          fields: {
            list_details: { n: 1, c: m, r: !0, q: !0 },
            total: { n: 2, br: e.readUint32, bw: c.writeUint32 },
          },
        }),
        i.sm_m
      );
    }
    static MBF() {
      return ((i.sm_mbf ||= r(i.M())), i.sm_mbf);
    }
    toObject(e = !1) {
      return i.toObject(e, this);
    }
    static toObject(e, t) {
      return n(i.M(), e, t);
    }
    static fromObject(e) {
      return o(i.M(), e);
    }
    static deserializeBinary(e) {
      let t = new f.BinaryReader(e),
        n = new i();
      return i.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return a(i.MBF(), e, t);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (i.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {
      u(i.M(), e, t);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (i.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CStoreCuration_GetLists_Response`;
    }
  },
  v = class i extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        i.prototype.steamid || t(i.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (i.sm_m ||= {
          proto: i,
          fields: {
            steamid: {
              n: 1,
              br: e.readFixed64String,
              bw: c.writeFixed64String,
            },
            listid: { n: 2, br: e.readUint64String, bw: c.writeUint64String },
          },
        }),
        i.sm_m
      );
    }
    static MBF() {
      return ((i.sm_mbf ||= r(i.M())), i.sm_mbf);
    }
    toObject(e = !1) {
      return i.toObject(e, this);
    }
    static toObject(e, t) {
      return n(i.M(), e, t);
    }
    static fromObject(e) {
      return o(i.M(), e);
    }
    static deserializeBinary(e) {
      let t = new f.BinaryReader(e),
        n = new i();
      return i.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return a(i.MBF(), e, t);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (i.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {
      u(i.M(), e, t);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (i.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CStoreCuration_GetListDetails_Request`;
    }
  },
  y = class e extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      (super(),
        e.prototype.list_details || t(e.M()),
        f.Message.initialize(this, n, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= { proto: e, fields: { list_details: { n: 1, c: m } } }),
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
      return o(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new f.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return a(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new f.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      u(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new f.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStoreCuration_GetListDetails_Response`;
    }
  },
  b;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(`StoreCuration.GetLists#1`, d(g, t, n), _, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
      rgBrowserAPISites: [`partner`, `community`],
    });
  }
  e.GetLists = t;
  function n(e, t, n) {
    return e.SendMsg(`StoreCuration.GetListDetails#1`, d(v, t, n), y, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
      rgBrowserAPISites: [`partner`, `community`],
    });
  }
  e.GetListDetails = n;
})((b ||= {}));
var x = class i extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        i.prototype.steamid || t(i.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (i.sm_m ||= {
          proto: i,
          fields: {
            steamid: {
              n: 1,
              br: e.readFixed64String,
              bw: c.writeFixed64String,
            },
            accept: { n: 2, br: e.readBool, bw: c.writeBool },
          },
        }),
        i.sm_m
      );
    }
    static MBF() {
      return ((i.sm_mbf ||= r(i.M())), i.sm_mbf);
    }
    toObject(e = !1) {
      return i.toObject(e, this);
    }
    static toObject(e, t) {
      return n(i.M(), e, t);
    }
    static fromObject(e) {
      return o(i.M(), e);
    }
    static deserializeBinary(e) {
      let t = new f.BinaryReader(e),
        n = new i();
      return i.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return a(i.MBF(), e, t);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (i.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {
      u(i.M(), e, t);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (i.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CClan_RespondToClanInvite_Request`;
    }
  },
  S = class e extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), f.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new f.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new f.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new f.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClan_RespondToClanInvite_Response`;
    }
  },
  C = class i extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        i.prototype.image || t(i.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (i.sm_m ||= {
          proto: i,
          fields: {
            image: { n: 1, br: e.readString, bw: c.writeString },
            language: { n: 2, br: e.readUint32, bw: c.writeUint32 },
            from_body: { n: 3, br: e.readBool, bw: c.writeBool },
          },
        }),
        i.sm_m
      );
    }
    static MBF() {
      return ((i.sm_mbf ||= r(i.M())), i.sm_mbf);
    }
    toObject(e = !1) {
      return i.toObject(e, this);
    }
    static toObject(e, t) {
      return n(i.M(), e, t);
    }
    static fromObject(e) {
      return o(i.M(), e);
    }
    static deserializeBinary(e) {
      let t = new f.BinaryReader(e),
        n = new i();
      return i.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return a(i.MBF(), e, t);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (i.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {
      u(i.M(), e, t);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (i.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPartnerEventSummary_Image`;
    }
  },
  w = class i extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        i.prototype.clan_accountid || t(i.M()),
        f.Message.initialize(this, e, 0, -1, [6], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (i.sm_m ||= {
          proto: i,
          fields: {
            clan_accountid: { n: 1, br: e.readUint32, bw: c.writeUint32 },
            clan_event_gid: {
              n: 2,
              br: e.readFixed64String,
              bw: c.writeFixed64String,
            },
            announcement_gid: {
              n: 3,
              br: e.readFixed64String,
              bw: c.writeFixed64String,
            },
            appid: { n: 4, br: e.readUint32, bw: c.writeUint32 },
            event_type: { n: 5, br: e.readEnum, bw: c.writeEnum },
            tags: {
              n: 6,
              r: !0,
              q: !0,
              br: e.readString,
              bw: c.writeRepeatedString,
            },
            rtime32_start_time: { n: 7, br: e.readUint32, bw: c.writeUint32 },
            rtime32_end_time: { n: 8, br: e.readUint32, bw: c.writeUint32 },
            rtime32_visibility_start: {
              n: 9,
              br: e.readUint32,
              bw: c.writeUint32,
            },
            rtime32_visibility_end: {
              n: 10,
              br: e.readUint32,
              bw: c.writeUint32,
            },
            event_name: { n: 11, br: e.readString, bw: c.writeString },
            subtitle: { n: 12, br: e.readString, bw: c.writeString },
            summary: { n: 13, br: e.readString, bw: c.writeString },
            capsule_image: { n: 14, c: C },
            store_path: { n: 15, br: e.readString, bw: c.writeString },
            rtime32_post_time: { n: 20, br: e.readUint32, bw: c.writeUint32 },
          },
        }),
        i.sm_m
      );
    }
    static MBF() {
      return ((i.sm_mbf ||= r(i.M())), i.sm_mbf);
    }
    toObject(e = !1) {
      return i.toObject(e, this);
    }
    static toObject(e, t) {
      return n(i.M(), e, t);
    }
    static fromObject(e) {
      return o(i.M(), e);
    }
    static deserializeBinary(e) {
      let t = new f.BinaryReader(e),
        n = new i();
      return i.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return a(i.MBF(), e, t);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (i.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {
      u(i.M(), e, t);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (i.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPartnerEventSummary`;
    }
  },
  T = class i extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        i.prototype.steamid || t(i.M()),
        f.Message.initialize(this, e, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (i.sm_m ||= {
          proto: i,
          fields: {
            steamid: {
              n: 1,
              br: e.readFixed64String,
              bw: c.writeFixed64String,
            },
            events: { n: 2, c: E, r: !0, q: !0 },
            language: { n: 3, br: e.readUint32, bw: c.writeUint32 },
          },
        }),
        i.sm_m
      );
    }
    static MBF() {
      return ((i.sm_mbf ||= r(i.M())), i.sm_mbf);
    }
    toObject(e = !1) {
      return i.toObject(e, this);
    }
    static toObject(e, t) {
      return n(i.M(), e, t);
    }
    static fromObject(e) {
      return o(i.M(), e);
    }
    static deserializeBinary(e) {
      let t = new f.BinaryReader(e),
        n = new i();
      return i.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return a(i.MBF(), e, t);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (i.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {
      u(i.M(), e, t);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (i.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CClan_GetPartnerEventSummaries_Request`;
    }
  },
  E = class i extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        i.prototype.clan_accountid || t(i.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (i.sm_m ||= {
          proto: i,
          fields: {
            clan_accountid: { n: 1, br: e.readUint32, bw: c.writeUint32 },
            clan_event_gid: {
              n: 2,
              br: e.readFixed64String,
              bw: c.writeFixed64String,
            },
            announcement_gid: {
              n: 3,
              br: e.readFixed64String,
              bw: c.writeFixed64String,
            },
          },
        }),
        i.sm_m
      );
    }
    static MBF() {
      return ((i.sm_mbf ||= r(i.M())), i.sm_mbf);
    }
    toObject(e = !1) {
      return i.toObject(e, this);
    }
    static toObject(e, t) {
      return n(i.M(), e, t);
    }
    static fromObject(e) {
      return o(i.M(), e);
    }
    static deserializeBinary(e) {
      let t = new f.BinaryReader(e),
        n = new i();
      return i.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return a(i.MBF(), e, t);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (i.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {
      u(i.M(), e, t);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (i.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CClan_GetPartnerEventSummaries_Request_Event`;
    }
  },
  D = class e extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      (super(),
        e.prototype.summaries || t(e.M()),
        f.Message.initialize(this, n, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { summaries: { n: 1, c: w, r: !0, q: !0 } },
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
      return o(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new f.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return a(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new f.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      u(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new f.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClan_GetPartnerEventSummaries_Response`;
    }
  },
  O = class i extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        i.prototype.steamid || t(i.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (i.sm_m ||= {
          proto: i,
          fields: {
            steamid: {
              n: 1,
              br: e.readFixed64String,
              bw: c.writeFixed64String,
            },
            rtime_oldest_date: { n: 2, br: e.readUint32, bw: c.writeUint32 },
          },
        }),
        i.sm_m
      );
    }
    static MBF() {
      return ((i.sm_mbf ||= r(i.M())), i.sm_mbf);
    }
    toObject(e = !1) {
      return i.toObject(e, this);
    }
    static toObject(e, t) {
      return n(i.M(), e, t);
    }
    static fromObject(e) {
      return o(i.M(), e);
    }
    static deserializeBinary(e) {
      let t = new f.BinaryReader(e),
        n = new i();
      return i.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return a(i.MBF(), e, t);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (i.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {
      u(i.M(), e, t);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (i.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CClan_GetDraftAndRecentPartnerEventSnippet_Request`;
    }
  },
  k = class e extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      (super(),
        e.prototype.snippets || t(e.M()),
        f.Message.initialize(this, n, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { snippets: { n: 1, c: A, r: !0, q: !0 } },
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
      return o(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new f.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return a(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new f.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      u(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new f.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClan_GetDraftAndRecentPartnerEventSnippet_Response`;
    }
  },
  A = class i extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        i.prototype.gid || t(i.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (i.sm_m ||= {
          proto: i,
          fields: {
            gid: { n: 1, br: e.readFixed64String, bw: c.writeFixed64String },
            announcement_gid: {
              n: 2,
              br: e.readFixed64String,
              bw: c.writeFixed64String,
            },
            hidden: { n: 3, br: e.readBool, bw: c.writeBool },
            published: { n: 4, br: e.readBool, bw: c.writeBool },
            rtime32_start_time: { n: 5, br: e.readUint32, bw: c.writeUint32 },
            event_name: { n: 6, br: e.readString, bw: c.writeString },
            event_type: { n: 7, br: e.readEnum, bw: c.writeEnum },
          },
        }),
        i.sm_m
      );
    }
    static MBF() {
      return ((i.sm_mbf ||= r(i.M())), i.sm_mbf);
    }
    toObject(e = !1) {
      return i.toObject(e, this);
    }
    static toObject(e, t) {
      return n(i.M(), e, t);
    }
    static fromObject(e) {
      return o(i.M(), e);
    }
    static deserializeBinary(e) {
      let t = new f.BinaryReader(e),
        n = new i();
      return i.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return a(i.MBF(), e, t);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (i.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {
      u(i.M(), e, t);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (i.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CClan_GetDraftAndRecentPartnerEventSnippet_Response_CEventSnippetData`;
    }
  },
  j = class i extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        i.prototype.requests || t(i.M()),
        f.Message.initialize(this, e, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (i.sm_m ||= {
          proto: i,
          fields: {
            requests: { n: 1, c: M, r: !0, q: !0 },
            cursor: { n: 2, br: e.readString, bw: c.writeString },
            count: { n: 3, d: 100, br: e.readUint32, bw: c.writeUint32 },
          },
        }),
        i.sm_m
      );
    }
    static MBF() {
      return ((i.sm_mbf ||= r(i.M())), i.sm_mbf);
    }
    toObject(e = !1) {
      return i.toObject(e, this);
    }
    static toObject(e, t) {
      return n(i.M(), e, t);
    }
    static fromObject(e) {
      return o(i.M(), e);
    }
    static deserializeBinary(e) {
      let t = new f.BinaryReader(e),
        n = new i();
      return i.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return a(i.MBF(), e, t);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (i.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {
      u(i.M(), e, t);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (i.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CClan_GetPartnerEventsByBuildIDRange_Request`;
    }
  },
  M = class i extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        i.prototype.appid || t(i.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (i.sm_m ||= {
          proto: i,
          fields: {
            appid: { n: 1, br: e.readUint32, bw: c.writeUint32 },
            start_build_id: { n: 2, br: e.readUint32, bw: c.writeUint32 },
            end_build_id: { n: 3, br: e.readUint32, bw: c.writeUint32 },
            branch: { n: 4, br: e.readString, bw: c.writeString },
          },
        }),
        i.sm_m
      );
    }
    static MBF() {
      return ((i.sm_mbf ||= r(i.M())), i.sm_mbf);
    }
    toObject(e = !1) {
      return i.toObject(e, this);
    }
    static toObject(e, t) {
      return n(i.M(), e, t);
    }
    static fromObject(e) {
      return o(i.M(), e);
    }
    static deserializeBinary(e) {
      let t = new f.BinaryReader(e),
        n = new i();
      return i.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return a(i.MBF(), e, t);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (i.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {
      u(i.M(), e, t);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (i.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CClan_GetPartnerEventsByBuildIDRange_Request_PatchNoteRange`;
    }
  },
  N = class i extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        i.prototype.matches || t(i.M()),
        f.Message.initialize(this, e, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (i.sm_m ||= {
          proto: i,
          fields: {
            matches: { n: 1, c: P, r: !0, q: !0 },
            num_total_results: { n: 2, br: e.readUint32, bw: c.writeUint32 },
            next_cursor: { n: 3, br: e.readString, bw: c.writeString },
          },
        }),
        i.sm_m
      );
    }
    static MBF() {
      return ((i.sm_mbf ||= r(i.M())), i.sm_mbf);
    }
    toObject(e = !1) {
      return i.toObject(e, this);
    }
    static toObject(e, t) {
      return n(i.M(), e, t);
    }
    static fromObject(e) {
      return o(i.M(), e);
    }
    static deserializeBinary(e) {
      let t = new f.BinaryReader(e),
        n = new i();
      return i.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return a(i.MBF(), e, t);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (i.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {
      u(i.M(), e, t);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (i.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CClan_GetPartnerEventsByBuildIDRange_Response`;
    }
  },
  P = class i extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        i.prototype.appid || t(i.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (i.sm_m ||= {
          proto: i,
          fields: {
            appid: { n: 1, br: e.readUint32, bw: c.writeUint32 },
            build_id: { n: 2, br: e.readUint32, bw: c.writeUint32 },
            branch: { n: 3, br: e.readString, bw: c.writeString },
            clan_event_gid: {
              n: 4,
              br: e.readFixed64String,
              bw: c.writeFixed64String,
            },
            clan_account_id: { n: 5, br: e.readUint32, bw: c.writeUint32 },
          },
        }),
        i.sm_m
      );
    }
    static MBF() {
      return ((i.sm_mbf ||= r(i.M())), i.sm_mbf);
    }
    toObject(e = !1) {
      return i.toObject(e, this);
    }
    static toObject(e, t) {
      return n(i.M(), e, t);
    }
    static fromObject(e) {
      return o(i.M(), e);
    }
    static deserializeBinary(e) {
      let t = new f.BinaryReader(e),
        n = new i();
      return i.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return a(i.MBF(), e, t);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (i.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {
      u(i.M(), e, t);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (i.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CClan_GetPartnerEventsByBuildIDRange_Response_PatchNotesDesc`;
    }
  },
  F;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(`Clan.RespondToClanInvite#1`, d(x, t, n), S, {
      ePrivilege: 1,
    });
  }
  e.RespondToClanInvite = t;
  function n(e, t, n) {
    return e.SendMsg(`Clan.GetPartnerEventSummaries#1`, d(T, t, n), D, {
      ePrivilege: 2,
      rgBrowserAPISites: [`store`, `community`, `partner`],
    });
  }
  e.GetPartnerEventSummaries = n;
  function r(e, t, n) {
    return e.SendMsg(
      `Clan.GetDraftAndRecentPartnerEventSnippet#1`,
      d(O, t, n),
      k,
      { bConstMethod: !0, ePrivilege: 1 },
    );
  }
  e.GetDraftAndRecentPartnerEventSnippet = r;
  function i(e, t, n) {
    return e.SendMsg(`Clan.GetPartnerEventsByBuildIDRange#1`, d(j, t, n), N, {
      bConstMethod: !0,
      ePrivilege: 1,
      eWebAPIKeyRequirement: 1,
      rgBrowserAPISites: [`partner`, `community`],
    });
  }
  e.GetPartnerEventsByBuildIDRange = i;
})((F ||= {}));
