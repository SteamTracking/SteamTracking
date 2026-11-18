/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./chunk~f025431ab0.js";
import {
  A as t,
  B as n,
  Ft as r,
  It as i,
  L as a,
  Pt as o,
  R as s,
  j as ee,
  ot as c,
} from "./chunk~01cfc309bf.js";
import { Po as l, go as u } from "./chunk~3f4314f3b4.js";
import {
  I as te,
  S as d,
  b as ne,
  dt as f,
  x as re,
} from "./chunk~05a38bc848.js";
import { M as p, N as ie } from "./chunk~21cdc464a1.js";
import { i as ae, r as oe, t as se } from "./chunk~d6c6ad29fc.js";
import { W as ce } from "./chunk~af1574091f.js";
import {
  Bh as m,
  Bt as le,
  Eu as ue,
  Fh as h,
  Gf as de,
  Ih as g,
  Jf as fe,
  Km as _,
  Lh as v,
  Nf as y,
  Ph as b,
  Rh as x,
  Sm as pe,
  Uf as S,
  Uh as C,
  Vh as w,
  bm as T,
  ch as E,
  hm as D,
  ig as O,
  mm as me,
  sh as k,
  xm as he,
  ym as A,
  zh as j,
} from "./main.js";
var M = class {
  m_summary = void 0;
  m_mapStoredDrafts;
  m_mapLocalUpdates = new Map();
  constructor(e, t) {
    (a(this),
      (this.m_summary = e),
      (this.m_mapStoredDrafts = t),
      (this.m_mapLocalUpdates = new Map()));
    for (let e = 0; e < 32; e++) this.m_mapLocalUpdates.set(e, {});
  }
  GetLocalUpdate(e) {
    return this.m_mapLocalUpdates.get(e);
  }
  BNeedsSaving(e) {
    if (e !== void 0) {
      let t = this.GetLocalUpdate(e);
      return !!t.strTitle || !!t.strContent;
    }
    return Array.from(this.m_mapLocalUpdates.values()).some(
      (e) => !!e.strTitle || !!e.strContent,
    );
  }
  async SaveDrafts() {
    O(
      !!this.m_summary?.faq_id,
      `Attempting to save when we lack a FaqID in the summary object`,
    );
    let e = 1,
      t = [];
    for (let r = 0; r < 32; ++r)
      if (
        (this.GetLocalUpdate(r).strTitle &&
          this.GetLocalUpdate(r).strTitle !==
            this.m_mapStoredDrafts.get(r)?.title) ||
        (this.GetLocalUpdate(r).strContent &&
          this.GetLocalUpdate(r).strContent !==
            this.m_mapStoredDrafts.get(r)?.content)
      ) {
        let i = this.GetDraftTitle(r),
          a = this.GetDraftContent(r),
          o = X.Get().UpdateDraft(this.m_summary?.faq_id, r, i, a);
        (o
          .then((t) => {
            t.eResult == 1
              ? n(() => {
                  let e = this.m_mapStoredDrafts.get(r);
                  (e || ((e = {}), this.m_mapStoredDrafts.set(r, e)),
                    (e.title = i),
                    (e.content = a),
                    (e.timestamp = t.rtUpdateTime),
                    (e.author_account_id = he.accountid.toString()),
                    (this.GetLocalUpdate(r).strTitle = null),
                    (this.GetLocalUpdate(r).strContent = null));
                  let n = !1;
                  (this.m_summary.per_language_info.forEach((e) => {
                    r == e.language &&
                      ((n = !0),
                      (e.last_update_timestamp = Math.max(
                        e.last_update_timestamp,
                        t.rtUpdateTime,
                      )));
                  }),
                    n ||
                      this.m_summary.per_language_info.push({
                        language: r,
                        last_update_timestamp: t.rtUpdateTime,
                      }));
                })
              : e == 1 &&
                (console.error(
                  `FAQModel.SaveDraft: Response not ok ` + t.eResult,
                  t,
                ),
                (e = t.eResult));
          })
          .catch((t) => {
            (console.error(
              `FAQModel.SaveDrafts: Hit error ` + S(t).strErrorMsg,
            ),
              e == 1 && (e = 2));
          }),
          t.push(o));
      }
    return (await Promise.all(t), e);
  }
  GetFAQInternalName() {
    return this.m_summary?.internal_name;
  }
  GetDraftTitle(e) {
    return this.GetLocalUpdate(e).strTitle !== null &&
      this.GetLocalUpdate(e).strTitle !== void 0
      ? this.GetLocalUpdate(e).strTitle
      : this.m_mapStoredDrafts.get(e)?.title;
  }
  GetDraftContent(e) {
    return this.GetLocalUpdate(e).strContent !== null &&
      this.GetLocalUpdate(e).strContent !== void 0
      ? this.GetLocalUpdate(e).strContent
      : this.m_mapStoredDrafts.get(e)?.content;
  }
  GetDraftTitleWithFallback(e, t = _.k_ESteamRealmGlobal) {
    let n = t == _.k_ESteamRealmChina ? 6 : 0;
    return (
      this.GetLocalUpdate(e).strTitle ??
      this.GetLocalUpdate(n).strTitle ??
      this.m_mapStoredDrafts.get(e)?.title ??
      this.m_mapStoredDrafts.get(n)?.title ??
      ``
    );
  }
  GetDraftContentWithFallback(e, t = _.k_ESteamRealmGlobal) {
    let n = t == _.k_ESteamRealmChina ? 6 : 0;
    return (
      this.GetLocalUpdate(e).strContent ??
      this.GetLocalUpdate(n).strContent ??
      this.m_mapStoredDrafts.get(e)?.content ??
      this.m_mapStoredDrafts.get(n)?.content ??
      ``
    );
  }
  GetLastSavedDraftVersion(e) {
    return this.m_mapStoredDrafts.get(e);
  }
  BHasSomeTextForLanguage(e) {
    return !!(this.GetDraftContent(e) || this.GetDraftTitle(e));
  }
  SetDraftTitle(e, t) {
    t === this.m_mapStoredDrafts.get(e)?.title
      ? (this.GetLocalUpdate(e).strTitle = null)
      : (this.GetLocalUpdate(e).strTitle = t);
  }
  SetDraftContent(e, t) {
    t === this.m_mapStoredDrafts.get(e)?.content
      ? (this.GetLocalUpdate(e).strContent = null)
      : (this.GetLocalUpdate(e).strContent = t);
  }
  GetIncludedRealmList() {
    let e = [];
    return (
      this.m_summary.visible_in_global_realm && e.push(_.k_ESteamRealmGlobal),
      this.m_summary.visible_in_china_realm && e.push(_.k_ESteamRealmChina),
      e.length == 0 && e.push(_.k_ESteamRealmGlobal),
      O(
        e.length > 0,
        `FAQ ${this.m_summary.faq_id} is currently configured so that no realms are valid for display.`,
      ),
      e
    );
  }
  BHasPublished() {
    return !!this.m_summary.per_language_info.some(
      (e) => !!e.last_publish_timestamp,
    );
  }
  GetLastTimeLanguageUpdated(e) {
    return this.GetLastSavedDraftVersion(e)?.timestamp ?? 0;
  }
  GetFAQID() {
    return this.m_summary.faq_id;
  }
  GetSummary() {
    return this.m_summary;
  }
  BLocalizeDraft() {
    return this.m_summary.json_data.length === 0
      ? !1
      : (JSON.parse(this.m_summary.json_data).localizeDraft ?? !1);
  }
  BPushToCrowdIn() {
    return this.m_summary.json_data.length === 0
      ? !1
      : (JSON.parse(this.m_summary.json_data).pushToCrowdIn ?? !1);
  }
  GetJsonData() {
    return this.m_summary.json_data;
  }
  async UpdateJsonData(e) {
    let t = await X.Get().UpdateJsonData(this.GetFAQID(), e);
    return (t === 1 && (this.m_summary.json_data = JSON.stringify(e)), t);
  }
};
(y([s], M.prototype, `m_summary`, void 0),
  y([s], M.prototype, `m_mapLocalUpdates`, void 0),
  y([C], M.prototype, `BHasSomeTextForLanguage`, null),
  y([C], M.prototype, `GetLastTimeLanguageUpdated`, null));
var N = e(i(), 1),
  P = class e extends N.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.faq_id || b(e.M()),
        N.Message.initialize(this, t, 0, -1, [6], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            faq_id: { n: 1, br: v.readUint64String, bw: w.writeUint64String },
            internal_name: { n: 2, br: v.readString, bw: w.writeString },
            visible_in_global_realm: { n: 3, br: v.readBool, bw: w.writeBool },
            visible_in_china_realm: { n: 4, br: v.readBool, bw: w.writeBool },
            json_data: { n: 5, br: v.readString, bw: w.writeString },
            per_language_info: { n: 6, c: ge, r: !0, q: !0 },
            url_code: { n: 7, br: v.readString, bw: w.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= x(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return g(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new N.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return h(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new N.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      j(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new N.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClanFAQSummary`;
    }
  },
  ge = class e extends N.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.language || b(e.M()),
        N.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            language: { n: 1, br: v.readUint32, bw: w.writeUint32 },
            last_update_timestamp: {
              n: 2,
              br: v.readFixed32,
              bw: w.writeFixed32,
            },
            last_publish_timestamp: {
              n: 3,
              br: v.readFixed32,
              bw: w.writeFixed32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= x(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return g(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new N.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return h(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new N.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      j(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new N.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClanFAQSummary_CLanguageInfo`;
    }
  },
  F = class e extends N.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.faq_id || b(e.M()),
        N.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            faq_id: { n: 1, br: v.readUint64String, bw: w.writeUint64String },
            language: { n: 2, br: v.readUint32, bw: w.writeUint32 },
            version: { n: 3, br: v.readUint64String, bw: w.writeUint64String },
            content: { n: 4, br: v.readString, bw: w.writeString },
            title: { n: 5, br: v.readString, bw: w.writeString },
            timestamp: { n: 6, br: v.readFixed32, bw: w.writeFixed32 },
            author_account_id: {
              n: 7,
              br: v.readUint64String,
              bw: w.writeUint64String,
            },
            url_code: { n: 8, br: v.readString, bw: w.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= x(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return g(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new N.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return h(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new N.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      j(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new N.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClanFAQContent`;
    }
  },
  I = class e extends N.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || b(e.M()),
        N.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            steamid: { n: 1, br: v.readUint64String, bw: w.writeUint64String },
            internal_name: { n: 2, br: v.readString, bw: w.writeString },
            json_data: { n: 3, br: v.readString, bw: w.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= x(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return g(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new N.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return h(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new N.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      j(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new N.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClanFAQS_Create_Request`;
    }
  },
  _e = class e extends N.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.faq_id || b(e.M()),
        N.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            faq_id: { n: 1, br: v.readUint64String, bw: w.writeUint64String },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= x(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return g(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new N.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return h(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new N.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      j(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new N.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClanFAQS_Create_Response`;
    }
  },
  L = class e extends N.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || b(e.M()),
        N.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            steamid: { n: 1, br: v.readUint64String, bw: w.writeUint64String },
            faq_id: { n: 2, br: v.readUint64String, bw: w.writeUint64String },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= x(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return g(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new N.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return h(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new N.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      j(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new N.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClanFAQS_Delete_Request`;
    }
  },
  ve = class e extends N.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), N.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new N.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new N.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new N.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClanFAQS_Delete_Response`;
    }
  },
  R = class e extends N.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || b(e.M()),
        N.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            steamid: { n: 1, br: v.readUint64String, bw: w.writeUint64String },
            faq_id: { n: 2, br: v.readUint64String, bw: w.writeUint64String },
            internal_name: { n: 3, br: v.readString, bw: w.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= x(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return g(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new N.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return h(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new N.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      j(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new N.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClanFAQS_UpdateInternalName_Request`;
    }
  },
  ye = class e extends N.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), N.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new N.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new N.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new N.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClanFAQS_UpdateInternalName_Response`;
    }
  },
  z = class e extends N.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || b(e.M()),
        N.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            steamid: { n: 1, br: v.readUint64String, bw: w.writeUint64String },
            faq_id: { n: 2, br: v.readUint64String, bw: w.writeUint64String },
            json_data: { n: 3, br: v.readString, bw: w.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= x(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return g(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new N.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return h(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new N.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      j(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new N.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClanFAQS_UpdateJsonData_Request`;
    }
  },
  be = class e extends N.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), N.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new N.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new N.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new N.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClanFAQS_UpdateJsonData_Response`;
    }
  },
  B = class e extends N.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || b(e.M()),
        N.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            steamid: { n: 1, br: v.readUint64String, bw: w.writeUint64String },
            faq_id: { n: 2, br: v.readUint64String, bw: w.writeUint64String },
            visible_in_global_realm: { n: 3, br: v.readBool, bw: w.writeBool },
            visible_in_china_realm: { n: 4, br: v.readBool, bw: w.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= x(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return g(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new N.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return h(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new N.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      j(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new N.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClanFAQS_SetVisibility_Request`;
    }
  },
  xe = class e extends N.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), N.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new N.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new N.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new N.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClanFAQS_SetVisibility_Response`;
    }
  },
  V = class e extends N.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || b(e.M()),
        N.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            steamid: { n: 1, br: v.readUint64String, bw: w.writeUint64String },
            faq_id: { n: 2, br: v.readUint64String, bw: w.writeUint64String },
            language: { n: 3, br: v.readUint32, bw: w.writeUint32 },
            content: { n: 4, br: v.readString, bw: w.writeString },
            title: { n: 5, br: v.readString, bw: w.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= x(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return g(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new N.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return h(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new N.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      j(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new N.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClanFAQS_UpdateDraft_Request`;
    }
  },
  Se = class e extends N.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.last_update_timestamp || b(e.M()),
        N.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            last_update_timestamp: {
              n: 1,
              br: v.readFixed32,
              bw: w.writeFixed32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= x(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return g(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new N.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return h(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new N.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      j(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new N.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClanFAQS_UpdateDraft_Response`;
    }
  },
  H = class e extends N.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || b(e.M()),
        N.Message.initialize(this, t, 0, -1, [3], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            steamid: { n: 1, br: v.readUint64String, bw: w.writeUint64String },
            faq_id: { n: 2, br: v.readUint64String, bw: w.writeUint64String },
            language: {
              n: 3,
              r: !0,
              q: !0,
              br: v.readUint32,
              pbr: v.readPackedUint32,
              bw: w.writeRepeatedUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= x(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return g(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new N.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return h(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new N.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      j(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new N.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClanFAQS_PublishDraft_Request`;
    }
  },
  Ce = class e extends N.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.last_publish_timestamp || b(e.M()),
        N.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            last_publish_timestamp: {
              n: 1,
              br: v.readFixed32,
              bw: w.writeFixed32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= x(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return g(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new N.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return h(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new N.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      j(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new N.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClanFAQS_PublishDraft_Response`;
    }
  },
  we = class e extends N.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || b(e.M()),
        N.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            steamid: { n: 1, br: v.readUint64String, bw: w.writeUint64String },
            faq_id: { n: 2, br: v.readUint64String, bw: w.writeUint64String },
            language: { n: 3, br: v.readUint32, bw: w.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= x(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return g(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new N.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return h(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new N.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      j(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new N.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClanFAQS_PreviewDraft_Request`;
    }
  },
  Te = class e extends N.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.faq || b(e.M()),
        N.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= { proto: e, fields: { faq: { n: 1, c: F } } }), e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= x(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return g(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new N.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return h(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new N.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      j(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new N.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClanFAQS_PreviewDraft_Response`;
    }
  },
  Ee = class e extends N.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.faq_id || b(e.M()),
        N.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            faq_id: { n: 2, br: v.readUint64String, bw: w.writeUint64String },
            language: { n: 3, br: v.readUint32, bw: w.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= x(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return g(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new N.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return h(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new N.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      j(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new N.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClanFAQS_GetFAQ_Request`;
    }
  },
  De = class e extends N.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.faq || b(e.M()),
        N.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            faq: { n: 1, c: F },
            faq_exists: { n: 2, d: !1, br: v.readBool, bw: w.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= x(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return g(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new N.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return h(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new N.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      j(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new N.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClanFAQS_GetFAQ_Response`;
    }
  },
  U = class e extends N.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || b(e.M()),
        N.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            steamid: { n: 1, br: v.readUint64String, bw: w.writeUint64String },
            faq_id: { n: 2, br: v.readUint64String, bw: w.writeUint64String },
            language: { n: 3, br: v.readUint32, bw: w.writeUint32 },
            version: { n: 4, br: v.readUint64String, bw: w.writeUint64String },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= x(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return g(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new N.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return h(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new N.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      j(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new N.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClanFAQS_GetFAQVersion_Request`;
    }
  },
  Oe = class e extends N.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.faq || b(e.M()),
        N.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= { proto: e, fields: { faq: { n: 1, c: F } } }), e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= x(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return g(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new N.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return h(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new N.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      j(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new N.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClanFAQS_GetFAQVersion_Response`;
    }
  },
  W = class e extends N.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || b(e.M()),
        N.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            steamid: { n: 1, br: v.readUint64String, bw: w.writeUint64String },
            faq_id: { n: 2, br: v.readUint64String, bw: w.writeUint64String },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= x(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return g(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new N.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return h(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new N.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      j(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new N.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClanFAQS_GetAllDrafts_Request`;
    }
  },
  ke = class e extends N.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.summary || b(e.M()),
        N.Message.initialize(this, t, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            summary: { n: 1, c: P },
            draft: { n: 2, c: F, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= x(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return g(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new N.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return h(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new N.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      j(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new N.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClanFAQS_GetAllDrafts_Response`;
    }
  },
  Ae = class e extends N.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || b(e.M()),
        N.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            steamid: { n: 1, br: v.readUint64String, bw: w.writeUint64String },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= x(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return g(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new N.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return h(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new N.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      j(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new N.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClanFAQS_GetAllFAQsForClan_Request`;
    }
  },
  je = class e extends N.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.faq || b(e.M()),
        N.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { faq: { n: 1, c: P, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= x(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return g(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new N.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return h(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new N.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      j(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new N.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClanFAQS_GetAllFAQsForClan_Response`;
    }
  },
  Me = class e extends N.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || b(e.M()),
        N.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            steamid: { n: 1, br: v.readUint64String, bw: w.writeUint64String },
            faq_id: { n: 2, br: v.readUint64String, bw: w.writeUint64String },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= x(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return g(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new N.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return h(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new N.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      j(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new N.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClanFAQS_GetAllLatestVersionPublishedFAQS_Request`;
    }
  },
  Ne = class e extends N.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.faqs || b(e.M()),
        N.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { faqs: { n: 1, c: F, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= x(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return g(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new N.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return h(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new N.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      j(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new N.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClanFAQS_GetAllLatestVersionPublishedFAQS_Response`;
    }
  },
  Pe = class e extends N.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || b(e.M()),
        N.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            steamid: {
              n: 1,
              br: v.readFixed64String,
              bw: w.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= x(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return g(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new N.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return h(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new N.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      j(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new N.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClanFAQS_CheckFAQPermissions_Request`;
    }
  },
  Fe = class e extends N.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), N.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new N.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new N.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new N.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClanFAQS_CheckFAQPermissions_Response`;
    }
  },
  Ie = class e extends N.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.search_text || b(e.M()),
        N.Message.initialize(this, t, 0, -1, [2, 5], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            search_text: { n: 1, br: v.readString, bw: w.writeString },
            elanguages: {
              n: 2,
              r: !0,
              q: !0,
              br: v.readInt32,
              pbr: v.readPackedInt32,
              bw: w.writeRepeatedInt32,
            },
            count: { n: 3, br: v.readInt32, bw: w.writeInt32 },
            cursor: { n: 4, br: v.readString, bw: w.writeString },
            filter_clanids: {
              n: 5,
              r: !0,
              q: !0,
              br: v.readUint32,
              pbr: v.readPackedUint32,
              bw: w.writeRepeatedUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= x(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return g(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new N.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return h(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new N.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      j(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new N.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClanFAQS_SearchFAQs_Request`;
    }
  },
  Le = class e extends N.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.faqs || b(e.M()),
        N.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            faqs: { n: 1, c: Re, r: !0, q: !0 },
            num_total_results: { n: 2, br: v.readInt32, bw: w.writeInt32 },
            next_cursor: { n: 3, br: v.readString, bw: w.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= x(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return g(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new N.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return h(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new N.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      j(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new N.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClanFAQS_SearchFAQs_Response`;
    }
  },
  Re = class e extends N.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.articleid || b(e.M()),
        N.Message.initialize(this, t, 0, -1, [6], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            articleid: {
              n: 1,
              br: v.readUint64String,
              bw: w.writeUint64String,
            },
            name: { n: 2, br: v.readString, bw: w.writeString },
            content: { n: 3, br: v.readString, bw: w.writeString },
            clan_accountid: { n: 4, br: v.readUint32, bw: w.writeUint32 },
            url_code: { n: 5, br: v.readString, bw: w.writeString },
            localized_names: {
              n: 6,
              r: !0,
              q: !0,
              br: v.readString,
              bw: w.writeRepeatedString,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= x(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return g(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new N.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return h(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new N.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      j(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new N.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClanFAQS_SearchFAQs_Response_CFAQSearchResult`;
    }
  },
  G = class e extends N.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.faq_id || b(e.M()),
        N.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            faq_id: { n: 1, br: v.readUint64String, bw: w.writeUint64String },
            language: { n: 2, br: v.readUint32, bw: w.writeUint32 },
            steamid: {
              n: 3,
              br: v.readFixed64String,
              bw: w.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= x(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return g(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new N.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return h(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new N.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      j(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new N.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClanFAQs_FetchLocalizationFromCrowdIn_Request`;
    }
  },
  ze = class e extends N.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), N.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new N.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new N.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new N.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClanFAQs_FetchLocalizationFromCrowdIn_Response`;
    }
  },
  K = class e extends N.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.faq_id || b(e.M()),
        N.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            faq_id: { n: 1, br: v.readUint64String, bw: w.writeUint64String },
            steamid: {
              n: 2,
              br: v.readFixed64String,
              bw: w.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= x(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return g(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new N.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return h(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new N.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      j(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new N.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClanFAQs_GetCrowdInMetadata_Request`;
    }
  },
  Be = class e extends N.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.crowdin_project_id || b(e.M()),
        N.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            crowdin_project_id: {
              n: 1,
              br: v.readUint64String,
              bw: w.writeUint64String,
            },
            crowdin_file_id: {
              n: 2,
              br: v.readUint64String,
              bw: w.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= x(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return g(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new N.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return h(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new N.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      j(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new N.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClanFAQs_GetCrowdInMetadata_Response`;
    }
  },
  q;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(`ClanFAQS.Create#1`, E(I, t, n), _e, {
      ePrivilege: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  e.Create = t;
  function n(e, t, n) {
    return e.SendMsg(`ClanFAQS.Delete#1`, E(L, t, n), ve, {
      ePrivilege: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  e.Delete = n;
  function r(e, t, n) {
    return e.SendMsg(`ClanFAQS.UpdateInternalName#1`, E(R, t, n), ye, {
      ePrivilege: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  e.UpdateInternalName = r;
  function i(e, t, n) {
    return e.SendMsg(`ClanFAQS.UpdateJsonData#1`, E(z, t, n), be, {
      ePrivilege: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  e.UpdateJsonData = i;
  function a(e, t, n) {
    return e.SendMsg(`ClanFAQS.SetVisibility#1`, E(B, t, n), xe, {
      ePrivilege: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  e.SetVisibility = a;
  function o(e, t, n) {
    return e.SendMsg(`ClanFAQS.UpdateDraft#1`, E(V, t, n), Se, {
      ePrivilege: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  e.UpdateDraft = o;
  function s(e, t, n) {
    return e.SendMsg(`ClanFAQS.PublishDraft#1`, E(H, t, n), Ce, {
      ePrivilege: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  e.PublishDraft = s;
  function ee(e, t, n) {
    return e.SendMsg(`ClanFAQS.PreviewDraft#1`, E(we, t, n), Te, {
      ePrivilege: 1,
    });
  }
  e.PreviewDraft = ee;
  function c(e, t, n) {
    return e.SendMsg(`ClanFAQS.GetFAQ#1`, E(Ee, t, n), De, {
      bConstMethod: !0,
      ePrivilege: 0,
      eWebAPIKeyRequirement: 1,
    });
  }
  e.GetFAQ = c;
  function l(e, t, n) {
    return e.SendMsg(`ClanFAQS.GetFAQVersion#1`, E(U, t, n), Oe, {
      ePrivilege: 1,
      rgBrowserAPISites: [`help`, `community`],
    });
  }
  e.GetFAQVersion = l;
  function u(e, t, n) {
    return e.SendMsg(`ClanFAQS.GetAllDrafts#1`, E(W, t, n), ke, {
      ePrivilege: 1,
      rgBrowserAPISites: [`help`, `community`],
    });
  }
  e.GetAllDrafts = u;
  function te(e, t, n) {
    return e.SendMsg(`ClanFAQS.GetAllFAQsForClan#1`, E(Ae, t, n), je, {
      ePrivilege: 1,
    });
  }
  e.GetAllFAQsForClan = te;
  function d(e, t, n) {
    return e.SendMsg(
      `ClanFAQS.GetAllLatestVersionPublishedFAQS#1`,
      E(Me, t, n),
      Ne,
      { ePrivilege: 1 },
    );
  }
  e.GetAllLatestVersionPublishedFAQS = d;
  function ne(e, t, n) {
    return e.SendMsg(`ClanFAQS.CheckFAQPermissions#1`, E(Pe, t, n), Fe, {
      ePrivilege: 1,
    });
  }
  e.CheckFAQPermissions = ne;
  function f(e, t, n) {
    return e.SendMsg(`ClanFAQS.SearchFAQs#1`, E(Ie, t, n), Le, {
      bConstMethod: !0,
      ePrivilege: 0,
      eWebAPIKeyRequirement: 1,
      rgBrowserAPISites: [`help`],
    });
  }
  e.SearchFAQs = f;
  function re(e, t, n) {
    return e.SendMsg(
      `ClanFAQS.FetchLocalizationFromCrowdIn#1`,
      E(G, t, n),
      ze,
      { bConstMethod: !0, ePrivilege: 5, rgBrowserAPISites: [`community`] },
    );
  }
  e.FetchLocalizationFromCrowdIn = re;
  function p(e, t, n) {
    return e.SendMsg(`ClanFAQS.GetCrowdInMetadata#1`, E(K, t, n), Be, {
      ePrivilege: 5,
      rgBrowserAPISites: [`community`],
    });
  }
  e.GetCrowdInMetadata = p;
})((q ||= {}));
var J = e(t()),
  Y = e(r()),
  X = class e {
    m_mapFAQSummaries = new Map();
    m_mapFAQPublishedContent = new Map();
    m_mapFAQDrafts = new Map();
    m_bHasFAQEdit = !1;
    m_steamInterface;
    static s_Singleton;
    static Get() {
      return ((e.s_Singleton ||= new e()), e.s_Singleton);
    }
    static Init(t) {
      e.Get().m_steamInterface = t;
    }
    constructor() {
      (a(this),
        T.IN_STEAMUI ||
          (this.ReadInitialPayload(), this.SetUpWebAPIInterface()));
    }
    SetUpWebAPIInterface() {
      let e = D(`faqstore`, `application_config`)?.webapi_token;
      this.m_steamInterface = de(new pe(T.WEBAPI_BASE_URL, e));
    }
    ReadInitialPayload() {
      let e = D(`faqstore`, `application_config`);
      if (this.BIsConfigValid(e)) {
        if (e.faqs)
          for (let t in e.faqs) {
            let n = e.faqs[t];
            if (n?.faq_id != t || n?.language === void 0) continue;
            let r = this.m_mapFAQPublishedContent.get(t);
            (r || ((r = new Map()), this.m_mapFAQPublishedContent.set(t, r)),
              r.set(n.language, n));
          }
        if (e.alldrafts)
          for (let t in e.alldrafts) {
            let n = e.alldrafts[t];
            if (!n?.summary || !n.draft) continue;
            this.m_mapFAQSummaries.set(t, n.summary);
            let r = new Map();
            for (let e of n.draft) r.set(e.language, e);
            this.m_mapFAQDrafts.set(t, new M(this.m_mapFAQSummaries.get(t), r));
          }
        if (e.allfaqs)
          for (let t of e.allfaqs)
            t.faq_id &&
              (this.m_mapFAQSummaries.has(t.faq_id) ||
                this.m_mapFAQSummaries.set(t.faq_id, t));
        this.m_bHasFAQEdit = !!e.has_faq_edit;
      }
    }
    BIsConfigValid(e) {
      let t = e;
      return !!(
        (t && t.faqs && typeof t.faqs == `object`) ||
        (t.alldrafts && typeof t.alldrafts == `object`) ||
        (t.allfaqs && Array.isArray(t.allfaqs))
      );
    }
    async CreateFAQ(e) {
      let t = k.Init(I);
      (t.Body().set_steamid(A.CLANSTEAMID), t.Body().set_internal_name(e));
      let n = 2,
        r;
      try {
        let i = await q.Create(this.m_steamInterface.GetServiceTransport(), t);
        if (((n = i.GetEResult()), n == 1)) {
          if (((r = i.Body().faq_id()), r)) {
            let t = { faq_id: r, internal_name: e };
            this.m_mapFAQSummaries.set(r, t);
          }
        } else console.error(`FAQStore.CreateFAQ: Create request failed:`, n);
      } catch (e) {
        let t = S(e);
        console.error(`FAQStore.CreateFAQ: caught error ` + t.strErrorMsg, t);
      }
      return { eResult: n, strFaqId: r };
    }
    async UpdateDraft(e, t, n, r) {
      let i = k.Init(V);
      (i.Body().set_steamid(A.CLANSTEAMID),
        i.Body().set_faq_id(e),
        i.Body().set_language(t),
        i.Body().set_content(r),
        i.Body().set_title(n));
      let a = 2,
        o = 0;
      try {
        let e = await q.UpdateDraft(
          this.m_steamInterface.GetServiceTransport(),
          i,
        );
        ((a = e.GetEResult()),
          a == 1
            ? (o = e.Body().last_update_timestamp() ?? 0)
            : console.error(`FAQStore.UpdateDraft request failed:`, a));
      } catch (e) {
        let t = S(e);
        console.error(`FAQStore.UpdateDraft: caught error ` + t.strErrorMsg, t);
      }
      return { eResult: a, rtUpdateTime: o };
    }
    async UpdateJsonData(e, t) {
      let n = JSON.stringify(t),
        r = k.Init(z);
      (r.Body().set_steamid(A.CLANSTEAMID),
        r.Body().set_faq_id(e),
        r.Body().set_json_data(n));
      let i = 2;
      try {
        if (
          ((i = (
            await q.UpdateJsonData(
              this.m_steamInterface.GetServiceTransport(),
              r,
            )
          ).GetEResult()),
          i != 1)
        )
          console.error(`FAQStore.UpdateJsonData request failed:`, i);
        else {
          let t = this.m_mapFAQSummaries.get(e);
          t && (t.json_data = n);
        }
      } catch (e) {
        let t = S(e);
        console.error(
          `FAQStore.UpdateJsonData: caught error ` + t.strErrorMsg,
          t,
        );
      }
      return i;
    }
    async GetFAQVersion(e, t, n) {
      let r = k.Init(U);
      (r.Body().set_steamid(A.CLANSTEAMID),
        r.Body().set_faq_id(e),
        r.Body().set_version(t),
        r.Body().set_language(n));
      try {
        let e = await q.GetFAQVersion(
            this.m_steamInterface.GetServiceTransport(),
            r,
          ),
          t = e.GetEResult();
        if (t == 1) return e.Body().faq().toObject();
        console.error(`FAQStore.GetFAQVersion request failed:`, t);
      } catch (e) {
        let t = S(e);
        console.error(
          `FAQStore.GetFAQVersion: caught error ` + t.strErrorMsg,
          t,
        );
      }
      return null;
    }
    async DeleteFAQ(e) {
      let t = k.Init(L);
      (t.Body().set_steamid(A.CLANSTEAMID), t.Body().set_faq_id(e));
      let n = 2;
      try {
        ((n = (
          await q.Delete(this.m_steamInterface.GetServiceTransport(), t)
        ).GetEResult()),
          n == 1
            ? (this.m_mapFAQDrafts.delete(e),
              this.m_mapFAQPublishedContent.delete(e),
              this.m_mapFAQSummaries.delete(e))
            : console.error(`FAQStore.DeleteFAQ request failed:`, n));
      } catch (e) {
        let t = S(e);
        console.error(`FAQStore.DeleteFAQ: caught error ` + t.strErrorMsg, t);
      }
      return n;
    }
    static sm_mapFallbackLanguages = new Map([
      [5, 27],
      [27, 5],
      [29, 6],
    ]);
    GetFAQPublishedContent(t, n) {
      let r = this.m_mapFAQPublishedContent.get(t);
      if (!r) return;
      let i = r.get(n),
        a = e.sm_mapFallbackLanguages.get(n);
      return (
        !i && a !== void 0 && (i = r.get(a)),
        !i && n != 0 && !fe() && (i = r.get(0)),
        i
      );
    }
    GetFAQDraftContent(e) {
      return this.m_mapFAQDrafts.get(e);
    }
    GetAllFAQSummaries() {
      return Array.from(this.m_mapFAQSummaries.values());
    }
    GetFAQArticleSummary(e) {
      return this.m_mapFAQSummaries.get(e) || {};
    }
    async LoadFAQDraftContent(e) {
      let t = this.m_mapFAQDrafts.get(e);
      if (t !== void 0) return t;
      let n = k.Init(W);
      (n.Body().set_steamid(A.CLANSTEAMID), n.Body().set_faq_id(e));
      let r = 2;
      try {
        let t = await q.GetAllDrafts(
          this.m_steamInterface.GetServiceTransport(),
          n,
        );
        if (((r = t.GetEResult()), r != 1))
          return (
            console.error(`FaqStore.LoadFAQDraftContent request failed:`, r),
            null
          );
        {
          let n = t.Body().summary().toObject();
          this.m_mapFAQSummaries.set(e, n);
          let r = new Map();
          t.Body()
            .draft()
            .forEach((e) => r.set(e.language(), e.toObject()));
          let i = new M(this.m_mapFAQSummaries.get(e), r);
          return (this.m_mapFAQDrafts.set(e, i), i);
        }
      } catch (e) {
        let t = S(e);
        console.error(
          `FaqStore.LoadFAQDraftContent: exception ` + t.strErrorMsg,
          t,
        );
      }
      return null;
    }
    async UpdateVisibility(e, t, n) {
      let r = k.Init(B);
      (r.Body().set_steamid(A.CLANSTEAMID),
        r.Body().set_faq_id(e),
        r.Body().set_visible_in_global_realm(t),
        r.Body().set_visible_in_china_realm(n));
      let i = 2;
      try {
        if (
          ((i = (
            await q.SetVisibility(
              this.m_steamInterface.GetServiceTransport(),
              r,
            )
          ).GetEResult()),
          i === 1)
        ) {
          let r = this.m_mapFAQSummaries.get(e);
          r &&
            ((r.visible_in_global_realm = t),
            (r.visible_in_china_realm = n),
            this.m_mapFAQSummaries.set(e, r));
        } else console.error(`FaqStore.UpdateVisibility: Failed ` + i);
      } catch (e) {
        let t = S(e);
        console.error(
          `FaqStore.UpdateVisibility: exception ` + t.strErrorMsg,
          t,
        );
      }
      return i;
    }
    async PublishDraftByLanguage(e, t) {
      if (!t || t.length == 0) return 1;
      let r = k.Init(H);
      (r.Body().set_steamid(A.CLANSTEAMID),
        r.Body().set_faq_id(e),
        t.forEach((e) => r.Body().add_language(e)));
      let i = 2;
      try {
        let a = await q.PublishDraft(
          this.m_steamInterface.GetServiceTransport(),
          r,
        );
        if (((i = a.GetEResult()), i === 1)) {
          let r = this.m_mapFAQSummaries.get(e);
          r &&
            n(() => {
              let n = this.m_mapFAQPublishedContent.get(e);
              (n || ((n = new Map()), this.m_mapFAQPublishedContent.set(e, n)),
                r.per_language_info?.forEach((r) => {
                  let i = r.language;
                  if (t.indexOf(i) >= 0) {
                    r.last_publish_timestamp = Math.max(
                      r.last_publish_timestamp ?? 0,
                      a.Body().last_publish_timestamp() ?? 0,
                    );
                    let t = this.m_mapFAQDrafts
                      .get(e)
                      ?.GetLastSavedDraftVersion(i);
                    t ? n.set(i, t) : n.delete(i);
                  }
                }));
            });
        } else console.error(`FaqStore.PublishDraftByLanguage: Failed ` + i);
      } catch (e) {
        let t = S(e);
        console.error(
          `FaqStore.PublishDraftByLanguage: exception ` + t.strErrorMsg,
          t,
        );
      }
      return i;
    }
    async UpdateInternalName(e, t) {
      let r = k.Init(R);
      (r.Body().set_steamid(A.CLANSTEAMID),
        r.Body().set_faq_id(e),
        r.Body().set_internal_name(t));
      let i = 2;
      try {
        ((i = (
          await q.UpdateInternalName(
            this.m_steamInterface.GetServiceTransport(),
            r,
          )
        ).GetEResult()),
          i === 1
            ? n(() => {
                let n = this.m_mapFAQSummaries.get(e);
                n?.internal_name && (n.internal_name = t);
                let r = this.m_mapFAQDrafts.get(e)?.GetSummary();
                r?.internal_name && (r.internal_name = t);
              })
            : console.error(`FaqStore.UpdateInternalName: Failed ` + i));
      } catch (e) {
        let t = S(e);
        console.error(
          `FaqStore.UpdateInternalName: exception ` + t.strErrorMsg,
          t,
        );
      }
      return i;
    }
    GetLoadedDraftObjs() {
      return Array.from(this.m_mapFAQDrafts.values());
    }
    RemoveAllDirtyDrafts() {
      this.GetLoadedDraftObjs()
        ?.filter((e) => e.BNeedsSaving())
        ?.map((e) => e.GetFAQID())
        ?.forEach((e) => {
          e && this.m_mapFAQDrafts.delete(e);
        });
    }
    BHasFAQEdit() {
      return this.m_bHasFAQEdit;
    }
    async ExportEnglishDraftToCrowdin(e) {
      let t =
        T.COMMUNITY_BASE_URL +
        `faqs/` +
        A.VANITY_ID +
        `/ajaxpushtocrowdin/` +
        Z(e);
      await J.default.get(t);
    }
    async ImportNonEnglishDraftsFromCrowdin(e, t, n) {
      let r =
          T.COMMUNITY_BASE_URL +
          `faqs/` +
          A.VANITY_ID +
          `/ajaxpullfromcrowdin/` +
          Z(e),
        i = new FormData();
      (i.append(`sessionid`, me()), i.append(`languages`, t.join(`,`)));
      let a = null;
      try {
        let t = await J.default.post(r, i, {
          withCredentials: !0,
          cancelToken: n?.token,
        });
        if (t?.status == 200 && t.data?.success == 1) {
          let n = t.data.updated?.[e] ?? [];
          return (
            n.length > 0 &&
              (this.m_mapFAQSummaries.has(e) || this.m_mapFAQDrafts.has(e)) &&
              (this.m_mapFAQDrafts.delete(e),
              await this.LoadFAQDraftContent(e)),
            n
          );
        }
        a = { response: t };
      } catch (e) {
        a = e;
      }
      let o = S(a);
      return (
        console.error(`Could not import from crowdin`, e, o.strErrorMsg, o), []
      );
    }
    BHasLiveEnglishVersion(e) {
      return (this.m_mapFAQSummaries.get(e)?.per_language_info ?? []).some(
        (e) => e.language == 0 && (e.last_publish_timestamp ?? 0) > 0,
      );
    }
    GetNonEnglishDraftsToPublish(e) {
      return (this.m_mapFAQSummaries.get(e)?.per_language_info ?? [])
        .filter(
          (e) =>
            e.language != 0 &&
            (e.last_update_timestamp ?? 0) > (e.last_publish_timestamp ?? 0),
        )
        .map((e) => e.language);
    }
  };
(y([s], X.prototype, `m_mapFAQSummaries`, void 0),
  y([ee], X.prototype, `RemoveAllDirtyDrafts`, null));
var Ve = /^[0-9a-fA-F]+$/;
function He(e) {
  let t = e?.replace(/-/g, ``);
  return t?.length != 16 || !Ve.test(t)
    ? null
    : o.fromString(t, !0, 16).toString();
}
function Z(e) {
  let t = (`0000000000000000` + o.fromString(e, !0, 10).toString(16))
    .slice(-16)
    .toUpperCase();
  return `${t.slice(0, 4)}-${t.slice(4, 8)}-${t.slice(8, 12)}-${t.slice(12, 16)}`;
}
function Ue(e, t) {
  return [X.Get().GetFAQPublishedContent(e, t), !0];
}
function We(e) {
  let [t, n] = Y.useState(X.Get().GetFAQDraftContent(e)),
    [r, i] = Y.useState(!!t);
  return (
    (0, Y.useEffect)(() => {
      X.Get()
        .LoadFAQDraftContent(e)
        .then((e) => n(e ?? void 0))
        .finally(() => i(!0));
    }, [e]),
    [t, r]
  );
}
function Ge(e) {
  return [X.Get().GetFAQArticleSummary(e), !0];
}
function Ke() {
  let e = X.Get().GetAllFAQSummaries();
  return Y.useRef([e, !0]).current;
}
function qe(e, t, n) {
  let [r, i] = Y.useState(null),
    [a, o] = Y.useState(!1);
  return (
    (0, Y.useEffect)(() => {
      X.Get().BHasFAQEdit() &&
        X.Get()
          .GetFAQVersion(e, t, n)
          .then((e) => i(e))
          .finally(() => o(!0));
    }, [e, t, n]),
    [r, a]
  );
}
var Je = `tx9MNKWLI1w-`,
  Ye = `_2lwQ-8HytBg-`,
  Q = `GnRedTL6kYE-`,
  $ = c(),
  Xe = new Map([
    ...Array.from(ne.entries()),
    ...Array.from(re.entries()),
    [`section`, { Constructor: Qe, autocloses: !1 }],
    [`img`, { Constructor: $e, autocloses: !1 }],
    [`exclude_realm`, { Constructor: et, autocloses: !1 }],
    [`button`, { Constructor: tt, autocloses: !1 }],
  ]),
  Ze = (e) => {
    let { text: t, bShowErrorInfo: n, version: r, language: i } = e,
      a = Y.useCallback(
        (e) =>
          new p(
            new ie(
              new ae(new oe()),
              e,
              [{ urlRegExp: /youtu.be|youtube.com/i, fnBBComponent: te }],
              {},
            ),
            e,
          ),
        [],
      ),
      o = Y.useMemo(() => new se(Xe, a, i ?? T.LANGUAGE), [a, i]);
    return (0, $.jsx)(`div`, {
      className: Je,
      children: o.ParseBBCode(t, { showErrorInfo: n, version: r }),
    });
  };
function Qe(e) {
  let t = d(e.args, `id`);
  t &&
    typeof t == `string` &&
    t.length > 0 &&
    t[0] === `#` &&
    (t = t.substring(1));
  let n = d(e.args, `style`),
    r = ue(
      Ye,
      n == `note` && `ZxkdkHVBTHY-`,
      n == `important` && `FvfN1oIirNI-`,
      n == `warning` && `qX71Hmv-kmU-`,
    );
  return (0, $.jsx)(`div`, {
    id: t || void 0,
    className: r,
    children: e.children,
  });
}
function $e(e) {
  let { showErrorInfo: t, version: n } = e.context,
    r = e?.children?.toString();
  (r == null || r == null || r.length == 0) && (r = e?.args?.[``]);
  let i = e?.args?.alt,
    a = l(r, e.language, Number.parseInt(n));
  return a == null
    ? null
    : typeof a == `string`
      ? ((r = a),
        t
          ? (0, $.jsx)(u, { className: Q, src: r, alt: i })
          : ((r = r.replace(`http://`, `https://`)),
            (0, $.jsx)(`img`, { className: Q, src: r, alt: i })))
      : (0, $.jsx)(f, { className: Q, rgSources: a, alt: i });
}
function et(e) {
  let t = d(e.args);
  return (t == `global` && T.EREALM == _.k_ESteamRealmGlobal) ||
    (t == `china` && fe())
    ? null
    : (0, $.jsx)($.Fragment, { children: e.children });
}
function tt(e) {
  let t = ce(d(e.args));
  return t
    ? (0, $.jsx)(le, {
        href: t,
        openInNewWindow: !0,
        "data-faq-button": !0,
        children: e.children,
      })
    : (0, $.jsx)($.Fragment, { children: e.children });
}
export {
  We as a,
  qe as c,
  K as d,
  q as f,
  He as i,
  Ue as l,
  X as n,
  Ke as o,
  Z as r,
  Ge as s,
  Ze as t,
  G as u,
};
