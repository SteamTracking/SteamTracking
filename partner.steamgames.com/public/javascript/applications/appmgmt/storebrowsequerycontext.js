/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import {
  $t as e,
  Gt as t,
  Ht as n,
  Jt as r,
  Kt as i,
  Ut as a,
  Wt as o,
  Xt as s,
  Yt as c,
  _t as l,
  en as u,
  kt as d,
  on as f,
  qt as p,
  vt as m,
  yt as h,
} from "./mobx.esm.js";
import {
  B as g,
  H as _,
  I as v,
  L as y,
  N as b,
  P as ee,
  R as x,
  V as S,
  z as te,
} from "./react-router.js";
import { r as ne } from "./servicetransportprovider.js";
import { i as C } from "./utils.js";
import { t as w } from "./useQuery.js";
import { t as re } from "./dataloader.js";
function T(e, t) {
  return e.split(t);
}
var E = f(s(), 1),
  D = class e extends E.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.released_only || n(e.M()),
        E.Message.initialize(this, t, 0, -1, [4, 10, 11, 15, 16, 45], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            released_only: { n: 1, br: t.readBool, bw: c.writeBool },
            coming_soon_only: { n: 2, br: t.readBool, bw: c.writeBool },
            type_filters: { n: 3, c: ie },
            exclude_from: {
              n: 4,
              r: !0,
              q: !0,
              br: t.readEnum,
              pbr: t.readPackedEnum,
              bw: c.writeRepeatedEnum,
            },
            predefined_filter: { n: 5, c: ae },
            tagids_must_match: { n: 10, c: oe, r: !0, q: !0 },
            tagids_exclude: {
              n: 11,
              r: !0,
              q: !0,
              br: t.readInt32,
              pbr: t.readPackedInt32,
              bw: c.writeRepeatedInt32,
            },
            price_filters: { n: 12, c: se },
            release_date_filter: { n: 13, c: ce },
            discounted_dates_filter: { n: 17, c: le },
            compatibility_filter: { n: 18, c: ue },
            review_score_filter: { n: 19, c: de },
            discount_ends_within_hours: {
              n: 20,
              br: t.readUint32,
              bw: c.writeUint32,
            },
            content_descriptors_must_match: {
              n: 15,
              r: !0,
              q: !0,
              br: t.readEnum,
              pbr: t.readPackedEnum,
              bw: c.writeRepeatedEnum,
            },
            content_descriptors_excluded: {
              n: 16,
              r: !0,
              q: !0,
              br: t.readEnum,
              pbr: t.readPackedEnum,
              bw: c.writeRepeatedEnum,
            },
            regional_top_n_sellers: {
              n: 40,
              br: t.readInt32,
              bw: c.writeInt32,
            },
            global_top_n_sellers: { n: 41, br: t.readInt32, bw: c.writeInt32 },
            regional_long_term_top_n_sellers: {
              n: 42,
              br: t.readInt32,
              bw: c.writeInt32,
            },
            global_long_term_top_n_sellers: {
              n: 43,
              br: t.readInt32,
              bw: c.writeInt32,
            },
            store_page_filter: { n: 44, c: _ },
            parent_appids: {
              n: 45,
              r: !0,
              q: !0,
              br: t.readUint32,
              pbr: t.readPackedUint32,
              bw: c.writeRepeatedUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= i(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return o(e.M(), t);
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
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      p(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new E.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CStoreQueryFilters`;
    }
  },
  ie = class e extends E.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.include_apps || n(e.M()),
        E.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            include_apps: { n: 1, br: t.readBool, bw: c.writeBool },
            include_packages: { n: 2, br: t.readBool, bw: c.writeBool },
            include_bundles: { n: 3, br: t.readBool, bw: c.writeBool },
            include_games: { n: 10, br: t.readBool, bw: c.writeBool },
            include_demos: { n: 11, br: t.readBool, bw: c.writeBool },
            include_mods: { n: 12, br: t.readBool, bw: c.writeBool },
            include_dlc: { n: 13, br: t.readBool, bw: c.writeBool },
            include_software: { n: 14, br: t.readBool, bw: c.writeBool },
            include_video: { n: 15, br: t.readBool, bw: c.writeBool },
            include_hardware: { n: 16, br: t.readBool, bw: c.writeBool },
            include_series: { n: 17, br: t.readBool, bw: c.writeBool },
            include_music: { n: 18, br: t.readBool, bw: c.writeBool },
            dlc_for_appid: { n: 19, br: t.readUint32, bw: c.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= i(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return o(e.M(), t);
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
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      p(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new E.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CStoreQueryFilters_TypeFilters`;
    }
  },
  ae = class e extends E.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.filter_type || n(e.M()),
        E.Message.initialize(this, t, 0, -1, [2], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            filter_type: { n: 1, br: t.readEnum, bw: c.writeEnum },
            language_preferences: {
              n: 2,
              r: !0,
              q: !0,
              br: t.readInt32,
              pbr: t.readPackedInt32,
              bw: c.writeRepeatedInt32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= i(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return o(e.M(), t);
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
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      p(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new E.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CStoreQueryFilters_PredefinedFilter`;
    }
  },
  oe = class e extends E.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.tagids || n(e.M()),
        E.Message.initialize(this, t, 0, -1, [1], null);
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
              br: t.readInt32,
              pbr: t.readPackedInt32,
              bw: c.writeRepeatedInt32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= i(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return o(e.M(), t);
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
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      p(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new E.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CStoreQueryFilters_TagFilter`;
    }
  },
  se = class e extends E.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.only_free_items || n(e.M()),
        E.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            only_free_items: { n: 1, br: t.readBool, bw: c.writeBool },
            exclude_free_items: { n: 2, br: t.readBool, bw: c.writeBool },
            min_discount_percent: { n: 3, br: t.readInt32, bw: c.writeInt32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= i(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return o(e.M(), t);
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
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      p(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new E.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CStoreQueryFilters_PriceFilters`;
    }
  },
  ce = class e extends E.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.release_date_type || n(e.M()),
        E.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            release_date_type: { n: 1, br: t.readEnum, bw: c.writeEnum },
            start_date: { n: 2, br: t.readInt32, bw: c.writeInt32 },
            end_date: { n: 3, br: t.readInt32, bw: c.writeInt32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= i(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return o(e.M(), t);
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
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      p(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new E.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CStoreQueryFilters_ReleaseDateFilter`;
    }
  },
  le = class e extends E.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.start_date || n(e.M()),
        E.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            start_date: { n: 1, br: t.readUint32, bw: c.writeUint32 },
            end_date: { n: 2, br: t.readUint32, bw: c.writeUint32 },
            allow_partial_overlap: { n: 3, br: t.readBool, bw: c.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= i(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return o(e.M(), t);
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
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      p(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new E.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CStoreQueryFilters_DiscountedDatesFilter`;
    }
  },
  ue = class e extends E.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.device || n(e.M()),
        E.Message.initialize(this, t, 0, -1, [2], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            device: { n: 1, br: t.readEnum, bw: c.writeEnum },
            categories: {
              n: 2,
              r: !0,
              q: !0,
              br: t.readEnum,
              pbr: t.readPackedEnum,
              bw: c.writeRepeatedEnum,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= i(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return o(e.M(), t);
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
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      p(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new E.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CStoreQueryFilters_CompatibilityFilter`;
    }
  },
  de = class e extends E.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.min_score || n(e.M()),
        E.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            min_score: { n: 1, br: t.readEnum, bw: c.writeEnum },
            allow_unreviewed: { n: 2, br: t.readBool, bw: c.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= i(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return o(e.M(), t);
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
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      p(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new E.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CStoreQueryFilters_ReviewScoreFilter`;
    }
  },
  fe = class e extends E.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.start || n(e.M()),
        E.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            start: { n: 1, d: 0, br: t.readInt32, bw: c.writeInt32 },
            count: { n: 2, d: 10, br: t.readInt32, bw: c.writeInt32 },
            sort: { n: 10, d: 0, br: t.readEnum, bw: c.writeEnum },
            filters: { n: 20, c: D },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= i(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return o(e.M(), t);
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
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      p(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new E.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CStoreQueryParams`;
    }
  },
  pe = class e extends E.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.id || n(e.M()),
        E.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            id: { n: 1, c: S },
            score: { n: 2, br: t.readDouble, bw: c.writeDouble },
            spellcheck_generated_result: {
              n: 3,
              br: t.readBool,
              bw: c.writeBool,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= i(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return o(e.M(), t);
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
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      p(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new E.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CStoreQueryPerResultMetadata`;
    }
  },
  O = class e extends E.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.total_matching_records || n(e.M()),
        E.Message.initialize(this, t, 0, -1, [4, 5], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            total_matching_records: { n: 1, br: t.readInt32, bw: c.writeInt32 },
            start: { n: 2, br: t.readInt32, bw: c.writeInt32 },
            count: { n: 3, br: t.readInt32, bw: c.writeInt32 },
            per_result_metadata: { n: 4, c: pe, r: !0, q: !0 },
            spellcheck_suggestions: {
              n: 5,
              r: !0,
              q: !0,
              br: t.readString,
              bw: c.writeRepeatedString,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= i(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return o(e.M(), t);
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
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      p(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new E.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CStoreQueryResultMetadata`;
    }
  },
  me = class e extends E.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.query_name || n(e.M()),
        E.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            query_name: { n: 1, br: t.readString, bw: c.writeString },
            query: { n: 2, c: fe },
            context: { n: 3, c: y },
            data_request: { n: 4, c: x },
            override_country_code: {
              n: 5,
              br: t.readString,
              bw: c.writeString,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= i(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return o(e.M(), t);
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
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      p(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new E.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CStoreQuery_Query_Request`;
    }
  },
  he = class e extends E.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.metadata || n(e.M()),
        E.Message.initialize(this, t, 0, -1, [2, 3], null);
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
            store_items: { n: 3, c: g, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= i(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return o(e.M(), t);
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
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      p(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new E.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CStoreQuery_Query_Response`;
    }
  },
  ge = class e extends E.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.query_name || n(e.M()),
        E.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            query_name: { n: 1, br: t.readString, bw: c.writeString },
            context: { n: 2, c: y },
            search_term: { n: 3, br: t.readString, bw: c.writeString },
            max_results: { n: 4, br: t.readUint32, bw: c.writeUint32 },
            filters: { n: 5, c: D },
            data_request: { n: 6, c: x },
            use_spellcheck: { n: 7, br: t.readBool, bw: c.writeBool },
            search_tags: { n: 8, br: t.readBool, bw: c.writeBool },
            search_creators: { n: 9, br: t.readBool, bw: c.writeBool },
            use_name_match_scoring: { n: 11, br: t.readBool, bw: c.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= i(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return o(e.M(), t);
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
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      p(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new E.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CStoreQuery_SearchSuggestions_Request`;
    }
  },
  _e = class e extends E.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.metadata || n(e.M()),
        E.Message.initialize(this, t, 0, -1, [2, 3], null);
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
            store_items: { n: 3, c: g, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= i(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return o(e.M(), t);
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
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      p(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new E.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CStoreQuery_SearchSuggestions_Response`;
    }
  },
  ve = class e extends E.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.query_name || n(e.M()),
        E.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            query_name: { n: 1, br: t.readString, bw: c.writeString },
            context: { n: 2, c: y },
            data_request: { n: 3, c: x },
            item_id: { n: 4, c: S },
            count: { n: 5, d: 20, br: t.readInt32, bw: c.writeInt32 },
            filters: { n: 6, c: D },
            options: { n: 7, c: ye },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= i(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return o(e.M(), t);
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
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      p(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new E.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CStoreQuery_MoreLikeThis_Request`;
    }
  },
  ye = class e extends E.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.tag_weight || n(e.M()),
        E.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            tag_weight: { n: 1, d: 90, br: t.readFloat, bw: c.writeFloat },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= i(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return o(e.M(), t);
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
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      p(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new E.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CStoreQuery_MoreLikeThis_Request_MoreLikeThisOptions`;
    }
  },
  be = class e extends E.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.metadata || n(e.M()),
        E.Message.initialize(this, t, 0, -1, [2, 3], null);
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
            store_items: { n: 3, c: g, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= i(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return o(e.M(), t);
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
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      p(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new E.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CStoreQuery_MoreLikeThis_Response`;
    }
  },
  xe = class e extends E.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.filters || n(e.M()),
        E.Message.initialize(this, t, 0, -1, [6], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            filters: { n: 2, c: _ },
            sections: { n: 6, c: Se, r: !0, q: !0 },
            context: { n: 5, c: y },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= i(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return o(e.M(), t);
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
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      p(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new E.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CStoreQuery_GetItemsByUserRecommendedTags_Request`;
    }
  },
  Se = class e extends E.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.sort || n(e.M()),
        E.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            sort: { n: 1, d: 0, br: t.readEnum, bw: c.writeEnum },
            min_items: { n: 2, br: t.readUint32, bw: c.writeUint32 },
            randomize: { n: 3, br: t.readBool, bw: c.writeBool },
            include_packages: { n: 4, d: !1, br: t.readBool, bw: c.writeBool },
            include_bundles: { n: 5, d: !1, br: t.readBool, bw: c.writeBool },
            include_dlc: { n: 6, br: t.readBool, bw: c.writeBool },
            min_discount_percent: { n: 7, br: t.readInt32, bw: c.writeInt32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= i(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return o(e.M(), t);
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
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      p(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new E.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CStoreQuery_GetItemsByUserRecommendedTags_Request_Section`;
    }
  },
  Ce = class e extends E.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.sections || n(e.M()),
        E.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { sections: { n: 1, c: we, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= i(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return o(e.M(), t);
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
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      p(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new E.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CStoreQuery_GetItemsByUserRecommendedTags_Response`;
    }
  },
  we = class e extends E.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.tagid || n(e.M()),
        E.Message.initialize(this, t, 0, -1, [2], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            tagid: { n: 1, br: t.readUint32, bw: c.writeUint32 },
            store_item_ids: { n: 2, c: S, r: !0, q: !0 },
            tag_name: { n: 3, br: t.readString, bw: c.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= i(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return o(e.M(), t);
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
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      p(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new E.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CStoreQuery_GetItemsByUserRecommendedTags_Response_Section`;
    }
  },
  Te = class e extends E.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.sort || n(e.M()),
        E.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            sort: { n: 1, d: 0, br: t.readEnum, bw: c.writeEnum },
            max_items: { n: 2, br: t.readUint32, bw: c.writeUint32 },
            randomize: { n: 3, br: t.readBool, bw: c.writeBool },
            include_packages: { n: 4, d: !1, br: t.readBool, bw: c.writeBool },
            include_bundles: { n: 5, d: !1, br: t.readBool, bw: c.writeBool },
            filters: { n: 6, c: _ },
            context: { n: 7, c: y },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= i(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return o(e.M(), t);
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
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      p(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new E.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CStoreQuery_GetItemByUserCombinedTagsPriority_Request`;
    }
  },
  Ee = class e extends E.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.tagid || n(e.M()),
        E.Message.initialize(this, t, 0, -1, [1, 2, 3], null);
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
              br: t.readUint32,
              pbr: t.readPackedUint32,
              bw: c.writeRepeatedUint32,
            },
            store_item_ids: { n: 2, c: S, r: !0, q: !0 },
            tag_name: {
              n: 3,
              r: !0,
              q: !0,
              br: t.readString,
              bw: c.writeRepeatedString,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= i(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return o(e.M(), t);
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
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      p(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new E.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CStoreQuery_GetItemByUserCombinedTagsPriority_Response`;
    }
  },
  De = class e extends E.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.context || n(e.M()),
        E.Message.initialize(this, t, 0, -1, [4], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            context: { n: 1, c: y },
            flavor: { n: 2, br: t.readEnum, bw: c.writeEnum },
            store_page_filter: { n: 3, c: _ },
            excluded_content_descriptors: {
              n: 4,
              r: !0,
              q: !0,
              br: t.readEnum,
              pbr: t.readPackedEnum,
              bw: c.writeRepeatedEnum,
            },
            start: { n: 5, d: 0, br: t.readInt32, bw: c.writeInt32 },
            count: { n: 6, d: 50, br: t.readInt32, bw: c.writeInt32 },
            prioritize_discounts: { n: 7, br: t.readBool, bw: c.writeBool },
            allow_demos: { n: 8, br: t.readBool, bw: c.writeBool },
            request_facet_counts: { n: 9, br: t.readBool, bw: c.writeBool },
            search_term: { n: 10, br: t.readString, bw: c.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= i(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return o(e.M(), t);
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
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      p(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new E.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CStoreQuery_GetSaleBrowserItems_Request`;
    }
  },
  Oe = class e extends E.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.ids || n(e.M()),
        E.Message.initialize(this, t, 0, -1, [1, 4], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            ids: { n: 1, c: S, r: !0, q: !0 },
            total_matching: { n: 2, br: t.readInt32, bw: c.writeInt32 },
            more_results_remaining: { n: 3, br: t.readBool, bw: c.writeBool },
            facet_fields: { n: 4, c: Ae, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= i(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return o(e.M(), t);
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
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      p(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new E.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CStoreQuery_GetSaleBrowserItems_Response`;
    }
  },
  ke = class e extends E.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.value || n(e.M()),
        E.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            value: { n: 1, br: t.readString, bw: c.writeString },
            count: { n: 2, br: t.readUint32, bw: c.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= i(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return o(e.M(), t);
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
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      p(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new E.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CStoreQuery_GetSaleBrowserItems_Response_FacetValue`;
    }
  },
  Ae = class e extends E.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.field || n(e.M()),
        E.Message.initialize(this, t, 0, -1, [2], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            field: { n: 1, br: t.readString, bw: c.writeString },
            values: { n: 2, c: ke, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= i(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return o(e.M(), t);
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
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      p(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new E.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CStoreQuery_GetSaleBrowserItems_Response_FacetField`;
    }
  },
  je;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(`StoreQuery.Query#1`, h(me, t, n), he, {
      bConstMethod: !0,
      ePrivilege: 1,
      eWebAPIKeyRequirement: 1,
      rgBrowserAPISites: [`partner`, `community`],
    });
  }
  e.Query = t;
  function n(e, t, n) {
    return e.SendMsg(`StoreQuery.SearchSuggestions#1`, h(ge, t, n), _e, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
      rgBrowserAPISites: [`partner`],
    });
  }
  e.SearchSuggestions = n;
  function r(e, t, n) {
    return e.SendMsg(`StoreQuery.MoreLikeThis#1`, h(ve, t, n), be, {
      bConstMethod: !0,
      ePrivilege: 1,
      eWebAPIKeyRequirement: 1,
    });
  }
  e.MoreLikeThis = r;
  function i(e, t, n) {
    return e.SendMsg(
      `StoreQuery.GetItemsByUserRecommendedTags#1`,
      h(xe, t, n),
      Ce,
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
      h(Te, t, n),
      Ee,
      { bConstMethod: !0, ePrivilege: 1 },
    );
  }
  e.GetItemByUserCombinedTagsPriority = a;
  function o(e, t, n) {
    return e.SendMsg(`StoreQuery.GetSaleBrowserItems#1`, h(De, t, n), Oe, {
      bConstMethod: !0,
      ePrivilege: 0,
      rgBrowserAPISites: [`store`],
    });
  }
  e.GetSaleBrowserItems = o;
})((je ||= {}));
function k(e) {
  if (e.bIncludeUnpublished) return `partner-unpublished`;
  if (e.bUsePartnerAPI) return `partner`;
}
function Me(e, t) {
  t.Body().set_context(Ne(e));
}
function Ne(e) {
  let t = new y();
  return (
    e.bUsePartnerAPI || t.set_country_code(e.country),
    t.set_language(e.language),
    t
  );
}
function Pe(e, t) {
  e.Body().set_data_request(x.fromObject(t));
}
var A = class e extends E.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.getitems_request || n(e.M()),
        E.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            getitems_request: { n: 1, c: b },
            include_unpublished: { n: 2, br: t.readBool, bw: c.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= i(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return o(e.M(), t);
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
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      p(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new E.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CPartnerStoreBrowse_GetItems_Request`;
    }
  },
  j = class e extends E.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.ids || n(e.M()),
        E.Message.initialize(this, t, 0, -1, [1], null);
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
      return (e.sm_mbf ||= i(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return o(e.M(), t);
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
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      p(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new E.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CPartnerStoreBrowse_GetCountryRestrictions_Request`;
    }
  },
  Fe = class e extends E.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.results || n(e.M()),
        E.Message.initialize(this, t, 0, -1, [1, 2], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            results: { n: 1, c: Ie, r: !0, q: !0 },
            no_info: { n: 2, c: S, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= i(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return o(e.M(), t);
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
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      p(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new E.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CPartnerStoreBrowse_GetCountryRestrictions_Response`;
    }
  },
  Ie = class e extends E.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.id || n(e.M()),
        E.Message.initialize(this, t, 0, -1, [3, 4], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            id: { n: 1, c: S },
            no_restrictions: { n: 2, br: t.readBool, bw: c.writeBool },
            allowed_countries: {
              n: 3,
              r: !0,
              q: !0,
              br: t.readString,
              bw: c.writeRepeatedString,
            },
            restricted_countries: {
              n: 4,
              r: !0,
              q: !0,
              br: t.readString,
              bw: c.writeRepeatedString,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= i(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return o(e.M(), t);
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
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      p(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new E.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CPartnerStoreBrowse_GetCountryRestrictions_Response_CCountryRestrictions`;
    }
  },
  M;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(`PartnerStoreBrowse.GetItems#1`, h(A, t, n), ee, {
      bConstMethod: !0,
      ePrivilege: 1,
      rgBrowserAPISites: [`partner`, `community`],
    });
  }
  e.GetItems = t;
  function n(e, t, n) {
    return e.SendMsg(
      `PartnerStoreBrowse.GetCountryRestrictions#1`,
      h(j, t, n),
      Fe,
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
                : (u(e, `Unknown store item id type`), ``);
}
function Le(e, t) {
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
      return u(e, `Unknown EStoreItemType ${e} ${v(e)} `), ``;
  }
}
var P = /^(app|package|bundle|mtx|tag|creator|hubcategory|salepage)_(\d*)$/;
function Re(t) {
  let n = t.match(P);
  if (n)
    switch (n[1]) {
      case `app`:
        return { appid: parseInt(n[2]) };
      case `package`:
        return { packageid: parseInt(n[2]) };
      case `bundle`:
        return { bundleid: parseInt(n[2]) };
      case `tag`:
        return { tagid: parseInt(n[2]) };
      case `creator`:
        return { creatorid: parseInt(n[2]) };
      case `hubcategory`:
        return { hubcategoryid: parseInt(n[2]) };
      case `salepage`:
        return { salepagegid: n[2] };
    }
  e(!1, `Failed to parse StoreItemID ${t}`);
}
function ze(e) {
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
function Be(e) {
  if (e) {
    if (`appid` in e) return { item_type: 0, id: e.appid };
    if (`packageid` in e) return { item_type: 1, id: e.packageid };
    if (`bundleid` in e) return { item_type: 2, id: e.bundleid };
    if (`tagid` in e) return { item_type: 4, id: e.tagid };
    if (`creatorid` in e) return { item_type: 5, id: e.creatorid };
    if (`hubcategoryid` in e) return { item_type: 6, id: e.hubcategoryid };
    if (`salepagegid` in e) return { item_type: 7, id: 0, gid: e.salepagegid };
    u(e, `Unknown store item id type`);
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
      u(t, `Unknown EStoreItemType ${t} ${v(t)} `);
      return;
  }
}
var Ve = f(re(), 1);
function He(t, n, r, i, a = !1) {
  e(
    !n.bIncludeUnpublished || !!n.bUsePartnerAPI,
    `bIncludeUnpublished requires bUsePartnerAPI`,
  );
  let o = new Ve.default(
    async (e) => {
      let r = new Set(),
        o = new Map(),
        s = new Set();
      s.add(`default_info`);
      let c = {};
      if (
        (e.forEach((e) => {
          let [t, n = `default_info`] = T(e, `|`);
          r.add(t),
            s.has(n) ||
              (n == `top_tags`
                ? (c.include_tag_count = 20)
                : n != `default_info` && (c[n] = !0),
              s.add(n));
          let i = o.get(t);
          i || ((i = new Set()), o.set(t, i)), i.add(n);
        }),
        c.include_included_items)
      ) {
        let { include_included_items: e, ...t } = c;
        c.included_item_data_request = t;
      }
      let l = m.Init(b);
      Me(n, l), Pe(l, c);
      let u = [];
      r.forEach((e) => {
        let t = Re(e);
        t && (l.Body().add_ids(S.fromObject(t)), u.push(e));
      });
      let d;
      if (n.bUsePartnerAPI) {
        let e = m.Init(A);
        e.Body().set_getitems_request(l.Body()),
          e.Body().set_include_unpublished(!!n.bIncludeUnpublished),
          (d = await M.GetItems(t, e));
      } else d = await te.GetItems(t, l);
      if (a && !d.BSuccess())
        throw `Error loading store items: ${d.GetErrorMessage()}`;
      let f = new Map();
      return (
        d
          .Body()
          .store_items()
          .forEach((e, t) => {
            let n = e.item_type(),
              r = n === void 0 ? u[t] : Le(n, e.gid() ?? e.id());
            r && f.set(r, e);
          }),
        i && Ue(f, s, o, c.included_item_data_request, i),
        e.map((e) => {
          let [t] = T(e, `|`),
            n = f.get(t);
          return n ? n.toObject() : { ...ze(t), success: 2 };
        })
      );
    },
    { maxBatchSize: 500, cache: !1, ...r },
  );
  return (o.cacheScope = k(n)), o;
}
function Ue(t, n, r, i, a) {
  t.forEach((t, o) => {
    let s = r.get(o);
    if ((e(s, `Missing request data for ${o}`), !s)) return;
    let c = !1,
      l = {};
    if (
      (n.forEach((e) => {
        s.has(e) ||
          ((c = !0),
          e == `top_tags`
            ? (l.include_tag_count = 20)
            : e && e != `default_info` && (l[e] = !0));
      }),
      l.include_included_items)
    ) {
      let { include_included_items: e, ...t } = l;
      l.included_item_data_request = t;
    }
    c && a(t, l);
    let u = t.included_items(!1);
    if (s.has(`include_included_items`) && i && u)
      for (let e of [
        ...u.included_apps(),
        ...u.included_packages(),
        ...u.included_bundles(),
        ...u.included_creators(),
      ])
        a(e, i);
  });
}
function We(e) {
  let t = $();
  return w(W(t, e));
}
function Ge(e) {
  return I(e, W);
}
function Ke(e) {
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
  let { data: s } = w({ ...qe(r, e, n), enabled: a && !o });
  return s && s.length == 1 && (o = { appid: s[0] }), w(t(r, a && o ? o : e));
}
function qe(e, t, n) {
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
function Je(e, t, n, r) {
  e.setQueryData(q(t, `include_included_items`, r), n.included_appids ?? []);
}
function Ye(e) {
  let t = $();
  return w(ct(t, e));
}
function Xe(e) {
  let t = $();
  return w(G(t, e));
}
function Ze(e) {
  let t = $();
  return w(K(t, e));
}
function Qe(e) {
  let t = $();
  return w(e && `bundleid` in e ? G(t, e) : Mt(t, e));
}
function $e(e, t = !1) {
  let n = $();
  return w(t ? _t(n, e) : L(n, e));
}
function et(e) {
  let t = $();
  return w(R(t, e));
}
function tt(e) {
  let t = $();
  return w(pt(t, e));
}
function nt(e) {
  let t = $();
  return w(ht(t, e));
}
function rt(e) {
  let t = $();
  return w(yt(t, e));
}
function it(e) {
  let t = $();
  return w(xt(t, e));
}
function at(e) {
  let t = $();
  return w(z(t, e));
}
function ot(e) {
  let t = $();
  return w(B(t, e));
}
function st(e) {
  let t = $();
  return w(Tt(t, e));
}
function ct(e, t) {
  return H(e, t, `include_basic_info`, `basic_info`);
}
function lt(e, t, n, r) {
  U(e, t, n, `include_basic_info`, `basic_info`, r);
}
function ut(e, t, n, r) {
  U(e, t, n, `include_full_description`, `full_description_bbcode`, r);
}
function L(e, t) {
  return H(e, t, `include_assets`, `assets`);
}
function dt(e, t, n, r) {
  U(e, t, n, `include_assets`, `assets`, r);
}
function R(e, t) {
  return H(e, t, `include_screenshots`, `screenshots`);
}
function ft(e, t, n, r) {
  U(e, t, n, `include_screenshots`, `screenshots`, r);
}
function pt(e, t) {
  return H(e, t, `include_links`, `links`);
}
function mt(e, t, n, r) {
  U(e, t, n, `include_links`, `links`, r);
}
function ht(e, t) {
  return H(e, t, `include_trailers`, `trailers`);
}
function gt(e, t, n, r) {
  U(e, t, n, `include_trailers`, `trailers`, r);
}
function _t(e, t) {
  return H(
    e,
    t,
    `include_assets_without_overrides`,
    `assets_without_overrides`,
  );
}
function vt(e, t, n, r) {
  U(e, t, n, `include_assets_without_overrides`, `assets_without_overrides`, r);
}
function yt(e, t) {
  return H(e, t, `include_reviews`, `reviews`);
}
function bt(e, t, n, r) {
  U(e, t, n, `include_reviews`, `reviews`, r);
}
function xt(e, t) {
  return H(e, t, `include_release`, `release`);
}
function St(e, t, n, r) {
  U(e, t, n, `include_release`, `release`, r);
}
function z(e, t) {
  return H(e, t, `top_tags`, `tags`);
}
function Ct(e, t, n, r) {
  U(e, t, n, `top_tags`, `tags`, r);
}
function B(e, t) {
  return H(e, t, `include_platforms`, `platforms`);
}
function wt(e, t, n, r) {
  U(e, t, n, `include_platforms`, `platforms`, r);
}
function Tt(e, t) {
  return H(e, t, `apply_user_filters`, `user_filter_failure`);
}
function Et(e, t, n, r) {
  U(e, t, n, `apply_user_filters`, `user_filter_failure`, r);
}
function Dt(e, t, n, r) {
  e.setQueryData(q(t, `include_all_purchase_options`, r), {
    purchase_options: n.purchase_options,
    package_groups: n.package_groups,
    purchase_notes: n.purchase_notes,
  });
}
function Ot(e, t, n, r) {
  U(e, t, n, `include_supported_languages`, `supported_languages`, r);
}
function kt(e, t, n, r) {
  U(e, t, n, `include_extra_details`, `extra_details`, r);
}
function At(e, t, n, r) {
  U(e, t, n, `include_ratings`, `game_rating`, r);
}
function jt(e, t, n, r) {
  U(e, t, n, `include_optin_registration_tags`, `optin_registration_tags`, r);
}
function V(t) {
  return t
    ? `appid` in t && !t.appid
      ? (e(!1, `Invalid appid passed to useStoreItem`), !1)
      : `bundleid` in t && !t.bundleid
        ? (e(!1, `Invalid bundleid passed to useStoreItem`), !1)
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
function Mt(e, t) {
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
var Nt = `StoreItem`;
function q(e, t, n) {
  let r = [Nt, e && N(e), t];
  return n && r.push(n), r;
}
function J(e, t, n, r) {
  let i = F(t);
  i &&
    (Ft(e, i, t, r),
    n.include_basic_info && lt(e, i, t, r),
    n.include_assets && dt(e, i, t, r),
    n.include_screenshots && ft(e, i, t, r),
    n.include_links && mt(e, i, t, r),
    n.include_trailers && gt(e, i, t, r),
    n.include_assets_without_overrides && vt(e, i, t, r),
    n.include_reviews && bt(e, i, t, r),
    n.include_release && St(e, i, t, r),
    n.include_tag_count && n.include_tag_count > 0 && Ct(e, i, t, r),
    n.include_platforms && wt(e, i, t, r),
    n.apply_user_filters && Et(e, i, t, r),
    n.include_all_purchase_options && Dt(e, i, t, r),
    n.include_full_description && ut(e, i, t, r),
    n.include_supported_languages && Ot(e, i, t, r),
    n.include_extra_details && kt(e, i, t, r),
    n.include_ratings && At(e, i, t, r),
    n.include_optin_registration_tags && jt(e, i, t, r),
    n.include_included_items && Je(e, i, t, r),
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
var Pt = [
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
  for (let e of Pt) delete t[e];
  return t;
}
function Ft(e, t, n, r) {
  e.setQueryData(q(t, `default_info`, r), Y(n));
}
async function X(e, t, n) {
  return await e.load(`${N(t)}|${n}`);
}
var Z = f(d(), 1),
  It = l(),
  Q = Z.createContext({});
function $() {
  return Z.useContext(Q).dataLoader;
}
function Lt() {
  return Z.useContext(Q).storeBrowseContext;
}
function Rt() {
  return Z.useContext(Q);
}
function zt(e) {
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
        J(c, e.toObject(), t, m), i && i(e, t);
      },
      [c, i, m],
    ),
    g = r || s,
    _ = Z.useMemo(() => {
      let e = n ? Bt(n) : void 0;
      return He(g, p, { cache: !1, batchScheduleFn: e }, h, a);
    }, [g, h, p, n, a]),
    v = Z.useMemo(
      () => ({ dataLoader: _, storeBrowseContext: p, cacheStoreItemData: h }),
      [_, p, h],
    );
  return (0, It.jsx)(Q.Provider, { value: v, children: o });
}
function Bt(e) {
  let t = 0;
  return (n) => {
    let r,
      i = performance.now() - t;
    i < e && (r = e - i),
      setTimeout(() => {
        (t = performance.now()), n();
      }, r);
  };
}
export {
  A,
  at as C,
  F as D,
  Be as E,
  T as M,
  N as O,
  ot as S,
  st as T,
  Ge as _,
  L as a,
  rt as b,
  B as c,
  $e as d,
  Ye as f,
  tt as g,
  We as h,
  $ as i,
  M as j,
  j as k,
  z as l,
  Qe as m,
  Rt as n,
  W as o,
  Xe as p,
  Lt as r,
  R as s,
  zt as t,
  Ze as u,
  Ke as v,
  nt as w,
  et as x,
  it as y,
};
