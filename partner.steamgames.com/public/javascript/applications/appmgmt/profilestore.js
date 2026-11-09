/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import {
  $t as e,
  Gt as t,
  Ht as n,
  Jt as r,
  Kt as i,
  S as a,
  Ut as o,
  Wt as s,
  Xt as c,
  Y as l,
  Yt as u,
  Z as d,
  _t as f,
  i as p,
  k as m,
  kt as ee,
  nt as h,
  on as g,
  qt as _,
  rt as te,
  x as ne,
  yt as v,
} from "./mobx.esm.js";
import { It as re, Lt as y, P as b, Rt as x, Yt as S, t as C } from "./src.js";
import {
  W as ie,
  Ya as w,
  ar as ae,
  da as oe,
  fn as se,
  oa as T,
  pn as ce,
} from "./dialogs.js";
import "./react-router.js";
import { i as le } from "./utils.js";
import { t as ue } from "./useQuery.js";
import { C as de, K as fe, n as pe } from "./tabulatorutils.js";
import { t as me } from "./axios.js";
import { t as he } from "./ajaxhooks.js";
import { t as E } from "./axiosutils.js";
import { n as ge, o as _e } from "./stringutils.js";
import { r as D, t as O } from "./eventdevfeaturestore.js";
import "./steamid.js";
import { t as k } from "./personautils.js";
import { t as A } from "./storeitemcache.js";
import { t as ve } from "./timeutils.js";
import "./fancytable.js";
function ye(e) {
  if (e?.jsondata?.rtime_discount_intent) return !!e.no_planned_discount;
}
function be(e) {
  if (!e?.jsondata?.rtime_ask_again) return;
  let t = Number(e.jsondata.ask_again_season),
    n = Number(e.jsondata.ask_again_year);
  return !(t >= 1 && t <= 4) || !(n > 0) ? null : { season: t, year: n };
}
function xe(e, t) {
  return {
    opt_in_name: t,
    opt_in: !1,
    appid: e,
    jsondata: { opt_in_name: t, opt_in: !1 },
  };
}
function Se(e) {
  return !!(e?.pruned && e.jsondata?.pruned_reason === `released`);
}
function Ce(e) {
  return !!(e?.pruned && e.jsondata?.pruned_reason === `mod`);
}
function we(e, t, n) {
  let r = e?.find((e) => e.section_id == t),
    i = (Array.isArray(r?.list_selection) ? r.list_selection : []).find(
      (e) => e.list_id == n,
    )?.selected_item_id;
  return i && i.length > 0 && i[0] != null ? i : [];
}
function Te(e, t, n, r) {
  let i = (e ?? []).filter((e) => e.section_id != t),
    a = e?.find((e) => e.section_id == t),
    o = Array.isArray(a?.list_selection) ? a.list_selection : [];
  return (
    i.push({
      ...a,
      section_id: t,
      list_selection: [
        ...o.filter((e) => e.list_id != n),
        { list_id: n, selected_item_id: [...r] },
      ],
    }),
    i
  );
}
var j = g(ee()),
  Ee = g(re()),
  M = g(me()),
  N = g(c(), 1),
  De = class e extends N.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.packageids || n(e.M()),
        N.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            packageids: {
              n: 1,
              r: !0,
              q: !0,
              br: t.readUint32,
              pbr: t.readPackedUint32,
              bw: u.writeRepeatedUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= i(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return s(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new N.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return o(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new N.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      _(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new N.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPublishing_GetPartnerPaidGivenPackageList_Request`;
    }
  },
  Oe = class e extends N.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.paid || n(e.M()),
        N.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { paid: { n: 1, c: ke, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= i(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return s(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new N.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return o(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new N.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      _(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new N.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPublishing_GetPartnerPaidGivenPackageList_Response`;
    }
  },
  ke = class e extends N.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.partnerid || n(e.M()),
        N.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            partnerid: { n: 1, br: t.readUint32, bw: u.writeUint32 },
            packageid: { n: 2, br: t.readUint32, bw: u.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= i(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return s(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new N.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return o(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new N.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      _(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new N.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPublishing_GetPartnerPaidGivenPackageList_Response_CPackageAndPartnerPair`;
    }
  },
  Ae = class e extends N.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.opt_in_name || n(e.M()),
        N.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            opt_in_name: { n: 1, br: t.readString, bw: u.writeString },
            targeting_flag: {
              n: 2,
              br: t.readFixed64String,
              bw: u.writeFixed64String,
            },
            settings_flag: {
              n: 3,
              br: t.readFixed64String,
              bw: u.writeFixed64String,
            },
            email_templates: { n: 4, br: t.readString, bw: u.writeString },
            start_rtime: { n: 5, d: 0, br: t.readUint32, bw: u.writeUint32 },
            end_rtime: { n: 6, d: 0, br: t.readUint32, bw: u.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= i(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return s(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new N.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return o(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new N.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      _(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new N.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPublishing_CreatePartnerAppOptInEmail_Request`;
    }
  },
  je = class e extends N.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.email_def_id || n(e.M()),
        N.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            email_def_id: {
              n: 1,
              br: t.readFixed64String,
              bw: u.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= i(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return s(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new N.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return o(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new N.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      _(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new N.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPublishing_CreatePartnerAppOptInEmail_Response`;
    }
  },
  Me = class e extends N.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.email_def_id || n(e.M()),
        N.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            email_def_id: {
              n: 1,
              br: t.readFixed64String,
              bw: u.writeFixed64String,
            },
            targeting_flag: {
              n: 2,
              br: t.readFixed64String,
              bw: u.writeFixed64String,
            },
            settings_flag: {
              n: 3,
              br: t.readFixed64String,
              bw: u.writeFixed64String,
            },
            email_templates: { n: 4, br: t.readString, bw: u.writeString },
            start_rtime: { n: 5, d: 0, br: t.readUint32, bw: u.writeUint32 },
            end_rtime: { n: 6, d: 0, br: t.readUint32, bw: u.writeUint32 },
            reviewed: { n: 7, d: !1, br: t.readBool, bw: u.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= i(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return s(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new N.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return o(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new N.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      _(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new N.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPublishing_UpdatePartnerAppOptInEmail_Request`;
    }
  },
  Ne = class e extends N.Message {
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
      return `CPublishing_UpdatePartnerAppOptInEmail_Response`;
    }
  },
  P = class e extends N.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.accounts_examined || n(e.M()),
        N.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            accounts_examined: { n: 1, br: t.readUint32, bw: u.writeUint32 },
            accounts_emailed: { n: 2, br: t.readUint32, bw: u.writeUint32 },
            accounts_not_emailed_opted_out: {
              n: 3,
              br: t.readUint32,
              bw: u.writeUint32,
            },
            accounts_email_failed: {
              n: 4,
              br: t.readUint32,
              bw: u.writeUint32,
            },
            completed: { n: 5, br: t.readBool, bw: u.writeBool },
            rt_last_updated: { n: 6, br: t.readUint32, bw: u.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= i(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return s(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new N.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return o(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new N.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      _(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new N.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPartnerAppOptInEmailStats`;
    }
  },
  Pe = class e extends N.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.email_def_id || n(e.M()),
        N.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            email_def_id: {
              n: 1,
              br: t.readFixed64String,
              bw: u.writeFixed64String,
            },
            force_resend: { n: 2, br: t.readBool, bw: u.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= i(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return s(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new N.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return o(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new N.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      _(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new N.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPublishing_SendPartnerAppOptInEmailAndWait_Request`;
    }
  },
  Fe = class e extends N.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.results || n(e.M()),
        N.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= { proto: e, fields: { results: { n: 1, c: P } } }), e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= i(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return s(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new N.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return o(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new N.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      _(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new N.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPublishing_SendPartnerAppOptInEmailAndWait_Response`;
    }
  },
  Ie = class e extends N.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.opt_in_name || n(e.M()),
        N.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            opt_in_name: { n: 1, br: t.readString, bw: u.writeString },
            targeting_flag: {
              n: 2,
              br: t.readFixed64String,
              bw: u.writeFixed64String,
            },
            settings_flag: {
              n: 3,
              br: t.readFixed64String,
              bw: u.writeFixed64String,
            },
            email_templates: { n: 4, br: t.readString, bw: u.writeString },
            start_rtime: { n: 5, br: t.readUint32, bw: u.writeUint32 },
            end_rtime: { n: 6, br: t.readUint32, bw: u.writeUint32 },
            stats: { n: 7, c: P },
            creator_accountid: { n: 8, br: t.readUint32, bw: u.writeUint32 },
            create_time: { n: 9, br: t.readUint32, bw: u.writeUint32 },
            last_update_time: { n: 10, br: t.readUint32, bw: u.writeUint32 },
            email_def_id: {
              n: 11,
              br: t.readFixed64String,
              bw: u.writeFixed64String,
            },
            completed: { n: 12, br: t.readBool, bw: u.writeBool },
            aborted: { n: 13, br: t.readBool, bw: u.writeBool },
            deleted: { n: 14, br: t.readBool, bw: u.writeBool },
            reviewed: { n: 15, br: t.readBool, bw: u.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= i(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return s(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new N.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return o(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new N.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      _(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new N.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPartnerAppOptInEmailDef`;
    }
  },
  Le = class e extends N.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.opt_in_name || n(e.M()),
        N.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            opt_in_name: { n: 1, br: t.readString, bw: u.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= i(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return s(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new N.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return o(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new N.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      _(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new N.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPublishing_GetPartnerAppOptInEmailDefAndStats_Request`;
    }
  },
  Re = class e extends N.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.defs || n(e.M()),
        N.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { defs: { n: 1, c: Ie, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= i(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return s(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new N.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return o(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new N.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      _(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new N.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPublishing_GetPartnerAppOptInEmailDefAndStats_Response`;
    }
  },
  ze = class e extends N.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.email_def_id || n(e.M()),
        N.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            email_def_id: {
              n: 1,
              br: t.readFixed64String,
              bw: u.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= i(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return s(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new N.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return o(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new N.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      _(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new N.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPublishing_GetEstimatePartnerAppOptInEmail_Request`;
    }
  },
  Be = class e extends N.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.stats || n(e.M()),
        N.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= { proto: e, fields: { stats: { n: 1, c: P } } }), e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= i(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return s(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new N.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return o(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new N.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      _(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new N.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPublishing_GetEstimatePartnerAppOptInEmail_Response`;
    }
  },
  Ve = class e extends N.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.email_def_id || n(e.M()),
        N.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            email_def_id: {
              n: 1,
              br: t.readFixed64String,
              bw: u.writeFixed64String,
            },
            appid: { n: 2, br: t.readUint32, bw: u.writeUint32 },
            partnerid: { n: 3, br: t.readUint32, bw: u.writeUint32 },
            language_override: {
              n: 4,
              d: 0,
              br: t.readUint32,
              bw: u.writeUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= i(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return s(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new N.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return o(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new N.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      _(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new N.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPublishing_TestFirePartnerAppOptInEmail_Request`;
    }
  },
  He = class e extends N.Message {
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
      return `CPublishing_TestFirePartnerAppOptInEmail_Response`;
    }
  },
  Ue = class e extends N.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.accountid || n(e.M()),
        N.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            accountid: { n: 1, br: t.readUint32, bw: u.writeUint32 },
            appid: { n: 2, br: t.readUint32, bw: u.writeUint32 },
            partnerid: { n: 3, br: t.readUint32, bw: u.writeUint32 },
            rtime_notified: { n: 4, br: t.readUint32, bw: u.writeUint32 },
            ignored_unverified_email: { n: 5, br: t.readBool, bw: u.writeBool },
            ignored_email_optout: { n: 6, br: t.readBool, bw: u.writeBool },
            status: { n: 7, br: t.readUint32, bw: u.writeUint32 },
            send_rtime: { n: 8, br: t.readUint32, bw: u.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= i(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return s(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new N.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return o(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new N.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      _(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new N.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPartnerOptInEmailTracking`;
    }
  },
  We = class e extends N.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.email_def_id || n(e.M()),
        N.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            email_def_id: {
              n: 1,
              br: t.readFixed64String,
              bw: u.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= i(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return s(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new N.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return o(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new N.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      _(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new N.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPublishing_GetOptInEmailTracking_Request`;
    }
  },
  Ge = class e extends N.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.email_def_id || n(e.M()),
        N.Message.initialize(this, t, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            email_def_id: {
              n: 1,
              br: t.readFixed64String,
              bw: u.writeFixed64String,
            },
            results: { n: 2, c: Ue, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= i(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return s(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new N.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return o(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new N.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      _(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new N.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPublishing_GetOptInEmailTracking_Response`;
    }
  },
  Ke = class e extends N.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || n(e.M()),
        N.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: t.readUint32, bw: u.writeUint32 },
            opt_in: { n: 2, br: t.readBool, bw: u.writeBool },
            opt_in_name: { n: 3, br: t.readString, bw: u.writeString },
            jsondata: { n: 4, br: t.readString, bw: u.writeString },
            type: { n: 5, br: t.readEnum, bw: u.writeEnum },
            accountid_add: { n: 6, br: t.readUint32, bw: u.writeUint32 },
            time_opted_in: { n: 7, br: t.readUint32, bw: u.writeUint32 },
            time_updated: { n: 8, br: t.readUint32, bw: u.writeUint32 },
            accountid_lastmod: { n: 9, br: t.readUint32, bw: u.writeUint32 },
            invited: { n: 10, br: t.readBool, bw: u.writeBool },
            accountid_remove: { n: 11, br: t.readUint32, bw: u.writeUint32 },
            time_opted_out: { n: 12, br: t.readUint32, bw: u.writeUint32 },
            pruned: { n: 13, br: t.readBool, bw: u.writeBool },
            accountid_prune: { n: 14, br: t.readUint32, bw: u.writeUint32 },
            time_pruned: { n: 15, br: t.readUint32, bw: u.writeUint32 },
            additional_featuring: { n: 16, br: t.readBool, bw: u.writeBool },
            feature_day: { n: 17, br: t.readUint32, bw: u.writeUint32 },
            accountid_invited: { n: 18, br: t.readUint32, bw: u.writeUint32 },
            no_planned_discount: { n: 19, br: t.readBool, bw: u.writeBool },
            pending_review: { n: 20, br: t.readUint32, bw: u.writeUint32 },
            appeal_state: { n: 21, br: t.readEnum, bw: u.writeEnum },
            accountid_appeal: { n: 22, br: t.readUint32, bw: u.writeUint32 },
            time_appeal_decision: {
              n: 23,
              br: t.readUint32,
              bw: u.writeUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= i(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return s(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new N.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return o(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new N.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      _(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new N.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPartnerAppOptInData`;
    }
  },
  qe = class e extends N.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || n(e.M()),
        N.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: t.readUint32, bw: u.writeUint32 },
            opt_in_name: { n: 2, br: t.readString, bw: u.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= i(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return s(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new N.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return o(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new N.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      _(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new N.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPublishing_GetSinglePartnerAppOptIns_Request`;
    }
  },
  Je = class e extends N.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.data || n(e.M()),
        N.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { data: { n: 1, c: Ke, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= i(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return s(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new N.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return o(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new N.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      _(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new N.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPublishing_GetSinglePartnerAppOptIns_Response`;
    }
  },
  Ye = class e extends N.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appids || n(e.M()),
        N.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appids: {
              n: 1,
              r: !0,
              q: !0,
              br: t.readUint32,
              pbr: t.readPackedUint32,
              bw: u.writeRepeatedUint32,
            },
            additional_featuring: {
              n: 2,
              d: !0,
              br: t.readBool,
              bw: u.writeBool,
            },
            opt_in_name: { n: 3, br: t.readString, bw: u.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= i(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return s(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new N.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return o(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new N.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      _(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new N.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPublishing_SetFeaturingOnPartnerAppOptIn_Request`;
    }
  },
  Xe = class e extends N.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appids || n(e.M()),
        N.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appids: {
              n: 1,
              r: !0,
              q: !0,
              br: t.readUint32,
              pbr: t.readPackedUint32,
              bw: u.writeRepeatedUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= i(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return s(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new N.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return o(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new N.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      _(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new N.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPublishing_SetFeaturingOnPartnerAppOptIn_Response`;
    }
  },
  Ze = class e extends N.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.opt_in_id || n(e.M()),
        N.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            opt_in_id: { n: 7, br: t.readUint32, bw: u.writeUint32 },
            opt_in_name: { n: 1, br: t.readString, bw: u.writeString },
            type: { n: 2, br: t.readEnum, bw: u.writeEnum },
            active: { n: 3, br: t.readBool, bw: u.writeBool },
            start_date: { n: 4, br: t.readUint32, bw: u.writeUint32 },
            end_date: { n: 5, br: t.readUint32, bw: u.writeUint32 },
            jsondata: { n: 6, br: t.readString, bw: u.writeString },
            last_modified_time: { n: 8, br: t.readUint32, bw: u.writeUint32 },
            last_modifier_accountid: {
              n: 9,
              br: t.readUint32,
              bw: u.writeUint32,
            },
            is_next_fest: { n: 10, br: t.readBool, bw: u.writeBool },
            next_fest_out_of_sync: { n: 11, br: t.readBool, bw: u.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= i(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return s(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new N.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return o(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new N.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      _(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new N.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `COptInDef`;
    }
  },
  Qe = class e extends N.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.opt_in_name || n(e.M()),
        N.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            opt_in_name: { n: 1, br: t.readString, bw: u.writeString },
            start: { n: 2, d: 0, br: t.readUint32, bw: u.writeUint32 },
            count: { n: 3, d: 20, br: t.readUint32, bw: u.writeUint32 },
            include_json: { n: 4, br: t.readBool, bw: u.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= i(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return s(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new N.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return o(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new N.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      _(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new N.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPublishing_GetOptInHistoryInternal_Request`;
    }
  },
  $e = class e extends N.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.opt_ins || n(e.M()),
        N.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { opt_ins: { n: 1, c: Ze, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= i(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return s(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new N.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return o(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new N.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      _(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new N.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPublishing_GetOptInHistoryInternal_Response`;
    }
  },
  et = class e extends N.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.opt_in_name || n(e.M()),
        N.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            opt_in_name: { n: 1, br: t.readString, bw: u.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= i(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return s(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new N.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return o(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new N.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      _(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new N.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPublishing_GetPartnerAppOptInsIDs_Request`;
    }
  },
  tt = class e extends N.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.opted_in_appids || n(e.M()),
        N.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            opted_in_appids: {
              n: 1,
              r: !0,
              q: !0,
              br: t.readUint32,
              pbr: t.readPackedUint32,
              bw: u.writeRepeatedUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= i(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return s(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new N.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return o(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new N.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      _(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new N.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPublishing_GetPartnerAppOptInsIDs_Response`;
    }
  },
  nt = class e extends N.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.opt_in_names || n(e.M()),
        N.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            opt_in_names: {
              n: 1,
              r: !0,
              q: !0,
              br: t.readString,
              bw: u.writeRepeatedString,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= i(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return s(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new N.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return o(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new N.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      _(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new N.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPublishing_GetOptInAppealsSummaryStats_Request`;
    }
  },
  rt = class e extends N.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.summary || n(e.M()),
        N.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { summary: { n: 1, c: it, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= i(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return s(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new N.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return o(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new N.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      _(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new N.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPublishing_GetOptInAppealsSummaryStats_Response`;
    }
  },
  it = class e extends N.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.opt_in_name || n(e.M()),
        N.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            opt_in_name: { n: 1, br: t.readString, bw: u.writeString },
            open_appeals: { n: 2, br: t.readUint32, bw: u.writeUint32 },
            reject_appeals: { n: 3, br: t.readUint32, bw: u.writeUint32 },
            accepted_appeals: { n: 4, br: t.readUint32, bw: u.writeUint32 },
            appeal_account_id: { n: 5, br: t.readUint32, bw: u.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= i(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return s(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new N.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return o(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new N.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      _(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new N.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPublishing_GetOptInAppealsSummaryStats_Response_CSummary`;
    }
  },
  at = class e extends N.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.inviteid || n(e.M()),
        N.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            inviteid: { n: 1, br: t.readUint64String, bw: u.writeUint64String },
            accountid_sender: { n: 2, br: t.readUint32, bw: u.writeUint32 },
            email: { n: 3, br: t.readString, bw: u.writeString },
            real_name: { n: 4, br: t.readString, bw: u.writeString },
            note: { n: 5, br: t.readString, bw: u.writeString },
            time_sent: { n: 6, br: t.readUint32, bw: u.writeUint32 },
            current_state: { n: 7, br: t.readEnum, bw: u.writeEnum },
            pub_rights: {
              n: 8,
              br: t.readUint64String,
              bw: u.writeUint64String,
            },
            app_rights: {
              n: 9,
              br: t.readUint64String,
              bw: u.writeUint64String,
            },
            time_receiver_responded: {
              n: 10,
              br: t.readUint32,
              bw: u.writeUint32,
            },
            accountid: { n: 11, br: t.readUint32, bw: u.writeUint32 },
            time_partner_responded: {
              n: 12,
              br: t.readUint32,
              bw: u.writeUint32,
            },
            accountid_partner: { n: 13, br: t.readUint32, bw: u.writeUint32 },
            partnerid: { n: 14, br: t.readUint32, bw: u.writeUint32 },
            time_last_updated: { n: 15, br: t.readUint32, bw: u.writeUint32 },
            sender_ip: { n: 16, br: t.readString, bw: u.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= i(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return s(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new N.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return o(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new N.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      _(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new N.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `MembershipInvite`;
    }
  },
  ot = class e extends N.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.partnerid || n(e.M()),
        N.Message.initialize(this, t, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            partnerid: { n: 1, br: t.readUint32, bw: u.writeUint32 },
            filter_states: {
              n: 2,
              r: !0,
              q: !0,
              br: t.readEnum,
              pbr: t.readPackedEnum,
              bw: u.writeRepeatedEnum,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= i(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return s(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new N.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return o(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new N.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      _(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new N.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPartnerMembershipInvite_GetInvites_Request`;
    }
  },
  st = class e extends N.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.invites || n(e.M()),
        N.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { invites: { n: 1, c: at, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= i(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return s(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new N.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return o(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new N.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      _(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new N.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPartnerMembershipInvite_GetInvites_Response`;
    }
  },
  ct;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(`Publishing.GetSinglePartnerAppOptIn#1`, v(qe, t, n), Je, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  e.GetSinglePartnerAppOptIn = t;
  function n(e, t, n) {
    return e.SendMsg(
      `Publishing.SetFeaturingOnPartnerAppOptIn#1`,
      v(Ye, t, n),
      Xe,
      { ePrivilege: 1, rgBrowserAPISites: [`partner`] },
    );
  }
  e.SetFeaturingOnPartnerAppOptIn = n;
  function r(e, t, n) {
    return e.SendMsg(`Publishing.GetOptInHistoryInternal#1`, v(Qe, t, n), $e, {
      ePrivilege: 4,
    });
  }
  e.GetOptInHistoryInternal = r;
  function i(e, t, n) {
    return e.SendMsg(`Publishing.GetPartnerAppOptInsIDs#1`, v(et, t, n), tt, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  e.GetPartnerAppOptInsIDs = i;
  function a(e, t, n) {
    return e.SendMsg(
      `Publishing.GetOptInAppealsSummaryStats#1`,
      v(nt, t, n),
      rt,
      { bConstMethod: !0, ePrivilege: 1, rgBrowserAPISites: [`partner`] },
    );
  }
  e.GetOptInAppealsSummaryStats = a;
  function o(e, t, n) {
    return e.SendMsg(
      `Publishing.CreatePartnerAppOptInEmails#1`,
      v(Ae, t, n),
      je,
      { ePrivilege: 1, rgBrowserAPISites: [`partner`] },
    );
  }
  e.CreatePartnerAppOptInEmails = o;
  function s(e, t, n) {
    return e.SendMsg(
      `Publishing.UpdatePartnerAppOptInEmails#1`,
      v(Me, t, n),
      Ne,
      { ePrivilege: 1, rgBrowserAPISites: [`partner`] },
    );
  }
  e.UpdatePartnerAppOptInEmails = s;
  function c(e, t, n) {
    return e.SendMsg(
      `Publishing.SendPartnerOptInEmailAndWait#1`,
      v(Pe, t, n),
      Fe,
      { ePrivilege: 1, rgBrowserAPISites: [`partner`] },
    );
  }
  e.SendPartnerOptInEmailAndWait = c;
  function l(e, t, n) {
    return e.SendMsg(
      `Publishing.GetPartnerAppOptInEmailDefAndStats#1`,
      v(Le, t, n),
      Re,
      { ePrivilege: 1, rgBrowserAPISites: [`partner`] },
    );
  }
  e.GetPartnerAppOptInEmailDefAndStats = l;
  function u(e, t, n) {
    return e.SendMsg(
      `Publishing.GetEstimatePartnerAppOptInEmail#1`,
      v(ze, t, n),
      Be,
      { ePrivilege: 1, rgBrowserAPISites: [`partner`] },
    );
  }
  e.GetEstimatePartnerAppOptInEmail = u;
  function d(e, t, n) {
    return e.SendMsg(
      `Publishing.TestFirePartnerAppOptInEmail#1`,
      v(Ve, t, n),
      He,
      { ePrivilege: 1, rgBrowserAPISites: [`partner`] },
    );
  }
  e.TestFirePartnerAppOptInEmail = d;
  function f(e, t, n) {
    return e.SendMsg(`Publishing.GetOptInEmailTracking#1`, v(We, t, n), Ge, {
      ePrivilege: 1,
      rgBrowserAPISites: [`partner`],
    });
  }
  e.GetOptInEmailTracking = f;
  function p(e, t, n) {
    return e.SendMsg(
      `Publishing.GetPartnerPaidGivenPackageList#1`,
      v(De, t, n),
      Oe,
      { bConstMethod: !0, ePrivilege: 4 },
    );
  }
  e.GetPartnerPaidGivenPackageList = p;
})((ct ||= {}));
var lt;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(`PartnerMembershipInvite.GetInvites#1`, v(ot, t, n), st, {
      bConstMethod: !0,
      ePrivilege: 11,
    });
  }
  e.GetInvites = t;
})((lt ||= {}));
var F = class e {
  m_mapPackageDiscountsById = new Map();
  m_mapDiscountCallbackList = new Map();
  m_mapPackageDiscountsByPackageId = new Map();
  m_mapPackageCallbackList = new Map();
  m_mapPackageDiscountsByDiscountEventId = new Map();
  m_mapDiscountEventCallbackList = new Map();
  m_allDiscountCallbackList = new y();
  m_mapMaxDiscountPercentageByPackageId = new Map();
  m_mapExistingPackageRequests = new Map();
  static s_Singleton;
  static Get() {
    return (
      e.s_Singleton || ((e.s_Singleton = new e()), e.s_Singleton.Init()),
      e.s_Singleton
    );
  }
  constructor() {}
  Init() {
    let e = d(`package_discounts`, `application_config`);
    this.BIsDiscountPayloadValid(e) && this.InternalAddDiscounts(e);
    let t = d(`max_discount_percentages`, `application_config`);
    if (this.BIsMaxDiscountPayloadValid(t))
      for (let e in t)
        this.m_mapMaxDiscountPercentageByPackageId.set(Number(e), t[e]);
  }
  InternalAddDiscounts(e, t) {
    let n = new Set(),
      r = new Set();
    for (let t of e)
      (t.discountEventID?.length || (t.discountEventID = ut(t)),
        this.m_mapPackageDiscountsById.set(t.nDiscountID, t),
        this.GetCallbackListForDiscount(t.nDiscountID).Dispatch(t),
        this.m_mapPackageDiscountsByPackageId.has(t.packageID) ||
          this.m_mapPackageDiscountsByPackageId.set(t.packageID, new Map()),
        this.m_mapPackageDiscountsByPackageId
          .get(t.packageID)
          .set(t.nDiscountID, t),
        n.add(t.packageID),
        this.m_mapPackageDiscountsByDiscountEventId.has(t.discountEventID) ||
          this.m_mapPackageDiscountsByDiscountEventId.set(
            t.discountEventID,
            new Map(),
          ),
        this.m_mapPackageDiscountsByDiscountEventId
          .get(t.discountEventID)
          .set(t.nDiscountID, t),
        r.add(t.discountEventID));
    for (let e of t ?? [])
      (this.m_mapPackageDiscountsByPackageId.has(e) ||
        this.m_mapPackageDiscountsByPackageId.set(e, new Map()),
        n.add(e));
    (n.forEach((e) =>
      this.GetCallbackListForPackage(e).Dispatch(
        this.GetAllDiscountsForPackage(e),
      ),
    ),
      r.forEach((e) =>
        this.GetCallbackListForDiscountEvent(e).Dispatch(
          this.GetAllDiscountsForDiscountEvent(e),
        ),
      ),
      this.GetGlobalCallbackList().Dispatch(
        this.GetAllDiscountsForAllPackages(),
      ));
  }
  InternalDeleteDiscount(e, t, n) {
    (this.m_mapPackageDiscountsById.delete(e),
      this.m_mapPackageDiscountsByPackageId.get(t)?.delete(e),
      this.m_mapPackageDiscountsByDiscountEventId.get(n)?.delete(e),
      this.GetCallbackListForDiscount(e).Dispatch(null),
      this.GetCallbackListForPackage(t).Dispatch(
        this.GetAllDiscountsForPackage(t),
      ),
      this.GetCallbackListForDiscountEvent(n).Dispatch(
        this.GetAllDiscountsForDiscountEvent(n),
      ),
      this.GetGlobalCallbackList().Dispatch(
        this.GetAllDiscountsForAllPackages(),
      ));
  }
  BIsDiscountPayloadValid(e) {
    let t = e;
    if (t && Array.isArray(t)) {
      if (t.length == 0) return !0;
      let e = t[0];
      if (
        e.nDiscountID &&
        typeof e.nDiscountID == `number` &&
        e.packageID &&
        typeof e.packageID == `number`
      )
        return !0;
    }
    return !1;
  }
  BIsMaxDiscountPayloadValid(e) {
    let t = e;
    if (t && typeof t == `object`) {
      for (let e in t)
        if (isNaN(parseInt(e)) || (t[e] !== null && typeof t[e] != `number`))
          return !1;
      return !0;
    }
    return !1;
  }
  async LoadPackageDiscounts(e, t, n = 0) {
    let r = S(e).sort().join(`,`);
    return (
      this.m_mapExistingPackageRequests.has(r) ||
        this.m_mapExistingPackageRequests.set(
          r,
          this.InternalLoadPackageDiscounts(e, t, n),
        ),
      this.m_mapExistingPackageRequests.get(r)
    );
  }
  async InternalLoadPackageDiscounts(e, t, n = 0) {
    let r = new Set();
    for (let t of e)
      !this.m_mapPackageDiscountsByPackageId.has(t) && t != 0 && r.add(t);
    let i = Array.from(r).sort();
    if (i.length == 0) return 1;
    let a = null,
      o = new Promise((e, t) => {
        a = e;
      }),
      s = d(`publisherid`, `application_config`),
      c = null,
      l = null;
    try {
      let e = [],
        a = [];
      for (; i.length > 0;) {
        let r = i.splice(0, 50);
        (a.push(r), e.push(this.LoadPackageDiscountsFromPHP(s, r, t, n)));
      }
      let o = await Promise.all(e),
        u = [];
      for (let e of o)
        if (
          ((l = a.unshift()),
          e?.status == 200 && e.data?.success == 1 && e.data.discounts)
        )
          e.data.discounts.forEach((e) => u.push(e));
        else {
          c = { response: e };
          break;
        }
      c ?? this.InternalAddDiscounts(u, Array.from(r));
    } catch (e) {
      c = e;
    }
    if (c == null) a(1);
    else {
      let e = E(c);
      (console.error(
        `Could not load Discounts for packages`,
        l,
        e.strErrorMsg,
        e,
      ),
        a(c?.response?.data?.success ?? 2));
    }
    return o;
  }
  async LoadPackageDiscountsFromPHP(e, t, n, r = 0) {
    let i = { packageids: t.join(`,`), origin: self.origin },
      a =
        h.PARTNER_BASE_URL + `promotion/discounts/ajaxgetpackagediscounts/` + e,
      o,
      s = 3;
    for (; s-- > 0;)
      try {
        if (
          ((o = await M.default.get(a, {
            params: i,
            withCredentials: !0,
            cancelToken: n?.token,
            timeout: r,
          })),
          o?.status == 200 && o.data?.success == 1 && o.data.discounts)
        )
          return o;
      } catch (e) {
        if (s == 0) throw e;
        console.error(e);
      }
    return o;
  }
  async SaveDiscountToServer(e, t) {
    let n = h.PARTNER_BASE_URL + `packages/createoreditdiscount/` + e.packageID,
      r = new FormData();
    (r.append(`sessionid`, l()),
      e.nDiscountID && r.append(`id`, e.nDiscountID.toString()),
      r.append(`name`, e.strDiscountName),
      r.append(`description`, e.strDiscountDescription),
      e.discountEventID &&
        !I(e.discountEventID) &&
        r.append(`type`, e.discountEventID),
      r.append(`percent`, e.nDiscountPct.toString()),
      r.append(`start_date`, new Date(e.rtStartDate * 1e3).toISOString()),
      r.append(`end_date`, new Date(e.rtEndDate * 1e3).toISOString()));
    let i = null;
    try {
      let a = await M.default.post(n, r, {
        withCredentials: !0,
        cancelToken: t?.token,
      });
      if (
        ((a.data.msg = a.data.msg ?? a.data.message),
        a?.status == 200 && a.data?.success == 1 && a.data.discountid)
      )
        return (
          (e.bChangedLocally = !1),
          (e.nDiscountID = a.data.discountid),
          (e.nDiscountPct = a.data.percentage),
          this.InternalAddDiscounts([e]),
          a.data
        );
      i = { response: a };
    } catch (e) {
      i = e;
    }
    let a = E(i);
    return (
      console.error(
        `CPackageDiscountStore.SaveDiscountToServer: failed`,
        a.strErrorMsg,
        a,
      ),
      i?.response?.data ?? { success: 2 }
    );
  }
  async DeleteDiscountOnServer(e, t, n, r) {
    let i = h.PARTNER_BASE_URL + `packages/removepackagediscount/` + t,
      a = new FormData();
    (a.append(`sessionid`, l()), a.append(`discountid`, e.toString()));
    let o = null;
    try {
      let s = await M.default.post(i, a, {
        withCredentials: !0,
        cancelToken: r?.token,
      });
      if (s?.status == 200 && s.data?.success == 1)
        return (this.InternalDeleteDiscount(e, t, n), s.data);
      o = { response: s };
    } catch (e) {
      o = e;
    }
    let s = E(o);
    return (
      console.error(
        `CPackageDiscountStore.DeleteDiscountOnServer: failed`,
        s.strErrorMsg,
        s,
      ),
      o?.response?.data ?? { success: 2 }
    );
  }
  GetCallbackListForDiscount(e) {
    return (
      this.m_mapDiscountCallbackList.has(e) ||
        this.m_mapDiscountCallbackList.set(e, new y()),
      this.m_mapDiscountCallbackList.get(e)
    );
  }
  GetCallbackListForPackage(e) {
    return (
      this.m_mapPackageCallbackList.has(e) ||
        this.m_mapPackageCallbackList.set(e, new y()),
      this.m_mapPackageCallbackList.get(e)
    );
  }
  GetCallbackListForDiscountEvent(e) {
    return (
      this.m_mapDiscountEventCallbackList.has(e) ||
        this.m_mapDiscountEventCallbackList.set(e, new y()),
      this.m_mapDiscountEventCallbackList.get(e)
    );
  }
  GetGlobalCallbackList() {
    return this.m_allDiscountCallbackList;
  }
  GetDiscountByID(e) {
    return this.m_mapPackageDiscountsById.get(e);
  }
  GetAllDiscountsForPackage(e) {
    return this.m_mapPackageDiscountsByPackageId.has(e)
      ? Array.from(this.m_mapPackageDiscountsByPackageId.get(e)?.values() ?? [])
      : null;
  }
  GetAllDiscountsForAllPackages() {
    return Array.from(this.m_mapPackageDiscountsById.values());
  }
  GetAllDiscountsForDiscountEvent(e) {
    return Array.from(
      this.m_mapPackageDiscountsByDiscountEventId.get(e)?.values() ?? [],
    );
  }
  GetMaxDiscountPercentage(e) {
    return this.m_mapMaxDiscountPercentageByPackageId.get(e) ?? 95;
  }
  GetMaxDiscountPercentageForGroup(e) {
    let t = e.map((e) => this.GetMaxDiscountPercentage(e));
    return Math.min(...t);
  }
};
function ut(e) {
  return `custom-event-${e.rtStartDate}-${e.rtEndDate}-${ge(e.strDiscountName)}`;
}
function I(e) {
  return e.startsWith(`custom-event-`);
}
function dt(e) {
  return F.Get().GetDiscountByID(e);
}
function ft(e) {
  return F.Get().GetAllDiscountsForDiscountEvent(e);
}
function pt(e) {
  return F.Get().GetAllDiscountsForPackage(e);
}
function mt(e) {
  return F.Get().GetCallbackListForPackage(e);
}
function ht() {
  return F.Get().GetAllDiscountsForAllPackages();
}
function gt() {
  return F.Get().GetGlobalCallbackList();
}
function _t() {
  return j.useCallback((e, t, n) => F.Get().LoadPackageDiscounts(e, t, n), []);
}
function vt() {
  let e = (e) => F.Get().SaveDiscountToServer(e),
    t = (e, t, n) => F.Get().DeleteDiscountOnServer(e, t, n);
  return j.useMemo(() => ({ fnSaveDiscount: e, fnDeleteDiscount: t }), []);
}
function yt(e) {
  return new Map(Array.from(e.map((e) => [e, F.Get().GetDiscountByID(e)])));
}
function bt(e) {
  let t = D(),
    [n, r] = j.useState(F.Get().GetAllDiscountsForPackage(e));
  return (
    b(F.Get().GetCallbackListForPackage(e), r),
    j.useMemo(() => {
      let e = null;
      if (n == null) return { deepestDiscount: e, bLoading: !0 };
      if (n?.length > 0)
        for (let r of n)
          r.rtEndDate > t ||
            r.nDiscountPct <= 0 ||
            ((e == null ||
              r.nDiscountPct > e.nDiscountPct ||
              (r.nDiscountPct == e.nDiscountPct &&
                r.rtEndDate > e.rtEndDate)) &&
              (e = r));
      return { deepestDiscount: e, bLoading: !1 };
    }, [e, t, n])
  );
}
function xt(e) {
  let t = D();
  if (!e) return null;
  let n = null;
  return (
    e.forEach((e) => {
      let r = F.Get().GetAllDiscountsForPackage(e);
      if (r?.length > 0)
        for (let e of r)
          e.rtEndDate > t ||
            e.nDiscountPct <= 0 ||
            ((n == null ||
              e.nDiscountPct > n.nDiscountPct ||
              (e.nDiscountPct == n.nDiscountPct &&
                e.rtEndDate > n.rtEndDate)) &&
              (n = e));
    }),
    n
  );
}
function St(e, t, n) {
  let [r, i] = (0, j.useState)(),
    [a, o] = (0, j.useState)([]);
  return (
    (0, j.useEffect)(() => {
      if (t < n && e?.length > 0) {
        let r = [],
          a = [],
          s = [];
        for (let e = t; e < n; e += w.PerDay) (r.push(e), a.push(!1));
        (e.forEach((e) => {
          let i = F.Get().GetAllDiscountsForPackage(e);
          if (i?.length > 0)
            for (let e of i)
              e.rtStartDate > n ||
                e.rtEndDate < t ||
                (s.push(e),
                r.forEach((t, n) => {
                  t < e.rtEndDate &&
                    e.rtStartDate < t + w.PerDay &&
                    (a[n] = !0);
                }));
        }),
          o(s),
          i(a.filter((e) => e === !0).length));
      } else i(0);
    }, [e, t, n]),
    { nDaysInDiscount: r, rgDiscountWithOverlap: a }
  );
}
function Ct(e) {
  let t = D(),
    [n, r] = j.useState(F.Get().GetAllDiscountsForAllPackages());
  return (
    b(F.Get().GetGlobalCallbackList(), r),
    j.useMemo(() => {
      let r = null;
      if (n == null) return { mostRecentDiscount: r, bLoading: !0 };
      for (let n of e) {
        let e = F.Get().GetAllDiscountsForPackage(n) ?? [];
        for (let n of e)
          n.rtStartDate &&
            n.rtEndDate &&
            n.nDiscountPct &&
            n.rtStartDate < t &&
            (!r || r.rtEndDate < n.rtEndDate) &&
            (r = n);
      }
      return { mostRecentDiscount: r, bLoading: !1 };
    }, [t, e, n])
  );
}
function wt(e) {
  let [t, n] = j.useState(F.Get().GetAllDiscountsForDiscountEvent(e));
  return (b(F.Get().GetCallbackListForDiscountEvent(e), n), t);
}
function Tt(e) {
  let [t, n] = j.useState(F.Get().GetAllDiscountsForPackage(e));
  b(F.Get().GetCallbackListForPackage(e), n);
  let [r, i] = j.useState(!1),
    a = _t();
  return (
    j.useEffect(() => {
      if (t || !e) r || i(!0);
      else if (!r && a) {
        let t = M.default.CancelToken.source();
        a([e]).then(() => {
          t.token.reason || i(!0);
        });
      }
    }, [t, r, i, e, a]),
    t
  );
}
function Et(e) {
  return F.Get().GetMaxDiscountPercentage(e);
}
function Dt(e) {
  return e.some(
    (e) => e.nDiscountPct > F.Get().GetMaxDiscountPercentage(e.packageID),
  );
}
function Ot(e) {
  return F.Get().GetMaxDiscountPercentageForGroup(e);
}
var kt = `SaleEvent_DurationDiscount_Tooltip`,
  At = `discount`,
  jt = `proximity`,
  L = `unique`,
  R = class e {
    m_mapDiscountEvents = new Map();
    m_discountEventsListCallback = new y();
    m_mapDiscountEventCallback = new Map();
    m_mapAppList = new Map();
    m_mapAppListCallback = new Map();
    m_bLoadedViaInitOrFullLoad = !1;
    m_bLoadEventsRequestInFlight = !1;
    m_mapInflightDiscountLoadRequest = new Map();
    m_mapInflightDiscountAndAppListLoadRequest = new Map();
    GetFutureDiscountEvents() {
      let t = O();
      return Array.from(e.Get().m_mapDiscountEvents.values()).filter(
        (e) => e.end_date > t,
      );
    }
    GetAllDiscountEvents() {
      return Array.from(e.Get().m_mapDiscountEvents.values());
    }
    GetDiscountEventListCallback() {
      return this.m_discountEventsListCallback;
    }
    BLoadedViaInitOrFullLoad() {
      return this.m_bLoadedViaInitOrFullLoad;
    }
    GetDiscountEvent(e) {
      return this.m_mapDiscountEvents.get(e);
    }
    GetAppList(e) {
      return this.m_mapAppList.get(e);
    }
    GetDiscountEventCallback(e) {
      return (
        this.m_mapDiscountEventCallback.has(e) ||
          this.m_mapDiscountEventCallback.set(e, new y()),
        this.m_mapDiscountEventCallback.get(e)
      );
    }
    GetAppListCallback(e) {
      return (
        this.m_mapAppListCallback.has(e) ||
          this.m_mapAppListCallback.set(e, new y()),
        this.m_mapAppListCallback.get(e)
      );
    }
    async LoadAllDiscountEvents(e, t) {
      if (this.m_bLoadEventsRequestInFlight) return 29;
      let n =
          h.PARTNER_BASE_URL +
          `promotion/discounts/ajaxgetalldiscountevents/` +
          e,
        r = {},
        i = null;
      try {
        this.m_bLoadEventsRequestInFlight = !0;
        let e = await M.default.get(n, { params: r, cancelToken: t?.token });
        if (
          ((this.m_bLoadEventsRequestInFlight = !1),
          e?.status == 200 && e.data?.success == 1 && e.data.events)
        ) {
          for (let t of e.data.events) this.m_mapDiscountEvents.set(t.id, t);
          return (
            (this.m_bLoadedViaInitOrFullLoad = !0),
            this.m_discountEventsListCallback.Dispatch(
              this.GetAllDiscountEvents(),
            ),
            1
          );
        }
        i = { response: e };
      } catch (e) {
        i = e;
      }
      let a = E(i);
      return (
        console.error(`Could not load Discount Events`, a.strErrorMsg, a),
        i?.response?.data?.success ?? 2
      );
    }
    async CreateDiscountEvent(e, t, n, r, i, a, o, s) {
      let c =
          h.PARTNER_BASE_URL + `promotion/discounts/ajaxupdatediscountevent`,
        u = new FormData();
      (u.append(`sessionid`, l()),
        u.append(`name`, n),
        u.append(`start_time`, e.toString()),
        u.append(`end_time`, t.toString()),
        u.append(`strJSONDiscountInfo`, zt(n, r, i, a, o)));
      let d = null;
      try {
        let l = await M.default.post(c, u, {
          withCredentials: !0,
          cancelToken: s?.token,
        });
        if (l?.status == 200 && l.data?.success == 1 && l.data.eventid) {
          let s = {
            id: l.data.eventid,
            name: n,
            start_date: e,
            end_date: t,
            appids: o,
            publisherids: a,
            description: i,
            collision_type: jt,
            event: `1`,
            header: r,
            tooltip: kt,
            type: At,
            prevent_weeklong: ``,
          };
          return (
            this.m_mapDiscountEvents.set(s.id, s),
            this.m_discountEventsListCallback.Dispatch(
              this.GetAllDiscountEvents(),
            ),
            s
          );
        }
        d = { response: l };
      } catch (e) {
        d = e;
      }
      let f = E(d);
      return (
        console.error(
          `CDiscountEventStore.CreateDiscountEvent: failed`,
          f.strErrorMsg,
          f,
        ),
        null
      );
    }
    async UpdateDiscountEventPublisherAndAppList(e, t, n, r) {
      let i = this.m_mapDiscountEvents.get(e);
      if (!i)
        return (
          console.error(
            `UpdateDiscountEventPublisherAndAppList: updating discount event that we have not loaded`,
            e,
          ),
          null
        );
      let a =
          h.PARTNER_BASE_URL + `promotion/discounts/ajaxupdatediscountevent`,
        o = new FormData();
      (o.append(`sessionid`, l()),
        o.append(`start_time`, i.start_date.toString()),
        o.append(`end_time`, i.end_date.toString()),
        o.append(`strJSONDiscountInfo`, Bt(e, i, t, n)));
      let s = null;
      try {
        let e = await M.default.post(a, o, {
          withCredentials: !0,
          cancelToken: r?.token,
        });
        if (e?.status == 200 && e.data?.success == 1 && e.data.eventid) {
          let e = { ...i, appids: n, publisherids: t };
          return (
            this.m_mapDiscountEvents.set(e.id, e),
            this.m_discountEventsListCallback.Dispatch(
              this.GetAllDiscountEvents(),
            ),
            e
          );
        }
        s = { response: e };
      } catch (e) {
        s = e;
      }
      let c = E(s);
      return (
        console.error(
          `CDiscountEventStore.UpdateDiscountEventPublisherAndAppList: failed`,
          c.strErrorMsg,
          c,
        ),
        null
      );
    }
    async LoadSingleDiscountEvent(e) {
      return this.m_mapDiscountEvents.has(e)
        ? this.m_mapDiscountEvents.get(e)
        : (this.m_mapInflightDiscountLoadRequest.has(e) ||
            this.m_mapInflightDiscountLoadRequest.set(
              e,
              this.InternalLoadSingleDiscountEvent(e),
            ),
          this.m_mapInflightDiscountLoadRequest.get(e));
    }
    async InternalLoadSingleDiscountEvent(e) {
      let t = null;
      if (!e || e.length == 0 || e == `0`) return null;
      try {
        let n =
            h.PARTNER_BASE_URL + `promotion/discounts/ajaxgetdiscounteventbyid`,
          r = { sessionid: l(), discountid: e },
          i = await M.default.get(n, { params: r, withCredentials: !0 });
        if (
          i?.status == 200 &&
          i?.data?.success == 1 &&
          i?.data?.discount_event
        )
          return (
            this.m_mapDiscountEvents.set(e, i.data.discount_event),
            this.GetDiscountEventCallback(e).Dispatch(i.data.discount_event),
            i.data.discount_event
          );
        t = E(i);
      } catch (e) {
        t = E(e);
      }
      return (
        console.error(
          `CDiscountEventStore.InternalLoadSingleDiscountEvent failed: ` +
            t?.strErrorMsg,
          t,
        ),
        null
      );
    }
    async LoadSingleDiscountEventsAppList(e) {
      return this.m_mapAppList.has(e)
        ? {
            oDiscountEvent: this.m_mapDiscountEvents.get(e),
            rgAppList: this.m_mapAppList.get(e),
          }
        : (this.m_mapInflightDiscountAndAppListLoadRequest.has(e) ||
            this.m_mapInflightDiscountAndAppListLoadRequest.set(
              e,
              this.InternalLoadSingleDiscountEventsAppList(e),
            ),
          this.m_mapInflightDiscountAndAppListLoadRequest.get(e));
    }
    async InternalLoadSingleDiscountEventsAppList(e) {
      let t = null;
      if (!e || e.length == 0) return null;
      try {
        let n =
            h.PARTNER_BASE_URL +
            `promotion/discounts/ajaxgetdiscounteventapplist`,
          r = { sessionid: l(), discountid: e },
          i = await M.default.get(n, { params: r, withCredentials: !0 });
        if (
          i?.status == 200 &&
          i?.data?.success == 1 &&
          i?.data?.discount_event
        )
          return (
            this.m_mapDiscountEvents.set(e, i.data.discount_event),
            this.m_mapAppList.set(e, i.data.appid_list),
            this.GetDiscountEventCallback(e).Dispatch(i.data.discount_event),
            this.GetAppListCallback(e).Dispatch(i.data.appid_list),
            {
              oDiscountEvent: i.data.discount_event,
              rgAppList: i.data.appid_list,
            }
          );
        t = E(i);
      } catch (e) {
        t = E(e);
      }
      return (
        console.error(
          `CDiscountEventStore.InternalLoadSingleDiscountEventsAppList failed: ` +
            t?.strErrorMsg,
          t,
        ),
        null
      );
    }
    static s_Singleton;
    static Get() {
      return (
        e.s_Singleton || ((e.s_Singleton = new e()), e.s_Singleton.Init()),
        e.s_Singleton
      );
    }
    constructor() {}
    Init() {
      let e = d(`discount_events`, `application_config`);
      if (this.BIsConfigValid(e)) {
        for (let t of e) this.m_mapDiscountEvents.set(t.id, t);
        this.m_bLoadedViaInitOrFullLoad = !0;
      }
    }
    BIsConfigValid(e) {
      let t = e;
      return !!(t && Array.isArray(t));
    }
  };
(m([x], R.prototype, `GetDiscountEvent`, null),
  m([x], R.prototype, `GetAppList`, null),
  m([x], R.prototype, `CreateDiscountEvent`, null),
  m([x], R.prototype, `UpdateDiscountEventPublisherAndAppList`, null));
function Mt() {
  return R.Get().GetFutureDiscountEvents();
}
function Nt() {
  return R.Get().GetDiscountEventListCallback();
}
function Pt(e) {
  let { rgDiscountEvents: t, eResult: n } = Ft(0, e),
    r = [];
  return (
    t?.forEach((e) => {
      e.collision_type == `unique` && (r = r.concat(e));
    }),
    { rgMajorSaleDiscountEvents: r, eResult: n }
  );
}
function Ft(e, t) {
  let n = R.Get().BLoadedViaInitOrFullLoad(),
    [r, i] = j.useState(n ? R.Get().GetAllDiscountEvents() : null),
    [a, o] = j.useState(null),
    s = e || Number.parseInt(d(`publisherid`, `application_config`));
  (b(R.Get().GetDiscountEventListCallback(), i),
    j.useEffect(() => {
      R.Get().BLoadedViaInitOrFullLoad() ||
        R.Get().LoadAllDiscountEvents(s).then(o);
    }, [r, s]));
  let c = a ?? (r?.length ? 1 : null);
  return j.useMemo(
    () => ({
      rgDiscountEvents: t ? r : R.Get().GetFutureDiscountEvents(),
      eResult: c,
    }),
    [r, c, t],
  );
}
function z(e) {
  return R.Get().GetDiscountEvent(e);
}
function It(e) {
  let { data: t } = Lt(e);
  return t;
}
function Lt(e) {
  let [t, n] = (0, j.useState)(R.Get().GetDiscountEvent(e)),
    [r, i] = j.useState(!!e);
  return (
    j.useEffect(() => {
      (!t && e) || (t?.id != e && e)
        ? (async () => {
            try {
              let t = await R.Get().LoadSingleDiscountEvent(e);
              t && n(t);
            } finally {
              i(!1);
            }
          })()
        : i(!1);
    }, [e, t]),
    b(R.Get().GetDiscountEventCallback(e), n),
    { data: t, isLoading: r }
  );
}
function Rt(e) {
  let [t, n] = (0, j.useState)(R.Get().GetDiscountEvent(e)),
    [r, i] = (0, j.useState)(R.Get().GetAppList(e));
  return (
    (0, j.useEffect)(() => {
      ((!r && e) || (t?.id != e && e)) &&
        R.Get()
          .LoadSingleDiscountEventsAppList(e)
          .then((e) => {
            e && (n(e.oDiscountEvent), i(e.rgAppList));
          });
    }, [t?.id, r, e]),
    b(R.Get().GetDiscountEventCallback(e), n),
    b(R.Get().GetAppListCallback(e), i),
    r ? { oDiscountEvent: t, rgAppList: r } : null
  );
}
function zt(e, t, n, r, i) {
  return JSON.stringify({
    discount_event: {
      name: e,
      publisherids: r?.join(`,`),
      appids: i?.join(`,`),
      description: n,
      event: `1`,
      collision_type: jt,
      header: t,
      tooltip: kt,
      type: At,
    },
  });
}
function Bt(e, t, n, r) {
  return JSON.stringify({
    discount_event: {
      eventid: e,
      name: t.name,
      header: t.header,
      allowed_appids: r.join(`,`),
      allowed_publisherids: n.join(`,`),
      description: t.description,
      collision_type: t.collision_type,
      event: t.event,
      tooltip: t.tooltip,
      type: t.type,
      prevent_weeklong: t.prevent_weeklong,
    },
  });
}
function Vt() {
  return { fnCreateDiscountEvent: R.Get().CreateDiscountEvent };
}
function Ht() {
  return {
    fnUpdateDiscountEventAppAndPublisherList:
      R.Get().UpdateDiscountEventPublisherAndAppList,
  };
}
var B = class t {
  constructor() {
    ne(this);
  }
  static s_OptInRegs;
  m_mapRegistrations = new Map();
  m_mapRequestedAppIDs = new Map();
  m_mapOptInNameCallback = new Map();
  m_mapSingleAppRegistrationChange = new Map();
  m_loadCountChangeCallback = new y();
  BHasOptInRegistration(e, t) {
    return !!this.m_mapRegistrations.get(e)?.has(t);
  }
  GetOptInRegistrationPromise(e, t) {
    return this.m_mapRequestedAppIDs.get(t)?.get(e);
  }
  GetOptInRegistrationAndEligibilityForApp(e) {
    return this.m_mapRegistrations.get(e);
  }
  GetSingleAppRegistrationKey(e, t) {
    return `single_${e}_${t}`;
  }
  GetSingleAppRegistrationChange(e, t) {
    let n = this.GetSingleAppRegistrationKey(e, t);
    return (
      this.m_mapSingleAppRegistrationChange.has(n) ||
        this.m_mapSingleAppRegistrationChange.set(n, new y()),
      this.m_mapSingleAppRegistrationChange.get(n)
    );
  }
  GetExistingOptInRegistartion(e, t) {
    return this.m_mapRegistrations.has(e)
      ? this.m_mapRegistrations.get(e).get(t)
      : null;
  }
  GetLoadCountChange() {
    return this.m_loadCountChangeCallback;
  }
  GetLoadCount() {
    return this.m_mapRegistrations.size;
  }
  GetOptInRegistrationAndEligibilityForApps(t) {
    if (t.length == 0) return null;
    let n = new Map();
    for (let e of t) {
      let t = this.m_mapRegistrations.get(e);
      if (t)
        for (let e of t.keys()) {
          let t = n.get(e);
          ((t ||= 0), n.set(e, t + 1));
        }
    }
    let r = new Map(),
      i = t[0];
    return (
      n.forEach((n, a) => {
        if (n == t.length) {
          let t = this.m_mapRegistrations.get(i).get(a);
          (e(t, `Missing OptIn Restration`), r.set(a, t));
        }
      }),
      r.size > 0 ? r : null
    );
  }
  BHasOptionOnRegistration(e, t, n) {
    let r = this.GetRegistration(e, t);
    return !r || !r.opt_in
      ? !1
      : !n ||
          r?.jsondata?.dynamic_selection?.some(
            (e) =>
              e &&
              e.section_id == n.section_id &&
              e.list_selection?.some(
                (e) =>
                  e &&
                  e.list_id == n.list_id &&
                  e.selected_item_id?.includes(n.option_id),
              ),
          );
  }
  BHasOptInTrailer(e, t) {
    let n = this.GetRegistration(e, t);
    return !!(
      n &&
      n.opt_in &&
      n.jsondata?.trailer_permission &&
      n.jsondata.rtime_granting_trailer
    );
  }
  BHasOptInDemo(e, t) {
    let n = this.GetRegistration(e, t);
    return !!(
      n &&
      n.opt_in &&
      n.jsondata?.demo_permission &&
      n.jsondata.rtime_granting_demo
    );
  }
  BHasOptInGameProfile(e, t) {
    let n = this.GetRegistration(e, t);
    return !!(
      n &&
      n.opt_in &&
      n.jsondata?.game_profile_intent &&
      n.jsondata.rtime_granting_profile
    );
  }
  CreateRegistrationNotSaved(e, t) {
    return (
      console.log(`CreateOrGetRegistration: Creating new registration`),
      xe(e, t)
    );
  }
  CreateOrGetRegistration(e, t) {
    let n = this.m_mapRegistrations.get(e);
    n ||
      ((n = new Map()),
      this.m_mapRegistrations.set(e, n),
      this.GetLoadCountChange().Dispatch(this.m_mapRegistrations.size));
    let r = n.get(t);
    return (
      r
        ? console.log(
            `CreateOrGetRegistration: Re-using Previous Registration:`,
            r,
          )
        : (r = this.CreateRegistrationNotSaved(e, t)),
      r
    );
  }
  GetOptInRegistrationAndEligibilityForAppOrCreate(e, t) {
    let n = this.m_mapRegistrations.get(e);
    n ||
      ((n = new Map()),
      this.m_mapRegistrations.set(e, n),
      this.GetLoadCountChange().Dispatch(this.m_mapRegistrations.size));
    let r = n.get(t);
    return (
      r
        ? console.log(
            `CreateOrGetRegistration: Re-using Previous Registration:`,
            r,
          )
        : ((r = this.CreateRegistrationNotSaved(e, t)), n.set(t, r)),
      r
    );
  }
  GetRegistration(e, t) {
    return this.m_mapRegistrations.has(e) &&
      this.m_mapRegistrations.get(e).has(t)
      ? this.m_mapRegistrations.get(e).get(t)
      : null;
  }
  GetAllOptInRegistrations(e) {
    let t = this.m_mapRequestedAppIDs.get(e) || new Map();
    return Array.from(t.keys())
      .map((t) => this.m_mapRegistrations.get(t)?.get(e))
      .filter(Boolean);
  }
  GetOptInNameRegistrationsCallbackList(e) {
    return e
      ? (this.m_mapOptInNameCallback.has(e) ||
          this.m_mapOptInNameCallback.set(e, new y()),
        this.m_mapOptInNameCallback.get(e))
      : null;
  }
  UpdateRegAndTrackInStore(e, t) {
    let n = t.map((t) =>
      t.jsondata && t.jsondata !== ``
        ? { ...t, jsondata: JSON.parse(t.jsondata) }
        : { ...t, jsondata: { opt_in_name: e } },
    );
    return (
      n.forEach((t) => {
        (this.m_mapRegistrations.has(t.appid) ||
          (this.m_mapRegistrations.set(t.appid, new Map()),
          this.GetLoadCountChange().Dispatch(this.m_mapRegistrations.size)),
          this.m_mapRegistrations.get(t.appid).set(e, t));
      }),
      n
    );
  }
  async FetchOptInRegistrationForOptIn(e, t) {
    let n = h.PARTNER_BASE_URL + `optin/ajaxgetalloptinregistrations`,
      r = { sessionid: l(), opt_in_name: e, opt_in_only: t },
      i = await M.default.get(n, { params: r, withCredentials: !0 });
    return i?.data?.data
      ? this.UpdateRegAndTrackInStore(e, i.data.data)
      : i?.data?.data;
  }
  async FetchPendingReviewOptInRegistrationn(e) {
    let t = h.PARTNER_BASE_URL + `optin/ajaxgetpendingreviewregistrations`,
      n = { sessionid: l(), opt_in_name: e },
      r = await M.default.get(t, { params: n, withCredentials: !0 });
    return r?.data?.data
      ? this.UpdateRegAndTrackInStore(e, r.data.data)
      : r?.data?.data;
  }
  async LoadOptInRegistration(e, t, n) {
    if (this.GetRegistration(t, e)) return !0;
    let r = this.m_mapRequestedAppIDs.get(e)?.get(t);
    if (r) return r;
    try {
      let r = h.PARTNER_BASE_URL + `optin/ajaxgetoptinregistation`,
        i = { sessionid: l(), appid: t, opt_in_name: e },
        a = await M.default.get(r, {
          params: i,
          withCredentials: !0,
          cancelToken: n?.token,
        });
      if (a?.data?.success == 1 && a.data.optin_registration) {
        if (
          (typeof a.data.optin_registration.jsondata == `string` &&
            (a.data.optin_registration.jsondata = JSON.parse(
              a.data.optin_registration.jsondata,
            )),
          this.m_mapRegistrations.has(t))
        )
          this.m_mapRegistrations.get(t).set(e, a.data.optin_registration);
        else {
          let n = new Map();
          (n.set(e, a.data.optin_registration),
            this.m_mapRegistrations.set(t, n),
            this.GetLoadCountChange().Dispatch(this.m_mapRegistrations.size));
        }
        return !0;
      }
      {
        let e = E(a);
        console.error(
          `LoadOptInRegistration : failed with a response and: ` +
            e.strErrorMsg,
          e,
        );
      }
    } catch (e) {
      let t = E(e);
      console.error(`LoadOptInRegistration : failed with ` + t.strErrorMsg, t);
    }
    return !1;
  }
  async LoadMultiOptInRegistration(e, t, n, r) {
    if (t.length == 0 || e.length == 0) return !1;
    let i = null,
      a = new Promise((e, t) => {
        i = e;
      });
    ((e = S(e).sort()),
      (t = S(t).sort()),
      e.forEach((e) => {
        this.m_mapRequestedAppIDs.has(e) ||
          this.m_mapRequestedAppIDs.set(e, new Map());
      }));
    let o = [];
    if (
      (t.forEach((t) => {
        e.some(
          (e) =>
            !this.BHasOptInRegistration(t, e) &&
            !this.GetOptInRegistrationPromise(t, e),
        ) &&
          (o.push(t),
          e.forEach((e) => this.m_mapRequestedAppIDs.get(e).set(t, a)));
      }),
      o.length == 0)
    )
      return !0;
    let s = h.PARTNER_BASE_URL + `optin/ajaxbatchgetoptinregistation`,
      c = null;
    try {
      for (; o.length > 0;) {
        let t = 0,
          i = [];
        for (; o.length > 0 && t < 5;) {
          let r = o.splice(0, 50),
            a = {
              rgOptInNames: e.join(`,`),
              rgAppIDs: r.join(`,`),
              origin: self.origin,
            };
          (i.push(
            M.default.get(s, {
              params: a,
              withCredentials: !0,
              cancelToken: n?.token,
            }),
          ),
            (t += 1));
        }
        let a = await Promise.all(i);
        for (let e of a)
          if (
            e?.status == 200 &&
            e.data?.success == 1 &&
            e.data.optin_registrations?.length
          )
            this.InternalAddRegistrations(e.data.optin_registrations, r);
          else {
            c = { response: e };
            break;
          }
        this.GetLoadCountChange().Dispatch(this.m_mapRegistrations.size);
      }
    } catch (e) {
      c = e;
    }
    if (c == null) i(!0);
    else {
      let n = E(c);
      (console.error(`Could not load OptIn for Apps`, t, e, n.strErrorMsg, n),
        i(!1));
    }
    return a;
  }
  async RegisterAppForOptIn(e, t) {
    let n = {
      opt_in_name: t.startsWith(`sale_`) ? t : `sale_` + t,
      opt_in: !0,
    };
    return this.UpdateOptInRegistration(e, n);
  }
  async UpdateOptInRegistration(e, t) {
    let n = null;
    try {
      let r = new FormData();
      (r.append(`sessionid`, l()),
        Object.keys(t).forEach((e) => r.append(e, t[e])));
      let i = h.PARTNER_BASE_URL + `optin/ajaxupdateoptinregistration/` + e,
        a = await M.default.post(i, r, { withCredentials: !0 });
      if (a?.status == 200 && a.data?.success == 1) return null;
      n = E(a);
    } catch (e) {
      n = E(e);
    }
    return (
      console.error(
        `COptInRegistrations::UpdateOptInRegistration error ` + n.strErrorMsg,
        n,
      ),
      n.strErrorMsg
    );
  }
  async UpdateOptInRegistrationJson(e, t, n = !1) {
    let r = null;
    try {
      let i = new FormData();
      (i.append(`sessionid`, l()),
        i.append(`appid`, `` + e),
        i.append(`opt_in_name`, t.opt_in_name),
        i.append(`jsondata`, JSON.stringify(t)),
        n && i.append(`bCreatePendingInvite`, `true`));
      let a =
          h.PARTNER_BASE_URL + `optin/ajaxupdateoptinregistrationpayload/` + e,
        o = await M.default.post(a, i, { withCredentials: !0 });
      if (o?.status == 200 && o.data?.success == 1) {
        let n = t.opt_in_name.startsWith(`sale_`)
            ? t.opt_in_name
            : `sale_` + t.opt_in_name,
          r = this.m_mapRegistrations.get(e).get(n);
        r.jsondata = t;
        let i = { ...r };
        return (
          this.m_mapRegistrations.get(e).set(t.opt_in_name, i),
          this.GetSingleAppRegistrationChange(e, t.opt_in_name).Dispatch(i),
          null
        );
      }
      r = E(o);
    } catch (e) {
      r = E(e);
    }
    return (
      console.error(
        `COptInRegistrations::UpdateOptInRegistrationJson error ` +
          r.strErrorMsg,
        r,
      ),
      r.strErrorMsg
    );
  }
  async UpdateAppealState(e, t, n) {
    let r = null;
    try {
      let i = t.opt_in_name || t.jsondata.opt_in_name,
        a = new FormData();
      (a.append(`sessionid`, l()),
        a.append(`appid`, `` + e),
        a.append(`opt_in_name`, i),
        a.append(`approved`, `` + n));
      let o = h.PARTNER_BASE_URL + `optin/ajaxsetappealsdecision/` + e,
        s = await M.default.post(o, a, { withCredentials: !0 });
      if (s?.status == 200 && s.data?.success == 1) {
        let t = { ...this.m_mapRegistrations.get(e).get(i) };
        return (
          (t.accountid_appeal = te.accountid),
          (t.appeal_state = n ? 1 : 2),
          this.m_mapRegistrations.get(e).set(i, t),
          this.GetSingleAppRegistrationChange(e, i).Dispatch(t),
          !0
        );
      }
      r = E(s);
    } catch (e) {
      r = E(e);
    }
    return (
      console.error(
        `COptInRegistrations::UpdateAppealState error ` + r.strErrorMsg,
        r,
      ),
      !1
    );
  }
  static Get() {
    return (
      t.s_OptInRegs ||
        ((t.s_OptInRegs = new t()),
        (window.COptInRegistrations = t.s_OptInRegs),
        t.s_OptInRegs.Init()),
      t.s_OptInRegs
    );
  }
  InternalAddRegistrations(e, t) {
    let n = new Set();
    (e.forEach((e) => {
      if (!Number.isNaN(e.appid)) {
        let r = this.m_mapRegistrations.get(e.appid);
        if (
          (r || ((r = new Map()), this.m_mapRegistrations.set(e.appid, r)),
          e.jsondata && typeof e.jsondata == `string`)
        ) {
          let t = e.jsondata;
          e.jsondata = t.trim().length == 0 ? {} : JSON.parse(t);
        }
        (r.set(e.opt_in_name, e), t && t.Increment(), n.add(e.opt_in_name));
      }
    }),
      Array.from(n).forEach((e) => {
        this.GetOptInNameRegistrationsCallbackList(e).Dispatch(
          this.GetAllOptInRegistrations(e),
        );
      }));
  }
  Init() {
    let e = JSON.parse(
      JSON.stringify(d(`optin_registrations`, `application_config`)),
    );
    this.ValidateStoreDefault(e) && this.InternalAddRegistrations(e);
  }
  ValidateStoreDefault(e) {
    let t = e;
    return t && Array.isArray(t) && t.length > 0 && typeof t[0] == `object`
      ? typeof t[0].appid == `number` && typeof t[0].opt_in_name == `string`
      : !1;
  }
};
(m([x], B.prototype, `GetOptInRegistrationAndEligibilityForApp`, null),
  m([x], B.prototype, `GetOptInRegistrationAndEligibilityForApps`, null),
  m([x], B.prototype, `LoadMultiOptInRegistration`, null),
  m([x], B.prototype, `UpdateOptInRegistrationJson`, null),
  m([x], B.prototype, `UpdateAppealState`, null),
  m([p], B.prototype, `Init`, null));
function Ut(e, t) {
  let n = e.jsondata?.dynamic_selection;
  try {
    if (n) {
      let e = n
        .filter((e) => e.section_id == t.section_id)
        .map((e) => e.list_selection);
      if (e.length > 0 && e[0]) {
        let n = e[0]
          .filter((e) => e.list_id == t.list_id)
          .map((e) => e.selected_item_id);
        if (n.length > 0) return n[0];
      }
    }
  } catch (t) {
    console.log(`error: dynamic section`, n, e, t);
  }
  return [];
}
function Wt() {
  return j.useMemo(
    () => ({
      fnLoadMultiOptInRegistration: B.Get().LoadMultiOptInRegistration,
    }),
    [],
  );
}
function Gt(e, t, n) {
  let [r, i] = j.useState(null),
    a = he(`useMultiLoadOptInAppReg`);
  return (
    (0, j.useEffect)(() => {
      let r = t?.filter(Boolean);
      r?.length > 0 && e?.length > 0
        ? B.Get()
            .LoadMultiOptInRegistration(
              r.map(() => e),
              r,
              a,
              n,
            )
            .then(() => {
              let t = new Map();
              (r.forEach((n) => {
                let r = B.Get().GetRegistration(n, e);
                r && t.set(n, r);
              }),
                i(t));
            })
        : i(new Map());
    }, [e, t, a, n]),
    r
  );
}
function Kt(e) {
  let [t, n] = j.useState(B.Get().GetAllOptInRegistrations(e));
  return (b(B.Get().GetOptInNameRegistrationsCallbackList(e), n), t);
}
function qt(e) {
  let t = Kt(e),
    [n, r] = j.useState({
      nAppOptedIn: 0,
      nAppEligible: 0,
      nAppOptedOut: 0,
      nAppIneligible: 0,
    });
  return (
    j.useEffect(() => {
      if (t?.length > 0) {
        let e = {
          nAppOptedIn: 0,
          nAppEligible: 0,
          nAppOptedOut: 0,
          nAppIneligible: 0,
        };
        (t.forEach((t) => {
          t.restricted || t.pruned
            ? (e.nAppIneligible += 1)
            : t.opt_in
              ? ((e.nAppOptedIn += 1), (e.nAppEligible += 1))
              : !t.time_opted_in || t.invited
                ? (e.nAppEligible += 1)
                : (e.nAppOptedOut += 1);
        }),
          JSON.stringify(e) != JSON.stringify(n) && r(e));
      }
    }, [t, n]),
    n
  );
}
function Jt(e, t) {
  let n = ue({
    queryKey: [`useAllOptInRegistrationByName`, e, !!t],
    queryFn: () => B.Get().FetchOptInRegistrationForOptIn(e, t),
    staleTime: 36e5,
    enabled: !!e,
  });
  return n.isLoading ? null : n.data;
}
function Yt(e) {
  let t = ue({
    queryKey: [`useAllPendingReviewOptInRegistrationByName`, e],
    queryFn: () => B.Get().FetchPendingReviewOptInRegistrationn(e),
    retry: !1,
    staleTime: 36e5,
    enabled: e?.length > 0,
  });
  return {
    rgPendingReviewRegistrations: t.isLoading ? null : t.data,
    bIsInError: t.isError,
  };
}
function Xt(e, t) {
  let n = Jt(e, !1),
    [r, i] = (0, j.useState)(n?.find((e) => e.appid == t));
  return (b(B.Get().GetSingleAppRegistrationChange(t, e), i), r);
}
function Zt(e, t) {
  let [n, r] = (0, j.useState)(
    B.Get().GetOptInRegistrationAndEligibilityForAppOrCreate(e, t),
  );
  return (b(B.Get().GetSingleAppRegistrationChange(e, t), r), n);
}
function Qt(e, t) {
  let [n, r] = (0, j.useState)(B.Get().GetExistingOptInRegistartion(e, t));
  return (b(B.Get().GetSingleAppRegistrationChange(e, t), r), n);
}
function $t() {
  return { fnUpdateOptInRegistrationJson: B.Get().UpdateOptInRegistrationJson };
}
function en() {
  return { fnUpdateAppealState: B.Get().UpdateAppealState };
}
function tn() {
  let [e, t] = (0, j.useState)(B.Get().GetLoadCount());
  return (b(B.Get().GetLoadCountChange(), t), B.Get().GetLoadCount());
}
var nn = new Set([0, 2, 6, 13]),
  rn = new Set([4, 7, 11]);
function an(e) {
  let t = !1,
    n = !1,
    r,
    i = new Set();
  for (let r of e?.GetIncludedAppIDs() ?? []) {
    let e = A.Get().GetApp(r);
    if (e && nn.has(e.GetAppType())) ((t = !0), i.add(e.GetID()));
    else if (e && rn.has(e.GetAppType())) {
      n = !0;
      let t = e.GetParentAppID();
      t && i.add(t);
    }
  }
  let a = null;
  return (
    i.size == 1
      ? ((r = Array.from(i)[0]), (a = A.Get().GetApp(r)?.GetName()))
      : i.size > 1 && (a = T(`#PackageGrid_MultipleBaseGamesFoundForPackage`)),
    (a ||= T(`#PackageGrid_NoBaseGameFoundForPackage`)),
    {
      baseAppName: a,
      contents: t && n ? `BOTH` : t ? `GAME` : n ? `DLC` : null,
      nBaseAppID: r,
    }
  );
}
var V = { include_release: !0 };
async function on(e, t) {
  if ((await A.Get().HintLoadStorePackages(e, V)) != 1 || t.token.reason)
    return null;
  let n = [];
  e.map((e) => A.Get().GetPackage(e))
    .filter((e) => !!e)
    .forEach((e) => n.push(...e.GetIncludedAppIDs()));
  let r = Array.from(new Set(n));
  if ((await A.Get().HintLoadStoreApps(r, V)) != 1 || t.token.reason)
    return null;
  let i = r
      .map((e) => A.Get().GetApp(e))
      .filter((e) => !!e?.GetParentAppID())
      .map((e) => e.GetParentAppID()),
    a = Array.from(new Set(i));
  return (await A.Get().HintLoadStoreApps(a, V)) != 1 || t.token.reason
    ? null
    : Array.from(new Set(r.concat(a)));
}
var sn = `deepest-past`,
  cn = `most-recent`,
  ln = `next-available`,
  un = `related-discount-view`,
  H = class e {
    m_rgDiscountEvents;
    m_mapDiscountEventsByID = new Map();
    m_discountEventsCallbackList = new y();
    m_mapLastTimeRaisedPrices = new Map();
    m_strSelectedDiscountEventID = null;
    m_bIncludeWeeklongEvents = !1;
    m_bIncludeCustomEvents = !0;
    m_bIncludeIneligibleEvents = !1;
    m_bIncludeConflictsInSingleEventView = !0;
    m_bEditingDailyDealDiscount = !1;
    m_eRelatedDiscountView = sn;
    m_RelatedDiscountViewCallbackList = new y();
    m_gridEventSelectionParametersCallbackList = new y();
    m_setVisibleDiscountEventIDs = new Set();
    m_visibleDiscountEventIDsCallbackList = new y();
    static s_Singleton;
    static Get() {
      return (
        e.s_Singleton || ((e.s_Singleton = new e()), e.s_Singleton.Init()),
        e.s_Singleton
      );
    }
    constructor() {}
    Init() {
      let e = d(`price_increase_times`, `application_config`);
      if (this.BIsPriceIncreasePayloadValid(e))
        for (let t in e) this.m_mapLastTimeRaisedPrices.set(Number(t), e[t]);
      ((this.m_eRelatedDiscountView =
        window.localStorage.getItem(un) ?? `deepest-past`),
        this.UpdateDiscountEventsForGrid(),
        Nt().Register(() => this.UpdateDiscountEventsForGrid()),
        gt().Register(() => this.UpdateDiscountEventsForGrid()),
        this.SetEventSelectionParametersFromURL(),
        this.UpdateVisibleDiscountEventIDs());
    }
    UpdateDiscountEventsForGrid() {
      let e = Mt(),
        t = ht(),
        n = new Set(e.map((e) => e.id)),
        r = [],
        i = O();
      for (let e of t)
        e.rtEndDate > i &&
          (n.has(e.discountEventID) ||
            (r.push({
              id: e.discountEventID,
              name: e.strDiscountName,
              start_date: e.rtStartDate,
              end_date: e.rtEndDate,
              description: e.strDiscountDescription,
            }),
            n.add(e.discountEventID)));
      (!this.m_rgDiscountEvents ||
        n.size != this.m_rgDiscountEvents.length ||
        this.m_rgDiscountEvents.some((e) => !n.has(e.id))) &&
        ((this.m_rgDiscountEvents = r.concat(e)),
        this.m_rgDiscountEvents.sort((e, t) =>
          e.start_date == t.start_date
            ? e.end_date - t.end_date
            : e.start_date - t.start_date,
        ),
        (this.m_mapDiscountEventsByID = new Map(
          this.m_rgDiscountEvents.map((e) => [e.id, e]),
        )),
        this.UpdateVisibleDiscountEventIDs(),
        this.m_discountEventsCallbackList.Dispatch(this.m_rgDiscountEvents));
    }
    UpdateVisibleDiscountEventIDs() {
      (this.SetEventSelectionParametersFromURL(),
        (this.m_setVisibleDiscountEventIDs = new Set()));
      for (let e of this.m_rgDiscountEvents) {
        let t = this.m_strSelectedDiscountEventID == null;
        (t && !this.m_bIncludeCustomEvents && I(e.id) && (t = !1),
          t &&
            !this.m_bIncludeWeeklongEvents &&
            e.id.startsWith(`weeklongdeal_`) &&
            !In(e.id) &&
            (t = !1),
          t && !this.m_bIncludeIneligibleEvents && !Ln(e.id) && (t = !1),
          this.m_strSelectedDiscountEventID == e.id && (t = !0),
          t && this.m_setVisibleDiscountEventIDs.add(e.id));
      }
      this.m_visibleDiscountEventIDsCallbackList.Dispatch(
        this.m_setVisibleDiscountEventIDs,
      );
    }
    BIsPriceIncreasePayloadValid(e) {
      let t = e;
      if (t && typeof t == `object`) {
        for (let e in t)
          if (isNaN(parseInt(e)) || typeof t[e] != `number`) return !1;
        return !0;
      }
      return !1;
    }
    SetEventSelectionParametersFromURL() {
      let e = new URLSearchParams(window.location.search);
      if (e.has(`de`)) {
        let t = decodeURIComponent(e.get(`de`));
        this.m_mapDiscountEventsByID.has(t) &&
          (this.m_strSelectedDiscountEventID = t);
      }
      if (e.has(`wd`)) {
        let t = e.get(`wd`);
        this.m_bIncludeWeeklongEvents = t != `0`;
      }
      if (e.has(`cd`)) {
        let t = e.get(`cd`);
        this.m_bIncludeCustomEvents = t != `0`;
      }
      if (e.has(`cf`)) {
        let t = e.get(`cf`);
        this.m_bIncludeConflictsInSingleEventView = t != `0`;
      }
      if (e.has(`dd`)) {
        let t = e.get(`dd`);
        this.m_bEditingDailyDealDiscount = t != `0`;
      }
    }
    HandleEventSelectionChangeAndNotifyListeners() {
      let e = new URL(window.location.href);
      (this.m_strSelectedDiscountEventID
        ? e.searchParams.set(
            `de`,
            encodeURIComponent(this.m_strSelectedDiscountEventID),
          )
        : e.searchParams.delete(`de`),
        this.m_bIncludeWeeklongEvents
          ? e.searchParams.set(`wd`, `1`)
          : e.searchParams.delete(`wd`),
        this.m_bIncludeCustomEvents
          ? e.searchParams.delete(`cd`)
          : e.searchParams.set(`cd`, `0`),
        this.m_bIncludeConflictsInSingleEventView
          ? e.searchParams.delete(`cf`)
          : e.searchParams.set(`cf`, `0`),
        this.m_bEditingDailyDealDiscount &&
          ((this.m_bEditingDailyDealDiscount = !1),
          e.searchParams.delete(`dd`)),
        window.history.replaceState({}, ``, e.toString()),
        this.UpdateVisibleDiscountEventIDs(),
        this.m_gridEventSelectionParametersCallbackList.Dispatch(
          this.GetEventSelectionParameters(),
        ));
    }
    GetEventSelectionParameters() {
      return {
        bSingleDiscountEventView: this.m_strSelectedDiscountEventID != null,
        strSelectedEvent: this.m_strSelectedDiscountEventID,
        bEditingDailyDealDiscount: this.m_bEditingDailyDealDiscount,
        fnSelectEvent: (e) => {
          ((this.m_strSelectedDiscountEventID = e),
            this.HandleEventSelectionChangeAndNotifyListeners());
        },
        bIncludeWeeklongEvents: this.m_bIncludeWeeklongEvents,
        fnSetIncludeWeeklongEvents: (e) => {
          ((this.m_bIncludeWeeklongEvents = e),
            this.HandleEventSelectionChangeAndNotifyListeners());
        },
        bIncludeCustomEvents: this.m_bIncludeCustomEvents,
        fnSetIncludeCustomEvents: (e) => {
          ((this.m_bIncludeCustomEvents = e),
            this.HandleEventSelectionChangeAndNotifyListeners());
        },
        bIncludeConflictsInSingleEventView:
          this.m_bIncludeConflictsInSingleEventView,
        fnSetIncludeConflictsInSingleEventView: (e) => {
          ((this.m_bIncludeConflictsInSingleEventView = e),
            this.HandleEventSelectionChangeAndNotifyListeners());
        },
      };
    }
  };
function U(e) {
  return H.Get().m_mapLastTimeRaisedPrices.get(e) ?? 0;
}
function W() {
  return H.Get().m_rgDiscountEvents;
}
function G(e) {
  return H.Get().m_mapDiscountEventsByID.get(e);
}
function dn() {
  return H.Get().m_discountEventsCallbackList;
}
function fn() {
  let [e, t] = j.useState(H.Get().m_rgDiscountEvents);
  return (b(H.Get().m_discountEventsCallbackList, t), e);
}
function pn() {
  let [e, t] = j.useState(H.Get().m_setVisibleDiscountEventIDs);
  return (b(H.Get().m_visibleDiscountEventIDsCallbackList, t), e);
}
function mn(e) {
  let [t, n] = j.useState(H.Get().m_mapDiscountEventsByID.get(e)),
    r = j.useCallback(() => n(H.Get().m_mapDiscountEventsByID.get(e)), [e]);
  return (
    b(H.Get().m_discountEventsCallbackList, r), j.useEffect(r, [e, r]), t
  );
}
function hn(e = !0) {
  let [t, n] = j.useState(H.Get().GetEventSelectionParameters()),
    r = e ? H.Get().m_gridEventSelectionParametersCallbackList : null;
  return (b(r, n), t);
}
function gn() {
  let [e, t] = j.useState(H.Get().m_eRelatedDiscountView);
  return (
    b(H.Get().m_RelatedDiscountViewCallbackList, t),
    [
      e,
      j.useCallback((e) => {
        ((H.Get().m_eRelatedDiscountView = e),
          window.localStorage.setItem(un, e),
          H.Get().m_RelatedDiscountViewCallbackList.Dispatch(e));
      }, []),
    ]
  );
}
function _n() {
  return j.useCallback(() => {
    H.Get().UpdateVisibleDiscountEventIDs();
  }, []);
}
function vn(e, t) {
  return (
    !!e == !!t &&
    e?.packageID == t?.packageID &&
    e?.discountEventID == t?.discountEventID &&
    e?.eState == t?.eState &&
    e?.rgConflictDetails?.length == t?.rgConflictDetails?.length &&
    e?.optInReg == t?.optInReg &&
    K(e?.discount, t?.discount) &&
    e?.nBaseAppID == t?.nBaseAppID &&
    e?.bChangedLocally == t?.bChangedLocally
  );
}
function K(e, t) {
  return (
    (!t && (e?.nDiscountPct ?? 0) == 0) ||
    (!!t && t.nDiscountPct == e?.nDiscountPct)
  );
}
var q = 30 * w.PerDay - 1.5 * w.PerHour,
  J = 10 * w.PerMinute,
  Y = class e {
    m_mapPackageStateForDiscountEvents = new Map();
    m_mapLocalPackageDiscountOverrides = new Map();
    m_mapDiscountPackageCallbackList = new Map();
    m_mapDiscountGridCellCallbackList = new Map();
    m_mapDiscountEventColumnCallbackList = new Map();
    m_localPackageDiscountOverrideCallbackList = new y();
    static s_Singleton;
    static s_initializationCallbackList = new y();
    static Get() {
      return (
        e.s_Singleton || ((e.s_Singleton = new e()), e.s_Singleton.Init()),
        e.s_Singleton
      );
    }
    static IsInitialized() {
      return !!e.s_Singleton;
    }
    constructor() {}
    Init() {
      for (let t of fe())
        (e.Get().ComputePackageState(t),
          mt(t).Register(() => {
            e.Get().ComputePackageState(t);
          }));
      (dn().Register(() => {
        for (let t of fe()) e.Get().ComputePackageState(t, !0);
      }),
        e.s_initializationCallbackList.Dispatch(!0));
    }
    OverridePackageDiscountPct(t, n, r) {
      let i = e.Get().m_mapPackageStateForDiscountEvents.get(t)?.get(n);
      if (i?.eState != 1)
        return (
          console.error(`Cannot change discount in current state:`, i.eState),
          null
        );
      let a = i.discount,
        o = G(n),
        s = {
          nDiscountID: a?.nDiscountID,
          packageID: t,
          nDiscountPct: r,
          strDiscountName: o.name,
          strDiscountDescription: o.description,
          rtStartDate: o.start_date,
          rtEndDate: o.end_date,
          discountEventID: o.id,
          bChangedLocally: !0,
        };
      return K(s, a)
        ? null
        : (this.m_mapLocalPackageDiscountOverrides.has(t) ||
            this.m_mapLocalPackageDiscountOverrides.set(t, new Map()),
          this.m_mapLocalPackageDiscountOverrides.get(t).set(n, s),
          this.ComputePackageState(t),
          this.GetLocalPackageDiscountOverrideCallbackList().Dispatch(
            this.GetLocalPackageDiscountOverrides(),
          ),
          s);
    }
    GetHighestPackageDiscount(e) {
      let t = this.m_mapPackageStateForDiscountEvents.get(e);
      if (!t) return 0;
      let n = 0;
      return (
        t.forEach((e, t) => {
          e.eState == 1 && (n = Math.max(n, e.discount?.nDiscountPct || 0));
        }),
        n
      );
    }
    GetLocalPackageDiscountOverrides() {
      let e = [];
      return (
        this.m_mapLocalPackageDiscountOverrides.forEach((t) =>
          t.forEach((t) => {
            K(t, t.nDiscountID && dt(t.nDiscountID)) || e.push(t);
          }),
        ),
        e.sort(Sn),
        e
      );
    }
    DiscardAllLocalPackageDiscountOverrides(e) {
      this.m_mapLocalPackageDiscountOverrides.clear();
      for (let t of e) this.ComputePackageState(t);
      this.GetLocalPackageDiscountOverrideCallbackList().Dispatch([]);
    }
    DiscardLocalPackageDiscountOverride(e, t) {
      (this.m_mapLocalPackageDiscountOverrides.get(e)?.delete(t),
        this.ComputePackageState(e),
        this.GetLocalPackageDiscountOverrideCallbackList().Dispatch(
          this.GetLocalPackageDiscountOverrides(),
        ));
    }
    OptInRegistrationUpdatedForApp(e, t) {
      Array.from(this.m_mapPackageStateForDiscountEvents.values())
        .map((e) => e.get(t))
        .filter((t) => t?.nBaseAppID == e)
        .map((e) => e.packageID)
        ?.forEach((e) => this.ComputePackageState(e));
    }
    GetPackageDiscountsIncludingOverrides(e) {
      let t = O() - q,
        n = pt(e);
      if (!n) return null;
      let r = new Map(
        n.filter((e) => e.rtEndDate > t).map((e) => [e.discountEventID, e]),
      );
      return (
        this.m_mapLocalPackageDiscountOverrides.get(e)?.forEach((e, t) => {
          K(e, r.get(t)) || r.set(t, e);
        }),
        r
      );
    }
    GetDiscountGridCellCallbackList(e, t) {
      if (!e || !t) return null;
      this.m_mapDiscountGridCellCallbackList.has(e) ||
        this.m_mapDiscountGridCellCallbackList.set(e, new Map());
      let n = this.m_mapDiscountGridCellCallbackList.get(e);
      return (n.has(t) || n.set(t, new y()), n.get(t));
    }
    GetDiscountPackageCallbackList(e) {
      if (!e) return null;
      let t = this.m_mapDiscountPackageCallbackList.get(e);
      return (
        t || ((t = new y()), this.m_mapDiscountPackageCallbackList.set(e, t)), t
      );
    }
    GetDiscountEventColumnCallbackList(e) {
      return e
        ? (this.m_mapDiscountEventColumnCallbackList.has(e) ||
            this.m_mapDiscountEventColumnCallbackList.set(e, new y()),
          this.m_mapDiscountEventColumnCallbackList.get(e))
        : null;
    }
    GetLocalPackageDiscountOverrideCallbackList() {
      return this.m_localPackageDiscountOverrideCallbackList;
    }
    GetAllPackageStatesForDiscountEvent(t) {
      let n = [];
      return (
        e
          .Get()
          .m_mapPackageStateForDiscountEvents.forEach((e, r) =>
            n.push(e.get(t)),
          ),
        n
      );
    }
    ComputePackageState(e, t) {
      let n = A.Get().GetPackage(e);
      if (!n) return;
      let r = W(),
        i = an(n),
        a = i.nBaseAppID,
        o = a && B.Get().GetOptInRegistrationAndEligibilityForApp(a);
      !a &&
        !o &&
        (o = B.Get().GetOptInRegistrationAndEligibilityForApps(
          n.GetIncludedAppIDs(),
        ));
      let s = this.GetPackageDiscountsIncludingOverrides(e),
        c = !s,
        l = c
          ? null
          : Array.from(s.values()).sort(
              (e, t) => e.rtStartDate - t.rtStartDate,
            );
      this.m_mapPackageStateForDiscountEvents.has(e) ||
        this.m_mapPackageStateForDiscountEvents.set(e, new Map());
      let u = this.m_mapPackageStateForDiscountEvents.get(e);
      for (let d of r) {
        if (t && u.has(d.id)) continue;
        let r = { packageID: e, discountEventID: d.id, nBaseAppID: a };
        if (
          ((r.discount = s?.get(d.id)),
          (r.bChangedLocally = !!r.discount?.bChangedLocally),
          c)
        )
          r.eState = 0;
        else if (r.discount?.nDiscountPct > 0) {
          r.eState = 1;
          let e = d.opt_in_name && o?.get(d.opt_in_name);
          e && (r.optInReg = e);
        } else {
          if (((r.eState = 1), xn(d, n))) r.eState = 10;
          else if (d.opt_in_name) {
            let { ePackageDiscountState: e, optInRegistration: t } = bn(
              d.opt_in_name,
              o,
              n,
              i,
              d,
            );
            ((r.eState = e), (r.optInReg = t));
          }
          if (r.eState != 10 && r.eState != 4 && r.eState != 5) {
            let t = yn(e, d, l);
            t.ePackageDiscountState != 1 &&
              ((r.eState = t.ePackageDiscountState),
              (r.rgConflictDetails = t.rgConflictingDiscounts.map(
                (e) => z(e.discountEventID)?.name ?? e.strDiscountName,
              )));
          }
        }
        vn(r, u.get(d.id)) ||
          (u.set(d.id, r),
          this.GetDiscountPackageCallbackList(e).Dispatch(),
          this.GetDiscountGridCellCallbackList(e, d.id).Dispatch(r),
          this.GetDiscountEventColumnCallbackList(d.id).Dispatch(
            this.GetAllPackageStatesForDiscountEvent(d.id),
          ));
      }
    }
    GetAvailableDiscountEventsInRange(e, t, n) {
      let r = this.m_mapPackageStateForDiscountEvents.get(e),
        i = new Set([1, 11, 2, 3]);
      return W()
        .filter(
          (e) =>
            t <= e.start_date && e.end_date <= n && i.has(r.get(e.id).eState),
        )
        .map((e) => e.id);
    }
    GetFurthestCooldownFromPastDiscounts(e) {
      let t = O(),
        n = t;
      return (
        e
          .filter((e) => e.rtStartDate < t)
          .filter((e) => z(e.discountEventID)?.collision_type != L)
          .forEach((e) => {
            e.rtEndDate + q < n && (n = e.rtEndDate + q);
          }),
        n
      );
    }
    GetFutureDiscountRanges(e) {
      let t = A.Get().GetPackage(e),
        n = this.GetPackageDiscountsIncludingOverrides(e);
      if (!t || !n) return [];
      let r = Array.from(n.values()).sort(
          (e, t) => e.rtStartDate - t.rtStartDate,
        ),
        i = O(),
        a = t.GetReleaseDateRTime(),
        o = U(e),
        s = this.GetFurthestCooldownFromPastDiscounts(r),
        c = Math.max(i, (a ?? 0) + q, o + q, s),
        l = [],
        u = new Set(),
        d = c;
      for (let t = 0; t < r.length; t++) {
        let n = r[t];
        if (n.nDiscountPct == 0 || n.rtStartDate < c) continue;
        let i = z(n.discountEventID),
          a = n.rtStartDate - q,
          o = i?.collision_type == L;
        if (o && ((a = n.rtStartDate + J), t + 1 < r.length)) {
          let e = r[t + 1];
          G(e.discountEventID)?.collision_type != `unique` &&
            (a = Math.min(a, e.rtStartDate - q));
        }
        if (d + w.PerDay < a) {
          let t = {
            bIsAvailable: !0,
            rtStartDate: d,
            rtEndDate: a,
            rgDiscountEventIDs: this.GetAvailableDiscountEventsInRange(e, d, a),
          };
          (l.push(t), t.rgDiscountEventIDs.forEach((e) => u.add(e)));
        }
        let s = {
          bIsAvailable: !1,
          rtStartDate: n.rtStartDate,
          rtEndDate: n.rtEndDate,
          discount: n,
          rgDiscountEventIDs: [n.discountEventID],
        };
        if (
          (l.push(s),
          u.add(n.discountEventID),
          (d = n.rtEndDate + q),
          o && ((d = n.rtEndDate - J), t - 1 >= 0))
        ) {
          let e = r[t - 1];
          G(e.discountEventID)?.collision_type != `unique` &&
            (d = Math.max(d, e.rtEndDate + q));
        }
        let f = ve(d);
        f - d <= w.PerHour * 2 && (d = f);
      }
      let f = ve(i + w.PerYear / 2);
      if (d + w.PerDay < f) {
        let t = {
          bIsAvailable: !0,
          rtStartDate: d,
          rtEndDate: f,
          rgDiscountEventIDs: this.GetAvailableDiscountEventsInRange(e, d, f),
        };
        (l.push(t), t.rgDiscountEventIDs.forEach((e) => u.add(e)));
      }
      let p = W().filter(
        (t) =>
          t.collision_type == `unique` &&
          !u.has(t.id) &&
          this.m_mapPackageStateForDiscountEvents.get(e).get(t.id).eState == 1,
      );
      for (let e of p)
        for (let t = 0; t < l.length; t++)
          if (
            l[t].rtStartDate <= e.start_date &&
            (t == l.length - 1 || e.start_date < l[t + 1].rtStartDate)
          ) {
            let n = {
              bIsAvailable: !0,
              bMajorSaleOnly: !0,
              rtStartDate: e.start_date,
              rtEndDate: e.end_date,
              rgDiscountEventIDs: [e.id],
            };
            l.splice(t + 1, 0, n);
            break;
          }
      return l;
    }
  };
function yn(e, t, n) {
  let r = 1,
    i = [],
    a = !1;
  if (A.Get().GetPackage(e)?.GetReleaseDateRTime() > t.start_date - q)
    return (
      (r = 6),
      {
        ePackageDiscountState: r,
        rgConflictingDiscounts: i,
        bChangedLocally: a,
      }
    );
  if (U(e) > t.start_date - q)
    return (
      (r = 7),
      {
        ePackageDiscountState: r,
        rgConflictingDiscounts: i,
        bChangedLocally: a,
      }
    );
  for (let e of n) {
    if (t.id == e.discountEventID) continue;
    let n = z(e.discountEventID),
      o = t.collision_type == `unique` || n?.collision_type == `unique`,
      s = o ? t.start_date + J : t.start_date - q,
      c = o ? t.end_date - J : t.end_date + q;
    if (e.rtEndDate > s && c > e.rtStartDate) {
      if (((a ||= e.bChangedLocally), e.nDiscountPct == 0)) continue;
      (i.push(e), (r = o ? 9 : 8));
    }
  }
  return {
    ePackageDiscountState: r,
    rgConflictingDiscounts: i,
    bChangedLocally: a,
  };
}
function bn(e, t, n, r, i) {
  let a = 5,
    o;
  if (t)
    ((o = t.get(e)),
      !o || o.restricted || o.pruned
        ? ((a = 4), (o = { restricted: !0 }))
        : (a = o.opt_in ? 1 : o.invited || !o.time_opted_in ? 2 : 3));
  else if (!r.nBaseAppID) {
    let e = n
      .GetIncludedAppIDs()
      .map((e) =>
        B.Get().GetOptInRegistrationAndEligibilityForApp(e)?.get(i.opt_in_name),
      )
      .filter(Boolean);
    e.some((e) => e.opt_in)
      ? (a = 1)
      : e.some((e) => !e.restricted && !e.pruned) && (a = 11);
  }
  return { ePackageDiscountState: a, optInRegistration: o };
}
function xn(e, t) {
  if (e.appids?.length > 0) {
    if (t?.GetIncludedAppIDs()?.length) {
      let n = new Set(e.appids);
      for (let e of t.GetIncludedAppIDs()) {
        if (n.has(e)) return !1;
        let t = A.Get().GetApp(e)?.GetParentAppID();
        if (t && n.has(t)) return !1;
      }
    }
    return !0;
  }
  return !1;
}
function Sn(e, t) {
  if (e.packageID != t.packageID) {
    let n = A.Get().GetPackage(e.packageID)?.GetName(),
      r = A.Get().GetPackage(t.packageID)?.GetName();
    return _e(n, r);
  }
  {
    let n = e.nDiscountPct == 0;
    return n == (t.nDiscountPct == 0)
      ? e.rtStartDate - t.rtStartDate
      : n
        ? -1
        : 1;
  }
}
function Cn() {
  return j.useCallback(() => {
    Y.Get();
  }, []);
}
function wn() {
  let [e, t] = j.useState(Y.IsInitialized());
  return (b(Y.s_initializationCallbackList, t), e);
}
function Tn() {
  let [e, t] = j.useState(Y.Get().GetLocalPackageDiscountOverrides());
  return (b(Y.Get().GetLocalPackageDiscountOverrideCallbackList(), t), e);
}
function En() {
  return j.useCallback(
    () => Y.Get().GetLocalPackageDiscountOverrides()?.length > 0,
    [],
  );
}
function Dn() {
  return j.useCallback(
    (e) => Y.Get().DiscardAllLocalPackageDiscountOverrides(e),
    [],
  );
}
function On() {
  return j.useCallback(
    (e, t) => Y.Get().OptInRegistrationUpdatedForApp(e, t),
    [],
  );
}
function kn() {
  return j.useCallback(
    (e, t) => Y.Get().DiscardLocalPackageDiscountOverride(e, t),
    [],
  );
}
function An(e, t) {
  let n = Y.Get().m_mapPackageStateForDiscountEvents.get(e)?.get(t);
  return n?.eState == 1 ? (n?.discount?.nDiscountPct ?? 0) : null;
}
function jn(e, t) {
  let [n, r] = j.useState(() =>
    Y.Get().m_mapPackageStateForDiscountEvents.get(e)?.get(t),
  );
  return (
    b(Y.Get().GetDiscountGridCellCallbackList(e, t), r),
    {
      packageState: n,
      fnSetDiscountPct: j.useCallback(
        (n) => {
          Y.Get().OverridePackageDiscountPct(e, t, n);
        },
        [e, t],
      ),
    }
  );
}
function Mn() {
  return j.useCallback((e, t, n) => {
    let r = [];
    for (let i of n) {
      let n = Y.Get().OverridePackageDiscountPct(i, t, e);
      n && r.push(n);
    }
    return r;
  }, []);
}
function Nn(e) {
  let t = Pn(e);
  return j.useMemo(
    () => ({
      nAlreadySet: t.alreadySet.size,
      nAvailable: t.available.size,
      nConflicts: t.conflicts.size,
      nNeedRegistration: t.needRegistration.size,
      nIneligibile: t.ineligibile.size,
    }),
    [t],
  );
}
function Pn(e) {
  let [t, n] = j.useState(() => Fn(e)),
    r = j.useCallback(() => {
      n(Fn(e));
    }, [e]);
  return (
    j.useEffect(r, [e, r]),
    b(Y.Get().GetDiscountEventColumnCallbackList(e), r),
    t
  );
}
function Fn(e) {
  let t = Y.Get().GetAllPackageStatesForDiscountEvent(e),
    n = {
      alreadySet: new Set(),
      available: new Set(),
      conflicts: new Set(),
      needRegistration: new Set(),
      ineligibile: new Set(),
    };
  for (let e of t)
    switch (e?.eState) {
      case 0:
        break;
      case 1:
        (e.discount?.nDiscountPct ?? 0) > 0
          ? n.alreadySet.add(e.packageID)
          : n.available.add(e.packageID);
        break;
      case 6:
      case 7:
      case 8:
      case 9:
        n.conflicts.add(e.packageID);
        break;
      case 2:
      case 3:
        n.needRegistration.add(e.packageID);
        break;
      case 4:
      case 5:
      case 10:
        n.ineligibile.add(e.packageID);
    }
  return n;
}
function In(e) {
  return !!(
    ft(e).some((e) => e.nDiscountPct > 0) ||
    (Y.IsInitialized() &&
      Y.Get()
        .GetAllPackageStatesForDiscountEvent(e)
        .some((e) => (e.discount?.nDiscountPct ?? 0) > 0))
  );
}
function Ln(e, t = !0) {
  if (I(e)) return !0;
  if (!t && e.startsWith(`weeklongdeal_`)) return !1;
  let n = z(e);
  if (!n?.opt_in_name) return !0;
  let r = B.Get().GetAllOptInRegistrations(n.opt_in_name);
  return r?.length ? r.some((e) => !e.restricted && !e.pruned) : !1;
}
function Rn(e) {
  let t = wn(),
    [n, r] = j.useState(t ? Y.Get().GetFutureDiscountRanges(e) : []),
    i = j.useCallback(
      () => r(t ? Y.Get().GetFutureDiscountRanges(e) : []),
      [e, t],
    );
  return (
    b(t && Y.Get().GetLocalPackageDiscountOverrideCallbackList(), i),
    b(t && mt(e), i),
    j.useEffect(i, [e, t, i]),
    n
  );
}
function zn(e) {
  let [t, n] = j.useState(() => Y.Get().GetHighestPackageDiscount(e)),
    r = j.useCallback(() => {
      n(Y.Get().GetHighestPackageDiscount(e));
    }, [e, n]);
  return (b(Y.Get().GetDiscountPackageCallbackList(e), r), t);
}
function Bn(e) {
  let t = j.useCallback(
    (t) => {
      if (e())
        return (
          t.preventDefault(),
          (t.returnValue = T(`#PackageGrid_NavigationWarning_Title`)),
          t.returnValue
        );
    },
    [e],
  );
  j.useEffect(
    () => (
      window.addEventListener(`beforeunload`, t),
      () => window.removeEventListener(`beforeunload`, t)
    ),
    [t],
  );
}
var Vn = `XIJjtmzsdXE-`,
  Hn = `atxTK26HgeA-`,
  Un = `CC75tAFWmgY-`,
  Wn = `EItyOoaortY-`,
  Gn = `Kt0e55t5mcE-`,
  Kn = `YRYvAld6OLQ-`,
  qn = `ffvuom7IPtc-`,
  Jn = `_0Q3FuVae-A0-`,
  X = f(),
  Yn = (0, j.createContext)(void 0);
function Z() {
  let e = (0, j.useContext)(Yn);
  if (!e) throw Error(`Missing GridRowContextProvider`);
  return e;
}
function Xn(e) {
  let { children: t, fnBLocalChangesExist: n, fnWarnUser: r } = e,
    i = le(),
    a = j.useMemo(
      () => ({ client: i, fnBLocalChangesExist: n, fnWarnUser: r }),
      [n, r, i],
    );
  return (0, X.jsx)(Yn.Provider, { value: a, children: t });
}
function Zn(e) {
  let { row: t } = e,
    n = t.original.packageID || 0,
    r = zn(n),
    i = Et(n) < r,
    a = (0, Ee.default)(Hn, i && `sNTSaqCkChQ-`, t.original.packageType),
    o = T(
      i
        ? `#PackageGrid_VisitPackageDiscount_Tooltip_Error`
        : `#PackageGrid_VisitPackagePricing_Tooltip`,
    );
  return (0, X.jsx)(Q, { className: a, toolTip: o, ...e });
}
function Qn(e) {
  let { row: t } = e,
    n = t.original.packageID || 0,
    r = de(n),
    i = (0, Ee.default)(Hn, r && `sNTSaqCkChQ-`, t.original.packageType),
    a = T(
      r
        ? `#PackageGrid_VisitPackagePricing_Tooltip_Error`
        : `#PackageGrid_VisitPackagePricing_Tooltip`,
    );
  return (0, X.jsx)(Q, { className: i, toolTip: a, showUnreleased: !0, ...e });
}
function $n(e) {
  let { column: t } = e,
    [n, r] = (0, j.useState)(t.getFilterValue() ?? ``);
  return (0, X.jsxs)(`div`, {
    className: Un,
    children: [
      T(`#PackageGrid_Column_PackageName`),
      (0, X.jsx)(`input`, {
        placeholder: T(`#PackageGrid_PackageNameFilterInputPrompt`),
        value: n,
        onChange: (t) => {
          (r(t.target.value.toString()),
            (0, j.startTransition)(() =>
              e.column.setFilterValue(t.target.value.toString()),
            ));
        },
      }),
    ],
  });
}
function Q(e) {
  let { fnBLocalChangesExist: t, fnWarnUser: n } = Z(),
    { cell: r, row: i, className: a, toolTip: o } = e,
    s = i.original.packageID,
    c =
      r.getValue() ??
      (0, X.jsxs)(`span`, {
        className: `Eh4oZS3AUbs-`,
        children: [` `, T(`#PackageGrid_PackageID`, s)],
      });
  return (0, X.jsxs)(cr, {
    fnBLocalChangesExist: t,
    fnWarnUser: n,
    href: `${h.PARTNER_BASE_URL}store/packagelanding/${s}`,
    strToolTip: o,
    strClassName: a,
    children: [
      (0, X.jsx)(ae, { color: `rgb(194, 45, 0)`, className: Vn }),
      e.showUnreleased &&
        !(`released` in i.original && i.original.released) &&
        (0, X.jsxs)(X.Fragment, {
          children: [
            (0, X.jsx)(se, {
              toolTipContent: T(`#PackageGrid_PackageUnpublishedTooltip`),
              children: (0, X.jsx)(ie, { width: `14px`, height: `14px` }),
            }),
            ` \xA0`,
          ],
        }),
      ` `,
      c,
    ],
  });
}
function er() {
  return j.useMemo(
    () => ({
      accessorKey: `packageID`,
      header: T(`#PackageGrid_Column_PackageID`),
      enableSorting: !1,
      size: 90,
      cell: (e) =>
        (0, X.jsx)(Q, {
          ...e,
          toolTip: T(`#PackageGrid_Column_PackageID_ttip`),
        }),
      meta: { cellClassname: Gn },
    }),
    [],
  );
}
function tr(e, t, n) {
  let r = /^\d+$/.test(n),
    i = e.original.packageID;
  return r && i && i.toString().startsWith(n)
    ? !0
    : e.getValue(t).toLowerCase().includes(n.toLowerCase());
}
function nr(e) {
  return j.useMemo(
    () => ({
      accessorKey: `packageName`,
      header: $n,
      enableSorting: !1,
      meta: {
        strHeaderTooltip: T(`#PackageGrid_Column_PackageName_ttip`),
        cellClassname: Kn,
      },
      filterFn: tr,
      cell: e ? Zn : Qn,
      size: 300,
    }),
    [e],
  );
}
function rr() {
  return j.useMemo(() => ({ accessorKey: `appids` }), []);
}
function ir() {
  return j.useMemo(
    () => ({
      accessorKey: `packageType`,
      header: T(`#PackageGrid_Column_PackageType`),
      enableSorting: !1,
      meta: {
        strHeaderTooltip: T(`#PackageGrid_Column_PackageType_ttip`),
        cellClassname: qn,
      },
    }),
    [],
  );
}
function ar(e) {
  let { row: t } = e,
    { fnBLocalChangesExist: n, fnWarnUser: r } = Z(),
    i = t.original.appids?.length ?? 0,
    a = t.original.packageID;
  return (0, X.jsx)(cr, {
    fnBLocalChangesExist: n,
    fnWarnUser: r,
    href: `${h.PARTNER_BASE_URL}store/packagelanding/${a}`,
    strToolTip: T(`#PackageGrid_VisitPackagePricing_Tooltip`),
    children: i == 1 ? `1 appid` : i + ` appids`,
  });
}
function or() {
  return j.useMemo(
    () => ({
      accessorKey: `appName`,
      header: T(`#PackageGrid_Column_AppName`),
      cell: ar,
      size: 80,
      sortingFn: pe,
      meta: {
        strHeaderTooltip: T(`#PackageGrid_Column_AppName_ttip`),
        bDisableSortButton: !0,
        cellClassname: Wn,
      },
    }),
    [],
  );
}
function sr(e) {
  let t = e.groupingValue,
    n = T(`#PackageGrid_NoBaseGameFoundForPackage`);
  return (0, X.jsxs)(X.Fragment, {
    children: [
      t === n
        ? (0, X.jsxs)(`span`, {
            title: T(`#PackageGrid_NoBaseGameExplanation`),
            children: [t, ` (?)`],
          })
        : t,
      (0, X.jsxs)(`span`, {
        className: Jn,
        children: [`(`, oe(`#PackageGrid_PackageCount`, e.subRows.length), `)`],
      }),
    ],
  });
}
function cr(e) {
  let {
    fnBLocalChangesExist: t,
    fnWarnUser: n,
    href: r,
    children: i,
    strToolTip: a,
    strClassName: o,
  } = e;
  return (0, X.jsx)(ce, {
    toolTipContent: a,
    className: o,
    children: (0, X.jsx)(`a`, {
      onClick: (e) => {
        t() && (e.preventDefault(), n(e, r));
      },
      href: r,
      children: i,
    }),
  });
}
var lr = class {
  constructor() {
    ne(this);
  }
  m_mapProfiles = new Map();
  m_mapProfilesLoading = new Map();
  async LoadProfiles(t, n) {
    e(t.length <= 500, `Check LoadProfiles, requesting too many steam IDs`);
    let r = t.filter(
      (e) => !this.m_mapProfiles.has(e) && !this.m_mapProfilesLoading.has(e),
    );
    if (r.length == 0) return this.m_mapProfilesLoading.get(t[0]);
    let i = h.COMMUNITY_BASE_URL + `actions/ajaxresolveusers`,
      a = M.default.get(i, {
        params: { steamids: r.join(`,`) },
        withCredentials: !0,
        cancelToken: n?.token,
      });
    r.forEach((e) => this.m_mapProfilesLoading.set(e, a));
    let o = await a;
    o.data &&
      o.status == 200 &&
      o.data.forEach((e) => {
        ((e.avatar_hash = e.avatar_url),
          (e.avatar_url_medium = k(e.avatar_url, `medium`)),
          (e.avatar_url_full = k(e.avatar_url, `full`)),
          (e.avatar_url = k(e.avatar_url)),
          this.m_mapProfiles.set(e.steamid, e),
          this.m_mapProfilesLoading.delete(e.steamid));
      });
  }
  GetProfile(e) {
    return this.m_mapProfiles.get(e);
  }
  GetProfileByAccountID(e) {
    return this.m_mapProfiles.get(
      C.InitFromAccountID(e, h.EUNIVERSE).ConvertTo64BitString(),
    );
  }
  GetProfileBySteamID(e) {
    return this.m_mapProfiles.get(e.ConvertTo64BitString());
  }
  BHasProfile(e) {
    return this.m_mapProfiles.has(e);
  }
  BHasProfileByAccountID(e) {
    return this.m_mapProfiles.has(
      C.InitFromAccountID(e, h.EUNIVERSE).ConvertTo64BitString(),
    );
  }
  BHasProfileBySteamID(e) {
    return this.m_mapProfiles.has(e.ConvertTo64BitString());
  }
  BHasAllProfilesBySteamID(e) {
    return !e.some((e) => !this.BHasProfileBySteamID(e));
  }
  GetProfileURLBySteamID(e) {
    let t = this.GetProfileBySteamID(e);
    return t && t.profile_url
      ? h.COMMUNITY_BASE_URL + `id/` + t.profile_url
      : h.COMMUNITY_BASE_URL + `profiles/` + e.ConvertTo64BitString();
  }
  GetPersonaNameBySteamID(e) {
    let t = this.GetProfileBySteamID(e);
    return t && t.persona_name ? t.persona_name : ``;
  }
};
m([a], lr.prototype, `m_mapProfiles`, void 0);
var $ = new lr();
function ur(e) {
  let t = j.useMemo(
      () => (e ? (typeof e == `string` ? new C(e) : e) : null),
      [e],
    ),
    [n, r] = (0, j.useState)(!!t && !$.BHasProfileBySteamID(t));
  return (
    (0, j.useEffect)(() => {
      let e = M.default.CancelToken.source();
      return (
        t &&
          !$.BHasProfileBySteamID(t) &&
          $.LoadProfiles([t.ConvertTo64BitString()])
            .catch((e) => {
              let n = E(e);
              console.error(
                `useUserProfile failed to load profile for ` +
                  t.ConvertTo64BitString() +
                  `: ` +
                  n.strErrorMsg,
                n,
              );
            })
            .finally(() => {
              e.token.reason || r(!1);
            }),
        () => e.cancel(`unmounting useUserProfile`)
      );
    }, [e]),
    [n, !!t && $.GetProfileBySteamID(t)]
  );
}
function dr(e) {
  return ur(
    j.useMemo(() => (e ? C.InitFromAccountID(e, h.EUNIVERSE) : null), [e]),
  );
}
export {
  $t as $,
  cn as A,
  Ye as At,
  nn as B,
  Te as Bt,
  Nn as C,
  yt as Ct,
  G as D,
  We as Dt,
  Rn as E,
  nt as Et,
  hn as F,
  Se as Ft,
  Yt as G,
  Ut as H,
  gn as I,
  xe as It,
  Wt as J,
  Qt as K,
  pn as L,
  be as Lt,
  fn as M,
  Me as Mt,
  _n as N,
  ct as Nt,
  U as O,
  Le as Ot,
  mn as P,
  Ce as Pt,
  tn as Q,
  an as R,
  ye as Rt,
  On as S,
  xt as St,
  Pn as T,
  ze as Tt,
  Kt as U,
  B as V,
  Jt as W,
  qt as X,
  Gt as Y,
  en as Z,
  Mn as _,
  bt as _t,
  Xn as a,
  Ht as at,
  kn as b,
  Tt as bt,
  Z as c,
  L as ct,
  ir as d,
  pt as dt,
  Xt as et,
  Bn as f,
  Dt as ft,
  Tn as g,
  Ct as gt,
  q as h,
  Ot as ht,
  cr as i,
  Ft as it,
  ln as j,
  Ve as jt,
  sn as k,
  Pe as kt,
  er as l,
  I as lt,
  An as m,
  Et as mt,
  dr as n,
  It as nt,
  rr as o,
  Vt as ot,
  Ln as p,
  _t as pt,
  Zt as q,
  sr as r,
  Rt as rt,
  or as s,
  Pt as st,
  $ as t,
  zt as tt,
  nr as u,
  ft as ut,
  En as v,
  wt as vt,
  jn as w,
  Ae as wt,
  Cn as x,
  St as xt,
  Dn as y,
  vt as yt,
  on as z,
  we as zt,
};
