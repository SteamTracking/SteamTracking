/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./rolldown-runtime.js";
import {
  A as t,
  B as n,
  Ft as r,
  L as i,
  Nt as a,
  Pt as o,
  R as s,
  j as c,
  ot as l,
} from "./libraries.js";
import { Ya as u, po as d } from "./vodquery.js";
import {
  I as f,
  S as p,
  b as ee,
  dt as te,
  x as ne,
} from "./emoticonbutton.js";
import { M as re, N as ie } from "./carouselarrows.js";
import { i as ae, r as oe, t as se } from "./reactbbcodeparser.js";
import { W as ce } from "./bbcodes.module.js";
import {
  $m as m,
  Ah as h,
  Dh as g,
  Ef as _,
  Eh as v,
  If as y,
  Lm as b,
  Mh as x,
  Oh as S,
  Ph as C,
  Qm as w,
  Rf as le,
  Th as T,
  Ut as ue,
  Vf as E,
  Yh as D,
  am as de,
  dm as O,
  fm as fe,
  jh as k,
  kh as A,
  om as j,
  pm as pe,
  um as M,
  xu as me,
} from "./main.js";
var N = class {
  m_summary = void 0;
  m_mapStoredDrafts;
  m_mapLocalUpdates = new Map();
  constructor(e, t) {
    (i(this),
      (this.m_summary = e),
      (this.m_mapStoredDrafts = t),
      (this.m_mapLocalUpdates = new Map()));
    for (let e = 0; e < 32; e++) this.m_mapLocalUpdates.set(e, {});
  }
  BNeedsSaving(e) {
    if (e !== void 0) {
      let t = this.m_mapLocalUpdates.get(e);
      return !!t.strTitle || !!t.strContent;
    }
    return Array.from(this.m_mapLocalUpdates.values()).some(
      (e) => !!e.strTitle || !!e.strContent,
    );
  }
  async SaveDrafts() {
    D(
      !!this.m_summary?.faq_id,
      `Attempting to save when we lack a FaqID in the summary object`,
    );
    let e = 1,
      t = [];
    for (let r = 0; r < 32; ++r)
      if (
        (this.m_mapLocalUpdates.get(r).strTitle &&
          this.m_mapLocalUpdates.get(r).strTitle !==
            this.m_mapStoredDrafts.get(r)?.title) ||
        (this.m_mapLocalUpdates.get(r).strContent &&
          this.m_mapLocalUpdates.get(r).strContent !==
            this.m_mapStoredDrafts.get(r)?.content)
      ) {
        let i = this.GetDraftTitle(r),
          a = this.GetDraftContent(r),
          o = X.Get().UpdateDraft(this.m_summary?.faq_id, r, i, a);
        (o
          .then((t) => {
            t.eResult == 1
              ? n(() => {
                  (this.m_mapStoredDrafts.has(r) ||
                    this.m_mapStoredDrafts.set(r, {}),
                    (this.m_mapStoredDrafts.get(r).title = i),
                    (this.m_mapStoredDrafts.get(r).content = a),
                    (this.m_mapStoredDrafts.get(r).timestamp = t.rtUpdateTime),
                    (this.m_mapStoredDrafts.get(r).author_account_id =
                      fe.accountid.toString()),
                    (this.m_mapLocalUpdates.get(r).strTitle = null),
                    (this.m_mapLocalUpdates.get(r).strContent = null));
                  let e = !1;
                  (this.m_summary.per_language_info.forEach((n) => {
                    r == n.language &&
                      ((e = !0),
                      (n.last_update_timestamp = Math.max(
                        n.last_update_timestamp,
                        t.rtUpdateTime,
                      )));
                  }),
                    e ||
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
              `FAQModel.SaveDrafts: Hit error ` + y(t).strErrorMsg,
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
    return this.m_mapLocalUpdates.get(e).strTitle !== null &&
      this.m_mapLocalUpdates.get(e).strTitle !== void 0
      ? this.m_mapLocalUpdates.get(e).strTitle
      : this.m_mapStoredDrafts.get(e)?.title;
  }
  GetDraftContent(e) {
    return this.m_mapLocalUpdates.get(e).strContent !== null &&
      this.m_mapLocalUpdates.get(e).strContent !== void 0
      ? this.m_mapLocalUpdates.get(e).strContent
      : this.m_mapStoredDrafts.get(e)?.content;
  }
  GetDraftTitleWithFallback(e, t = b.k_ESteamRealmGlobal) {
    let n = t == b.k_ESteamRealmChina ? 6 : 0;
    return (
      this.m_mapLocalUpdates.get(e).strTitle ??
      this.m_mapLocalUpdates.get(n).strTitle ??
      this.m_mapStoredDrafts.get(e)?.title ??
      this.m_mapStoredDrafts.get(n)?.title ??
      ``
    );
  }
  GetDraftContentWithFallback(e, t = b.k_ESteamRealmGlobal) {
    let n = t == b.k_ESteamRealmChina ? 6 : 0;
    return (
      this.m_mapLocalUpdates.get(e).strContent ??
      this.m_mapLocalUpdates.get(n).strContent ??
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
      ? (this.m_mapLocalUpdates.get(e).strTitle = null)
      : (this.m_mapLocalUpdates.get(e).strTitle = t);
  }
  SetDraftContent(e, t) {
    t === this.m_mapStoredDrafts.get(e)?.content
      ? (this.m_mapLocalUpdates.get(e).strContent = null)
      : (this.m_mapLocalUpdates.get(e).strContent = t);
  }
  GetIncludedRealmList() {
    let e = [];
    return (
      this.m_summary.visible_in_global_realm && e.push(b.k_ESteamRealmGlobal),
      this.m_summary.visible_in_china_realm && e.push(b.k_ESteamRealmChina),
      e.length == 0 && e.push(b.k_ESteamRealmGlobal),
      D(
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
(_([s], N.prototype, `m_summary`, void 0),
  _([s], N.prototype, `m_mapLocalUpdates`, void 0),
  _([C], N.prototype, `BHasSomeTextForLanguage`, null),
  _([C], N.prototype, `GetLastTimeLanguageUpdated`, null));
var P = e(r(), 1),
  F = class e extends P.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.faq_id || T(e.M()),
        P.Message.initialize(this, t, 0, -1, [6], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            faq_id: { n: 1, br: S.readUint64String, bw: x.writeUint64String },
            internal_name: { n: 2, br: S.readString, bw: x.writeString },
            visible_in_global_realm: { n: 3, br: S.readBool, bw: x.writeBool },
            visible_in_china_realm: { n: 4, br: S.readBool, bw: x.writeBool },
            json_data: { n: 5, br: S.readString, bw: x.writeString },
            per_language_info: { n: 6, c: he, r: !0, q: !0 },
            url_code: { n: 7, br: S.readString, bw: x.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= A(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return k(e.M(), t, n);
    }
    static fromObject(t) {
      return g(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new P.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new P.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new P.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClanFAQSummary`;
    }
  },
  he = class e extends P.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.language || T(e.M()),
        P.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            language: { n: 1, br: S.readUint32, bw: x.writeUint32 },
            last_update_timestamp: {
              n: 2,
              br: S.readFixed32,
              bw: x.writeFixed32,
            },
            last_publish_timestamp: {
              n: 3,
              br: S.readFixed32,
              bw: x.writeFixed32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= A(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return k(e.M(), t, n);
    }
    static fromObject(t) {
      return g(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new P.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new P.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new P.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClanFAQSummary_CLanguageInfo`;
    }
  },
  I = class e extends P.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.faq_id || T(e.M()),
        P.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            faq_id: { n: 1, br: S.readUint64String, bw: x.writeUint64String },
            language: { n: 2, br: S.readUint32, bw: x.writeUint32 },
            version: { n: 3, br: S.readUint64String, bw: x.writeUint64String },
            content: { n: 4, br: S.readString, bw: x.writeString },
            title: { n: 5, br: S.readString, bw: x.writeString },
            timestamp: { n: 6, br: S.readFixed32, bw: x.writeFixed32 },
            author_account_id: {
              n: 7,
              br: S.readUint64String,
              bw: x.writeUint64String,
            },
            url_code: { n: 8, br: S.readString, bw: x.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= A(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return k(e.M(), t, n);
    }
    static fromObject(t) {
      return g(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new P.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new P.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new P.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClanFAQContent`;
    }
  },
  L = class e extends P.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || T(e.M()),
        P.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            steamid: { n: 1, br: S.readUint64String, bw: x.writeUint64String },
            internal_name: { n: 2, br: S.readString, bw: x.writeString },
            json_data: { n: 3, br: S.readString, bw: x.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= A(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return k(e.M(), t, n);
    }
    static fromObject(t) {
      return g(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new P.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new P.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new P.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClanFAQS_Create_Request`;
    }
  },
  ge = class e extends P.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.faq_id || T(e.M()),
        P.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            faq_id: { n: 1, br: S.readUint64String, bw: x.writeUint64String },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= A(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return k(e.M(), t, n);
    }
    static fromObject(t) {
      return g(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new P.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new P.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new P.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClanFAQS_Create_Response`;
    }
  },
  R = class e extends P.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || T(e.M()),
        P.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            steamid: { n: 1, br: S.readUint64String, bw: x.writeUint64String },
            faq_id: { n: 2, br: S.readUint64String, bw: x.writeUint64String },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= A(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return k(e.M(), t, n);
    }
    static fromObject(t) {
      return g(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new P.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new P.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new P.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClanFAQS_Delete_Request`;
    }
  },
  _e = class e extends P.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), P.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new P.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new P.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new P.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClanFAQS_Delete_Response`;
    }
  },
  z = class e extends P.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || T(e.M()),
        P.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            steamid: { n: 1, br: S.readUint64String, bw: x.writeUint64String },
            faq_id: { n: 2, br: S.readUint64String, bw: x.writeUint64String },
            internal_name: { n: 3, br: S.readString, bw: x.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= A(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return k(e.M(), t, n);
    }
    static fromObject(t) {
      return g(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new P.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new P.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new P.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClanFAQS_UpdateInternalName_Request`;
    }
  },
  ve = class e extends P.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), P.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new P.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new P.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new P.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClanFAQS_UpdateInternalName_Response`;
    }
  },
  B = class e extends P.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || T(e.M()),
        P.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            steamid: { n: 1, br: S.readUint64String, bw: x.writeUint64String },
            faq_id: { n: 2, br: S.readUint64String, bw: x.writeUint64String },
            json_data: { n: 3, br: S.readString, bw: x.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= A(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return k(e.M(), t, n);
    }
    static fromObject(t) {
      return g(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new P.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new P.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new P.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClanFAQS_UpdateJsonData_Request`;
    }
  },
  ye = class e extends P.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), P.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new P.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new P.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new P.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClanFAQS_UpdateJsonData_Response`;
    }
  },
  V = class e extends P.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || T(e.M()),
        P.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            steamid: { n: 1, br: S.readUint64String, bw: x.writeUint64String },
            faq_id: { n: 2, br: S.readUint64String, bw: x.writeUint64String },
            visible_in_global_realm: { n: 3, br: S.readBool, bw: x.writeBool },
            visible_in_china_realm: { n: 4, br: S.readBool, bw: x.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= A(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return k(e.M(), t, n);
    }
    static fromObject(t) {
      return g(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new P.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new P.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new P.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClanFAQS_SetVisibility_Request`;
    }
  },
  be = class e extends P.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), P.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new P.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new P.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new P.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClanFAQS_SetVisibility_Response`;
    }
  },
  H = class e extends P.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || T(e.M()),
        P.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            steamid: { n: 1, br: S.readUint64String, bw: x.writeUint64String },
            faq_id: { n: 2, br: S.readUint64String, bw: x.writeUint64String },
            language: { n: 3, br: S.readUint32, bw: x.writeUint32 },
            content: { n: 4, br: S.readString, bw: x.writeString },
            title: { n: 5, br: S.readString, bw: x.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= A(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return k(e.M(), t, n);
    }
    static fromObject(t) {
      return g(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new P.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new P.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new P.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClanFAQS_UpdateDraft_Request`;
    }
  },
  xe = class e extends P.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.last_update_timestamp || T(e.M()),
        P.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: S.readFixed32,
              bw: x.writeFixed32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= A(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return k(e.M(), t, n);
    }
    static fromObject(t) {
      return g(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new P.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new P.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new P.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClanFAQS_UpdateDraft_Response`;
    }
  },
  U = class e extends P.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || T(e.M()),
        P.Message.initialize(this, t, 0, -1, [3], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            steamid: { n: 1, br: S.readUint64String, bw: x.writeUint64String },
            faq_id: { n: 2, br: S.readUint64String, bw: x.writeUint64String },
            language: {
              n: 3,
              r: !0,
              q: !0,
              br: S.readUint32,
              pbr: S.readPackedUint32,
              bw: x.writeRepeatedUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= A(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return k(e.M(), t, n);
    }
    static fromObject(t) {
      return g(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new P.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new P.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new P.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClanFAQS_PublishDraft_Request`;
    }
  },
  Se = class e extends P.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.last_publish_timestamp || T(e.M()),
        P.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: S.readFixed32,
              bw: x.writeFixed32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= A(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return k(e.M(), t, n);
    }
    static fromObject(t) {
      return g(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new P.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new P.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new P.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClanFAQS_PublishDraft_Response`;
    }
  },
  Ce = class e extends P.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || T(e.M()),
        P.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            steamid: { n: 1, br: S.readUint64String, bw: x.writeUint64String },
            faq_id: { n: 2, br: S.readUint64String, bw: x.writeUint64String },
            language: { n: 3, br: S.readUint32, bw: x.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= A(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return k(e.M(), t, n);
    }
    static fromObject(t) {
      return g(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new P.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new P.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new P.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClanFAQS_PreviewDraft_Request`;
    }
  },
  we = class e extends P.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.faq || T(e.M()),
        P.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= { proto: e, fields: { faq: { n: 1, c: I } } }), e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= A(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return k(e.M(), t, n);
    }
    static fromObject(t) {
      return g(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new P.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new P.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new P.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClanFAQS_PreviewDraft_Response`;
    }
  },
  Te = class e extends P.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.faq_id || T(e.M()),
        P.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            faq_id: { n: 2, br: S.readUint64String, bw: x.writeUint64String },
            language: { n: 3, br: S.readUint32, bw: x.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= A(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return k(e.M(), t, n);
    }
    static fromObject(t) {
      return g(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new P.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new P.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new P.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClanFAQS_GetFAQ_Request`;
    }
  },
  Ee = class e extends P.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.faq || T(e.M()),
        P.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            faq: { n: 1, c: I },
            faq_exists: { n: 2, d: !1, br: S.readBool, bw: x.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= A(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return k(e.M(), t, n);
    }
    static fromObject(t) {
      return g(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new P.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new P.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new P.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClanFAQS_GetFAQ_Response`;
    }
  },
  W = class e extends P.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || T(e.M()),
        P.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            steamid: { n: 1, br: S.readUint64String, bw: x.writeUint64String },
            faq_id: { n: 2, br: S.readUint64String, bw: x.writeUint64String },
            language: { n: 3, br: S.readUint32, bw: x.writeUint32 },
            version: { n: 4, br: S.readUint64String, bw: x.writeUint64String },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= A(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return k(e.M(), t, n);
    }
    static fromObject(t) {
      return g(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new P.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new P.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new P.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClanFAQS_GetFAQVersion_Request`;
    }
  },
  De = class e extends P.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.faq || T(e.M()),
        P.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= { proto: e, fields: { faq: { n: 1, c: I } } }), e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= A(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return k(e.M(), t, n);
    }
    static fromObject(t) {
      return g(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new P.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new P.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new P.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClanFAQS_GetFAQVersion_Response`;
    }
  },
  G = class e extends P.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || T(e.M()),
        P.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            steamid: { n: 1, br: S.readUint64String, bw: x.writeUint64String },
            faq_id: { n: 2, br: S.readUint64String, bw: x.writeUint64String },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= A(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return k(e.M(), t, n);
    }
    static fromObject(t) {
      return g(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new P.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new P.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new P.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClanFAQS_GetAllDrafts_Request`;
    }
  },
  Oe = class e extends P.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.summary || T(e.M()),
        P.Message.initialize(this, t, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            summary: { n: 1, c: F },
            draft: { n: 2, c: I, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= A(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return k(e.M(), t, n);
    }
    static fromObject(t) {
      return g(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new P.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new P.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new P.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClanFAQS_GetAllDrafts_Response`;
    }
  },
  ke = class e extends P.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || T(e.M()),
        P.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            steamid: { n: 1, br: S.readUint64String, bw: x.writeUint64String },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= A(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return k(e.M(), t, n);
    }
    static fromObject(t) {
      return g(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new P.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new P.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new P.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClanFAQS_GetAllFAQsForClan_Request`;
    }
  },
  Ae = class e extends P.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.faq || T(e.M()),
        P.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { faq: { n: 1, c: F, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= A(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return k(e.M(), t, n);
    }
    static fromObject(t) {
      return g(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new P.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new P.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new P.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClanFAQS_GetAllFAQsForClan_Response`;
    }
  },
  je = class e extends P.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || T(e.M()),
        P.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            steamid: { n: 1, br: S.readUint64String, bw: x.writeUint64String },
            faq_id: { n: 2, br: S.readUint64String, bw: x.writeUint64String },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= A(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return k(e.M(), t, n);
    }
    static fromObject(t) {
      return g(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new P.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new P.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new P.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClanFAQS_GetAllLatestVersionPublishedFAQS_Request`;
    }
  },
  Me = class e extends P.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.faqs || T(e.M()),
        P.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { faqs: { n: 1, c: I, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= A(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return k(e.M(), t, n);
    }
    static fromObject(t) {
      return g(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new P.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new P.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new P.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClanFAQS_GetAllLatestVersionPublishedFAQS_Response`;
    }
  },
  Ne = class e extends P.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || T(e.M()),
        P.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: S.readFixed64String,
              bw: x.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= A(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return k(e.M(), t, n);
    }
    static fromObject(t) {
      return g(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new P.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new P.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new P.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClanFAQS_CheckFAQPermissions_Request`;
    }
  },
  Pe = class e extends P.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), P.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new P.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new P.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new P.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClanFAQS_CheckFAQPermissions_Response`;
    }
  },
  Fe = class e extends P.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.search_text || T(e.M()),
        P.Message.initialize(this, t, 0, -1, [2, 5], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            search_text: { n: 1, br: S.readString, bw: x.writeString },
            elanguages: {
              n: 2,
              r: !0,
              q: !0,
              br: S.readInt32,
              pbr: S.readPackedInt32,
              bw: x.writeRepeatedInt32,
            },
            count: { n: 3, br: S.readInt32, bw: x.writeInt32 },
            cursor: { n: 4, br: S.readString, bw: x.writeString },
            filter_clanids: {
              n: 5,
              r: !0,
              q: !0,
              br: S.readUint32,
              pbr: S.readPackedUint32,
              bw: x.writeRepeatedUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= A(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return k(e.M(), t, n);
    }
    static fromObject(t) {
      return g(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new P.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new P.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new P.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClanFAQS_SearchFAQs_Request`;
    }
  },
  Ie = class e extends P.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.faqs || T(e.M()),
        P.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            faqs: { n: 1, c: Le, r: !0, q: !0 },
            num_total_results: { n: 2, br: S.readInt32, bw: x.writeInt32 },
            next_cursor: { n: 3, br: S.readString, bw: x.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= A(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return k(e.M(), t, n);
    }
    static fromObject(t) {
      return g(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new P.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new P.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new P.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClanFAQS_SearchFAQs_Response`;
    }
  },
  Le = class e extends P.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.articleid || T(e.M()),
        P.Message.initialize(this, t, 0, -1, [6], null));
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
              br: S.readUint64String,
              bw: x.writeUint64String,
            },
            name: { n: 2, br: S.readString, bw: x.writeString },
            content: { n: 3, br: S.readString, bw: x.writeString },
            clan_accountid: { n: 4, br: S.readUint32, bw: x.writeUint32 },
            url_code: { n: 5, br: S.readString, bw: x.writeString },
            localized_names: {
              n: 6,
              r: !0,
              q: !0,
              br: S.readString,
              bw: x.writeRepeatedString,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= A(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return k(e.M(), t, n);
    }
    static fromObject(t) {
      return g(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new P.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new P.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new P.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClanFAQS_SearchFAQs_Response_CFAQSearchResult`;
    }
  },
  K = class e extends P.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.faq_id || T(e.M()),
        P.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            faq_id: { n: 1, br: S.readUint64String, bw: x.writeUint64String },
            language: { n: 2, br: S.readUint32, bw: x.writeUint32 },
            steamid: {
              n: 3,
              br: S.readFixed64String,
              bw: x.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= A(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return k(e.M(), t, n);
    }
    static fromObject(t) {
      return g(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new P.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new P.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new P.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClanFAQs_FetchLocalizationFromCrowdIn_Request`;
    }
  },
  Re = class e extends P.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), P.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new P.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new P.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new P.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClanFAQs_FetchLocalizationFromCrowdIn_Response`;
    }
  },
  q = class e extends P.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.faq_id || T(e.M()),
        P.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            faq_id: { n: 1, br: S.readUint64String, bw: x.writeUint64String },
            steamid: {
              n: 2,
              br: S.readFixed64String,
              bw: x.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= A(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return k(e.M(), t, n);
    }
    static fromObject(t) {
      return g(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new P.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new P.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new P.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClanFAQs_GetCrowdInMetadata_Request`;
    }
  },
  ze = class e extends P.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.crowdin_project_id || T(e.M()),
        P.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: S.readUint64String,
              bw: x.writeUint64String,
            },
            crowdin_file_id: {
              n: 2,
              br: S.readUint64String,
              bw: x.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= A(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return k(e.M(), t, n);
    }
    static fromObject(t) {
      return g(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new P.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new P.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new P.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClanFAQs_GetCrowdInMetadata_Response`;
    }
  },
  J;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(`ClanFAQS.Create#1`, m(L, t, n), ge, {
      ePrivilege: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  e.Create = t;
  function n(e, t, n) {
    return e.SendMsg(`ClanFAQS.Delete#1`, m(R, t, n), _e, {
      ePrivilege: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  e.Delete = n;
  function r(e, t, n) {
    return e.SendMsg(`ClanFAQS.UpdateInternalName#1`, m(z, t, n), ve, {
      ePrivilege: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  e.UpdateInternalName = r;
  function i(e, t, n) {
    return e.SendMsg(`ClanFAQS.UpdateJsonData#1`, m(B, t, n), ye, {
      ePrivilege: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  e.UpdateJsonData = i;
  function a(e, t, n) {
    return e.SendMsg(`ClanFAQS.SetVisibility#1`, m(V, t, n), be, {
      ePrivilege: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  e.SetVisibility = a;
  function o(e, t, n) {
    return e.SendMsg(`ClanFAQS.UpdateDraft#1`, m(H, t, n), xe, {
      ePrivilege: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  e.UpdateDraft = o;
  function s(e, t, n) {
    return e.SendMsg(`ClanFAQS.PublishDraft#1`, m(U, t, n), Se, {
      ePrivilege: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  e.PublishDraft = s;
  function c(e, t, n) {
    return e.SendMsg(`ClanFAQS.PreviewDraft#1`, m(Ce, t, n), we, {
      ePrivilege: 1,
    });
  }
  e.PreviewDraft = c;
  function l(e, t, n) {
    return e.SendMsg(`ClanFAQS.GetFAQ#1`, m(Te, t, n), Ee, {
      bConstMethod: !0,
      ePrivilege: 0,
      eWebAPIKeyRequirement: 1,
    });
  }
  e.GetFAQ = l;
  function u(e, t, n) {
    return e.SendMsg(`ClanFAQS.GetFAQVersion#1`, m(W, t, n), De, {
      ePrivilege: 1,
      rgBrowserAPISites: [`help`, `community`],
    });
  }
  e.GetFAQVersion = u;
  function d(e, t, n) {
    return e.SendMsg(`ClanFAQS.GetAllDrafts#1`, m(G, t, n), Oe, {
      ePrivilege: 1,
      rgBrowserAPISites: [`help`, `community`],
    });
  }
  e.GetAllDrafts = d;
  function f(e, t, n) {
    return e.SendMsg(`ClanFAQS.GetAllFAQsForClan#1`, m(ke, t, n), Ae, {
      ePrivilege: 1,
    });
  }
  e.GetAllFAQsForClan = f;
  function p(e, t, n) {
    return e.SendMsg(
      `ClanFAQS.GetAllLatestVersionPublishedFAQS#1`,
      m(je, t, n),
      Me,
      { ePrivilege: 1 },
    );
  }
  e.GetAllLatestVersionPublishedFAQS = p;
  function ee(e, t, n) {
    return e.SendMsg(`ClanFAQS.CheckFAQPermissions#1`, m(Ne, t, n), Pe, {
      ePrivilege: 1,
    });
  }
  e.CheckFAQPermissions = ee;
  function te(e, t, n) {
    return e.SendMsg(`ClanFAQS.SearchFAQs#1`, m(Fe, t, n), Ie, {
      bConstMethod: !0,
      ePrivilege: 0,
      eWebAPIKeyRequirement: 1,
      rgBrowserAPISites: [`help`],
    });
  }
  e.SearchFAQs = te;
  function ne(e, t, n) {
    return e.SendMsg(
      `ClanFAQS.FetchLocalizationFromCrowdIn#1`,
      m(K, t, n),
      Re,
      { bConstMethod: !0, ePrivilege: 5, rgBrowserAPISites: [`community`] },
    );
  }
  e.FetchLocalizationFromCrowdIn = ne;
  function re(e, t, n) {
    return e.SendMsg(`ClanFAQS.GetCrowdInMetadata#1`, m(q, t, n), ze, {
      ePrivilege: 5,
      rgBrowserAPISites: [`community`],
    });
  }
  e.GetCrowdInMetadata = re;
})((J ||= {}));
var Be = e(t()),
  Y = e(o()),
  X = class e {
    m_mapFAQSummaries = new Map();
    m_mapFAQPublishedContent = new Map();
    m_mapFAQDrafts = new Map();
    m_bHasFAQEdit = !1;
    m_steamInterface = null;
    static s_Singleton;
    static Get() {
      return ((e.s_Singleton ||= new e()), e.s_Singleton);
    }
    static Init(t) {
      e.Get().m_steamInterface = t;
    }
    constructor() {
      (i(this),
        O.IN_STEAMUI ||
          (this.ReadInitialPayload(), this.SetUpWebAPIInterface()));
    }
    SetUpWebAPIInterface() {
      let e = j(`faqstore`, `application_config`)?.webapi_token;
      this.m_steamInterface = le(new pe(O.WEBAPI_BASE_URL, e));
    }
    ReadInitialPayload() {
      let e = j(`faqstore`, `application_config`);
      if (this.BIsConfigValid(e)) {
        if (e.faqs)
          for (let t in e.faqs) {
            let n = e.faqs[t];
            n?.faq_id == t &&
              n?.language !== void 0 &&
              (this.m_mapFAQPublishedContent.has(t) ||
                this.m_mapFAQPublishedContent.set(t, new Map()),
              this.m_mapFAQPublishedContent.get(t).set(n.language, n));
          }
        if (e.alldrafts)
          for (let t in e.alldrafts) {
            let n = e.alldrafts[t];
            if (!n?.summary || !n.draft) continue;
            this.m_mapFAQSummaries.set(t, n.summary);
            let r = new Map();
            for (let e of n.draft) r.set(e.language, e);
            this.m_mapFAQDrafts.set(t, new N(this.m_mapFAQSummaries.get(t), r));
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
      let t = w.Init(L);
      (t.Body().set_steamid(M.CLANSTEAMID), t.Body().set_internal_name(e));
      let n = 2,
        r;
      try {
        let i = await J.Create(this.m_steamInterface.GetServiceTransport(), t);
        if (((n = i.GetEResult()), n == 1)) {
          r = i.Body().faq_id();
          let t = { faq_id: r, internal_name: e };
          this.m_mapFAQSummaries.set(r, t);
        } else console.error(`FAQStore.CreateFAQ: Create request failed:`, n);
      } catch (e) {
        let t = y(e);
        console.error(`FAQStore.CreateFAQ: caught error ` + t.strErrorMsg, t);
      }
      return { eResult: n, strFaqId: r };
    }
    async UpdateDraft(e, t, n, r) {
      let i = w.Init(H);
      (i.Body().set_steamid(M.CLANSTEAMID),
        i.Body().set_faq_id(e),
        i.Body().set_language(t),
        i.Body().set_content(r),
        i.Body().set_title(n));
      let a = 2,
        o = 0;
      try {
        let e = await J.UpdateDraft(
          this.m_steamInterface.GetServiceTransport(),
          i,
        );
        ((a = e.GetEResult()),
          a == 1
            ? (o = e.Body().last_update_timestamp())
            : console.error(`FAQStore.UpdateDraft request failed:`, a));
      } catch (e) {
        let t = y(e);
        console.error(`FAQStore.UpdateDraft: caught error ` + t.strErrorMsg, t);
      }
      return { eResult: a, rtUpdateTime: o };
    }
    async UpdateJsonData(e, t) {
      let n = JSON.stringify(t),
        r = w.Init(B);
      (r.Body().set_steamid(M.CLANSTEAMID),
        r.Body().set_faq_id(e),
        r.Body().set_json_data(n));
      let i = 2;
      try {
        ((i = (
          await J.UpdateJsonData(this.m_steamInterface.GetServiceTransport(), r)
        ).GetEResult()),
          i == 1
            ? (this.m_mapFAQSummaries.get(e).json_data = n)
            : console.error(`FAQStore.UpdateJsonData request failed:`, i));
      } catch (e) {
        let t = y(e);
        console.error(
          `FAQStore.UpdateJsonData: caught error ` + t.strErrorMsg,
          t,
        );
      }
      return i;
    }
    async GetFAQVersion(e, t, n) {
      let r = w.Init(W);
      (r.Body().set_steamid(M.CLANSTEAMID),
        r.Body().set_faq_id(e),
        r.Body().set_version(t),
        r.Body().set_language(n));
      try {
        let e = await J.GetFAQVersion(
            this.m_steamInterface.GetServiceTransport(),
            r,
          ),
          t = e.GetEResult();
        if (t == 1) return e.Body().faq().toObject();
        console.error(`FAQStore.GetFAQVersion request failed:`, t);
      } catch (e) {
        let t = y(e);
        console.error(
          `FAQStore.GetFAQVersion: caught error ` + t.strErrorMsg,
          t,
        );
      }
      return null;
    }
    async DeleteFAQ(e) {
      let t = w.Init(R);
      (t.Body().set_steamid(M.CLANSTEAMID), t.Body().set_faq_id(e));
      let n = 2;
      try {
        ((n = (
          await J.Delete(this.m_steamInterface.GetServiceTransport(), t)
        ).GetEResult()),
          n == 1
            ? (this.m_mapFAQDrafts.delete(e),
              this.m_mapFAQPublishedContent.delete(e),
              this.m_mapFAQSummaries.delete(e))
            : console.error(`FAQStore.DeleteFAQ request failed:`, n));
      } catch (e) {
        let t = y(e);
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
      if (!r) return null;
      let i = r.get(n);
      return (
        !i &&
          e.sm_mapFallbackLanguages.has(n) &&
          (i = r.get(e.sm_mapFallbackLanguages.get(n))),
        !i && n != 0 && !E() && (i = r.get(0)),
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
      if (this.m_mapFAQDrafts.has(e)) return this.m_mapFAQDrafts.get(e);
      let t = w.Init(G);
      (t.Body().set_steamid(M.CLANSTEAMID), t.Body().set_faq_id(e));
      let n = 2;
      try {
        let r = await J.GetAllDrafts(
          this.m_steamInterface.GetServiceTransport(),
          t,
        );
        if (((n = r.GetEResult()), n != 1))
          return (
            console.error(`FaqStore.LoadFAQDraftContent request failed:`, n),
            null
          );
        {
          let t = r.Body().summary().toObject();
          this.m_mapFAQSummaries.set(e, t);
          let n = new Map();
          r.Body()
            .draft()
            .forEach((e) => n.set(e.language(), e.toObject()));
          let i = new N(this.m_mapFAQSummaries.get(e), n);
          return (this.m_mapFAQDrafts.set(e, i), i);
        }
      } catch (e) {
        let t = y(e);
        console.error(
          `FaqStore.LoadFAQDraftContent: exception ` + t.strErrorMsg,
          t,
        );
      }
      return null;
    }
    async UpdateVisibility(e, t, n) {
      let r = w.Init(V);
      (r.Body().set_steamid(M.CLANSTEAMID),
        r.Body().set_faq_id(e),
        r.Body().set_visible_in_global_realm(t),
        r.Body().set_visible_in_china_realm(n));
      let i = 2;
      try {
        if (
          ((i = (
            await J.SetVisibility(
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
        let t = y(e);
        console.error(
          `FaqStore.UpdateVisibility: exception ` + t.strErrorMsg,
          t,
        );
      }
      return i;
    }
    async PublishDraftByLanguage(e, t) {
      if (!t || t.length == 0) return 1;
      let r = w.Init(U);
      (r.Body().set_steamid(M.CLANSTEAMID),
        r.Body().set_faq_id(e),
        t.forEach((e) => r.Body().add_language(e)));
      let i = 2;
      try {
        let a = await J.PublishDraft(
          this.m_steamInterface.GetServiceTransport(),
          r,
        );
        if (((i = a.GetEResult()), i === 1)) {
          let r = this.m_mapFAQSummaries.get(e);
          r &&
            n(() => {
              (this.m_mapFAQPublishedContent.has(e) ||
                this.m_mapFAQPublishedContent.set(e, new Map()),
                r.per_language_info.forEach((n) => {
                  let r = n.language;
                  if (t.indexOf(r) >= 0) {
                    n.last_publish_timestamp = Math.max(
                      n.last_publish_timestamp,
                      a.Body().last_publish_timestamp(),
                    );
                    let t = this.m_mapFAQDrafts
                      .get(e)
                      ?.GetLastSavedDraftVersion(r);
                    this.m_mapFAQPublishedContent.get(e).set(r, t);
                  }
                }));
            });
        } else console.error(`FaqStore.PublishDraftByLanguage: Failed ` + i);
      } catch (e) {
        let t = y(e);
        console.error(
          `FaqStore.PublishDraftByLanguage: exception ` + t.strErrorMsg,
          t,
        );
      }
      return i;
    }
    async UpdateInternalName(e, t) {
      let r = w.Init(z);
      (r.Body().set_steamid(M.CLANSTEAMID),
        r.Body().set_faq_id(e),
        r.Body().set_internal_name(t));
      let i = 2;
      try {
        ((i = (
          await J.UpdateInternalName(
            this.m_steamInterface.GetServiceTransport(),
            r,
          )
        ).GetEResult()),
          i === 1
            ? n(() => {
                (this.m_mapFAQSummaries.get(e)?.internal_name &&
                  (this.m_mapFAQSummaries.get(e).internal_name = t),
                  this.m_mapFAQDrafts.get(e)?.GetSummary()?.internal_name &&
                    (this.m_mapFAQDrafts.get(e).GetSummary().internal_name =
                      t));
              })
            : console.error(`FaqStore.UpdateInternalName: Failed ` + i));
      } catch (e) {
        let t = y(e);
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
        ?.forEach((e) => this.m_mapFAQDrafts.delete(e));
    }
    BHasFAQEdit() {
      return this.m_bHasFAQEdit;
    }
    async ExportEnglishDraftToCrowdin(e) {
      let t =
        O.COMMUNITY_BASE_URL +
        `faqs/` +
        M.VANITY_ID +
        `/ajaxpushtocrowdin/` +
        Z(e);
      await Be.default.get(t);
    }
    async ImportNonEnglishDraftsFromCrowdin(e, t, n) {
      let r =
          O.COMMUNITY_BASE_URL +
          `faqs/` +
          M.VANITY_ID +
          `/ajaxpullfromcrowdin/` +
          Z(e),
        i = new FormData();
      (i.append(`sessionid`, de()), i.append(`languages`, t.join(`,`)));
      let a = null;
      try {
        let t = await Be.default.post(r, i, {
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
      let o = y(a);
      return (
        console.error(`Could not import from crowdin`, e, o.strErrorMsg, o), []
      );
    }
    BHasLiveEnglishVersion(e) {
      return this.m_mapFAQSummaries
        .get(e)
        .per_language_info.some(
          (e) => e.language == 0 && e.last_publish_timestamp > 0,
        );
    }
    GetNonEnglishDraftsToPublish(e) {
      return this.m_mapFAQSummaries
        .get(e)
        .per_language_info.filter(
          (e) =>
            e.language != 0 &&
            e.last_update_timestamp > (e.last_publish_timestamp ?? 0),
        )
        .map((e) => e.language);
    }
  };
(_([s], X.prototype, `m_mapFAQSummaries`, void 0),
  _([c], X.prototype, `RemoveAllDirtyDrafts`, null));
var Ve = /^[0-9a-fA-F]+$/;
function He(e) {
  let t = e?.replace(/-/g, ``);
  return t?.length != 16 || !Ve.test(t)
    ? null
    : a.fromString(t, !0, 16).toString();
}
function Z(e) {
  let t = (`0000000000000000` + a.fromString(e, !0, 10).toString(16))
    .slice(-16)
    .toUpperCase();
  return `${t.slice(0, 4)}-${t.slice(4, 8)}-${t.slice(8, 12)}-${t.slice(12, 16)}`;
}
function Ue(e, t) {
  return [e && X.Get().GetFAQPublishedContent(e, t), !0];
}
function We(e) {
  let [t, n] = Y.useState(X.Get().GetFAQDraftContent(e)),
    [r, i] = Y.useState(!!t);
  return (
    (0, Y.useEffect)(() => {
      X.Get()
        .LoadFAQDraftContent(e)
        .then((e) => n(e))
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
  $ = l(),
  Xe = new Map([
    ...Array.from(ee.entries()),
    ...Array.from(ne.entries()),
    [`section`, { Constructor: Qe, autocloses: !1 }],
    [`img`, { Constructor: $e, autocloses: !1 }],
    [`exclude_realm`, { Constructor: et, autocloses: !1 }],
    [`button`, { Constructor: tt, autocloses: !1 }],
  ]),
  Ze = (e) => {
    let { text: t, bShowErrorInfo: n, version: r, language: i } = e,
      a = Y.useCallback(
        (e) =>
          new re(
            new ie(
              new ae(new oe()),
              e,
              [{ urlRegExp: /youtu.be|youtube.com/i, fnBBComponent: f }],
              {},
            ),
            e,
          ),
        [],
      ),
      o = Y.useMemo(() => new se(Xe, a, i ?? O.LANGUAGE), [a, i]);
    return (0, $.jsx)(`div`, {
      className: Je,
      children: o.ParseBBCode(t, { showErrorInfo: n, version: r }),
    });
  };
function Qe(e) {
  let t = p(e.args, `id`);
  t &&
    typeof t == `string` &&
    t.length > 0 &&
    t[0] === `#` &&
    (t = t.substring(1));
  let n = p(e.args, `style`),
    r = me(
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
    a = d(r, e.language, Number.parseInt(n));
  return a == null
    ? null
    : typeof a == `string`
      ? ((r = a),
        t
          ? (0, $.jsx)(u, { className: Q, src: r, alt: i })
          : ((r = r.replace(`http://`, `https://`)),
            (0, $.jsx)(`img`, { className: Q, src: r, alt: i })))
      : (0, $.jsx)(te, { className: Q, rgSources: a, alt: i });
}
function et(e) {
  let t = p(e.args);
  return (t == `global` && O.EREALM == b.k_ESteamRealmGlobal) ||
    (t == `china` && E())
    ? null
    : (0, $.jsx)($.Fragment, { children: e.children });
}
function tt(e) {
  let t = ce(p(e.args));
  return t
    ? (0, $.jsx)(ue, {
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
  q as d,
  J as f,
  He as i,
  Ue as l,
  X as n,
  Ke as o,
  Z as r,
  Ge as s,
  Ze as t,
  K as u,
};
