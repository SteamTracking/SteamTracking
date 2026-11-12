/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import {
  At as e,
  Gt as t,
  Jt as n,
  Kt as r,
  Ut as i,
  Wt as a,
  Xt as o,
  Yt as s,
  Zt as c,
  bt as l,
  en as u,
  qt as d,
  sn as f,
  tn as p,
  vt as m,
  yt as h,
} from "./chunk~de7f2df91c.js";
import {
  B as g,
  F as _,
  I as v,
  L as ee,
  M as y,
  N as te,
  P as b,
  R as x,
  z as S,
} from "./chunk~44f252525d.js";
import { n as ne } from "./chunk~f8b6a4beb3.js";
import { i as C } from "./chunk~8fb30ea08b.js";
import { t as w } from "./chunk~ede3e357a2.js";
import { t as re } from "./chunk~4406a7b793.js";
function T(e, t) {
  return e.split(t);
}
var E = f(c(), 1),
  D = class e extends E.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.released_only || i(e.M()),
        E.Message.initialize(this, t, 0, -1, [4, 10, 11, 15, 16, 45], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            released_only: { n: 1, br: r.readBool, bw: o.writeBool },
            coming_soon_only: { n: 2, br: r.readBool, bw: o.writeBool },
            type_filters: { n: 3, c: ie },
            exclude_from: {
              n: 4,
              r: !0,
              q: !0,
              br: r.readEnum,
              pbr: r.readPackedEnum,
              bw: o.writeRepeatedEnum,
            },
            predefined_filter: { n: 5, c: ae },
            tagids_must_match: { n: 10, c: oe, r: !0, q: !0 },
            tagids_exclude: {
              n: 11,
              r: !0,
              q: !0,
              br: r.readInt32,
              pbr: r.readPackedInt32,
              bw: o.writeRepeatedInt32,
            },
            price_filters: { n: 12, c: se },
            release_date_filter: { n: 13, c: ce },
            discounted_dates_filter: { n: 17, c: le },
            compatibility_filter: { n: 18, c: ue },
            review_score_filter: { n: 19, c: de },
            discount_ends_within_hours: {
              n: 20,
              br: r.readUint32,
              bw: o.writeUint32,
            },
            content_descriptors_must_match: {
              n: 15,
              r: !0,
              q: !0,
              br: r.readEnum,
              pbr: r.readPackedEnum,
              bw: o.writeRepeatedEnum,
            },
            content_descriptors_excluded: {
              n: 16,
              r: !0,
              q: !0,
              br: r.readEnum,
              pbr: r.readPackedEnum,
              bw: o.writeRepeatedEnum,
            },
            regional_top_n_sellers: {
              n: 40,
              br: r.readInt32,
              bw: o.writeInt32,
            },
            global_top_n_sellers: { n: 41, br: r.readInt32, bw: o.writeInt32 },
            regional_long_term_top_n_sellers: {
              n: 42,
              br: r.readInt32,
              bw: o.writeInt32,
            },
            global_long_term_top_n_sellers: {
              n: 43,
              br: r.readInt32,
              bw: o.writeInt32,
            },
            store_page_filter: { n: 44, c: g },
            parent_appids: {
              n: 45,
              r: !0,
              q: !0,
              br: r.readUint32,
              pbr: r.readPackedUint32,
              bw: o.writeRepeatedUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(n) {
      return t(e.M(), n);
    }
    static deserializeBinary(t) {
      let n = new E.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return a(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new E.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new E.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStoreQueryFilters`;
    }
  },
  ie = class e extends E.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.include_apps || i(e.M()),
        E.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            include_apps: { n: 1, br: r.readBool, bw: o.writeBool },
            include_packages: { n: 2, br: r.readBool, bw: o.writeBool },
            include_bundles: { n: 3, br: r.readBool, bw: o.writeBool },
            include_games: { n: 10, br: r.readBool, bw: o.writeBool },
            include_demos: { n: 11, br: r.readBool, bw: o.writeBool },
            include_mods: { n: 12, br: r.readBool, bw: o.writeBool },
            include_dlc: { n: 13, br: r.readBool, bw: o.writeBool },
            include_software: { n: 14, br: r.readBool, bw: o.writeBool },
            include_video: { n: 15, br: r.readBool, bw: o.writeBool },
            include_hardware: { n: 16, br: r.readBool, bw: o.writeBool },
            include_series: { n: 17, br: r.readBool, bw: o.writeBool },
            include_music: { n: 18, br: r.readBool, bw: o.writeBool },
            dlc_for_appid: { n: 19, br: r.readUint32, bw: o.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(n) {
      return t(e.M(), n);
    }
    static deserializeBinary(t) {
      let n = new E.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return a(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new E.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new E.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStoreQueryFilters_TypeFilters`;
    }
  },
  ae = class e extends E.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.filter_type || i(e.M()),
        E.Message.initialize(this, t, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            filter_type: { n: 1, br: r.readEnum, bw: o.writeEnum },
            language_preferences: {
              n: 2,
              r: !0,
              q: !0,
              br: r.readInt32,
              pbr: r.readPackedInt32,
              bw: o.writeRepeatedInt32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(n) {
      return t(e.M(), n);
    }
    static deserializeBinary(t) {
      let n = new E.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return a(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new E.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new E.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStoreQueryFilters_PredefinedFilter`;
    }
  },
  oe = class e extends E.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.tagids || i(e.M()),
        E.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            tagids: {
              n: 1,
              r: !0,
              q: !0,
              br: r.readInt32,
              pbr: r.readPackedInt32,
              bw: o.writeRepeatedInt32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(n) {
      return t(e.M(), n);
    }
    static deserializeBinary(t) {
      let n = new E.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return a(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new E.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new E.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStoreQueryFilters_TagFilter`;
    }
  },
  se = class e extends E.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.only_free_items || i(e.M()),
        E.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            only_free_items: { n: 1, br: r.readBool, bw: o.writeBool },
            exclude_free_items: { n: 2, br: r.readBool, bw: o.writeBool },
            min_discount_percent: { n: 3, br: r.readInt32, bw: o.writeInt32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(n) {
      return t(e.M(), n);
    }
    static deserializeBinary(t) {
      let n = new E.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return a(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new E.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new E.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStoreQueryFilters_PriceFilters`;
    }
  },
  ce = class e extends E.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.release_date_type || i(e.M()),
        E.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            release_date_type: { n: 1, br: r.readEnum, bw: o.writeEnum },
            start_date: { n: 2, br: r.readInt32, bw: o.writeInt32 },
            end_date: { n: 3, br: r.readInt32, bw: o.writeInt32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(n) {
      return t(e.M(), n);
    }
    static deserializeBinary(t) {
      let n = new E.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return a(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new E.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new E.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStoreQueryFilters_ReleaseDateFilter`;
    }
  },
  le = class e extends E.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.start_date || i(e.M()),
        E.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            start_date: { n: 1, br: r.readUint32, bw: o.writeUint32 },
            end_date: { n: 2, br: r.readUint32, bw: o.writeUint32 },
            allow_partial_overlap: { n: 3, br: r.readBool, bw: o.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(n) {
      return t(e.M(), n);
    }
    static deserializeBinary(t) {
      let n = new E.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return a(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new E.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new E.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStoreQueryFilters_DiscountedDatesFilter`;
    }
  },
  ue = class e extends E.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.device || i(e.M()),
        E.Message.initialize(this, t, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            device: { n: 1, br: r.readEnum, bw: o.writeEnum },
            categories: {
              n: 2,
              r: !0,
              q: !0,
              br: r.readEnum,
              pbr: r.readPackedEnum,
              bw: o.writeRepeatedEnum,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(n) {
      return t(e.M(), n);
    }
    static deserializeBinary(t) {
      let n = new E.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return a(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new E.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new E.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStoreQueryFilters_CompatibilityFilter`;
    }
  },
  de = class e extends E.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.min_score || i(e.M()),
        E.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            min_score: { n: 1, br: r.readEnum, bw: o.writeEnum },
            allow_unreviewed: { n: 2, br: r.readBool, bw: o.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(n) {
      return t(e.M(), n);
    }
    static deserializeBinary(t) {
      let n = new E.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return a(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new E.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new E.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStoreQueryFilters_ReviewScoreFilter`;
    }
  },
  fe = class e extends E.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.start || i(e.M()),
        E.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            start: { n: 1, d: 0, br: r.readInt32, bw: o.writeInt32 },
            count: { n: 2, d: 10, br: r.readInt32, bw: o.writeInt32 },
            sort: { n: 10, d: 0, br: r.readEnum, bw: o.writeEnum },
            filters: { n: 20, c: D },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(n) {
      return t(e.M(), n);
    }
    static deserializeBinary(t) {
      let n = new E.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return a(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new E.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new E.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStoreQueryParams`;
    }
  },
  pe = class e extends E.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.id || i(e.M()),
        E.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            id: { n: 1, c: S },
            score: { n: 2, br: r.readDouble, bw: o.writeDouble },
            spellcheck_generated_result: {
              n: 3,
              br: r.readBool,
              bw: o.writeBool,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(n) {
      return t(e.M(), n);
    }
    static deserializeBinary(t) {
      let n = new E.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return a(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new E.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new E.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStoreQueryPerResultMetadata`;
    }
  },
  O = class e extends E.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.total_matching_records || i(e.M()),
        E.Message.initialize(this, t, 0, -1, [4, 5], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            total_matching_records: { n: 1, br: r.readInt32, bw: o.writeInt32 },
            start: { n: 2, br: r.readInt32, bw: o.writeInt32 },
            count: { n: 3, br: r.readInt32, bw: o.writeInt32 },
            per_result_metadata: { n: 4, c: pe, r: !0, q: !0 },
            spellcheck_suggestions: {
              n: 5,
              r: !0,
              q: !0,
              br: r.readString,
              bw: o.writeRepeatedString,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(n) {
      return t(e.M(), n);
    }
    static deserializeBinary(t) {
      let n = new E.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return a(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new E.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new E.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStoreQueryResultMetadata`;
    }
  },
  me = class e extends E.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.query_name || i(e.M()),
        E.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            query_name: { n: 1, br: r.readString, bw: o.writeString },
            query: { n: 2, c: fe },
            context: { n: 3, c: _ },
            data_request: { n: 4, c: v },
            override_country_code: {
              n: 5,
              br: r.readString,
              bw: o.writeString,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(n) {
      return t(e.M(), n);
    }
    static deserializeBinary(t) {
      let n = new E.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return a(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new E.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new E.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStoreQuery_Query_Request`;
    }
  },
  he = class e extends E.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.metadata || i(e.M()),
        E.Message.initialize(this, t, 0, -1, [2, 3], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            metadata: { n: 1, c: O },
            ids: { n: 2, c: S, r: !0, q: !0 },
            store_items: { n: 3, c: x, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(n) {
      return t(e.M(), n);
    }
    static deserializeBinary(t) {
      let n = new E.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return a(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new E.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new E.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStoreQuery_Query_Response`;
    }
  },
  ge = class e extends E.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.query_name || i(e.M()),
        E.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            query_name: { n: 1, br: r.readString, bw: o.writeString },
            context: { n: 2, c: _ },
            search_term: { n: 3, br: r.readString, bw: o.writeString },
            max_results: { n: 4, br: r.readUint32, bw: o.writeUint32 },
            filters: { n: 5, c: D },
            data_request: { n: 6, c: v },
            use_spellcheck: { n: 7, br: r.readBool, bw: o.writeBool },
            search_tags: { n: 8, br: r.readBool, bw: o.writeBool },
            search_creators: { n: 9, br: r.readBool, bw: o.writeBool },
            use_name_match_scoring: { n: 11, br: r.readBool, bw: o.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(n) {
      return t(e.M(), n);
    }
    static deserializeBinary(t) {
      let n = new E.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return a(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new E.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new E.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStoreQuery_SearchSuggestions_Request`;
    }
  },
  _e = class e extends E.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.metadata || i(e.M()),
        E.Message.initialize(this, t, 0, -1, [2, 3], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            metadata: { n: 1, c: O },
            ids: { n: 2, c: S, r: !0, q: !0 },
            store_items: { n: 3, c: x, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(n) {
      return t(e.M(), n);
    }
    static deserializeBinary(t) {
      let n = new E.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return a(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new E.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new E.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStoreQuery_SearchSuggestions_Response`;
    }
  },
  ve = class e extends E.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.query_name || i(e.M()),
        E.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            query_name: { n: 1, br: r.readString, bw: o.writeString },
            context: { n: 2, c: _ },
            data_request: { n: 3, c: v },
            item_id: { n: 4, c: S },
            count: { n: 5, d: 20, br: r.readInt32, bw: o.writeInt32 },
            filters: { n: 6, c: D },
            options: { n: 7, c: ye },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(n) {
      return t(e.M(), n);
    }
    static deserializeBinary(t) {
      let n = new E.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return a(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new E.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new E.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStoreQuery_MoreLikeThis_Request`;
    }
  },
  ye = class e extends E.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.tag_weight || i(e.M()),
        E.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            tag_weight: { n: 1, d: 90, br: r.readFloat, bw: o.writeFloat },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(n) {
      return t(e.M(), n);
    }
    static deserializeBinary(t) {
      let n = new E.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return a(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new E.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new E.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStoreQuery_MoreLikeThis_Request_MoreLikeThisOptions`;
    }
  },
  be = class e extends E.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.metadata || i(e.M()),
        E.Message.initialize(this, t, 0, -1, [2, 3], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            metadata: { n: 1, c: O },
            ids: { n: 2, c: S, r: !0, q: !0 },
            store_items: { n: 3, c: x, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(n) {
      return t(e.M(), n);
    }
    static deserializeBinary(t) {
      let n = new E.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return a(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new E.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new E.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStoreQuery_MoreLikeThis_Response`;
    }
  },
  xe = class e extends E.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.filters || i(e.M()),
        E.Message.initialize(this, t, 0, -1, [6, 7], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            filters: { n: 2, c: g },
            sections: { n: 6, c: Se, r: !0, q: !0 },
            context: { n: 5, c: _ },
            recommended_tags: { n: 7, c: Ce, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(n) {
      return t(e.M(), n);
    }
    static deserializeBinary(t) {
      let n = new E.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return a(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new E.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new E.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStoreQuery_GetItemsByUserRecommendedTags_Request`;
    }
  },
  Se = class e extends E.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.sort || i(e.M()),
        E.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            sort: { n: 1, d: 0, br: r.readEnum, bw: o.writeEnum },
            min_items: { n: 2, br: r.readUint32, bw: o.writeUint32 },
            randomize: { n: 3, br: r.readBool, bw: o.writeBool },
            include_packages: { n: 4, d: !1, br: r.readBool, bw: o.writeBool },
            include_bundles: { n: 5, d: !1, br: r.readBool, bw: o.writeBool },
            include_dlc: { n: 6, br: r.readBool, bw: o.writeBool },
            min_discount_percent: { n: 7, br: r.readInt32, bw: o.writeInt32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(n) {
      return t(e.M(), n);
    }
    static deserializeBinary(t) {
      let n = new E.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return a(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new E.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new E.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStoreQuery_GetItemsByUserRecommendedTags_Request_Section`;
    }
  },
  Ce = class e extends E.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.tagid || i(e.M()),
        E.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            tagid: { n: 1, br: r.readUint32, bw: o.writeUint32 },
            name: { n: 2, br: r.readString, bw: o.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(n) {
      return t(e.M(), n);
    }
    static deserializeBinary(t) {
      let n = new E.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return a(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new E.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new E.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStoreQuery_GetItemsByUserRecommendedTags_Request_RecommendedTag`;
    }
  },
  we = class e extends E.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.sections || i(e.M()),
        E.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { sections: { n: 1, c: Te, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(n) {
      return t(e.M(), n);
    }
    static deserializeBinary(t) {
      let n = new E.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return a(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new E.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new E.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStoreQuery_GetItemsByUserRecommendedTags_Response`;
    }
  },
  Te = class e extends E.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.tagid || i(e.M()),
        E.Message.initialize(this, t, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            tagid: { n: 1, br: r.readUint32, bw: o.writeUint32 },
            store_item_ids: { n: 2, c: S, r: !0, q: !0 },
            tag_name: { n: 3, br: r.readString, bw: o.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(n) {
      return t(e.M(), n);
    }
    static deserializeBinary(t) {
      let n = new E.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return a(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new E.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new E.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStoreQuery_GetItemsByUserRecommendedTags_Response_Section`;
    }
  },
  Ee = class e extends E.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.sort || i(e.M()),
        E.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            sort: { n: 1, d: 0, br: r.readEnum, bw: o.writeEnum },
            max_items: { n: 2, br: r.readUint32, bw: o.writeUint32 },
            randomize: { n: 3, br: r.readBool, bw: o.writeBool },
            include_packages: { n: 4, d: !1, br: r.readBool, bw: o.writeBool },
            include_bundles: { n: 5, d: !1, br: r.readBool, bw: o.writeBool },
            filters: { n: 6, c: g },
            context: { n: 7, c: _ },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(n) {
      return t(e.M(), n);
    }
    static deserializeBinary(t) {
      let n = new E.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return a(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new E.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new E.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStoreQuery_GetItemByUserCombinedTagsPriority_Request`;
    }
  },
  De = class e extends E.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.tagid || i(e.M()),
        E.Message.initialize(this, t, 0, -1, [1, 2, 3], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            tagid: {
              n: 1,
              r: !0,
              q: !0,
              br: r.readUint32,
              pbr: r.readPackedUint32,
              bw: o.writeRepeatedUint32,
            },
            store_item_ids: { n: 2, c: S, r: !0, q: !0 },
            tag_name: {
              n: 3,
              r: !0,
              q: !0,
              br: r.readString,
              bw: o.writeRepeatedString,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(n) {
      return t(e.M(), n);
    }
    static deserializeBinary(t) {
      let n = new E.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return a(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new E.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new E.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStoreQuery_GetItemByUserCombinedTagsPriority_Response`;
    }
  },
  Oe = class e extends E.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.context || i(e.M()),
        E.Message.initialize(this, t, 0, -1, [4], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            context: { n: 1, c: _ },
            flavor: { n: 2, br: r.readEnum, bw: o.writeEnum },
            store_page_filter: { n: 3, c: g },
            excluded_content_descriptors: {
              n: 4,
              r: !0,
              q: !0,
              br: r.readEnum,
              pbr: r.readPackedEnum,
              bw: o.writeRepeatedEnum,
            },
            start: { n: 5, d: 0, br: r.readInt32, bw: o.writeInt32 },
            count: { n: 6, d: 50, br: r.readInt32, bw: o.writeInt32 },
            prioritize_discounts: { n: 7, br: r.readBool, bw: o.writeBool },
            allow_demos: { n: 8, br: r.readBool, bw: o.writeBool },
            request_facet_counts: { n: 9, br: r.readBool, bw: o.writeBool },
            search_term: { n: 10, br: r.readString, bw: o.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(n) {
      return t(e.M(), n);
    }
    static deserializeBinary(t) {
      let n = new E.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return a(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new E.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new E.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStoreQuery_GetSaleBrowserItems_Request`;
    }
  },
  ke = class e extends E.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.ids || i(e.M()),
        E.Message.initialize(this, t, 0, -1, [1, 4], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            ids: { n: 1, c: S, r: !0, q: !0 },
            total_matching: { n: 2, br: r.readInt32, bw: o.writeInt32 },
            more_results_remaining: { n: 3, br: r.readBool, bw: o.writeBool },
            facet_fields: { n: 4, c: je, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(n) {
      return t(e.M(), n);
    }
    static deserializeBinary(t) {
      let n = new E.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return a(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new E.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new E.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStoreQuery_GetSaleBrowserItems_Response`;
    }
  },
  Ae = class e extends E.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.value || i(e.M()),
        E.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            value: { n: 1, br: r.readString, bw: o.writeString },
            count: { n: 2, br: r.readUint32, bw: o.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(n) {
      return t(e.M(), n);
    }
    static deserializeBinary(t) {
      let n = new E.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return a(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new E.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new E.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStoreQuery_GetSaleBrowserItems_Response_FacetValue`;
    }
  },
  je = class e extends E.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.field || i(e.M()),
        E.Message.initialize(this, t, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            field: { n: 1, br: r.readString, bw: o.writeString },
            values: { n: 2, c: Ae, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(n) {
      return t(e.M(), n);
    }
    static deserializeBinary(t) {
      let n = new E.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return a(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new E.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new E.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStoreQuery_GetSaleBrowserItems_Response_FacetField`;
    }
  },
  Me;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(`StoreQuery.Query#1`, l(me, t, n), he, {
      bConstMethod: !0,
      ePrivilege: 1,
      eWebAPIKeyRequirement: 1,
      rgBrowserAPISites: [`partner`, `community`],
    });
  }
  e.Query = t;
  function n(e, t, n) {
    return e.SendMsg(`StoreQuery.SearchSuggestions#1`, l(ge, t, n), _e, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
      rgBrowserAPISites: [`partner`],
    });
  }
  e.SearchSuggestions = n;
  function r(e, t, n) {
    return e.SendMsg(`StoreQuery.MoreLikeThis#1`, l(ve, t, n), be, {
      bConstMethod: !0,
      ePrivilege: 1,
      eWebAPIKeyRequirement: 1,
    });
  }
  e.MoreLikeThis = r;
  function i(e, t, n) {
    return e.SendMsg(
      `StoreQuery.GetItemsByUserRecommendedTags#1`,
      l(xe, t, n),
      we,
      {
        bConstMethod: !0,
        ePrivilege: 1,
        rgBrowserAPISites: [`partner`, `community`],
      },
    );
  }
  e.GetItemsByUserRecommendedTags = i;
  function a(e, t, n) {
    return e.SendMsg(
      `StoreQuery.GetItemByUserCombinedTagsPriority#1`,
      l(Ee, t, n),
      De,
      { bConstMethod: !0, ePrivilege: 1 },
    );
  }
  e.GetItemByUserCombinedTagsPriority = a;
  function o(e, t, n) {
    return e.SendMsg(`StoreQuery.GetSaleBrowserItems#1`, l(Oe, t, n), ke, {
      bConstMethod: !0,
      ePrivilege: 0,
      rgBrowserAPISites: [`store`],
    });
  }
  e.GetSaleBrowserItems = o;
})((Me ||= {}));
function k(e) {
  if (e.bIncludeUnpublished) return `partner-unpublished`;
  if (e.bUsePartnerAPI) return `partner`;
}
function Ne(e, t) {
  t.Body().set_context(Pe(e));
}
function Pe(e) {
  let t = new _();
  return (
    e.bUsePartnerAPI || t.set_country_code(e.country),
    t.set_language(e.language),
    t
  );
}
function Fe(e, t) {
  e.Body().set_data_request(v.fromObject(t));
}
var A = class e extends E.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.getitems_request || i(e.M()),
        E.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            getitems_request: { n: 1, c: y },
            include_unpublished: { n: 2, br: r.readBool, bw: o.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(n) {
      return t(e.M(), n);
    }
    static deserializeBinary(t) {
      let n = new E.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return a(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new E.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new E.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPartnerStoreBrowse_GetItems_Request`;
    }
  },
  j = class e extends E.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.ids || i(e.M()),
        E.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { ids: { n: 1, c: S, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(n) {
      return t(e.M(), n);
    }
    static deserializeBinary(t) {
      let n = new E.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return a(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new E.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new E.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPartnerStoreBrowse_GetCountryRestrictions_Request`;
    }
  },
  Ie = class e extends E.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.results || i(e.M()),
        E.Message.initialize(this, t, 0, -1, [1, 2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            results: { n: 1, c: Le, r: !0, q: !0 },
            no_info: { n: 2, c: S, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(n) {
      return t(e.M(), n);
    }
    static deserializeBinary(t) {
      let n = new E.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return a(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new E.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new E.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPartnerStoreBrowse_GetCountryRestrictions_Response`;
    }
  },
  Le = class e extends E.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.id || i(e.M()),
        E.Message.initialize(this, t, 0, -1, [3, 4], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            id: { n: 1, c: S },
            no_restrictions: { n: 2, br: r.readBool, bw: o.writeBool },
            allowed_countries: {
              n: 3,
              r: !0,
              q: !0,
              br: r.readString,
              bw: o.writeRepeatedString,
            },
            restricted_countries: {
              n: 4,
              r: !0,
              q: !0,
              br: r.readString,
              bw: o.writeRepeatedString,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(n) {
      return t(e.M(), n);
    }
    static deserializeBinary(t) {
      let n = new E.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return a(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new E.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new E.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPartnerStoreBrowse_GetCountryRestrictions_Response_CCountryRestrictions`;
    }
  },
  M;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(`PartnerStoreBrowse.GetItems#1`, l(A, t, n), te, {
      bConstMethod: !0,
      ePrivilege: 1,
      rgBrowserAPISites: [`partner`, `community`],
    });
  }
  e.GetItems = t;
  function n(e, t, n) {
    return e.SendMsg(
      `PartnerStoreBrowse.GetCountryRestrictions#1`,
      l(j, t, n),
      Ie,
      { bConstMethod: !0, ePrivilege: 1, rgBrowserAPISites: [`partner`] },
    );
  }
  e.GetCountryRestrictions = n;
})((M ||= {}));
function N(e) {
  return `appid` in e
    ? `app_${e.appid}`
    : `packageid` in e
      ? `package_${e.packageid}`
      : `bundleid` in e
        ? `bundle_${e.bundleid}`
        : `tagid` in e
          ? `tag_${e.tagid}`
          : `creatorid` in e
            ? `creator_${e.creatorid}`
            : `hubcategoryid` in e
              ? `hubcategory_${e.hubcategoryid}`
              : `salepagegid` in e
                ? `salepage_${e.salepagegid}`
                : (p(e, `Unknown store item id type`), ``);
}
function Re(e, t) {
  switch (e) {
    case 0:
      return `app_${t}`;
    case 1:
      return `package_${t}`;
    case 2:
      return `bundle_${t}`;
    case 4:
      return `tag_${t}`;
    case 5:
      return `creator_${t}`;
    case 6:
      return `hubcategory_${t}`;
    case 7:
      return `salepage_${t}`;
    case 3:
    case -1:
      return ``;
    default:
      return (p(e, `Unknown EStoreItemType ${e} ${b(e)} `), ``);
  }
}
var P = /^(app|package|bundle|mtx|tag|creator|hubcategory|salepage)_(\d*)$/;
function ze(e) {
  let t = e.match(P);
  if (t)
    switch (t[1]) {
      case `app`:
        return { appid: parseInt(t[2]) };
      case `package`:
        return { packageid: parseInt(t[2]) };
      case `bundle`:
        return { bundleid: parseInt(t[2]) };
      case `tag`:
        return { tagid: parseInt(t[2]) };
      case `creator`:
        return { creatorid: parseInt(t[2]) };
      case `hubcategory`:
        return { hubcategoryid: parseInt(t[2]) };
      case `salepage`:
        return { salepagegid: t[2] };
    }
  u(!1, `Failed to parse StoreItemID ${e}`);
}
function Be(e) {
  let t = e.match(P);
  if (t)
    switch (t[1]) {
      case `app`:
        return { item_type: 0, id: parseInt(t[2]) };
      case `package`:
        return { item_type: 1, id: parseInt(t[2]) };
      case `bundle`:
        return { item_type: 2, id: parseInt(t[2]) };
      case `tag`:
        return { item_type: 4, id: parseInt(t[2]) };
      case `creator`:
        return { item_type: 5, id: parseInt(t[2]) };
      case `hubcategory`:
        return { item_type: 6, id: parseInt(t[2]) };
      case `salepage`:
        return { item_type: 7, id: 0, gid: t[2] };
    }
  return { item_type: -1, id: t ? parseInt(t[2]) : 0 };
}
function Ve(e) {
  if (e) {
    if (`appid` in e) return { item_type: 0, id: e.appid };
    if (`packageid` in e) return { item_type: 1, id: e.packageid };
    if (`bundleid` in e) return { item_type: 2, id: e.bundleid };
    if (`tagid` in e) return { item_type: 4, id: e.tagid };
    if (`creatorid` in e) return { item_type: 5, id: e.creatorid };
    if (`hubcategoryid` in e) return { item_type: 6, id: e.hubcategoryid };
    if (`salepagegid` in e) return { item_type: 7, id: 0, gid: e.salepagegid };
    p(e, `Unknown store item id type`);
  }
  return { item_type: -1, id: 0 };
}
function F(e) {
  let t = e.item_type ?? -1,
    n = e.id || 0;
  switch (t) {
    case 0:
      return { appid: n };
    case 1:
      return { packageid: n };
    case 2:
      return { bundleid: n };
    case 4:
      return { tagid: n };
    case 5:
      return { creatorid: n };
    case 6:
      return { hubcategoryid: n };
    case 7:
      return e.gid ? { salepagegid: e.gid } : void 0;
    case 3:
    case -1:
      return;
    default:
      p(t, `Unknown EStoreItemType ${t} ${b(t)} `);
      return;
  }
}
var He = f(re(), 1);
function Ue(e, t, n, r, i = !1) {
  u(
    !t.bIncludeUnpublished || !!t.bUsePartnerAPI,
    `bIncludeUnpublished requires bUsePartnerAPI`,
  );
  let a = new He.default(
    async (n) => {
      let a = new Set(),
        o = new Map(),
        s = new Set();
      s.add(`default_info`);
      let c = {};
      if (
        (n.forEach((e) => {
          let [t, n = `default_info`] = T(e, `|`);
          (a.add(t),
            s.has(n) ||
              (n == `top_tags`
                ? (c.include_tag_count = 20)
                : n != `default_info` && (c[n] = !0),
              s.add(n)));
          let r = o.get(t);
          (r || ((r = new Set()), o.set(t, r)), r.add(n));
        }),
        c.include_included_items)
      ) {
        let { include_included_items: e, ...t } = c;
        c.included_item_data_request = t;
      }
      let l = h.Init(y);
      (Ne(t, l), Fe(l, c));
      let u = [];
      a.forEach((e) => {
        let t = ze(e);
        t && (l.Body().add_ids(S.fromObject(t)), u.push(e));
      });
      let d;
      if (t.bUsePartnerAPI) {
        let n = h.Init(A);
        (n.Body().set_getitems_request(l.Body()),
          n.Body().set_include_unpublished(!!t.bIncludeUnpublished),
          (d = await M.GetItems(e, n)));
      } else d = await ee.GetItems(e, l);
      if (i && !d.BSuccess())
        throw `Error loading store items: ${d.GetErrorMessage()}`;
      let f = new Map();
      return (
        d
          .Body()
          .store_items()
          .forEach((e, t) => {
            let n = e.item_type(),
              r = n === void 0 ? u[t] : Re(n, e.gid() ?? e.id());
            r && f.set(r, e);
          }),
        r && We(f, s, o, c.included_item_data_request, r),
        n.map((e) => {
          let [t] = T(e, `|`),
            n = f.get(t);
          return n ? n.toObject() : { ...Be(t), success: 2 };
        })
      );
    },
    { maxBatchSize: 500, cache: !1, ...n },
  );
  return ((a.cacheScope = k(t)), a);
}
function We(e, t, n, r, i) {
  e.forEach((e, a) => {
    let o = n.get(a);
    if ((u(o, `Missing request data for ${a}`), !o)) return;
    let s = !1,
      c = {};
    if (
      (t.forEach((e) => {
        o.has(e) ||
          ((s = !0),
          e == `top_tags`
            ? (c.include_tag_count = 20)
            : e && e != `default_info` && (c[e] = !0));
      }),
      c.include_included_items)
    ) {
      let { include_included_items: e, ...t } = c;
      c.included_item_data_request = t;
    }
    s && i(e, c);
    let l = e.included_items(!1);
    if (o.has(`include_included_items`) && r && l)
      for (let e of [
        ...l.included_apps(),
        ...l.included_packages(),
        ...l.included_bundles(),
        ...l.included_creators(),
      ])
        i(e, r);
  });
}
function Ge(e) {
  let t = $();
  return w(W(t, e));
}
function Ke(e) {
  return I(e, W);
}
function qe(e) {
  return I(e, L, `include_assets`);
}
function I(e, t, n) {
  let r = $(),
    i = C(),
    a = e && `packageid` in e && !!e.packageid,
    o;
  if (a) {
    let t = i.getQueryData(q(e, `default_info`, r.cacheScope));
    t &&
      t.included_appids?.length == 1 &&
      (o = { appid: t.included_appids[0] });
  }
  let { data: s } = w({ ...Je(r, e, n), enabled: a && !o });
  return (s && s.length == 1 && (o = { appid: s[0] }), w(t(r, a && o ? o : e)));
}
function Je(e, t, n) {
  let r = t && `appid` in t && !!t.appid;
  return {
    queryKey: q(t, `include_included_items`, e.cacheScope),
    queryFn: async () => (
      n && X(e, t, n).catch(() => {}),
      (await X(e, t, `include_included_items`)).included_appids ?? []
    ),
    initialData: r ? [t.appid] : void 0,
    enabled: !r,
  };
}
function Ye(e, t, n, r) {
  e.setQueryData(q(t, `include_included_items`, r), n.included_appids ?? []);
}
function Xe(e) {
  let t = $();
  return w(lt(t, e));
}
function Ze(e) {
  let t = $();
  return w(G(t, e));
}
function Qe(e) {
  let t = $();
  return w(K(t, e));
}
function $e(e) {
  let t = $();
  return w(e && `bundleid` in e ? G(t, e) : Nt(t, e));
}
function et(e, t = !1) {
  let n = $();
  return w(t ? vt(n, e) : L(n, e));
}
function tt(e) {
  let t = $();
  return w(R(t, e));
}
function nt(e) {
  let t = $();
  return w(mt(t, e));
}
function rt(e) {
  let t = $();
  return w(gt(t, e));
}
function it(e) {
  let t = $();
  return w(bt(t, e));
}
function at(e) {
  let t = $();
  return w(St(t, e));
}
function ot(e) {
  let t = $();
  return w(z(t, e));
}
function st(e) {
  let t = $();
  return w(B(t, e));
}
function ct(e) {
  let t = $();
  return w(Et(t, e));
}
function lt(e, t) {
  return H(e, t, `include_basic_info`, `basic_info`);
}
function ut(e, t, n, r) {
  U(e, t, n, `include_basic_info`, `basic_info`, r);
}
function dt(e, t, n, r) {
  U(e, t, n, `include_full_description`, `full_description_bbcode`, r);
}
function L(e, t) {
  return H(e, t, `include_assets`, `assets`);
}
function ft(e, t, n, r) {
  U(e, t, n, `include_assets`, `assets`, r);
}
function R(e, t) {
  return H(e, t, `include_screenshots`, `screenshots`);
}
function pt(e, t, n, r) {
  U(e, t, n, `include_screenshots`, `screenshots`, r);
}
function mt(e, t) {
  return H(e, t, `include_links`, `links`);
}
function ht(e, t, n, r) {
  U(e, t, n, `include_links`, `links`, r);
}
function gt(e, t) {
  return H(e, t, `include_trailers`, `trailers`);
}
function _t(e, t, n, r) {
  U(e, t, n, `include_trailers`, `trailers`, r);
}
function vt(e, t) {
  return H(
    e,
    t,
    `include_assets_without_overrides`,
    `assets_without_overrides`,
  );
}
function yt(e, t, n, r) {
  U(e, t, n, `include_assets_without_overrides`, `assets_without_overrides`, r);
}
function bt(e, t) {
  return H(e, t, `include_reviews`, `reviews`);
}
function xt(e, t, n, r) {
  U(e, t, n, `include_reviews`, `reviews`, r);
}
function St(e, t) {
  return H(e, t, `include_release`, `release`);
}
function Ct(e, t, n, r) {
  U(e, t, n, `include_release`, `release`, r);
}
function z(e, t) {
  return H(e, t, `top_tags`, `tags`);
}
function wt(e, t, n, r) {
  U(e, t, n, `top_tags`, `tags`, r);
}
function B(e, t) {
  return H(e, t, `include_platforms`, `platforms`);
}
function Tt(e, t, n, r) {
  U(e, t, n, `include_platforms`, `platforms`, r);
}
function Et(e, t) {
  return H(e, t, `apply_user_filters`, `user_filter_failure`);
}
function Dt(e, t, n, r) {
  U(e, t, n, `apply_user_filters`, `user_filter_failure`, r);
}
function Ot(e, t, n, r) {
  e.setQueryData(q(t, `include_all_purchase_options`, r), {
    purchase_options: n.purchase_options,
    package_groups: n.package_groups,
    purchase_notes: n.purchase_notes,
  });
}
function kt(e, t, n, r) {
  U(e, t, n, `include_supported_languages`, `supported_languages`, r);
}
function At(e, t, n, r) {
  U(e, t, n, `include_extra_details`, `extra_details`, r);
}
function jt(e, t, n, r) {
  U(e, t, n, `include_ratings`, `game_rating`, r);
}
function Mt(e, t, n, r) {
  U(e, t, n, `include_optin_registration_tags`, `optin_registration_tags`, r);
}
function V(e) {
  return e
    ? `appid` in e && !e.appid
      ? (u(!1, `Invalid appid passed to useStoreItem`), !1)
      : `bundleid` in e && !e.bundleid
        ? (u(!1, `Invalid bundleid passed to useStoreItem`), !1)
        : !0
    : !1;
}
function H(e, t, n, r) {
  return {
    queryKey: q(t, n, e.cacheScope),
    queryFn: async () => (await X(e, t, n))[r] || null,
    staleTime: 216e5,
    enabled: V(t),
  };
}
function U(e, t, n, r, i, a) {
  e.setQueryData(q(t, r, a), n[i] ?? null);
}
function W(e, t) {
  return {
    queryKey: q(t, `default_info`, e.cacheScope),
    queryFn: async () => Y(await X(e, t, `default_info`)),
    staleTime: 216e5,
    enabled: V(t),
  };
}
function G(e, t) {
  return {
    ...W(e, t),
    select: (e) => e.best_purchase_option || null,
    staleTime: 6e5,
  };
}
function Nt(e, t) {
  return {
    ...K(e, t),
    select: (e) =>
      e?.purchase_options && e.purchase_options.length > 0
        ? e.purchase_options[0]
        : null,
    staleTime: 6e5,
  };
}
function K(e, t) {
  let n = `include_all_purchase_options`;
  return {
    queryKey: q(t, n, e.cacheScope),
    queryFn: async () => {
      let r = await X(e, t, n);
      return {
        purchase_options: r.purchase_options,
        package_groups: r.package_groups,
        purchase_notes: r.purchase_notes,
      };
    },
    staleTime: 6e5,
    enabled: V(t),
  };
}
var Pt = `StoreItem`;
function q(e, t, n) {
  let r = [Pt, e && N(e), t];
  return (n && r.push(n), r);
}
function J(e, t, n, r) {
  let i = F(t);
  i &&
    (It(e, i, t, r),
    n.include_basic_info && ut(e, i, t, r),
    n.include_assets && ft(e, i, t, r),
    n.include_screenshots && pt(e, i, t, r),
    n.include_links && ht(e, i, t, r),
    n.include_trailers && _t(e, i, t, r),
    n.include_assets_without_overrides && yt(e, i, t, r),
    n.include_reviews && xt(e, i, t, r),
    n.include_release && Ct(e, i, t, r),
    n.include_tag_count && n.include_tag_count > 0 && wt(e, i, t, r),
    n.include_platforms && Tt(e, i, t, r),
    n.apply_user_filters && Dt(e, i, t, r),
    n.include_all_purchase_options && Ot(e, i, t, r),
    n.include_full_description && dt(e, i, t, r),
    n.include_supported_languages && kt(e, i, t, r),
    n.include_extra_details && At(e, i, t, r),
    n.include_ratings && jt(e, i, t, r),
    n.include_optin_registration_tags && Mt(e, i, t, r),
    n.include_included_items && Ye(e, i, t, r),
    n.include_included_items &&
      n.included_item_data_request &&
      (t.included_items?.included_apps?.forEach((t) =>
        J(e, t, n.included_item_data_request, r),
      ),
      t.included_items?.included_packages?.forEach((t) =>
        J(e, t, n.included_item_data_request, r),
      ),
      t.included_items?.included_bundles?.forEach((t) =>
        J(e, t, n.included_item_data_request, r),
      ),
      t.included_items?.included_creators?.forEach((t) =>
        J(e, t, n.included_item_data_request, r),
      )));
}
var Ft = [
  `assets`,
  `tagids`,
  `tags`,
  `basic_info`,
  `reviews`,
  `game_rating`,
  `purchase_options`,
  `screenshots`,
  `trailers`,
  `supported_languages`,
  `full_description_bbcode`,
  `assets_without_overrides`,
  `user_filter_failure`,
  `links`,
  `platforms`,
  `release`,
  `package_groups`,
  `purchase_notes`,
  `extra_details`,
  `optin_registration_tags`,
];
function Y(e) {
  let t = { ...e };
  for (let e of Ft) delete t[e];
  return t;
}
function It(e, t, n, r) {
  e.setQueryData(q(t, `default_info`, r), Y(n));
}
async function X(e, t, n) {
  return await e.load(`${N(t)}|${n}`);
}
var Z = f(e(), 1),
  Lt = m(),
  Q = Z.createContext({});
function $() {
  return Z.useContext(Q).dataLoader;
}
function Rt() {
  return Z.useContext(Q).storeBrowseContext;
}
function zt() {
  return Z.useContext(Q);
}
function Bt(e) {
  let {
      context: t,
      msDelayBatch: n,
      serviceTransportOverride: r,
      legacyCacheStoreItemData: i,
      bRejectOnRequestFailure: a,
      children: o,
    } = e,
    s = ne(),
    c = C(),
    { country: l, language: u, bUsePartnerAPI: d, bIncludeUnpublished: f } = t,
    p = Z.useMemo(
      () => ({
        country: l,
        language: u,
        bUsePartnerAPI: d,
        bIncludeUnpublished: f,
      }),
      [l, u, d, f],
    ),
    m = k(p),
    h = Z.useCallback(
      (e, t) => {
        (J(c, e.toObject(), t, m), i && i(e, t));
      },
      [c, i, m],
    ),
    g = r || s,
    _ = Z.useMemo(() => {
      let e = n ? Vt(n) : void 0;
      return Ue(g, p, { cache: !1, batchScheduleFn: e }, h, a);
    }, [g, h, p, n, a]),
    v = Z.useMemo(
      () => ({ dataLoader: _, storeBrowseContext: p, cacheStoreItemData: h }),
      [_, p, h],
    );
  return (0, Lt.jsx)(Q.Provider, { value: v, children: o });
}
function Vt(e) {
  let t = 0;
  return (n) => {
    let r,
      i = performance.now() - t;
    (i < e && (r = e - i),
      setTimeout(() => {
        ((t = performance.now()), n());
      }, r));
  };
}
export {
  A,
  ot as C,
  F as D,
  Ve as E,
  T as M,
  N as O,
  st as S,
  ct as T,
  Ke as _,
  L as a,
  it as b,
  B as c,
  et as d,
  Xe as f,
  nt as g,
  Ge as h,
  $ as i,
  M as j,
  j as k,
  z as l,
  $e as m,
  zt as n,
  W as o,
  Ze as p,
  Rt as r,
  R as s,
  Bt as t,
  Qe as u,
  qe as v,
  rt as w,
  tt as x,
  at as y,
};
