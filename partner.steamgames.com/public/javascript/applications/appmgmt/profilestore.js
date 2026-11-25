/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import {
  A as e,
  Ct as t,
  Dt as n,
  K as r,
  Pt as i,
  S as a,
  St as o,
  W as s,
  _t as c,
  bt as l,
  gt as u,
  k as d,
  n as f,
  nt as p,
  vt as m,
  w as h,
  wt as ee,
  xt as g,
  yt as _,
} from "./chunk~de7f2df91c.js";
import {
  A as v,
  Mt as te,
  Nt as y,
  Pt as b,
  Wt as x,
} from "./chunk~bd90a5fce7.js";
import {
  J as ne,
  _n as re,
  da as S,
  eo as C,
  ga as ie,
  gn as ae,
  mr as oe,
} from "./chunk~1fa4b8f2ff.js";
import "./chunk~44f252525d.js";
import { i as se } from "./chunk~8fb30ea08b.js";
import { t as ce } from "./chunk~ede3e357a2.js";
import { S as le, i as ue, x as de } from "./chunk~96e60d7578.js";
import { t as w } from "./chunk~25a6634263.js";
import { C as fe, K as pe, n as me } from "./chunk~360b8fa68b.js";
import { t as he } from "./chunk~f4e4ed5c17.js";
import { t as ge } from "./chunk~92931c6310.js";
import { t as T } from "./chunk~c55709d290.js";
import { n as _e, o as ve } from "./chunk~e867464c75.js";
import "./chunk~a6b9ae1345.js";
import { r as E, t as D } from "./chunk~0111fcd096.js";
import { t as O } from "./chunk~0278ae6236.js";
import { t as k } from "./chunk~3ee5188744.js";
import { t as ye } from "./chunk~90fbfc6dc2.js";
import "./chunk~8c0cff8a60.js";
function be(e) {
  if (e?.jsondata?.rtime_discount_intent) return !!e.no_planned_discount;
}
function xe(e) {
  if (!e?.jsondata?.rtime_ask_again) return;
  let t = Number(e.jsondata.ask_again_season),
    n = Number(e.jsondata.ask_again_year);
  return !(t >= 1 && t <= 4) || !(n > 0) ? null : { season: t, year: n };
}
function Se(e, t) {
  return {
    opt_in_name: t,
    opt_in: !1,
    appid: e,
    jsondata: { opt_in_name: t, opt_in: !1 },
  };
}
function Ce(e) {
  return !!(e?.pruned && e.jsondata?.pruned_reason === `released`);
}
function we(e) {
  return !!(e?.pruned && e.jsondata?.pruned_reason === `mod`);
}
function Te(e, t, n) {
  let r = e?.find((e) => e.section_id == t),
    i = (Array.isArray(r?.list_selection) ? r.list_selection : []).find(
      (e) => e.list_id == n,
    )?.selected_item_id;
  return i && i.length > 0 && i[0] != null ? i : [];
}
function Ee(e, t, n, r) {
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
var A = i(p()),
  De = i(te()),
  j = i(he()),
  M = i(ee(), 1),
  Oe = class e extends M.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.packageids || u(e.M()),
        M.Message.initialize(this, t, 0, -1, [1], null));
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
              br: _.readUint32,
              pbr: _.readPackedUint32,
              bw: t.writeRepeatedUint32,
            },
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
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new M.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return c(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new M.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      g(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new M.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPublishing_GetPartnerPaidGivenPackageList_Request`;
    }
  },
  ke = class e extends M.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.paid || u(e.M()),
        M.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { paid: { n: 1, c: Ae, r: !0, q: !0 } },
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
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new M.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return c(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new M.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      g(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new M.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPublishing_GetPartnerPaidGivenPackageList_Response`;
    }
  },
  Ae = class e extends M.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.partnerid || u(e.M()),
        M.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            partnerid: { n: 1, br: _.readUint32, bw: t.writeUint32 },
            packageid: { n: 2, br: _.readUint32, bw: t.writeUint32 },
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
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new M.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return c(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new M.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      g(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new M.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPublishing_GetPartnerPaidGivenPackageList_Response_CPackageAndPartnerPair`;
    }
  },
  je = class e extends M.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.opt_in_name || u(e.M()),
        M.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            opt_in_name: { n: 1, br: _.readString, bw: t.writeString },
            targeting_flag: {
              n: 2,
              br: _.readFixed64String,
              bw: t.writeFixed64String,
            },
            settings_flag: {
              n: 3,
              br: _.readFixed64String,
              bw: t.writeFixed64String,
            },
            email_templates: { n: 4, br: _.readString, bw: t.writeString },
            start_rtime: { n: 5, d: 0, br: _.readUint32, bw: t.writeUint32 },
            end_rtime: { n: 6, d: 0, br: _.readUint32, bw: t.writeUint32 },
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
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new M.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return c(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new M.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      g(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new M.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPublishing_CreatePartnerAppOptInEmail_Request`;
    }
  },
  Me = class e extends M.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.email_def_id || u(e.M()),
        M.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: _.readFixed64String,
              bw: t.writeFixed64String,
            },
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
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new M.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return c(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new M.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      g(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new M.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPublishing_CreatePartnerAppOptInEmail_Response`;
    }
  },
  Ne = class e extends M.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.email_def_id || u(e.M()),
        M.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: _.readFixed64String,
              bw: t.writeFixed64String,
            },
            targeting_flag: {
              n: 2,
              br: _.readFixed64String,
              bw: t.writeFixed64String,
            },
            settings_flag: {
              n: 3,
              br: _.readFixed64String,
              bw: t.writeFixed64String,
            },
            email_templates: { n: 4, br: _.readString, bw: t.writeString },
            start_rtime: { n: 5, d: 0, br: _.readUint32, bw: t.writeUint32 },
            end_rtime: { n: 6, d: 0, br: _.readUint32, bw: t.writeUint32 },
            reviewed: { n: 7, d: !1, br: _.readBool, bw: t.writeBool },
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
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new M.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return c(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new M.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      g(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new M.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPublishing_UpdatePartnerAppOptInEmail_Request`;
    }
  },
  Pe = class e extends M.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), M.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new M.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new M.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new M.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPublishing_UpdatePartnerAppOptInEmail_Response`;
    }
  },
  N = class e extends M.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.accounts_examined || u(e.M()),
        M.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            accounts_examined: { n: 1, br: _.readUint32, bw: t.writeUint32 },
            accounts_emailed: { n: 2, br: _.readUint32, bw: t.writeUint32 },
            accounts_not_emailed_opted_out: {
              n: 3,
              br: _.readUint32,
              bw: t.writeUint32,
            },
            accounts_email_failed: {
              n: 4,
              br: _.readUint32,
              bw: t.writeUint32,
            },
            completed: { n: 5, br: _.readBool, bw: t.writeBool },
            rt_last_updated: { n: 6, br: _.readUint32, bw: t.writeUint32 },
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
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new M.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return c(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new M.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      g(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new M.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPartnerAppOptInEmailStats`;
    }
  },
  Fe = class e extends M.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.email_def_id || u(e.M()),
        M.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: _.readFixed64String,
              bw: t.writeFixed64String,
            },
            force_resend: { n: 2, br: _.readBool, bw: t.writeBool },
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
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new M.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return c(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new M.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      g(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new M.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPublishing_SendPartnerAppOptInEmailAndWait_Request`;
    }
  },
  Ie = class e extends M.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.results || u(e.M()),
        M.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= { proto: e, fields: { results: { n: 1, c: N } } }), e.sm_m
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
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new M.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return c(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new M.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      g(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new M.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPublishing_SendPartnerAppOptInEmailAndWait_Response`;
    }
  },
  Le = class e extends M.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.opt_in_name || u(e.M()),
        M.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            opt_in_name: { n: 1, br: _.readString, bw: t.writeString },
            targeting_flag: {
              n: 2,
              br: _.readFixed64String,
              bw: t.writeFixed64String,
            },
            settings_flag: {
              n: 3,
              br: _.readFixed64String,
              bw: t.writeFixed64String,
            },
            email_templates: { n: 4, br: _.readString, bw: t.writeString },
            start_rtime: { n: 5, br: _.readUint32, bw: t.writeUint32 },
            end_rtime: { n: 6, br: _.readUint32, bw: t.writeUint32 },
            stats: { n: 7, c: N },
            creator_accountid: { n: 8, br: _.readUint32, bw: t.writeUint32 },
            create_time: { n: 9, br: _.readUint32, bw: t.writeUint32 },
            last_update_time: { n: 10, br: _.readUint32, bw: t.writeUint32 },
            email_def_id: {
              n: 11,
              br: _.readFixed64String,
              bw: t.writeFixed64String,
            },
            completed: { n: 12, br: _.readBool, bw: t.writeBool },
            aborted: { n: 13, br: _.readBool, bw: t.writeBool },
            deleted: { n: 14, br: _.readBool, bw: t.writeBool },
            reviewed: { n: 15, br: _.readBool, bw: t.writeBool },
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
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new M.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return c(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new M.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      g(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new M.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPartnerAppOptInEmailDef`;
    }
  },
  Re = class e extends M.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.opt_in_name || u(e.M()),
        M.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            opt_in_name: { n: 1, br: _.readString, bw: t.writeString },
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
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new M.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return c(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new M.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      g(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new M.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPublishing_GetPartnerAppOptInEmailDefAndStats_Request`;
    }
  },
  ze = class e extends M.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.defs || u(e.M()),
        M.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { defs: { n: 1, c: Le, r: !0, q: !0 } },
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
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new M.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return c(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new M.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      g(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new M.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPublishing_GetPartnerAppOptInEmailDefAndStats_Response`;
    }
  },
  Be = class e extends M.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.email_def_id || u(e.M()),
        M.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: _.readFixed64String,
              bw: t.writeFixed64String,
            },
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
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new M.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return c(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new M.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      g(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new M.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPublishing_GetEstimatePartnerAppOptInEmail_Request`;
    }
  },
  Ve = class e extends M.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.stats || u(e.M()),
        M.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= { proto: e, fields: { stats: { n: 1, c: N } } }), e.sm_m
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
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new M.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return c(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new M.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      g(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new M.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPublishing_GetEstimatePartnerAppOptInEmail_Response`;
    }
  },
  He = class e extends M.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.email_def_id || u(e.M()),
        M.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: _.readFixed64String,
              bw: t.writeFixed64String,
            },
            appid: { n: 2, br: _.readUint32, bw: t.writeUint32 },
            partnerid: { n: 3, br: _.readUint32, bw: t.writeUint32 },
            language_override: {
              n: 4,
              d: 0,
              br: _.readUint32,
              bw: t.writeUint32,
            },
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
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new M.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return c(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new M.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      g(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new M.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPublishing_TestFirePartnerAppOptInEmail_Request`;
    }
  },
  Ue = class e extends M.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), M.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new M.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new M.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new M.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPublishing_TestFirePartnerAppOptInEmail_Response`;
    }
  },
  We = class e extends M.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.accountid || u(e.M()),
        M.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            accountid: { n: 1, br: _.readUint32, bw: t.writeUint32 },
            appid: { n: 2, br: _.readUint32, bw: t.writeUint32 },
            partnerid: { n: 3, br: _.readUint32, bw: t.writeUint32 },
            rtime_notified: { n: 4, br: _.readUint32, bw: t.writeUint32 },
            ignored_unverified_email: { n: 5, br: _.readBool, bw: t.writeBool },
            ignored_email_optout: { n: 6, br: _.readBool, bw: t.writeBool },
            status: { n: 7, br: _.readUint32, bw: t.writeUint32 },
            send_rtime: { n: 8, br: _.readUint32, bw: t.writeUint32 },
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
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new M.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return c(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new M.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      g(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new M.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPartnerOptInEmailTracking`;
    }
  },
  Ge = class e extends M.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.email_def_id || u(e.M()),
        M.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: _.readFixed64String,
              bw: t.writeFixed64String,
            },
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
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new M.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return c(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new M.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      g(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new M.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPublishing_GetOptInEmailTracking_Request`;
    }
  },
  Ke = class e extends M.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.email_def_id || u(e.M()),
        M.Message.initialize(this, t, 0, -1, [2], null));
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
              br: _.readFixed64String,
              bw: t.writeFixed64String,
            },
            results: { n: 2, c: We, r: !0, q: !0 },
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
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new M.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return c(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new M.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      g(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new M.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPublishing_GetOptInEmailTracking_Response`;
    }
  },
  qe = class e extends M.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || u(e.M()),
        M.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: _.readUint32, bw: t.writeUint32 },
            opt_in: { n: 2, br: _.readBool, bw: t.writeBool },
            opt_in_name: { n: 3, br: _.readString, bw: t.writeString },
            jsondata: { n: 4, br: _.readString, bw: t.writeString },
            type: { n: 5, br: _.readEnum, bw: t.writeEnum },
            accountid_add: { n: 6, br: _.readUint32, bw: t.writeUint32 },
            time_opted_in: { n: 7, br: _.readUint32, bw: t.writeUint32 },
            time_updated: { n: 8, br: _.readUint32, bw: t.writeUint32 },
            accountid_lastmod: { n: 9, br: _.readUint32, bw: t.writeUint32 },
            invited: { n: 10, br: _.readBool, bw: t.writeBool },
            accountid_remove: { n: 11, br: _.readUint32, bw: t.writeUint32 },
            time_opted_out: { n: 12, br: _.readUint32, bw: t.writeUint32 },
            pruned: { n: 13, br: _.readBool, bw: t.writeBool },
            accountid_prune: { n: 14, br: _.readUint32, bw: t.writeUint32 },
            time_pruned: { n: 15, br: _.readUint32, bw: t.writeUint32 },
            additional_featuring: { n: 16, br: _.readBool, bw: t.writeBool },
            feature_day: { n: 17, br: _.readUint32, bw: t.writeUint32 },
            accountid_invited: { n: 18, br: _.readUint32, bw: t.writeUint32 },
            no_planned_discount: { n: 19, br: _.readBool, bw: t.writeBool },
            pending_review: { n: 20, br: _.readUint32, bw: t.writeUint32 },
            appeal_state: { n: 21, br: _.readEnum, bw: t.writeEnum },
            accountid_appeal: { n: 22, br: _.readUint32, bw: t.writeUint32 },
            time_appeal_decision: {
              n: 23,
              br: _.readUint32,
              bw: t.writeUint32,
            },
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
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new M.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return c(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new M.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      g(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new M.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPartnerAppOptInData`;
    }
  },
  Je = class e extends M.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || u(e.M()),
        M.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: _.readUint32, bw: t.writeUint32 },
            opt_in_name: { n: 2, br: _.readString, bw: t.writeString },
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
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new M.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return c(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new M.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      g(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new M.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPublishing_GetSinglePartnerAppOptIns_Request`;
    }
  },
  Ye = class e extends M.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.data || u(e.M()),
        M.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { data: { n: 1, c: qe, r: !0, q: !0 } },
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
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new M.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return c(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new M.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      g(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new M.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPublishing_GetSinglePartnerAppOptIns_Response`;
    }
  },
  Xe = class e extends M.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appids || u(e.M()),
        M.Message.initialize(this, t, 0, -1, [1], null));
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
              br: _.readUint32,
              pbr: _.readPackedUint32,
              bw: t.writeRepeatedUint32,
            },
            additional_featuring: {
              n: 2,
              d: !0,
              br: _.readBool,
              bw: t.writeBool,
            },
            opt_in_name: { n: 3, br: _.readString, bw: t.writeString },
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
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new M.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return c(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new M.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      g(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new M.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPublishing_SetFeaturingOnPartnerAppOptIn_Request`;
    }
  },
  Ze = class e extends M.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appids || u(e.M()),
        M.Message.initialize(this, t, 0, -1, [1], null));
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
              br: _.readUint32,
              pbr: _.readPackedUint32,
              bw: t.writeRepeatedUint32,
            },
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
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new M.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return c(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new M.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      g(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new M.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPublishing_SetFeaturingOnPartnerAppOptIn_Response`;
    }
  },
  Qe = class e extends M.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.opt_in_id || u(e.M()),
        M.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            opt_in_id: { n: 7, br: _.readUint32, bw: t.writeUint32 },
            opt_in_name: { n: 1, br: _.readString, bw: t.writeString },
            type: { n: 2, br: _.readEnum, bw: t.writeEnum },
            active: { n: 3, br: _.readBool, bw: t.writeBool },
            start_date: { n: 4, br: _.readUint32, bw: t.writeUint32 },
            end_date: { n: 5, br: _.readUint32, bw: t.writeUint32 },
            jsondata: { n: 6, br: _.readString, bw: t.writeString },
            last_modified_time: { n: 8, br: _.readUint32, bw: t.writeUint32 },
            last_modifier_accountid: {
              n: 9,
              br: _.readUint32,
              bw: t.writeUint32,
            },
            is_next_fest: { n: 10, br: _.readBool, bw: t.writeBool },
            next_fest_out_of_sync: { n: 11, br: _.readBool, bw: t.writeBool },
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
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new M.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return c(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new M.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      g(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new M.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `COptInDef`;
    }
  },
  $e = class e extends M.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.opt_in_name || u(e.M()),
        M.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            opt_in_name: { n: 1, br: _.readString, bw: t.writeString },
            start: { n: 2, d: 0, br: _.readUint32, bw: t.writeUint32 },
            count: { n: 3, d: 20, br: _.readUint32, bw: t.writeUint32 },
            include_json: { n: 4, br: _.readBool, bw: t.writeBool },
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
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new M.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return c(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new M.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      g(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new M.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPublishing_GetOptInHistoryInternal_Request`;
    }
  },
  et = class e extends M.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.opt_ins || u(e.M()),
        M.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { opt_ins: { n: 1, c: Qe, r: !0, q: !0 } },
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
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new M.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return c(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new M.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      g(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new M.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPublishing_GetOptInHistoryInternal_Response`;
    }
  },
  tt = class e extends M.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.opt_in_name || u(e.M()),
        M.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            opt_in_name: { n: 1, br: _.readString, bw: t.writeString },
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
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new M.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return c(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new M.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      g(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new M.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPublishing_GetPartnerAppOptInsIDs_Request`;
    }
  },
  nt = class e extends M.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.opted_in_appids || u(e.M()),
        M.Message.initialize(this, t, 0, -1, [1], null));
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
              br: _.readUint32,
              pbr: _.readPackedUint32,
              bw: t.writeRepeatedUint32,
            },
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
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new M.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return c(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new M.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      g(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new M.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPublishing_GetPartnerAppOptInsIDs_Response`;
    }
  },
  rt = class e extends M.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.opt_in_names || u(e.M()),
        M.Message.initialize(this, t, 0, -1, [1], null));
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
              br: _.readString,
              bw: t.writeRepeatedString,
            },
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
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new M.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return c(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new M.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      g(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new M.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPublishing_GetOptInAppealsSummaryStats_Request`;
    }
  },
  it = class e extends M.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.summary || u(e.M()),
        M.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { summary: { n: 1, c: at, r: !0, q: !0 } },
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
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new M.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return c(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new M.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      g(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new M.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPublishing_GetOptInAppealsSummaryStats_Response`;
    }
  },
  at = class e extends M.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.opt_in_name || u(e.M()),
        M.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            opt_in_name: { n: 1, br: _.readString, bw: t.writeString },
            open_appeals: { n: 2, br: _.readUint32, bw: t.writeUint32 },
            reject_appeals: { n: 3, br: _.readUint32, bw: t.writeUint32 },
            accepted_appeals: { n: 4, br: _.readUint32, bw: t.writeUint32 },
            appeal_account_id: { n: 5, br: _.readUint32, bw: t.writeUint32 },
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
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new M.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return c(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new M.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      g(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new M.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPublishing_GetOptInAppealsSummaryStats_Response_CSummary`;
    }
  },
  ot = class e extends M.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.inviteid || u(e.M()),
        M.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            inviteid: { n: 1, br: _.readUint64String, bw: t.writeUint64String },
            accountid_sender: { n: 2, br: _.readUint32, bw: t.writeUint32 },
            email: { n: 3, br: _.readString, bw: t.writeString },
            real_name: { n: 4, br: _.readString, bw: t.writeString },
            note: { n: 5, br: _.readString, bw: t.writeString },
            time_sent: { n: 6, br: _.readUint32, bw: t.writeUint32 },
            current_state: { n: 7, br: _.readEnum, bw: t.writeEnum },
            pub_rights: {
              n: 8,
              br: _.readUint64String,
              bw: t.writeUint64String,
            },
            app_rights: {
              n: 9,
              br: _.readUint64String,
              bw: t.writeUint64String,
            },
            time_receiver_responded: {
              n: 10,
              br: _.readUint32,
              bw: t.writeUint32,
            },
            accountid: { n: 11, br: _.readUint32, bw: t.writeUint32 },
            time_partner_responded: {
              n: 12,
              br: _.readUint32,
              bw: t.writeUint32,
            },
            accountid_partner: { n: 13, br: _.readUint32, bw: t.writeUint32 },
            partnerid: { n: 14, br: _.readUint32, bw: t.writeUint32 },
            time_last_updated: { n: 15, br: _.readUint32, bw: t.writeUint32 },
            sender_ip: { n: 16, br: _.readString, bw: t.writeString },
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
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new M.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return c(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new M.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      g(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new M.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `MembershipInvite`;
    }
  },
  st = class e extends M.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.partnerid || u(e.M()),
        M.Message.initialize(this, t, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            partnerid: { n: 1, br: _.readUint32, bw: t.writeUint32 },
            filter_states: {
              n: 2,
              r: !0,
              q: !0,
              br: _.readEnum,
              pbr: _.readPackedEnum,
              bw: t.writeRepeatedEnum,
            },
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
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new M.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return c(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new M.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      g(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new M.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPartnerMembershipInvite_GetInvites_Request`;
    }
  },
  ct = class e extends M.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.invites || u(e.M()),
        M.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { invites: { n: 1, c: ot, r: !0, q: !0 } },
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
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new M.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return c(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new M.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      g(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new M.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPartnerMembershipInvite_GetInvites_Response`;
    }
  },
  lt;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(`Publishing.GetSinglePartnerAppOptIn#1`, r(Je, t, n), Ye, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  e.GetSinglePartnerAppOptIn = t;
  function n(e, t, n) {
    return e.SendMsg(
      `Publishing.SetFeaturingOnPartnerAppOptIn#1`,
      r(Xe, t, n),
      Ze,
      { ePrivilege: 1, rgBrowserAPISites: [`partner`] },
    );
  }
  e.SetFeaturingOnPartnerAppOptIn = n;
  function i(e, t, n) {
    return e.SendMsg(`Publishing.GetOptInHistoryInternal#1`, r($e, t, n), et, {
      ePrivilege: 4,
    });
  }
  e.GetOptInHistoryInternal = i;
  function a(e, t, n) {
    return e.SendMsg(`Publishing.GetPartnerAppOptInsIDs#1`, r(tt, t, n), nt, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  e.GetPartnerAppOptInsIDs = a;
  function o(e, t, n) {
    return e.SendMsg(
      `Publishing.GetOptInAppealsSummaryStats#1`,
      r(rt, t, n),
      it,
      { bConstMethod: !0, ePrivilege: 1, rgBrowserAPISites: [`partner`] },
    );
  }
  e.GetOptInAppealsSummaryStats = o;
  function s(e, t, n) {
    return e.SendMsg(
      `Publishing.CreatePartnerAppOptInEmails#1`,
      r(je, t, n),
      Me,
      { ePrivilege: 1, rgBrowserAPISites: [`partner`] },
    );
  }
  e.CreatePartnerAppOptInEmails = s;
  function c(e, t, n) {
    return e.SendMsg(
      `Publishing.UpdatePartnerAppOptInEmails#1`,
      r(Ne, t, n),
      Pe,
      { ePrivilege: 1, rgBrowserAPISites: [`partner`] },
    );
  }
  e.UpdatePartnerAppOptInEmails = c;
  function l(e, t, n) {
    return e.SendMsg(
      `Publishing.SendPartnerOptInEmailAndWait#1`,
      r(Fe, t, n),
      Ie,
      { ePrivilege: 1, rgBrowserAPISites: [`partner`] },
    );
  }
  e.SendPartnerOptInEmailAndWait = l;
  function u(e, t, n) {
    return e.SendMsg(
      `Publishing.GetPartnerAppOptInEmailDefAndStats#1`,
      r(Re, t, n),
      ze,
      { ePrivilege: 1, rgBrowserAPISites: [`partner`] },
    );
  }
  e.GetPartnerAppOptInEmailDefAndStats = u;
  function d(e, t, n) {
    return e.SendMsg(
      `Publishing.GetEstimatePartnerAppOptInEmail#1`,
      r(Be, t, n),
      Ve,
      { ePrivilege: 1, rgBrowserAPISites: [`partner`] },
    );
  }
  e.GetEstimatePartnerAppOptInEmail = d;
  function f(e, t, n) {
    return e.SendMsg(
      `Publishing.TestFirePartnerAppOptInEmail#1`,
      r(He, t, n),
      Ue,
      { ePrivilege: 1, rgBrowserAPISites: [`partner`] },
    );
  }
  e.TestFirePartnerAppOptInEmail = f;
  function p(e, t, n) {
    return e.SendMsg(`Publishing.GetOptInEmailTracking#1`, r(Ge, t, n), Ke, {
      ePrivilege: 1,
      rgBrowserAPISites: [`partner`],
    });
  }
  e.GetOptInEmailTracking = p;
  function m(e, t, n) {
    return e.SendMsg(
      `Publishing.GetPartnerPaidGivenPackageList#1`,
      r(Oe, t, n),
      ke,
      { bConstMethod: !0, ePrivilege: 4 },
    );
  }
  e.GetPartnerPaidGivenPackageList = m;
})((lt ||= {}));
var ut;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(`PartnerMembershipInvite.GetInvites#1`, r(st, t, n), ct, {
      bConstMethod: !0,
      ePrivilege: 11,
    });
  }
  e.GetInvites = t;
})((ut ||= {}));
var P = class e {
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
    let e = h(`package_discounts`, `application_config`);
    this.BIsDiscountPayloadValid(e) && this.InternalAddDiscounts(e);
    let t = h(`max_discount_percentages`, `application_config`);
    if (this.BIsMaxDiscountPayloadValid(t))
      for (let e in t)
        this.m_mapMaxDiscountPercentageByPackageId.set(Number(e), t[e]);
  }
  InternalAddDiscounts(e, t) {
    let n = new Set(),
      r = new Set();
    for (let t of e)
      (t.discountEventID?.length || (t.discountEventID = dt(t)),
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
    let r = x(e).sort().join(`,`);
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
      s = h(`publisherid`, `application_config`),
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
      let e = T(c);
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
        d.PARTNER_BASE_URL + `promotion/discounts/ajaxgetpackagediscounts/` + e,
      o,
      s = 3;
    for (; s-- > 0;)
      try {
        if (
          ((o = await j.default.get(a, {
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
    let n = d.PARTNER_BASE_URL + `packages/createoreditdiscount/` + e.packageID,
      r = new FormData();
    (r.append(`sessionid`, a()),
      e.nDiscountID && r.append(`id`, e.nDiscountID.toString()),
      r.append(`name`, e.strDiscountName),
      r.append(`description`, e.strDiscountDescription),
      e.discountEventID &&
        !F(e.discountEventID) &&
        r.append(`type`, e.discountEventID),
      r.append(`percent`, e.nDiscountPct.toString()),
      r.append(`start_date`, new Date(e.rtStartDate * 1e3).toISOString()),
      r.append(`end_date`, new Date(e.rtEndDate * 1e3).toISOString()));
    let i = null;
    try {
      let a = await j.default.post(n, r, {
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
    let o = T(i);
    return (
      console.error(
        `CPackageDiscountStore.SaveDiscountToServer: failed`,
        o.strErrorMsg,
        o,
      ),
      i?.response?.data ?? { success: 2 }
    );
  }
  async DeleteDiscountOnServer(e, t, n, r) {
    let i = d.PARTNER_BASE_URL + `packages/removepackagediscount/` + t,
      o = new FormData();
    (o.append(`sessionid`, a()), o.append(`discountid`, e.toString()));
    let s = null;
    try {
      let a = await j.default.post(i, o, {
        withCredentials: !0,
        cancelToken: r?.token,
      });
      if (a?.status == 200 && a.data?.success == 1)
        return (this.InternalDeleteDiscount(e, t, n), a.data);
      s = { response: a };
    } catch (e) {
      s = e;
    }
    let c = T(s);
    return (
      console.error(
        `CPackageDiscountStore.DeleteDiscountOnServer: failed`,
        c.strErrorMsg,
        c,
      ),
      s?.response?.data ?? { success: 2 }
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
function dt(e) {
  return `custom-event-${e.rtStartDate}-${e.rtEndDate}-${_e(e.strDiscountName)}`;
}
function F(e) {
  return e.startsWith(`custom-event-`);
}
function ft(e) {
  return P.Get().GetDiscountByID(e);
}
function pt(e) {
  return P.Get().GetAllDiscountsForDiscountEvent(e);
}
function mt(e) {
  return P.Get().GetAllDiscountsForPackage(e);
}
function ht(e) {
  return P.Get().GetCallbackListForPackage(e);
}
function gt() {
  return P.Get().GetAllDiscountsForAllPackages();
}
function _t() {
  return P.Get().GetGlobalCallbackList();
}
function vt() {
  return A.useCallback((e, t, n) => P.Get().LoadPackageDiscounts(e, t, n), []);
}
function yt() {
  let e = (e) => P.Get().SaveDiscountToServer(e),
    t = (e, t, n) => P.Get().DeleteDiscountOnServer(e, t, n);
  return A.useMemo(() => ({ fnSaveDiscount: e, fnDeleteDiscount: t }), []);
}
function bt(e) {
  return new Map(Array.from(e.map((e) => [e, P.Get().GetDiscountByID(e)])));
}
function xt(e) {
  let t = E(),
    [n, r] = A.useState(P.Get().GetAllDiscountsForPackage(e));
  return (
    v(P.Get().GetCallbackListForPackage(e), r),
    A.useMemo(() => {
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
function St(e) {
  let t = E();
  if (!e) return null;
  let n = null;
  return (
    e.forEach((e) => {
      let r = P.Get().GetAllDiscountsForPackage(e);
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
function Ct(e, t, n) {
  let [r, i] = (0, A.useState)(),
    [a, o] = (0, A.useState)([]);
  return (
    (0, A.useEffect)(() => {
      if (t < n && e?.length > 0) {
        let r = [],
          a = [],
          s = [];
        for (let e = t; e < n; e += C.PerDay) (r.push(e), a.push(!1));
        (e.forEach((e) => {
          let i = P.Get().GetAllDiscountsForPackage(e);
          if (i?.length > 0)
            for (let e of i)
              e.rtStartDate > n ||
                e.rtEndDate < t ||
                (s.push(e),
                r.forEach((t, n) => {
                  t < e.rtEndDate &&
                    e.rtStartDate < t + C.PerDay &&
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
function wt(e) {
  let t = E(),
    [n, r] = A.useState(P.Get().GetAllDiscountsForAllPackages());
  return (
    v(P.Get().GetGlobalCallbackList(), r),
    A.useMemo(() => {
      let r = null;
      if (n == null) return { mostRecentDiscount: r, bLoading: !0 };
      for (let n of e) {
        let e = P.Get().GetAllDiscountsForPackage(n) ?? [];
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
function Tt(e) {
  let [t, n] = A.useState(P.Get().GetAllDiscountsForDiscountEvent(e));
  return (v(P.Get().GetCallbackListForDiscountEvent(e), n), t);
}
function Et(e) {
  let [t, n] = A.useState(P.Get().GetAllDiscountsForPackage(e));
  v(P.Get().GetCallbackListForPackage(e), n);
  let [r, i] = A.useState(!1),
    a = vt();
  return (
    A.useEffect(() => {
      if (t || !e) r || i(!0);
      else if (!r && a) {
        let t = j.default.CancelToken.source();
        a([e]).then(() => {
          t.token.reason || i(!0);
        });
      }
    }, [t, r, i, e, a]),
    t
  );
}
function Dt(e) {
  return P.Get().GetMaxDiscountPercentage(e);
}
function Ot(e) {
  return e.some(
    (e) => e.nDiscountPct > P.Get().GetMaxDiscountPercentage(e.packageID),
  );
}
function kt(e) {
  return P.Get().GetMaxDiscountPercentageForGroup(e);
}
var At = `SaleEvent_DurationDiscount_Tooltip`,
  jt = `discount`,
  Mt = `proximity`,
  I = `unique`,
  L = class e {
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
      let t = D();
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
          d.PARTNER_BASE_URL +
          `promotion/discounts/ajaxgetalldiscountevents/` +
          e,
        r = {},
        i = null;
      try {
        this.m_bLoadEventsRequestInFlight = !0;
        let e = await j.default.get(n, { params: r, cancelToken: t?.token });
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
      let a = T(i);
      return (
        console.error(`Could not load Discount Events`, a.strErrorMsg, a),
        i?.response?.data?.success ?? 2
      );
    }
    async CreateDiscountEvent(e, t, n, r, i, o, s, c) {
      let l =
          d.PARTNER_BASE_URL + `promotion/discounts/ajaxupdatediscountevent`,
        u = new FormData();
      (u.append(`sessionid`, a()),
        u.append(`name`, n),
        u.append(`start_time`, e.toString()),
        u.append(`end_time`, t.toString()),
        u.append(`strJSONDiscountInfo`, Bt(n, r, i, o, s)));
      let f = null;
      try {
        let a = await j.default.post(l, u, {
          withCredentials: !0,
          cancelToken: c?.token,
        });
        if (a?.status == 200 && a.data?.success == 1 && a.data.eventid) {
          let c = {
            id: a.data.eventid,
            name: n,
            start_date: e,
            end_date: t,
            appids: s,
            publisherids: o,
            description: i,
            collision_type: Mt,
            event: `1`,
            header: r,
            tooltip: At,
            type: jt,
            prevent_weeklong: ``,
          };
          return (
            this.m_mapDiscountEvents.set(c.id, c),
            this.m_discountEventsListCallback.Dispatch(
              this.GetAllDiscountEvents(),
            ),
            c
          );
        }
        f = { response: a };
      } catch (e) {
        f = e;
      }
      let p = T(f);
      return (
        console.error(
          `CDiscountEventStore.CreateDiscountEvent: failed`,
          p.strErrorMsg,
          p,
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
      let o =
          d.PARTNER_BASE_URL + `promotion/discounts/ajaxupdatediscountevent`,
        s = new FormData();
      (s.append(`sessionid`, a()),
        s.append(`start_time`, i.start_date.toString()),
        s.append(`end_time`, i.end_date.toString()),
        s.append(`strJSONDiscountInfo`, Vt(e, i, t, n)));
      let c = null;
      try {
        let e = await j.default.post(o, s, {
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
        c = { response: e };
      } catch (e) {
        c = e;
      }
      let l = T(c);
      return (
        console.error(
          `CDiscountEventStore.UpdateDiscountEventPublisherAndAppList: failed`,
          l.strErrorMsg,
          l,
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
            d.PARTNER_BASE_URL + `promotion/discounts/ajaxgetdiscounteventbyid`,
          r = { sessionid: a(), discountid: e },
          i = await j.default.get(n, { params: r, withCredentials: !0 });
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
        t = T(i);
      } catch (e) {
        t = T(e);
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
            d.PARTNER_BASE_URL +
            `promotion/discounts/ajaxgetdiscounteventapplist`,
          r = { sessionid: a(), discountid: e },
          i = await j.default.get(n, { params: r, withCredentials: !0 });
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
        t = T(i);
      } catch (e) {
        t = T(e);
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
      let e = h(`discount_events`, `application_config`);
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
(f([b], L.prototype, `GetDiscountEvent`, null),
  f([b], L.prototype, `GetAppList`, null),
  f([b], L.prototype, `CreateDiscountEvent`, null),
  f([b], L.prototype, `UpdateDiscountEventPublisherAndAppList`, null));
function Nt() {
  return L.Get().GetFutureDiscountEvents();
}
function Pt() {
  return L.Get().GetDiscountEventListCallback();
}
function Ft(e) {
  let { rgDiscountEvents: t, eResult: n } = It(0, e),
    r = [];
  return (
    t?.forEach((e) => {
      e.collision_type == `unique` && (r = r.concat(e));
    }),
    { rgMajorSaleDiscountEvents: r, eResult: n }
  );
}
function It(e, t) {
  let n = L.Get().BLoadedViaInitOrFullLoad(),
    [r, i] = A.useState(n ? L.Get().GetAllDiscountEvents() : null),
    [a, o] = A.useState(null),
    s = e || Number.parseInt(h(`publisherid`, `application_config`));
  (v(L.Get().GetDiscountEventListCallback(), i),
    A.useEffect(() => {
      L.Get().BLoadedViaInitOrFullLoad() ||
        L.Get().LoadAllDiscountEvents(s).then(o);
    }, [r, s]));
  let c = a ?? (r?.length ? 1 : null);
  return A.useMemo(
    () => ({
      rgDiscountEvents: t ? r : L.Get().GetFutureDiscountEvents(),
      eResult: c,
    }),
    [r, c, t],
  );
}
function R(e) {
  return L.Get().GetDiscountEvent(e);
}
function Lt(e) {
  let { data: t } = Rt(e);
  return t;
}
function Rt(e) {
  let [t, n] = (0, A.useState)(L.Get().GetDiscountEvent(e)),
    [r, i] = A.useState(!!e);
  return (
    A.useEffect(() => {
      (!t && e) || (t?.id != e && e)
        ? (async () => {
            try {
              let t = await L.Get().LoadSingleDiscountEvent(e);
              t && n(t);
            } finally {
              i(!1);
            }
          })()
        : i(!1);
    }, [e, t]),
    v(L.Get().GetDiscountEventCallback(e), n),
    { data: t, isLoading: r }
  );
}
function zt(e) {
  let [t, n] = (0, A.useState)(L.Get().GetDiscountEvent(e)),
    [r, i] = (0, A.useState)(L.Get().GetAppList(e));
  return (
    (0, A.useEffect)(() => {
      ((!r && e) || (t?.id != e && e)) &&
        L.Get()
          .LoadSingleDiscountEventsAppList(e)
          .then((e) => {
            e && (n(e.oDiscountEvent), i(e.rgAppList));
          });
    }, [t?.id, r, e]),
    v(L.Get().GetDiscountEventCallback(e), n),
    v(L.Get().GetAppListCallback(e), i),
    r ? { oDiscountEvent: t, rgAppList: r } : null
  );
}
function Bt(e, t, n, r, i) {
  return JSON.stringify({
    discount_event: {
      name: e,
      publisherids: r?.join(`,`),
      appids: i?.join(`,`),
      description: n,
      event: `1`,
      collision_type: Mt,
      header: t,
      tooltip: At,
      type: jt,
    },
  });
}
function Vt(e, t, n, r) {
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
function Ht() {
  return { fnCreateDiscountEvent: L.Get().CreateDiscountEvent };
}
function Ut() {
  return {
    fnUpdateDiscountEventAppAndPublisherList:
      L.Get().UpdateDiscountEventPublisherAndAppList,
  };
}
var z = class t {
  constructor() {
    de(this);
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
  GetOptInRegistrationAndEligibilityForApps(e) {
    if (e.length == 0) return null;
    let t = new Map();
    for (let n of e) {
      let e = this.m_mapRegistrations.get(n);
      if (e)
        for (let n of e.keys()) {
          let e = t.get(n);
          ((e ||= 0), t.set(n, e + 1));
        }
    }
    let r = new Map(),
      i = e[0];
    return (
      t.forEach((t, a) => {
        if (t == e.length) {
          let e = this.m_mapRegistrations.get(i).get(a);
          (n(e, `Missing OptIn Restration`), r.set(a, e));
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
      Se(e, t)
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
    let n = d.PARTNER_BASE_URL + `optin/ajaxgetalloptinregistrations`,
      r = { sessionid: a(), opt_in_name: e, opt_in_only: t },
      i = await j.default.get(n, { params: r, withCredentials: !0 });
    return i?.data?.data
      ? this.UpdateRegAndTrackInStore(e, i.data.data)
      : i?.data?.data;
  }
  async FetchPendingReviewOptInRegistrationn(e) {
    let t = d.PARTNER_BASE_URL + `optin/ajaxgetpendingreviewregistrations`,
      n = { sessionid: a(), opt_in_name: e },
      r = await j.default.get(t, { params: n, withCredentials: !0 });
    return r?.data?.data
      ? this.UpdateRegAndTrackInStore(e, r.data.data)
      : r?.data?.data;
  }
  async LoadOptInRegistration(e, t, n) {
    if (this.GetRegistration(t, e)) return !0;
    let r = this.m_mapRequestedAppIDs.get(e)?.get(t);
    if (r) return r;
    try {
      let r = d.PARTNER_BASE_URL + `optin/ajaxgetoptinregistation`,
        i = { sessionid: a(), appid: t, opt_in_name: e },
        o = await j.default.get(r, {
          params: i,
          withCredentials: !0,
          cancelToken: n?.token,
        });
      if (o?.data?.success == 1 && o.data.optin_registration) {
        if (
          (typeof o.data.optin_registration.jsondata == `string` &&
            (o.data.optin_registration.jsondata = JSON.parse(
              o.data.optin_registration.jsondata,
            )),
          this.m_mapRegistrations.has(t))
        )
          this.m_mapRegistrations.get(t).set(e, o.data.optin_registration);
        else {
          let n = new Map();
          (n.set(e, o.data.optin_registration),
            this.m_mapRegistrations.set(t, n),
            this.GetLoadCountChange().Dispatch(this.m_mapRegistrations.size));
        }
        return !0;
      }
      {
        let e = T(o);
        console.error(
          `LoadOptInRegistration : failed with a response and: ` +
            e.strErrorMsg,
          e,
        );
      }
    } catch (e) {
      let t = T(e);
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
    ((e = x(e).sort()),
      (t = x(t).sort()),
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
    let s = d.PARTNER_BASE_URL + `optin/ajaxbatchgetoptinregistation`,
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
            j.default.get(s, {
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
      let n = T(c);
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
      (r.append(`sessionid`, a()),
        Object.keys(t).forEach((e) => r.append(e, t[e])));
      let i = d.PARTNER_BASE_URL + `optin/ajaxupdateoptinregistration/` + e,
        o = await j.default.post(i, r, { withCredentials: !0 });
      if (o?.status == 200 && o.data?.success == 1) return null;
      n = T(o);
    } catch (e) {
      n = T(e);
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
      (i.append(`sessionid`, a()),
        i.append(`appid`, `` + e),
        i.append(`opt_in_name`, t.opt_in_name),
        i.append(`jsondata`, JSON.stringify(t)),
        n && i.append(`bCreatePendingInvite`, `true`));
      let o =
          d.PARTNER_BASE_URL + `optin/ajaxupdateoptinregistrationpayload/` + e,
        s = await j.default.post(o, i, { withCredentials: !0 });
      if (s?.status == 200 && s.data?.success == 1) {
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
      r = T(s);
    } catch (e) {
      r = T(e);
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
  async UpdateAppealState(t, n, r) {
    let i = null;
    try {
      let o = n.opt_in_name || n.jsondata.opt_in_name,
        s = new FormData();
      (s.append(`sessionid`, a()),
        s.append(`appid`, `` + t),
        s.append(`opt_in_name`, o),
        s.append(`approved`, `` + r));
      let c = d.PARTNER_BASE_URL + `optin/ajaxsetappealsdecision/` + t,
        l = await j.default.post(c, s, { withCredentials: !0 });
      if (l?.status == 200 && l.data?.success == 1) {
        let n = { ...this.m_mapRegistrations.get(t).get(o) };
        return (
          (n.accountid_appeal = e.accountid),
          (n.appeal_state = r ? 1 : 2),
          this.m_mapRegistrations.get(t).set(o, n),
          this.GetSingleAppRegistrationChange(t, o).Dispatch(n),
          !0
        );
      }
      i = T(l);
    } catch (e) {
      i = T(e);
    }
    return (
      console.error(
        `COptInRegistrations::UpdateAppealState error ` + i.strErrorMsg,
        i,
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
      JSON.stringify(h(`optin_registrations`, `application_config`)),
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
(f([b], z.prototype, `GetOptInRegistrationAndEligibilityForApp`, null),
  f([b], z.prototype, `GetOptInRegistrationAndEligibilityForApps`, null),
  f([b], z.prototype, `LoadMultiOptInRegistration`, null),
  f([b], z.prototype, `UpdateOptInRegistrationJson`, null),
  f([b], z.prototype, `UpdateAppealState`, null),
  f([ue], z.prototype, `Init`, null));
function Wt(e, t) {
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
function Gt() {
  return A.useMemo(
    () => ({
      fnLoadMultiOptInRegistration: z.Get().LoadMultiOptInRegistration,
    }),
    [],
  );
}
function Kt(e, t, n) {
  let [r, i] = A.useState(null),
    a = ge(`useMultiLoadOptInAppReg`);
  return (
    (0, A.useEffect)(() => {
      let r = t?.filter(Boolean);
      r?.length > 0 && e?.length > 0
        ? z
            .Get()
            .LoadMultiOptInRegistration(
              r.map(() => e),
              r,
              a,
              n,
            )
            .then(() => {
              let t = new Map();
              (r.forEach((n) => {
                let r = z.Get().GetRegistration(n, e);
                r && t.set(n, r);
              }),
                i(t));
            })
        : i(new Map());
    }, [e, t, a, n]),
    r
  );
}
function qt(e) {
  let [t, n] = A.useState(z.Get().GetAllOptInRegistrations(e));
  return (v(z.Get().GetOptInNameRegistrationsCallbackList(e), n), t);
}
function Jt(e) {
  let t = qt(e),
    [n, r] = A.useState({
      nAppOptedIn: 0,
      nAppEligible: 0,
      nAppOptedOut: 0,
      nAppIneligible: 0,
    });
  return (
    A.useEffect(() => {
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
function Yt(e, t) {
  let n = ce({
    queryKey: [`useAllOptInRegistrationByName`, e, !!t],
    queryFn: () => z.Get().FetchOptInRegistrationForOptIn(e, t),
    staleTime: 36e5,
    enabled: !!e,
  });
  return n.isLoading ? null : n.data;
}
function Xt(e) {
  let t = ce({
    queryKey: [`useAllPendingReviewOptInRegistrationByName`, e],
    queryFn: () => z.Get().FetchPendingReviewOptInRegistrationn(e),
    retry: !1,
    staleTime: 36e5,
    enabled: e?.length > 0,
  });
  return {
    rgPendingReviewRegistrations: t.isLoading ? null : t.data,
    bIsInError: t.isError,
  };
}
function Zt(e, t) {
  let n = Yt(e, !1),
    [r, i] = (0, A.useState)(n?.find((e) => e.appid == t));
  return (v(z.Get().GetSingleAppRegistrationChange(t, e), i), r);
}
function Qt(e, t) {
  let [n, r] = (0, A.useState)(
    z.Get().GetOptInRegistrationAndEligibilityForAppOrCreate(e, t),
  );
  return (v(z.Get().GetSingleAppRegistrationChange(e, t), r), n);
}
function $t(e, t) {
  let [n, r] = (0, A.useState)(z.Get().GetExistingOptInRegistartion(e, t));
  return (v(z.Get().GetSingleAppRegistrationChange(e, t), r), n);
}
function en() {
  return { fnUpdateOptInRegistrationJson: z.Get().UpdateOptInRegistrationJson };
}
function tn() {
  return { fnUpdateAppealState: z.Get().UpdateAppealState };
}
function nn() {
  let [e, t] = (0, A.useState)(z.Get().GetLoadCount());
  return (v(z.Get().GetLoadCountChange(), t), z.Get().GetLoadCount());
}
var rn = new Set([0, 2, 6, 13]),
  an = new Set([4, 7, 11]);
function on(e) {
  let t = !1,
    n = !1,
    r,
    i = new Set();
  for (let r of e?.GetIncludedAppIDs() ?? []) {
    let e = k.Get().GetApp(r);
    if (e && rn.has(e.GetAppType())) ((t = !0), i.add(e.GetID()));
    else if (e && an.has(e.GetAppType())) {
      n = !0;
      let t = e.GetParentAppID();
      t && i.add(t);
    }
  }
  let a = null;
  return (
    i.size == 1
      ? ((r = Array.from(i)[0]), (a = k.Get().GetApp(r)?.GetName()))
      : i.size > 1 && (a = S(`#PackageGrid_MultipleBaseGamesFoundForPackage`)),
    (a ||= S(`#PackageGrid_NoBaseGameFoundForPackage`)),
    {
      baseAppName: a,
      contents: t && n ? `BOTH` : t ? `GAME` : n ? `DLC` : null,
      nBaseAppID: r,
    }
  );
}
var B = { include_release: !0 };
async function sn(e, t) {
  if ((await k.Get().HintLoadStorePackages(e, B)) != 1 || t.token.reason)
    return null;
  let n = [];
  e.map((e) => k.Get().GetPackage(e))
    .filter((e) => !!e)
    .forEach((e) => n.push(...e.GetIncludedAppIDs()));
  let r = Array.from(new Set(n));
  if ((await k.Get().HintLoadStoreApps(r, B)) != 1 || t.token.reason)
    return null;
  let i = r
      .map((e) => k.Get().GetApp(e))
      .filter((e) => !!e?.GetParentAppID())
      .map((e) => e.GetParentAppID()),
    a = Array.from(new Set(i));
  return (await k.Get().HintLoadStoreApps(a, B)) != 1 || t.token.reason
    ? null
    : Array.from(new Set(r.concat(a)));
}
var cn = `deepest-past`,
  ln = `most-recent`,
  un = `next-available`,
  dn = `related-discount-view`,
  V = class e {
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
    m_eRelatedDiscountView = cn;
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
      let e = h(`price_increase_times`, `application_config`);
      if (this.BIsPriceIncreasePayloadValid(e))
        for (let t in e) this.m_mapLastTimeRaisedPrices.set(Number(t), e[t]);
      ((this.m_eRelatedDiscountView =
        window.localStorage.getItem(dn) ?? `deepest-past`),
        this.UpdateDiscountEventsForGrid(),
        Pt().Register(() => this.UpdateDiscountEventsForGrid()),
        _t().Register(() => this.UpdateDiscountEventsForGrid()),
        this.SetEventSelectionParametersFromURL(),
        this.UpdateVisibleDiscountEventIDs());
    }
    UpdateDiscountEventsForGrid() {
      let e = Nt(),
        t = gt(),
        n = new Set(e.map((e) => e.id)),
        r = [],
        i = D();
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
        (t && !this.m_bIncludeCustomEvents && F(e.id) && (t = !1),
          t &&
            !this.m_bIncludeWeeklongEvents &&
            e.id.startsWith(`weeklongdeal_`) &&
            !Ln(e.id) &&
            (t = !1),
          t && !this.m_bIncludeIneligibleEvents && !Rn(e.id) && (t = !1),
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
function H(e) {
  return V.Get().m_mapLastTimeRaisedPrices.get(e) ?? 0;
}
function U() {
  return V.Get().m_rgDiscountEvents;
}
function W(e) {
  return V.Get().m_mapDiscountEventsByID.get(e);
}
function fn() {
  return V.Get().m_discountEventsCallbackList;
}
function pn() {
  let [e, t] = A.useState(V.Get().m_rgDiscountEvents);
  return (v(V.Get().m_discountEventsCallbackList, t), e);
}
function mn() {
  let [e, t] = A.useState(V.Get().m_setVisibleDiscountEventIDs);
  return (v(V.Get().m_visibleDiscountEventIDsCallbackList, t), e);
}
function hn(e) {
  let [t, n] = A.useState(V.Get().m_mapDiscountEventsByID.get(e)),
    r = A.useCallback(() => n(V.Get().m_mapDiscountEventsByID.get(e)), [e]);
  return (
    v(V.Get().m_discountEventsCallbackList, r), A.useEffect(r, [e, r]), t
  );
}
function gn(e = !0) {
  let [t, n] = A.useState(V.Get().GetEventSelectionParameters()),
    r = e ? V.Get().m_gridEventSelectionParametersCallbackList : null;
  return (v(r, n), t);
}
function _n() {
  let [e, t] = A.useState(V.Get().m_eRelatedDiscountView);
  return (
    v(V.Get().m_RelatedDiscountViewCallbackList, t),
    [
      e,
      A.useCallback((e) => {
        ((V.Get().m_eRelatedDiscountView = e),
          window.localStorage.setItem(dn, e),
          V.Get().m_RelatedDiscountViewCallbackList.Dispatch(e));
      }, []),
    ]
  );
}
function vn() {
  return A.useCallback(() => {
    V.Get().UpdateVisibleDiscountEventIDs();
  }, []);
}
function yn(e, t) {
  return (
    !!e == !!t &&
    e?.packageID == t?.packageID &&
    e?.discountEventID == t?.discountEventID &&
    e?.eState == t?.eState &&
    e?.rgConflictDetails?.length == t?.rgConflictDetails?.length &&
    e?.optInReg == t?.optInReg &&
    G(e?.discount, t?.discount) &&
    e?.nBaseAppID == t?.nBaseAppID &&
    e?.bChangedLocally == t?.bChangedLocally
  );
}
function G(e, t) {
  return (
    (!t && (e?.nDiscountPct ?? 0) == 0) ||
    (!!t && t.nDiscountPct == e?.nDiscountPct)
  );
}
var K = 30 * C.PerDay - 1.5 * C.PerHour,
  q = 10 * C.PerMinute,
  J = class e {
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
      for (let t of pe())
        (e.Get().ComputePackageState(t),
          ht(t).Register(() => {
            e.Get().ComputePackageState(t);
          }));
      (fn().Register(() => {
        for (let t of pe()) e.Get().ComputePackageState(t, !0);
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
        o = W(n),
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
      return G(s, a)
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
            G(t, t.nDiscountID && ft(t.nDiscountID)) || e.push(t);
          }),
        ),
        e.sort(Cn),
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
      let t = D() - K,
        n = mt(e);
      if (!n) return null;
      let r = new Map(
        n.filter((e) => e.rtEndDate > t).map((e) => [e.discountEventID, e]),
      );
      return (
        this.m_mapLocalPackageDiscountOverrides.get(e)?.forEach((e, t) => {
          G(e, r.get(t)) || r.set(t, e);
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
      let n = k.Get().GetPackage(e);
      if (!n) return;
      let r = U(),
        i = on(n),
        a = i.nBaseAppID,
        o = a && z.Get().GetOptInRegistrationAndEligibilityForApp(a);
      !a &&
        !o &&
        (o = z
          .Get()
          .GetOptInRegistrationAndEligibilityForApps(n.GetIncludedAppIDs()));
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
          if (((r.eState = 1), Sn(d, n))) r.eState = 10;
          else if (d.opt_in_name) {
            let { ePackageDiscountState: e, optInRegistration: t } = xn(
              d.opt_in_name,
              o,
              n,
              i,
              d,
            );
            ((r.eState = e), (r.optInReg = t));
          }
          if (r.eState != 10 && r.eState != 4 && r.eState != 5) {
            let t = bn(e, d, l);
            t.ePackageDiscountState != 1 &&
              ((r.eState = t.ePackageDiscountState),
              (r.rgConflictDetails = t.rgConflictingDiscounts.map(
                (e) => R(e.discountEventID)?.name ?? e.strDiscountName,
              )));
          }
        }
        yn(r, u.get(d.id)) ||
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
      return U()
        .filter(
          (e) =>
            t <= e.start_date && e.end_date <= n && i.has(r.get(e.id).eState),
        )
        .map((e) => e.id);
    }
    GetFurthestCooldownFromPastDiscounts(e) {
      let t = D(),
        n = t;
      return (
        e
          .filter((e) => e.rtStartDate < t)
          .filter((e) => R(e.discountEventID)?.collision_type != I)
          .forEach((e) => {
            e.rtEndDate + K < n && (n = e.rtEndDate + K);
          }),
        n
      );
    }
    GetFutureDiscountRanges(e) {
      let t = k.Get().GetPackage(e),
        n = this.GetPackageDiscountsIncludingOverrides(e);
      if (!t || !n) return [];
      let r = Array.from(n.values()).sort(
          (e, t) => e.rtStartDate - t.rtStartDate,
        ),
        i = D(),
        a = t.GetReleaseDateRTime(),
        o = H(e),
        s = this.GetFurthestCooldownFromPastDiscounts(r),
        c = Math.max(i, (a ?? 0) + K, o + K, s),
        l = [],
        u = new Set(),
        d = c;
      for (let t = 0; t < r.length; t++) {
        let n = r[t];
        if (n.nDiscountPct == 0 || n.rtStartDate < c) continue;
        let i = R(n.discountEventID),
          a = n.rtStartDate - K,
          o = i?.collision_type == I;
        if (o && ((a = n.rtStartDate + q), t + 1 < r.length)) {
          let e = r[t + 1];
          W(e.discountEventID)?.collision_type != `unique` &&
            (a = Math.min(a, e.rtStartDate - K));
        }
        if (d + C.PerDay < a) {
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
          (d = n.rtEndDate + K),
          o && ((d = n.rtEndDate - q), t - 1 >= 0))
        ) {
          let e = r[t - 1];
          W(e.discountEventID)?.collision_type != `unique` &&
            (d = Math.max(d, e.rtEndDate + K));
        }
        let f = ye(d);
        f - d <= C.PerHour * 2 && (d = f);
      }
      let f = ye(i + C.PerYear / 2);
      if (d + C.PerDay < f) {
        let t = {
          bIsAvailable: !0,
          rtStartDate: d,
          rtEndDate: f,
          rgDiscountEventIDs: this.GetAvailableDiscountEventsInRange(e, d, f),
        };
        (l.push(t), t.rgDiscountEventIDs.forEach((e) => u.add(e)));
      }
      let p = U().filter(
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
function bn(e, t, n) {
  let r = 1,
    i = [],
    a = !1;
  if (k.Get().GetPackage(e)?.GetReleaseDateRTime() > t.start_date - K)
    return (
      (r = 6),
      {
        ePackageDiscountState: r,
        rgConflictingDiscounts: i,
        bChangedLocally: a,
      }
    );
  if (H(e) > t.start_date - K)
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
    let n = R(e.discountEventID),
      o = t.collision_type == `unique` || n?.collision_type == `unique`,
      s = o ? t.start_date + q : t.start_date - K,
      c = o ? t.end_date - q : t.end_date + K;
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
function xn(e, t, n, r, i) {
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
        z.Get().GetOptInRegistrationAndEligibilityForApp(e)?.get(i.opt_in_name),
      )
      .filter(Boolean);
    e.some((e) => e.opt_in)
      ? (a = 1)
      : e.some((e) => !e.restricted && !e.pruned) && (a = 11);
  }
  return { ePackageDiscountState: a, optInRegistration: o };
}
function Sn(e, t) {
  if (e.appids?.length > 0) {
    if (t?.GetIncludedAppIDs()?.length) {
      let n = new Set(e.appids);
      for (let e of t.GetIncludedAppIDs()) {
        if (n.has(e)) return !1;
        let t = k.Get().GetApp(e)?.GetParentAppID();
        if (t && n.has(t)) return !1;
      }
    }
    return !0;
  }
  return !1;
}
function Cn(e, t) {
  if (e.packageID != t.packageID) {
    let n = k.Get().GetPackage(e.packageID)?.GetName(),
      r = k.Get().GetPackage(t.packageID)?.GetName();
    return ve(n, r);
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
function wn() {
  return A.useCallback(() => {
    J.Get();
  }, []);
}
function Tn() {
  let [e, t] = A.useState(J.IsInitialized());
  return (v(J.s_initializationCallbackList, t), e);
}
function En() {
  let [e, t] = A.useState(J.Get().GetLocalPackageDiscountOverrides());
  return (v(J.Get().GetLocalPackageDiscountOverrideCallbackList(), t), e);
}
function Dn() {
  return A.useCallback(
    () => J.Get().GetLocalPackageDiscountOverrides()?.length > 0,
    [],
  );
}
function On() {
  return A.useCallback(
    (e) => J.Get().DiscardAllLocalPackageDiscountOverrides(e),
    [],
  );
}
function kn() {
  return A.useCallback(
    (e, t) => J.Get().OptInRegistrationUpdatedForApp(e, t),
    [],
  );
}
function An() {
  return A.useCallback(
    (e, t) => J.Get().DiscardLocalPackageDiscountOverride(e, t),
    [],
  );
}
function jn(e, t) {
  let n = J.Get().m_mapPackageStateForDiscountEvents.get(e)?.get(t);
  return n?.eState == 1 ? (n?.discount?.nDiscountPct ?? 0) : null;
}
function Mn(e, t) {
  let [n, r] = A.useState(() =>
    J.Get().m_mapPackageStateForDiscountEvents.get(e)?.get(t),
  );
  return (
    v(J.Get().GetDiscountGridCellCallbackList(e, t), r),
    {
      packageState: n,
      fnSetDiscountPct: A.useCallback(
        (n) => {
          J.Get().OverridePackageDiscountPct(e, t, n);
        },
        [e, t],
      ),
    }
  );
}
function Nn() {
  return A.useCallback((e, t, n) => {
    let r = [];
    for (let i of n) {
      let n = J.Get().OverridePackageDiscountPct(i, t, e);
      n && r.push(n);
    }
    return r;
  }, []);
}
function Pn(e) {
  let t = Fn(e);
  return A.useMemo(
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
function Fn(e) {
  let [t, n] = A.useState(() => In(e)),
    r = A.useCallback(() => {
      n(In(e));
    }, [e]);
  return (
    A.useEffect(r, [e, r]),
    v(J.Get().GetDiscountEventColumnCallbackList(e), r),
    t
  );
}
function In(e) {
  let t = J.Get().GetAllPackageStatesForDiscountEvent(e),
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
function Ln(e) {
  return !!(
    pt(e).some((e) => e.nDiscountPct > 0) ||
    (J.IsInitialized() &&
      J.Get()
        .GetAllPackageStatesForDiscountEvent(e)
        .some((e) => (e.discount?.nDiscountPct ?? 0) > 0))
  );
}
function Rn(e, t = !0) {
  if (F(e)) return !0;
  if (!t && e.startsWith(`weeklongdeal_`)) return !1;
  let n = R(e);
  if (!n?.opt_in_name) return !0;
  let r = z.Get().GetAllOptInRegistrations(n.opt_in_name);
  return r?.length ? r.some((e) => !e.restricted && !e.pruned) : !1;
}
function zn(e) {
  let t = Tn(),
    [n, r] = A.useState(t ? J.Get().GetFutureDiscountRanges(e) : []),
    i = A.useCallback(
      () => r(t ? J.Get().GetFutureDiscountRanges(e) : []),
      [e, t],
    );
  return (
    v(t && J.Get().GetLocalPackageDiscountOverrideCallbackList(), i),
    v(t && ht(e), i),
    A.useEffect(i, [e, t, i]),
    n
  );
}
function Bn(e) {
  let [t, n] = A.useState(() => J.Get().GetHighestPackageDiscount(e)),
    r = A.useCallback(() => {
      n(J.Get().GetHighestPackageDiscount(e));
    }, [e, n]);
  return (v(J.Get().GetDiscountPackageCallbackList(e), r), t);
}
function Vn(e) {
  let t = A.useCallback(
    (t) => {
      if (e())
        return (
          t.preventDefault(),
          (t.returnValue = S(`#PackageGrid_NavigationWarning_Title`)),
          t.returnValue
        );
    },
    [e],
  );
  A.useEffect(
    () => (
      window.addEventListener(`beforeunload`, t),
      () => window.removeEventListener(`beforeunload`, t)
    ),
    [t],
  );
}
var Hn = `XIJjtmzsdXE-`,
  Un = `atxTK26HgeA-`,
  Wn = `CC75tAFWmgY-`,
  Gn = `EItyOoaortY-`,
  Kn = `Kt0e55t5mcE-`,
  qn = `YRYvAld6OLQ-`,
  Jn = `ffvuom7IPtc-`,
  Yn = `_0Q3FuVae-A0-`,
  Y = s(),
  Xn = (0, A.createContext)(void 0);
function X() {
  let e = (0, A.useContext)(Xn);
  if (!e) throw Error(`Missing GridRowContextProvider`);
  return e;
}
function Zn(e) {
  let { children: t, fnBLocalChangesExist: n, fnWarnUser: r } = e,
    i = se(),
    a = A.useMemo(
      () => ({ client: i, fnBLocalChangesExist: n, fnWarnUser: r }),
      [n, r, i],
    );
  return (0, Y.jsx)(Xn.Provider, { value: a, children: t });
}
function Qn(e) {
  let { row: t } = e,
    n = t.original.packageID || 0,
    r = Bn(n),
    i = Dt(n) < r,
    a = (0, De.default)(Un, i && `sNTSaqCkChQ-`, t.original.packageType),
    o = S(
      i
        ? `#PackageGrid_VisitPackageDiscount_Tooltip_Error`
        : `#PackageGrid_VisitPackagePricing_Tooltip`,
    );
  return (0, Y.jsx)(Z, { className: a, toolTip: o, ...e });
}
function $n(e) {
  let { row: t } = e,
    n = t.original.packageID || 0,
    r = fe(n),
    i = (0, De.default)(Un, r && `sNTSaqCkChQ-`, t.original.packageType),
    a = S(
      r
        ? `#PackageGrid_VisitPackagePricing_Tooltip_Error`
        : `#PackageGrid_VisitPackagePricing_Tooltip`,
    );
  return (0, Y.jsx)(Z, { className: i, toolTip: a, showUnreleased: !0, ...e });
}
function er(e) {
  let { column: t } = e,
    [n, r] = (0, A.useState)(t.getFilterValue() ?? ``);
  return (0, Y.jsxs)(`div`, {
    className: Wn,
    children: [
      S(`#PackageGrid_Column_PackageName`),
      (0, Y.jsx)(`input`, {
        placeholder: S(`#PackageGrid_PackageNameFilterInputPrompt`),
        value: n,
        onChange: (t) => {
          (r(t.target.value.toString()),
            (0, A.startTransition)(() =>
              e.column.setFilterValue(t.target.value.toString()),
            ));
        },
      }),
    ],
  });
}
function Z(e) {
  let { fnBLocalChangesExist: t, fnWarnUser: n } = X(),
    { cell: r, row: i, className: a, toolTip: o } = e,
    s = i.original.packageID,
    c =
      r.getValue() ??
      (0, Y.jsxs)(`span`, {
        className: `Eh4oZS3AUbs-`,
        children: [` `, S(`#PackageGrid_PackageID`, s)],
      });
  return (0, Y.jsxs)(Q, {
    fnBLocalChangesExist: t,
    fnWarnUser: n,
    href: `${d.PARTNER_BASE_URL}store/packagelanding/${s}`,
    strToolTip: o,
    strClassName: a,
    children: [
      (0, Y.jsx)(oe, { color: `rgb(194, 45, 0)`, className: Hn }),
      e.showUnreleased &&
        !(`released` in i.original && i.original.released) &&
        (0, Y.jsxs)(Y.Fragment, {
          children: [
            (0, Y.jsx)(ae, {
              toolTipContent: S(`#PackageGrid_PackageUnpublishedTooltip`),
              children: (0, Y.jsx)(ne, { width: `14px`, height: `14px` }),
            }),
            ` \xA0`,
          ],
        }),
      ` `,
      c,
    ],
  });
}
function tr() {
  return A.useMemo(
    () => ({
      accessorKey: `packageID`,
      header: S(`#PackageGrid_Column_PackageID`),
      enableSorting: !1,
      size: 90,
      cell: (e) =>
        (0, Y.jsx)(Z, {
          ...e,
          toolTip: S(`#PackageGrid_Column_PackageID_ttip`),
        }),
      meta: { cellClassname: Kn },
    }),
    [],
  );
}
function nr(e, t, n) {
  let r = /^\d+$/.test(n),
    i = e.original.packageID;
  return r && i && i.toString().startsWith(n)
    ? !0
    : e.getValue(t).toLowerCase().includes(n.toLowerCase());
}
function rr(e) {
  return A.useMemo(
    () => ({
      accessorKey: `packageName`,
      header: er,
      enableSorting: !1,
      meta: {
        strHeaderTooltip: S(`#PackageGrid_Column_PackageName_ttip`),
        cellClassname: qn,
      },
      filterFn: nr,
      cell: e ? Qn : $n,
      size: 300,
    }),
    [e],
  );
}
function ir() {
  return A.useMemo(() => ({ accessorKey: `appids` }), []);
}
function ar() {
  return A.useMemo(
    () => ({
      accessorKey: `packageType`,
      header: S(`#PackageGrid_Column_PackageType`),
      enableSorting: !1,
      meta: {
        strHeaderTooltip: S(`#PackageGrid_Column_PackageType_ttip`),
        cellClassname: Jn,
      },
    }),
    [],
  );
}
function or(e) {
  let { row: t } = e,
    { fnBLocalChangesExist: n, fnWarnUser: r } = X(),
    i = t.original.appids?.length ?? 0,
    a = t.original.packageID;
  return (0, Y.jsx)(Q, {
    fnBLocalChangesExist: n,
    fnWarnUser: r,
    href: `${d.PARTNER_BASE_URL}store/packagelanding/${a}`,
    strToolTip: S(`#PackageGrid_VisitPackagePricing_Tooltip`),
    children: i == 1 ? `1 appid` : i + ` appids`,
  });
}
function sr() {
  return A.useMemo(
    () => ({
      accessorKey: `appName`,
      header: S(`#PackageGrid_Column_AppName`),
      cell: or,
      size: 80,
      sortingFn: me,
      meta: {
        strHeaderTooltip: S(`#PackageGrid_Column_AppName_ttip`),
        bDisableSortButton: !0,
        cellClassname: Gn,
      },
    }),
    [],
  );
}
function cr(e) {
  let t = e.groupingValue,
    n = S(`#PackageGrid_NoBaseGameFoundForPackage`);
  return (0, Y.jsxs)(Y.Fragment, {
    children: [
      t === n
        ? (0, Y.jsxs)(`span`, {
            title: S(`#PackageGrid_NoBaseGameExplanation`),
            children: [t, ` (?)`],
          })
        : t,
      (0, Y.jsxs)(`span`, {
        className: Yn,
        children: [`(`, ie(`#PackageGrid_PackageCount`, e.subRows.length), `)`],
      }),
    ],
  });
}
function Q(e) {
  let {
    fnBLocalChangesExist: t,
    fnWarnUser: n,
    href: r,
    children: i,
    strToolTip: a,
    strClassName: o,
  } = e;
  return (0, Y.jsx)(re, {
    toolTipContent: a,
    className: o,
    children: (0, Y.jsx)(`a`, {
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
    de(this);
  }
  m_mapProfiles = new Map();
  m_mapProfilesLoading = new Map();
  async LoadProfiles(e, t) {
    n(e.length <= 500, `Check LoadProfiles, requesting too many steam IDs`);
    let r = e.filter(
      (e) => !this.m_mapProfiles.has(e) && !this.m_mapProfilesLoading.has(e),
    );
    if (r.length == 0) return this.m_mapProfilesLoading.get(e[0]);
    let i = d.COMMUNITY_BASE_URL + `actions/ajaxresolveusers`,
      a = j.default.get(i, {
        params: { steamids: r.join(`,`) },
        withCredentials: !0,
        cancelToken: t?.token,
      });
    r.forEach((e) => this.m_mapProfilesLoading.set(e, a));
    let o = await a;
    o.data &&
      o.status == 200 &&
      o.data.forEach((e) => {
        ((e.avatar_hash = e.avatar_url),
          (e.avatar_url_medium = O(e.avatar_url, `medium`)),
          (e.avatar_url_full = O(e.avatar_url, `full`)),
          (e.avatar_url = O(e.avatar_url)),
          this.m_mapProfiles.set(e.steamid, e),
          this.m_mapProfilesLoading.delete(e.steamid));
      });
  }
  GetProfile(e) {
    return this.m_mapProfiles.get(e);
  }
  GetProfileByAccountID(e) {
    return this.m_mapProfiles.get(
      w.InitFromAccountID(e, d.EUNIVERSE).ConvertTo64BitString(),
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
      w.InitFromAccountID(e, d.EUNIVERSE).ConvertTo64BitString(),
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
      ? d.COMMUNITY_BASE_URL + `id/` + t.profile_url
      : d.COMMUNITY_BASE_URL + `profiles/` + e.ConvertTo64BitString();
  }
  GetPersonaNameBySteamID(e) {
    let t = this.GetProfileBySteamID(e);
    return t && t.persona_name ? t.persona_name : ``;
  }
};
f([le], lr.prototype, `m_mapProfiles`, void 0);
var $ = new lr();
function ur(e) {
  let t = A.useMemo(
      () => (e ? (typeof e == `string` ? new w(e) : e) : null),
      [e],
    ),
    [n, r] = (0, A.useState)(!!t && !$.BHasProfileBySteamID(t));
  return (
    (0, A.useEffect)(() => {
      let e = j.default.CancelToken.source();
      return (
        t &&
          !$.BHasProfileBySteamID(t) &&
          $.LoadProfiles([t.ConvertTo64BitString()])
            .catch((e) => {
              let n = T(e);
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
    A.useMemo(() => (e ? w.InitFromAccountID(e, d.EUNIVERSE) : null), [e]),
  );
}
export {
  en as $,
  ln as A,
  Xe as At,
  rn as B,
  Ee as Bt,
  Pn as C,
  bt as Ct,
  W as D,
  Ge as Dt,
  zn as E,
  rt as Et,
  gn as F,
  Ce as Ft,
  Xt as G,
  Wt as H,
  _n as I,
  Se as It,
  Gt as J,
  $t as K,
  mn as L,
  xe as Lt,
  pn as M,
  Ne as Mt,
  vn as N,
  lt as Nt,
  H as O,
  Re as Ot,
  hn as P,
  we as Pt,
  nn as Q,
  on as R,
  be as Rt,
  kn as S,
  St,
  Fn as T,
  Be as Tt,
  qt as U,
  z as V,
  Yt as W,
  Jt as X,
  Kt as Y,
  tn as Z,
  Nn as _,
  xt as _t,
  Zn as a,
  Ut as at,
  An as b,
  Et as bt,
  X as c,
  I as ct,
  ar as d,
  mt as dt,
  Zt as et,
  Vn as f,
  Ot as ft,
  En as g,
  wt as gt,
  K as h,
  kt as ht,
  Q as i,
  It as it,
  un as j,
  He as jt,
  cn as k,
  Fe as kt,
  tr as l,
  F as lt,
  jn as m,
  Dt as mt,
  dr as n,
  Lt as nt,
  ir as o,
  Ht as ot,
  Rn as p,
  vt as pt,
  Qt as q,
  cr as r,
  zt as rt,
  sr as s,
  Ft as st,
  $ as t,
  Bt as tt,
  rr as u,
  pt as ut,
  Dn as v,
  Tt as vt,
  Mn as w,
  je as wt,
  wn as x,
  Ct as xt,
  On as y,
  yt,
  sn as z,
  Te as zt,
};
