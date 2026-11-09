/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import {
  A as e,
  Gt as t,
  Ht as n,
  Jt as r,
  Kt as i,
  Q as a,
  U as o,
  Ut as s,
  Wt as c,
  Xt as l,
  Y as u,
  Yt as d,
  Z as f,
  _t as p,
  ct as m,
  ft as ee,
  kt as h,
  nt as g,
  on as _,
  qt as v,
  rt as y,
  vt as b,
  yt as x,
} from "./mobx.esm.js";
import { R as S, r as C, t as w } from "./src.js";
import { a as te } from "./usedataloader.client.js";
import {
  $i as T,
  Da as ne,
  Ht as E,
  It as D,
  Qt as O,
  Sa as k,
  Ta as re,
  Vt as A,
  ba as ie,
  fa as ae,
  jt as oe,
  nn as se,
  oa as j,
  rn as ce,
  s as M,
  un as le,
  ya as ue,
} from "./dialogs.js";
import { h as de } from "./storebrowsequerycontext.js";
import { Kn as fe, it as pe, qn as me } from "./saletags.js";
import { a as he, r as N, u as ge, w as _e } from "./react-router.js";
import { i as P } from "./utils.js";
import { t as F } from "./useQuery.js";
import { t as ve } from "./reactqueryroot.js";
import { t as ye } from "./dataloader.js";
import { r as be } from "./appidutils.js";
import { i as xe, r as Se, t as Ce } from "./react-router-dom.js";
import { n as we, o as Te, s as I } from "./partnereventstore.js";
import { t as Ee } from "./getpreferredlocales.js";
import { t as L } from "./formatnumber.js";
import { r as R } from "./modals.js";
import { c as De } from "./deckverified.js";
import { t as Oe } from "./axios.js";
import { t as z } from "./axiosutils.js";
import { a as ke } from "./historyutils.js";
import { t as B } from "./throbber.js";
import { a as Ae, r as je } from "./eventdevfeaturestore.js";
import { r as Me } from "./partnereventshared.module.js";
import "./steamid.js";
import "./partnereventdialog.module.js";
import { t as Ne } from "./meetsteamclanid.js";
import { r as Pe, t as Fe } from "./browserapi.js";
import { t as Ie } from "./storeitemcache.js";
import { i as Le, r as Re, t as ze } from "./playerstore.js";
import { t as Be } from "./configdatadiag.js";
import { t as Ve } from "./unknownroute.js";
import {
  A as He,
  N as V,
  T as Ue,
  f as We,
  r as H,
  t as Ge,
  x as Ke,
} from "./adminshared.module.js";
import { t as U } from "./importexport.js";
import { t as qe } from "./storebrowsesetup.js";
import { i as Je } from "./meetsteamregistrationhooks.js";
import { i as Ye, n as Xe, r as Ze, t as Qe } from "./fancytable.js";
import { n as $e } from "./languagepicker.js";
import {
  a as et,
  d as tt,
  g as nt,
  h as rt,
  i as it,
  n as at,
  o as ot,
  r as st,
  s as ct,
  t as lt,
  u as ut,
} from "./partnervalvecontactstore.js";
import { a as W, r as dt, t as ft } from "./adminaccount.js";
import { a as pt, i as mt, r as ht, s as gt } from "./collapseablesection.js";
import { a as _t, n as vt, o as yt, t as G } from "./partnerinfostore.js";
var K = _(h(), 1),
  bt = new Set();
function xt() {
  for (let e of bt) e(location.search);
}
function St() {
  let [e, t] = (0, K.useState)(location.search);
  return (
    (0, K.useEffect)(() => {
      function e() {
        t(location.search);
      }
      return (
        bt.add(t),
        window.addEventListener(`popstate`, e),
        t(location.search),
        () => {
          bt.delete(t), window.removeEventListener(`popstate`, e);
        }
      );
    }, []),
    e
  );
}
function Ct(e, t) {
  let n = St();
  return [
    (0, K.useMemo)(() => {
      let r = new URLSearchParams(n.substring(1)).get(e);
      return r == null
        ? t
        : t == null
          ? r
          : typeof t == `boolean`
            ? t.constructor(r !== `false`)
            : t.constructor(r);
    }, [e, t, n]),
    K.useCallback(
      (t, n = !1) => {
        let r = new URLSearchParams(location.search.substring(1));
        if (t != null) {
          if (r.get(e) == t) return;
          r.set(e, String(t));
        } else {
          if (!r.has(e)) return;
          r.delete(e);
        }
        n
          ? history.replaceState(
              history.state,
              ``,
              decodeURIComponent(`${window.location.pathname}?${r}`),
            )
          : history.pushState(
              history.state,
              ``,
              decodeURIComponent(`${window.location.pathname}?${r}`),
            ),
          (0, K.startTransition)(xt);
      },
      [e],
    ),
  ];
}
var q = _(l(), 1),
  wt = class e extends q.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.clan_event_gid || n(e.M()),
        q.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            clan_event_gid: {
              n: 1,
              br: t.readFixed64String,
              bw: d.writeFixed64String,
            },
            steamid: {
              n: 2,
              br: t.readFixed64String,
              bw: d.writeFixed64String,
            },
            registration_group_id: {
              n: 3,
              br: t.readUint32,
              bw: d.writeUint32,
            },
            registration_session_id: {
              n: 4,
              br: t.readUint32,
              bw: d.writeUint32,
            },
            guest_count: { n: 5, br: t.readUint32, bw: d.writeUint32 },
            jsondata: { n: 7, br: t.readString, bw: d.writeString },
            skip_email: { n: 8, br: t.readBool, bw: d.writeBool },
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
      return c(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return s(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new q.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      v(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new q.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CPartnerMeetSteam_UpdateRegistration_Request`;
    }
  },
  Tt = class e extends q.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), q.Message.initialize(this, e, 0, -1, void 0, null);
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
      let n = new q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new q.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new q.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CPartnerMeetSteam_UpdateRegistration_Response`;
    }
  },
  Et = class e extends q.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.clan_event_gid || n(e.M()),
        q.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            clan_event_gid: {
              n: 1,
              br: t.readFixed64String,
              bw: d.writeFixed64String,
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
      return c(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return s(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new q.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      v(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new q.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CPartnerMeetSteam_GetAvailability_Request`;
    }
  },
  Dt = class e extends q.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.availability || n(e.M()),
        q.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { availability: { n: 1, c: Ot, r: !0, q: !0 } },
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
      return c(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return s(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new q.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      v(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new q.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CPartnerMeetSteam_GetAvailability_Response`;
    }
  },
  Ot = class e extends q.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.group_id || n(e.M()),
        q.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            group_id: { n: 1, br: t.readUint32, bw: d.writeUint32 },
            session_id: { n: 2, br: t.readUint32, bw: d.writeUint32 },
            guest_count: { n: 3, br: t.readUint32, bw: d.writeUint32 },
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
      return c(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return s(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new q.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      v(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new q.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CPartnerMeetSteam_GetAvailability_Response_Session`;
    }
  },
  kt = class e extends q.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.clan_event_gid || n(e.M()),
        q.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            clan_event_gid: {
              n: 1,
              br: t.readFixed64String,
              bw: d.writeFixed64String,
            },
            steamid: {
              n: 2,
              br: t.readFixed64String,
              bw: d.writeFixed64String,
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
      return c(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return s(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new q.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      v(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new q.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CPartnerMeetSteam_GetRegistrations_Request`;
    }
  },
  At = class e extends q.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.registrations || n(e.M()),
        q.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { registrations: { n: 1, c: jt, r: !0, q: !0 } },
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
      return c(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return s(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new q.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      v(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new q.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CPartnerMeetSteam_GetRegistrations_Response`;
    }
  },
  jt = class e extends q.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.group_id || n(e.M()),
        q.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            group_id: { n: 1, br: t.readUint32, bw: d.writeUint32 },
            session_id: { n: 2, br: t.readUint32, bw: d.writeUint32 },
            steamid: {
              n: 3,
              br: t.readFixed64String,
              bw: d.writeFixed64String,
            },
            guests_registered: { n: 4, br: t.readUint32, bw: d.writeUint32 },
            jsondata: { n: 5, br: t.readString, bw: d.writeString },
            rt_attendance_marked: { n: 6, br: t.readUint32, bw: d.writeUint32 },
            attendance_count: { n: 7, br: t.readUint32, bw: d.writeUint32 },
            guests_attendance: { n: 8, br: t.readString, bw: d.writeString },
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
      return c(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return s(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new q.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      v(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new q.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CPartnerMeetSteam_GetRegistrations_Response_Registration`;
    }
  },
  Mt = class e extends q.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.clan_event_gid || n(e.M()),
        q.Message.initialize(this, t, 0, -1, [3], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            clan_event_gid: {
              n: 1,
              br: t.readFixed64String,
              bw: d.writeFixed64String,
            },
            steamid: {
              n: 2,
              br: t.readFixed64String,
              bw: d.writeFixed64String,
            },
            accountids: {
              n: 3,
              r: !0,
              q: !0,
              br: t.readUint32,
              pbr: t.readPackedUint32,
              bw: d.writeRepeatedUint32,
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
      return c(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return s(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new q.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      v(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new q.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CPartnerMeetSteam_EmailInvitees_Request`;
    }
  },
  Nt = class e extends q.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.num_emailed || n(e.M()),
        q.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            num_emailed: { n: 1, br: t.readUint32, bw: d.writeUint32 },
            num_skipped: { n: 2, br: t.readUint32, bw: d.writeUint32 },
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
      return c(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return s(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new q.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      v(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new q.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CPartnerMeetSteam_EmailInvitees_Response`;
    }
  },
  Pt = class e extends q.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.clan_event_gid || n(e.M()),
        q.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            clan_event_gid: {
              n: 1,
              br: t.readFixed64String,
              bw: d.writeFixed64String,
            },
            steamid: {
              n: 2,
              br: t.readFixed64String,
              bw: d.writeFixed64String,
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
      return c(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return s(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new q.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      v(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new q.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CParterMeetSteam_TestFireEmails_Request`;
    }
  },
  Ft = class e extends q.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.sessionids || n(e.M()),
        q.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            sessionids: {
              n: 1,
              r: !0,
              q: !0,
              br: t.readUint32,
              pbr: t.readPackedUint32,
              bw: d.writeRepeatedUint32,
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
      return c(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return s(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new q.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      v(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new q.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CParterMeetSteam_TestFireEmails_Response`;
    }
  },
  It = class e extends q.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.rt_oldest_date || n(e.M()),
        q.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            rt_oldest_date: { n: 1, br: t.readUint32, bw: d.writeUint32 },
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
      return c(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return s(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new q.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      v(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new q.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CPartnerMeetSteam_GetSaleEventOrganizers_Request`;
    }
  },
  Lt = class e extends q.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.accountid || n(e.M()),
        q.Message.initialize(this, t, 0, -1, [2], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            accountid: { n: 1, br: t.readUint32, bw: d.writeUint32 },
            clan_event_gids: {
              n: 2,
              r: !0,
              q: !0,
              br: t.readFixed64String,
              pbr: t.readPackedFixed64String,
              bw: d.writeRepeatedFixed64String,
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
      return c(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return s(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new q.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      v(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new q.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSaleEventOrganizerInfo`;
    }
  },
  Rt = class e extends q.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.info || n(e.M()),
        q.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { info: { n: 1, c: Lt, r: !0, q: !0 } },
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
      return c(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return s(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new q.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      v(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new q.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CPartnerMeetSteam_GetSaleEventOrganizers_Response`;
    }
  },
  zt = class e extends q.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.accountids || n(e.M()),
        q.Message.initialize(this, t, 0, -1, [1, 2], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            accountids: {
              n: 1,
              r: !0,
              q: !0,
              br: t.readUint32,
              pbr: t.readPackedUint32,
              bw: d.writeRepeatedUint32,
            },
            partnerids: {
              n: 2,
              r: !0,
              q: !0,
              br: t.readUint32,
              pbr: t.readPackedUint32,
              bw: d.writeRepeatedUint32,
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
      return c(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return s(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new q.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      v(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new q.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CPartnerMeetSteam_GetBatchPartnerEmailAndName_Request`;
    }
  },
  Bt = class e extends q.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.accountid || n(e.M()),
        q.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            accountid: { n: 1, br: t.readUint32, bw: d.writeUint32 },
            partnerid: { n: 2, br: t.readUint32, bw: d.writeUint32 },
            realname: { n: 3, br: t.readString, bw: d.writeString },
            email: { n: 4, br: t.readString, bw: d.writeString },
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
      return c(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return s(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new q.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      v(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new q.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CPartnerEmailAndName`;
    }
  },
  Vt = class e extends q.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.info || n(e.M()),
        q.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { info: { n: 1, c: Bt, r: !0, q: !0 } },
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
      return c(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return s(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new q.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      v(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new q.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CPartnerMeetSteam_GetBatchPartnerEmailAndName_Response`;
    }
  },
  J;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(`PartnerMeetSteam.UpdateRegistration#1`, x(wt, t, n), Tt, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  e.UpdateRegistration = t;
  function n(e, t, n) {
    return e.SendMsg(`PartnerMeetSteam.GetAvailability#1`, x(Et, t, n), Dt, {
      bConstMethod: !0,
      ePrivilege: 0,
      eWebAPIKeyRequirement: 1,
    });
  }
  e.GetAvailability = n;
  function r(e, t, n) {
    return e.SendMsg(`PartnerMeetSteam.GetRegistrations#1`, x(kt, t, n), At, {
      bConstMethod: !0,
      ePrivilege: 1,
      rgBrowserAPISites: [`partner`],
    });
  }
  e.GetRegistrations = r;
  function i(e, t, n) {
    return e.SendMsg(`PartnerMeetSteam.EmailInvitees#1`, x(Mt, t, n), Nt, {
      ePrivilege: 4,
    });
  }
  e.EmailInvitees = i;
  function a(e, t, n) {
    return e.SendMsg(`PartnerMeetSteam.TestFireEmails#1`, x(Pt, t, n), Ft, {
      ePrivilege: 4,
      rgBrowserAPISites: [`partner`],
    });
  }
  e.TestFireEmails = a;
  function o(e, t, n) {
    return e.SendMsg(
      `PartnerMeetSteam.GetSaleEventOrganizers#1`,
      x(It, t, n),
      Rt,
      { bConstMethod: !0, ePrivilege: 4, rgBrowserAPISites: [`partner`] },
    );
  }
  e.GetSaleEventOrganizers = o;
  function s(e, t, n) {
    return e.SendMsg(
      `PartnerMeetSteam.GetBatchPartnerEmailAndName#1`,
      x(zt, t, n),
      Vt,
      { bConstMethod: !0, ePrivilege: 1, rgBrowserAPISites: [`partner`] },
    );
  }
  e.GetBatchPartnerEmailAndName = s;
})((J ||= {}));
var Y = _(Oe());
function Ht(e, t = !1) {
  let [n, r = `00:00:00`] = e.trim().split(/\s+/),
    [i, a, o] = n.split(`-`).map(Number),
    [s, c, l] = r.split(`:`).map(Number),
    u = t
      ? Date.UTC(i, a - 1, o, s, c, l ?? 0)
      : new Date(i, a - 1, o, s, c, l ?? 0).getTime();
  return Math.floor(u / 1e3);
}
function Ut() {
  let [e] = K.useState(() => f(`events_list`, `application_config`)),
    [t] = ke(`filter`),
    n = je(),
    [r, i] = K.useMemo(() => {
      let t = [],
        r = [];
      return (
        e.forEach((e) => {
          e.endtime && Ht(e.endtime) < n ? r.push(e) : t.push(e);
        }),
        [r, t]
      );
    }, [e, n]);
  return {
    rgOldEvents: r,
    rgEvents: i,
    selectConference: (0, K.useMemo)(
      () => e.find((e) => e.id === t?.toLocaleLowerCase()),
      [e, t],
    ),
  };
}
function Wt(e) {
  return [`usePartnerRevAndBestAppSlow`, e];
}
async function Gt(e) {
  let t = `${g.PARTNER_BASE_URL}/meetsteam/ajaxfetchpartnerdetails`,
    n = { sessionid: u(), partnerid: e };
  return (await Y.default.get(t, { params: n }))?.data?.data;
}
function Kt(e) {
  let t = F({ queryKey: Wt(e), queryFn: async () => Gt(e), enabled: !!e });
  return t.isLoading ? null : t.data;
}
function qt(e, t) {
  return e.getQueryData([`usePartnerRevAndBestAppSlow`, t]);
}
function Jt(e, t, n) {
  return F({
    queryKey: [`useMeetSteamGetAllRegistration`, t, n],
    queryFn: async () => {
      let n = b.Init(kt);
      n.Body().set_clan_event_gid(t);
      let r = await J.GetRegistrations(e, n);
      return r.BSuccess()
        ? r
            .Body()
            .registrations()
            .map((e) => e.toObject())
        : [];
    },
    enabled: t != null && n != 0,
  });
}
function Yt(e) {
  let t = F({
    queryKey: [`useMeetSteamSaleOperators`],
    queryFn: async () => {
      let t = b.Init(It),
        n = new Date();
      n.setFullYear(n.getFullYear() - 2), t.Body().set_rt_oldest_date(0);
      let r = await J.GetSaleEventOrganizers(e, t);
      return r.BSuccess()
        ? r
            .Body()
            .info()
            .map((e) => e.toObject())
        : [];
    },
  });
  return t.isLoading ? null : t.data;
}
function Xt(e) {
  let [t, n] = (0, K.useState)(!1),
    [r, i] = (0, K.useState)(0),
    a = P();
  return (
    (0, K.useEffect)(() => {
      (async () => {
        let t = 0;
        for (let n of e) {
          let e = n.results.partner_id;
          new w(n.steamid).GetAccountID(),
            await Promise.all([
              vt(e),
              a.prefetchQuery({ queryKey: Wt(e), queryFn: async () => Gt(e) }),
              st(a, e),
            ]),
            ++t,
            i(t);
        }
        n(!0);
      })();
    }, [a, e]),
    { bComplete: t, nCount: r }
  );
}
var Zt = _(Ae()),
  Qt = `ANKJ3z6hmzE-`,
  $t = `qjW9VuTG-ok-`,
  en = `BKpSlMPxT2U-`,
  tn = `zCTRiSHH0GY-`,
  nn = `iEL3fKaVlyw-`,
  rn = `OW-hVnCR7gA-`,
  an = `Ct0fFffDoxk-`,
  on = `eQA2L6b-b-s-`,
  sn = `KurbwRHiVjM-`,
  cn = `ZjfFKCtIfsE-`,
  ln = `mkPZr6a6FgQ-`,
  un = `GPfndBivMVM-`,
  dn = `N4NsybcgJ9c-`,
  fn = `JE--rcF4UwQ-`,
  X = p();
function pn(e) {
  let t = mn();
  return (0, X.jsx)(`div`, {
    children: (0, X.jsx)(`ol`, {
      children: Array.from(t.entries()).map(([e, t]) =>
        (0, X.jsx)(
          `li`,
          {
            children: (0, X.jsx)(`a`, {
              href: `${g.PARTNER_BASE_URL}meetsteam/surveyresults/${e}`,
              target: `_blank`,
              children: t,
            }),
          },
          e,
        ),
      ),
    }),
  });
}
function mn() {
  let [e] = (0, K.useState)(() => {
    let e = f(`survey_list`, `application_config`) || {},
      t = new Map();
    for (let n of Object.keys(e)) t.set(n, e[n]);
    return t;
  });
  return e;
}
var hn = K.createContext(void 0);
function gn(e) {
  let { children: t } = e,
    [n, r] = Ct(`showpastevents`, !1);
  return (0, X.jsx)(hn.Provider, {
    value: { bShowArchived: n, setShowArchived: r },
    children: t,
  });
}
var _n = () => {
    let e = (0, K.useContext)(hn);
    if (!e)
      throw Error(
        `useMeetSteamArchived must be used within MeetSteamArchivedProvider`,
      );
    return e;
  },
  vn = `YH1NKi9pxv8-`,
  yn = `NA245EcdHK8-`,
  bn = `mGaVwRTYiGU-`,
  xn = `mV7eMKSof-E-`,
  Sn = `_57Jpn4Iw0WA-`,
  Cn = `hEpVF2SPtdY-`,
  wn = `sUZ3T3HpmCo-`,
  Tn = `QtPZ-KRM8jg-`,
  En = class e {
    m_steamInterface;
    GetSaleFeatureTransport() {
      return this.m_steamInterface;
    }
    static s_Singleton;
    static Get() {
      return (
        e.s_Singleton || ((e.s_Singleton = new e()), e.s_Singleton.Init()),
        e.s_Singleton
      );
    }
    Init() {
      this.m_steamInterface = Fe(new Pe(g.WEBAPI_BASE_URL));
    }
  };
function Dn() {
  return En.Get().GetSaleFeatureTransport().GetServiceTransport();
}
async function On(e) {
  let t = { sessionid: u(), gids: e },
    n = `${o.PARTNER_BASE_URL}meetsteam/admin/ajaxgetregistrations`,
    r = await fetch(n, {
      method: `POST`,
      headers: { "Content-Type": `application/json` },
      body: JSON.stringify(t),
    });
  if (!r.ok)
    throw Error(`Failed to read registrations for gids ${e.join(`,`)}`);
  let i = await r.json();
  if (i.success != 1)
    throw Error(
      `Failed to read registrations for gids ${e.join(`,`)}: ${i.msg}`,
    );
  return i.lists ?? [];
}
function kn(e) {
  return F({
    queryKey: [],
    queryFn: async () => await On(e),
    enabled: e && e.length > 0,
  });
}
async function An(e) {
  let t = `${o.PARTNER_BASE_URL}meetsteam/admin/ajaxgetpartnersforaccount?accountid=${e}`,
    n = await fetch(t);
  if (!n.ok) throw Error(`Failed to read the partner list for account ${e}`);
  let r = await n.json();
  if (r.success != 1)
    throw Error(`Failed to read the partner list for account ${e}: ${r.msg}`);
  return r.partners ?? [];
}
function jn(e) {
  return F({
    queryKey: [`MeetSteamPartnersForAccount`, e],
    queryFn: () => An(e),
    enabled: e > 0,
  });
}
function Mn(e, t = {}) {
  let {
      nTimeoutMS: n = 350,
      nTimeoutExtensionMS: r = 125,
      nMaxTimeoutExtensions: i = 3,
    } = t,
    [a, o] = K.useState(e),
    s = K.useRef(void 0);
  return (
    K.useEffect(() => {
      let t = performance.now();
      s.current
        ? t - s.current.tsLastChange < i * n &&
          (s.current.tsScheduledTimeout = Math.max(
            performance.now() + r,
            s.current.tsScheduledTimeout,
          ))
        : (s.current = {
            tsLastChange: t,
            tsScheduledTimeout: performance.now() + n,
          });
      let a = s.current.tsScheduledTimeout - performance.now(),
        c = window.setTimeout(() => {
          (s.current = void 0), o(e);
        }, a);
      return () => window.clearTimeout(c);
    }, [e, n, r, i]),
    a
  );
}
function Nn(e) {
  let t = e.trim();
  if (!/^\d+$/.test(t)) return 0;
  if (Number(t) > 4294967295) {
    let e = new w(t);
    return e.BIsValid() && e.BIsIndividualAccount() ? e.GetAccountID() : 0;
  }
  return Number(t);
}
function Pn(e) {
  let { hideModal: t, gid: n } = e,
    [r, i] = (0, K.useState)(!1),
    [a, o] = (0, K.useState)(null),
    [s, c] = K.useState(``),
    [l, u] = K.useState(``),
    [d, f] = K.useState(``),
    [p, m] = K.useState(!1),
    ee = Mn(s),
    h = Nn(ee),
    _ = !!ee.trim() && !h,
    v = Dn(),
    y = jn(h),
    b = y.data,
    x = F({
      queryKey: [`MeetSteamInviteDirectDialog`, n, h],
      queryFn: async () => {
        let e = {
            steamid: w.InitFromAccountID(h, g.EUNIVERSE).ConvertTo64BitString(),
            gid: n,
            type: 6,
          },
          t = await Ye.GetUserActionData(v, e);
        return t.BSuccess() && t.Body().jsondata()
          ? JSON.parse(t.Body().jsondata())
          : {};
      },
      enabled: !!n && h > 0,
    });
  return (
    K.useEffect(() => {
      if (!x.isLoading && x.isSuccess) {
        let e = b?.length == 1 ? b[0].partnerid.toString() : ``;
        u(x.data.partner_id ? x.data.partner_id.toString() : e),
          f(x.data.email_override ?? ``),
          m(x.data.allow_registration_if_full ?? !1);
      }
    }, [x.isLoading, x.isSuccess, x.data, b]),
    (0, X.jsxs)(M, {
      strTitle: `Invite User`,
      bOKDisabled: !h || r || x.isLoading,
      onOK: async () => {
        i(!0);
        let e = await Bn(
            n,
            [
              {
                nAccountID: h,
                nPartnerID: Number.parseInt(l) > 0 ? Number.parseInt(l) : 0,
                strEmailOverride: d,
                bAllowRegistrationIfFull: p,
              },
            ],
            !0,
          ),
          r = e && e.success == 1;
        r || o(`We hit error during invite, check console: ` + e?.msg),
          i(!1),
          x.refetch(),
          r && t();
      },
      onCancel: t,
      children: [
        !!a && (0, X.jsx)(`div`, { className: void 0, children: a }),
        !r &&
          (0, X.jsxs)(X.Fragment, {
            children: [
              (0, X.jsx)(`div`, {
                children: `Saving sends an invitation email to this account only, and only if it has not been sent one for this event already. It does not send the invitation emails queued for anyone else. Use the Invitation And Registration Status dialog for those.`,
              }),
              (0, X.jsx)(D, {
                type: `text`,
                label: `Account ID or Steam ID`,
                description: `Accepts either the 32-bit account id or the 64-bit steam id`,
                onChange: (e) => c(e.currentTarget.value),
                value: s,
              }),
              _ &&
                (0, X.jsx)(`div`, {
                  className: void 0,
                  children: `That is not a valid account id or steam id.`,
                }),
              h != 0 && (0, X.jsx)(Fn, { nAccountID: h }),
              h != 0 &&
                !x.isLoading &&
                (0, X.jsxs)(X.Fragment, {
                  children: [
                    (0, X.jsx)(D, {
                      type: `number`,
                      label: `Partner ID (optional)`,
                      onChange: (e) => u(e.currentTarget.value),
                      value: l,
                    }),
                    (0, X.jsx)(In, {
                      rgPartners: b,
                      bLoading: y.isLoading,
                      bFailed: y.isError,
                      strPartnerID: l,
                      SetPartnerID: u,
                    }),
                    (0, X.jsx)(D, {
                      type: `text`,
                      label: `Email override (optional)`,
                      onChange: (e) => f(e.currentTarget.value.trim()),
                      value: d,
                    }),
                    (0, X.jsx)(E, {
                      controlled: !0,
                      checked: p,
                      onChange: m,
                      label: `Allow if registration is full`,
                    }),
                  ],
                }),
            ],
          }),
        r &&
          (0, X.jsx)(B, {
            size: `small`,
            position: `center`,
            string: j(`#Saving`),
          }),
        x.isLoading &&
          (0, X.jsx)(B, {
            size: `small`,
            position: `center`,
            string: j(`#Loading`),
          }),
      ],
    })
  );
}
function Fn(e) {
  let { nAccountID: t } = e,
    [n, r] = pt(t);
  if (r)
    return (0, X.jsx)(B, {
      size: `small`,
      position: `center`,
      string: j(`#Loading`),
    });
  if (!n)
    return (0, X.jsx)(`div`, {
      className: void 0,
      children: `We could not find an account for ${t}.`,
    });
  let i = w.InitFromAccountID(t, g.EUNIVERSE).ConvertTo64BitString();
  return (0, X.jsxs)(`div`, {
    className: yn,
    children: [
      (0, X.jsx)(`img`, {
        className: bn,
        src: n.avatar_url?.replace(/\.jpg$/, `_medium.jpg`),
      }),
      (0, X.jsxs)(`div`, {
        children: [
          (0, X.jsx)(`div`, { className: xn, children: n.persona_name }),
          (0, X.jsx)(`a`, {
            href: `${g.SUPPORT_BASE_URL}account/overview/${i}`,
            target: `_blank`,
            rel: `noopener noreferrer`,
            children: `Account ${t} / SteamID ${i}`,
          }),
        ],
      }),
    ],
  });
}
function In(t) {
  let {
    rgPartners: n,
    bLoading: r,
    bFailed: i,
    strPartnerID: a,
    SetPartnerID: o,
  } = t;
  return r
    ? (0, X.jsx)(B, {
        size: `small`,
        position: `center`,
        string: `Looking up partner membership`,
      })
    : i
      ? (0, X.jsx)(`div`, {
          className: Cn,
          children: `We could not look up partner membership, enter the partner id above.`,
        })
      : !n || n.length == 0
        ? (0, X.jsx)(`div`, {
            className: Cn,
            children: `This account is not a member of any partner.`,
          })
        : (0, X.jsxs)(`div`, {
            className: Sn,
            children: [
              (0, X.jsx)(`div`, {
                className: Cn,
                children: `Member of, click to use:`,
              }),
              n.map((t) =>
                (0, X.jsxs)(
                  `a`,
                  {
                    href: `#`,
                    className: e(wn, t.partnerid.toString() == a ? Tn : ``),
                    onClick: (e) => {
                      e.preventDefault(), o(t.partnerid.toString());
                    },
                    children: [t.partner_name, ` (`, t.partnerid, `)`],
                  },
                  t.partnerid,
                ),
              ),
            ],
          });
}
function Ln(e) {
  let { hideModal: t, gid: n } = e,
    [r, i] = (0, K.useState)(null),
    [a, o] = (0, K.useState)(!1),
    [s, c] = (0, K.useState)(null),
    [l, u] = (0, K.useState)(null),
    [d, f] = (0, K.useState)(null);
  return (0, X.jsxs)(M, {
    strTitle: `Invite Users`,
    bOKDisabled: !r || r.length == 0 || l != null,
    strCancelButtonText: l === null ? `Cancel` : `Close`,
    onOK: async () => {
      o(!0);
      let e = await Bn(n, r, !1);
      e?.success == 1
        ? (u(e.rgInvitedAccounts.length), f(e.rgSkippedAccounts.length))
        : c(`We hit error during invite, check console: ` + e?.msg),
        o(!1);
    },
    onCancel: () => {
      u(null), f(null), o(!1), i(null), t();
    },
    children: [
      !!s && (0, X.jsx)(`div`, { className: void 0, children: s }),
      l != null &&
        (0, X.jsxs)(`div`, {
          children: [
            `Invited `,
            L(l),
            ` accounts, skipped previously invited `,
            L(d),
          ],
        }),
      a &&
        (0, X.jsx)(B, {
          size: `small`,
          position: `center`,
          string: j(`#Saving`),
        }),
      (0, X.jsx)(`div`, {
        children: `Saving sends an invitation email to the accounts imported here that have not been sent one for this event already. It does not send the invitation emails queued for anyone else on the event.`,
      }),
      r == null
        ? (0, X.jsx)(zn, { setInvites: i })
        : (0, X.jsx)(Rn, { rgInvites: r }),
    ],
  });
}
function Rn(e) {
  let { rgInvites: t } = e;
  return (0, X.jsxs)(X.Fragment, {
    children: [
      (0, X.jsxs)(`div`, {
        children: [`Total Invites Parsed: `, t.length, ` `],
      }),
      (0, X.jsxs)(`table`, {
        children: [
          (0, X.jsx)(`thead`, {
            children: (0, X.jsxs)(`tr`, {
              children: [
                (0, X.jsx)(`th`, { children: `AccountID` }),
                (0, X.jsx)(`th`, { children: `PartnerID` }),
                (0, X.jsx)(`th`, { children: `Email Override` }),
              ],
            }),
          }),
          (0, X.jsx)(`tbody`, {
            children: t.map((e, t) =>
              (0, X.jsxs)(
                `tr`,
                {
                  children: [
                    (0, X.jsx)(`td`, { children: e.nAccountID }),
                    (0, X.jsx)(`td`, { children: e.nPartnerID }),
                    (0, X.jsx)(`td`, { children: e.strEmailOverride }),
                  ],
                },
                `invite` + e.nAccountID + `_` + t,
              ),
            ),
          }),
        ],
      }),
    ],
  });
}
function zn(e) {
  let { setInvites: t } = e;
  return (0, X.jsxs)(X.Fragment, {
    children: [
      (0, X.jsx)(`div`, {
        children: `Format for CSV File, please use the template below:`,
      }),
      (0, X.jsxs)(`ul`, {
        children: [
          (0, X.jsxs)(`li`, {
            children: [
              (0, X.jsx)(`b`, { children: `nAccountID` }),
              ` - required, 32-bit integer value, not the 64-bit steam id`,
            ],
          }),
          (0, X.jsxs)(`li`, {
            children: [
              (0, X.jsx)(`b`, { children: `nPartnerID` }),
              ` - (preferred for biz contact)`,
            ],
          }),
          (0, X.jsxs)(`li`, {
            children: [
              (0, X.jsx)(`b`, { children: `strOverrideEmail` }),
              ` - (optional, we wil use the email associated with the account and partner or the steamid itself)`,
            ],
          }),
        ],
      }),
      (0, X.jsx)(`br`, {}),
      (0, X.jsx)(`a`, {
        href: `#`,
        onClick: async (e) => {
          e.preventDefault(), e.stopPropagation();
          let t = [];
          t.push([`nAccountID`, `nPartnerID`, `strEmailOverride`]),
            t.push([`388445686`, `1`, `adils@valvesoftware.com`]),
            U.WriteCSVToFile(t, `invite_template.csv`);
        },
        children: `Download Template Example`,
      }),
      (0, X.jsx)(`br`, {}),
      (0, X.jsx)(`br`, {}),
      (0, X.jsx)(A, {
        children: (0, X.jsxs)(`label`, {
          className: vn,
          htmlFor: `import-discount-input`,
          children: [
            `Choose CSV File`,
            (0, X.jsx)(`input`, {
              id: `import-discount-input`,
              type: `file`,
              style: { display: `none` },
              onChange: async (e) => {
                if (e.target.files.length >= 1) {
                  let n = e.target.files[0],
                    r = await U.ParseCSVFile(n);
                  if (r?.data) {
                    let e = [];
                    r.data.forEach((t) => {
                      if (t.nAccountID) {
                        let n = { nAccountID: Number.parseInt(t.nAccountID) };
                        t.nPartnerID &&
                          (n.nPartnerID = Number.parseInt(t.nPartnerID)),
                          t.strEmailOverride &&
                            (n.strEmailOverride = t.strEmailOverride),
                          e.push(n);
                      }
                    }),
                      t(e);
                  }
                }
              },
            }),
          ],
        }),
      }),
    ],
  });
}
async function Bn(e, t, n) {
  let r = t.map((e) => e.nAccountID).join(`,`),
    i = t.map((e) => e.nPartnerID).join(`,`),
    a = t.map((e) => e.strEmailOverride).join(`,`),
    o = t.map((e) => (e.bAllowRegistrationIfFull ? `1` : `0`)).join(`,`),
    s = new FormData();
  s.append(`sessionid`, u()),
    s.append(`gid`, e),
    s.append(`accounts`, r),
    s.append(`partnerids`, i),
    s.append(`emailoverride`, a),
    s.append(`allowregistrationiffull`, o),
    s.append(`forceupdate`, n ? `1` : `0`);
  let c = `${g.PARTNER_BASE_URL}/meetsteam/ajaxinviteusers`;
  try {
    let e = await Y.default.post(c, s, { withCredentials: !0 });
    if (e?.data?.success != 1) {
      let t = z(e);
      console.error(`DisplayPartnerEventRow error: ` + t.strErrorMsg, t);
    }
    return e?.data;
  } catch (e) {
    let t = z(e);
    console.error(`DisplayPartnerEventRow error: ` + t.strErrorMsg, t);
  }
  return null;
}
var Vn = _(ye());
function Hn(e) {
  let t = Dn(),
    n = K.useContext(Wn),
    r = F(Gn(n, t, e));
  return r.isLoading ? null : r.data;
}
function Un(e) {
  let t = Dn(),
    n = K.useContext(Wn);
  return te({ queries: e.map((e) => Gn(n, t, e)) });
}
var Wn = K.createContext({
  loadMeetSteamAllRegistration: async (e, t) => await qn(e).load(t),
});
function Gn(e, t, n) {
  return {
    queryKey: [`MeetSteamAllRegistrationStatus`, n],
    queryFn: () => e.loadMeetSteamAllRegistration(t, n),
    enabled: !!n,
  };
}
var Kn;
function qn(e) {
  return (
    (Kn ||= new Vn.default(
      async (t) => {
        let n = b.Init(Ze);
        n.Body().set_gids([...t]), n.Body().set_type(6);
        let r = await Ye.GetMultipleUserActionData(e, n);
        if (!r.BSuccess())
          throw `Failed to call GetMultipleUserActionData with details: ${r.GetErrorMessage()}`;
        let i = new Map();
        return (
          r
            .Body()
            .entries()
            .forEach((e) => {
              try {
                let t = JSON.parse(e.jsondata());
                (`steamid` in t && t.steamid) ||
                  ((t.steamid = e.steamid()),
                  (t.accountid = new w(t.steamid).GetAccountID()));
                let n = e.gid();
                return i.has(n) ? i.get(n).push(t) : i.set(n, [t]), [t];
              } catch {
                throw `Failed to parse GetMultipleUserActionData with details: ${e.steamid()}`;
              }
            }),
          t.map((e) => i.get(e) ?? null)
        );
      },
      { maxBatchSize: 5 },
    )),
    Kn
  );
}
function Jn(e, t) {
  let n = W(),
    r = K.useContext(Zn),
    i = F(Qn(r, n, e, t));
  return i.isLoading ? null : i.data;
}
function Yn(e, t) {
  let n = W(),
    r = K.useContext(Zn);
  return te({ queries: e.map((e, i) => Qn(r, n, e, t[i])) });
}
function Xn(e, t) {
  return ve.getQueryData([`PartnerEmailAndName`, e, t]);
}
var Zn = K.createContext({
  loadPartnerEmailAndName: async (e, t, n) =>
    await er(e).load({ accountID: t, partnerID: n }),
});
function Qn(e, t, n, r) {
  return {
    queryKey: [`PartnerEmailAndName`, n, r],
    queryFn: () => e.loadPartnerEmailAndName(t, n, r),
    enabled: !!n || !!r,
  };
}
var $n;
function er(e) {
  return (
    ($n ||= new Vn.default(
      async (t) => {
        let n = b.Init(zt);
        n.Body().set_accountids(t.map((e) => e.accountID)),
          n.Body().set_partnerids(t.map((e) => e.partnerID));
        let r = await J.GetBatchPartnerEmailAndName(e, n);
        if (!r.BSuccess())
          throw `Failed to call GetBatchPartnerEmailAndName with details: ${r.GetErrorMessage()}`;
        let i = new Map();
        return (
          r
            .Body()
            .info()
            .forEach((e) => {
              i.set(`` + e.accountid() + `_` + e.partnerid(), e.toObject());
            }),
          t.map((e) => i.get(`` + e.accountID + `_` + e.partnerID) ?? null)
        );
      },
      { maxBatchSize: 100 },
    )),
    $n
  );
}
function tr(e) {
  let { rgEventGIDs: t } = e,
    [n, r, i] = S(),
    [a, o] = (0, K.useState)(null);
  return (0, X.jsxs)(X.Fragment, {
    children: [
      (0, X.jsx)(`span`, { children: ` | ` }),
      (0, X.jsx)(`a`, {
        href: `#`,
        onClick: (e) => {
          e.preventDefault(), e.stopPropagation(), r();
        },
        children: `Analyse Top Partner Coverage`,
      }),
      (0, X.jsx)(R, {
        active: n,
        children: (0, X.jsx)(C, {
          children: (0, X.jsx)(M, {
            closeModal: i,
            bAllowFullSize: !0,
            bDisableBackgroundDismiss: !0,
            children:
              a == null
                ? (0, X.jsx)(sr, { rgEventGIDs: t, fnSelectedEvents: o })
                : (0, X.jsxs)(X.Fragment, {
                    children: [
                      (0, X.jsx)(or, { rgGidMeetSteamEvents: a }),
                      (0, X.jsx)(A, {
                        onClick: () => o(null),
                        children: `Reset Selection`,
                      }),
                    ],
                  }),
          }),
        }),
      }),
    ],
  });
}
var nr = Xe();
function rr(e) {
  return (
    (e = e?.filter(
      (t, n) =>
        n == 0 || !e.slice(0, n).some((e) => e.accountid == t.accountid),
    )),
    e
      ?.map(
        (e) => e.name || Xn(e.accountid, e.partner_id)?.realname || e.accountid,
      )
      .join(`,`) || ``
  );
}
function ir(e) {
  return rr(e.cell.getValue());
}
function ar(e, t) {
  let n = Un(t),
    [r, i, a] = (0, K.useMemo)(() => {
      if (n.filter((e) => !e.isLoading).length != n.length)
        return [null, [], []];
      let t = new Map(),
        r = new Set(e),
        i = new Map();
      n.forEach((e) =>
        e.data.forEach((e) => {
          if (
            r.has(e.partner_id) &&
            (i.has(e.partner_id)
              ? i.get(e.partner_id).push(e)
              : i.set(e.partner_id, [e]),
            !e.name)
          ) {
            let n = e.accountid;
            t.set(`${n}_${e.partner_id}`, {
              accountID: n,
              partnerID: e.partner_id,
            });
          }
        }),
      );
      let a = Array.from(t.values());
      return [i, a.map((e) => e.accountID), a.map((e) => e.partnerID)];
    }, [n, e]),
    o = Yn(i, a);
  return o.filter((e) => !e.isLoading).length == o.length ? r : null;
}
function or(e) {
  let { rgGidMeetSteamEvents: t } = e,
    n = lr(),
    r = yt(n),
    i = ar(n, t),
    a = (0, K.useMemo)(() => {
      if (!r || !i) return null;
      let e = [];
      return (
        n.forEach((t) => {
          let n = i.get(t);
          e.push({
            partner_id: t,
            partner_name: G(t)?.name || `Unknown`,
            invitations:
              n?.filter(
                (e) =>
                  e.invited &&
                  !Object.keys(e).some((e) =>
                    e.startsWith(`registration_emailed`),
                  ),
              ) || [],
            registrations:
              n?.filter((e) =>
                Object.keys(e).some((e) =>
                  e.startsWith(`registration_emailed`),
                ),
              ) || [],
          });
        }),
        e
      );
    }, [r, i, n]),
    o = (0, K.useMemo)(
      () => [
        nr.accessor(`partner_id`, { header: `Partner ID`, size: 100 }),
        nr.accessor(`partner_name`, { header: `Partner Name`, size: 300 }),
        nr.accessor(`invitations`, {
          header: `Invitations`,
          cell: ir,
          size: 300,
        }),
        nr.accessor(`registrations`, {
          header: `Registered to Attend`,
          cell: ir,
          size: 300,
        }),
      ],
      [],
    );
  function s() {
    let e = [],
      t = [];
    for (let e of o) t.push(e.header);
    e.push(t);
    for (let t of a) {
      let n = [];
      for (let e of o) {
        let r = t[e.accessorKey];
        n.push(
          e.accessorKey == `invitations` || e.accessorKey == `registrations`
            ? rr(r)
            : r.toString(),
        );
      }
      e.push(n);
    }
    U.WriteCSVToFile(e, `partneranalysis.csv`);
  }
  return (0, X.jsxs)(X.Fragment, {
    children: [
      (0, X.jsx)(O, { children: `Partner Analysis` }),
      a
        ? (0, X.jsxs)(C, {
            children: [
              (0, X.jsx)(A, {
                id: `download-csv`,
                onClick: s,
                style: { width: `120px` },
                children: `Download CSV`,
              }),
              (0, X.jsx)(Qe, {
                columns: o,
                data: a,
                getRowKey: (e) => e,
                stickyHeader: !0,
                nItemHeight: 28,
                overscan: n.length,
              }),
              (0, X.jsx)(`br`, {}),
              (0, X.jsx)(A, {
                id: `download-csv`,
                onClick: s,
                style: { width: `120px` },
                children: `Download CSV`,
              }),
            ],
          })
        : (0, X.jsx)(B, { string: j(`#Loading`), position: `center` }),
    ],
  });
}
function sr(e) {
  let { rgEventGIDs: t, fnSelectedEvents: n } = e,
    [r, i] = (0, K.useState)([]),
    { bShowArchived: a, setShowArchived: o } = _n(),
    { bIsLoading: s, events: c } = I(t),
    l = (0, K.useMemo)(() => {
      let e = Math.floor(new Date().getTime() / 1e3);
      return a && c ? [...c] : c?.filter((t) => t.endTime >= e);
    }, [c, a]);
  return s
    ? (0, X.jsx)(B, { string: `Loading...` })
    : (0, X.jsxs)(X.Fragment, {
        children: [
          (0, X.jsx)(E, { checked: a, onChange: o, label: `Show Past Events` }),
          (0, X.jsx)(O, { children: `Choose Events` }),
          l.map((e) =>
            (0, X.jsx)(
              cr,
              { gidClanEvent: e.GID, rgSelected: r, fnSetSelected: i },
              e.GID,
            ),
          ),
          (0, X.jsx)(A, {
            disabled: r.length == 0,
            onClick: () => n(r),
            children: `Continue`,
          }),
        ],
      });
}
function cr(e) {
  let { gidClanEvent: t, rgSelected: n, fnSetSelected: r } = e,
    i = Te(t).GetNameWithFallback(0);
  return (0, X.jsx)(E, {
    label: i,
    checked: n.includes(t),
    onChange: (e) => {
      let i = n.indexOf(t),
        a = i >= 0;
      e && !a
        ? r([...n, t])
        : !e && a && r([...n.slice(0, i), ...n.slice(i + 1)]);
    },
  });
}
function lr() {
  let [e] = (0, K.useState)(() =>
    f(`partners_to_verify`, `application_config`),
  );
  return e;
}
var ur = `_8ooyF9fBMl4-`,
  dr = `x9OVF3IVNDY-`;
function fr(e) {
  let { hideModal: t, gid: n } = e,
    r = Hn(n),
    i = P(),
    [a, o] = (0, K.useMemo)(
      () =>
        r
          ? [
              r.length,
              r.filter(
                (e) =>
                  !e.invitation_emailed && !e.invite_registration_auto_create,
              ).length,
            ]
          : [0, 0],
      [r],
    );
  return (0, X.jsxs)(M, {
    bAlertDialog: !0,
    bAllowFullSize: !0,
    bDisableBackgroundDismiss: !0,
    closeModal: t,
    strDescription: `Every account with an invitation or a registration on this event, and where each one is. Rows with no invite are people who registered themselves from the registration link; they are never sent an invitation email.`,
    strTitle: `Invitation And Registration Status`,
    children: [
      !r &&
        (0, X.jsx)(B, {
          size: `medium`,
          position: `center`,
          string: j(`#Loading`),
        }),
      r &&
        (0, X.jsxs)(X.Fragment, {
          children: [
            (0, X.jsxs)(`div`, {
              children: [`There are `, a, ` invitation/registration records.`],
            }),
            o > 0 &&
              (0, X.jsxs)(A, {
                onClick: async () => {
                  await yr(i, n);
                },
                children: [
                  o,
                  ` invitation emails are queued for this event. Send them all now?`,
                ],
              }),
            (0, X.jsxs)(`table`, {
              children: [
                (0, X.jsx)(`thead`, {
                  children: (0, X.jsxs)(`tr`, {
                    children: [
                      (0, X.jsx)(`th`, { children: `SteamID` }),
                      (0, X.jsx)(`th`, { children: `Name` }),
                      (0, X.jsx)(`th`, { children: `invited` }),
                      (0, X.jsx)(`th`, { children: `Invite Emailed` }),
                      (0, X.jsx)(`th`, { children: `Partner` }),
                      (0, X.jsx)(`th`, { children: `Email Override` }),
                    ],
                  }),
                }),
                (0, X.jsx)(`tbody`, {
                  children: r?.map((e) =>
                    (0, X.jsx)(pr, { reg: e }, `regentry_` + e.steamid),
                  ),
                }),
              ],
            }),
          ],
        }),
    ],
  });
}
function pr(e) {
  let { reg: t } = e,
    [n] = _t(t.partner_id);
  return (0, X.jsxs)(`tr`, {
    children: [
      (0, X.jsx)(`td`, { children: t.steamid }),
      (0, X.jsx)(`td`, { children: t.name }),
      (0, X.jsx)(`td`, { children: t.invited ? `YES` : `` }),
      (0, X.jsx)(`td`, { children: t.invitation_emailed ? `YES` : `` }),
      (0, X.jsxs)(`td`, { children: [n?.name, ` (`, t.partner_id, `)`] }),
      (0, X.jsx)(`td`, { children: t.email_override }),
    ],
  });
}
function mr(e) {
  let { hideModal: t, gid: n, title: r, group: i, session: a } = e,
    o = W(),
    s = Hn(n),
    c = Jt(o, n, i?.group_id),
    [l, u] = (0, K.useMemo)(() => {
      let e = c?.data?.filter((e) => e.session_id == a.id),
        t = new Map(),
        n = new Map();
      return (
        e?.forEach((e) => {
          let r = new w(e.steamid).GetAccountID();
          if ((t.set(r, e), e.jsondata)) {
            let t = JSON.parse(e.jsondata);
            t.pre_event_partner_questions &&
              n.set(r, t.pre_event_partner_questions);
          }
        }),
        [t, n]
      );
    }, [a, c]),
    d = s?.filter((e) => l.has(new w(e.steamid).GetAccountID()));
  return (0, X.jsxs)(M, {
    bAlertDialog: !0,
    bAllowFullSize: !0,
    bDisableBackgroundDismiss: !0,
    closeModal: t,
    strDescription: `Show who is registered for this session`,
    strTitle: `Session Registration`,
    children: [
      (0, X.jsx)(`div`, {
        className: ur,
        children: (0, X.jsx)(`a`, {
          onClick: () => hr(i, a, r, d, l, u),
          children: `Export to CSV`,
        }),
      }),
      (0, X.jsxs)(`table`, {
        className: dr,
        children: [
          (0, X.jsx)(`thead`, {
            children: (0, X.jsxs)(`tr`, {
              children: [
                (0, X.jsx)(`th`, { children: `SteamID` }),
                (0, X.jsx)(`th`, { children: `Name` }),
                (0, X.jsx)(`th`, { children: `Invited` }),
                (0, X.jsx)(`th`, { children: `Partner` }),
                (0, X.jsx)(`th`, { children: `Game` }),
                (0, X.jsx)(`th`, { children: `Email Override` }),
                (0, X.jsxs)(`th`, {
                  children: [
                    `Guest Count `,
                    (0, X.jsx)(le, {
                      tooltip: `Additional guests, doesn't include main registrant`,
                    }),
                  ],
                }),
                (0, X.jsx)(`th`, { children: `Reg Confirm Email Sent` }),
                i.ask_registration_question &&
                  (0, X.jsx)(`th`, { children: `Answer` }),
              ],
            }),
          }),
          (0, X.jsx)(`tbody`, {
            children: d?.flatMap((e) => {
              let t = new w(e.steamid).GetAccountID(),
                n = [
                  (0, X.jsx)(
                    _r,
                    {
                      group: i,
                      regInfo: l.get(t),
                      inviteInfo: e,
                      preRegQuestions: u.get(t),
                    },
                    `regrow` + e.steamid,
                  ),
                ];
              for (let t = 0; t < e.guest_names?.length; t++)
                n.push(
                  (0, X.jsx)(
                    vr,
                    { guestName: e.guest_names[t] },
                    `regguestrow` + e.steamid + `_` + t,
                  ),
                );
              return n;
            }),
          }),
        ],
      }),
    ],
  });
}
function hr(e, t, n, r, i, a) {
  let o = [],
    s = [
      `SteamID`,
      `Name`,
      `Invited`,
      `Partner`,
      `Game`,
      `Email Override`,
      `Guest Count`,
      `Reg Confirmation Email Sent`,
    ];
  e.ask_registration_question && s.push(`Pre Reg Answer`),
    o.push(s),
    r.forEach((t) => {
      let n = [],
        r = t.partner_id ? G(t.partner_id) : void 0;
      n.push(`` + t.steamid),
        n.push(t.name),
        n.push(t.invited ? `YES` : ``),
        n.push(r ? `${r?.name} (${t.partner_id})` : ``),
        n.push(t.game ? `Game: ${t.game}` : ``),
        n.push(t.email_override),
        n.push(`` + (t.guests_registered ? t.guests_registered - 1 : 0));
      let s = new w(t.steamid);
      if (i.has(s.GetAccountID())) {
        let e = gr(i.get(s.GetAccountID()), t);
        if (e) {
          let t = new Date(e * 1e3)
            .toISOString()
            .replace(`T`, ` `)
            .split(`.`)[0];
          n.push(t);
        } else n.push(``);
      } else n.push(``);
      if (e.ask_registration_question) {
        let t = a.get(s.GetAccountID())?.find((t) => t.group_id == e.group_id);
        t && n.push(t.question);
      }
      o.push(n);
      for (let e = 0; e < t.guest_names?.length; e++) {
        let n = [];
        n.push(`(guest)`), n.push(t.guest_names[e]), o.push(n);
      }
    });
  let c =
    `meetsteam_${n}_${k(t.rtime_start)}_at_${me(t.rtime_start)}.csv`.replace(
      /[ <>:"/\\|?*\x00-\x1F]/g,
      `_`,
    );
  U.WriteCSVToFile(o, c);
}
function gr(e, t) {
  let n = `registration_emailed_${e.group_id}_${e.session_id}`,
    r = null;
  return n in t && (r = t[n]), r;
}
function _r(e) {
  let { inviteInfo: t, regInfo: n, group: r, preRegQuestions: i } = e,
    [a] = _t(t.partner_id),
    o = gr(n, t);
  return (0, X.jsxs)(`tr`, {
    children: [
      (0, X.jsx)(`td`, { children: t.steamid }),
      (0, X.jsx)(`td`, { children: t.name }),
      (0, X.jsx)(`td`, { children: t.invited ? `YES` : `` }),
      (0, X.jsx)(`td`, { children: a?.name ?? `(${t.partner_id})` }),
      (0, X.jsx)(`td`, { children: t.game ? `Game: ${t.game}` : `` }),
      (0, X.jsx)(`td`, { children: t.email_override }),
      (0, X.jsx)(`td`, {
        children: n.guests_registered ? n.guests_registered - 1 : 0,
      }),
      (0, X.jsx)(`td`, { children: o ? k(o) : `` }),
      r.ask_registration_question &&
        (0, X.jsx)(`td`, {
          children: i?.find((e) => e.group_id == r.group_id)?.question || ``,
        }),
    ],
  });
}
function vr(e) {
  let { guestName: t } = e;
  return (0, X.jsxs)(`tr`, {
    children: [
      (0, X.jsx)(`td`, { children: `(guest)` }),
      (0, X.jsx)(`td`, { children: t }),
    ],
  });
}
async function yr(e, t) {
  let n = new FormData();
  n.append(`sessionid`, u()), n.append(`gid`, t);
  let r = `${g.PARTNER_BASE_URL}/meetsteam/ajaxsendinviteemails`;
  try {
    let i = await Y.default.post(r, n, { withCredentials: !0 });
    if (i?.data?.success != 1) {
      let e = z(i);
      console.error(`AsyncSendInviteEmails error: ` + e.strErrorMsg, e);
    }
    return (
      e.invalidateQueries({
        queryKey: [`useMeetSteamAllRegistrationStatus`, t],
      }),
      i?.data
    );
  } catch (e) {
    let t = z(e);
    console.error(`AsyncSendInviteEmails error: ` + t.strErrorMsg, t);
  }
  return null;
}
function br(e) {
  let { rgEventGIDs: t } = e,
    [n, r, i] = S(),
    [a, o] = (0, K.useState)(null);
  return (0, X.jsxs)(X.Fragment, {
    children: [
      (0, X.jsx)(`span`, { children: ` | ` }),
      (0, X.jsx)(`a`, {
        href: `#`,
        onClick: (e) => {
          e.preventDefault(), e.stopPropagation(), r();
        },
        children: `Show Registration Across Events`,
      }),
      (0, X.jsx)(R, {
        active: n,
        children: (0, X.jsx)(C, {
          children: (0, X.jsx)(M, {
            closeModal: i,
            bAllowFullSize: !0,
            bDisableBackgroundDismiss: !0,
            children:
              a == null
                ? (0, X.jsx)(sr, { rgEventGIDs: t, fnSelectedEvents: o })
                : (0, X.jsxs)(X.Fragment, {
                    children: [
                      (0, X.jsx)(Sr, { rgGidMeetSteamEvents: a }),
                      (0, X.jsx)(A, {
                        onClick: () => o(null),
                        children: `Reset Selection`,
                      }),
                    ],
                  }),
          }),
        }),
      }),
    ],
  });
}
function xr(e) {
  let t = Un(e),
    n = dt(),
    { bIsLoading: r, events: i } = I(e),
    { data: a } = kn(e),
    [o, s, c] = (0, K.useMemo)(() => {
      if (
        r ||
        !a ||
        a.length == 0 ||
        t.filter((e) => !e.isLoading).length != t.length
      )
        return [null, null, null];
      let e = [],
        n = new Set(),
        o = new Map();
      t.forEach((t) => {
        t.data.forEach((t) => {
          t.guests_registered > 0 &&
            (e.push(t), t.partner_id && n.add(t.partner_id));
        });
      });
      let s = new Map();
      return (
        i.forEach((e) => {
          e.jsondata.meet_steam_groups?.forEach((t) => {
            t.sessions?.forEach((n) => {
              s.set(
                `${e.GID}_${t.group_id}_${n.id}`,
                `${t.localized_session_title[0]}@${fe(n.rtime_start)} ${me(n.rtime_start)}`,
              );
            });
          });
        }),
        a.forEach((e) => {
          e.rgRegistrations.forEach((t) => {
            let n = new w(t.steamid).GetAccountID(),
              r =
                s.get(`${e.gid}_${t.group_id}_${t.session_id}`) ||
                `${t.group_id}:${t.session_id}`;
            o.has(n) ? o.set(n, o.get(n) + `,${r}`) : o.set(n, r);
          });
        }),
        [Array.from(n), e, o]
      );
    }, [t, r, a, i]);
  return it(o)
    ? {
        rgAllRegistrations: s,
        rgPartnerIDs: o,
        rgValveAccounts: n,
        rgMapAccountToSessionTimes: c,
      }
    : {
        rgAllRegistrations: void 0,
        rgPartnerIDs: void 0,
        rgValveAccounts: void 0,
        rgMapAccountToSessionTimes: void 0,
      };
}
var Z = Xe();
function Sr(e) {
  let { rgGidMeetSteamEvents: t } = e,
    {
      rgAllRegistrations: n,
      rgPartnerIDs: r,
      rgValveAccounts: i,
      rgMapAccountToSessionTimes: a,
    } = xr(t),
    o = yt(r),
    s = (0, K.useMemo)(() => {
      if (!o || !n || !i || !a) return null;
      let e = new Map();
      i.forEach((t) => e.set(t.id, t));
      let t = [];
      return (
        n.forEach((n) => {
          let r = G(n.partner_id),
            i = lt(n.partner_id);
          t.push({
            partner_id: n.partner_id ? `` + n.partner_id : ``,
            partner_name: r?.name || `Unknown`,
            name: n.name,
            game: n.game || ``,
            accountid: n.accountid,
            email: n.email_override,
            guest_registrated: n.guests_registered - 1,
            guest_names:
              n.guest_names?.length > 0 ? n.guest_names.join(`,`) : ``,
            business_contact:
              i && i.length > 0
                ? i
                    .filter((e) => e.is_business_contact)
                    .map((t) => {
                      let n = new w(t.steamid);
                      return e.get(n.GetAccountID())?.displayName || t.steamid;
                    })
                    .join(`,`)
                : ``,
            sessions: a.get(n.accountid) || `missing data`,
          });
        }),
        t
      );
    }, [o, n, i, a]),
    c = Cr();
  return !o || !r || !s
    ? (0, X.jsx)(B, { string: j(`#Loading`) })
    : (0, X.jsxs)(X.Fragment, {
        children: [
          (0, X.jsx)(O, { children: `Registations` }),
          s
            ? (0, X.jsxs)(C, {
                children: [
                  (0, X.jsx)(wr, { rgData: s }),
                  (0, X.jsx)(Qe, {
                    columns: c,
                    data: s,
                    getRowKey: (e) => e,
                    stickyHeader: !0,
                    nItemHeight: 28,
                    overscan: r.length,
                  }),
                  (0, X.jsx)(`br`, {}),
                  (0, X.jsx)(wr, { rgData: s }),
                ],
              })
            : (0, X.jsx)(B, { string: j(`#Loading`), position: `center` }),
        ],
      });
}
function Cr() {
  return (0, K.useMemo)(
    () => [
      Z.accessor(`name`, { header: `Name`, size: 200 }),
      Z.accessor(`accountid`, { header: `Account ID`, size: 150 }),
      Z.accessor(`email`, { header: `Email`, size: 150 }),
      Z.accessor(`guest_registrated`, { header: `Guest Count`, size: 100 }),
      Z.accessor(`guest_names`, { header: `Guest's Names`, size: 100 }),
      Z.accessor(`partner_id`, { header: `Partner ID`, size: 100 }),
      Z.accessor(`partner_name`, { header: `Partner Name`, size: 300 }),
      Z.accessor(`game`, { header: `Game Name`, size: 150 }),
      Z.accessor(`business_contact`, { header: `Business Contact`, size: 150 }),
      Z.accessor(`sessions`, { header: `Sessions`, size: 150 }),
    ],
    [],
  );
}
function wr(e) {
  let { rgData: t } = e,
    n = Cr();
  return (0, X.jsx)(A, {
    id: `download-csv`,
    onClick: () =>
      ot(
        `registrationdump.csv`,
        t,
        n.map((e) => ({
          accessorKey: e.accessorKey,
          header:
            typeof e.header == `string` ? e.header : (e.accessorKey ?? ``),
        })),
      ),
    style: { width: `120px` },
    children: `Download CSV`,
  });
}
var Tr = K.createContext(void 0);
function Er(e) {
  let { children: t } = e,
    [n, r] = Ct(`search`, ``),
    [i, a] = (0, K.useState)(() => n || ``),
    o = (0, K.useCallback)(
      (e) => {
        a(e), r(e || void 0, !0);
      },
      [r],
    ),
    s = (0, K.useMemo)(() => ({ strSearch: i, setSearch: o }), [i, o]);
  return (0, X.jsx)(Tr.Provider, { value: s, children: t });
}
var Dr = () => {
  let e = (0, K.useContext)(Tr);
  if (!e)
    throw Error(
      `useMeetSteamSearch must be used within MeetSteamSearchProvider`,
    );
  return e;
};
function Or(e, t) {
  let n = t?.trim().toLowerCase();
  return !n || (!!e && e.toLowerCase().includes(n));
}
function kr(e, t) {
  let n = t?.trim().toLowerCase();
  if (!e || !n) return [{ strText: e || ``, bMatch: !1 }];
  let r = [],
    i = e.toLowerCase(),
    a = 0;
  for (let t = i.indexOf(n); t >= 0; t = i.indexOf(n, a))
    t > a && r.push({ strText: e.slice(a, t), bMatch: !1 }),
      r.push({ strText: e.slice(t, t + n.length), bMatch: !0 }),
      (a = t + n.length);
  return a < e.length && r.push({ strText: e.slice(a), bMatch: !1 }), r;
}
function Ar(e) {
  let { text: t } = e,
    { strSearch: n } = Dr(),
    r = (0, K.useMemo)(() => kr(t, n), [t, n]);
  return (0, X.jsx)(X.Fragment, {
    children: r.map((e, t) =>
      e.bMatch
        ? (0, X.jsx)(`span`, { className: sn, children: e.strText }, t)
        : (0, X.jsx)(K.Fragment, { children: e.strText }, t),
    ),
  });
}
function jr(e) {
  let t = w.InitFromClanID(Ne(), g.EUNIVERSE),
    n = Ur(),
    { bShowArchived: r, setShowArchived: i } = _n(),
    { strSearch: a, setSearch: o } = Dr(),
    { bIsLoading: s, events: c } = I(n),
    {
      rgEventsByMonth: l,
      cEvents: u,
      cMatchingEvents: d,
    } = K.useMemo(() => {
      if (!c) return { rgEventsByMonth: null, cEvents: 0, cMatchingEvents: 0 };
      let e =
          r && c
            ? [...c]
            : c?.filter((e) => e.endTime >= new Date().getTime() / 1e3),
        t = e.filter((e) => Mr(e, a)),
        n = Array.from(nt(t, (e) => rt(new Date(e.startTime * 1e3))));
      return (
        n?.sort((e) => -e[0]),
        { rgEventsByMonth: n, cEvents: e.length, cMatchingEvents: t.length }
      );
    }, [c, r, a]);
  return s
    ? (0, X.jsx)(B, {})
    : l
      ? (0, X.jsxs)(`div`, {
          children: [
            (0, X.jsxs)(`div`, {
              children: [
                (0, X.jsx)(`a`, {
                  href: `${g.COMMUNITY_BASE_URL}gid/${t.ConvertTo64BitString()}/partnerevents/`,
                  children: `Open Meet Steam Event Dashboard`,
                }),
                (0, X.jsx)(tr, { rgEventGIDs: n }),
                (0, X.jsx)(br, { rgEventGIDs: n }),
              ],
            }),
            (0, X.jsx)(E, {
              checked: r,
              onChange: i,
              label: `Show Past Events`,
            }),
            (0, X.jsxs)(`div`, {
              className: on,
              children: [
                (0, X.jsx)(D, {
                  type: `text`,
                  placeholder: `Search events`,
                  tooltip: `In-memory search of the event id, title and description, and of the session group titles, descriptions and intended audience`,
                  value: a,
                  onChange: (e) => o(e?.currentTarget?.value || ``),
                }),
                !!a.trim() &&
                  (0, X.jsxs)(`div`, {
                    className: `efAd4UEv8Tw-`,
                    children: [
                      `Showing `,
                      d,
                      ` of `,
                      u,
                      ` events \xA0`,
                      (0, X.jsx)(`a`, {
                        href: `#`,
                        onClick: (e) => {
                          e.preventDefault(), o(``);
                        },
                        children: `Clear`,
                      }),
                    ],
                  }),
              ],
            }),
            (0, X.jsx)(`hr`, {}),
            l.map((e) =>
              (0, X.jsx)(
                Nr,
                { month: new Date(e[0] * 1e3), events: e[1] },
                e[0],
              ),
            ),
          ],
        })
      : null;
}
function Mr(e, t) {
  if (!t?.trim()) return !0;
  let n = [e.GID, e.GetNameWithFallback(0), e.GetDescriptionWithFallback(0)];
  return (
    e.jsondata.meet_steam_groups?.forEach((e) => {
      n.push(T.GetWithFallback(e.localized_session_title, 0)),
        n.push(T.GetWithFallback(e.localized_session_description, 0)),
        n.push(T.GetWithFallback(e.localized_intended_audience, 0)),
        n.push(T.GetWithFallback(e.localized_sesssion_faq, 0));
    }),
    n.some((e) => Or(e, t))
  );
}
function Nr(e) {
  let { month: t, events: n } = e,
    r = K.useMemo(() => [...n].sort((e) => -e.startTime), [n]),
    i = new Intl.DateTimeFormat(navigator.language, {
      year: `numeric`,
      month: `long`,
    }).format(t);
  return (0, X.jsxs)(`div`, {
    children: [
      (0, X.jsx)(`div`, { className: dn, children: i }),
      (0, X.jsx)(`div`, {
        className: fn,
        children: r.map((e) => (0, X.jsx)(Pr, { oEvent: e }, e.GID)),
      }),
    ],
  });
}
function Pr(e) {
  let { oEvent: t } = e,
    n = t.GID,
    r = w.InitFromClanID(Ne(), g.EUNIVERSE),
    i = Je(Ne(), n),
    a = i.isSuccess ? i.data : null,
    o = t.GetNameWithFallback(0),
    s = (0, K.useMemo)(() => {
      let e = [];
      return (
        t.jsondata.meet_steam_groups?.forEach((t) => {
          t.sessions.forEach((n, r) => {
            e.push({ group: t, session: n, firstSession: r == 0 });
          });
        }),
        e
      );
    }, [t.jsondata.meet_steam_groups]);
  return (0, X.jsxs)(`div`, {
    className: $t,
    children: [
      (0, X.jsxs)(`div`, {
        className: en,
        children: [
          (0, X.jsxs)(`div`, {
            className: rn,
            children: [
              (0, X.jsx)(`div`, {
                className: tn,
                children: (0, X.jsx)(Ar, { text: o }),
              }),
              (0, X.jsx)(`div`, { className: nn, children: k(t?.startTime) }),
            ],
          }),
          (0, X.jsxs)(`div`, {
            className: an,
            children: [
              (0, X.jsx)(`div`, {
                children: (0, X.jsx)(`a`, {
                  href: `${g.COMMUNITY_BASE_URL}gid/${r.ConvertTo64BitString()}/partnerevents/edit/${n}`,
                  children: `Edit`,
                }),
              }),
              (0, X.jsxs)(`div`, {
                children: [
                  `\xA0|\xA0`,
                  (0, X.jsx)(`a`, {
                    href: `${g.STORE_BASE_URL}meetsteam/${n}`,
                    children: `View`,
                  }),
                ],
              }),
              !!(
                t.BIsUnlistedEvent() && t.jsondata.meet_steam_groups?.length > 0
              ) &&
                (0, X.jsxs)(X.Fragment, {
                  children: [
                    (0, X.jsx)(zr, { gid: n }),
                    `\xA0|\xA0`,
                    (0, X.jsx)(`a`, {
                      href: `${g.STORE_BASE_URL}meetsteam/attendance?gid=${n}&accountid=${y.accountid}`,
                      children: `QR Page`,
                    }),
                    `\xA0|\xA0`,
                    (0, X.jsx)(`a`, {
                      href: `${g.STORE_BASE_URL}meetsteam/attendeelist?gid=${n}`,
                      children: `Attendance List`,
                    }),
                    (0, X.jsx)(Fr, { gid: n }),
                    (0, X.jsx)(Lr, { gid: n }),
                    (0, X.jsx)(Ir, { gid: n }),
                    (0, X.jsx)(Rr, { gid: n }),
                  ],
                }),
            ],
          }),
        ],
      }),
      (0, X.jsx)(`div`, {
        children: (0, X.jsxs)(`table`, {
          className: `landingTable`,
          children: [
            (0, X.jsx)(`thead`, {
              children: (0, X.jsxs)(`tr`, {
                children: [
                  (0, X.jsx)(`th`, { children: `Group` }),
                  (0, X.jsx)(`th`, { children: `Session Start` }),
                  (0, X.jsx)(`th`, { children: `Session Duration` }),
                  (0, X.jsx)(`th`, { children: `Seats` }),
                  (0, X.jsx)(`th`, {
                    style: { width: `50px` },
                    children: `Registered`,
                  }),
                  (0, X.jsx)(`th`, {
                    style: { width: `50px` },
                    children: `Guests`,
                  }),
                  (0, X.jsx)(`th`, {
                    style: { width: `100px` },
                    children: `Details`,
                  }),
                ],
              }),
            }),
            (0, X.jsxs)(`tbody`, {
              children: [
                (0, X.jsxs)(`tr`, {
                  children: [
                    s.length > 0
                      ? (0, X.jsx)(
                          Hr,
                          {
                            gid: n,
                            group: s[0].group,
                            session: s[0].session,
                            rgAvailability: a,
                          },
                          s[0].session.id,
                        )
                      : (0, X.jsxs)(X.Fragment, {
                          children: [
                            (0, X.jsx)(`td`, { children: `None` }),
                            (0, X.jsx)(`td`, {}),
                            (0, X.jsx)(`td`, {}),
                            (0, X.jsx)(`td`, {}),
                            (0, X.jsx)(`td`, {}),
                            (0, X.jsx)(`td`, {}),
                          ],
                        }),
                    (0, X.jsx)(`td`, {
                      children:
                        !(
                          t?.BIsUnlistedEvent() &&
                          t.jsondata.meet_steam_groups?.length > 0
                        ) &&
                        (0, X.jsx)(`div`, {
                          children: `Invite Disabled. Event need to publish into Unlisted State`,
                        }),
                    }),
                  ],
                }),
                s
                  .filter((e, t) => t > 0)
                  .map((e) =>
                    (0, X.jsx)(
                      `tr`,
                      {
                        children: (0, X.jsx)(Hr, {
                          group: e.group,
                          gid: n,
                          session: e.session,
                          rgAvailability: a,
                          firstSession: e.firstSession,
                        }),
                      },
                      e.session.id,
                    ),
                  ),
              ],
            }),
          ],
        }),
      }),
    ],
  });
}
function Fr(e) {
  let { gid: t } = e,
    n = mn();
  return Array.from(n.keys()).includes(t)
    ? (0, X.jsxs)(X.Fragment, {
        children: [
          `\xA0|\xA0`,
          (0, X.jsx)(`a`, {
            href: `${g.PARTNER_BASE_URL}meetsteam/survey/${t}`,
            children: `Survey`,
          }),
        ],
      })
    : null;
}
function Ir(e) {
  let { gid: t } = e,
    [n, r, i] = S();
  return (0, X.jsxs)(`div`, {
    children: [
      `\xA0|\xA0`,
      (0, X.jsxs)(`a`, {
        href: `#`,
        onClick: (e) => {
          e.preventDefault(), e.stopPropagation(), r();
        },
        children: [
          `Invite via CSV`,
          (0, X.jsx)(le, {
            tooltip: `This will email invitee and show the users on the dashboard (if not already invited).  We need csv with accountid,partnerid,email_override (optional)`,
          }),
        ],
      }),
      (0, X.jsx)(C, {
        children: (0, X.jsx)(R, {
          active: n,
          children: (0, X.jsx)(Ln, { hideModal: i, gid: t }),
        }),
      }),
    ],
  });
}
function Lr(e) {
  let { gid: t } = e,
    [n, r, i] = S();
  return (0, X.jsxs)(`div`, {
    children: [
      `\xA0|\xA0`,
      (0, X.jsx)(`a`, {
        href: `#`,
        onClick: (e) => {
          e.preventDefault(), e.stopPropagation(), r();
        },
        children: `Invite`,
      }),
      (0, X.jsx)(C, {
        children: (0, X.jsx)(R, {
          active: n,
          children: (0, X.jsx)(Pn, { hideModal: i, gid: t }),
        }),
      }),
    ],
  });
}
function Rr(e) {
  let { gid: t } = e,
    [n, r, i] = S();
  return (0, X.jsxs)(`div`, {
    children: [
      `\xA0|\xA0`,
      (0, X.jsx)(`a`, {
        href: `#`,
        onClick: (e) => {
          e.preventDefault(), e.stopPropagation(), r();
        },
        children: `Show Invites`,
      }),
      (0, X.jsx)(C, {
        children: (0, X.jsx)(R, {
          active: n,
          children: (0, X.jsx)(fr, { hideModal: i, gid: t }),
        }),
      }),
    ],
  });
}
function zr(e) {
  let { gid: t } = e,
    n = W(),
    [r, i] = (0, K.useState)(!1),
    [a, o] = (0, K.useState)(null);
  return (0, X.jsxs)(`div`, {
    children: [
      (0, X.jsx)(`a`, {
        href: `#`,
        onClick: async (e) => {
          e.preventDefault(), e.stopPropagation(), i(!0);
          let r = await Br(n, t);
          o(r);
        },
        children: `Email Self`,
      }),
      (0, X.jsx)(R, {
        active: r,
        children: (0, X.jsxs)(M, {
          bAlertDialog: !0,
          strTitle: `Test Emails`,
          closeModal: () => {
            i(!1), o(null);
          },
          onOK: () => {},
          children: [
            (0, X.jsx)(`div`, {
              children: `This will temporarily register and then de-register you from the event as a way to test the email sending code.`,
            }),
            a == null && (0, X.jsx)(B, { string: j(`#Loading`) }),
            a == 1 && (0, X.jsx)(`div`, { children: `Test Emails Sent` }),
            !!(a && a != 1) &&
              (0, X.jsx)(`div`, {
                children: `Email Failed to Send. Check console`,
              }),
          ],
        }),
      }),
    ],
  });
}
async function Br(e, t) {
  let n = b.Init(Pt),
    r = w.InitFromClanID(Ne(), g.EUNIVERSE);
  n.Body().set_clan_event_gid(t),
    n.Body().set_steamid(r.ConvertTo64BitString());
  let i = await J.TestFireEmails(e, n);
  return console.log(`test fire`, i), i.GetEResult();
}
function Vr(e, t) {
  let n = Zt.default.unix(e),
    r = Zt.default.unix(e).tz(t),
    i = r.utcOffset() - n.utcOffset(),
    a = new Date((e + i * 60) * 1e3),
    o = new Date();
  return `${a.getFullYear() == o.getFullYear() ? ue(a, !1, !1) : ie(a, !1, !1)} ${re(e + i * 60)} ${r.format(`z`)}`;
}
function Hr(t) {
  let {
      gid: n,
      group: r,
      rgAvailability: i,
      session: a,
      firstSession: o = !0,
    } = t,
    s = T.GetWithFallback(r?.localized_session_title, 0),
    c = T.GetWithFallback(r?.localized_session_description, 0),
    l = T.GetWithFallback(r?.localized_intended_audience, 0),
    u = i?.find((e) => e.group_id == r.group_id && e.session_id == a.id),
    [d, f, p] = S(),
    m = Jt(W(), n, r?.group_id),
    ee = Math.min((u?.guest_count / a.max_capacity) * 100, 100),
    h = u?.guest_count > 0 ? `${ee}%` : `0%`,
    g = u?.guest_count >= a.max_capacity,
    _ = Intl.DateTimeFormat().resolvedOptions().timeZone,
    v =
      a.location_type === `in_person`
        ? (a.in_person_time_zone ?? `America/Los_Angeles`)
        : _;
  return (0, X.jsxs)(X.Fragment, {
    children: [
      o && r
        ? (0, X.jsxs)(`td`, {
            children: [
              (0, X.jsx)(Ar, { text: s }),
              (0, X.jsx)(le, { tooltip: c }),
              !!l &&
                (0, X.jsx)(`div`, { children: (0, X.jsx)(Ar, { text: l }) }),
            ],
          })
        : (0, X.jsx)(`td`, {}),
      (0, X.jsx)(`td`, {
        children: (0, X.jsx)(`span`, { children: Vr(a.rtime_start, v) }),
      }),
      (0, X.jsx)(`td`, { children: ne(a.rtime_end - a.rtime_start) }),
      (0, X.jsxs)(`td`, {
        children: [
          u?.guest_count || 0,
          ` / `,
          a.max_capacity,
          (0, X.jsx)(`br`, {}),
          (0, X.jsx)(`div`, {
            className: cn,
            children: (0, X.jsx)(`div`, {
              className: e(ln, g ? un : ``),
              style: { width: h },
            }),
          }),
        ],
      }),
      (0, X.jsx)(`td`, {
        children:
          m.isSuccess &&
          (0, X.jsx)(X.Fragment, {
            children: m.data?.filter((e) => e.session_id == a.id).length,
          }),
      }),
      (0, X.jsx)(`td`, {
        children:
          m.isSuccess &&
          (0, X.jsx)(X.Fragment, {
            children: m.data
              ?.filter((e) => e.session_id == a.id)
              .reduce((e, t) => e + t.guests_registered - 1, 0),
          }),
      }),
      (0, X.jsxs)(`td`, {
        children: [
          (0, X.jsx)(A, { onClick: f, children: `Details` }),
          (0, X.jsx)(C, {
            children: (0, X.jsx)(R, {
              active: d,
              children: (0, X.jsx)(mr, {
                gid: n,
                title: s,
                group: r,
                session: a,
                hideModal: p,
              }),
            }),
          }),
        ],
      }),
    ],
  });
}
function Ur() {
  let [e] = (0, K.useState)(() => f(`event_gids`, `application_config`));
  return e;
}
function Wr(e) {
  let { rgEvents: t } = Ut(),
    n = $r(),
    [r, i] = (0, K.useState)(``),
    a = g.PARTNER_BASE_URL + `meetsteam`,
    o = (0, K.useMemo)(() => {
      let e = new Map();
      return (
        n.forEach((t) => {
          t.results?.attending?.forEach((t) => {
            e.has(t) ? e.set(t, e.get(t) + 1) : e.set(t, 1);
          });
        }),
        e
      );
    }, [n]);
  return (0, X.jsxs)(`div`, {
    className: Qt,
    children: [
      (0, X.jsx)(D, {
        type: `text`,
        value: r,
        onChange: (e) => i(e.currentTarget.value.trim()),
        label: `Filter`,
      }),
      (0, X.jsxs)(`div`, {
        children: [`Total Survey Responses: `, L(n?.length || 0)],
      }),
      (0, X.jsxs)(`div`, {
        children: [
          `Link to partner-facing survey: `,
          (0, X.jsx)(`a`, { href: a, children: a }),
        ],
      }),
      t
        .filter((e) => r.length == 0 || e.name.includes(r) || e.id.includes(r))
        .map((e) =>
          (0, X.jsx)(
            Gr,
            { conf: e, nInterestCount: o.get(e.id) ?? 0, rgSurveyInterest: n },
            e.id,
          ),
        ),
      (0, X.jsx)(ei, { rgSurveyInterest: n }),
    ],
  });
}
function Gr(e) {
  let { conf: t, nInterestCount: n, rgSurveyInterest: r } = e;
  return (0, X.jsx)(ht, {
    title: `${t.name} in ${t.place} around ${t.time}: Interest: ${L(n)}`,
    bStartMinimized: !0,
    children: (0, X.jsx)(qr, { conf: t, rgSurveyInterest: r }),
  });
}
function Kr(e) {
  if (typeof e == `number`) return e;
  let t = e.slice(-1).toUpperCase(),
    n = parseFloat(e.slice(0, -1));
  switch (t) {
    case `K`:
      return n * 1e3;
    case `M`:
      return n * 1e6;
    case `B`:
      return n * 1e9;
    default:
      return parseFloat(e);
  }
}
function qr(e) {
  let { conf: t, rgSurveyInterest: n } = e,
    r = (0, K.useMemo)(
      () => n.filter((e) => e.results?.attending?.includes(t.id)),
      [t, n],
    ),
    i = dt(),
    { bComplete: a, nCount: o } = Xt(r);
  return a
    ? i?.length
      ? !r || r.length == 0
        ? (0, X.jsx)(`div`, { children: `No users with interest` })
        : (0, X.jsx)(Jr, { conf: t, rgSurveyInterest: r })
      : (0, X.jsx)(B, {
          position: `center`,
          string: `Loading Valve Account info (this shouldn't take long)`,
        })
    : (0, X.jsx)(B, {
        position: `center`,
        string: `Loading ${o} of ${r.length}`,
      });
}
function Jr(e) {
  let { conf: t, rgSurveyInterest: n } = e,
    r = P();
  return (0, X.jsxs)(`div`, {
    children: [
      (0, X.jsx)(A, {
        onClick: () => {
          let e = [];
          e.push([
            `AccountID`,
            `Partner ID`,
            `Valve Partner Contacts`,
            `Email Override`,
            `Account Name`,
            `Name`,
            `Have you met steam`,
            `Survey Time`,
            `Attending Other Event Count`,
            `Country`,
            `Alt Language`,
            `Partner Name`,
            `Gross USD`,
            `Best AppID`,
            `Best AppID Name`,
            `Long Term Sales Rank`,
          ]),
            n.forEach((t) => {
              let n = [],
                i = new w(t.steamid);
              n.push(`` + i.GetAccountID());
              let a = ze(i.GetAccountID()),
                o = t.results.partner_id;
              n.push(`` + o);
              let s = at(o).map((e) => ft(r, e)?.displayName || `` + e);
              n.push(s.join(`|`));
              let c = t.results.email_override || ``;
              n.push(`` + c),
                n.push(a?.m_strPlayerName ? a.m_strPlayerName : ``);
              let l = Xn(i.GetAccountID(), o);
              if (
                (n.push(l ? l.realname : ``),
                n.push(t.results.have_you_met_steam ? `yes` : `no`),
                t.results.submit_time)
              ) {
                let e = t.results.submit_time,
                  r = new Date(e * 1e3)
                    .toISOString()
                    .replace(`T`, ` `)
                    .split(`.`)[0];
                n.push(r);
              } else n.push(``);
              n.push(`` + t.results.attending?.length),
                n.push(t.results.country_code),
                n.push(
                  t.results.preferred_language
                    ? m(t.results.preferred_language)
                    : ``,
                );
              let u = G(o);
              n.push(u ? u.name : ``);
              let d = qt(r, o);
              d
                ? (n.push(`` + Kr(d.strGrossUSD)),
                  n.push(`` + d.nBestAppID),
                  n.push(Ie.Get().GetApp(d.nBestAppID)?.GetName()),
                  n.push(`` + d.nBestAppLongTermSalesRank))
                : (n.push(``), n.push(``), n.push(``), n.push(``)),
                e.push(n);
            });
          let i = t.name.replace(` `, `_`) + `_conference_interest.csv`;
          U.WriteCSVToFile(e, i);
        },
        children: `Export to CSV`,
      }),
      (0, X.jsxs)(`table`, {
        className: `landingTable`,
        children: [
          (0, X.jsx)(`thead`, {
            children: (0, X.jsxs)(`tr`, {
              children: [
                (0, X.jsx)(`th`, { children: `Name and Email` }),
                (0, X.jsx)(`th`, { children: `Have you met steam?` }),
                (0, X.jsx)(`th`, { children: `Partner` }),
                (0, X.jsx)(`th`, { children: `Valve Contacts` }),
                (0, X.jsx)(`th`, { children: `Partner Revenue` }),
                (0, X.jsx)(`th`, { children: `Biggest Game` }),
                (0, X.jsx)(`th`, { children: `Long Term Sales Rank` }),
                (0, X.jsx)(`th`, { children: `Attending count?` }),
                (0, X.jsx)(`th`, { children: `Alt Language` }),
                (0, X.jsx)(`th`, { children: `Country` }),
                (0, X.jsx)(`th`, { children: `Submit Survey Time` }),
              ],
            }),
          }),
          (0, X.jsx)(`tbody`, {
            children: n.map((e) =>
              (0, X.jsx)(
                Yr,
                {
                  strsteamid: e.steamid,
                  partnerID: e.results.partner_id,
                  registration: e.results,
                },
                t.id + `_` + e.steamid,
              ),
            ),
          }),
        ],
      }),
    ],
  });
}
function Yr(e) {
  let { partnerID: t, registration: n } = e;
  return (0, X.jsxs)(`tr`, {
    children: [
      (0, X.jsx)(`td`, { children: (0, X.jsx)(Xr, { ...e }) }),
      (0, X.jsx)(`td`, { children: n.have_you_met_steam ? `` : `NO` }),
      (0, X.jsx)(Zr, { nPartnerID: t }),
      (0, X.jsx)(`td`, { children: n.attending.length }),
      (0, X.jsx)(`td`, {
        children:
          n.english_not_good && n.preferred_language
            ? m(n.preferred_language)
            : ``,
      }),
      (0, X.jsx)(`td`, { children: n.country_code }),
      (0, X.jsx)(`td`, { children: k(n.submit_time) }),
    ],
  });
}
function Xr(e) {
  let { strsteamid: t, partnerID: n, registration: r } = e,
    i = Le(t),
    a = Jn(new w(t).GetAccountID(), n),
    o = a?.realname || i.data?.m_strPlayerName;
  return (0, X.jsxs)(X.Fragment, {
    children: [
      (0, X.jsx)(`span`, { children: o }),
      (0, X.jsx)(`br`, {}),
      (0, X.jsx)(`span`, { children: r.email_override || a?.email }),
    ],
  });
}
function Zr(e) {
  let { nPartnerID: t } = e,
    [n] = _t(t),
    r = Kt(t),
    i = et(t),
    a = P();
  return (0, X.jsxs)(X.Fragment, {
    children: [
      (0, X.jsx)(`td`, { children: n ? n?.name + ` (${t})` : t }),
      (0, X.jsx)(`td`, {
        children: i?.map((e) => ft(a, e)?.displayName || `` + e).join(`,`),
      }),
      (0, X.jsxs)(`td`, { children: [`$`, r?.strGrossUSD] }),
      (0, X.jsx)(`td`, {
        children:
          r?.nBestAppID > 0 ? (0, X.jsx)(Qr, { appid: r?.nBestAppID }) : `N/A`,
      }),
      (0, X.jsx)(`td`, { children: r?.nBestAppLongTermSalesRank }),
    ],
  });
}
function Qr(e) {
  let { appid: t } = e,
    n = be(t),
    { data: r } = de(n);
  return (0, X.jsx)(pe, {
    id: n,
    children: (0, X.jsx)(`span`, { children: r?.name || t }),
  });
}
function $r() {
  let [e] = (0, K.useState)(() => f(`interest_results`, `application_config`));
  return (0, K.useMemo)(
    () => e.map((e) => ((e.results = JSON.parse(e.jsondata)), e)),
    [e],
  );
}
function ei(e) {
  let { rgSurveyInterest: t } = e,
    n = P();
  dt();
  let r = (0, K.useMemo)(
    () => t.filter((e) => e.results?.suggestion?.trim().length > 0),
    [t],
  );
  return (0, X.jsxs)(ht, {
    title: `Alternative Suggestions (${r.length})`,
    bStartMinimized: !0,
    children: [
      (0, X.jsx)(A, {
        onClick: () => {
          let e = [];
          e.push([
            `AccountID`,
            `Partner ID`,
            `Email Override`,
            `Account Name`,
            `name`,
            `Attending Other Event Count`,
            `Country`,
            `Alt Language`,
            `Partner Name`,
            `Gross USD`,
            `Best AppID`,
            `Long Term Sales Rank`,
            `Suggestion`,
          ]),
            r.forEach((t) => {
              let r = [],
                i = new w(t.steamid);
              r.push(`` + i.GetAccountID());
              let a = ze(i.GetAccountID()),
                o = t.results.partner_id;
              r.push(`` + o);
              let s = t.results.email_override || ``;
              r.push(`` + s),
                r.push(a?.m_strPlayerName ? a.m_strPlayerName : ``);
              let c = Xn(i.GetAccountID(), o);
              r.push(c ? c.realname : ``),
                r.push(`` + t.results.attending?.length),
                r.push(t.results.country_code),
                r.push(
                  t.results.preferred_language
                    ? m(t.results.preferred_language)
                    : ``,
                );
              let l = G(o);
              r.push(l ? l.name : ``);
              let u = qt(n, o);
              u
                ? (r.push(`` + Kr(u.strGrossUSD)),
                  r.push(`` + u.nBestAppID),
                  r.push(`` + u.nBestAppLongTermSalesRank))
                : (r.push(``), r.push(``), r.push(``)),
                r.push(t.results.suggestion),
                e.push(r);
            }),
            U.WriteCSVToFile(e, `suggestsion.csv`);
        },
        children: `Export to CSV (wait until the table populates fully)`,
      }),
      (0, X.jsxs)(`table`, {
        className: `landingTable`,
        children: [
          (0, X.jsx)(`thead`, {
            children: (0, X.jsxs)(`tr`, {
              children: [
                (0, X.jsx)(`th`, { children: `Name and Email` }),
                (0, X.jsx)(`th`, { children: `Partner` }),
                (0, X.jsx)(`th`, { children: `Valve Contacts` }),
                (0, X.jsx)(`th`, { children: `Partner Revenue` }),
                (0, X.jsx)(`th`, { children: `Biggest Game` }),
                (0, X.jsx)(`th`, { children: `Long Term Sales Rank` }),
                (0, X.jsx)(`th`, { children: `Suggestions` }),
              ],
            }),
          }),
          (0, X.jsx)(`tbody`, {
            children: r.map((e) =>
              (0, X.jsx)(ti, { survey: e }, `suggested` + e.steamid),
            ),
          }),
        ],
      }),
    ],
  });
}
function ti(e) {
  let { survey: t } = e;
  return (
    new w(t.steamid),
    (0, X.jsxs)(`tr`, {
      children: [
        (0, X.jsx)(`td`, {
          children: (0, X.jsx)(Xr, {
            strsteamid: t.steamid,
            partnerID: t.results.partner_id,
            registration: t.results,
          }),
        }),
        (0, X.jsx)(Zr, { nPartnerID: t.results.partner_id }),
        (0, X.jsx)(`td`, { children: t.results.suggestion.trim() }),
      ],
    })
  );
}
function ni(e) {
  let t = K.useContext(ii);
  return F(ai(t, e));
}
function ri(e) {
  return ve.getQueryData([`UserEmailAndLangs`, e]);
}
var ii = K.createContext({
  loadUserEmailAndLangs: async (e) => await si().load(e),
});
function ai(e, t) {
  return {
    queryKey: [`UserEmailAndLangs`, t],
    queryFn: () => e.loadUserEmailAndLangs(t),
    enabled: !!t,
  };
}
var oi;
function si() {
  return (
    (oi ||= new Vn.default(
      async (e) => {
        let t = `${g.PARTNER_BASE_URL}meetsteam/ajaxbatchgetuseremails`,
          n = { sessionid: u(), strAccountIDs: e.join(`,`) },
          r = await Y.default.get(t, { params: n, withCredentials: !0 });
        if (!r || r?.status != 200 || r?.data?.success != 1)
          throw `Failed to load app to user email and langs: ${z(r).strErrorMsg}`;
        let i = new Map();
        return (
          r.data.users.forEach((e) => {
            let t = new w(e.steamid);
            i.set(t.GetAccountID(), e);
          }),
          e.map((e) => i.get(e) ?? null)
        );
      },
      { maxBatchSize: 100 },
    )),
    oi
  );
}
function ci(e) {
  let t = W(),
    n = dt(),
    r = Yt(t),
    i = (0, K.useMemo)(() => {
      if (!r || !n) return null;
      let e = new Set(n.map((e) => e.id));
      return r
        .filter((t) => !e.has(t.accountid))
        .sort((e, t) => t.clan_event_gids?.length - e.clan_event_gids.length);
    }, [r, n]);
  return i
    ? (0, X.jsxs)(`div`, {
        children: [
          (0, X.jsxs)(A, {
            onClick: () => {
              let e = [];
              e.push([`User Name`, `account id`, `Email`, `Event Count`]),
                i.forEach((t) => {
                  let n = ze(t.accountid),
                    r = ri(t.accountid);
                  e.push([
                    n?.m_strPlayerName || ``,
                    `` + t.accountid,
                    r?.email_address || ``,
                    t.clan_event_gids?.length.toLocaleString(Ee()),
                  ]);
                }),
                U.WriteCSVToFile(e, `sale_operators.csv`);
            },
            children: [
              `CSV Export`,
              (0, X.jsx)(le, {
                tooltip: `Wait until the page finishes loading before export`,
              }),
            ],
          }),
          (0, X.jsxs)(`table`, {
            children: [
              (0, X.jsx)(`thead`, {
                children: (0, X.jsxs)(`tr`, {
                  children: [
                    (0, X.jsx)(`th`, { children: `User` }),
                    (0, X.jsx)(`th`, { children: `Email` }),
                    (0, X.jsx)(`th`, { children: `Events` }),
                  ],
                }),
              }),
              (0, X.jsx)(`tbody`, {
                children: i.map((e) =>
                  (0, X.jsx)(li, { organizer: e }, e.accountid),
                ),
              }),
            ],
          }),
        ],
      })
    : (0, X.jsx)(B, { string: j(`#Loading`), size: `medium` });
}
function li(e) {
  let { organizer: t } = e,
    n = (0, K.useMemo)(
      () =>
        w.InitFromAccountID(t.accountid, g.EUNIVERSE).ConvertTo64BitString(),
      [t],
    ),
    r = Le(n),
    i = ni(t.accountid),
    a = r.data?.m_strPlayerName || ``;
  return (0, X.jsxs)(`tr`, {
    children: [
      (0, X.jsxs)(`td`, { children: [a, ` (`, t.accountid, `)`] }),
      (0, X.jsx)(`td`, { children: i?.data?.email_address }),
      (0, X.jsx)(`td`, {
        children: (0, X.jsx)(ui, {
          name: a,
          rgClanEventGIDs: t.clan_event_gids,
        }),
      }),
    ],
  });
}
function ui(e) {
  let { name: t, rgClanEventGIDs: n } = e,
    [r, i, a] = S();
  return (0, X.jsxs)(X.Fragment, {
    children: [
      (0, X.jsxs)(A, {
        onClick: i,
        children: [`See `, L(n.length), ` Events`],
      }),
      (0, X.jsx)(R, {
        active: r,
        children: (0, X.jsx)(M, {
          bAlertDialog: !0,
          closeModal: a,
          strTitle: `${t}'s Events`,
          children: n.map((e) => (0, X.jsx)(di, { gid: e }, e)),
        }),
      }),
    ],
  });
}
function di(e) {
  let { gid: t } = e,
    n = Te(t);
  return n
    ? (0, X.jsxs)(`a`, {
        href: `${g.COMMUNITY_BASE_URL}gid/${n.clanSteamID.ConvertTo64BitString()}/partnerevents/edit/${t}`,
        target: `_blank`,
        children: [
          (0, X.jsx)(`div`, { children: n.GetNameWithFallback(0) }),
          (0, X.jsx)(`img`, { src: n.GetImageURL(`capsule`, 0) }),
        ],
      })
    : (0, X.jsxs)(`div`, { children: [`Loading `, t] });
}
function fi(e) {
  let t = (e) =>
      window.sessionStorage.setItem(`meetsteamadmin`, `?tab=${e.key}`),
    n = [
      {
        name: `Interest Survey Results`,
        key: `survey`,
        contents: (0, X.jsx)(C, { children: (0, X.jsx)(Wr, {}) }),
        onClick: t,
      },
      {
        name: `Event Management`,
        key: `event`,
        contents: (0, X.jsx)(C, { children: (0, X.jsx)(jr, {}) }),
        onClick: t,
      },
      {
        name: `Sale Operators`,
        key: `saleops`,
        contents: (0, X.jsx)(C, { children: (0, X.jsx)(ci, {}) }),
        onClick: t,
      },
      {
        name: `Post Event Surveys`,
        key: `postsurvey`,
        contents: (0, X.jsx)(C, { children: (0, X.jsx)(pn, {}) }),
        onClick: t,
      },
    ];
  return (0, X.jsx)(gn, {
    children: (0, X.jsx)(Er, {
      children: (0, X.jsxs)(`div`, {
        className: H,
        children: [
          (0, X.jsxs)(`div`, {
            className: He,
            children: [
              `Meet Steam Admin Dashboard `,
              a(`current_year`, `application_config`),
            ],
          }),
          (0, X.jsx)(`hr`, {}),
          (0, X.jsx)(De, { tabs: n }),
          (0, X.jsx)(`div`, { className: Me }),
          (0, X.jsx)(`br`, {}),
        ],
      }),
    }),
  });
}
var pi = `OWsSTDls0Wo-`,
  mi = `BDO9Kc-Jdxg-`,
  hi = `BWfLdodjbVc-`,
  gi = `_0K3Nkv4AwdI-`,
  _i = `_9TzuTTBiLVk-`,
  vi = `bdhpyzX5mZU-`;
function yi(t) {
  let n = Ti(),
    r = Ei(),
    { data: i } = Re(y.accountid),
    [a, o] = (0, K.useState)(!1),
    [s, c] = (0, K.useState)(!1),
    [l, d] = (0, K.useState)(!1),
    [f, p] = (0, K.useState)(() => JSON.parse(JSON.stringify(r)));
  return n
    ? !i || i.m_bPlayerNamePending
      ? (0, X.jsx)(B, {
          size: `medium`,
          position: `center`,
          string: j(`#Loading`),
        })
      : (0, X.jsxs)(`div`, {
          className: e(H, pi),
          children: [
            (0, X.jsx)(`div`, {
              className: He,
              children: j(`#MeetSteam_MainTitle`),
            }),
            (0, X.jsx)(`hr`, {}),
            (0, X.jsx)(`div`, {
              className: We,
              children: (0, X.jsxs)(`div`, {
                className: Ue,
                children: [
                  (0, X.jsxs)(`div`, {
                    className: V,
                    children: [
                      (0, X.jsxs)(`h1`, {
                        children: [
                          ` `,
                          ae(
                            `#MeetSteam_Intro`,
                            i.m_strPlayerName,
                            (0, X.jsx)(`br`, {}),
                          ),
                        ],
                      }),
                      (0, X.jsx)(`p`, {
                        className: Ke,
                        children: j(`#MeetSteam_Desc1`),
                      }),
                    ],
                  }),
                  (0, X.jsx)(`div`, {
                    className: V,
                    children: (0, X.jsx)(Ci, {
                      oRegistration: f,
                      fnSetRegistration: p,
                    }),
                  }),
                  (0, X.jsx)(`div`, {
                    className: V,
                    children: (0, X.jsx)(bi, {
                      oRegistration: f,
                      fnSetRegistration: p,
                    }),
                  }),
                  (0, X.jsxs)(`div`, {
                    className: e(V, Ge),
                    children: [
                      (0, X.jsx)(se, {
                        onClick: async () => {
                          c(!0), o(!1), d(!1);
                          let e = `${g.PARTNER_BASE_URL}meetsteam/ajaxregisterinterest`,
                            t = new FormData();
                          t.append(`sessionid`, u()),
                            t.append(`registrationJson`, JSON.stringify(f));
                          try {
                            let n = await Y.default.post(e, t, {
                              withCredentials: !0,
                            });
                            n.data.success == 1
                              ? d(!0)
                              : (console.error(
                                  `MeetSteamLanding failed ` + n.data.success,
                                ),
                                o(!0));
                          } catch (e) {
                            console.error(`MeetSteamLanding failed caught`, e);
                          }
                          c(!1);
                        },
                        children: j(`#Button_Submit`),
                      }),
                      s &&
                        (0, X.jsx)(B, {
                          size: `medium`,
                          position: `center`,
                          string: j(`#Saving`),
                        }),
                      l && (0, X.jsx)(`div`, { children: j(`#Button_Saved`) }),
                      a &&
                        (0, X.jsx)(`div`, {
                          className: `wizbFzhGtBc-`,
                          children: j(`#Error_ErrorCommunicatingWithNetwork`),
                        }),
                    ],
                  }),
                ],
              }),
            }),
          ],
        })
    : (0, X.jsx)(`div`, { className: pi, children: j(`#MeetSteam_closed`) });
}
function bi(e) {
  let { oRegistration: t, fnSetRegistration: n } = e,
    { rgEvents: r, rgOldEvents: i, selectConference: a } = Ut();
  return (0, X.jsxs)(X.Fragment, {
    children: [
      (0, X.jsx)(`h1`, { children: j(`#MeetSteam_Events_Interest`) }),
      (0, X.jsx)(`p`, {
        children: ae(
          `#MeetSteam_Events_title`,
          f(`meet_steam_year`, `application_config`) || `2025`,
        ),
      }),
      (0, X.jsxs)(`p`, {
        children: [
          (0, X.jsx)(`span`, { className: mi, children: `*` }),
          ` `,
          ae(`#MeetSteam_Events_desc`),
        ],
      }),
      !!a &&
        (0, X.jsxs)(X.Fragment, {
          children: [
            (0, X.jsx)(`hr`, {}),
            (0, X.jsx)(`p`, { children: j(`#MeetSteam_ConferenceOrg`) }),
            (0, X.jsx)(xi, { ...e, rgConference: [a] }),
            (0, X.jsx)(`br`, {}),
            (0, X.jsx)(`br`, {}),
            (0, X.jsx)(`hr`, {}),
            (0, X.jsx)(`h2`, { children: j(`#MeetSteam_OtherConference`) }),
          ],
        }),
      (0, X.jsx)(xi, { ...e, rgConference: r }),
      (0, X.jsx)(`br`, {}),
      (0, X.jsx)(D, {
        type: `text`,
        value: t.suggestion || ``,
        onChange: (e) => n({ ...t, suggestion: e.currentTarget.value }),
        label: j(`#MeetSteam_others`),
      }),
      i?.length > 0 &&
        (0, X.jsx)(ht, {
          bStartMinimized: !0,
          title: j(`#MeetSteam_PastEvents`, i.length),
          children: (0, X.jsx)(xi, { ...e, rgConference: i }),
        }),
    ],
  });
}
function xi(e) {
  let { rgConference: t } = e;
  return (0, X.jsxs)(`table`, {
    children: [
      (0, X.jsx)(`thead`, {
        children: (0, X.jsxs)(`tr`, {
          children: [
            (0, X.jsx)(`th`, {}),
            (0, X.jsx)(`th`, {}),
            (0, X.jsx)(`th`, {}),
            (0, X.jsx)(`th`, {}),
          ],
        }),
      }),
      (0, X.jsx)(`tbody`, {
        children: t.map((t) =>
          (0, X.jsxs)(
            `tr`,
            {
              children: [
                (0, X.jsx)(`td`, {
                  children: t.attending
                    ? (0, X.jsx)(`span`, { className: mi, children: `*` })
                    : ``,
                }),
                (0, X.jsxs)(`td`, {
                  children: [
                    (0, X.jsx)(`div`, { children: t.name }),
                    (0, X.jsx)(`div`, { children: t.place }),
                  ],
                }),
                (0, X.jsx)(`td`, {
                  children: (0, X.jsx)(`div`, { children: t.time }),
                }),
                (0, X.jsx)(`td`, {
                  children: (0, X.jsx)(Si, { ...e, conf: t }),
                }),
              ],
            },
            t.id,
          ),
        ),
      }),
    ],
  });
}
function Si(e) {
  let { oRegistration: t, fnSetRegistration: n, conf: r } = e;
  return (0, X.jsx)(E, {
    checked: t.attending?.includes(r.id),
    onChange: (e) => {
      let i = t.attending ? [...t.attending] : [];
      e && !i.includes(r.id)
        ? (i.push(r.id), n({ ...t, attending: i }))
        : !e &&
          i.includes(r.id) &&
          (i.splice(i.indexOf(r.id), 1), n({ ...t, attending: i }));
    },
    tooltip: j(`#MeetSteam_attend_ttip`),
  });
}
function Ci(e) {
  let { oRegistration: t, fnSetRegistration: n } = e,
    r = Re(y.accountid),
    i = ki(t?.partner_id),
    [a, o] = (0, K.useState)(
      () => !!((t.email_override && t.email_override != i) || !i),
    ),
    [s, c, l] = _e(() => [
      !t.have_you_met_steam,
      !!t.english_not_good,
      t.preferred_language,
    ]);
  return r.data
    ? (0, X.jsxs)(`div`, {
        children: [
          (0, X.jsx)(`h1`, { children: j(`#MeetSteam_You`) }),
          (0, X.jsx)(`p`, { children: j(`#MeetSteam_You_Desc`) }),
          (0, X.jsx)(wi, {
            nPartnerID: t.partner_id,
            label: j(`#MeetSteam_You_Company`),
            setPartnerID: (e) => n({ ...t, partner_id: e }),
          }),
          (0, X.jsxs)(`div`, {
            className: hi,
            children: [
              (0, X.jsx)(`div`, {
                className: gi,
                children: (0, X.jsx)(D, {
                  type: `string`,
                  label: j(`#MeetSteam_You_Email`),
                  disabled: !a,
                  value: t.email_override || i || ``,
                  placeholder: j(`#MeetSteam_You_EmailMissing`),
                  mustBeEmail: !0,
                  onChange: (e) =>
                    n({ ...t, email_override: e.currentTarget.value }),
                }),
              }),
              !a &&
                (0, X.jsx)(E, {
                  checked: a,
                  onChange: o,
                  label: j(`#MeetSteam_You_Update`),
                  tooltip: j(`#MeetSteam_You_Update_ttip`),
                }),
            ],
          }),
          (0, X.jsx)(O, { children: j(`#MeetSteam_NeverMet`) }),
          (0, X.jsx)(E, {
            label: j(`#MeetSteam_NeverMetNo`),
            checked: s,
            onChange: (e) => n({ ...t, have_you_met_steam: !e }),
          }),
          (0, X.jsx)(O, { children: j(`#MeetSteam_CapabableEnglish`) }),
          (0, X.jsxs)(`div`, {
            className: vi,
            children: [
              (0, X.jsx)(ce, {
                className: _i,
                checked: !c,
                onChange: (e) =>
                  e &&
                  n({
                    ...t,
                    english_not_good: void 0,
                    preferred_language: void 0,
                  }),
                label: j(`#MeetSteam_CapabableEnglish_Yes`),
              }),
              (0, X.jsx)(ce, {
                className: _i,
                checked: c,
                onChange: (e) =>
                  e &&
                  n({
                    ...t,
                    english_not_good: !0,
                    preferred_language: ee(g.LANGUAGE),
                  }),
                label: j(`#MeetSteam_CapabableEnglish_No`),
              }),
            ],
          }),
          c &&
            (0, X.jsxs)(X.Fragment, {
              children: [
                (0, X.jsx)(`br`, {}),
                (0, X.jsx)(O, { children: j(`#MeetSteam_LanguagePref`) }),
                (0, X.jsx)($e, {
                  selectedLang: l,
                  bAllowUnsetOption: !1,
                  strTooltip: j(`#MeetSteam_LanguagePref_ttip`),
                  fnOnLanguageChanged: (e) =>
                    n({ ...t, preferred_language: e }),
                }),
              ],
            }),
        ],
      })
    : (0, X.jsx)(B, {
        size: `medium`,
        position: `center`,
        string: j(`#Loading`),
      });
}
function wi(e) {
  let { nPartnerID: t, setPartnerID: n, label: r } = e,
    i = tt(y.accountid);
  if (!i)
    return (0, X.jsx)(B, {
      size: `small`,
      position: `center`,
      string: j(`#Loading`),
    });
  if (i.length == 1) return null;
  let a = [];
  return (
    i.forEach((e) => a.push({ label: e?.partner_name, data: e.partnerid })),
    (0, X.jsx)(oe, {
      layout: `inline`,
      label: r,
      rgOptions: a,
      selectedOption: t,
      onChange: (e) => {
        n(e.data);
      },
    })
  );
}
function Ti() {
  let [e] = (0, K.useState)(() => f(`registration_open`, `application_config`));
  return e;
}
function Ei() {
  let [e] = (0, K.useState)(() => f(`user_reg`, `application_config`) || {});
  return e;
}
function Di() {
  let [e] = (0, K.useState)(
    () => f(`partner_user_email`, `application_config`) || ``,
  );
  return e;
}
function Oi() {
  let [e] = (0, K.useState)(() =>
    f(`primary_partner_id`, `application_config`),
  );
  return e;
}
function ki(e) {
  let t = Di(),
    n = Oi(),
    r = Jn(y.accountid, e == n ? null : e);
  return e == n ? t : r?.email;
}
var Ai = `LmRMNslicbg-`;
function ji(t) {
  let { data: n } = Re(y.accountid),
    r = Mi(),
    i = Ni(),
    [a, o] = (0, K.useState)(() => i || ``),
    { surveyGID: s } = ge(),
    [c, l] = (0, K.useState)(!1),
    [d, f] = (0, K.useState)(!1),
    [p, m] = (0, K.useState)(!1);
  return !n || n.m_bPlayerNamePending
    ? (0, X.jsx)(B, {
        size: `medium`,
        position: `center`,
        string: j(`#Loading`),
      })
    : (0, X.jsxs)(`div`, {
        className: e(H, Ai),
        children: [
          (0, X.jsx)(`div`, {
            className: He,
            children: j(`#MeetSteam_PostSurvey_Title`, r),
          }),
          (0, X.jsx)(`hr`, {}),
          (0, X.jsx)(`div`, {
            className: We,
            children: (0, X.jsxs)(`div`, {
              className: Ue,
              children: [
                (0, X.jsxs)(`div`, {
                  className: V,
                  children: [
                    (0, X.jsx)(`div`, {
                      children: j(`#MeetSteam_PostSurvey_Question`),
                    }),
                    (0, X.jsx)(`textarea`, {
                      rows: 10,
                      onChange: (e) => o(e.currentTarget.value),
                      value: a,
                      autoFocus: !0,
                    }),
                  ],
                }),
                (0, X.jsxs)(`div`, {
                  className: e(V, Ge),
                  children: [
                    (0, X.jsx)(se, {
                      onClick: async () => {
                        f(!0), l(!1), m(!1);
                        let e = `${g.PARTNER_BASE_URL}meetsteam/ajaxsubmitsurvey/${s}`,
                          t = new FormData();
                        t.append(`gid`, s), t.append(`sessionid`, u());
                        let n = {
                          gid: s,
                          simple_response: a,
                          submit_time: Math.floor(new Date().getTime() / 1e3),
                        };
                        t.append(`surveyjson`, JSON.stringify(n));
                        try {
                          let n = await Y.default.post(e, t, {
                            withCredentials: !0,
                          });
                          n.data.success == 1
                            ? m(!0)
                            : (console.error(
                                `MeetSteamLanding failed ` + n.data.success,
                              ),
                              l(!0));
                        } catch (e) {
                          console.error(`MeetSteamLanding failed caught`, e);
                        }
                        f(!1);
                      },
                      children: j(`#Button_Submit`),
                    }),
                    d &&
                      (0, X.jsx)(B, {
                        size: `medium`,
                        position: `center`,
                        string: j(`#Saving`),
                      }),
                    p && (0, X.jsx)(`div`, { children: j(`#Button_Saved`) }),
                    c &&
                      (0, X.jsx)(`div`, {
                        className: `wizbFzhGtBc-`,
                        children: j(`#Error_ErrorCommunicatingWithNetwork`),
                      }),
                  ],
                }),
              ],
            }),
          }),
        ],
      });
}
function Mi() {
  let [e] = (0, K.useState)(
    () => f(`survey_event_name`, `application_config`) || ``,
  );
  return e;
}
function Ni() {
  let [e] = (0, K.useState)(() => f(`survey_data`, `application_config`) || ``);
  return e;
}
function Pi(e) {
  let t = zi(),
    n = Bi(),
    r = Li(),
    { surveyGID: i } = ge(),
    { bIsLoading: a, events: o } = I(t),
    [s, c] = (0, K.useMemo)(
      () => [
        n
          .map((e) => {
            let t = new w(e.steamid);
            if (r.has(t.GetAccountID())) {
              let e = r.get(t.GetAccountID());
              return JSON.parse(e[0].jsondata).partner_id;
            }
            return null;
          })
          .filter(Boolean),
        n.map((e) => new w(e.steamid).GetAccountID()),
      ],
      [r, n],
    ),
    l = yt(s),
    u = gt(c);
  return a || !l || !u
    ? (0, X.jsx)(B, { string: `Loading Event, Partner and User Info` })
    : (0, X.jsx)(Fi, {
        rgSurveyResults: n,
        mapAccountsToReg: r,
        meetSteamEvents: o,
      });
}
var Q = Xe();
function Fi(e) {
  let { rgSurveyResults: t, mapAccountsToReg: n, meetSteamEvents: r } = e,
    i = (0, K.useMemo)(() => {
      if (!t) return null;
      let e = new Map();
      r.forEach((t) => e.set(t.GID, t));
      let i = [];
      return (
        t.forEach((t) => {
          let r = JSON.parse(t.jsondata),
            a = new w(t.steamid),
            o = { feedback: r.simple_response, accountid: a.GetAccountID() };
          if (n.has(a.GetAccountID())) {
            let t = n.get(a.GetAccountID()),
              r = JSON.parse(t[0].jsondata);
            (o.partner_id = r.partner_id),
              (o.email = r.email_override),
              (o.name = r.name),
              (o.registrations = ``);
            let i = G(r.partner_id);
            i && (o.partner_name = i.name),
              t.forEach((t) => {
                let n = e.get(t.gidEvent);
                if (n) {
                  let e = n.jsondata.meet_steam_groups.find(
                    (e) => e.group_id === t.group_id,
                  ).localized_session_title[0];
                  o.registrations.length > 0 && (o.registrations += `|`),
                    (o.registrations += e);
                }
              });
          } else {
            let e = mt(a.GetAccountID());
            e && (o.name = e.persona_name);
          }
          i.push(o);
        }),
        i
      );
    }, [n, r, t]),
    a = (0, K.useMemo)(
      () => [
        Q.accessor(`name`, { header: `Name`, size: 150 }),
        Q.accessor(`feedback`, { header: `Feedback`, size: 500, cell: ct }),
        Q.accessor(`registrations`, {
          header: `Sessions`,
          size: 200,
          cell: Ii,
        }),
        Q.accessor(`accountid`, { header: `Account ID`, size: 150 }),
        Q.accessor(`email`, { header: `Email`, size: 150 }),
        Q.accessor(`partner_name`, { header: `Partner Name`, size: 200 }),
      ],
      [],
    );
  return i
    ? (0, X.jsx)(C, {
        children: (0, X.jsxs)(`div`, {
          className: H,
          children: [
            (0, X.jsx)(`div`, { className: He, children: `Survey Results` }),
            (0, X.jsx)(`hr`, {}),
            (0, X.jsx)(A, {
              id: `download-csv`,
              onClick: () =>
                ot(
                  `meetsteam_survey_results.csv`,
                  i,
                  a.map((e) => ({
                    accessorKey: e.accessorKey,
                    header:
                      typeof e.header == `string`
                        ? e.header
                        : (e.accessorKey ?? ``),
                  })),
                ),
              style: { width: `120px` },
              children: `Download CSV`,
            }),
            (0, X.jsx)(`br`, {}),
            (0, X.jsx)(Qe, {
              columns: a,
              data: i,
              getRowKey: (e) => e,
              stickyHeader: !0,
              nItemHeight: 28,
              overscan: i.length,
            }),
          ],
        }),
      })
    : (0, X.jsx)(B, { string: j(`#Loading`) });
}
function Ii(e) {
  return e.getValue()?.length > 0
    ? (0, X.jsx)(ut, { text: e.getValue(), regExp: /\|/ })
    : ``;
}
function Li() {
  let e = Ri();
  return (0, K.useMemo)(() => {
    let t = new Map();
    return (
      e.forEach((e, n) => {
        e.forEach((e) => {
          let r = new w(e.steamid);
          t.has(r.GetAccountID()) || t.set(r.GetAccountID(), []),
            (e.gidEvent = n),
            t.get(r.GetAccountID()).push(e);
        });
      }),
      t
    );
  }, [e]);
}
function Ri() {
  let [e] = (0, K.useState)(() => {
    let e = new Map(),
      t = f(`registration_by_gid`, `application_config`) || {};
    for (let n in t) {
      let r = t[n];
      e.set(n, r);
    }
    return e;
  });
  return e;
}
function zi() {
  let [e] = (0, K.useState)(() => f(`event_gids`, `application_config`) || []);
  return e;
}
function Bi() {
  let [e] = (0, K.useState)(
    () => f(`survey_results`, `application_config`) || [],
  );
  return e;
}
var $ = {
  YearlySurvery: (e = `:year`) => `/${e}`,
  PostEventSurvey: (e = `:surveyGID`) => `/survey/${e}`,
  AdminDashboard: () => `/admin`,
  PostEventSurveyResults: (e = `:surveyGID`) => `/surveyresults/${e}`,
};
function Vi(e) {
  return (
    (0, K.useEffect)(() => {
      we.Init();
    }, []),
    (0, X.jsx)(qe, {
      children: (0, X.jsx)(Ce, {
        basename: Se() + `meetsteam/`,
        children: (0, X.jsxs)(he, {
          children: [
            (0, X.jsx)(N, {
              exact: !0,
              path: xe.DiagData(),
              render: (e) =>
                (0, X.jsx)(Be, { ...e, strConfigID: `application_config` }),
            }),
            (0, X.jsx)(N, {
              exact: !0,
              path: $.AdminDashboard(),
              component: fi,
            }),
            (0, X.jsx)(N, {
              exact: !0,
              path: $.YearlySurvery(`:year(\\d+)`),
              component: yi,
            }),
            (0, X.jsx)(N, {
              exact: !0,
              path: $.PostEventSurvey(`:surveyGID(\\d+)`),
              component: ji,
            }),
            (0, X.jsx)(N, {
              exact: !0,
              path: $.PostEventSurveyResults(`:surveyGID(\\d+)`),
              component: Pi,
            }),
            (0, X.jsx)(N, { component: Ve }),
          ],
        }),
      }),
    })
  );
}
export { $ as MeetSteamRoutes, Vi as default };
