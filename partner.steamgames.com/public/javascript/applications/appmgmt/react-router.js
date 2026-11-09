/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
/* Third-party software licenses can be found at licenses.txt */
import {
  Gt as e,
  Ht as t,
  Jt as n,
  Kt as r,
  Lt as i,
  Ot as a,
  S as o,
  U as s,
  Ut as c,
  Wt as l,
  Xt as u,
  Yt as d,
  a as f,
  c as p,
  f as m,
  kt as h,
  on as g,
  q as _,
  qt as v,
  r as y,
  tn as b,
  x,
  yt as S,
} from "./mobx.esm.js";
var C = g(h(), 1),
  w = g(u(), 1),
  T = class i extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        i.prototype.title || t(i.M()),
        w.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (i.sm_m ||= {
          proto: i,
          fields: { title: { n: 1, br: e.readString, bw: d.writeString } },
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
      return l(i.M(), e);
    }
    static deserializeBinary(e) {
      let t = new w.BinaryReader(e),
        n = new i();
      return i.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return c(i.MBF(), e, t);
    }
    serializeBinary() {
      var e = new w.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      v(i.M(), e, t);
    }
    serializeBase64String() {
      var e = new w.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `SteamAward_Localization`;
    }
  },
  E = class i extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        i.prototype.voteid || t(i.M()),
        w.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (i.sm_m ||= {
          proto: i,
          fields: {
            voteid: { n: 1, br: e.readInt32, bw: d.writeInt32 },
            localization: { n: 2, c: T },
            award_year: { n: 3, br: e.readInt32, bw: d.writeInt32 },
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
      return l(i.M(), e);
    }
    static deserializeBinary(e) {
      let t = new w.BinaryReader(e),
        n = new i();
      return i.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return c(i.MBF(), e, t);
    }
    serializeBinary() {
      var e = new w.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      v(i.M(), e, t);
    }
    serializeBase64String() {
      var e = new w.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `SteamAward`;
    }
  },
  D = class i extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        i.prototype.rtime || t(i.M()),
        w.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (i.sm_m ||= {
          proto: i,
          fields: {
            rtime: { n: 1, br: e.readUint32, bw: d.writeUint32 },
            coming_soon_display_type: {
              n: 2,
              br: e.readString,
              bw: d.writeString,
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
      return l(i.M(), e);
    }
    static deserializeBinary(e) {
      let t = new w.BinaryReader(e),
        n = new i();
      return i.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return c(i.MBF(), e, t);
    }
    serializeBinary() {
      var e = new w.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      v(i.M(), e, t);
    }
    serializeBase64String() {
      var e = new w.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CSeasonPassDateAndDisplay`;
    }
  },
  ee = class a extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        a.prototype.milestone_id || t(a.M()),
        w.Message.initialize(this, e, 0, -1, [2, 5, 9, 10], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (a.sm_m ||= {
          proto: a,
          fields: {
            milestone_id: { n: 1, br: e.readInt32, bw: d.writeInt32 },
            title: { n: 2, c: i, r: !0, q: !0 },
            appid: { n: 3, br: e.readUint32, bw: d.writeUint32 },
            event_gid: {
              n: 4,
              br: e.readFixed64String,
              bw: d.writeFixed64String,
            },
            dates: { n: 5, c: D, r: !0, q: !0 },
            shipped: { n: 6, br: e.readBool, bw: d.writeBool },
            rtime_complete: { n: 7, br: e.readUint32, bw: d.writeUint32 },
            milestone_desc: { n: 9, c: i, r: !0, q: !0 },
            image: { n: 10, c: i, r: !0, q: !0 },
            backfilled_release: { n: 11, br: e.readBool, bw: d.writeBool },
            coming_soon_appid: { n: 12, br: e.readUint32, bw: d.writeUint32 },
          },
        }),
        a.sm_m
      );
    }
    static MBF() {
      return (a.sm_mbf ||= r(a.M())), a.sm_mbf;
    }
    toObject(e = !1) {
      return a.toObject(e, this);
    }
    static toObject(e, t) {
      return n(a.M(), e, t);
    }
    static fromObject(e) {
      return l(a.M(), e);
    }
    static deserializeBinary(e) {
      let t = new w.BinaryReader(e),
        n = new a();
      return a.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return c(a.MBF(), e, t);
    }
    serializeBinary() {
      var e = new w.BinaryWriter();
      return a.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      v(a.M(), e, t);
    }
    serializeBase64String() {
      var e = new w.BinaryWriter();
      return a.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CSeasonPassMilestone`;
    }
  },
  O = class i extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        i.prototype.appid || t(i.M()),
        w.Message.initialize(this, e, 0, -1, [2], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (i.sm_m ||= {
          proto: i,
          fields: {
            appid: { n: 1, br: e.readUint32, bw: d.writeUint32 },
            milestones: { n: 2, c: ee, r: !0, q: !0 },
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
      return l(i.M(), e);
    }
    static deserializeBinary(e) {
      let t = new w.BinaryReader(e),
        n = new i();
      return i.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return c(i.MBF(), e, t);
    }
    serializeBinary() {
      var e = new w.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      v(i.M(), e, t);
    }
    serializeBase64String() {
      var e = new w.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CSeasonPass`;
    }
  },
  k = class e extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      super(),
        e.prototype.sale_filter || t(e.M()),
        w.Message.initialize(this, n, 0, -1, [3], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            sale_filter: { n: 1, c: A },
            content_hub_filter: { n: 2, c: j },
            store_filters: { n: 3, c: M, r: !0, q: !0 },
          },
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
      return l(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new w.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return c(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new w.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      v(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new w.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CStorePageFilter`;
    }
  },
  A = class i extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        i.prototype.sale_tagid || t(i.M()),
        w.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (i.sm_m ||= {
          proto: i,
          fields: {
            sale_tagid: { n: 1, br: e.readUint32, bw: d.writeUint32 },
            creator_clan_account_id: {
              n: 2,
              br: e.readUint32,
              bw: d.writeUint32,
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
      return l(i.M(), e);
    }
    static deserializeBinary(e) {
      let t = new w.BinaryReader(e),
        n = new i();
      return i.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return c(i.MBF(), e, t);
    }
    serializeBinary() {
      var e = new w.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      v(i.M(), e, t);
    }
    serializeBase64String() {
      var e = new w.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CStorePageFilter_SalePageFilter`;
    }
  },
  j = class i extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        i.prototype.hub_type || t(i.M()),
        w.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (i.sm_m ||= {
          proto: i,
          fields: {
            hub_type: { n: 1, br: e.readString, bw: d.writeString },
            hub_category: { n: 2, br: e.readString, bw: d.writeString },
            hub_tagid: { n: 3, br: e.readUint32, bw: d.writeUint32 },
            discount_filter: { n: 4, br: e.readEnum, bw: d.writeEnum },
            optin: { n: 5, c: te },
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
      return l(i.M(), e);
    }
    static deserializeBinary(e) {
      let t = new w.BinaryReader(e),
        n = new i();
      return i.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return c(i.MBF(), e, t);
    }
    serializeBinary() {
      var e = new w.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      v(i.M(), e, t);
    }
    serializeBase64String() {
      var e = new w.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CStorePageFilter_ContentHubFilter`;
    }
  },
  te = class i extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        i.prototype.name || t(i.M()),
        w.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (i.sm_m ||= {
          proto: i,
          fields: {
            name: { n: 1, br: e.readString, bw: d.writeString },
            optin_tagid: { n: 2, br: e.readUint32, bw: d.writeUint32 },
            prune_tagid: { n: 3, br: e.readUint32, bw: d.writeUint32 },
            optin_only: { n: 4, br: e.readBool, bw: d.writeBool },
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
      return l(i.M(), e);
    }
    static deserializeBinary(e) {
      let t = new w.BinaryReader(e),
        n = new i();
      return i.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return c(i.MBF(), e, t);
    }
    serializeBinary() {
      var e = new w.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      v(i.M(), e, t);
    }
    serializeBase64String() {
      var e = new w.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CStorePageFilter_ContentHubFilter_OptInInfo`;
    }
  },
  M = class i extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        i.prototype.filter_json || t(i.M()),
        w.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (i.sm_m ||= {
          proto: i,
          fields: {
            filter_json: { n: 1, br: e.readString, bw: d.writeString },
            cache_key: { n: 2, br: e.readString, bw: d.writeString },
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
      return l(i.M(), e);
    }
    static deserializeBinary(e) {
      let t = new w.BinaryReader(e),
        n = new i();
      return i.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return c(i.MBF(), e, t);
    }
    serializeBinary() {
      var e = new w.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      v(i.M(), e, t);
    }
    serializeBase64String() {
      var e = new w.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CStorePageFilter_StoreFilter`;
    }
  };
function N(e) {
  return `unknown EStoreItemType ( ` + e + ` )`;
}
var ne = class i extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        i.prototype.type || t(i.M()),
        w.Message.initialize(this, e, 0, -1, [3, 9, 12], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (i.sm_m ||= {
          proto: i,
          fields: {
            type: { n: 1, br: e.readString, bw: d.writeString },
            rating: { n: 2, br: e.readString, bw: d.writeString },
            descriptors: {
              n: 3,
              r: !0,
              q: !0,
              br: e.readString,
              bw: d.writeRepeatedString,
            },
            interactive_elements: { n: 4, br: e.readString, bw: d.writeString },
            agency: { n: 5, br: e.readEnum, bw: d.writeEnum },
            banned: { n: 6, br: e.readBool, bw: d.writeBool },
            esrb_online_music_not_rated: {
              n: 7,
              br: e.readBool,
              bw: d.writeBool,
            },
            esrb_online_interactions_not_rated: {
              n: 8,
              br: e.readBool,
              bw: d.writeBool,
            },
            survey_interactive_elements: {
              n: 9,
              r: !0,
              q: !0,
              br: e.readEnum,
              pbr: e.readPackedEnum,
              bw: d.writeRepeatedEnum,
            },
            required_age: { n: 10, br: e.readInt32, bw: d.writeInt32 },
            use_age_gate: { n: 11, br: e.readBool, bw: d.writeBool },
            descriptor_images: {
              n: 12,
              r: !0,
              q: !0,
              br: e.readEnum,
              pbr: e.readPackedEnum,
              bw: d.writeRepeatedEnum,
            },
            content_survey_notes: {
              n: 13,
              br: e.readString,
              bw: d.writeString,
            },
            agency_rating: { n: 14, br: e.readEnum, bw: d.writeEnum },
            image_url: { n: 20, br: e.readString, bw: d.writeString },
            image_target: { n: 21, br: e.readString, bw: d.writeString },
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
      return l(i.M(), e);
    }
    static deserializeBinary(e) {
      let t = new w.BinaryReader(e),
        n = new i();
      return i.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return c(i.MBF(), e, t);
    }
    serializeBinary() {
      var e = new w.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      v(i.M(), e, t);
    }
    serializeBase64String() {
      var e = new w.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `StoreGameRating`;
    }
  },
  P = class i extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        i.prototype.item_type || t(i.M()),
        w.Message.initialize(
          this,
          e,
          0,
          -1,
          [11, 12, 20, 21, 25, 41, 52, 71, 74, 77, 78],
          null,
        );
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (i.sm_m ||= {
          proto: i,
          fields: {
            item_type: { n: 1, br: e.readEnum, bw: d.writeEnum },
            id: { n: 2, br: e.readUint32, bw: d.writeUint32 },
            gid: { n: 76, br: e.readFixed64String, bw: d.writeFixed64String },
            success: { n: 3, br: e.readUint32, bw: d.writeUint32 },
            visible: { n: 4, br: e.readBool, bw: d.writeBool },
            unvailable_for_country_restriction: {
              n: 5,
              br: e.readBool,
              bw: d.writeBool,
            },
            name: { n: 6, br: e.readString, bw: d.writeString },
            store_url_path: { n: 7, br: e.readString, bw: d.writeString },
            store_url_slug: { n: 8, br: e.readString, bw: d.writeString },
            appid: { n: 9, br: e.readUint32, bw: d.writeUint32 },
            type: { n: 10, br: e.readEnum, bw: d.writeEnum },
            included_types: {
              n: 11,
              r: !0,
              q: !0,
              br: e.readEnum,
              pbr: e.readPackedEnum,
              bw: d.writeRepeatedEnum,
            },
            included_appids: {
              n: 12,
              r: !0,
              q: !0,
              br: e.readUint32,
              pbr: e.readPackedUint32,
              bw: d.writeRepeatedUint32,
            },
            is_free: { n: 13, br: e.readBool, bw: d.writeBool },
            is_early_access: { n: 14, br: e.readBool, bw: d.writeBool },
            related_items: { n: 15, c: oe },
            included_items: { n: 16, c: se },
            content_descriptorids: {
              n: 20,
              r: !0,
              q: !0,
              br: e.readEnum,
              pbr: e.readPackedEnum,
              bw: d.writeRepeatedEnum,
            },
            tagids: {
              n: 21,
              r: !0,
              q: !0,
              br: e.readUint32,
              pbr: e.readPackedUint32,
              bw: d.writeRepeatedUint32,
            },
            categories: { n: 22, c: ce },
            reviews: { n: 23, c: le },
            basic_info: { n: 24, c: de },
            tags: { n: 25, c: pe, r: !0, q: !0 },
            assets: { n: 30, c: me },
            release: { n: 31, c: he },
            platforms: { n: 32, c: ge },
            game_rating: { n: 33, c: ne },
            is_coming_soon: { n: 34, br: e.readBool, bw: d.writeBool },
            best_purchase_option: { n: 40, c: ve },
            purchase_options: { n: 41, c: ve, r: !0, q: !0 },
            self_purchase_option: { n: 43, c: ve },
            screenshots: { n: 50, c: xe },
            trailers: { n: 51, c: Ce },
            supported_languages: { n: 52, c: De, r: !0, q: !0 },
            store_url_path_override: {
              n: 53,
              br: e.readString,
              bw: d.writeString,
            },
            free_weekend: { n: 54, c: Oe },
            unlisted: { n: 55, br: e.readBool, bw: d.writeBool },
            game_count: { n: 56, br: e.readUint32, bw: d.writeUint32 },
            internal_name: { n: 57, br: e.readString, bw: d.writeString },
            full_description_bbcode: {
              n: 58,
              br: e.readString,
              bw: d.writeString,
            },
            is_free_temporarily: { n: 59, br: e.readBool, bw: d.writeBool },
            assets_without_overrides: { n: 60, c: me },
            user_filter_failure: { n: 70, c: xt },
            links: { n: 71, c: ke, r: !0, q: !0 },
            purchase_description_bbcode: {
              n: 72,
              br: e.readString,
              bw: d.writeString,
            },
            package_groups: { n: 74, c: Ae, r: !0, q: !0 },
            extra_details: { n: 75, c: je },
            optin_registration_tags: { n: 77, c: Xe, r: !0, q: !0 },
            purchase_notes: { n: 78, c: Ze, r: !0, q: !0 },
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
      return l(i.M(), e);
    }
    static deserializeBinary(e) {
      let t = new w.BinaryReader(e),
        n = new i();
      return i.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return c(i.MBF(), e, t);
    }
    serializeBinary() {
      var e = new w.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      v(i.M(), e, t);
    }
    serializeBase64String() {
      var e = new w.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `StoreItem`;
    }
  },
  re = class i extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        i.prototype.appid || t(i.M()),
        w.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (i.sm_m ||= {
          proto: i,
          fields: {
            appid: { n: 1, br: e.readUint32, bw: d.writeUint32 },
            label: { n: 2, br: e.readString, bw: d.writeString },
            show_above_purchase: { n: 3, br: e.readBool, bw: d.writeBool },
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
      return l(i.M(), e);
    }
    static deserializeBinary(e) {
      let t = new w.BinaryReader(e),
        n = new i();
      return i.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return c(i.MBF(), e, t);
    }
    serializeBinary() {
      var e = new w.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      v(i.M(), e, t);
    }
    serializeBase64String() {
      var e = new w.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `StoreItem_Demo`;
    }
  },
  ie = class i extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        i.prototype.appid || t(i.M()),
        w.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (i.sm_m ||= {
          proto: i,
          fields: {
            appid: { n: 1, br: e.readUint32, bw: d.writeUint32 },
            is_open: { n: 2, br: e.readBool, bw: d.writeBool },
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
      return l(i.M(), e);
    }
    static deserializeBinary(e) {
      let t = new w.BinaryReader(e),
        n = new i();
      return i.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return c(i.MBF(), e, t);
    }
    serializeBinary() {
      var e = new w.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      v(i.M(), e, t);
    }
    serializeBase64String() {
      var e = new w.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `StoreItem_Playtest`;
    }
  },
  ae = class i extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        i.prototype.appid || t(i.M()),
        w.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (i.sm_m ||= {
          proto: i,
          fields: {
            appid: { n: 1, br: e.readUint32, bw: d.writeUint32 },
            header_text: { n: 2, br: e.readString, bw: d.writeString },
            description_text: { n: 3, br: e.readString, bw: d.writeString },
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
      return l(i.M(), e);
    }
    static deserializeBinary(e) {
      let t = new w.BinaryReader(e),
        n = new i();
      return i.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return c(i.MBF(), e, t);
    }
    serializeBinary() {
      var e = new w.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      v(i.M(), e, t);
    }
    serializeBase64String() {
      var e = new w.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `StoreItem_RelatedF2P`;
    }
  },
  oe = class i extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        i.prototype.parent_appid || t(i.M()),
        w.Message.initialize(this, e, 0, -1, [2, 3, 4, 5, 6, 9], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (i.sm_m ||= {
          proto: i,
          fields: {
            parent_appid: { n: 1, br: e.readUint32, bw: d.writeUint32 },
            demo_appid: {
              n: 2,
              r: !0,
              q: !0,
              br: e.readUint32,
              pbr: e.readPackedUint32,
              bw: d.writeRepeatedUint32,
            },
            standalone_demo_appid: {
              n: 3,
              r: !0,
              q: !0,
              br: e.readUint32,
              pbr: e.readPackedUint32,
              bw: d.writeRepeatedUint32,
            },
            demos: { n: 4, c: re, r: !0, q: !0 },
            standalone_demos: { n: 5, c: re, r: !0, q: !0 },
            playtests: { n: 6, c: ie, r: !0, q: !0 },
            related_f2p: { n: 7, c: ae },
            dlc_parent_appids: {
              n: 9,
              r: !0,
              q: !0,
              br: e.readUint32,
              pbr: e.readPackedUint32,
              bw: d.writeRepeatedUint32,
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
      return l(i.M(), e);
    }
    static deserializeBinary(e) {
      let t = new w.BinaryReader(e),
        n = new i();
      return i.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return c(i.MBF(), e, t);
    }
    serializeBinary() {
      var e = new w.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      v(i.M(), e, t);
    }
    serializeBase64String() {
      var e = new w.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `StoreItem_RelatedItems`;
    }
  },
  se = class e extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      super(),
        e.prototype.included_apps || t(e.M()),
        w.Message.initialize(this, n, 0, -1, [1, 2, 3, 4], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            included_apps: { n: 1, c: P, r: !0, q: !0 },
            included_packages: { n: 2, c: P, r: !0, q: !0 },
            included_bundles: { n: 3, c: P, r: !0, q: !0 },
            included_creators: { n: 4, c: P, r: !0, q: !0 },
          },
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
      return l(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new w.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return c(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new w.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      v(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new w.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `StoreItem_IncludedItems`;
    }
  },
  ce = class i extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        i.prototype.supported_player_categoryids || t(i.M()),
        w.Message.initialize(this, e, 0, -1, [2, 3, 4], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (i.sm_m ||= {
          proto: i,
          fields: {
            supported_player_categoryids: {
              n: 2,
              r: !0,
              q: !0,
              br: e.readUint32,
              pbr: e.readPackedUint32,
              bw: d.writeRepeatedUint32,
            },
            feature_categoryids: {
              n: 3,
              r: !0,
              q: !0,
              br: e.readUint32,
              pbr: e.readPackedUint32,
              bw: d.writeRepeatedUint32,
            },
            controller_categoryids: {
              n: 4,
              r: !0,
              q: !0,
              br: e.readUint32,
              pbr: e.readPackedUint32,
              bw: d.writeRepeatedUint32,
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
      return l(i.M(), e);
    }
    static deserializeBinary(e) {
      let t = new w.BinaryReader(e),
        n = new i();
      return i.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return c(i.MBF(), e, t);
    }
    serializeBinary() {
      var e = new w.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      v(i.M(), e, t);
    }
    serializeBase64String() {
      var e = new w.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `StoreItem_Categories`;
    }
  },
  le = class e extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      super(),
        e.prototype.summary_filtered || t(e.M()),
        w.Message.initialize(this, n, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            summary_filtered: { n: 1, c: ue },
            summary_unfiltered: { n: 2, c: ue },
            summary_language_specific: { n: 3, c: ue },
          },
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
      return l(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new w.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return c(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new w.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      v(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new w.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `StoreItem_Reviews`;
    }
  },
  ue = class i extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        i.prototype.review_count || t(i.M()),
        w.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (i.sm_m ||= {
          proto: i,
          fields: {
            review_count: { n: 1, br: e.readUint32, bw: d.writeUint32 },
            percent_positive: { n: 2, br: e.readInt32, bw: d.writeInt32 },
            review_score: { n: 3, br: e.readEnum, bw: d.writeEnum },
            review_score_label: { n: 4, br: e.readString, bw: d.writeString },
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
      return l(i.M(), e);
    }
    static deserializeBinary(e) {
      let t = new w.BinaryReader(e),
        n = new i();
      return i.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return c(i.MBF(), e, t);
    }
    serializeBinary() {
      var e = new w.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      v(i.M(), e, t);
    }
    serializeBase64String() {
      var e = new w.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `StoreItem_Reviews_StoreReviewSummary`;
    }
  },
  de = class i extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        i.prototype.short_description || t(i.M()),
        w.Message.initialize(this, e, 0, -1, [2, 3, 4], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (i.sm_m ||= {
          proto: i,
          fields: {
            short_description: { n: 1, br: e.readString, bw: d.writeString },
            publishers: { n: 2, c: fe, r: !0, q: !0 },
            developers: { n: 3, c: fe, r: !0, q: !0 },
            franchises: { n: 4, c: fe, r: !0, q: !0 },
            capsule_headline: { n: 5, br: e.readString, bw: d.writeString },
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
      return l(i.M(), e);
    }
    static deserializeBinary(e) {
      let t = new w.BinaryReader(e),
        n = new i();
      return i.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return c(i.MBF(), e, t);
    }
    serializeBinary() {
      var e = new w.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      v(i.M(), e, t);
    }
    serializeBase64String() {
      var e = new w.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `StoreItem_BasicInfo`;
    }
  },
  fe = class i extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        i.prototype.name || t(i.M()),
        w.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (i.sm_m ||= {
          proto: i,
          fields: {
            name: { n: 1, br: e.readString, bw: d.writeString },
            creator_clan_account_id: {
              n: 2,
              br: e.readUint32,
              bw: d.writeUint32,
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
      return l(i.M(), e);
    }
    static deserializeBinary(e) {
      let t = new w.BinaryReader(e),
        n = new i();
      return i.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return c(i.MBF(), e, t);
    }
    serializeBinary() {
      var e = new w.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      v(i.M(), e, t);
    }
    serializeBase64String() {
      var e = new w.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `StoreItem_BasicInfo_CreatorHomeLink`;
    }
  },
  pe = class i extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        i.prototype.tagid || t(i.M()),
        w.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (i.sm_m ||= {
          proto: i,
          fields: {
            tagid: { n: 1, br: e.readUint32, bw: d.writeUint32 },
            weight: { n: 2, br: e.readUint32, bw: d.writeUint32 },
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
      return l(i.M(), e);
    }
    static deserializeBinary(e) {
      let t = new w.BinaryReader(e),
        n = new i();
      return i.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return c(i.MBF(), e, t);
    }
    serializeBinary() {
      var e = new w.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      v(i.M(), e, t);
    }
    serializeBase64String() {
      var e = new w.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `StoreItem_Tag`;
    }
  },
  me = class i extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        i.prototype.asset_url_format || t(i.M()),
        w.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (i.sm_m ||= {
          proto: i,
          fields: {
            asset_url_format: { n: 1, br: e.readString, bw: d.writeString },
            main_capsule: { n: 2, br: e.readString, bw: d.writeString },
            main_capsule_2x: { n: 18, br: e.readString, bw: d.writeString },
            small_capsule: { n: 3, br: e.readString, bw: d.writeString },
            small_capsule_2x: { n: 19, br: e.readString, bw: d.writeString },
            header: { n: 4, br: e.readString, bw: d.writeString },
            header_2x: { n: 20, br: e.readString, bw: d.writeString },
            package_header: { n: 5, br: e.readString, bw: d.writeString },
            page_background: { n: 6, br: e.readString, bw: d.writeString },
            hero_capsule: { n: 7, br: e.readString, bw: d.writeString },
            hero_capsule_2x: { n: 8, br: e.readString, bw: d.writeString },
            library_capsule: { n: 9, br: e.readString, bw: d.writeString },
            library_capsule_2x: { n: 10, br: e.readString, bw: d.writeString },
            library_hero: { n: 11, br: e.readString, bw: d.writeString },
            library_hero_2x: { n: 12, br: e.readString, bw: d.writeString },
            community_icon: { n: 13, br: e.readString, bw: d.writeString },
            clan_avatar: { n: 14, br: e.readString, bw: d.writeString },
            page_background_path: {
              n: 15,
              br: e.readString,
              bw: d.writeString,
            },
            raw_page_background: { n: 16, br: e.readString, bw: d.writeString },
            edition_comparison: { n: 17, br: e.readString, bw: d.writeString },
            last_modified: { n: 21, br: e.readUint32, bw: d.writeUint32 },
            creator_home_background: {
              n: 22,
              br: e.readString,
              bw: d.writeString,
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
      return l(i.M(), e);
    }
    static deserializeBinary(e) {
      let t = new w.BinaryReader(e),
        n = new i();
      return i.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return c(i.MBF(), e, t);
    }
    serializeBinary() {
      var e = new w.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      v(i.M(), e, t);
    }
    serializeBase64String() {
      var e = new w.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `StoreItem_Assets`;
    }
  },
  he = class i extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        i.prototype.steam_release_date || t(i.M()),
        w.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (i.sm_m ||= {
          proto: i,
          fields: {
            steam_release_date: { n: 1, br: e.readUint32, bw: d.writeUint32 },
            original_release_date: {
              n: 2,
              br: e.readUint32,
              bw: d.writeUint32,
            },
            original_steam_release_date: {
              n: 3,
              br: e.readUint32,
              bw: d.writeUint32,
            },
            release_from_early_access_date: {
              n: 11,
              br: e.readUint32,
              bw: d.writeUint32,
            },
            release_from_early_access_style: {
              n: 12,
              br: e.readUint32,
              bw: d.writeUint32,
            },
            is_coming_soon: { n: 4, br: e.readBool, bw: d.writeBool },
            is_preload: { n: 5, br: e.readBool, bw: d.writeBool },
            custom_release_date_message: {
              n: 6,
              br: e.readString,
              bw: d.writeString,
            },
            is_abridged_release_date: { n: 7, br: e.readBool, bw: d.writeBool },
            coming_soon_display: { n: 8, br: e.readString, bw: d.writeString },
            is_early_access: { n: 10, br: e.readBool, bw: d.writeBool },
            mac_release_date: { n: 20, br: e.readUint32, bw: d.writeUint32 },
            linux_release_date: { n: 21, br: e.readUint32, bw: d.writeUint32 },
            limited_launch_active: { n: 22, br: e.readBool, bw: d.writeBool },
            advance_access_date: { n: 23, br: e.readUint32, bw: d.writeUint32 },
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
      return l(i.M(), e);
    }
    static deserializeBinary(e) {
      let t = new w.BinaryReader(e),
        n = new i();
      return i.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return c(i.MBF(), e, t);
    }
    serializeBinary() {
      var e = new w.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      v(i.M(), e, t);
    }
    serializeBase64String() {
      var e = new w.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `StoreItem_ReleaseInfo`;
    }
  },
  ge = class i extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        i.prototype.windows || t(i.M()),
        w.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (i.sm_m ||= {
          proto: i,
          fields: {
            windows: { n: 1, br: e.readBool, bw: d.writeBool },
            mac: { n: 2, br: e.readBool, bw: d.writeBool },
            steamos_linux: { n: 3, br: e.readBool, bw: d.writeBool },
            vr_support: { n: 10, c: _e },
            steam_deck_compat_category: {
              n: 11,
              br: e.readEnum,
              bw: d.writeEnum,
            },
            steam_os_compat_category: {
              n: 12,
              br: e.readEnum,
              bw: d.writeEnum,
            },
            steam_frame_compat_category: {
              n: 13,
              br: e.readEnum,
              bw: d.writeEnum,
            },
            steam_machine_compat_category: {
              n: 14,
              br: e.readEnum,
              bw: d.writeEnum,
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
      return l(i.M(), e);
    }
    static deserializeBinary(e) {
      let t = new w.BinaryReader(e),
        n = new i();
      return i.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return c(i.MBF(), e, t);
    }
    serializeBinary() {
      var e = new w.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      v(i.M(), e, t);
    }
    serializeBase64String() {
      var e = new w.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `StoreItem_Platforms`;
    }
  },
  _e = class i extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        i.prototype.vrhmd || t(i.M()),
        w.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (i.sm_m ||= {
          proto: i,
          fields: {
            vrhmd: { n: 1, br: e.readBool, bw: d.writeBool },
            vrhmd_only: { n: 2, br: e.readBool, bw: d.writeBool },
            show_optional_vr_mode_notice: {
              n: 3,
              br: e.readBool,
              bw: d.writeBool,
            },
            htc_vive: { n: 40, br: e.readBool, bw: d.writeBool },
            oculus_rift: { n: 41, br: e.readBool, bw: d.writeBool },
            windows_mr: { n: 42, br: e.readBool, bw: d.writeBool },
            valve_index: { n: 43, br: e.readBool, bw: d.writeBool },
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
      return l(i.M(), e);
    }
    static deserializeBinary(e) {
      let t = new w.BinaryReader(e),
        n = new i();
      return i.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return c(i.MBF(), e, t);
    }
    serializeBinary() {
      var e = new w.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      v(i.M(), e, t);
    }
    serializeBase64String() {
      var e = new w.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `StoreItem_Platforms_VRSupport`;
    }
  },
  ve = class i extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        i.prototype.packageid || t(i.M()),
        w.Message.initialize(this, e, 0, -1, [20], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (i.sm_m ||= {
          proto: i,
          fields: {
            packageid: { n: 1, br: e.readInt32, bw: d.writeInt32 },
            bundleid: { n: 2, br: e.readInt32, bw: d.writeInt32 },
            purchase_option_name: { n: 3, br: e.readString, bw: d.writeString },
            final_price_in_cents: {
              n: 5,
              br: e.readInt64String,
              bw: d.writeInt64String,
            },
            original_price_in_cents: {
              n: 6,
              br: e.readInt64String,
              bw: d.writeInt64String,
            },
            formatted_final_price: {
              n: 8,
              br: e.readString,
              bw: d.writeString,
            },
            formatted_original_price: {
              n: 9,
              br: e.readString,
              bw: d.writeString,
            },
            discount_pct: { n: 10, br: e.readInt32, bw: d.writeInt32 },
            bundle_discount_pct: { n: 12, br: e.readInt32, bw: d.writeInt32 },
            is_free_to_keep: { n: 13, br: e.readBool, bw: d.writeBool },
            price_before_bundle_discount: {
              n: 14,
              br: e.readInt64String,
              bw: d.writeInt64String,
            },
            formatted_price_before_bundle_discount: {
              n: 15,
              br: e.readString,
              bw: d.writeString,
            },
            active_discounts: { n: 20, c: ye, r: !0, q: !0 },
            user_can_purchase_as_gift: {
              n: 31,
              br: e.readBool,
              bw: d.writeBool,
            },
            is_commercial_license: { n: 40, br: e.readBool, bw: d.writeBool },
            should_suppress_discount_pct: {
              n: 41,
              br: e.readBool,
              bw: d.writeBool,
            },
            hide_discount_pct_for_compliance: {
              n: 42,
              d: !1,
              br: e.readBool,
              bw: d.writeBool,
            },
            included_game_count: {
              n: 43,
              d: 1,
              br: e.readInt32,
              bw: d.writeInt32,
            },
            lowest_recent_price_in_cents: {
              n: 44,
              br: e.readInt64String,
              bw: d.writeInt64String,
            },
            requires_shipping: { n: 45, br: e.readBool, bw: d.writeBool },
            recurrence_info: { n: 46, c: be },
            free_to_keep_ends: { n: 47, br: e.readUint32, bw: d.writeUint32 },
            must_purchase_as_set: {
              n: 48,
              d: !1,
              br: e.readBool,
              bw: d.writeBool,
            },
            package_group: {
              n: 49,
              d: `default`,
              br: e.readString,
              bw: d.writeString,
            },
            is_edition: { n: 50, br: e.readBool, bw: d.writeBool },
            free_to_keep_base_package: {
              n: 51,
              br: e.readUint32,
              bw: d.writeUint32,
            },
            price_cannot_be_displayed_as_discount: {
              n: 52,
              d: !1,
              br: e.readBool,
              bw: d.writeBool,
            },
            price_to_base_discount_on: {
              n: 53,
              br: e.readInt64String,
              bw: d.writeInt64String,
            },
            free_with_master_sub_appid: {
              n: 54,
              br: e.readUint32,
              bw: d.writeUint32,
            },
            formatted_lowest_recent_price: {
              n: 55,
              br: e.readString,
              bw: d.writeString,
            },
            is_free_license: { n: 56, br: e.readBool, bw: d.writeBool },
            combined_discount_pct: { n: 57, br: e.readInt32, bw: d.writeInt32 },
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
      return l(i.M(), e);
    }
    static deserializeBinary(e) {
      let t = new w.BinaryReader(e),
        n = new i();
      return i.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return c(i.MBF(), e, t);
    }
    serializeBinary() {
      var e = new w.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      v(i.M(), e, t);
    }
    serializeBase64String() {
      var e = new w.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `StoreItem_PurchaseOption`;
    }
  },
  ye = class i extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        i.prototype.discount_amount || t(i.M()),
        w.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (i.sm_m ||= {
          proto: i,
          fields: {
            discount_amount: {
              n: 1,
              br: e.readInt64String,
              bw: d.writeInt64String,
            },
            discount_description: { n: 2, br: e.readString, bw: d.writeString },
            discount_end_date: { n: 3, br: e.readUint32, bw: d.writeUint32 },
            master_sub_appid: { n: 4, br: e.readUint32, bw: d.writeUint32 },
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
      return l(i.M(), e);
    }
    static deserializeBinary(e) {
      let t = new w.BinaryReader(e),
        n = new i();
      return i.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return c(i.MBF(), e, t);
    }
    serializeBinary() {
      var e = new w.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      v(i.M(), e, t);
    }
    serializeBase64String() {
      var e = new w.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `StoreItem_PurchaseOption_Discount`;
    }
  },
  be = class i extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        i.prototype.packageid || t(i.M()),
        w.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (i.sm_m ||= {
          proto: i,
          fields: {
            packageid: { n: 1, br: e.readInt32, bw: d.writeInt32 },
            billing_agreement_type: { n: 2, br: e.readInt32, bw: d.writeInt32 },
            renewal_time_unit: { n: 3, br: e.readInt32, bw: d.writeInt32 },
            renewal_time_period: { n: 4, br: e.readInt32, bw: d.writeInt32 },
            renewal_price_in_cents: {
              n: 5,
              br: e.readInt64String,
              bw: d.writeInt64String,
            },
            formatted_renewal_price: {
              n: 6,
              br: e.readString,
              bw: d.writeString,
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
      return l(i.M(), e);
    }
    static deserializeBinary(e) {
      let t = new w.BinaryReader(e),
        n = new i();
      return i.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return c(i.MBF(), e, t);
    }
    serializeBinary() {
      var e = new w.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      v(i.M(), e, t);
    }
    serializeBase64String() {
      var e = new w.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `StoreItem_PurchaseOption_RecurrenceInfo`;
    }
  },
  xe = class e extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      super(),
        e.prototype.all_ages_screenshots || t(e.M()),
        w.Message.initialize(this, n, 0, -1, [2, 3], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            all_ages_screenshots: { n: 2, c: Se, r: !0, q: !0 },
            mature_content_screenshots: { n: 3, c: Se, r: !0, q: !0 },
          },
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
      return l(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new w.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return c(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new w.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      v(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new w.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `StoreItem_Screenshots`;
    }
  },
  Se = class i extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        i.prototype.filename || t(i.M()),
        w.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (i.sm_m ||= {
          proto: i,
          fields: {
            filename: { n: 1, br: e.readString, bw: d.writeString },
            ordinal: { n: 2, br: e.readInt32, bw: d.writeInt32 },
            alt_text: { n: 3, br: e.readString, bw: d.writeString },
            category: { n: 4, br: e.readEnum, bw: d.writeEnum },
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
      return l(i.M(), e);
    }
    static deserializeBinary(e) {
      let t = new w.BinaryReader(e),
        n = new i();
      return i.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return c(i.MBF(), e, t);
    }
    serializeBinary() {
      var e = new w.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      v(i.M(), e, t);
    }
    serializeBase64String() {
      var e = new w.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `StoreItem_Screenshots_Screenshot`;
    }
  },
  Ce = class e extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      super(),
        e.prototype.highlights || t(e.M()),
        w.Message.initialize(this, n, 0, -1, [1, 2], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            highlights: { n: 1, c: Ee, r: !0, q: !0 },
            other_trailers: { n: 2, c: Ee, r: !0, q: !0 },
          },
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
      return l(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new w.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return c(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new w.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      v(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new w.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `StoreItem_Trailers`;
    }
  },
  we = class i extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        i.prototype.filename || t(i.M()),
        w.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (i.sm_m ||= {
          proto: i,
          fields: {
            filename: { n: 1, br: e.readString, bw: d.writeString },
            type: { n: 2, br: e.readString, bw: d.writeString },
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
      return l(i.M(), e);
    }
    static deserializeBinary(e) {
      let t = new w.BinaryReader(e),
        n = new i();
      return i.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return c(i.MBF(), e, t);
    }
    serializeBinary() {
      var e = new w.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      v(i.M(), e, t);
    }
    serializeBase64String() {
      var e = new w.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `StoreItem_Trailers_VideoSource`;
    }
  },
  Te = class i extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        i.prototype.cdn_path || t(i.M()),
        w.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (i.sm_m ||= {
          proto: i,
          fields: {
            cdn_path: { n: 1, br: e.readString, bw: d.writeString },
            encoding: { n: 2, br: e.readString, bw: d.writeString },
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
      return l(i.M(), e);
    }
    static deserializeBinary(e) {
      let t = new w.BinaryReader(e),
        n = new i();
      return i.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return c(i.MBF(), e, t);
    }
    serializeBinary() {
      var e = new w.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      v(i.M(), e, t);
    }
    serializeBase64String() {
      var e = new w.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `StoreItem_Trailers_AdaptiveTrailer`;
    }
  },
  Ee = class i extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        i.prototype.trailer_name || t(i.M()),
        w.Message.initialize(this, e, 0, -1, [5, 6], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (i.sm_m ||= {
          proto: i,
          fields: {
            trailer_name: { n: 1, br: e.readString, bw: d.writeString },
            trailer_url_format: { n: 2, br: e.readString, bw: d.writeString },
            trailer_category: { n: 13, br: e.readEnum, bw: d.writeEnum },
            microtrailer: { n: 5, c: we, r: !0, q: !0 },
            adaptive_trailers: { n: 6, c: Te, r: !0, q: !0 },
            captions_manifest: { n: 7, br: e.readString, bw: d.writeString },
            screenshot_medium: { n: 10, br: e.readString, bw: d.writeString },
            screenshot_full: { n: 11, br: e.readString, bw: d.writeString },
            trailer_base_id: { n: 12, br: e.readInt32, bw: d.writeInt32 },
            all_ages: { n: 14, br: e.readBool, bw: d.writeBool },
            screenshot_small: { n: 15, br: e.readString, bw: d.writeString },
            trailer_id: { n: 16, br: e.readUint32, bw: d.writeUint32 },
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
      return l(i.M(), e);
    }
    static deserializeBinary(e) {
      let t = new w.BinaryReader(e),
        n = new i();
      return i.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return c(i.MBF(), e, t);
    }
    serializeBinary() {
      var e = new w.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      v(i.M(), e, t);
    }
    serializeBase64String() {
      var e = new w.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `StoreItem_Trailers_Trailer`;
    }
  },
  De = class i extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        i.prototype.elanguage || t(i.M()),
        w.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (i.sm_m ||= {
          proto: i,
          fields: {
            elanguage: { n: 1, d: -1, br: e.readInt32, bw: d.writeInt32 },
            eadditionallanguage: {
              n: 5,
              d: -1,
              br: e.readInt32,
              bw: d.writeInt32,
            },
            supported: { n: 2, br: e.readBool, bw: d.writeBool },
            full_audio: { n: 3, br: e.readBool, bw: d.writeBool },
            subtitles: { n: 4, br: e.readBool, bw: d.writeBool },
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
      return l(i.M(), e);
    }
    static deserializeBinary(e) {
      let t = new w.BinaryReader(e),
        n = new i();
      return i.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return c(i.MBF(), e, t);
    }
    serializeBinary() {
      var e = new w.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      v(i.M(), e, t);
    }
    serializeBase64String() {
      var e = new w.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `StoreItem_SupportedLanguage`;
    }
  },
  Oe = class i extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        i.prototype.start_time || t(i.M()),
        w.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (i.sm_m ||= {
          proto: i,
          fields: {
            start_time: { n: 1, br: e.readUint32, bw: d.writeUint32 },
            end_time: { n: 2, br: e.readUint32, bw: d.writeUint32 },
            text: { n: 3, br: e.readString, bw: d.writeString },
            appid: { n: 4, br: e.readUint32, bw: d.writeUint32 },
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
      return l(i.M(), e);
    }
    static deserializeBinary(e) {
      let t = new w.BinaryReader(e),
        n = new i();
      return i.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return c(i.MBF(), e, t);
    }
    serializeBinary() {
      var e = new w.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      v(i.M(), e, t);
    }
    serializeBase64String() {
      var e = new w.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `StoreItem_FreeWeekend`;
    }
  },
  ke = class i extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        i.prototype.link_type || t(i.M()),
        w.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (i.sm_m ||= {
          proto: i,
          fields: {
            link_type: { n: 1, br: e.readEnum, bw: d.writeEnum },
            url: { n: 2, br: e.readString, bw: d.writeString },
            text: { n: 3, br: e.readString, bw: d.writeString },
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
      return l(i.M(), e);
    }
    static deserializeBinary(e) {
      let t = new w.BinaryReader(e),
        n = new i();
      return i.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return c(i.MBF(), e, t);
    }
    serializeBinary() {
      var e = new w.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      v(i.M(), e, t);
    }
    serializeBase64String() {
      var e = new w.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `StoreItem_Link`;
    }
  },
  Ae = class i extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        i.prototype.name || t(i.M()),
        w.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (i.sm_m ||= {
          proto: i,
          fields: {
            name: { n: 1, br: e.readString, bw: d.writeString },
            heading: { n: 2, br: e.readString, bw: d.writeString },
            display_type: { n: 3, br: e.readEnum, bw: d.writeEnum },
            dropdown_title: { n: 4, br: e.readString, bw: d.writeString },
            dropdown_description_bbcode: {
              n: 5,
              br: e.readString,
              bw: d.writeString,
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
      return l(i.M(), e);
    }
    static deserializeBinary(e) {
      let t = new w.BinaryReader(e),
        n = new i();
      return i.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return c(i.MBF(), e, t);
    }
    serializeBinary() {
      var e = new w.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      v(i.M(), e, t);
    }
    serializeBase64String() {
      var e = new w.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `StoreItem_PackageGroup`;
    }
  },
  je = class i extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        i.prototype.steam_award || t(i.M()),
        w.Message.initialize(this, e, 0, -1, [1, 10, 13, 15, 18, 31, 36], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (i.sm_m ||= {
          proto: i,
          fields: {
            steam_award: { n: 1, c: E, r: !0, q: !0 },
            vetted: { n: 2, br: e.readBool, bw: d.writeBool },
            no_mouse_keyboard_support: {
              n: 3,
              br: e.readBool,
              bw: d.writeBool,
            },
            controller_wizard_complete: {
              n: 4,
              br: e.readBool,
              bw: d.writeBool,
            },
            drm_third_party_type: { n: 5, br: e.readString, bw: d.writeString },
            drm_activation_limit: { n: 6, br: e.readString, bw: d.writeString },
            user_account_third_party: {
              n: 7,
              br: e.readString,
              bw: d.writeString,
            },
            user_account_third_party_link_to_steam: {
              n: 8,
              br: e.readBool,
              bw: d.writeBool,
            },
            anticheat: { n: 9, c: Me },
            eula: { n: 10, c: Ne, r: !0, q: !0 },
            ai_generation_service: { n: 11, c: Pe },
            refund_checks_ea_playtime: {
              n: 12,
              br: e.readBool,
              bw: d.writeBool,
            },
            section: { n: 13, c: Fe, r: !0, q: !0 },
            legal_notice_bbcode: { n: 14, br: e.readString, bw: d.writeString },
            interactive_elements: {
              n: 15,
              r: !0,
              q: !0,
              br: e.readEnum,
              pbr: e.readPackedEnum,
              bw: d.writeRepeatedEnum,
            },
            content_survey_notes: {
              n: 16,
              br: e.readString,
              bw: d.writeString,
            },
            content_survey_ai_notes: {
              n: 17,
              br: e.readString,
              bw: d.writeString,
            },
            press_review: { n: 18, c: Ie, r: !0, q: !0 },
            partner_awards_bbcode: {
              n: 19,
              br: e.readString,
              bw: d.writeString,
            },
            early_access: { n: 20, c: Le },
            season_pass: { n: 21, c: O },
            links_and_info: { n: 22, c: Re },
            item_store_eligible: { n: 23, br: e.readBool, bw: d.writeBool },
            points_shop_eligible: { n: 24, br: e.readBool, bw: d.writeBool },
            metacritic: { n: 26, c: ze },
            cast_and_crew: { n: 27, c: Be },
            system_requirements: { n: 28, c: Ve },
            running_time_minutes: {
              n: 29,
              br: e.readUint32,
              bw: d.writeUint32,
            },
            episode: { n: 30, c: We },
            seasons: { n: 31, c: Ge, r: !0, q: !0 },
            video_extras_note: { n: 32, br: e.readEnum, bw: d.writeEnum },
            has_community_hub: { n: 33, br: e.readBool, bw: d.writeBool },
            event_spotlight: { n: 34, c: Ke },
            music_album: { n: 35, c: qe },
            sale_pages: { n: 36, c: Ye, r: !0, q: !0 },
            item_store_show_featured: {
              n: 37,
              br: e.readBool,
              bw: d.writeBool,
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
      return l(i.M(), e);
    }
    static deserializeBinary(e) {
      let t = new w.BinaryReader(e),
        n = new i();
      return i.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return c(i.MBF(), e, t);
    }
    serializeBinary() {
      var e = new w.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      v(i.M(), e, t);
    }
    serializeBase64String() {
      var e = new w.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `StoreItem_ExtraDetails`;
    }
  },
  Me = class i extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        i.prototype.kernel_mode || t(i.M()),
        w.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (i.sm_m ||= {
          proto: i,
          fields: {
            kernel_mode: { n: 1, br: e.readBool, bw: d.writeBool },
            uninstall_completely: { n: 2, br: e.readBool, bw: d.writeBool },
            boot_protection: { n: 3, br: e.readBool, bw: d.writeBool },
            boot_protection_name: { n: 4, br: e.readString, bw: d.writeString },
            name: { n: 5, br: e.readString, bw: d.writeString },
            name_loc: { n: 6, br: e.readString, bw: d.writeString },
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
      return l(i.M(), e);
    }
    static deserializeBinary(e) {
      let t = new w.BinaryReader(e),
        n = new i();
      return i.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return c(i.MBF(), e, t);
    }
    serializeBinary() {
      var e = new w.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      v(i.M(), e, t);
    }
    serializeBase64String() {
      var e = new w.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `StoreItem_ExtraDetails_Anticheat`;
    }
  },
  Ne = class i extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        i.prototype.name || t(i.M()),
        w.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (i.sm_m ||= {
          proto: i,
          fields: {
            name: { n: 1, br: e.readString, bw: d.writeString },
            url: { n: 2, br: e.readString, bw: d.writeString },
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
      return l(i.M(), e);
    }
    static deserializeBinary(e) {
      let t = new w.BinaryReader(e),
        n = new i();
      return i.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return c(i.MBF(), e, t);
    }
    serializeBinary() {
      var e = new w.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      v(i.M(), e, t);
    }
    serializeBase64String() {
      var e = new w.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `StoreItem_ExtraDetails_Eula`;
    }
  },
  Pe = class i extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        i.prototype.name || t(i.M()),
        w.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (i.sm_m ||= {
          proto: i,
          fields: {
            name: { n: 1, br: e.readString, bw: d.writeString },
            url: { n: 2, br: e.readString, bw: d.writeString },
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
      return l(i.M(), e);
    }
    static deserializeBinary(e) {
      let t = new w.BinaryReader(e),
        n = new i();
      return i.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return c(i.MBF(), e, t);
    }
    serializeBinary() {
      var e = new w.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      v(i.M(), e, t);
    }
    serializeBase64String() {
      var e = new w.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `StoreItem_ExtraDetails_AIGeneratedContentService`;
    }
  },
  Fe = class i extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        i.prototype.label || t(i.M()),
        w.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (i.sm_m ||= {
          proto: i,
          fields: {
            label: { n: 1, br: e.readString, bw: d.writeString },
            content_bbcode: { n: 2, br: e.readString, bw: d.writeString },
            banner: { n: 3, br: e.readEnum, bw: d.writeEnum },
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
      return l(i.M(), e);
    }
    static deserializeBinary(e) {
      let t = new w.BinaryReader(e),
        n = new i();
      return i.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return c(i.MBF(), e, t);
    }
    serializeBinary() {
      var e = new w.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      v(i.M(), e, t);
    }
    serializeBase64String() {
      var e = new w.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `StoreItem_ExtraDetails_PageSection`;
    }
  },
  Ie = class i extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        i.prototype.quote || t(i.M()),
        w.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (i.sm_m ||= {
          proto: i,
          fields: {
            quote: { n: 1, br: e.readString, bw: d.writeString },
            score: { n: 2, br: e.readString, bw: d.writeString },
            site: { n: 3, br: e.readString, bw: d.writeString },
            url: { n: 4, br: e.readString, bw: d.writeString },
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
      return l(i.M(), e);
    }
    static deserializeBinary(e) {
      let t = new w.BinaryReader(e),
        n = new i();
      return i.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return c(i.MBF(), e, t);
    }
    serializeBinary() {
      var e = new w.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      v(i.M(), e, t);
    }
    serializeBase64String() {
      var e = new w.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `StoreItem_ExtraDetails_PressReview`;
    }
  },
  Le = class i extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        i.prototype.why_bbcode || t(i.M()),
        w.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (i.sm_m ||= {
          proto: i,
          fields: {
            why_bbcode: { n: 1, br: e.readString, bw: d.writeString },
            how_long_bbcode: { n: 2, br: e.readString, bw: d.writeString },
            full_version_bbcode: { n: 3, br: e.readString, bw: d.writeString },
            current_state_bbcode: { n: 4, br: e.readString, bw: d.writeString },
            pricing_bbcode: { n: 5, br: e.readString, bw: d.writeString },
            community_bbcode: { n: 6, br: e.readString, bw: d.writeString },
            description_bbcode: { n: 7, br: e.readString, bw: d.writeString },
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
      return l(i.M(), e);
    }
    static deserializeBinary(e) {
      let t = new w.BinaryReader(e),
        n = new i();
      return i.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return c(i.MBF(), e, t);
    }
    serializeBinary() {
      var e = new w.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      v(i.M(), e, t);
    }
    serializeBase64String() {
      var e = new w.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `StoreItem_ExtraDetails_EarlyAccess`;
    }
  },
  Re = class i extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        i.prototype.website || t(i.M()),
        w.Message.initialize(this, e, 0, -1, [6, 7, 8], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (i.sm_m ||= {
          proto: i,
          fields: {
            website: { n: 1, br: e.readString, bw: d.writeString },
            stats_url: { n: 2, br: e.readString, bw: d.writeString },
            online_manual_url: { n: 3, br: e.readString, bw: d.writeString },
            health_warning_url: { n: 4, br: e.readString, bw: d.writeString },
            privacy_policy_url: { n: 5, br: e.readString, bw: d.writeString },
            available_documents: {
              n: 6,
              r: !0,
              q: !0,
              br: e.readEnum,
              pbr: e.readPackedEnum,
              bw: d.writeRepeatedEnum,
            },
            genreids: {
              n: 7,
              r: !0,
              q: !0,
              br: e.readUint32,
              pbr: e.readPackedUint32,
              bw: d.writeRepeatedUint32,
            },
            manufacturers: {
              n: 8,
              r: !0,
              q: !0,
              br: e.readString,
              bw: d.writeRepeatedString,
            },
            achievements_visible: { n: 9, br: e.readBool, bw: d.writeBool },
            achievement_count: { n: 10, br: e.readUint32, bw: d.writeUint32 },
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
      return l(i.M(), e);
    }
    static deserializeBinary(e) {
      let t = new w.BinaryReader(e),
        n = new i();
      return i.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return c(i.MBF(), e, t);
    }
    serializeBinary() {
      var e = new w.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      v(i.M(), e, t);
    }
    serializeBase64String() {
      var e = new w.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `StoreItem_ExtraDetails_LinksAndInfo`;
    }
  },
  ze = class i extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        i.prototype.score || t(i.M()),
        w.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (i.sm_m ||= {
          proto: i,
          fields: {
            score: { n: 1, br: e.readUint32, bw: d.writeUint32 },
            url: { n: 2, br: e.readString, bw: d.writeString },
            always_show: { n: 3, br: e.readBool, bw: d.writeBool },
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
      return l(i.M(), e);
    }
    static deserializeBinary(e) {
      let t = new w.BinaryReader(e),
        n = new i();
      return i.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return c(i.MBF(), e, t);
    }
    serializeBinary() {
      var e = new w.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      v(i.M(), e, t);
    }
    serializeBase64String() {
      var e = new w.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `StoreItem_ExtraDetails_Metacritic`;
    }
  },
  Be = class i extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        i.prototype.directors || t(i.M()),
        w.Message.initialize(this, e, 0, -1, [1, 2, 3, 4, 5], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (i.sm_m ||= {
          proto: i,
          fields: {
            directors: {
              n: 1,
              r: !0,
              q: !0,
              br: e.readString,
              bw: d.writeRepeatedString,
            },
            producers: {
              n: 2,
              r: !0,
              q: !0,
              br: e.readString,
              bw: d.writeRepeatedString,
            },
            writers: {
              n: 3,
              r: !0,
              q: !0,
              br: e.readString,
              bw: d.writeRepeatedString,
            },
            music: {
              n: 4,
              r: !0,
              q: !0,
              br: e.readString,
              bw: d.writeRepeatedString,
            },
            actors: {
              n: 5,
              r: !0,
              q: !0,
              br: e.readString,
              bw: d.writeRepeatedString,
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
      return l(i.M(), e);
    }
    static deserializeBinary(e) {
      let t = new w.BinaryReader(e),
        n = new i();
      return i.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return c(i.MBF(), e, t);
    }
    serializeBinary() {
      var e = new w.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      v(i.M(), e, t);
    }
    serializeBase64String() {
      var e = new w.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `StoreItem_ExtraDetails_CastAndCrew`;
    }
  },
  Ve = class e extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      super(),
        e.prototype.platforms || t(e.M()),
        w.Message.initialize(this, n, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { platforms: { n: 1, c: Ue, r: !0, q: !0 } },
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
      return l(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new w.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return c(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new w.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      v(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new w.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `StoreItem_ExtraDetails_SystemRequirements`;
    }
  },
  F = class i extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        i.prototype.amount || t(i.M()),
        w.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (i.sm_m ||= {
          proto: i,
          fields: {
            amount: { n: 1, br: e.readString, bw: d.writeString },
            units: { n: 2, br: e.readString, bw: d.writeString },
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
      return l(i.M(), e);
    }
    static deserializeBinary(e) {
      let t = new w.BinaryReader(e),
        n = new i();
      return i.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return c(i.MBF(), e, t);
    }
    serializeBinary() {
      var e = new w.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      v(i.M(), e, t);
    }
    serializeBase64String() {
      var e = new w.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `StoreItem_ExtraDetails_SystemRequirements_Size`;
    }
  },
  He = class i extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        i.prototype.os_version || t(i.M()),
        w.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (i.sm_m ||= {
          proto: i,
          fields: {
            os_version: { n: 1, br: e.readString, bw: d.writeString },
            os_version_unsupported: { n: 2, br: e.readBool, bw: d.writeBool },
            processor: { n: 3, br: e.readString, bw: d.writeString },
            memory: { n: 4, c: F },
            graphics: { n: 5, br: e.readString, bw: d.writeString },
            directx: { n: 6, br: e.readString, bw: d.writeString },
            broadband: { n: 7, br: e.readBool, bw: d.writeBool },
            storage: { n: 8, c: F },
            storage_hq: { n: 9, c: F },
            sound_card: { n: 10, br: e.readString, bw: d.writeString },
            vr_support: { n: 11, br: e.readString, bw: d.writeString },
            notes: { n: 12, br: e.readString, bw: d.writeString },
            legacy_bbcode: { n: 13, br: e.readString, bw: d.writeString },
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
      return l(i.M(), e);
    }
    static deserializeBinary(e) {
      let t = new w.BinaryReader(e),
        n = new i();
      return i.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return c(i.MBF(), e, t);
    }
    serializeBinary() {
      var e = new w.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      v(i.M(), e, t);
    }
    serializeBase64String() {
      var e = new w.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `StoreItem_ExtraDetails_SystemRequirements_Requirements`;
    }
  },
  Ue = class i extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        i.prototype.platform || t(i.M()),
        w.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (i.sm_m ||= {
          proto: i,
          fields: {
            platform: { n: 1, br: e.readEnum, bw: d.writeEnum },
            minimum: { n: 2, c: He },
            recommended: { n: 3, c: He },
            requires_64bit: { n: 4, br: e.readBool, bw: d.writeBool },
            requires_apple_silicon: { n: 5, br: e.readBool, bw: d.writeBool },
            unsupported_os_note: { n: 6, br: e.readEnum, bw: d.writeEnum },
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
      return l(i.M(), e);
    }
    static deserializeBinary(e) {
      let t = new w.BinaryReader(e),
        n = new i();
      return i.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return c(i.MBF(), e, t);
    }
    serializeBinary() {
      var e = new w.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      v(i.M(), e, t);
    }
    serializeBase64String() {
      var e = new w.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `StoreItem_ExtraDetails_SystemRequirements_PlatformRequirements`;
    }
  },
  We = class i extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        i.prototype.number || t(i.M()),
        w.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (i.sm_m ||= {
          proto: i,
          fields: {
            number: { n: 1, br: e.readString, bw: d.writeString },
            type: { n: 2, br: e.readEnum, bw: d.writeEnum },
            hide_details: { n: 3, br: e.readBool, bw: d.writeBool },
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
      return l(i.M(), e);
    }
    static deserializeBinary(e) {
      let t = new w.BinaryReader(e),
        n = new i();
      return i.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return c(i.MBF(), e, t);
    }
    serializeBinary() {
      var e = new w.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      v(i.M(), e, t);
    }
    serializeBase64String() {
      var e = new w.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `StoreItem_ExtraDetails_Episode`;
    }
  },
  Ge = class i extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        i.prototype.index || t(i.M()),
        w.Message.initialize(this, e, 0, -1, [3], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (i.sm_m ||= {
          proto: i,
          fields: {
            index: { n: 1, br: e.readInt32, bw: d.writeInt32 },
            name: { n: 2, br: e.readString, bw: d.writeString },
            episode_appids: {
              n: 3,
              r: !0,
              q: !0,
              br: e.readUint32,
              pbr: e.readPackedUint32,
              bw: d.writeRepeatedUint32,
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
      return l(i.M(), e);
    }
    static deserializeBinary(e) {
      let t = new w.BinaryReader(e),
        n = new i();
      return i.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return c(i.MBF(), e, t);
    }
    serializeBinary() {
      var e = new w.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      v(i.M(), e, t);
    }
    serializeBase64String() {
      var e = new w.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `StoreItem_ExtraDetails_Season`;
    }
  },
  Ke = class i extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        i.prototype.clan_account_id || t(i.M()),
        w.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (i.sm_m ||= {
          proto: i,
          fields: {
            clan_account_id: { n: 1, br: e.readUint32, bw: d.writeUint32 },
            event_gid: {
              n: 2,
              br: e.readFixed64String,
              bw: d.writeFixed64String,
            },
            announcement_gid: {
              n: 3,
              br: e.readFixed64String,
              bw: d.writeFixed64String,
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
      return l(i.M(), e);
    }
    static deserializeBinary(e) {
      let t = new w.BinaryReader(e),
        n = new i();
      return i.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return c(i.MBF(), e, t);
    }
    serializeBinary() {
      var e = new w.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      v(i.M(), e, t);
    }
    serializeBase64String() {
      var e = new w.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `StoreItem_ExtraDetails_EventSpotlight`;
    }
  },
  qe = class i extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        i.prototype.tracks || t(i.M()),
        w.Message.initialize(this, e, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (i.sm_m ||= {
          proto: i,
          fields: {
            tracks: { n: 1, c: Je, r: !0, q: !0 },
            artist: { n: 2, br: e.readString, bw: d.writeString },
            composer: { n: 3, br: e.readString, bw: d.writeString },
            label: { n: 4, br: e.readString, bw: d.writeString },
            other_credits: { n: 5, br: e.readString, bw: d.writeString },
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
      return l(i.M(), e);
    }
    static deserializeBinary(e) {
      let t = new w.BinaryReader(e),
        n = new i();
      return i.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return c(i.MBF(), e, t);
    }
    serializeBinary() {
      var e = new w.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      v(i.M(), e, t);
    }
    serializeBase64String() {
      var e = new w.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `StoreItem_ExtraDetails_MusicAlbum`;
    }
  },
  Je = class i extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        i.prototype.disc_number || t(i.M()),
        w.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (i.sm_m ||= {
          proto: i,
          fields: {
            disc_number: { n: 1, br: e.readUint32, bw: d.writeUint32 },
            track_number: { n: 2, br: e.readUint32, bw: d.writeUint32 },
            name: { n: 3, br: e.readString, bw: d.writeString },
            other_name: { n: 4, br: e.readString, bw: d.writeString },
            duration_seconds: { n: 5, br: e.readUint32, bw: d.writeUint32 },
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
      return l(i.M(), e);
    }
    static deserializeBinary(e) {
      let t = new w.BinaryReader(e),
        n = new i();
      return i.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return c(i.MBF(), e, t);
    }
    serializeBinary() {
      var e = new w.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      v(i.M(), e, t);
    }
    serializeBase64String() {
      var e = new w.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `StoreItem_ExtraDetails_MusicAlbum_Track`;
    }
  },
  Ye = class i extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        i.prototype.clan_account_id || t(i.M()),
        w.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (i.sm_m ||= {
          proto: i,
          fields: {
            clan_account_id: { n: 1, br: e.readUint32, bw: d.writeUint32 },
            event_gid: {
              n: 2,
              br: e.readFixed64String,
              bw: d.writeFixed64String,
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
      return l(i.M(), e);
    }
    static deserializeBinary(e) {
      let t = new w.BinaryReader(e),
        n = new i();
      return i.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return c(i.MBF(), e, t);
    }
    serializeBinary() {
      var e = new w.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      v(i.M(), e, t);
    }
    serializeBase64String() {
      var e = new w.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `StoreItem_ExtraDetails_SalePage`;
    }
  },
  Xe = class i extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        i.prototype.optin_name || t(i.M()),
        w.Message.initialize(this, e, 0, -1, [2], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (i.sm_m ||= {
          proto: i,
          fields: {
            optin_name: { n: 1, br: e.readString, bw: d.writeString },
            values: {
              n: 2,
              r: !0,
              q: !0,
              br: e.readString,
              bw: d.writeRepeatedString,
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
      return l(i.M(), e);
    }
    static deserializeBinary(e) {
      let t = new w.BinaryReader(e),
        n = new i();
      return i.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return c(i.MBF(), e, t);
    }
    serializeBinary() {
      var e = new w.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      v(i.M(), e, t);
    }
    serializeBase64String() {
      var e = new w.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `StoreItem_OptInRegistrationTags`;
    }
  },
  Ze = class i extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        i.prototype.type || t(i.M()),
        w.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (i.sm_m ||= {
          proto: i,
          fields: {
            type: { n: 1, br: e.readEnum, bw: d.writeEnum },
            highlighted: { n: 2, br: e.readBool, bw: d.writeBool },
            text_bbcode: { n: 3, br: e.readString, bw: d.writeString },
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
      return l(i.M(), e);
    }
    static deserializeBinary(e) {
      let t = new w.BinaryReader(e),
        n = new i();
      return i.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return c(i.MBF(), e, t);
    }
    serializeBinary() {
      var e = new w.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      v(i.M(), e, t);
    }
    serializeBase64String() {
      var e = new w.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `StoreItem_PurchaseNote`;
    }
  },
  Qe = class i extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        i.prototype.include_assets || t(i.M()),
        w.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (i.sm_m ||= {
          proto: i,
          fields: {
            include_assets: { n: 1, br: e.readBool, bw: d.writeBool },
            include_release: { n: 2, br: e.readBool, bw: d.writeBool },
            include_platforms: { n: 3, br: e.readBool, bw: d.writeBool },
            include_all_purchase_options: {
              n: 4,
              br: e.readBool,
              bw: d.writeBool,
            },
            include_screenshots: { n: 5, br: e.readBool, bw: d.writeBool },
            include_trailers: { n: 6, br: e.readBool, bw: d.writeBool },
            include_ratings: { n: 7, br: e.readBool, bw: d.writeBool },
            include_tag_count: { n: 8, br: e.readInt32, bw: d.writeInt32 },
            include_reviews: { n: 9, br: e.readBool, bw: d.writeBool },
            include_basic_info: { n: 10, br: e.readBool, bw: d.writeBool },
            include_supported_languages: {
              n: 11,
              br: e.readBool,
              bw: d.writeBool,
            },
            include_full_description: {
              n: 12,
              br: e.readBool,
              bw: d.writeBool,
            },
            include_included_items: { n: 13, br: e.readBool, bw: d.writeBool },
            included_item_data_request: { n: 14, c: i },
            include_assets_without_overrides: {
              n: 15,
              br: e.readBool,
              bw: d.writeBool,
            },
            apply_user_filters: { n: 16, br: e.readBool, bw: d.writeBool },
            include_links: { n: 17, br: e.readBool, bw: d.writeBool },
            include_extra_details: { n: 18, br: e.readBool, bw: d.writeBool },
            include_best_purchase_option: {
              n: 19,
              d: !0,
              br: e.readBool,
              bw: d.writeBool,
            },
            include_optin_registration_tags: {
              n: 20,
              br: e.readBool,
              bw: d.writeBool,
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
      return l(i.M(), e);
    }
    static deserializeBinary(e) {
      let t = new w.BinaryReader(e),
        n = new i();
      return i.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return c(i.MBF(), e, t);
    }
    serializeBinary() {
      var e = new w.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      v(i.M(), e, t);
    }
    serializeBase64String() {
      var e = new w.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `StoreBrowseItemDataRequest`;
    }
  },
  I = class i extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        i.prototype.language || t(i.M()),
        w.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (i.sm_m ||= {
          proto: i,
          fields: {
            language: { n: 1, br: e.readString, bw: d.writeString },
            elanguage: { n: 2, br: e.readInt32, bw: d.writeInt32 },
            country_code: { n: 3, br: e.readString, bw: d.writeString },
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
      return l(i.M(), e);
    }
    static deserializeBinary(e) {
      let t = new w.BinaryReader(e),
        n = new i();
      return i.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return c(i.MBF(), e, t);
    }
    serializeBinary() {
      var e = new w.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      v(i.M(), e, t);
    }
    serializeBase64String() {
      var e = new w.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `StoreBrowseContext`;
    }
  },
  $e = class i extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        i.prototype.appid || t(i.M()),
        w.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (i.sm_m ||= {
          proto: i,
          fields: {
            appid: { n: 1, br: e.readUint32, bw: d.writeUint32 },
            packageid: { n: 2, br: e.readUint32, bw: d.writeUint32 },
            bundleid: { n: 3, br: e.readUint32, bw: d.writeUint32 },
            tagid: { n: 4, br: e.readUint32, bw: d.writeUint32 },
            creatorid: { n: 5, br: e.readUint32, bw: d.writeUint32 },
            hubcategoryid: { n: 6, br: e.readUint32, bw: d.writeUint32 },
            salepagegid: {
              n: 7,
              br: e.readFixed64String,
              bw: d.writeFixed64String,
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
      return l(i.M(), e);
    }
    static deserializeBinary(e) {
      let t = new w.BinaryReader(e),
        n = new i();
      return i.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return c(i.MBF(), e, t);
    }
    serializeBinary() {
      var e = new w.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      v(i.M(), e, t);
    }
    serializeBase64String() {
      var e = new w.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `StoreItemID`;
    }
  },
  et = class e extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      super(),
        e.prototype.ids || t(e.M()),
        w.Message.initialize(this, n, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            ids: { n: 1, c: $e, r: !0, q: !0 },
            context: { n: 2, c: I },
            data_request: { n: 3, c: Qe },
          },
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
      return l(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new w.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return c(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new w.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      v(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new w.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CStoreBrowse_GetItems_Request`;
    }
  },
  tt = class e extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      super(),
        e.prototype.store_items || t(e.M()),
        w.Message.initialize(this, n, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { store_items: { n: 1, c: P, r: !0, q: !0 } },
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
      return l(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new w.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return c(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new w.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      v(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new w.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CStoreBrowse_GetItems_Response`;
    }
  },
  nt = class i extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        i.prototype.language || t(i.M()),
        w.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (i.sm_m ||= {
          proto: i,
          fields: {
            language: { n: 1, br: e.readString, bw: d.writeString },
            elanguage: { n: 2, d: -1, br: e.readInt32, bw: d.writeInt32 },
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
      return l(i.M(), e);
    }
    static deserializeBinary(e) {
      let t = new w.BinaryReader(e),
        n = new i();
      return i.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return c(i.MBF(), e, t);
    }
    serializeBinary() {
      var e = new w.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      v(i.M(), e, t);
    }
    serializeBase64String() {
      var e = new w.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CStoreBrowse_GetStoreCategories_Request`;
    }
  },
  rt = class e extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      super(),
        e.prototype.categories || t(e.M()),
        w.Message.initialize(this, n, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { categories: { n: 1, c: it, r: !0, q: !0 } },
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
      return l(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new w.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return c(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new w.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      v(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new w.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CStoreBrowse_GetStoreCategories_Response`;
    }
  },
  it = class i extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        i.prototype.categoryid || t(i.M()),
        w.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (i.sm_m ||= {
          proto: i,
          fields: {
            categoryid: { n: 1, br: e.readUint32, bw: d.writeUint32 },
            type: { n: 2, br: e.readEnum, bw: d.writeEnum },
            internal_name: { n: 3, br: e.readString, bw: d.writeString },
            display_name: { n: 4, br: e.readString, bw: d.writeString },
            image_url: { n: 5, br: e.readString, bw: d.writeString },
            show_in_search: { n: 6, br: e.readBool, bw: d.writeBool },
            computed: { n: 7, br: e.readBool, bw: d.writeBool },
            edit_url: { n: 8, br: e.readString, bw: d.writeString },
            edit_sort_order: { n: 9, br: e.readUint32, bw: d.writeUint32 },
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
      return l(i.M(), e);
    }
    static deserializeBinary(e) {
      let t = new w.BinaryReader(e),
        n = new i();
      return i.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return c(i.MBF(), e, t);
    }
    serializeBinary() {
      var e = new w.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      v(i.M(), e, t);
    }
    serializeBase64String() {
      var e = new w.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CStoreBrowse_GetStoreCategories_Response_Category`;
    }
  },
  at = class i extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        i.prototype.context || t(i.M()),
        w.Message.initialize(this, e, 0, -1, [2], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (i.sm_m ||= {
          proto: i,
          fields: {
            context: { n: 1, c: I },
            excluded_content_descriptorids: {
              n: 2,
              r: !0,
              q: !0,
              br: e.readEnum,
              pbr: e.readPackedEnum,
              bw: d.writeRepeatedEnum,
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
      return l(i.M(), e);
    }
    static deserializeBinary(e) {
      let t = new w.BinaryReader(e),
        n = new i();
      return i.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return c(i.MBF(), e, t);
    }
    serializeBinary() {
      var e = new w.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      v(i.M(), e, t);
    }
    serializeBase64String() {
      var e = new w.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CStoreBrowse_GetContentHubConfig_Request`;
    }
  },
  ot = class e extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      super(),
        e.prototype.hubconfigs || t(e.M()),
        w.Message.initialize(this, n, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { hubconfigs: { n: 1, c: st, r: !0, q: !0 } },
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
      return l(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new w.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return c(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new w.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      v(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new w.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CStoreBrowse_GetContentHubConfig_Response`;
    }
  },
  st = class i extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        i.prototype.hubcategoryid || t(i.M()),
        w.Message.initialize(this, e, 0, -1, [6, 7, 8, 9], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (i.sm_m ||= {
          proto: i,
          fields: {
            hubcategoryid: { n: 1, br: e.readUint32, bw: d.writeUint32 },
            type: { n: 2, br: e.readString, bw: d.writeString },
            handle: { n: 3, br: e.readString, bw: d.writeString },
            display_name: { n: 4, br: e.readString, bw: d.writeString },
            url_path: { n: 5, br: e.readString, bw: d.writeString },
            replaces_tags: {
              n: 6,
              r: !0,
              q: !0,
              br: e.readUint32,
              pbr: e.readPackedUint32,
              bw: d.writeRepeatedUint32,
            },
            must_have_tags: {
              n: 7,
              r: !0,
              q: !0,
              br: e.readUint32,
              pbr: e.readPackedUint32,
              bw: d.writeRepeatedUint32,
            },
            any_one_of_tags: {
              n: 8,
              r: !0,
              q: !0,
              br: e.readUint32,
              pbr: e.readPackedUint32,
              bw: d.writeRepeatedUint32,
            },
            must_not_have_tags: {
              n: 9,
              r: !0,
              q: !0,
              br: e.readUint32,
              pbr: e.readPackedUint32,
              bw: d.writeRepeatedUint32,
            },
            hub_description: { n: 10, br: e.readString, bw: d.writeString },
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
      return l(i.M(), e);
    }
    static deserializeBinary(e) {
      let t = new w.BinaryReader(e),
        n = new i();
      return i.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return c(i.MBF(), e, t);
    }
    serializeBinary() {
      var e = new w.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      v(i.M(), e, t);
    }
    serializeBase64String() {
      var e = new w.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CStoreBrowse_GetContentHubConfig_Response_ContentHubConfig`;
    }
  },
  ct = class i extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        i.prototype.country_code || t(i.M()),
        w.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (i.sm_m ||= {
          proto: i,
          fields: {
            country_code: { n: 1, br: e.readString, bw: d.writeString },
            currency_code: { n: 2, br: e.readString, bw: d.writeString },
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
      return l(i.M(), e);
    }
    static deserializeBinary(e) {
      let t = new w.BinaryReader(e),
        n = new i();
      return i.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return c(i.MBF(), e, t);
    }
    serializeBinary() {
      var e = new w.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      v(i.M(), e, t);
    }
    serializeBase64String() {
      var e = new w.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CStoreBrowse_GetPriceStops_Request`;
    }
  },
  lt = class i extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        i.prototype.price_stops || t(i.M()),
        w.Message.initialize(this, e, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (i.sm_m ||= {
          proto: i,
          fields: {
            price_stops: { n: 1, c: ut, r: !0, q: !0 },
            currency_code: { n: 2, br: e.readString, bw: d.writeString },
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
      return l(i.M(), e);
    }
    static deserializeBinary(e) {
      let t = new w.BinaryReader(e),
        n = new i();
      return i.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return c(i.MBF(), e, t);
    }
    serializeBinary() {
      var e = new w.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      v(i.M(), e, t);
    }
    serializeBase64String() {
      var e = new w.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CStoreBrowse_GetPriceStops_Response`;
    }
  },
  ut = class i extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        i.prototype.formatted_amount || t(i.M()),
        w.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (i.sm_m ||= {
          proto: i,
          fields: {
            formatted_amount: { n: 1, br: e.readString, bw: d.writeString },
            amount_in_cents: {
              n: 2,
              br: e.readInt64String,
              bw: d.writeInt64String,
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
      return l(i.M(), e);
    }
    static deserializeBinary(e) {
      let t = new w.BinaryReader(e),
        n = new i();
      return i.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return c(i.MBF(), e, t);
    }
    serializeBinary() {
      var e = new w.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      v(i.M(), e, t);
    }
    serializeBase64String() {
      var e = new w.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CStoreBrowse_GetPriceStops_Response_PriceStop`;
    }
  },
  dt = class i extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        i.prototype.context || t(i.M()),
        w.Message.initialize(this, e, 0, -1, [3], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (i.sm_m ||= {
          proto: i,
          fields: {
            context: { n: 1, c: I },
            store_page_filter: { n: 2, c: k },
            appids: { n: 3, c: $e, r: !0, q: !0 },
            steamid: { n: 4, br: e.readUint64String, bw: d.writeUint64String },
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
      return l(i.M(), e);
    }
    static deserializeBinary(e) {
      let t = new w.BinaryReader(e),
        n = new i();
      return i.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return c(i.MBF(), e, t);
    }
    serializeBinary() {
      var e = new w.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      v(i.M(), e, t);
    }
    serializeBase64String() {
      var e = new w.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CStoreBrowse_GetDLCForApps_Request`;
    }
  },
  ft = class e extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      super(),
        e.prototype.dlc_data || t(e.M()),
        w.Message.initialize(this, n, 0, -1, [1, 2], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            dlc_data: { n: 1, c: pt, r: !0, q: !0 },
            playtime: { n: 2, c: mt, r: !0, q: !0 },
          },
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
      return l(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new w.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return c(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new w.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      v(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new w.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CStoreBrowse_GetDLCForApps_Response`;
    }
  },
  pt = class i extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        i.prototype.appid || t(i.M()),
        w.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (i.sm_m ||= {
          proto: i,
          fields: {
            appid: { n: 1, br: e.readUint32, bw: d.writeUint32 },
            parentappid: { n: 2, br: e.readUint32, bw: d.writeUint32 },
            release_date: { n: 3, br: e.readUint32, bw: d.writeUint32 },
            coming_soon: { n: 4, br: e.readBool, bw: d.writeBool },
            price: { n: 5, br: e.readInt64String, bw: d.writeInt64String },
            discount: { n: 6, br: e.readUint32, bw: d.writeUint32 },
            free: { n: 7, br: e.readBool, bw: d.writeBool },
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
      return l(i.M(), e);
    }
    static deserializeBinary(e) {
      let t = new w.BinaryReader(e),
        n = new i();
      return i.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return c(i.MBF(), e, t);
    }
    serializeBinary() {
      var e = new w.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      v(i.M(), e, t);
    }
    serializeBase64String() {
      var e = new w.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CStoreBrowse_GetDLCForApps_Response_DLCData`;
    }
  },
  mt = class i extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        i.prototype.appid || t(i.M()),
        w.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (i.sm_m ||= {
          proto: i,
          fields: {
            appid: { n: 1, br: e.readUint32, bw: d.writeUint32 },
            playtime: { n: 2, br: e.readUint32, bw: d.writeUint32 },
            last_played: { n: 3, br: e.readUint32, bw: d.writeUint32 },
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
      return l(i.M(), e);
    }
    static deserializeBinary(e) {
      let t = new w.BinaryReader(e),
        n = new i();
      return i.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return c(i.MBF(), e, t);
    }
    serializeBinary() {
      var e = new w.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      v(i.M(), e, t);
    }
    serializeBase64String() {
      var e = new w.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CStoreBrowse_GetDLCForApps_Response_PlaytimeForApp`;
    }
  },
  ht = class i extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        i.prototype.context || t(i.M()),
        w.Message.initialize(this, e, 0, -1, [2], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (i.sm_m ||= {
          proto: i,
          fields: {
            context: { n: 1, c: I },
            appids: {
              n: 2,
              r: !0,
              q: !0,
              br: e.readUint32,
              pbr: e.readPackedUint32,
              bw: d.writeRepeatedUint32,
            },
            flavor: { n: 3, br: e.readString, bw: d.writeString },
            count: { n: 4, br: e.readUint32, bw: d.writeUint32 },
            store_page_filter: { n: 5, c: k },
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
      return l(i.M(), e);
    }
    static deserializeBinary(e) {
      let t = new w.BinaryReader(e),
        n = new i();
      return i.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return c(i.MBF(), e, t);
    }
    serializeBinary() {
      var e = new w.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      v(i.M(), e, t);
    }
    serializeBase64String() {
      var e = new w.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CStoreBrowse_GetDLCForAppsSolr_Request`;
    }
  },
  gt = class e extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      super(),
        e.prototype.dlc_lists || t(e.M()),
        w.Message.initialize(this, n, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { dlc_lists: { n: 1, c: _t, r: !0, q: !0 } },
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
      return l(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new w.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return c(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new w.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      v(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new w.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CStoreBrowse_GetDLCForAppsSolr_Response`;
    }
  },
  _t = class i extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        i.prototype.parent_appid || t(i.M()),
        w.Message.initialize(this, e, 0, -1, [2], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (i.sm_m ||= {
          proto: i,
          fields: {
            parent_appid: { n: 1, br: e.readUint32, bw: d.writeUint32 },
            dlc_appids: {
              n: 2,
              r: !0,
              q: !0,
              br: e.readUint32,
              pbr: e.readPackedUint32,
              bw: d.writeRepeatedUint32,
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
      return l(i.M(), e);
    }
    static deserializeBinary(e) {
      let t = new w.BinaryReader(e),
        n = new i();
      return i.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return c(i.MBF(), e, t);
    }
    serializeBinary() {
      var e = new w.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      v(i.M(), e, t);
    }
    serializeBase64String() {
      var e = new w.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CStoreBrowse_GetDLCForAppsSolr_Response_DLCList`;
    }
  },
  vt = class i extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        i.prototype.packageid || t(i.M()),
        w.Message.initialize(this, e, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (i.sm_m ||= {
          proto: i,
          fields: {
            packageid: {
              n: 1,
              r: !0,
              q: !0,
              br: e.readUint32,
              pbr: e.readPackedUint32,
              bw: d.writeRepeatedUint32,
            },
            context: { n: 2, c: I },
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
      return l(i.M(), e);
    }
    static deserializeBinary(e) {
      let t = new w.BinaryReader(e),
        n = new i();
      return i.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return c(i.MBF(), e, t);
    }
    serializeBinary() {
      var e = new w.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      v(i.M(), e, t);
    }
    serializeBase64String() {
      var e = new w.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CStoreBrowse_GetHardwareItems_Request`;
    }
  },
  yt = class i extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        i.prototype.packageid || t(i.M()),
        w.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (i.sm_m ||= {
          proto: i,
          fields: {
            packageid: { n: 1, br: e.readUint32, bw: d.writeUint32 },
            inventory_available: { n: 3, br: e.readBool, bw: d.writeBool },
            high_pending_orders: { n: 4, br: e.readBool, bw: d.writeBool },
            account_restricted_from_purchasing: {
              n: 5,
              br: e.readBool,
              bw: d.writeBool,
            },
            requires_reservation: { n: 6, br: e.readBool, bw: d.writeBool },
            rtime_estimated_notification: {
              n: 7,
              br: e.readUint32,
              bw: d.writeUint32,
            },
            notificaton_token: { n: 8, br: e.readString, bw: d.writeString },
            reservation_state: { n: 9, br: e.readInt32, bw: d.writeInt32 },
            expired: { n: 10, br: e.readBool, bw: d.writeBool },
            time_expires: { n: 11, br: e.readUint32, bw: d.writeUint32 },
            time_reserved: { n: 12, br: e.readUint32, bw: d.writeUint32 },
            allow_quantity_purchase: { n: 13, br: e.readBool, bw: d.writeBool },
            max_quantity_per_purchase: {
              n: 14,
              br: e.readInt32,
              bw: d.writeInt32,
            },
            allow_purchase_in_country: {
              n: 15,
              br: e.readBool,
              bw: d.writeBool,
            },
            estimated_delivery_soonest_business_days: {
              n: 17,
              br: e.readUint32,
              bw: d.writeUint32,
            },
            estimated_delivery_latest_business_days: {
              n: 18,
              br: e.readUint32,
              bw: d.writeUint32,
            },
            not_allowed_to_reserved_because_already_owned: {
              n: 19,
              br: e.readBool,
              bw: d.writeBool,
            },
            appid_ownership_not_allowed_to_reserve: {
              n: 20,
              br: e.readUint32,
              bw: d.writeUint32,
            },
            account_first_date_purchase_requirement: {
              n: 21,
              br: e.readUint32,
              bw: d.writeUint32,
            },
            position_is_waitlist: { n: 22, br: e.readBool, bw: d.writeBool },
            user_waitlist_token: { n: 23, br: e.readString, bw: d.writeString },
            queue_in_waitlist: { n: 24, br: e.readBool, bw: d.writeBool },
            queue_waitlist_token: {
              n: 25,
              br: e.readString,
              bw: d.writeString,
            },
            collection_time_active: {
              n: 26,
              br: e.readUint32,
              bw: d.writeUint32,
            },
            reservation_not_allowed: { n: 27, br: e.readBool, bw: d.writeBool },
            requires_signature: { n: 28, br: e.readBool, bw: d.writeBool },
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
      return l(i.M(), e);
    }
    static deserializeBinary(e) {
      let t = new w.BinaryReader(e),
        n = new i();
      return i.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return c(i.MBF(), e, t);
    }
    serializeBinary() {
      var e = new w.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      v(i.M(), e, t);
    }
    serializeBase64String() {
      var e = new w.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CHardwarePackageDetails`;
    }
  },
  bt = class e extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      super(),
        e.prototype.details || t(e.M()),
        w.Message.initialize(this, n, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { details: { n: 1, c: yt, r: !0, q: !0 } },
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
      return l(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new w.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return c(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new w.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      v(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new w.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CStoreBrowse_GetHardwareItems_Response`;
    }
  },
  xt = class i extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        i.prototype.filter_failure || t(i.M()),
        w.Message.initialize(this, e, 0, -1, [21, 30], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (i.sm_m ||= {
          proto: i,
          fields: {
            filter_failure: { n: 1, d: 0, br: e.readEnum, bw: d.writeEnum },
            already_owned: { n: 5, br: e.readBool, bw: d.writeBool },
            on_wishlist: { n: 6, br: e.readBool, bw: d.writeBool },
            ignored: { n: 7, br: e.readBool, bw: d.writeBool },
            ignored_creator: { n: 8, br: e.readBool, bw: d.writeBool },
            not_in_users_language: { n: 10, br: e.readBool, bw: d.writeBool },
            not_on_users_platform: { n: 11, br: e.readBool, bw: d.writeBool },
            demo_for_owned_game: { n: 12, br: e.readBool, bw: d.writeBool },
            dlc_for_unowned_game: { n: 13, br: e.readBool, bw: d.writeBool },
            nonpreferred_product_early_access: {
              n: 22,
              br: e.readBool,
              bw: d.writeBool,
            },
            nonpreferred_product_prepurchase: {
              n: 23,
              br: e.readBool,
              bw: d.writeBool,
            },
            nonpreferred_product_software: {
              n: 24,
              br: e.readBool,
              bw: d.writeBool,
            },
            nonpreferred_product_vr: { n: 25, br: e.readBool, bw: d.writeBool },
            excluded_tagids: {
              n: 21,
              r: !0,
              q: !0,
              br: e.readUint32,
              pbr: e.readPackedUint32,
              bw: d.writeRepeatedUint32,
            },
            excluded_content_descriptorids: {
              n: 30,
              r: !0,
              q: !0,
              br: e.readEnum,
              pbr: e.readPackedEnum,
              bw: d.writeRepeatedEnum,
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
      return l(i.M(), e);
    }
    static deserializeBinary(e) {
      let t = new w.BinaryReader(e),
        n = new i();
      return i.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return c(i.MBF(), e, t);
    }
    serializeBinary() {
      var e = new w.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      v(i.M(), e, t);
    }
    serializeBase64String() {
      var e = new w.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `StoreBrowseFilterFailure`;
    }
  },
  St;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(`StoreBrowse.GetItems#1`, S(et, t, n), tt, {
      bConstMethod: !0,
      ePrivilege: 1,
      eWebAPIKeyRequirement: 1,
      rgBrowserAPISites: [`partner`, `help`, `community`],
    });
  }
  e.GetItems = t;
  function n(e, t, n) {
    return e.SendMsg(`StoreBrowse.GetStoreCategories#1`, S(nt, t, n), rt, {
      bConstMethod: !0,
      ePrivilege: 1,
      eWebAPIKeyRequirement: 1,
    });
  }
  e.GetStoreCategories = n;
  function r(e, t, n) {
    return e.SendMsg(`StoreBrowse.GetContentHubConfig#1`, S(at, t, n), ot, {
      bConstMethod: !0,
      ePrivilege: 0,
      eWebAPIKeyRequirement: 1,
      rgBrowserAPISites: [`partner`, `community`],
    });
  }
  e.GetContentHubConfig = r;
  function i(e, t, n) {
    return e.SendMsg(`StoreBrowse.GetPriceStops#1`, S(ct, t, n), lt, {
      bConstMethod: !0,
      ePrivilege: 0,
      eWebAPIKeyRequirement: 1,
      rgBrowserAPISites: [`partner`, `community`],
    });
  }
  e.GetPriceStops = i;
  function a(e, t, n) {
    return e.SendMsg(`StoreBrowse.GetDLCForApps#1`, S(dt, t, n), ft, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  e.GetDLCForApps = a;
  function o(e, t, n) {
    return e.SendMsg(`StoreBrowse.GetDLCForAppsSolr#1`, S(ht, t, n), gt, {
      bConstMethod: !0,
      ePrivilege: 0,
      eWebAPIKeyRequirement: 1,
      rgBrowserAPISites: [`partner`, `community`],
    });
  }
  e.GetDLCForAppsSolr = o;
  function s(e, t, n) {
    return e.SendMsg(`StoreBrowse.GetHardwareItems#1`, S(vt, t, n), bt, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
      rgBrowserAPISites: [`partner`, `community`],
    });
  }
  e.GetHardwareItems = s;
})((St ||= {}));
var Ct = new Set(
  `sc_schinese.schinese.tchinese.japanese.koreana.thai.arabic.indonesian.malay.bulgarian.czech.danish.german.english.spanish.latam.greek.french.italian.hungarian.dutch.norwegian.polish.portuguese.brazilian.romanian.russian.finnish.swedish.turkish.vietnamese.ukrainian`.split(
    `.`,
  ),
);
function wt(e) {
  return Ct.has(e);
}
var Tt = new Map([
    [`en`, `english`],
    [`de`, `german`],
    [`fr`, `french`],
    [`it`, `italian`],
    [`ko`, `koreana`],
    [`es-419`, `latam`],
    [`es`, `spanish`],
    [`zh`, `schinese`],
    [`zh-cn`, `schinese`],
    [`zh-tw`, `tchinese`],
    [`ru`, `russian`],
    [`ar`, `arabic`],
    [`th`, `thai`],
    [`ja`, `japanese`],
    [`pt-br`, `brazilian`],
    [`pt`, `portuguese`],
    [`pl`, `polish`],
    [`da`, `danish`],
    [`nl`, `dutch`],
    [`fi`, `finnish`],
    [`nb`, `norwegian`],
    [`no`, `norwegian`],
    [`sv`, `swedish`],
    [`hu`, `hungarian`],
    [`cs`, `czech`],
    [`ro`, `romanian`],
    [`tr`, `turkish`],
    [`bg`, `bulgarian`],
    [`el`, `greek`],
    [`uk`, `ukrainian`],
    [`vn`, `vietnamese`],
    [`vi`, `vietnamese`],
    [`id`, `indonesian`],
    [`ms`, `malay`],
  ]),
  L = new Map();
for (let [e, t] of Tt.entries()) L.set(t, e);
L.set(`sc_schinese`, L.get(`schinese`)), L.set(`korean`, L.get(`koreana`));
function Et(e) {
  if (e !== `english`) return e === `sc_schinese` ? `schinese` : `english`;
}
function Dt(e) {
  return e === `arabic`;
}
function Ot(e, ...t) {
  return (
    t.length == 0 ||
      (e = e.replace(/%(?:(\d+)\$)?s/g, function (e, n) {
        if (n <= t.length && n >= 1) {
          let e = t[n - 1];
          return String(e ?? ``);
        }
        return e;
      })),
    e
  );
}
var R;
R ??= new Set();
var kt = void 0;
function At() {
  return (kt ??= Promise.all(R));
}
function jt(e) {
  (R ??= new Set()), R.add(e), (kt = Promise.all(R));
}
var Mt = {
  5: `_Guide`,
  10: `_Hardware`,
  4: `_DLC`,
  11: `_Music`,
  8: `_Series`,
  1: `_Demo`,
};
function Nt(e, t, n) {
  switch (t) {
    case 6:
      return e + `_Software`;
    case 7:
      return e + `_Video`;
  }
  let r = Mt[t];
  return r && n(e + r) ? e + r : e;
}
function Pt(e) {
  let t = new Map();
  async function n() {
    await _();
    let n = z(),
      r = new Set([]);
    for (let e of n.languages) {
      r.add(e.strLanguage);
      let t = Et(e.strLanguage);
      t && r.add(t);
    }
    return Promise.all(
      Array.from(r).map((n) =>
        e(n).then((e) => {
          if (!e) {
            console.error(`Project loc failed to load language ${n}, got ${e}`);
            return;
          }
          let r = new Map();
          for (let [t, n] of Object.entries(e)) r.set(`#` + t, n);
          t.set(n, r);
        }),
      ),
    );
  }
  let r = n(),
    i = !1,
    o = !1;
  r
    .then(() => (i = !0))
    .catch((e) => {
      console.error(`LoadStrings error`, e), (o = !0);
    }),
    jt(r);
  function s(e, n) {
    let [c, ...l] = n,
      u =
        t.get(c.strLanguage)?.get(e) ??
        t.get(Et(c.strLanguage) ?? `english`)?.get(e);
    if (u !== void 0) return u;
    if (l.length === 0) {
      if (o)
        return (
          console.warn(
            `Couldn't find localization key ${e} after erroring loading strings`,
          ),
          e
        );
      if (!i) throw r;
      return (
        a().ReportError(Error(`Couldn't find localization key ${e}`), {
          bIncludeMessageInIdentifier: !0,
        }),
        console.warn(`Couldn't find localization key ${e}`),
        e
      );
    }
    return s(e, l);
  }
  function c(e, ...t) {
    let n = z().languages;
    return Ot(s(e, n), ...t);
  }
  function l(e) {
    let n = z().languages,
      r = [...n.map((e) => e.strLanguage), Et(n[0].strLanguage)];
    for (let n of r) {
      if (!n) continue;
      let r = t.get(n);
      if (r && r.has(e)) return !0;
    }
    return !1;
  }
  return {
    Localize(e, ...t) {
      return c(e, ...t);
    },
    LocalizeReact(e, ...t) {
      let n = this.Localize(e);
      if (n === e) return n;
      let r = [],
        i = /(.*?)%(\d+)\$s/g,
        a = 0,
        o;
      for (; (o = i.exec(n)); ) {
        (a += o[0].length), r.push(o[1]);
        let e = parseInt(o[2]);
        e >= 1 && e <= t.length && r.push(t[e - 1]);
      }
      return r.push(n.slice(a)), C.createElement(C.Fragment, null, ...r);
    },
    LocalizePlural(e, t, ...n) {
      return c(t === 1 || t === `1` ? e : e + `_Plural`, t, ...n);
    },
    GetAppTypeLocKey(e, t) {
      return Nt(e, t, l);
    },
    GetAppTypePluralLocKey(e, t) {
      switch (t) {
        case 6:
          return e + `_Software`;
        case 7:
          return e + `_Video`;
        default:
          return e;
      }
    },
    LocalizeInSpecificLang(e, t, ...n) {
      return Ot(s(t, [e]), ...n);
    },
    Ready() {
      return r;
    },
    IsReady() {
      return i;
    },
    HasKey: l,
  };
}
function z() {
  if (!wt(s.LANGUAGE)) throw `unknown language ${s.LANGUAGE}`;
  return {
    languages: [
      { strLanguage: s.LANGUAGE, strISOCode: L.get(s.LANGUAGE), eSource: 5 },
    ],
  };
}
if (!C.useState)
  throw Error(`mobx-react-lite requires React with Hooks support`);
if (!x)
  throw Error(
    `mobx-react-lite@3 requires mobx at least version 6 to be available`,
  );
var Ft = b((e) => {
    var t = h();
    function n(e) {
      var t = `https://react.dev/errors/` + e;
      if (1 < arguments.length) {
        t += `?args[]=` + encodeURIComponent(arguments[1]);
        for (var n = 2; n < arguments.length; n++)
          t += `&args[]=` + encodeURIComponent(arguments[n]);
      }
      return (
        `Minified React error #` +
        e +
        `; visit ` +
        t +
        ` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`
      );
    }
    function r() {}
    var i = {
        d: {
          f: r,
          r: function () {
            throw Error(n(522));
          },
          D: r,
          C: r,
          L: r,
          m: r,
          X: r,
          S: r,
          M: r,
        },
        p: 0,
        findDOMNode: null,
      },
      a = Symbol.for(`react.portal`);
    function o(e, t, n) {
      var r =
        3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
      return {
        $$typeof: a,
        key: r == null ? null : `` + r,
        children: e,
        containerInfo: t,
        implementation: n,
      };
    }
    var s = t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    function c(e, t) {
      if (e === `font`) return ``;
      if (typeof t == `string`) return t === `use-credentials` ? t : ``;
    }
    (e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = i),
      (e.createPortal = function (e, t) {
        var r =
          2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
        if (!t || (t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11))
          throw Error(n(299));
        return o(e, t, null, r);
      }),
      (e.flushSync = function (e) {
        var t = s.T,
          n = i.p;
        try {
          if (((s.T = null), (i.p = 2), e)) return e();
        } finally {
          (s.T = t), (i.p = n), i.d.f();
        }
      }),
      (e.preconnect = function (e, t) {
        typeof e == `string` &&
          (t
            ? ((t = t.crossOrigin),
              (t =
                typeof t == `string`
                  ? t === `use-credentials`
                    ? t
                    : ``
                  : void 0))
            : (t = null),
          i.d.C(e, t));
      }),
      (e.prefetchDNS = function (e) {
        typeof e == `string` && i.d.D(e);
      }),
      (e.preinit = function (e, t) {
        if (typeof e == `string` && t && typeof t.as == `string`) {
          var n = t.as,
            r = c(n, t.crossOrigin),
            a = typeof t.integrity == `string` ? t.integrity : void 0,
            o = typeof t.fetchPriority == `string` ? t.fetchPriority : void 0;
          n === `style`
            ? i.d.S(
                e,
                typeof t.precedence == `string` ? t.precedence : void 0,
                { crossOrigin: r, integrity: a, fetchPriority: o },
              )
            : n === `script` &&
              i.d.X(e, {
                crossOrigin: r,
                integrity: a,
                fetchPriority: o,
                nonce: typeof t.nonce == `string` ? t.nonce : void 0,
              });
        }
      }),
      (e.preinitModule = function (e, t) {
        if (typeof e == `string`) {
          if (typeof t == `object` && t) {
            if (t.as == null || t.as === `script`) {
              var n = c(t.as, t.crossOrigin);
              i.d.M(e, {
                crossOrigin: n,
                integrity:
                  typeof t.integrity == `string` ? t.integrity : void 0,
                nonce: typeof t.nonce == `string` ? t.nonce : void 0,
              });
            }
          } else t ?? i.d.M(e);
        }
      }),
      (e.preload = function (e, t) {
        if (
          typeof e == `string` &&
          typeof t == `object` &&
          t &&
          typeof t.as == `string`
        ) {
          var n = t.as,
            r = c(n, t.crossOrigin);
          i.d.L(e, n, {
            crossOrigin: r,
            integrity: typeof t.integrity == `string` ? t.integrity : void 0,
            nonce: typeof t.nonce == `string` ? t.nonce : void 0,
            type: typeof t.type == `string` ? t.type : void 0,
            fetchPriority:
              typeof t.fetchPriority == `string` ? t.fetchPriority : void 0,
            referrerPolicy:
              typeof t.referrerPolicy == `string` ? t.referrerPolicy : void 0,
            imageSrcSet:
              typeof t.imageSrcSet == `string` ? t.imageSrcSet : void 0,
            imageSizes: typeof t.imageSizes == `string` ? t.imageSizes : void 0,
            media: typeof t.media == `string` ? t.media : void 0,
          });
        }
      }),
      (e.preloadModule = function (e, t) {
        if (typeof e == `string`) {
          if (t) {
            var n = c(t.as, t.crossOrigin);
            i.d.m(e, {
              as: typeof t.as == `string` && t.as !== `script` ? t.as : void 0,
              crossOrigin: n,
              integrity: typeof t.integrity == `string` ? t.integrity : void 0,
            });
          } else i.d.m(e);
        }
      }),
      (e.requestFormReset = function (e) {
        i.d.r(e);
      }),
      (e.unstable_batchedUpdates = function (e, t) {
        return e(t);
      }),
      (e.useFormState = function (e, t, n) {
        return s.H.useFormState(e, t, n);
      }),
      (e.useFormStatus = function () {
        return s.H.useHostTransitionStatus();
      }),
      (e.version = `19.1.1`);
  }),
  It = b((e, t) => {
    function n() {
      if (
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < `u` &&
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE == `function`
      )
        try {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
        } catch (e) {
          console.error(e);
        }
    }
    n(), (t.exports = Ft());
  }),
  Lt = g(It());
function Rt(e) {
  e();
}
function zt(e) {
  (e ||= Rt), p({ reactionScheduler: e });
}
function Bt(e) {
  return m(e);
}
var Vt = !1;
function B() {
  return Vt;
}
var Ht = 1e4,
  Ut = 1e4,
  Wt = (function () {
    function e(e) {
      var t = this;
      Object.defineProperty(this, "finalize", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: e,
      }),
        Object.defineProperty(this, "registrations", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: new Map(),
        }),
        Object.defineProperty(this, "sweepTimeout", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        Object.defineProperty(this, "sweep", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: function (e) {
            e === void 0 && (e = Ht),
              clearTimeout(t.sweepTimeout),
              (t.sweepTimeout = void 0);
            var n = Date.now();
            t.registrations.forEach(function (r, i) {
              n - r.registeredAt >= e &&
                (t.finalize(r.value), t.registrations.delete(i));
            }),
              t.registrations.size > 0 && t.scheduleSweep();
          },
        }),
        Object.defineProperty(this, "finalizeAllImmediately", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: function () {
            t.sweep(0);
          },
        });
    }
    return (
      Object.defineProperty(e.prototype, "register", {
        enumerable: !1,
        configurable: !0,
        writable: !0,
        value: function (e, t, n) {
          this.registrations.set(n, { value: t, registeredAt: Date.now() }),
            this.scheduleSweep();
        },
      }),
      Object.defineProperty(e.prototype, "unregister", {
        enumerable: !1,
        configurable: !0,
        writable: !0,
        value: function (e) {
          this.registrations.delete(e);
        },
      }),
      Object.defineProperty(e.prototype, "scheduleSweep", {
        enumerable: !1,
        configurable: !0,
        writable: !0,
        value: function () {
          this.sweepTimeout === void 0 &&
            (this.sweepTimeout = setTimeout(this.sweep, Ut));
        },
      }),
      e
    );
  })(),
  V = new (typeof FinalizationRegistry < `u` ? FinalizationRegistry : Wt)(
    function (e) {
      var t;
      (t = e.reaction) == null || t.dispose(), (e.reaction = null);
    },
  ),
  Gt = b((e) => {
    var t = h();
    function n(e, t) {
      return (e === t && (e !== 0 || 1 / e == 1 / t)) || (e !== e && t !== t);
    }
    var r = typeof Object.is == `function` ? Object.is : n,
      i = t.useState,
      a = t.useEffect,
      o = t.useLayoutEffect,
      s = t.useDebugValue;
    function c(e, t) {
      var n = t(),
        r = i({ inst: { value: n, getSnapshot: t } }),
        c = r[0].inst,
        u = r[1];
      return (
        o(
          function () {
            (c.value = n), (c.getSnapshot = t), l(c) && u({ inst: c });
          },
          [e, n, t],
        ),
        a(
          function () {
            return (
              l(c) && u({ inst: c }),
              e(function () {
                l(c) && u({ inst: c });
              })
            );
          },
          [e],
        ),
        s(n),
        n
      );
    }
    function l(e) {
      var t = e.getSnapshot;
      e = e.value;
      try {
        var n = t();
        return !r(e, n);
      } catch {
        return !0;
      }
    }
    function u(e, t) {
      return t();
    }
    var d =
      typeof window > `u` ||
      window.document === void 0 ||
      window.document.createElement === void 0
        ? u
        : c;
    e.useSyncExternalStore =
      t.useSyncExternalStore === void 0 ? d : t.useSyncExternalStore;
  }),
  Kt = b((e, t) => {
    t.exports = Gt();
  }),
  qt = Kt(),
  Jt = function () {};
function Yt(e) {
  e.reaction = new y(`observer${e.name}`, function () {
    var t;
    (e.stateVersion = Symbol()), (t = e.onStoreChange) == null || t.call(e);
  });
}
function Xt(e, t) {
  if ((t === void 0 && (t = `observed`), B())) return e();
  var n = C.useRef(null);
  if (!n.current) {
    var r = {
      reaction: null,
      onStoreChange: null,
      stateVersion: Symbol(),
      name: t,
      subscribe: function (e) {
        return (
          V.unregister(r),
          (r.onStoreChange = e),
          r.reaction || (Yt(r), (r.stateVersion = Symbol())),
          function () {
            var e;
            (r.onStoreChange = null),
              (e = r.reaction) == null || e.dispose(),
              (r.reaction = null);
          }
        );
      },
      getSnapshot: function () {
        return r.stateVersion;
      },
    };
    n.current = r;
  }
  var i = n.current;
  i.reaction || (Yt(i), V.register(n, i, i)),
    C.useDebugValue(i.reaction, Bt),
    (0, qt.useSyncExternalStore)(i.subscribe, i.getSnapshot, Jt);
  var a, o;
  if (
    (i.reaction.track(function () {
      try {
        a = e();
      } catch (e) {
        o = e;
      }
    }),
    o)
  )
    throw o;
  return a;
}
var Zt = typeof Symbol == `function` && Symbol.for,
  Qt = Zt
    ? Symbol.for(`react.forward_ref`)
    : typeof C.forwardRef == `function` &&
      (0, C.forwardRef)(function (e) {
        return null;
      }).$$typeof,
  $t = Zt
    ? Symbol.for(`react.memo`)
    : typeof C.memo == `function` &&
      (0, C.memo)(function (e) {
        return null;
      }).$$typeof;
function en(e, t) {
  if ($t && e.$$typeof === $t)
    throw Error(
      "[mobx-react-lite] You are trying to use `observer` on a function component wrapped in either another `observer` or `React.memo`. The observer already applies 'React.memo' for you.",
    );
  if (B()) return e;
  var n = t?.forwardRef ?? !1,
    r = e,
    i = e.displayName || e.name;
  if (
    Qt &&
    e.$$typeof === Qt &&
    ((n = !0), (r = e.render), typeof r != `function`)
  )
    throw Error(
      "[mobx-react-lite] `render` property of ForwardRef was not a function",
    );
  var a = function (e, t) {
    return Xt(function () {
      return r(e, t);
    }, i);
  };
  return (
    (a.displayName = e.displayName),
    Object.defineProperty(a, "name", {
      value: e.name,
      writable: !0,
      configurable: !0,
    }),
    e.contextTypes && (a.contextTypes = e.contextTypes),
    n && (a = (0, C.forwardRef)(a)),
    (a = (0, C.memo)(a)),
    nn(e, a),
    a
  );
}
var tn = { $$typeof: !0, render: !0, compare: !0, type: !0, displayName: !0 };
function nn(e, t) {
  Object.keys(e).forEach(function (n) {
    tn[n] || Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n));
  });
}
zt(Lt.unstable_batchedUpdates), V.finalizeAllImmediately;
function rn(e, t) {
  return t === void 0 && (t = `observed`), Xt(e, t);
}
function an(e, t) {
  if (on(e, t)) return !0;
  if (typeof e != `object` || !e || typeof t != `object` || !t) return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (var i = 0; i < n.length; i++)
    if (!Object.hasOwnProperty.call(t, n[i]) || !on(e[n[i]], t[n[i]]))
      return !1;
  return !0;
}
function on(e, t) {
  return e === t ? e !== 0 || 1 / e == 1 / t : e !== e && t !== t;
}
var sn = Symbol(`patchMixins`),
  cn = Symbol(`patchedDefinition`);
function ln(e, t) {
  var n = (e[sn] = e[sn] || {}),
    r = (n[t] = n[t] || {});
  return (r.locks = r.locks || 0), (r.methods = r.methods || []), r;
}
function un(e, t) {
  var n = this,
    r = [...arguments].slice(2);
  t.locks++;
  try {
    var i;
    return e != null && (i = e.apply(this, r)), i;
  } finally {
    t.locks--,
      t.locks === 0 &&
        t.methods.forEach(function (e) {
          e.apply(n, r);
        });
  }
}
function dn(e, t) {
  return function () {
    var n = [...arguments];
    un.call.apply(un, [this, e, t].concat(n));
  };
}
function fn(e, t, n) {
  var r = ln(e, t);
  r.methods.indexOf(n) < 0 && r.methods.push(n);
  var i = Object.getOwnPropertyDescriptor(e, t);
  if (!(i && i[cn])) {
    var a = e[t],
      o = pn(e, t, i ? i.enumerable : void 0, r, a);
    Object.defineProperty(e, t, o);
  }
}
function pn(e, t, n, r, i) {
  var a,
    o = dn(i, r);
  return (
    (a = {}),
    (a[cn] = !0),
    (a.get = function () {
      return o;
    }),
    (a.set = function (i) {
      if (this === e) o = dn(i, r);
      else {
        var a = pn(this, t, n, r, i);
        Object.defineProperty(this, t, a);
      }
    }),
    (a.configurable = !0),
    (a.enumerable = n),
    a
  );
}
var mn = Symbol(`ObserverAdministration`),
  hn = Symbol(`isMobXReactObserver`);
function H(e) {
  return (
    e[mn] ??
    (e[mn] = {
      reaction: null,
      mounted: !1,
      reactionInvalidatedBeforeMount: !1,
      forceUpdate: null,
      name: _n(e.constructor),
      state: void 0,
      props: void 0,
      context: void 0,
    })
  );
}
function gn(e) {
  var t = e.prototype;
  if (e[hn]) {
    var n = _n(e);
    throw Error(
      `The provided component class (` +
        n +
        `) has already been declared as an observer component.`,
    );
  }
  if (((e[hn] = !0), t.componentWillReact))
    throw Error(
      `The componentWillReact life-cycle event is no longer supported`,
    );
  if (e.__proto__ !== C.PureComponent) {
    if (!t.shouldComponentUpdate) t.shouldComponentUpdate = bn;
    else if (t.shouldComponentUpdate !== bn)
      throw Error(
        `It is not allowed to use shouldComponentUpdate in observer based components.`,
      );
  }
  var r = t.render;
  if (typeof r != `function`) {
    var i = _n(e);
    throw Error(
      `[mobx-react] class component (` +
        i +
        ") is missing `render` method.\n`observer` requires `render` being a function defined on prototype.\n`render = () => {}` or `render = function() {}` is not supported.",
    );
  }
  t.render = function () {
    return (
      Object.defineProperty(this, "render", {
        configurable: !1,
        writable: !1,
        value: B() ? r : vn.call(this, r),
      }),
      this.render()
    );
  };
  var a = t.componentDidMount;
  return (
    (t.componentDidMount = function () {
      var e = this,
        t = H(this);
      return (
        (t.mounted = !0),
        V.unregister(this),
        (t.forceUpdate = function () {
          return e.forceUpdate();
        }),
        (!t.reaction || t.reactionInvalidatedBeforeMount) && t.forceUpdate(),
        a?.apply(this, arguments)
      );
    }),
    fn(t, `componentWillUnmount`, function () {
      var e;
      if (!B()) {
        var t = H(this);
        (e = t.reaction) == null || e.dispose(),
          (t.reaction = null),
          (t.forceUpdate = null),
          (t.mounted = !1),
          (t.reactionInvalidatedBeforeMount = !1);
      }
    }),
    e
  );
}
function _n(e) {
  return e.displayName || e.name || `<component>`;
}
function vn(e) {
  var t = e.bind(this),
    n = H(this);
  function r() {
    n.reaction ||
      ((n.reaction = yn(n)), n.mounted || V.register(this, n, this));
    var e = void 0,
      r = void 0;
    if (
      (n.reaction.track(function () {
        try {
          r = f(!1, t);
        } catch (t) {
          e = t;
        }
      }),
      e)
    )
      throw e;
    return r;
  }
  return r;
}
function yn(e) {
  return new y(e.name + `.render()`, function () {
    if (!e.mounted) e.reactionInvalidatedBeforeMount = !0;
    else
      try {
        e.forceUpdate == null || e.forceUpdate();
      } catch {
        var t;
        (t = e.reaction) == null || t.dispose(), (e.reaction = null);
      }
  });
}
function bn(e, t) {
  return (
    B() &&
      console.warn(
        `[mobx-react] It seems that a re-rendering of a React component is triggered while in static (server-side) mode. Please make sure components are rendered only once server-side.`,
      ),
    this.state !== t || !an(this.props, e)
  );
}
function xn(e, t) {
  if (t && t.kind !== `class`)
    throw Error(`The @observer decorator can be used on classes only`);
  return (
    e.isMobxInjector === !0 &&
      console.warn(
        "Mobx observer: You are trying to use `observer` on a component that already has `inject`. Please apply `observer` before applying `inject`",
      ),
    Object.prototype.isPrototypeOf.call(C.Component, e) ||
    Object.prototype.isPrototypeOf.call(C.PureComponent, e)
      ? gn(e)
      : en(e)
  );
}
if ((`19.1.1`.split(`.`)[0], !C.Component))
  throw Error(`mobx-react requires React to be available`);
if (!o) throw Error(`mobx-react requires mobx to be available`);
function U() {
  return (
    (U = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    U.apply(null, arguments)
  );
}
function Sn(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
function W(e, t) {
  return (
    (W = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (e, t) {
          return (e.__proto__ = t), e;
        }),
    W(e, t)
  );
}
function G(e, t) {
  (e.prototype = Object.create(t.prototype)),
    (e.prototype.constructor = e),
    W(e, t);
}
var Cn = b((e, t) => {
    t.exports = `SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED`;
  }),
  wn = b((e, t) => {
    var n = Cn();
    function r() {}
    function i() {}
    (i.resetWarningCache = r),
      (t.exports = function () {
        function e(e, t, r, i, a, o) {
          if (o !== n) {
            var s = Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types",
            );
            throw ((s.name = `Invariant Violation`), s);
          }
        }
        e.isRequired = e;
        function t() {
          return e;
        }
        var a = {
          array: e,
          bigint: e,
          bool: e,
          func: e,
          number: e,
          object: e,
          string: e,
          symbol: e,
          any: e,
          arrayOf: t,
          element: e,
          elementType: e,
          instanceOf: t,
          node: e,
          objectOf: t,
          oneOf: t,
          oneOfType: t,
          shape: t,
          exact: t,
          checkPropTypes: i,
          resetWarningCache: r,
        };
        return (a.PropTypes = a), a;
      });
  }),
  Tn = b((e, t) => {
    t.exports = wn()();
  }),
  En = g(Tn());
function K(e) {
  return e.charAt(0) === `/`;
}
function Dn(e, t) {
  for (var n = t, r = n + 1, i = e.length; r < i; n += 1, r += 1) e[n] = e[r];
  e.pop();
}
function On(e, t) {
  t === void 0 && (t = ``);
  var n = (e && e.split(`/`)) || [],
    r = (t && t.split(`/`)) || [],
    i = e && K(e),
    a = t && K(t),
    o = i || a;
  if (
    (e && K(e) ? (r = n) : n.length && (r.pop(), (r = r.concat(n))), !r.length)
  )
    return `/`;
  var s;
  if (r.length) {
    var c = r[r.length - 1];
    s = c === `.` || c === `..` || c === ``;
  } else s = !1;
  for (var l = 0, u = r.length; u >= 0; u--) {
    var d = r[u];
    d === `.` ? Dn(r, u) : d === `..` ? (Dn(r, u), l++) : l && (Dn(r, u), l--);
  }
  if (!o) for (; l--; ) r.unshift(`..`);
  !o || r[0] === `` || (r[0] && K(r[0])) || r.unshift(``);
  var f = r.join(`/`);
  return s && f.substr(-1) !== `/` && (f += `/`), f;
}
function kn(e) {
  return e.valueOf ? e.valueOf() : Object.prototype.valueOf.call(e);
}
function q(e, t) {
  if (e === t) return !0;
  if (e == null || t == null) return !1;
  if (Array.isArray(e))
    return (
      Array.isArray(t) &&
      e.length === t.length &&
      e.every(function (e, n) {
        return q(e, t[n]);
      })
    );
  if (typeof e == `object` || typeof t == `object`) {
    var n = kn(e),
      r = kn(t);
    return n !== e || r !== t
      ? q(n, r)
      : Object.keys(Object.assign({}, e, t)).every(function (n) {
          return q(e[n], t[n]);
        });
  }
  return !1;
}
var An = `Invariant failed`;
function J(e, t) {
  if (!e) throw Error(An);
}
function Y(e) {
  return e.charAt(0) === `/` ? e : `/` + e;
}
function jn(e) {
  return e.charAt(0) === `/` ? e.substr(1) : e;
}
function Mn(e, t) {
  return (
    e.toLowerCase().indexOf(t.toLowerCase()) === 0 &&
    `/?#`.indexOf(e.charAt(t.length)) !== -1
  );
}
function Nn(e, t) {
  return Mn(e, t) ? e.substr(t.length) : e;
}
function Pn(e) {
  return e.charAt(e.length - 1) === `/` ? e.slice(0, -1) : e;
}
function Fn(e) {
  var t = e || `/`,
    n = ``,
    r = ``,
    i = t.indexOf(`#`);
  i !== -1 && ((r = t.substr(i)), (t = t.substr(0, i)));
  var a = t.indexOf(`?`);
  return (
    a !== -1 && ((n = t.substr(a)), (t = t.substr(0, a))),
    { pathname: t, search: n === `?` ? `` : n, hash: r === `#` ? `` : r }
  );
}
function X(e) {
  var t = e.pathname,
    n = e.search,
    r = e.hash,
    i = t || `/`;
  return (
    n && n !== `?` && (i += n.charAt(0) === `?` ? n : `?` + n),
    r && r !== `#` && (i += r.charAt(0) === `#` ? r : `#` + r),
    i
  );
}
function Z(e, t, n, r) {
  var i;
  typeof e == `string`
    ? ((i = Fn(e)), (i.state = t))
    : ((i = U({}, e)),
      i.pathname === void 0 && (i.pathname = ``),
      i.search
        ? i.search.charAt(0) !== `?` && (i.search = `?` + i.search)
        : (i.search = ``),
      i.hash
        ? i.hash.charAt(0) !== `#` && (i.hash = `#` + i.hash)
        : (i.hash = ``),
      t !== void 0 && i.state === void 0 && (i.state = t));
  try {
    i.pathname = decodeURI(i.pathname);
  } catch (e) {
    throw e instanceof URIError
      ? URIError(
          `Pathname "` +
            i.pathname +
            `" could not be decoded. This is likely caused by an invalid percent-encoding.`,
        )
      : e;
  }
  return (
    n && (i.key = n),
    r
      ? i.pathname
        ? i.pathname.charAt(0) !== `/` &&
          (i.pathname = On(i.pathname, r.pathname))
        : (i.pathname = r.pathname)
      : i.pathname || (i.pathname = `/`),
    i
  );
}
function In(e, t) {
  return (
    e.pathname === t.pathname &&
    e.search === t.search &&
    e.hash === t.hash &&
    e.key === t.key &&
    q(e.state, t.state)
  );
}
function Ln() {
  var e = null;
  function t(t) {
    return (
      (e = t),
      function () {
        e === t && (e = null);
      }
    );
  }
  function n(t, n, r, i) {
    if (e != null) {
      var a = typeof e == `function` ? e(t, n) : e;
      typeof a == `string`
        ? typeof r == `function`
          ? r(a, i)
          : i(!0)
        : i(a !== !1);
    } else i(!0);
  }
  var r = [];
  function i(e) {
    var t = !0;
    function n() {
      t && e.apply(void 0, arguments);
    }
    return (
      r.push(n),
      function () {
        (t = !1),
          (r = r.filter(function (e) {
            return e !== n;
          }));
      }
    );
  }
  function a() {
    var e = [...arguments];
    r.forEach(function (t) {
      return t.apply(void 0, e);
    });
  }
  return {
    setPrompt: t,
    confirmTransitionTo: n,
    appendListener: i,
    notifyListeners: a,
  };
}
var Rn = !!(
  typeof window < `u` &&
  window.document &&
  window.document.createElement
);
function zn(e, t) {
  t(window.confirm(e));
}
function Bn() {
  var e = window.navigator.userAgent;
  return (e.indexOf(`Android 2.`) !== -1 || e.indexOf(`Android 4.0`) !== -1) &&
    e.indexOf(`Mobile Safari`) !== -1 &&
    e.indexOf(`Chrome`) === -1 &&
    e.indexOf(`Windows Phone`) === -1
    ? !1
    : window.history && `pushState` in window.history;
}
function Vn() {
  return window.navigator.userAgent.indexOf(`Trident`) === -1;
}
function Hn() {
  return window.navigator.userAgent.indexOf(`Firefox`) === -1;
}
function Un(e) {
  return e.state === void 0 && navigator.userAgent.indexOf(`CriOS`) === -1;
}
var Wn = `popstate`,
  Gn = `hashchange`;
function Kn() {
  try {
    return window.history.state || {};
  } catch {
    return {};
  }
}
function qn(e) {
  e === void 0 && (e = {}), !Rn && J(!1);
  var t = window.history,
    n = Bn(),
    r = !Vn(),
    i = e,
    a = i.forceRefresh,
    o = a !== void 0 && a,
    s = i.getUserConfirmation,
    c = s === void 0 ? zn : s,
    l = i.keyLength,
    u = l === void 0 ? 6 : l,
    d = e.basename ? Pn(Y(e.basename)) : ``;
  function f(e) {
    var t = e || {},
      n = t.key,
      r = t.state,
      i = window.location,
      a = i.pathname,
      o = i.search,
      s = i.hash,
      c = a + o + s;
    return d && (c = Nn(c, d)), Z(c, r, n);
  }
  function p() {
    return Math.random().toString(36).substr(2, u);
  }
  var m = Ln();
  function h(e) {
    U(M, e), (M.length = t.length), m.notifyListeners(M.location, M.action);
  }
  function g(e) {
    Un(e) || y(f(e.state));
  }
  function _() {
    y(f(Kn()));
  }
  var v = !1;
  function y(e) {
    if (v) (v = !1), h();
    else {
      var t = `POP`;
      m.confirmTransitionTo(e, t, c, function (n) {
        n ? h({ action: t, location: e }) : b(e);
      });
    }
  }
  function b(e) {
    var t = M.location,
      n = S.indexOf(t.key);
    n === -1 && (n = 0);
    var r = S.indexOf(e.key);
    r === -1 && (r = 0);
    var i = n - r;
    i && ((v = !0), E(i));
  }
  var x = f(Kn()),
    S = [x.key];
  function C(e) {
    return d + X(e);
  }
  function w(e, r) {
    var i = `PUSH`,
      a = Z(e, r, p(), M.location);
    m.confirmTransitionTo(a, i, c, function (e) {
      if (e) {
        var r = C(a),
          s = a.key,
          c = a.state;
        if (n) {
          if ((t.pushState({ key: s, state: c }, null, r), o))
            window.location.href = r;
          else {
            var l = S.indexOf(M.location.key),
              u = S.slice(0, l + 1);
            u.push(a.key), (S = u), h({ action: i, location: a });
          }
        } else window.location.href = r;
      }
    });
  }
  function T(e, r) {
    var i = `REPLACE`,
      a = Z(e, r, p(), M.location);
    m.confirmTransitionTo(a, i, c, function (e) {
      if (e) {
        var r = C(a),
          s = a.key,
          c = a.state;
        if (n) {
          if ((t.replaceState({ key: s, state: c }, null, r), o))
            window.location.replace(r);
          else {
            var l = S.indexOf(M.location.key);
            l !== -1 && (S[l] = a.key), h({ action: i, location: a });
          }
        } else window.location.replace(r);
      }
    });
  }
  function E(e) {
    t.go(e);
  }
  function D() {
    E(-1);
  }
  function ee() {
    E(1);
  }
  var O = 0;
  function k(e) {
    (O += e),
      O === 1 && e === 1
        ? (window.addEventListener(Wn, g), r && window.addEventListener(Gn, _))
        : O === 0 &&
          (window.removeEventListener(Wn, g),
          r && window.removeEventListener(Gn, _));
  }
  var A = !1;
  function j(e) {
    e === void 0 && (e = !1);
    var t = m.setPrompt(e);
    return (
      (A ||= (k(1), !0)),
      function () {
        return A && ((A = !1), k(-1)), t();
      }
    );
  }
  function te(e) {
    var t = m.appendListener(e);
    return (
      k(1),
      function () {
        k(-1), t();
      }
    );
  }
  var M = {
    length: t.length,
    action: `POP`,
    location: x,
    createHref: C,
    push: w,
    replace: T,
    go: E,
    goBack: D,
    goForward: ee,
    block: j,
    listen: te,
  };
  return M;
}
var Jn = `hashchange`,
  Yn = {
    hashbang: {
      encodePath: function (e) {
        return e.charAt(0) === `!` ? e : `!/` + jn(e);
      },
      decodePath: function (e) {
        return e.charAt(0) === `!` ? e.substr(1) : e;
      },
    },
    noslash: { encodePath: jn, decodePath: Y },
    slash: { encodePath: Y, decodePath: Y },
  };
function Xn(e) {
  var t = e.indexOf(`#`);
  return t === -1 ? e : e.slice(0, t);
}
function Q() {
  var e = window.location.href,
    t = e.indexOf(`#`);
  return t === -1 ? `` : e.substring(t + 1);
}
function Zn(e) {
  window.location.hash = e;
}
function Qn(e) {
  window.location.replace(Xn(window.location.href) + `#` + e);
}
function $n(e) {
  e === void 0 && (e = {}), !Rn && J(!1);
  var t = window.history;
  Hn();
  var n = e,
    r = n.getUserConfirmation,
    i = r === void 0 ? zn : r,
    a = n.hashType,
    o = a === void 0 ? `slash` : a,
    s = e.basename ? Pn(Y(e.basename)) : ``,
    c = Yn[o],
    l = c.encodePath,
    u = c.decodePath;
  function d() {
    var e = u(Q());
    return s && (e = Nn(e, s)), Z(e);
  }
  var f = Ln();
  function p(e) {
    U(N, e), (N.length = t.length), f.notifyListeners(N.location, N.action);
  }
  var m = !1,
    h = null;
  function g(e, t) {
    return (
      e.pathname === t.pathname && e.search === t.search && e.hash === t.hash
    );
  }
  function _() {
    var e = Q(),
      t = l(e);
    if (e !== t) Qn(t);
    else {
      var n = d(),
        r = N.location;
      if ((!m && g(r, n)) || h === X(n)) return;
      (h = null), v(n);
    }
  }
  function v(e) {
    if (m) (m = !1), p();
    else {
      var t = `POP`;
      f.confirmTransitionTo(e, t, i, function (n) {
        n ? p({ action: t, location: e }) : y(e);
      });
    }
  }
  function y(e) {
    var t = N.location,
      n = C.lastIndexOf(X(t));
    n === -1 && (n = 0);
    var r = C.lastIndexOf(X(e));
    r === -1 && (r = 0);
    var i = n - r;
    i && ((m = !0), D(i));
  }
  var b = Q(),
    x = l(b);
  b !== x && Qn(x);
  var S = d(),
    C = [X(S)];
  function w(e) {
    var t = document.querySelector(`base`),
      n = ``;
    return (
      t && t.getAttribute(`href`) && (n = Xn(window.location.href)),
      n + `#` + l(s + X(e))
    );
  }
  function T(e, t) {
    var n = `PUSH`,
      r = Z(e, void 0, void 0, N.location);
    f.confirmTransitionTo(r, n, i, function (e) {
      if (e) {
        var t = X(r),
          i = l(s + t);
        if (Q() !== i) {
          (h = t), Zn(i);
          var a = C.lastIndexOf(X(N.location)),
            o = C.slice(0, a + 1);
          o.push(t), (C = o), p({ action: n, location: r });
        } else p();
      }
    });
  }
  function E(e, t) {
    var n = `REPLACE`,
      r = Z(e, void 0, void 0, N.location);
    f.confirmTransitionTo(r, n, i, function (e) {
      if (e) {
        var t = X(r),
          i = l(s + t);
        Q() !== i && ((h = t), Qn(i));
        var a = C.indexOf(X(N.location));
        a !== -1 && (C[a] = t), p({ action: n, location: r });
      }
    });
  }
  function D(e) {
    t.go(e);
  }
  function ee() {
    D(-1);
  }
  function O() {
    D(1);
  }
  var k = 0;
  function A(e) {
    (k += e),
      k === 1 && e === 1
        ? window.addEventListener(Jn, _)
        : k === 0 && window.removeEventListener(Jn, _);
  }
  var j = !1;
  function te(e) {
    e === void 0 && (e = !1);
    var t = f.setPrompt(e);
    return (
      (j ||= (A(1), !0)),
      function () {
        return j && ((j = !1), A(-1)), t();
      }
    );
  }
  function M(e) {
    var t = f.appendListener(e);
    return (
      A(1),
      function () {
        A(-1), t();
      }
    );
  }
  var N = {
    length: t.length,
    action: `POP`,
    location: S,
    createHref: w,
    push: T,
    replace: E,
    go: D,
    goBack: ee,
    goForward: O,
    block: te,
    listen: M,
  };
  return N;
}
var er = b((e, t) => {
    t.exports =
      Array.isArray ||
      function (e) {
        return Object.prototype.toString.call(e) == `[object Array]`;
      };
  }),
  tr = b((e, t) => {
    var n = er();
    (t.exports = v),
      (t.exports.parse = i),
      (t.exports.compile = o),
      (t.exports.tokensToFunction = l),
      (t.exports.tokensToRegExp = _);
    var r = RegExp(
      `(\\\\.)|([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))`,
      `g`,
    );
    function i(e, t) {
      for (
        var n = [], i = 0, o = 0, s = ``, c = (t && t.delimiter) || `/`, l;
        (l = r.exec(e)) != null;
      ) {
        var u = l[0],
          f = l[1],
          p = l.index;
        if (((s += e.slice(o, p)), (o = p + u.length), f)) s += f[1];
        else {
          var m = e[o],
            h = l[2],
            g = l[3],
            _ = l[4],
            v = l[5],
            y = l[6],
            b = l[7];
          s &&= (n.push(s), ``);
          var x = h != null && m != null && m !== h,
            S = y === `+` || y === `*`,
            C = y === `?` || y === `*`,
            w = h || c,
            T = _ || v,
            E =
              h || (typeof n[n.length - 1] == `string` ? n[n.length - 1] : ``);
          n.push({
            name: g || i++,
            prefix: h || ``,
            delimiter: w,
            optional: C,
            repeat: S,
            partial: x,
            asterisk: !!b,
            pattern: T ? d(T) : b ? `.*` : a(w, E),
          });
        }
      }
      return o < e.length && (s += e.substr(o)), s && n.push(s), n;
    }
    function a(e, t) {
      return !t || t.indexOf(e) > -1
        ? `[^` + u(e) + `]+?`
        : u(t) + `|(?:(?!` + u(t) + `)[^` + u(e) + `])+?`;
    }
    function o(e, t) {
      return l(i(e, t), t);
    }
    function s(e) {
      return encodeURI(e).replace(/[\/?#]/g, function (e) {
        return `%` + e.charCodeAt(0).toString(16).toUpperCase();
      });
    }
    function c(e) {
      return encodeURI(e).replace(/[?#]/g, function (e) {
        return `%` + e.charCodeAt(0).toString(16).toUpperCase();
      });
    }
    function l(e, t) {
      for (var r = Array(e.length), i = 0; i < e.length; i++)
        typeof e[i] == `object` &&
          (r[i] = RegExp(`^(?:` + e[i].pattern + `)$`, p(t)));
      return function (t, i) {
        for (
          var a = ``,
            o = t || {},
            l = (i || {}).pretty ? s : encodeURIComponent,
            u = 0;
          u < e.length;
          u++
        ) {
          var d = e[u];
          if (typeof d == `string`) a += d;
          else {
            var f = o[d.name],
              p;
            if (f == null) {
              if (d.optional) {
                d.partial && (a += d.prefix);
                continue;
              }
              throw TypeError(`Expected "` + d.name + `" to be defined`);
            }
            if (n(f)) {
              if (!d.repeat)
                throw TypeError(
                  `Expected "` +
                    d.name +
                    '" to not repeat, but received `' +
                    JSON.stringify(f) +
                    "`",
                );
              if (f.length === 0) {
                if (d.optional) continue;
                throw TypeError(`Expected "` + d.name + `" to not be empty`);
              }
              for (var m = 0; m < f.length; m++) {
                if (((p = l(f[m])), !r[u].test(p)))
                  throw TypeError(
                    `Expected all "` +
                      d.name +
                      `" to match "` +
                      d.pattern +
                      '", but received `' +
                      JSON.stringify(p) +
                      "`",
                  );
                a += (m === 0 ? d.prefix : d.delimiter) + p;
              }
            } else {
              if (((p = d.asterisk ? c(f) : l(f)), !r[u].test(p)))
                throw TypeError(
                  `Expected "` +
                    d.name +
                    `" to match "` +
                    d.pattern +
                    `", but received "` +
                    p +
                    `"`,
                );
              a += d.prefix + p;
            }
          }
        }
        return a;
      };
    }
    function u(e) {
      return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g, `\\$1`);
    }
    function d(e) {
      return e.replace(/([=!:$\/()])/g, `\\$1`);
    }
    function f(e, t) {
      return (e.keys = t), e;
    }
    function p(e) {
      return e && e.sensitive ? `` : `i`;
    }
    function m(e, t) {
      var n = e.source.match(/\((?!\?)/g);
      if (n)
        for (var r = 0; r < n.length; r++)
          t.push({
            name: r,
            prefix: null,
            delimiter: null,
            optional: !1,
            repeat: !1,
            partial: !1,
            asterisk: !1,
            pattern: null,
          });
      return f(e, t);
    }
    function h(e, t, n) {
      for (var r = [], i = 0; i < e.length; i++) r.push(v(e[i], t, n).source);
      return f(RegExp(`(?:` + r.join(`|`) + `)`, p(n)), t);
    }
    function g(e, t, n) {
      return _(i(e, n), t, n);
    }
    function _(e, t, r) {
      n(t) || ((r = t || r), (t = [])), (r ||= {});
      for (
        var i = r.strict, a = r.end !== !1, o = ``, s = 0;
        s < e.length;
        s++
      ) {
        var c = e[s];
        if (typeof c == `string`) o += u(c);
        else {
          var l = u(c.prefix),
            d = `(?:` + c.pattern + `)`;
          t.push(c),
            c.repeat && (d += `(?:` + l + d + `)*`),
            (d = c.optional
              ? c.partial
                ? l + `(` + d + `)?`
                : `(?:` + l + `(` + d + `))?`
              : l + `(` + d + `)`),
            (o += d);
        }
      }
      var m = u(r.delimiter || `/`),
        h = o.slice(-m.length) === m;
      return (
        i || (o = (h ? o.slice(0, -m.length) : o) + `(?:` + m + `(?=$))?`),
        (o += a ? `$` : i && h ? `` : `(?=` + m + `|$)`),
        f(RegExp(`^` + o, p(r)), t)
      );
    }
    function v(e, t, r) {
      return (
        n(t) || ((r = t || r), (t = [])),
        (r ||= {}),
        e instanceof RegExp ? m(e, t) : n(e) ? h(e, t, r) : g(e, t, r)
      );
    }
  }),
  nr = b((e) => {
    typeof Symbol == `function` && Symbol.for;
  }),
  rr = b((e, t) => {
    t.exports = nr();
  }),
  ir = b((e) => {
    var t = typeof Symbol == `function` && Symbol.for,
      n = t ? Symbol.for(`react.element`) : 60103,
      r = t ? Symbol.for(`react.portal`) : 60106,
      i = t ? Symbol.for(`react.fragment`) : 60107,
      a = t ? Symbol.for(`react.strict_mode`) : 60108,
      o = t ? Symbol.for(`react.profiler`) : 60114,
      s = t ? Symbol.for(`react.provider`) : 60109,
      c = t ? Symbol.for(`react.context`) : 60110,
      l = t ? Symbol.for(`react.async_mode`) : 60111,
      u = t ? Symbol.for(`react.concurrent_mode`) : 60111,
      d = t ? Symbol.for(`react.forward_ref`) : 60112,
      f = t ? Symbol.for(`react.suspense`) : 60113,
      p = t ? Symbol.for(`react.suspense_list`) : 60120,
      m = t ? Symbol.for(`react.memo`) : 60115,
      h = t ? Symbol.for(`react.lazy`) : 60116,
      g = t ? Symbol.for(`react.block`) : 60121,
      _ = t ? Symbol.for(`react.fundamental`) : 60117,
      v = t ? Symbol.for(`react.responder`) : 60118,
      y = t ? Symbol.for(`react.scope`) : 60119;
    function b(e) {
      if (typeof e == `object` && e) {
        var t = e.$$typeof;
        switch (t) {
          case n:
            switch (((e = e.type), e)) {
              case l:
              case u:
              case i:
              case o:
              case a:
              case f:
                return e;
              default:
                switch (((e &&= e.$$typeof), e)) {
                  case c:
                  case d:
                  case h:
                  case m:
                  case s:
                    return e;
                  default:
                    return t;
                }
            }
          case r:
            return t;
        }
      }
    }
    function x(e) {
      return b(e) === u;
    }
    (e.AsyncMode = l),
      (e.ConcurrentMode = u),
      (e.ContextConsumer = c),
      (e.ContextProvider = s),
      (e.Element = n),
      (e.ForwardRef = d),
      (e.Fragment = i),
      (e.Lazy = h),
      (e.Memo = m),
      (e.Portal = r),
      (e.Profiler = o),
      (e.StrictMode = a),
      (e.Suspense = f),
      (e.isAsyncMode = function (e) {
        return x(e) || b(e) === l;
      }),
      (e.isConcurrentMode = x),
      (e.isContextConsumer = function (e) {
        return b(e) === c;
      }),
      (e.isContextProvider = function (e) {
        return b(e) === s;
      }),
      (e.isElement = function (e) {
        return typeof e == `object` && !!e && e.$$typeof === n;
      }),
      (e.isForwardRef = function (e) {
        return b(e) === d;
      }),
      (e.isFragment = function (e) {
        return b(e) === i;
      }),
      (e.isLazy = function (e) {
        return b(e) === h;
      }),
      (e.isMemo = function (e) {
        return b(e) === m;
      }),
      (e.isPortal = function (e) {
        return b(e) === r;
      }),
      (e.isProfiler = function (e) {
        return b(e) === o;
      }),
      (e.isStrictMode = function (e) {
        return b(e) === a;
      }),
      (e.isSuspense = function (e) {
        return b(e) === f;
      }),
      (e.isValidElementType = function (e) {
        return (
          typeof e == `string` ||
          typeof e == `function` ||
          e === i ||
          e === u ||
          e === o ||
          e === a ||
          e === f ||
          e === p ||
          (typeof e == `object` &&
            !!e &&
            (e.$$typeof === h ||
              e.$$typeof === m ||
              e.$$typeof === s ||
              e.$$typeof === c ||
              e.$$typeof === d ||
              e.$$typeof === _ ||
              e.$$typeof === v ||
              e.$$typeof === y ||
              e.$$typeof === g))
        );
      }),
      (e.typeOf = b);
  }),
  ar = b((e, t) => {
    t.exports = ir();
  }),
  or = b((e, t) => {
    var n = ar(),
      r = {
        childContextTypes: !0,
        contextType: !0,
        contextTypes: !0,
        defaultProps: !0,
        displayName: !0,
        getDefaultProps: !0,
        getDerivedStateFromError: !0,
        getDerivedStateFromProps: !0,
        mixins: !0,
        propTypes: !0,
        type: !0,
      },
      i = {
        name: !0,
        length: !0,
        prototype: !0,
        caller: !0,
        callee: !0,
        arguments: !0,
        arity: !0,
      },
      a = {
        $$typeof: !0,
        render: !0,
        defaultProps: !0,
        displayName: !0,
        propTypes: !0,
      },
      o = {
        $$typeof: !0,
        compare: !0,
        defaultProps: !0,
        displayName: !0,
        propTypes: !0,
        type: !0,
      },
      s = {};
    (s[n.ForwardRef] = a), (s[n.Memo] = o);
    function c(e) {
      return n.isMemo(e) ? o : s[e.$$typeof] || r;
    }
    var l = Object.defineProperty,
      u = Object.getOwnPropertyNames,
      d = Object.getOwnPropertySymbols,
      f = Object.getOwnPropertyDescriptor,
      p = Object.getPrototypeOf,
      m = Object.prototype;
    function h(e, t, n) {
      if (typeof t != `string`) {
        if (m) {
          var r = p(t);
          r && r !== m && h(e, r, n);
        }
        var a = u(t);
        d && (a = a.concat(d(t)));
        for (var o = c(e), s = c(t), g = 0; g < a.length; ++g) {
          var _ = a[g];
          if (!i[_] && !(n && n[_]) && !(s && s[_]) && !(o && o[_])) {
            var v = f(t, _);
            try {
              l(e, _, v);
            } catch {}
          }
        }
      }
      return e;
    }
    t.exports = h;
  }),
  sr = g(tr());
rr();
var cr = g(or()),
  lr = 1073741823,
  ur =
    typeof globalThis < `u`
      ? globalThis
      : typeof window < `u`
        ? window
        : typeof global < `u`
          ? global
          : {};
function dr() {
  var e = `__global_unique_id__`;
  return (ur[e] = (ur[e] || 0) + 1);
}
function fr(e, t) {
  return e === t ? e !== 0 || 1 / e == 1 / t : e !== e && t !== t;
}
function pr(e) {
  var t = [];
  return {
    on: function (e) {
      t.push(e);
    },
    off: function (e) {
      t = t.filter(function (t) {
        return t !== e;
      });
    },
    get: function () {
      return e;
    },
    set: function (n, r) {
      (e = n),
        t.forEach(function (t) {
          return t(e, r);
        });
    },
  };
}
function mr(e) {
  return Array.isArray(e) ? e[0] : e;
}
function hr(e, t) {
  var n,
    r,
    i = `__create-react-context-` + dr() + `__`,
    a = (function (e) {
      G(n, e);
      function n() {
        var t,
          n = [...arguments];
        return (
          (t = e.call.apply(e, [this].concat(n)) || this),
          (t.emitter = pr(t.props.value)),
          t
        );
      }
      var r = n.prototype;
      return (
        (r.getChildContext = function () {
          var e = {};
          return (e[i] = this.emitter), e;
        }),
        (r.componentWillReceiveProps = function (e) {
          if (this.props.value !== e.value) {
            var n = this.props.value,
              r = e.value,
              i;
            fr(n, r)
              ? (i = 0)
              : ((i = typeof t == `function` ? t(n, r) : lr),
                (i |= 0),
                i !== 0 && this.emitter.set(e.value, i));
          }
        }),
        (r.render = function () {
          return this.props.children;
        }),
        n
      );
    })(C.Component);
  a.childContextTypes = ((n = {}), (n[i] = En.default.object.isRequired), n);
  var o = (function (t) {
    G(n, t);
    function n() {
      var e,
        n = [...arguments];
      return (
        (e = t.call.apply(t, [this].concat(n)) || this),
        (e.observedBits = void 0),
        (e.state = { value: e.getValue() }),
        (e.onUpdate = function (t, n) {
          (e.observedBits | 0) & n && e.setState({ value: e.getValue() });
        }),
        e
      );
    }
    var r = n.prototype;
    return (
      (r.componentWillReceiveProps = function (e) {
        var t = e.observedBits;
        this.observedBits = t ?? lr;
      }),
      (r.componentDidMount = function () {
        this.context[i] && this.context[i].on(this.onUpdate);
        var e = this.props.observedBits;
        this.observedBits = e ?? lr;
      }),
      (r.componentWillUnmount = function () {
        this.context[i] && this.context[i].off(this.onUpdate);
      }),
      (r.getValue = function () {
        return this.context[i] ? this.context[i].get() : e;
      }),
      (r.render = function () {
        return mr(this.props.children)(this.state.value);
      }),
      n
    );
  })(C.Component);
  return (
    (o.contextTypes = ((r = {}), (r[i] = En.default.object), r)),
    { Provider: a, Consumer: o }
  );
}
var gr = C.createContext || hr,
  _r = function (e) {
    var t = gr();
    return (t.displayName = e), t;
  },
  vr = _r(`Router-History`),
  $ = _r(`Router`),
  yr = (function (e) {
    G(t, e),
      (t.computeRootMatch = function (e) {
        return { path: `/`, url: `/`, params: {}, isExact: e === `/` };
      });
    function t(t) {
      var n = e.call(this, t) || this;
      return (
        (n.state = { location: t.history.location }),
        (n._isMounted = !1),
        (n._pendingLocation = null),
        t.staticContext ||
          (n.unlisten = t.history.listen(function (e) {
            n._pendingLocation = e;
          })),
        n
      );
    }
    var n = t.prototype;
    return (
      (n.componentDidMount = function () {
        var e = this;
        (this._isMounted = !0),
          this.unlisten && this.unlisten(),
          this.props.staticContext ||
            (this.unlisten = this.props.history.listen(function (t) {
              e._isMounted && e.setState({ location: t });
            })),
          this._pendingLocation &&
            this.setState({ location: this._pendingLocation });
      }),
      (n.componentWillUnmount = function () {
        this.unlisten &&
          (this.unlisten(),
          (this._isMounted = !1),
          (this._pendingLocation = null));
      }),
      (n.render = function () {
        return C.createElement(
          $.Provider,
          {
            value: {
              history: this.props.history,
              location: this.state.location,
              match: t.computeRootMatch(this.state.location.pathname),
              staticContext: this.props.staticContext,
            },
          },
          C.createElement(vr.Provider, {
            children: this.props.children || null,
            value: this.props.history,
          }),
        );
      }),
      t
    );
  })(C.Component);
C.Component;
var br = (function (e) {
  G(t, e);
  function t() {
    return e.apply(this, arguments) || this;
  }
  var n = t.prototype;
  return (
    (n.componentDidMount = function () {
      this.props.onMount && this.props.onMount.call(this, this);
    }),
    (n.componentDidUpdate = function (e) {
      this.props.onUpdate && this.props.onUpdate.call(this, this, e);
    }),
    (n.componentWillUnmount = function () {
      this.props.onUnmount && this.props.onUnmount.call(this, this);
    }),
    (n.render = function () {
      return null;
    }),
    t
  );
})(C.Component);
function xr(e) {
  var t = e.message,
    n = e.when,
    r = n === void 0 || n;
  return C.createElement($.Consumer, null, function (e) {
    if ((!e && J(!1), !r || e.staticContext)) return null;
    var n = e.history.block;
    return C.createElement(br, {
      onMount: function (e) {
        e.release = n(t);
      },
      onUpdate: function (e, r) {
        r.message !== t && (e.release(), (e.release = n(t)));
      },
      onUnmount: function (e) {
        e.release();
      },
      message: t,
    });
  });
}
var Sr = {},
  Cr = 1e4,
  wr = 0;
function Tr(e) {
  if (Sr[e]) return Sr[e];
  var t = sr.default.compile(e);
  return wr < Cr && ((Sr[e] = t), wr++), t;
}
function Er(e, t) {
  return (
    e === void 0 && (e = `/`),
    t === void 0 && (t = {}),
    e === `/` ? e : Tr(e)(t, { pretty: !0 })
  );
}
function Dr(e) {
  var t = e.computedMatch,
    n = e.to,
    r = e.push,
    i = r !== void 0 && r;
  return C.createElement($.Consumer, null, function (e) {
    !e && J(!1);
    var r = e.history,
      a = e.staticContext,
      o = i ? r.push : r.replace,
      s = Z(
        t
          ? typeof n == `string`
            ? Er(n, t.params)
            : U({}, n, { pathname: Er(n.pathname, t.params) })
          : n,
      );
    return a
      ? (o(s), null)
      : C.createElement(br, {
          onMount: function () {
            o(s);
          },
          onUpdate: function (e, t) {
            var n = Z(t.to);
            In(n, U({}, s, { key: n.key })) || o(s);
          },
          to: n,
        });
  });
}
var Or = {},
  kr = 1e4,
  Ar = 0;
function jr(e, t) {
  var n = `` + t.end + t.strict + t.sensitive,
    r = Or[n] || (Or[n] = {});
  if (r[e]) return r[e];
  var i = [],
    a = { regexp: (0, sr.default)(e, i, t), keys: i };
  return Ar < kr && ((r[e] = a), Ar++), a;
}
function Mr(e, t) {
  t === void 0 && (t = {}),
    (typeof t == `string` || Array.isArray(t)) && (t = { path: t });
  var n = t,
    r = n.path,
    i = n.exact,
    a = i !== void 0 && i,
    o = n.strict,
    s = o !== void 0 && o,
    c = n.sensitive,
    l = c !== void 0 && c;
  return [].concat(r).reduce(function (t, n) {
    if (!n && n !== ``) return null;
    if (t) return t;
    var r = jr(n, { end: a, strict: s, sensitive: l }),
      i = r.regexp,
      o = r.keys,
      c = i.exec(e);
    if (!c) return null;
    var u = c[0],
      d = c.slice(1),
      f = e === u;
    return a && !f
      ? null
      : {
          path: n,
          url: n === `/` && u === `` ? `/` : u,
          isExact: f,
          params: o.reduce(function (e, t, n) {
            return (e[t.name] = d[n]), e;
          }, {}),
        };
  }, null);
}
function Nr(e) {
  return C.Children.count(e) === 0;
}
var Pr = (function (e) {
  G(t, e);
  function t() {
    return e.apply(this, arguments) || this;
  }
  var n = t.prototype;
  return (
    (n.render = function () {
      var e = this;
      return C.createElement($.Consumer, null, function (t) {
        !t && J(!1);
        var n = e.props.location || t.location,
          r = e.props.computedMatch
            ? e.props.computedMatch
            : e.props.path
              ? Mr(n.pathname, e.props)
              : t.match,
          i = U({}, t, { location: n, match: r }),
          a = e.props,
          o = a.children,
          s = a.component,
          c = a.render;
        return (
          Array.isArray(o) && Nr(o) && (o = null),
          C.createElement(
            $.Provider,
            { value: i },
            i.match
              ? o
                ? typeof o == `function`
                  ? o(i)
                  : o
                : s
                  ? C.createElement(s, i)
                  : c
                    ? c(i)
                    : null
              : typeof o == `function`
                ? o(i)
                : null,
          )
        );
      });
    }),
    t
  );
})(C.Component);
C.Component;
var Fr = (function (e) {
  G(t, e);
  function t() {
    return e.apply(this, arguments) || this;
  }
  var n = t.prototype;
  return (
    (n.render = function () {
      var e = this;
      return C.createElement($.Consumer, null, function (t) {
        !t && J(!1);
        var n = e.props.location || t.location,
          r,
          i;
        return (
          C.Children.forEach(e.props.children, function (e) {
            if (i == null && C.isValidElement(e)) {
              r = e;
              var a = e.props.path || e.props.from;
              i = a ? Mr(n.pathname, U({}, e.props, { path: a })) : t.match;
            }
          }),
          i ? C.cloneElement(r, { location: n, computedMatch: i }) : null
        );
      });
    }),
    t
  );
})(C.Component);
function Ir(e) {
  var t = `withRouter(` + (e.displayName || e.name) + `)`,
    n = function (t) {
      var n = t.wrappedComponentRef,
        r = Sn(t, [`wrappedComponentRef`]);
      return C.createElement($.Consumer, null, function (t) {
        return !t && J(!1), C.createElement(e, U({}, r, t, { ref: n }));
      });
    };
  return (n.displayName = t), (n.WrappedComponent = e), (0, cr.default)(n, e);
}
var Lr = C.useContext;
function Rr() {
  return Lr(vr);
}
function zr() {
  return Lr($).location;
}
function Br() {
  var e = Lr($).match;
  return e ? e.params : {};
}
export {
  Dt as A,
  P as B,
  xn as C,
  Pt as D,
  It as E,
  ct as F,
  k as H,
  N as I,
  I as L,
  vt as M,
  et as N,
  z as O,
  tt as P,
  Qe as R,
  U as S,
  Kt as T,
  $e as V,
  J as _,
  Fr as a,
  W as b,
  Rr as c,
  Ir as d,
  or as f,
  X as g,
  Z as h,
  yr as i,
  ht as j,
  At as k,
  zr as l,
  $n as m,
  Dr as n,
  $ as o,
  qn as p,
  Pr as r,
  Mr as s,
  xr as t,
  Br as u,
  Tn as v,
  rn as w,
  Sn as x,
  G as y,
  St as z,
};
