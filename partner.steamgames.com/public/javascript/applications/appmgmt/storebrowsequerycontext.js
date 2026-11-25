/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import {
  Ct as e,
  Dt as t,
  G as n,
  K as r,
  Ot as i,
  Pt as a,
  St as o,
  W as s,
  _t as c,
  bt as l,
  gt as u,
  nt as d,
  vt as f,
  wt as p,
  xt as m,
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
var E = a(p(), 1),
  D = class t extends E.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.released_only || u(t.M()),
        E.Message.initialize(
          this,
          e,
          0,
          -1,
          [4, 10, 11, 15, 16, 45, 46, 48],
          null,
        ));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            released_only: { n: 1, br: h.readBool, bw: e.writeBool },
            coming_soon_only: { n: 2, br: h.readBool, bw: e.writeBool },
            type_filters: { n: 3, c: ie },
            exclude_from: {
              n: 4,
              r: !0,
              q: !0,
              br: h.readEnum,
              pbr: h.readPackedEnum,
              bw: e.writeRepeatedEnum,
            },
            predefined_filter: { n: 5, c: ae },
            tagids_must_match: { n: 10, c: oe, r: !0, q: !0 },
            tagids_exclude: {
              n: 11,
              r: !0,
              q: !0,
              br: h.readInt32,
              pbr: h.readPackedInt32,
              bw: e.writeRepeatedInt32,
            },
            price_filters: { n: 12, c: se },
            release_date_filter: { n: 13, c: ce },
            discounted_dates_filter: { n: 17, c: le },
            compatibility_filter: { n: 18, c: ue },
            review_score_filter: { n: 19, c: de },
            discount_ends_within_hours: {
              n: 20,
              br: h.readUint32,
              bw: e.writeUint32,
            },
            content_descriptors_must_match: {
              n: 15,
              r: !0,
              q: !0,
              br: h.readEnum,
              pbr: h.readPackedEnum,
              bw: e.writeRepeatedEnum,
            },
            content_descriptors_excluded: {
              n: 16,
              r: !0,
              q: !0,
              br: h.readEnum,
              pbr: h.readPackedEnum,
              bw: e.writeRepeatedEnum,
            },
            regional_top_n_sellers: {
              n: 40,
              br: h.readInt32,
              bw: e.writeInt32,
            },
            global_top_n_sellers: { n: 41, br: h.readInt32, bw: e.writeInt32 },
            regional_long_term_top_n_sellers: {
              n: 42,
              br: h.readInt32,
              bw: e.writeInt32,
            },
            global_long_term_top_n_sellers: {
              n: 43,
              br: h.readInt32,
              bw: e.writeInt32,
            },
            store_page_filter: { n: 44, c: g },
            parent_appids: {
              n: 45,
              r: !0,
              q: !0,
              br: h.readUint32,
              pbr: h.readPackedUint32,
              bw: e.writeRepeatedUint32,
            },
            creator_clan_account_ids_exclude: {
              n: 46,
              r: !0,
              q: !0,
              br: h.readUint32,
              pbr: h.readPackedUint32,
              bw: e.writeRepeatedUint32,
            },
            platform_filter: { n: 47, c: fe },
            mod_for_engine_appids: {
              n: 48,
              r: !0,
              q: !0,
              br: h.readUint32,
              pbr: h.readPackedUint32,
              bw: e.writeRepeatedUint32,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= l(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return o(t.M(), e, n);
    }
    static fromObject(e) {
      return f(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new E.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return c(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new E.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      m(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new E.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CStoreQueryFilters`;
    }
  },
  ie = class t extends E.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.include_apps || u(t.M()),
        E.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            include_apps: { n: 1, br: h.readBool, bw: e.writeBool },
            include_packages: { n: 2, br: h.readBool, bw: e.writeBool },
            include_bundles: { n: 3, br: h.readBool, bw: e.writeBool },
            include_games: { n: 10, br: h.readBool, bw: e.writeBool },
            include_demos: { n: 11, br: h.readBool, bw: e.writeBool },
            include_mods: { n: 12, br: h.readBool, bw: e.writeBool },
            include_dlc: { n: 13, br: h.readBool, bw: e.writeBool },
            include_software: { n: 14, br: h.readBool, bw: e.writeBool },
            include_video: { n: 15, br: h.readBool, bw: e.writeBool },
            include_hardware: { n: 16, br: h.readBool, bw: e.writeBool },
            include_series: { n: 17, br: h.readBool, bw: e.writeBool },
            include_music: { n: 18, br: h.readBool, bw: e.writeBool },
            dlc_for_appid: { n: 19, br: h.readUint32, bw: e.writeUint32 },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= l(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return o(t.M(), e, n);
    }
    static fromObject(e) {
      return f(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new E.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return c(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new E.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      m(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new E.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CStoreQueryFilters_TypeFilters`;
    }
  },
  ae = class t extends E.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.filter_type || u(t.M()),
        E.Message.initialize(this, e, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            filter_type: { n: 1, br: h.readEnum, bw: e.writeEnum },
            language_preferences: {
              n: 2,
              r: !0,
              q: !0,
              br: h.readInt32,
              pbr: h.readPackedInt32,
              bw: e.writeRepeatedInt32,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= l(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return o(t.M(), e, n);
    }
    static fromObject(e) {
      return f(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new E.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return c(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new E.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      m(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new E.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CStoreQueryFilters_PredefinedFilter`;
    }
  },
  oe = class t extends E.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.tagids || u(t.M()),
        E.Message.initialize(this, e, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            tagids: {
              n: 1,
              r: !0,
              q: !0,
              br: h.readInt32,
              pbr: h.readPackedInt32,
              bw: e.writeRepeatedInt32,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= l(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return o(t.M(), e, n);
    }
    static fromObject(e) {
      return f(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new E.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return c(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new E.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      m(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new E.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CStoreQueryFilters_TagFilter`;
    }
  },
  se = class t extends E.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.only_free_items || u(t.M()),
        E.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            only_free_items: { n: 1, br: h.readBool, bw: e.writeBool },
            exclude_free_items: { n: 2, br: h.readBool, bw: e.writeBool },
            min_discount_percent: { n: 3, br: h.readInt32, bw: e.writeInt32 },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= l(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return o(t.M(), e, n);
    }
    static fromObject(e) {
      return f(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new E.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return c(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new E.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      m(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new E.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CStoreQueryFilters_PriceFilters`;
    }
  },
  ce = class t extends E.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.release_date_type || u(t.M()),
        E.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            release_date_type: { n: 1, br: h.readEnum, bw: e.writeEnum },
            start_date: { n: 2, br: h.readInt32, bw: e.writeInt32 },
            end_date: { n: 3, br: h.readInt32, bw: e.writeInt32 },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= l(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return o(t.M(), e, n);
    }
    static fromObject(e) {
      return f(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new E.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return c(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new E.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      m(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new E.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CStoreQueryFilters_ReleaseDateFilter`;
    }
  },
  le = class t extends E.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.start_date || u(t.M()),
        E.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            start_date: { n: 1, br: h.readUint32, bw: e.writeUint32 },
            end_date: { n: 2, br: h.readUint32, bw: e.writeUint32 },
            allow_partial_overlap: { n: 3, br: h.readBool, bw: e.writeBool },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= l(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return o(t.M(), e, n);
    }
    static fromObject(e) {
      return f(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new E.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return c(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new E.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      m(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new E.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CStoreQueryFilters_DiscountedDatesFilter`;
    }
  },
  ue = class t extends E.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.device || u(t.M()),
        E.Message.initialize(this, e, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            device: { n: 1, br: h.readEnum, bw: e.writeEnum },
            categories: {
              n: 2,
              r: !0,
              q: !0,
              br: h.readEnum,
              pbr: h.readPackedEnum,
              bw: e.writeRepeatedEnum,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= l(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return o(t.M(), e, n);
    }
    static fromObject(e) {
      return f(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new E.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return c(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new E.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      m(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new E.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CStoreQueryFilters_CompatibilityFilter`;
    }
  },
  de = class t extends E.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.min_score || u(t.M()),
        E.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            min_score: { n: 1, br: h.readEnum, bw: e.writeEnum },
            allow_unreviewed: { n: 2, br: h.readBool, bw: e.writeBool },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= l(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return o(t.M(), e, n);
    }
    static fromObject(e) {
      return f(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new E.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return c(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new E.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      m(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new E.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CStoreQueryFilters_ReviewScoreFilter`;
    }
  },
  fe = class t extends E.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.include_windows || u(t.M()),
        E.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            include_windows: { n: 1, br: h.readBool, bw: e.writeBool },
            include_mac: { n: 2, br: h.readBool, bw: e.writeBool },
            include_linux: { n: 3, br: h.readBool, bw: e.writeBool },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= l(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return o(t.M(), e, n);
    }
    static fromObject(e) {
      return f(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new E.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return c(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new E.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      m(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new E.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CStoreQueryFilters_PlatformFilter`;
    }
  },
  pe = class t extends E.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.start || u(t.M()),
        E.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            start: { n: 1, d: 0, br: h.readInt32, bw: e.writeInt32 },
            count: { n: 2, d: 10, br: h.readInt32, bw: e.writeInt32 },
            sort: { n: 10, d: 0, br: h.readEnum, bw: e.writeEnum },
            filters: { n: 20, c: D },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= l(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return o(t.M(), e, n);
    }
    static fromObject(e) {
      return f(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new E.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return c(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new E.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      m(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new E.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CStoreQueryParams`;
    }
  },
  me = class t extends E.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.id || u(t.M()),
        E.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            id: { n: 1, c: S },
            score: { n: 2, br: h.readDouble, bw: e.writeDouble },
            spellcheck_generated_result: {
              n: 3,
              br: h.readBool,
              bw: e.writeBool,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= l(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return o(t.M(), e, n);
    }
    static fromObject(e) {
      return f(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new E.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return c(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new E.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      m(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new E.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CStoreQueryPerResultMetadata`;
    }
  },
  O = class t extends E.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.total_matching_records || u(t.M()),
        E.Message.initialize(this, e, 0, -1, [4, 5], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            total_matching_records: { n: 1, br: h.readInt32, bw: e.writeInt32 },
            start: { n: 2, br: h.readInt32, bw: e.writeInt32 },
            count: { n: 3, br: h.readInt32, bw: e.writeInt32 },
            per_result_metadata: { n: 4, c: me, r: !0, q: !0 },
            spellcheck_suggestions: {
              n: 5,
              r: !0,
              q: !0,
              br: h.readString,
              bw: e.writeRepeatedString,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= l(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return o(t.M(), e, n);
    }
    static fromObject(e) {
      return f(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new E.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return c(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new E.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      m(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new E.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CStoreQueryResultMetadata`;
    }
  },
  he = class t extends E.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.query_name || u(t.M()),
        E.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            query_name: { n: 1, br: h.readString, bw: e.writeString },
            query: { n: 2, c: pe },
            context: { n: 3, c: _ },
            data_request: { n: 4, c: v },
            override_country_code: {
              n: 5,
              br: h.readString,
              bw: e.writeString,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= l(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return o(t.M(), e, n);
    }
    static fromObject(e) {
      return f(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new E.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return c(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new E.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      m(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new E.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CStoreQuery_Query_Request`;
    }
  },
  ge = class e extends E.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.metadata || u(e.M()),
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
      return ((e.sm_mbf ||= l(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return f(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new E.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return c(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new E.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      m(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new E.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStoreQuery_Query_Response`;
    }
  },
  _e = class t extends E.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.query_name || u(t.M()),
        E.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            query_name: { n: 1, br: h.readString, bw: e.writeString },
            context: { n: 2, c: _ },
            search_term: { n: 3, br: h.readString, bw: e.writeString },
            max_results: { n: 4, br: h.readUint32, bw: e.writeUint32 },
            filters: { n: 5, c: D },
            data_request: { n: 6, c: v },
            use_spellcheck: { n: 7, br: h.readBool, bw: e.writeBool },
            search_tags: { n: 8, br: h.readBool, bw: e.writeBool },
            search_creators: { n: 9, br: h.readBool, bw: e.writeBool },
            use_name_match_scoring: { n: 11, br: h.readBool, bw: e.writeBool },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= l(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return o(t.M(), e, n);
    }
    static fromObject(e) {
      return f(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new E.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return c(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new E.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      m(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new E.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CStoreQuery_SearchSuggestions_Request`;
    }
  },
  ve = class e extends E.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.metadata || u(e.M()),
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
      return ((e.sm_mbf ||= l(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return f(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new E.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return c(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new E.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      m(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new E.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStoreQuery_SearchSuggestions_Response`;
    }
  },
  ye = class t extends E.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.query_name || u(t.M()),
        E.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            query_name: { n: 1, br: h.readString, bw: e.writeString },
            context: { n: 2, c: _ },
            data_request: { n: 3, c: v },
            item_id: { n: 4, c: S },
            count: { n: 5, d: 20, br: h.readInt32, bw: e.writeInt32 },
            filters: { n: 6, c: D },
            options: { n: 7, c: be },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= l(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return o(t.M(), e, n);
    }
    static fromObject(e) {
      return f(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new E.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return c(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new E.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      m(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new E.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CStoreQuery_MoreLikeThis_Request`;
    }
  },
  be = class t extends E.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.tag_weight || u(t.M()),
        E.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            tag_weight: { n: 1, d: 90, br: h.readFloat, bw: e.writeFloat },
            exclude_featured_creator_homes: {
              n: 2,
              br: h.readBool,
              bw: e.writeBool,
            },
            apply_user_preferences: { n: 3, br: h.readBool, bw: e.writeBool },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= l(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return o(t.M(), e, n);
    }
    static fromObject(e) {
      return f(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new E.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return c(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new E.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      m(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new E.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CStoreQuery_MoreLikeThis_Request_MoreLikeThisOptions`;
    }
  },
  xe = class e extends E.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.metadata || u(e.M()),
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
      return ((e.sm_mbf ||= l(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return f(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new E.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return c(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new E.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      m(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new E.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStoreQuery_MoreLikeThis_Response`;
    }
  },
  Se = class e extends E.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.filters || u(e.M()),
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
            sections: { n: 6, c: Ce, r: !0, q: !0 },
            context: { n: 5, c: _ },
            recommended_tags: { n: 7, c: we, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= l(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return f(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new E.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return c(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new E.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      m(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new E.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStoreQuery_GetItemsByUserRecommendedTags_Request`;
    }
  },
  Ce = class t extends E.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.sort || u(t.M()),
        E.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            sort: { n: 1, d: 0, br: h.readEnum, bw: e.writeEnum },
            min_items: { n: 2, br: h.readUint32, bw: e.writeUint32 },
            randomize: { n: 3, br: h.readBool, bw: e.writeBool },
            include_packages: { n: 4, d: !1, br: h.readBool, bw: e.writeBool },
            include_bundles: { n: 5, d: !1, br: h.readBool, bw: e.writeBool },
            include_dlc: { n: 6, br: h.readBool, bw: e.writeBool },
            min_discount_percent: { n: 7, br: h.readInt32, bw: e.writeInt32 },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= l(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return o(t.M(), e, n);
    }
    static fromObject(e) {
      return f(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new E.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return c(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new E.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      m(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new E.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CStoreQuery_GetItemsByUserRecommendedTags_Request_Section`;
    }
  },
  we = class t extends E.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.tagid || u(t.M()),
        E.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            tagid: { n: 1, br: h.readUint32, bw: e.writeUint32 },
            name: { n: 2, br: h.readString, bw: e.writeString },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= l(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return o(t.M(), e, n);
    }
    static fromObject(e) {
      return f(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new E.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return c(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new E.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      m(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new E.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CStoreQuery_GetItemsByUserRecommendedTags_Request_RecommendedTag`;
    }
  },
  Te = class e extends E.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.sections || u(e.M()),
        E.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { sections: { n: 1, c: Ee, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= l(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return f(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new E.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return c(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new E.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      m(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new E.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStoreQuery_GetItemsByUserRecommendedTags_Response`;
    }
  },
  Ee = class t extends E.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.tagid || u(t.M()),
        E.Message.initialize(this, e, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            tagid: { n: 1, br: h.readUint32, bw: e.writeUint32 },
            store_item_ids: { n: 2, c: S, r: !0, q: !0 },
            tag_name: { n: 3, br: h.readString, bw: e.writeString },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= l(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return o(t.M(), e, n);
    }
    static fromObject(e) {
      return f(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new E.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return c(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new E.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      m(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new E.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CStoreQuery_GetItemsByUserRecommendedTags_Response_Section`;
    }
  },
  De = class t extends E.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.sort || u(t.M()),
        E.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            sort: { n: 1, d: 0, br: h.readEnum, bw: e.writeEnum },
            max_items: { n: 2, br: h.readUint32, bw: e.writeUint32 },
            randomize: { n: 3, br: h.readBool, bw: e.writeBool },
            include_packages: { n: 4, d: !1, br: h.readBool, bw: e.writeBool },
            include_bundles: { n: 5, d: !1, br: h.readBool, bw: e.writeBool },
            filters: { n: 6, c: g },
            context: { n: 7, c: _ },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= l(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return o(t.M(), e, n);
    }
    static fromObject(e) {
      return f(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new E.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return c(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new E.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      m(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new E.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CStoreQuery_GetItemByUserCombinedTagsPriority_Request`;
    }
  },
  Oe = class t extends E.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.tagid || u(t.M()),
        E.Message.initialize(this, e, 0, -1, [1, 2, 3], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            tagid: {
              n: 1,
              r: !0,
              q: !0,
              br: h.readUint32,
              pbr: h.readPackedUint32,
              bw: e.writeRepeatedUint32,
            },
            store_item_ids: { n: 2, c: S, r: !0, q: !0 },
            tag_name: {
              n: 3,
              r: !0,
              q: !0,
              br: h.readString,
              bw: e.writeRepeatedString,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= l(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return o(t.M(), e, n);
    }
    static fromObject(e) {
      return f(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new E.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return c(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new E.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      m(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new E.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CStoreQuery_GetItemByUserCombinedTagsPriority_Response`;
    }
  },
  ke = class t extends E.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.context || u(t.M()),
        E.Message.initialize(this, e, 0, -1, [4], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            context: { n: 1, c: _ },
            flavor: { n: 2, br: h.readEnum, bw: e.writeEnum },
            store_page_filter: { n: 3, c: g },
            excluded_content_descriptors: {
              n: 4,
              r: !0,
              q: !0,
              br: h.readEnum,
              pbr: h.readPackedEnum,
              bw: e.writeRepeatedEnum,
            },
            start: { n: 5, d: 0, br: h.readInt32, bw: e.writeInt32 },
            count: { n: 6, d: 50, br: h.readInt32, bw: e.writeInt32 },
            prioritize_discounts: { n: 7, br: h.readBool, bw: e.writeBool },
            allow_demos: { n: 8, br: h.readBool, bw: e.writeBool },
            request_facet_counts: { n: 9, br: h.readBool, bw: e.writeBool },
            search_term: { n: 10, br: h.readString, bw: e.writeString },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= l(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return o(t.M(), e, n);
    }
    static fromObject(e) {
      return f(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new E.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return c(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new E.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      m(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new E.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CStoreQuery_GetSaleBrowserItems_Request`;
    }
  },
  Ae = class t extends E.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.ids || u(t.M()),
        E.Message.initialize(this, e, 0, -1, [1, 4], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            ids: { n: 1, c: S, r: !0, q: !0 },
            total_matching: { n: 2, br: h.readInt32, bw: e.writeInt32 },
            more_results_remaining: { n: 3, br: h.readBool, bw: e.writeBool },
            facet_fields: { n: 4, c: Me, r: !0, q: !0 },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= l(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return o(t.M(), e, n);
    }
    static fromObject(e) {
      return f(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new E.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return c(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new E.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      m(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new E.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CStoreQuery_GetSaleBrowserItems_Response`;
    }
  },
  je = class t extends E.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.value || u(t.M()),
        E.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            value: { n: 1, br: h.readString, bw: e.writeString },
            count: { n: 2, br: h.readUint32, bw: e.writeUint32 },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= l(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return o(t.M(), e, n);
    }
    static fromObject(e) {
      return f(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new E.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return c(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new E.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      m(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new E.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CStoreQuery_GetSaleBrowserItems_Response_FacetValue`;
    }
  },
  Me = class t extends E.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.field || u(t.M()),
        E.Message.initialize(this, e, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            field: { n: 1, br: h.readString, bw: e.writeString },
            values: { n: 2, c: je, r: !0, q: !0 },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= l(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return o(t.M(), e, n);
    }
    static fromObject(e) {
      return f(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new E.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return c(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new E.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      m(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new E.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CStoreQuery_GetSaleBrowserItems_Response_FacetField`;
    }
  },
  Ne;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(`StoreQuery.Query#1`, r(he, t, n), ge, {
      bConstMethod: !0,
      ePrivilege: 1,
      eWebAPIKeyRequirement: 1,
      rgBrowserAPISites: [`all`],
    });
  }
  e.Query = t;
  function n(e, t, n) {
    return e.SendMsg(`StoreQuery.SearchSuggestions#1`, r(_e, t, n), ve, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
      rgBrowserAPISites: [`all`],
    });
  }
  e.SearchSuggestions = n;
  function i(e, t, n) {
    return e.SendMsg(`StoreQuery.MoreLikeThis#1`, r(ye, t, n), xe, {
      bConstMethod: !0,
      ePrivilege: 1,
      eWebAPIKeyRequirement: 1,
    });
  }
  e.MoreLikeThis = i;
  function a(e, t, n) {
    return e.SendMsg(
      `StoreQuery.GetItemsByUserRecommendedTags#1`,
      r(Se, t, n),
      Te,
      { bConstMethod: !0, ePrivilege: 1, rgBrowserAPISites: [`all`] },
    );
  }
  e.GetItemsByUserRecommendedTags = a;
  function o(e, t, n) {
    return e.SendMsg(
      `StoreQuery.GetItemByUserCombinedTagsPriority#1`,
      r(De, t, n),
      Oe,
      { bConstMethod: !0, ePrivilege: 1 },
    );
  }
  e.GetItemByUserCombinedTagsPriority = o;
  function s(e, t, n) {
    return e.SendMsg(`StoreQuery.GetSaleBrowserItems#1`, r(ke, t, n), Ae, {
      bConstMethod: !0,
      ePrivilege: 0,
      rgBrowserAPISites: [`all`],
    });
  }
  e.GetSaleBrowserItems = s;
})((Ne ||= {}));
function k(e) {
  if (e.bIncludeUnpublished) return `partner-unpublished`;
  if (e.bUsePartnerAPI) return `partner`;
}
function Pe(e, t) {
  t.Body().set_context(Fe(e));
}
function Fe(e) {
  let t = new _();
  return (
    e.bUsePartnerAPI || t.set_country_code(e.country),
    t.set_language(e.language),
    t
  );
}
function Ie(e, t) {
  e.Body().set_data_request(v.fromObject(t));
}
var A = class t extends E.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.getitems_request || u(t.M()),
        E.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            getitems_request: { n: 1, c: y },
            include_unpublished: { n: 2, br: h.readBool, bw: e.writeBool },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= l(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return o(t.M(), e, n);
    }
    static fromObject(e) {
      return f(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new E.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return c(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new E.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      m(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new E.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPartnerStoreBrowse_GetItems_Request`;
    }
  },
  Le = class e extends E.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.ids || u(e.M()),
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
      return ((e.sm_mbf ||= l(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return f(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new E.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return c(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new E.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      m(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new E.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPartnerStoreBrowse_GetCountryRestrictions_Request`;
    }
  },
  Re = class e extends E.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.results || u(e.M()),
        E.Message.initialize(this, t, 0, -1, [1, 2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            results: { n: 1, c: ze, r: !0, q: !0 },
            no_info: { n: 2, c: S, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= l(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return f(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new E.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return c(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new E.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      m(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new E.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPartnerStoreBrowse_GetCountryRestrictions_Response`;
    }
  },
  ze = class t extends E.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.id || u(t.M()),
        E.Message.initialize(this, e, 0, -1, [3, 4], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            id: { n: 1, c: S },
            no_restrictions: { n: 2, br: h.readBool, bw: e.writeBool },
            allowed_countries: {
              n: 3,
              r: !0,
              q: !0,
              br: h.readString,
              bw: e.writeRepeatedString,
            },
            restricted_countries: {
              n: 4,
              r: !0,
              q: !0,
              br: h.readString,
              bw: e.writeRepeatedString,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= l(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return o(t.M(), e, n);
    }
    static fromObject(e) {
      return f(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new E.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return c(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new E.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      m(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new E.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPartnerStoreBrowse_GetCountryRestrictions_Response_CCountryRestrictions`;
    }
  },
  j;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(`PartnerStoreBrowse.GetItems#1`, r(A, t, n), te, {
      bConstMethod: !0,
      ePrivilege: 1,
      rgBrowserAPISites: [`partner`, `community`, `store`, `support`, `help`],
    });
  }
  e.GetItems = t;
  function n(e, t, n) {
    return e.SendMsg(
      `PartnerStoreBrowse.GetCountryRestrictions#1`,
      r(Le, t, n),
      Re,
      { bConstMethod: !0, ePrivilege: 1, rgBrowserAPISites: [`partner`] },
    );
  }
  e.GetCountryRestrictions = n;
})((j ||= {}));
function M(e) {
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
                : (i(e, `Unknown store item id type`), ``);
}
function Be(e, t) {
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
      return (i(e, `Unknown EStoreItemType ${e} ${b(e)} `), ``);
  }
}
var N = /^(app|package|bundle|mtx|tag|creator|hubcategory|salepage)_(\d*)$/;
function Ve(e) {
  let n = e.match(N);
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
  t(!1, `Failed to parse StoreItemID ${e}`);
}
function He(e) {
  let t = e.match(N);
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
function Ue(e) {
  if (e) {
    if (`appid` in e) return { item_type: 0, id: e.appid };
    if (`packageid` in e) return { item_type: 1, id: e.packageid };
    if (`bundleid` in e) return { item_type: 2, id: e.bundleid };
    if (`tagid` in e) return { item_type: 4, id: e.tagid };
    if (`creatorid` in e) return { item_type: 5, id: e.creatorid };
    if (`hubcategoryid` in e) return { item_type: 6, id: e.hubcategoryid };
    if (`salepagegid` in e) return { item_type: 7, id: 0, gid: e.salepagegid };
    i(e, `Unknown store item id type`);
  }
  return { item_type: -1, id: 0 };
}
function P(e) {
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
      i(t, `Unknown EStoreItemType ${t} ${b(t)} `);
      return;
  }
}
var We = a(re(), 1);
function Ge(e, r, i, a, o = !1) {
  t(
    !r.bIncludeUnpublished || !!r.bUsePartnerAPI,
    `bIncludeUnpublished requires bUsePartnerAPI`,
  );
  let s = new We.default(
    async (t) => {
      let i = new Set(),
        s = new Map(),
        c = new Set();
      c.add(`default_info`);
      let l = {};
      if (
        (t.forEach((e) => {
          let [t, n = `default_info`] = T(e, `|`);
          (i.add(t),
            c.has(n) ||
              (n == `top_tags`
                ? (l.include_tag_count = 20)
                : n != `default_info` && (l[n] = !0),
              c.add(n)));
          let r = s.get(t);
          (r || ((r = new Set()), s.set(t, r)), r.add(n));
        }),
        l.include_included_items)
      ) {
        let { include_included_items: e, ...t } = l;
        l.included_item_data_request = t;
      }
      let u = n.Init(y);
      (Pe(r, u), Ie(u, l));
      let d = [];
      i.forEach((e) => {
        let t = Ve(e);
        t && (u.Body().add_ids(S.fromObject(t)), d.push(e));
      });
      let f;
      if (r.bUsePartnerAPI) {
        let t = n.Init(A);
        (t.Body().set_getitems_request(u.Body()),
          t.Body().set_include_unpublished(!!r.bIncludeUnpublished),
          (f = await j.GetItems(e, t)));
      } else f = await ee.GetItems(e, u);
      if (o && !f.BSuccess())
        throw `Error loading store items: ${f.GetErrorMessage()}`;
      let p = new Map();
      (f
        .Body()
        .store_items()
        .forEach((e, t) => {
          let n = e.item_type(),
            r = n === void 0 ? d[t] : Be(n, e.gid() ?? e.id());
          r && p.set(r, e);
        }),
        a && Ke(p, c, s, l.included_item_data_request, a));
      let m = new Map();
      return t.map((e) => {
        let [t] = T(e, `|`),
          n = p.get(t);
        if (!n) return { ...He(t), success: 2 };
        let r = m.get(t);
        return (r || ((r = n.toObject()), m.set(t, r)), r);
      });
    },
    { maxBatchSize: 500, cache: !1, ...i },
  );
  return ((s.cacheScope = k(r)), s);
}
function Ke(e, n, r, i, a) {
  e.forEach((e, o) => {
    let s = r.get(o);
    if ((t(s, `Missing request data for ${o}`), !s)) return;
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
    c && a(e, l);
    let u = e.included_items(!1);
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
function qe(e) {
  let t = $();
  return w(G(t, e));
}
function Je(e) {
  return F(e, G);
}
function Ye(e) {
  return F(e, L, `include_assets`);
}
function F(e, t, n) {
  let r = $(),
    i = C(),
    a = e && `packageid` in e && !!e.packageid,
    o;
  if (a) {
    let t = i.getQueryData(J(e, `default_info`, r.cacheScope));
    t &&
      t.included_appids?.length == 1 &&
      (o = { appid: t.included_appids[0] });
  }
  let { data: s } = w({ ...Xe(r, e, n), enabled: a && !o });
  return (s && s.length == 1 && (o = { appid: s[0] }), w(t(r, a && o ? o : e)));
}
function Xe(e, t, n) {
  let r = t && `appid` in t && !!t.appid;
  return {
    queryKey: J(t, `include_included_items`, e.cacheScope),
    queryFn: async () => (
      n && X(e, t, n).catch(() => {}),
      (await X(e, t, `include_included_items`)).included_appids ?? []
    ),
    initialData: r ? [t.appid] : void 0,
    enabled: !r,
  };
}
function Ze(e, t, n, r) {
  e.setQueryData(J(t, `include_included_items`, r), n.included_appids ?? []);
}
function Qe(e) {
  let t = $();
  return w(I(t, e));
}
function $e(e) {
  let t = $();
  return w(K(t, e));
}
function et(e) {
  let t = $();
  return w(q(t, e));
}
function tt(e) {
  let t = $();
  return w(e && `bundleid` in e ? K(t, e) : Nt(t, e));
}
function nt(e, t = !1) {
  let n = $();
  return w(t ? yt(n, e) : L(n, e));
}
function rt(e) {
  let t = $();
  return w(R(t, e));
}
function it(e) {
  let t = $();
  return w(ht(t, e));
}
function at(e) {
  let t = $();
  return w(_t(t, e));
}
function ot(e) {
  let t = $();
  return w(xt(t, e));
}
function st(e) {
  let t = $();
  return w(Ct(t, e));
}
function ct(e) {
  let t = $();
  return w(z(t, e));
}
function lt(e) {
  let t = $();
  return w(B(t, e));
}
function ut(e) {
  let t = $();
  return w(V(t, e));
}
function I(e, t) {
  return U(e, t, `include_basic_info`, `basic_info`);
}
function dt(e, t, n, r) {
  W(e, t, n, `include_basic_info`, `basic_info`, r);
}
function ft(e, t, n, r) {
  W(e, t, n, `include_full_description`, `full_description_bbcode`, r);
}
function L(e, t) {
  return U(e, t, `include_assets`, `assets`);
}
function pt(e, t, n, r) {
  W(e, t, n, `include_assets`, `assets`, r);
}
function R(e, t) {
  return U(e, t, `include_screenshots`, `screenshots`);
}
function mt(e, t, n, r) {
  W(e, t, n, `include_screenshots`, `screenshots`, r);
}
function ht(e, t) {
  return U(e, t, `include_links`, `links`);
}
function gt(e, t, n, r) {
  W(e, t, n, `include_links`, `links`, r);
}
function _t(e, t) {
  return U(e, t, `include_trailers`, `trailers`);
}
function vt(e, t, n, r) {
  W(e, t, n, `include_trailers`, `trailers`, r);
}
function yt(e, t) {
  return U(
    e,
    t,
    `include_assets_without_overrides`,
    `assets_without_overrides`,
  );
}
function bt(e, t, n, r) {
  W(e, t, n, `include_assets_without_overrides`, `assets_without_overrides`, r);
}
function xt(e, t) {
  return U(e, t, `include_reviews`, `reviews`);
}
function St(e, t, n, r) {
  W(e, t, n, `include_reviews`, `reviews`, r);
}
function Ct(e, t) {
  return U(e, t, `include_release`, `release`);
}
function wt(e, t, n, r) {
  W(e, t, n, `include_release`, `release`, r);
}
function z(e, t) {
  return U(e, t, `top_tags`, `tags`);
}
function Tt(e, t, n, r) {
  W(e, t, n, `top_tags`, `tags`, r);
}
function B(e, t) {
  return U(e, t, `include_platforms`, `platforms`);
}
function Et(e, t, n, r) {
  W(e, t, n, `include_platforms`, `platforms`, r);
}
function V(e, t) {
  return U(e, t, `apply_user_filters`, `user_filter_failure`);
}
function Dt(e, t, n, r) {
  W(e, t, n, `apply_user_filters`, `user_filter_failure`, r);
}
function Ot(e, t, n, r) {
  e.setQueryData(J(t, `include_all_purchase_options`, r), {
    purchase_options: n.purchase_options,
    package_groups: n.package_groups,
    purchase_notes: n.purchase_notes,
  });
}
function kt(e, t, n, r) {
  W(e, t, n, `include_supported_languages`, `supported_languages`, r);
}
function At(e, t, n, r) {
  W(e, t, n, `include_extra_details`, `extra_details`, r);
}
function jt(e, t, n, r) {
  W(e, t, n, `include_ratings`, `game_rating`, r);
}
function Mt(e, t, n, r) {
  W(e, t, n, `include_optin_registration_tags`, `optin_registration_tags`, r);
}
function H(e) {
  return e
    ? `appid` in e && !e.appid
      ? (t(!1, `Invalid appid passed to useStoreItem`), !1)
      : `bundleid` in e && !e.bundleid
        ? (t(!1, `Invalid bundleid passed to useStoreItem`), !1)
        : !0
    : !1;
}
function U(e, t, n, r) {
  return {
    queryKey: J(t, n, e.cacheScope),
    queryFn: async () => (await X(e, t, n))[r] || null,
    staleTime: 216e5,
    enabled: H(t),
  };
}
function W(e, t, n, r, i, a) {
  e.setQueryData(J(t, r, a), n[i] ?? null);
}
function G(e, t) {
  return {
    queryKey: J(t, `default_info`, e.cacheScope),
    queryFn: async () => It(await X(e, t, `default_info`)),
    staleTime: 216e5,
    enabled: H(t),
  };
}
function K(e, t) {
  return {
    ...G(e, t),
    select: (e) => e.best_purchase_option || null,
    staleTime: 6e5,
  };
}
function Nt(e, t) {
  return {
    ...q(e, t),
    select: (e) =>
      e?.purchase_options && e.purchase_options.length > 0
        ? e.purchase_options[0]
        : null,
    staleTime: 6e5,
  };
}
function q(e, t) {
  let n = `include_all_purchase_options`;
  return {
    queryKey: J(t, n, e.cacheScope),
    queryFn: async () => {
      let r = await X(e, t, n);
      return {
        purchase_options: r.purchase_options,
        package_groups: r.package_groups,
        purchase_notes: r.purchase_notes,
      };
    },
    staleTime: 6e5,
    enabled: H(t),
  };
}
var Pt = `StoreItem`;
function J(e, t, n) {
  let r = [Pt, e && M(e), t];
  return (n && r.push(n), r);
}
function Y(e, t, n, r) {
  let i = P(t);
  i &&
    (Lt(e, i, t, r),
    n.include_basic_info && dt(e, i, t, r),
    n.include_assets && pt(e, i, t, r),
    n.include_screenshots && mt(e, i, t, r),
    n.include_links && gt(e, i, t, r),
    n.include_trailers && vt(e, i, t, r),
    n.include_assets_without_overrides && bt(e, i, t, r),
    n.include_reviews && St(e, i, t, r),
    n.include_release && wt(e, i, t, r),
    n.include_tag_count && n.include_tag_count > 0 && Tt(e, i, t, r),
    n.include_platforms && Et(e, i, t, r),
    n.apply_user_filters && Dt(e, i, t, r),
    n.include_all_purchase_options && Ot(e, i, t, r),
    n.include_full_description && ft(e, i, t, r),
    n.include_supported_languages && kt(e, i, t, r),
    n.include_extra_details && At(e, i, t, r),
    n.include_ratings && jt(e, i, t, r),
    n.include_optin_registration_tags && Mt(e, i, t, r),
    n.include_included_items && Ze(e, i, t, r),
    n.include_included_items &&
      n.included_item_data_request &&
      (t.included_items?.included_apps?.forEach((t) =>
        Y(e, t, n.included_item_data_request, r),
      ),
      t.included_items?.included_packages?.forEach((t) =>
        Y(e, t, n.included_item_data_request, r),
      ),
      t.included_items?.included_bundles?.forEach((t) =>
        Y(e, t, n.included_item_data_request, r),
      ),
      t.included_items?.included_creators?.forEach((t) =>
        Y(e, t, n.included_item_data_request, r),
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
function It(e) {
  let t = { ...e };
  for (let e of Ft) delete t[e];
  return t;
}
function Lt(e, t, n, r) {
  e.setQueryData(J(t, `default_info`, r), It(n));
}
async function X(e, t, n) {
  return await e.load(`${M(t)}|${n}`);
}
var Z = a(d(), 1),
  Rt = s(),
  Q = Z.createContext({});
function $() {
  return Z.useContext(Q).dataLoader;
}
function zt() {
  return Z.useContext(Q).storeBrowseContext;
}
function Bt() {
  return Z.useContext(Q);
}
function Vt(e) {
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
        (Y(c, e.toObject(), t, m), i && i(e, t));
      },
      [c, i, m],
    ),
    g = r || s,
    _ = Z.useMemo(() => {
      let e = n ? Ht(n) : void 0;
      return Ge(g, p, { cache: !1, batchScheduleFn: e }, h, a);
    }, [g, h, p, n, a]),
    v = Z.useMemo(
      () => ({ dataLoader: _, storeBrowseContext: p, cacheStoreItemData: h }),
      [_, p, h],
    );
  return (0, Rt.jsx)(Q.Provider, { value: v, children: o });
}
function Ht(e) {
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
  M as A,
  rt as C,
  ut as D,
  at as E,
  A as M,
  j as N,
  Ue as O,
  T as P,
  ot as S,
  ct as T,
  qe as _,
  L as a,
  Ye as b,
  R as c,
  V as d,
  et as f,
  tt as g,
  $e as h,
  $ as i,
  Le as j,
  P as k,
  B as l,
  Qe as m,
  Bt as n,
  I as o,
  nt as p,
  zt as r,
  G as s,
  Vt as t,
  z as u,
  it as v,
  lt as w,
  st as x,
  Je as y,
};
