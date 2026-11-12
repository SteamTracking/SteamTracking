/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import {
  Gt as e,
  Jt as t,
  Kt as n,
  Rt as r,
  Ut as i,
  Wt as a,
  Xt as o,
  Yt as s,
  Zt as c,
  bt as l,
  qt as u,
  sn as d,
} from "./chunk~de7f2df91c.js";
var f = d(c(), 1),
  p = class r extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        r.prototype.appid || i(r.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (r.sm_m ||= {
          proto: r,
          fields: {
            appid: { n: 1, br: n.readUint32, bw: o.writeUint32 },
            clanid: { n: 2, br: n.readUint32, bw: o.writeUint32 },
            link_url: { n: 3, br: n.readString, bw: o.writeString },
            link_text: { n: 4, br: n.readString, bw: o.writeString },
            blurb: { n: 5, br: n.readString, bw: o.writeString },
            time_recommended: { n: 6, br: n.readUint32, bw: o.writeUint32 },
            comment_count: { n: 7, br: n.readInt32, bw: o.writeInt32 },
            upvote_count: { n: 8, br: n.readInt32, bw: o.writeInt32 },
            accountid_creator: { n: 9, br: n.readUint32, bw: o.writeUint32 },
            recommendation_state: { n: 10, br: n.readEnum, bw: o.writeEnum },
            received_compensation: { n: 11, br: n.readBool, bw: o.writeBool },
            received_for_free: { n: 12, br: n.readBool, bw: o.writeBool },
          },
        }),
        r.sm_m
      );
    }
    static MBF() {
      return ((r.sm_mbf ||= u(r.M())), r.sm_mbf);
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return s(r.M(), e, t);
    }
    static fromObject(t) {
      return e(r.M(), t);
    }
    static deserializeBinary(e) {
      let t = new f.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return a(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (r.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      t(r.M(), e, n);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (r.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CStoreCuration_RecommendedApp`;
    }
  },
  m = class c extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        c.prototype.listid || i(c.M()),
        f.Message.initialize(this, e, 0, -1, [10, 12, 13, 14], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (c.sm_m ||= {
          proto: c,
          fields: {
            listid: { n: 1, br: n.readUint64String, bw: o.writeUint64String },
            title: { n: 2, br: n.readString, bw: o.writeString },
            blurb: { n: 3, br: n.readString, bw: o.writeString },
            link: { n: 4, br: n.readString, bw: o.writeString },
            list_state: { n: 5, br: n.readEnum, bw: o.writeEnum },
            sort_order: { n: 6, br: n.readUint32, bw: o.writeUint32 },
            time_created: { n: 7, br: n.readUint32, bw: o.writeUint32 },
            time_updated: { n: 8, br: n.readUint32, bw: o.writeUint32 },
            accountid: { n: 9, br: n.readUint32, bw: o.writeUint32 },
            apps: { n: 10, c: h, r: !0, q: !0 },
            list_type: { n: 11, br: n.readEnum, bw: o.writeEnum },
            title_localization: { n: 12, c: r, r: !0, q: !0 },
            blurb_localization: { n: 13, c: r, r: !0, q: !0 },
            link_localization: { n: 14, c: r, r: !0, q: !0 },
            sale_clan_steamid: {
              n: 15,
              br: n.readFixed64String,
              bw: o.writeFixed64String,
            },
            sale_clan_event_gid: {
              n: 16,
              br: n.readFixed64String,
              bw: o.writeFixed64String,
            },
            list_jsondata: { n: 17, br: n.readString, bw: o.writeString },
            clan_account_id: { n: 18, br: n.readUint32, bw: o.writeUint32 },
          },
        }),
        c.sm_m
      );
    }
    static MBF() {
      return ((c.sm_mbf ||= u(c.M())), c.sm_mbf);
    }
    toObject(e = !1) {
      return c.toObject(e, this);
    }
    static toObject(e, t) {
      return s(c.M(), e, t);
    }
    static fromObject(t) {
      return e(c.M(), t);
    }
    static deserializeBinary(e) {
      let t = new f.BinaryReader(e),
        n = new c();
      return c.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return a(c.MBF(), e, t);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (c.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      t(c.M(), e, n);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (c.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CStoreCuration_ListDetails`;
    }
  },
  h = class r extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        r.prototype.recommended_app || i(r.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (r.sm_m ||= {
          proto: r,
          fields: {
            recommended_app: { n: 1, c: p },
            blurb: { n: 2, br: n.readString, bw: o.writeString },
            sort_order: { n: 3, br: n.readUint32, bw: o.writeUint32 },
          },
        }),
        r.sm_m
      );
    }
    static MBF() {
      return ((r.sm_mbf ||= u(r.M())), r.sm_mbf);
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return s(r.M(), e, t);
    }
    static fromObject(t) {
      return e(r.M(), t);
    }
    static deserializeBinary(e) {
      let t = new f.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return a(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (r.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      t(r.M(), e, n);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (r.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CStoreCuration_ListDetails_ListItem`;
    }
  },
  g = class r extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        r.prototype.steamid || i(r.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (r.sm_m ||= {
          proto: r,
          fields: {
            steamid: {
              n: 1,
              br: n.readFixed64String,
              bw: o.writeFixed64String,
            },
            list_state: { n: 2, br: n.readEnum, bw: o.writeEnum },
            start: { n: 3, br: n.readUint32, bw: o.writeUint32 },
            count: { n: 4, br: n.readUint32, bw: o.writeUint32 },
            return_total_only: { n: 5, br: n.readBool, bw: o.writeBool },
            return_metadata_only: { n: 6, br: n.readBool, bw: o.writeBool },
            max_apps: { n: 7, br: n.readInt32, bw: o.writeInt32 },
            sale_clan_event_gid: {
              n: 8,
              br: n.readFixed64String,
              bw: o.writeFixed64String,
            },
          },
        }),
        r.sm_m
      );
    }
    static MBF() {
      return ((r.sm_mbf ||= u(r.M())), r.sm_mbf);
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return s(r.M(), e, t);
    }
    static fromObject(t) {
      return e(r.M(), t);
    }
    static deserializeBinary(e) {
      let t = new f.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return a(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (r.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      t(r.M(), e, n);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (r.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CStoreCuration_GetLists_Request`;
    }
  },
  _ = class r extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        r.prototype.list_details || i(r.M()),
        f.Message.initialize(this, e, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (r.sm_m ||= {
          proto: r,
          fields: {
            list_details: { n: 1, c: m, r: !0, q: !0 },
            total: { n: 2, br: n.readUint32, bw: o.writeUint32 },
          },
        }),
        r.sm_m
      );
    }
    static MBF() {
      return ((r.sm_mbf ||= u(r.M())), r.sm_mbf);
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return s(r.M(), e, t);
    }
    static fromObject(t) {
      return e(r.M(), t);
    }
    static deserializeBinary(e) {
      let t = new f.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return a(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (r.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      t(r.M(), e, n);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (r.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CStoreCuration_GetLists_Response`;
    }
  },
  v = class r extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        r.prototype.steamid || i(r.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (r.sm_m ||= {
          proto: r,
          fields: {
            steamid: {
              n: 1,
              br: n.readFixed64String,
              bw: o.writeFixed64String,
            },
            listid: { n: 2, br: n.readUint64String, bw: o.writeUint64String },
          },
        }),
        r.sm_m
      );
    }
    static MBF() {
      return ((r.sm_mbf ||= u(r.M())), r.sm_mbf);
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return s(r.M(), e, t);
    }
    static fromObject(t) {
      return e(r.M(), t);
    }
    static deserializeBinary(e) {
      let t = new f.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return a(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (r.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      t(r.M(), e, n);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (r.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CStoreCuration_GetListDetails_Request`;
    }
  },
  y = class n extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        n.prototype.list_details || i(n.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (n.sm_m ||= { proto: n, fields: { list_details: { n: 1, c: m } } }),
        n.sm_m
      );
    }
    static MBF() {
      return ((n.sm_mbf ||= u(n.M())), n.sm_mbf);
    }
    toObject(e = !1) {
      return n.toObject(e, this);
    }
    static toObject(e, t) {
      return s(n.M(), e, t);
    }
    static fromObject(t) {
      return e(n.M(), t);
    }
    static deserializeBinary(e) {
      let t = new f.BinaryReader(e),
        r = new n();
      return n.deserializeBinaryFromReader(r, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return a(n.MBF(), e, t);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (n.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      t(n.M(), e, r);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (n.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CStoreCuration_GetListDetails_Response`;
    }
  },
  b;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(`StoreCuration.GetLists#1`, l(g, t, n), _, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
      rgBrowserAPISites: [`partner`, `community`],
    });
  }
  e.GetLists = t;
  function n(e, t, n) {
    return e.SendMsg(`StoreCuration.GetListDetails#1`, l(v, t, n), y, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
      rgBrowserAPISites: [`partner`, `community`],
    });
  }
  e.GetListDetails = n;
})((b ||= {}));
var x = class r extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        r.prototype.steamid || i(r.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (r.sm_m ||= {
          proto: r,
          fields: {
            steamid: {
              n: 1,
              br: n.readFixed64String,
              bw: o.writeFixed64String,
            },
            accept: { n: 2, br: n.readBool, bw: o.writeBool },
          },
        }),
        r.sm_m
      );
    }
    static MBF() {
      return ((r.sm_mbf ||= u(r.M())), r.sm_mbf);
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return s(r.M(), e, t);
    }
    static fromObject(t) {
      return e(r.M(), t);
    }
    static deserializeBinary(e) {
      let t = new f.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return a(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (r.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      t(r.M(), e, n);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (r.serializeBinaryToWriter(this, e), e.getResultBase64String());
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
  C = class r extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        r.prototype.image || i(r.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (r.sm_m ||= {
          proto: r,
          fields: {
            image: { n: 1, br: n.readString, bw: o.writeString },
            language: { n: 2, br: n.readUint32, bw: o.writeUint32 },
            from_body: { n: 3, br: n.readBool, bw: o.writeBool },
          },
        }),
        r.sm_m
      );
    }
    static MBF() {
      return ((r.sm_mbf ||= u(r.M())), r.sm_mbf);
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return s(r.M(), e, t);
    }
    static fromObject(t) {
      return e(r.M(), t);
    }
    static deserializeBinary(e) {
      let t = new f.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return a(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (r.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      t(r.M(), e, n);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (r.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPartnerEventSummary_Image`;
    }
  },
  w = class r extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        r.prototype.background_image || i(r.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (r.sm_m ||= {
          proto: r,
          fields: {
            background_image: { n: 1, br: n.readString, bw: o.writeString },
            scrim_color: { n: 2, br: n.readString, bw: o.writeString },
            desktop_layout: { n: 3, br: n.readString, bw: o.writeString },
            logo: { n: 4, c: C },
          },
        }),
        r.sm_m
      );
    }
    static MBF() {
      return ((r.sm_mbf ||= u(r.M())), r.sm_mbf);
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return s(r.M(), e, t);
    }
    static fromObject(t) {
      return e(r.M(), t);
    }
    static deserializeBinary(e) {
      let t = new f.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return a(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (r.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      t(r.M(), e, n);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (r.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPartnerEventSummary_CrossPromo`;
    }
  },
  T = class r extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        r.prototype.clan_accountid || i(r.M()),
        f.Message.initialize(this, e, 0, -1, [6], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (r.sm_m ||= {
          proto: r,
          fields: {
            clan_accountid: { n: 1, br: n.readUint32, bw: o.writeUint32 },
            clan_event_gid: {
              n: 2,
              br: n.readFixed64String,
              bw: o.writeFixed64String,
            },
            announcement_gid: {
              n: 3,
              br: n.readFixed64String,
              bw: o.writeFixed64String,
            },
            appid: { n: 4, br: n.readUint32, bw: o.writeUint32 },
            event_type: { n: 5, br: n.readEnum, bw: o.writeEnum },
            tags: {
              n: 6,
              r: !0,
              q: !0,
              br: n.readString,
              bw: o.writeRepeatedString,
            },
            rtime32_start_time: { n: 7, br: n.readUint32, bw: o.writeUint32 },
            rtime32_end_time: { n: 8, br: n.readUint32, bw: o.writeUint32 },
            rtime32_visibility_start: {
              n: 9,
              br: n.readUint32,
              bw: o.writeUint32,
            },
            rtime32_visibility_end: {
              n: 10,
              br: n.readUint32,
              bw: o.writeUint32,
            },
            event_name: { n: 11, br: n.readString, bw: o.writeString },
            subtitle: { n: 12, br: n.readString, bw: o.writeString },
            summary: { n: 13, br: n.readString, bw: o.writeString },
            capsule_image: { n: 14, c: C },
            store_path: { n: 15, br: n.readString, bw: o.writeString },
            rtime32_post_time: { n: 20, br: n.readUint32, bw: o.writeUint32 },
            cross_promo: { n: 21, c: w },
            adult_only_content: { n: 22, br: n.readBool, bw: o.writeBool },
          },
        }),
        r.sm_m
      );
    }
    static MBF() {
      return ((r.sm_mbf ||= u(r.M())), r.sm_mbf);
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return s(r.M(), e, t);
    }
    static fromObject(t) {
      return e(r.M(), t);
    }
    static deserializeBinary(e) {
      let t = new f.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return a(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (r.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      t(r.M(), e, n);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (r.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPartnerEventSummary`;
    }
  },
  E = class r extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        r.prototype.steamid || i(r.M()),
        f.Message.initialize(this, e, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (r.sm_m ||= {
          proto: r,
          fields: {
            steamid: {
              n: 1,
              br: n.readFixed64String,
              bw: o.writeFixed64String,
            },
            events: { n: 2, c: D, r: !0, q: !0 },
            language: { n: 3, br: n.readUint32, bw: o.writeUint32 },
          },
        }),
        r.sm_m
      );
    }
    static MBF() {
      return ((r.sm_mbf ||= u(r.M())), r.sm_mbf);
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return s(r.M(), e, t);
    }
    static fromObject(t) {
      return e(r.M(), t);
    }
    static deserializeBinary(e) {
      let t = new f.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return a(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (r.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      t(r.M(), e, n);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (r.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CClan_GetPartnerEventSummaries_Request`;
    }
  },
  D = class r extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        r.prototype.clan_accountid || i(r.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (r.sm_m ||= {
          proto: r,
          fields: {
            clan_accountid: { n: 1, br: n.readUint32, bw: o.writeUint32 },
            clan_event_gid: {
              n: 2,
              br: n.readFixed64String,
              bw: o.writeFixed64String,
            },
            announcement_gid: {
              n: 3,
              br: n.readFixed64String,
              bw: o.writeFixed64String,
            },
          },
        }),
        r.sm_m
      );
    }
    static MBF() {
      return ((r.sm_mbf ||= u(r.M())), r.sm_mbf);
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return s(r.M(), e, t);
    }
    static fromObject(t) {
      return e(r.M(), t);
    }
    static deserializeBinary(e) {
      let t = new f.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return a(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (r.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      t(r.M(), e, n);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (r.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CClan_GetPartnerEventSummaries_Request_Event`;
    }
  },
  O = class n extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        n.prototype.summaries || i(n.M()),
        f.Message.initialize(this, e, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (n.sm_m ||= {
          proto: n,
          fields: { summaries: { n: 1, c: T, r: !0, q: !0 } },
        }),
        n.sm_m
      );
    }
    static MBF() {
      return ((n.sm_mbf ||= u(n.M())), n.sm_mbf);
    }
    toObject(e = !1) {
      return n.toObject(e, this);
    }
    static toObject(e, t) {
      return s(n.M(), e, t);
    }
    static fromObject(t) {
      return e(n.M(), t);
    }
    static deserializeBinary(e) {
      let t = new f.BinaryReader(e),
        r = new n();
      return n.deserializeBinaryFromReader(r, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return a(n.MBF(), e, t);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (n.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      t(n.M(), e, r);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (n.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CClan_GetPartnerEventSummaries_Response`;
    }
  },
  k = class r extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        r.prototype.steamid || i(r.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (r.sm_m ||= {
          proto: r,
          fields: {
            steamid: {
              n: 1,
              br: n.readFixed64String,
              bw: o.writeFixed64String,
            },
            rtime_oldest_date: { n: 2, br: n.readUint32, bw: o.writeUint32 },
          },
        }),
        r.sm_m
      );
    }
    static MBF() {
      return ((r.sm_mbf ||= u(r.M())), r.sm_mbf);
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return s(r.M(), e, t);
    }
    static fromObject(t) {
      return e(r.M(), t);
    }
    static deserializeBinary(e) {
      let t = new f.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return a(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (r.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      t(r.M(), e, n);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (r.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CClan_GetDraftAndRecentPartnerEventSnippet_Request`;
    }
  },
  A = class n extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        n.prototype.snippets || i(n.M()),
        f.Message.initialize(this, e, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (n.sm_m ||= {
          proto: n,
          fields: { snippets: { n: 1, c: j, r: !0, q: !0 } },
        }),
        n.sm_m
      );
    }
    static MBF() {
      return ((n.sm_mbf ||= u(n.M())), n.sm_mbf);
    }
    toObject(e = !1) {
      return n.toObject(e, this);
    }
    static toObject(e, t) {
      return s(n.M(), e, t);
    }
    static fromObject(t) {
      return e(n.M(), t);
    }
    static deserializeBinary(e) {
      let t = new f.BinaryReader(e),
        r = new n();
      return n.deserializeBinaryFromReader(r, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return a(n.MBF(), e, t);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (n.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      t(n.M(), e, r);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (n.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CClan_GetDraftAndRecentPartnerEventSnippet_Response`;
    }
  },
  j = class r extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        r.prototype.gid || i(r.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (r.sm_m ||= {
          proto: r,
          fields: {
            gid: { n: 1, br: n.readFixed64String, bw: o.writeFixed64String },
            announcement_gid: {
              n: 2,
              br: n.readFixed64String,
              bw: o.writeFixed64String,
            },
            hidden: { n: 3, br: n.readBool, bw: o.writeBool },
            published: { n: 4, br: n.readBool, bw: o.writeBool },
            rtime32_start_time: { n: 5, br: n.readUint32, bw: o.writeUint32 },
            event_name: { n: 6, br: n.readString, bw: o.writeString },
            event_type: { n: 7, br: n.readEnum, bw: o.writeEnum },
          },
        }),
        r.sm_m
      );
    }
    static MBF() {
      return ((r.sm_mbf ||= u(r.M())), r.sm_mbf);
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return s(r.M(), e, t);
    }
    static fromObject(t) {
      return e(r.M(), t);
    }
    static deserializeBinary(e) {
      let t = new f.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return a(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (r.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      t(r.M(), e, n);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (r.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CClan_GetDraftAndRecentPartnerEventSnippet_Response_CEventSnippetData`;
    }
  },
  M = class r extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        r.prototype.requests || i(r.M()),
        f.Message.initialize(this, e, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (r.sm_m ||= {
          proto: r,
          fields: {
            requests: { n: 1, c: N, r: !0, q: !0 },
            cursor: { n: 2, br: n.readString, bw: o.writeString },
            count: { n: 3, d: 100, br: n.readUint32, bw: o.writeUint32 },
          },
        }),
        r.sm_m
      );
    }
    static MBF() {
      return ((r.sm_mbf ||= u(r.M())), r.sm_mbf);
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return s(r.M(), e, t);
    }
    static fromObject(t) {
      return e(r.M(), t);
    }
    static deserializeBinary(e) {
      let t = new f.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return a(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (r.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      t(r.M(), e, n);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (r.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CClan_GetPartnerEventsByBuildIDRange_Request`;
    }
  },
  N = class r extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        r.prototype.appid || i(r.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (r.sm_m ||= {
          proto: r,
          fields: {
            appid: { n: 1, br: n.readUint32, bw: o.writeUint32 },
            start_build_id: { n: 2, br: n.readUint32, bw: o.writeUint32 },
            end_build_id: { n: 3, br: n.readUint32, bw: o.writeUint32 },
            branch: { n: 4, br: n.readString, bw: o.writeString },
          },
        }),
        r.sm_m
      );
    }
    static MBF() {
      return ((r.sm_mbf ||= u(r.M())), r.sm_mbf);
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return s(r.M(), e, t);
    }
    static fromObject(t) {
      return e(r.M(), t);
    }
    static deserializeBinary(e) {
      let t = new f.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return a(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (r.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      t(r.M(), e, n);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (r.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CClan_GetPartnerEventsByBuildIDRange_Request_PatchNoteRange`;
    }
  },
  P = class r extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        r.prototype.matches || i(r.M()),
        f.Message.initialize(this, e, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (r.sm_m ||= {
          proto: r,
          fields: {
            matches: { n: 1, c: F, r: !0, q: !0 },
            num_total_results: { n: 2, br: n.readUint32, bw: o.writeUint32 },
            next_cursor: { n: 3, br: n.readString, bw: o.writeString },
          },
        }),
        r.sm_m
      );
    }
    static MBF() {
      return ((r.sm_mbf ||= u(r.M())), r.sm_mbf);
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return s(r.M(), e, t);
    }
    static fromObject(t) {
      return e(r.M(), t);
    }
    static deserializeBinary(e) {
      let t = new f.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return a(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (r.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      t(r.M(), e, n);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (r.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CClan_GetPartnerEventsByBuildIDRange_Response`;
    }
  },
  F = class r extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        r.prototype.appid || i(r.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (r.sm_m ||= {
          proto: r,
          fields: {
            appid: { n: 1, br: n.readUint32, bw: o.writeUint32 },
            build_id: { n: 2, br: n.readUint32, bw: o.writeUint32 },
            branch: { n: 3, br: n.readString, bw: o.writeString },
            clan_event_gid: {
              n: 4,
              br: n.readFixed64String,
              bw: o.writeFixed64String,
            },
            clan_account_id: { n: 5, br: n.readUint32, bw: o.writeUint32 },
          },
        }),
        r.sm_m
      );
    }
    static MBF() {
      return ((r.sm_mbf ||= u(r.M())), r.sm_mbf);
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return s(r.M(), e, t);
    }
    static fromObject(t) {
      return e(r.M(), t);
    }
    static deserializeBinary(e) {
      let t = new f.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return a(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (r.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      t(r.M(), e, n);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (r.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CClan_GetPartnerEventsByBuildIDRange_Response_PatchNotesDesc`;
    }
  },
  I;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(`Clan.RespondToClanInvite#1`, l(x, t, n), S, {
      ePrivilege: 1,
    });
  }
  e.RespondToClanInvite = t;
  function n(e, t, n) {
    return e.SendMsg(`Clan.GetPartnerEventSummaries#1`, l(E, t, n), O, {
      ePrivilege: 2,
      rgBrowserAPISites: [`store`, `community`, `partner`],
    });
  }
  e.GetPartnerEventSummaries = n;
  function r(e, t, n) {
    return e.SendMsg(
      `Clan.GetDraftAndRecentPartnerEventSnippet#1`,
      l(k, t, n),
      A,
      { bConstMethod: !0, ePrivilege: 1 },
    );
  }
  e.GetDraftAndRecentPartnerEventSnippet = r;
  function i(e, t, n) {
    return e.SendMsg(`Clan.GetPartnerEventsByBuildIDRange#1`, l(M, t, n), P, {
      bConstMethod: !0,
      ePrivilege: 1,
      eWebAPIKeyRequirement: 1,
      rgBrowserAPISites: [`partner`, `community`],
    });
  }
  e.GetPartnerEventsByBuildIDRange = i;
})((I ||= {}));
