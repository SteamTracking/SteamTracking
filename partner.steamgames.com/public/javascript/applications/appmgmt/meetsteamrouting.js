/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import {
  A as e,
  Ct as t,
  F as n,
  G as r,
  K as i,
  Pt as a,
  S as o,
  St as s,
  T as c,
  W as l,
  _t as u,
  bt as d,
  g as f,
  gt as p,
  k as m,
  nt as h,
  r as g,
  vt as _,
  w as v,
  wt as ee,
  xt as y,
  yt as b,
  z as x,
} from "./chunk~de7f2df91c.js";
import { P as S, t as C } from "./chunk~bd90a5fce7.js";
import { a as te } from "./chunk~68b7e78d68.js";
import {
  Aa as ne,
  Bt as w,
  Da as re,
  Ft as ie,
  Gt as T,
  Kt as E,
  Ma as ae,
  Ta as oe,
  _a as se,
  da as D,
  ia as O,
  l as k,
  mn as A,
  nn as j,
  on as ce,
  sn as le,
  wa as ue,
} from "./chunk~1fa4b8f2ff.js";
import { _ as de } from "./chunk~0a99e05c44.js";
import { Nt as fe, ar as pe, or as me } from "./chunk~6b8ddcaac8.js";
import { a as he, r as M, u as ge, w as _e } from "./chunk~44f252525d.js";
import { i as N } from "./chunk~8fb30ea08b.js";
import { t as P } from "./chunk~ede3e357a2.js";
import { t as ve } from "./chunk~9aa05d2c7d.js";
import { t as ye } from "./chunk~4406a7b793.js";
import { r as be, t as xe } from "./chunk~70c16cc80c.js";
import { r as Se } from "./chunk~b390ee0f78.js";
import { i as Ce, r as we, t as Te } from "./chunk~9fc22a4638.js";
import { t as F } from "./chunk~25a6634263.js";
import { n as Ee, o as De, s as I } from "./chunk~fc8a9e4879.js";
import { t as Oe } from "./chunk~e29b7ee76a.js";
import { t as L } from "./chunk~726542bc75.js";
import { r as R } from "./chunk~8681f5c764.js";
import { l as ke } from "./chunk~2201b8cb3d.js";
import { t as Ae } from "./chunk~f4e4ed5c17.js";
import { t as z } from "./chunk~c55709d290.js";
import { r as je } from "./chunk~af36c62e9f.js";
import { t as B } from "./chunk~eefd71512b.js";
import "./chunk~a6b9ae1345.js";
import { r as Me } from "./chunk~2f8c67b4de.js";
import { a as Ne, r as Pe } from "./chunk~0111fcd096.js";
import "./chunk~739842ca30.js";
import { t as Fe } from "./chunk~93fc7377c2.js";
import { t as Ie } from "./chunk~3ee5188744.js";
import { i as Le, r as Re, t as ze } from "./chunk~d382bdf2cf.js";
import { t as Be } from "./chunk~59af5622dd.js";
import { t as Ve } from "./chunk~58c6c52d52.js";
import {
  A as He,
  N as V,
  T as Ue,
  f as We,
  r as H,
  t as Ge,
  x as Ke,
} from "./chunk~6110f63e8e.js";
import { t as U } from "./chunk~f8f9713b0c.js";
import { t as qe } from "./chunk~9b35b2d482.js";
import { i as Je } from "./chunk~de7a25f8e2.js";
import { i as Ye, n as Xe, r as Ze, t as Qe } from "./chunk~8c0cff8a60.js";
import { n as $e } from "./chunk~91ae5e1167.js";
import {
  _ as et,
  a as tt,
  c as nt,
  d as rt,
  f as it,
  g as at,
  l as ot,
  n as st,
  o as ct,
  s as lt,
  t as ut,
  u as dt,
} from "./chunk~87cd89c815.js";
import { a as W, r as ft, t as pt } from "./chunk~8255136f90.js";
import { a as mt, i as ht, r as gt, s as _t } from "./chunk~ec644f97c6.js";
import { a as vt, n as yt, o as bt, t as G } from "./chunk~4f3a47e991.js";
var K = a(h(), 1),
  xt = new Set();
function St() {
  for (let e of xt) e(location.search);
}
function Ct() {
  let [e, t] = (0, K.useState)(location.search);
  return (
    (0, K.useEffect)(() => {
      function e() {
        t(location.search);
      }
      return (
        xt.add(t),
        window.addEventListener(`popstate`, e),
        t(location.search),
        () => {
          (xt.delete(t), window.removeEventListener(`popstate`, e));
        }
      );
    }, []),
    e
  );
}
function wt(e, t) {
  let n = Ct();
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
        (n
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
          (0, K.startTransition)(St));
      },
      [e],
    ),
  ];
}
var q = a(ee(), 1),
  Tt = class e extends q.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.clan_event_gid || p(e.M()),
        q.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: b.readFixed64String,
              bw: t.writeFixed64String,
            },
            steamid: {
              n: 2,
              br: b.readFixed64String,
              bw: t.writeFixed64String,
            },
            registration_group_id: {
              n: 3,
              br: b.readUint32,
              bw: t.writeUint32,
            },
            registration_session_id: {
              n: 4,
              br: b.readUint32,
              bw: t.writeUint32,
            },
            guest_count: { n: 5, br: b.readUint32, bw: t.writeUint32 },
            jsondata: { n: 7, br: b.readString, bw: t.writeString },
            skip_email: { n: 8, br: b.readBool, bw: t.writeBool },
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
    static fromObject(t) {
      return _(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPartnerMeetSteam_UpdateRegistration_Request`;
    }
  },
  Et = class e extends q.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), q.Message.initialize(this, e, 0, -1, void 0, null));
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
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPartnerMeetSteam_UpdateRegistration_Response`;
    }
  },
  Dt = class e extends q.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.clan_event_gid || p(e.M()),
        q.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: b.readFixed64String,
              bw: t.writeFixed64String,
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
    static fromObject(t) {
      return _(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPartnerMeetSteam_GetAvailability_Request`;
    }
  },
  Ot = class e extends q.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.availability || p(e.M()),
        q.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { availability: { n: 1, c: kt, r: !0, q: !0 } },
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
    static fromObject(t) {
      return _(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPartnerMeetSteam_GetAvailability_Response`;
    }
  },
  kt = class e extends q.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.group_id || p(e.M()),
        q.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            group_id: { n: 1, br: b.readUint32, bw: t.writeUint32 },
            session_id: { n: 2, br: b.readUint32, bw: t.writeUint32 },
            guest_count: { n: 3, br: b.readUint32, bw: t.writeUint32 },
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
    static fromObject(t) {
      return _(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPartnerMeetSteam_GetAvailability_Response_Session`;
    }
  },
  At = class e extends q.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.clan_event_gid || p(e.M()),
        q.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: b.readFixed64String,
              bw: t.writeFixed64String,
            },
            steamid: {
              n: 2,
              br: b.readFixed64String,
              bw: t.writeFixed64String,
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
    static fromObject(t) {
      return _(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPartnerMeetSteam_GetRegistrations_Request`;
    }
  },
  jt = class e extends q.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.registrations || p(e.M()),
        q.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { registrations: { n: 1, c: Mt, r: !0, q: !0 } },
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
    static fromObject(t) {
      return _(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPartnerMeetSteam_GetRegistrations_Response`;
    }
  },
  Mt = class e extends q.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.group_id || p(e.M()),
        q.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            group_id: { n: 1, br: b.readUint32, bw: t.writeUint32 },
            session_id: { n: 2, br: b.readUint32, bw: t.writeUint32 },
            steamid: {
              n: 3,
              br: b.readFixed64String,
              bw: t.writeFixed64String,
            },
            guests_registered: { n: 4, br: b.readUint32, bw: t.writeUint32 },
            jsondata: { n: 5, br: b.readString, bw: t.writeString },
            rt_attendance_marked: { n: 6, br: b.readUint32, bw: t.writeUint32 },
            attendance_count: { n: 7, br: b.readUint32, bw: t.writeUint32 },
            guests_attendance: { n: 8, br: b.readString, bw: t.writeString },
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
    static fromObject(t) {
      return _(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPartnerMeetSteam_GetRegistrations_Response_Registration`;
    }
  },
  Nt = class e extends q.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.clan_event_gid || p(e.M()),
        q.Message.initialize(this, t, 0, -1, [3], null));
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
              br: b.readFixed64String,
              bw: t.writeFixed64String,
            },
            steamid: {
              n: 2,
              br: b.readFixed64String,
              bw: t.writeFixed64String,
            },
            accountids: {
              n: 3,
              r: !0,
              q: !0,
              br: b.readUint32,
              pbr: b.readPackedUint32,
              bw: t.writeRepeatedUint32,
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
    static fromObject(t) {
      return _(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPartnerMeetSteam_EmailInvitees_Request`;
    }
  },
  Pt = class e extends q.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.num_emailed || p(e.M()),
        q.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            num_emailed: { n: 1, br: b.readUint32, bw: t.writeUint32 },
            num_skipped: { n: 2, br: b.readUint32, bw: t.writeUint32 },
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
    static fromObject(t) {
      return _(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPartnerMeetSteam_EmailInvitees_Response`;
    }
  },
  Ft = class e extends q.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.clan_event_gid || p(e.M()),
        q.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: b.readFixed64String,
              bw: t.writeFixed64String,
            },
            steamid: {
              n: 2,
              br: b.readFixed64String,
              bw: t.writeFixed64String,
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
    static fromObject(t) {
      return _(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CParterMeetSteam_TestFireEmails_Request`;
    }
  },
  It = class e extends q.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.sessionids || p(e.M()),
        q.Message.initialize(this, t, 0, -1, [1], null));
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
              br: b.readUint32,
              pbr: b.readPackedUint32,
              bw: t.writeRepeatedUint32,
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
    static fromObject(t) {
      return _(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CParterMeetSteam_TestFireEmails_Response`;
    }
  },
  Lt = class e extends q.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.rt_oldest_date || p(e.M()),
        q.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            rt_oldest_date: { n: 1, br: b.readUint32, bw: t.writeUint32 },
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
    static fromObject(t) {
      return _(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPartnerMeetSteam_GetSaleEventOrganizers_Request`;
    }
  },
  Rt = class e extends q.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.accountid || p(e.M()),
        q.Message.initialize(this, t, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            accountid: { n: 1, br: b.readUint32, bw: t.writeUint32 },
            clan_event_gids: {
              n: 2,
              r: !0,
              q: !0,
              br: b.readFixed64String,
              pbr: b.readPackedFixed64String,
              bw: t.writeRepeatedFixed64String,
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
    static fromObject(t) {
      return _(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSaleEventOrganizerInfo`;
    }
  },
  zt = class e extends q.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.info || p(e.M()),
        q.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { info: { n: 1, c: Rt, r: !0, q: !0 } },
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
    static fromObject(t) {
      return _(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPartnerMeetSteam_GetSaleEventOrganizers_Response`;
    }
  },
  Bt = class e extends q.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.accountids || p(e.M()),
        q.Message.initialize(this, t, 0, -1, [1, 2], null));
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
              br: b.readUint32,
              pbr: b.readPackedUint32,
              bw: t.writeRepeatedUint32,
            },
            partnerids: {
              n: 2,
              r: !0,
              q: !0,
              br: b.readUint32,
              pbr: b.readPackedUint32,
              bw: t.writeRepeatedUint32,
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
    static fromObject(t) {
      return _(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPartnerMeetSteam_GetBatchPartnerEmailAndName_Request`;
    }
  },
  Vt = class e extends q.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.accountid || p(e.M()),
        q.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            accountid: { n: 1, br: b.readUint32, bw: t.writeUint32 },
            partnerid: { n: 2, br: b.readUint32, bw: t.writeUint32 },
            realname: { n: 3, br: b.readString, bw: t.writeString },
            email: { n: 4, br: b.readString, bw: t.writeString },
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
    static fromObject(t) {
      return _(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPartnerEmailAndName`;
    }
  },
  Ht = class e extends q.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.info || p(e.M()),
        q.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { info: { n: 1, c: Vt, r: !0, q: !0 } },
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
    static fromObject(t) {
      return _(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPartnerMeetSteam_GetBatchPartnerEmailAndName_Response`;
    }
  },
  J;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(`PartnerMeetSteam.UpdateRegistration#1`, i(Tt, t, n), Et, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  e.UpdateRegistration = t;
  function n(e, t, n) {
    return e.SendMsg(`PartnerMeetSteam.GetAvailability#1`, i(Dt, t, n), Ot, {
      bConstMethod: !0,
      ePrivilege: 0,
      eWebAPIKeyRequirement: 1,
    });
  }
  e.GetAvailability = n;
  function r(e, t, n) {
    return e.SendMsg(`PartnerMeetSteam.GetRegistrations#1`, i(At, t, n), jt, {
      bConstMethod: !0,
      ePrivilege: 1,
      rgBrowserAPISites: [`partner`],
    });
  }
  e.GetRegistrations = r;
  function a(e, t, n) {
    return e.SendMsg(`PartnerMeetSteam.EmailInvitees#1`, i(Nt, t, n), Pt, {
      ePrivilege: 4,
    });
  }
  e.EmailInvitees = a;
  function o(e, t, n) {
    return e.SendMsg(`PartnerMeetSteam.TestFireEmails#1`, i(Ft, t, n), It, {
      ePrivilege: 4,
      rgBrowserAPISites: [`partner`],
    });
  }
  e.TestFireEmails = o;
  function s(e, t, n) {
    return e.SendMsg(
      `PartnerMeetSteam.GetSaleEventOrganizers#1`,
      i(Lt, t, n),
      zt,
      { bConstMethod: !0, ePrivilege: 4, rgBrowserAPISites: [`partner`] },
    );
  }
  e.GetSaleEventOrganizers = s;
  function c(e, t, n) {
    return e.SendMsg(
      `PartnerMeetSteam.GetBatchPartnerEmailAndName#1`,
      i(Bt, t, n),
      Ht,
      { bConstMethod: !0, ePrivilege: 1, rgBrowserAPISites: [`partner`] },
    );
  }
  e.GetBatchPartnerEmailAndName = c;
})((J ||= {}));
var Y = a(Ae());
function Ut(e, t = !1) {
  let [n, r = `00:00:00`] = e.trim().split(/\s+/),
    [i, a, o] = n.split(`-`).map(Number),
    [s, c, l] = r.split(`:`).map(Number),
    u = t
      ? Date.UTC(i, a - 1, o, s, c, l ?? 0)
      : new Date(i, a - 1, o, s, c, l ?? 0).getTime();
  return Math.floor(u / 1e3);
}
function Wt() {
  let [e] = K.useState(() => v(`events_list`, `application_config`)),
    [t] = je(`filter`),
    n = Pe(),
    [r, i] = K.useMemo(() => {
      let t = [],
        r = [];
      return (
        e.forEach((e) => {
          e.endtime && Ut(e.endtime) < n ? r.push(e) : t.push(e);
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
function Gt(e) {
  return [`usePartnerRevAndBestAppSlow`, e];
}
async function Kt(e) {
  let t = `${m.PARTNER_BASE_URL}/meetsteam/ajaxfetchpartnerdetails`,
    n = { sessionid: o(), partnerid: e };
  return (await Y.default.get(t, { params: n }))?.data?.data;
}
function qt(e) {
  let t = P({ queryKey: Gt(e), queryFn: async () => Kt(e), enabled: !!e });
  return t.isLoading ? null : t.data;
}
function Jt(e, t) {
  return e.getQueryData([`usePartnerRevAndBestAppSlow`, t]);
}
function Yt(e, t, n) {
  return P({
    queryKey: [`useMeetSteamGetAllRegistration`, t, n],
    queryFn: async () => {
      let n = r.Init(At);
      n.Body().set_clan_event_gid(t);
      let i = await J.GetRegistrations(e, n);
      return i.BSuccess()
        ? i
            .Body()
            .registrations()
            .map((e) => e.toObject())
        : [];
    },
    enabled: t != null && n != 0,
  });
}
function Xt(e) {
  let t = P({
    queryKey: [`useMeetSteamSaleOperators`],
    queryFn: async () => {
      let t = r.Init(Lt),
        n = new Date();
      (n.setFullYear(n.getFullYear() - 2), t.Body().set_rt_oldest_date(0));
      let i = await J.GetSaleEventOrganizers(e, t);
      return i.BSuccess()
        ? i
            .Body()
            .info()
            .map((e) => e.toObject())
        : [];
    },
  });
  return t.isLoading ? null : t.data;
}
function Zt(e) {
  let [t, n] = (0, K.useState)(!1),
    [r, i] = (0, K.useState)(0),
    a = N();
  return (
    (0, K.useEffect)(() => {
      (async () => {
        let t = 0;
        for (let n of e) {
          let e = n.results.partner_id;
          (new F(n.steamid).GetAccountID(),
            await Promise.all([
              yt(e),
              a.prefetchQuery({ queryKey: Gt(e), queryFn: async () => Kt(e) }),
              nt(a, e),
            ]),
            ++t,
            i(t));
        }
        n(!0);
      })();
    }, [a, e]),
    { bComplete: t, nCount: r }
  );
}
var Qt = a(Ne()),
  $t = `ANKJ3z6hmzE-`,
  en = `qjW9VuTG-ok-`,
  tn = `BKpSlMPxT2U-`,
  nn = `zCTRiSHH0GY-`,
  rn = `iEL3fKaVlyw-`,
  an = `OW-hVnCR7gA-`,
  on = `Ct0fFffDoxk-`,
  sn = `eQA2L6b-b-s-`,
  cn = `KurbwRHiVjM-`,
  ln = `ZjfFKCtIfsE-`,
  un = `mkPZr6a6FgQ-`,
  dn = `GPfndBivMVM-`,
  fn = `N4NsybcgJ9c-`,
  pn = `JE--rcF4UwQ-`,
  X = l();
function mn(e) {
  let t = hn();
  return (0, X.jsx)(`div`, {
    children: (0, X.jsx)(`ol`, {
      children: Array.from(t.entries()).map(([e, t]) =>
        (0, X.jsx)(
          `li`,
          {
            children: (0, X.jsx)(`a`, {
              href: `${m.PARTNER_BASE_URL}meetsteam/surveyresults/${e}`,
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
function hn() {
  let [e] = (0, K.useState)(() => {
    let e = v(`survey_list`, `application_config`) || {},
      t = new Map();
    for (let n of Object.keys(e)) t.set(n, e[n]);
    return t;
  });
  return e;
}
var gn = K.createContext(void 0);
function _n(e) {
  let { children: t } = e,
    [n, r] = wt(`showpastevents`, !1);
  return (0, X.jsx)(gn.Provider, {
    value: { bShowArchived: n, setShowArchived: r },
    children: t,
  });
}
var vn = () => {
    let e = (0, K.useContext)(gn);
    if (!e)
      throw Error(
        `useMeetSteamArchived must be used within MeetSteamArchivedProvider`,
      );
    return e;
  },
  yn = `YH1NKi9pxv8-`,
  bn = `NA245EcdHK8-`,
  xn = `mGaVwRTYiGU-`,
  Sn = `mV7eMKSof-E-`,
  Cn = `_57Jpn4Iw0WA-`,
  wn = `hEpVF2SPtdY-`,
  Tn = `sUZ3T3HpmCo-`,
  En = `QtPZ-KRM8jg-`,
  Dn = class e {
    m_steamInterface;
    GetSaleFeatureTransport() {
      return this.m_steamInterface;
    }
    static s_Singleton;
    static Get() {
      return ((e.s_Singleton ||= new e()), e.s_Singleton);
    }
    constructor() {
      this.m_steamInterface = xe(new be(m.WEBAPI_BASE_URL));
    }
  };
function On() {
  return Dn.Get().GetSaleFeatureTransport().GetServiceTransport();
}
async function kn(e) {
  let t = { sessionid: o(), gids: e },
    n = `${f.PARTNER_BASE_URL}meetsteam/admin/ajaxgetregistrations`,
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
function An(e) {
  return P({
    queryKey: [],
    queryFn: async () => await kn(e),
    enabled: e && e.length > 0,
  });
}
async function jn(e) {
  let t = `${f.PARTNER_BASE_URL}meetsteam/admin/ajaxgetpartnersforaccount?accountid=${e}`,
    n = await fetch(t);
  if (!n.ok) throw Error(`Failed to read the partner list for account ${e}`);
  let r = await n.json();
  if (r.success != 1)
    throw Error(`Failed to read the partner list for account ${e}: ${r.msg}`);
  return r.partners ?? [];
}
function Mn(e) {
  return P({
    queryKey: [`MeetSteamPartnersForAccount`, e],
    queryFn: () => jn(e),
    enabled: e > 0,
  });
}
function Nn(e) {
  let t = e.trim();
  if (!/^\d+$/.test(t)) return 0;
  if (Number(t) > 4294967295) {
    let e = new F(t);
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
    [p, h] = K.useState(!1),
    g = rt(s),
    _ = Nn(g),
    v = !!g.trim() && !_,
    ee = On(),
    y = Mn(_),
    b = y.data,
    x = P({
      queryKey: [`MeetSteamInviteDirectDialog`, n, _],
      queryFn: async () => {
        let e = {
            steamid: F.InitFromAccountID(_, m.EUNIVERSE).ConvertTo64BitString(),
            gid: n,
            type: 6,
          },
          t = await Ye.GetUserActionData(ee, e);
        return t.BSuccess() && t.Body().jsondata()
          ? JSON.parse(t.Body().jsondata())
          : {};
      },
      enabled: !!n && _ > 0,
    });
  return (
    K.useEffect(() => {
      if (!x.isLoading && x.isSuccess) {
        let e = b?.length == 1 ? b[0].partnerid.toString() : ``;
        (u(x.data.partner_id ? x.data.partner_id.toString() : e),
          f(x.data.email_override ?? ``),
          h(x.data.allow_registration_if_full ?? !1));
      }
    }, [x.isLoading, x.isSuccess, x.data, b]),
    (0, X.jsxs)(k, {
      strTitle: `Invite User`,
      bOKDisabled: !_ || r || x.isLoading,
      onOK: async () => {
        i(!0);
        let e = await Bn(
            n,
            [
              {
                nAccountID: _,
                nPartnerID: Number.parseInt(l) > 0 ? Number.parseInt(l) : 0,
                strEmailOverride: d,
                bAllowRegistrationIfFull: p,
              },
            ],
            !0,
          ),
          r = e && e.success == 1;
        (r || o(`We hit error during invite, check console: ` + e?.msg),
          i(!1),
          x.refetch(),
          r && t());
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
              (0, X.jsx)(w, {
                type: `text`,
                label: `Account ID or Steam ID`,
                description: `Accepts either the 32-bit account id or the 64-bit steam id`,
                onChange: (e) => c(e.currentTarget.value),
                value: s,
              }),
              v &&
                (0, X.jsx)(`div`, {
                  className: void 0,
                  children: `That is not a valid account id or steam id.`,
                }),
              _ != 0 && (0, X.jsx)(Fn, { nAccountID: _ }),
              _ != 0 &&
                !x.isLoading &&
                (0, X.jsxs)(X.Fragment, {
                  children: [
                    (0, X.jsx)(w, {
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
                    (0, X.jsx)(w, {
                      type: `text`,
                      label: `Email override (optional)`,
                      onChange: (e) => f(e.currentTarget.value.trim()),
                      value: d,
                    }),
                    (0, X.jsx)(E, {
                      controlled: !0,
                      checked: p,
                      onChange: h,
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
            string: D(`#Saving`),
          }),
        x.isLoading &&
          (0, X.jsx)(B, {
            size: `small`,
            position: `center`,
            string: D(`#Loading`),
          }),
      ],
    })
  );
}
function Fn(e) {
  let { nAccountID: t } = e,
    [n, r] = mt(t);
  if (r)
    return (0, X.jsx)(B, {
      size: `small`,
      position: `center`,
      string: D(`#Loading`),
    });
  if (!n)
    return (0, X.jsx)(`div`, {
      className: void 0,
      children: `We could not find an account for ${t}.`,
    });
  let i = F.InitFromAccountID(t, m.EUNIVERSE).ConvertTo64BitString();
  return (0, X.jsxs)(`div`, {
    className: bn,
    children: [
      (0, X.jsx)(`img`, {
        className: xn,
        src: n.avatar_url?.replace(/\.jpg$/, `_medium.jpg`),
      }),
      (0, X.jsxs)(`div`, {
        children: [
          (0, X.jsx)(`div`, { className: Sn, children: n.persona_name }),
          (0, X.jsx)(`a`, {
            href: `${m.SUPPORT_BASE_URL}account/overview/${i}`,
            target: `_blank`,
            rel: `noopener noreferrer`,
            children: `Account ${t} / SteamID ${i}`,
          }),
        ],
      }),
    ],
  });
}
function In(e) {
  let {
    rgPartners: t,
    bLoading: n,
    bFailed: r,
    strPartnerID: i,
    SetPartnerID: a,
  } = e;
  return n
    ? (0, X.jsx)(B, {
        size: `small`,
        position: `center`,
        string: `Looking up partner membership`,
      })
    : r
      ? (0, X.jsx)(`div`, {
          className: wn,
          children: `We could not look up partner membership, enter the partner id above.`,
        })
      : !t || t.length == 0
        ? (0, X.jsx)(`div`, {
            className: wn,
            children: `This account is not a member of any partner.`,
          })
        : (0, X.jsxs)(`div`, {
            className: Cn,
            children: [
              (0, X.jsx)(`div`, {
                className: wn,
                children: `Member of, click to use:`,
              }),
              t.map((e) =>
                (0, X.jsxs)(
                  `a`,
                  {
                    href: `#`,
                    className: g(Tn, e.partnerid.toString() == i ? En : ``),
                    onClick: (t) => {
                      (t.preventDefault(), a(e.partnerid.toString()));
                    },
                    children: [e.partner_name, ` (`, e.partnerid, `)`],
                  },
                  e.partnerid,
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
  return (0, X.jsxs)(k, {
    strTitle: `Invite Users`,
    bOKDisabled: !r || r.length == 0 || l != null,
    strCancelButtonText: l === null ? `Cancel` : `Close`,
    onOK: async () => {
      o(!0);
      let e = await Bn(n, r, !1);
      (e?.success == 1
        ? (u(e.rgInvitedAccounts.length), f(e.rgSkippedAccounts.length))
        : c(`We hit error during invite, check console: ` + e?.msg),
        o(!1));
    },
    onCancel: () => {
      (u(null), f(null), o(!1), i(null), t());
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
          string: D(`#Saving`),
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
          (e.preventDefault(), e.stopPropagation());
          let t = [];
          (t.push([`nAccountID`, `nPartnerID`, `strEmailOverride`]),
            t.push([`388445686`, `1`, `adils@valvesoftware.com`]),
            U.WriteCSVToFile(t, `invite_template.csv`));
        },
        children: `Download Template Example`,
      }),
      (0, X.jsx)(`br`, {}),
      (0, X.jsx)(`br`, {}),
      (0, X.jsx)(T, {
        children: (0, X.jsxs)(`label`, {
          className: yn,
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
                    (r.data.forEach((t) => {
                      if (t.nAccountID) {
                        let n = { nAccountID: Number.parseInt(t.nAccountID) };
                        (t.nPartnerID &&
                          (n.nPartnerID = Number.parseInt(t.nPartnerID)),
                          t.strEmailOverride &&
                            (n.strEmailOverride = t.strEmailOverride),
                          e.push(n));
                      }
                    }),
                      t(e));
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
    s = t.map((e) => (e.bAllowRegistrationIfFull ? `1` : `0`)).join(`,`),
    c = new FormData();
  (c.append(`sessionid`, o()),
    c.append(`gid`, e),
    c.append(`accounts`, r),
    c.append(`partnerids`, i),
    c.append(`emailoverride`, a),
    c.append(`allowregistrationiffull`, s),
    c.append(`forceupdate`, n ? `1` : `0`));
  let l = `${m.PARTNER_BASE_URL}/meetsteam/ajaxinviteusers`;
  try {
    let e = await Y.default.post(l, c, { withCredentials: !0 });
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
var Vn = a(ye());
function Hn(e) {
  let t = On(),
    n = K.useContext(Wn),
    r = P(Gn(n, t, e));
  return r.isLoading ? null : r.data;
}
function Un(e) {
  let t = On(),
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
        let n = r.Init(Ze);
        (n.Body().set_gids([...t]), n.Body().set_type(6));
        let i = await Ye.GetMultipleUserActionData(e, n);
        if (!i.BSuccess())
          throw `Failed to call GetMultipleUserActionData with details: ${i.GetErrorMessage()}`;
        let a = new Map();
        return (
          i
            .Body()
            .entries()
            .forEach((e) => {
              try {
                let t = JSON.parse(e.jsondata());
                (`steamid` in t && t.steamid) ||
                  ((t.steamid = e.steamid()),
                  (t.accountid = new F(t.steamid).GetAccountID()));
                let n = e.gid();
                return (a.has(n) ? a.get(n).push(t) : a.set(n, [t]), [t]);
              } catch {
                throw `Failed to parse GetMultipleUserActionData with details: ${e.steamid()}`;
              }
            }),
          t.map((e) => a.get(e) ?? null)
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
    i = P(Qn(r, n, e, t));
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
        let n = r.Init(Bt);
        (n.Body().set_accountids(t.map((e) => e.accountID)),
          n.Body().set_partnerids(t.map((e) => e.partnerID)));
        let i = await J.GetBatchPartnerEmailAndName(e, n);
        if (!i.BSuccess())
          throw `Failed to call GetBatchPartnerEmailAndName with details: ${i.GetErrorMessage()}`;
        let a = new Map();
        return (
          i
            .Body()
            .info()
            .forEach((e) => {
              a.set(`` + e.accountid() + `_` + e.partnerid(), e.toObject());
            }),
          t.map((e) => a.get(`` + e.accountID + `_` + e.partnerID) ?? null)
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
          (e.preventDefault(), e.stopPropagation(), r());
        },
        children: `Analyse Top Partner Coverage`,
      }),
      (0, X.jsx)(R, {
        active: n,
        children: (0, X.jsx)(C, {
          children: (0, X.jsx)(k, {
            closeModal: i,
            bAllowFullSize: !0,
            bDisableBackgroundDismiss: !0,
            children:
              a == null
                ? (0, X.jsx)(sr, { rgEventGIDs: t, fnSelectedEvents: o })
                : (0, X.jsxs)(X.Fragment, {
                    children: [
                      (0, X.jsx)(or, { rgGidMeetSteamEvents: a }),
                      (0, X.jsx)(T, {
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
    r = bt(n),
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
      (0, X.jsx)(j, { children: `Partner Analysis` }),
      a
        ? (0, X.jsxs)(C, {
            children: [
              (0, X.jsx)(T, {
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
              (0, X.jsx)(T, {
                id: `download-csv`,
                onClick: s,
                style: { width: `120px` },
                children: `Download CSV`,
              }),
            ],
          })
        : (0, X.jsx)(B, { string: D(`#Loading`), position: `center` }),
    ],
  });
}
function sr(e) {
  let { rgEventGIDs: t, fnSelectedEvents: n } = e,
    [r, i] = (0, K.useState)([]),
    { bShowArchived: a, setShowArchived: o } = vn(),
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
          (0, X.jsx)(j, { children: `Choose Events` }),
          l.map((e) =>
            (0, X.jsx)(
              cr,
              { gidClanEvent: e.GID, rgSelected: r, fnSetSelected: i },
              e.GID,
            ),
          ),
          (0, X.jsx)(T, {
            disabled: r.length == 0,
            onClick: () => n(r),
            children: `Continue`,
          }),
        ],
      });
}
function cr(e) {
  let { gidClanEvent: t, rgSelected: n, fnSetSelected: r } = e,
    i = De(t).GetNameWithFallback(0);
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
    v(`partners_to_verify`, `application_config`),
  );
  return e;
}
var ur = `_8ooyF9fBMl4-`,
  dr = `x9OVF3IVNDY-`;
function fr(e) {
  let { hideModal: t, gid: n } = e,
    r = Hn(n),
    i = N(),
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
  return (0, X.jsxs)(k, {
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
          string: D(`#Loading`),
        }),
      r &&
        (0, X.jsxs)(X.Fragment, {
          children: [
            (0, X.jsxs)(`div`, {
              children: [`There are `, a, ` invitation/registration records.`],
            }),
            o > 0 &&
              (0, X.jsxs)(T, {
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
    [n] = vt(t.partner_id);
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
    c = Yt(o, n, i?.group_id),
    [l, u] = (0, K.useMemo)(() => {
      let e = c?.data?.filter((e) => e.session_id == a.id),
        t = new Map(),
        n = new Map();
      return (
        e?.forEach((e) => {
          let r = new F(e.steamid).GetAccountID();
          if ((t.set(r, e), e.jsondata)) {
            let t = JSON.parse(e.jsondata);
            t.pre_event_partner_questions &&
              n.set(r, t.pre_event_partner_questions);
          }
        }),
        [t, n]
      );
    }, [a, c]),
    d = s?.filter((e) => l.has(new F(e.steamid).GetAccountID()));
  return (0, X.jsxs)(k, {
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
                    (0, X.jsx)(A, {
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
              let t = new F(e.steamid).GetAccountID(),
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
  (e.ask_registration_question && s.push(`Pre Reg Answer`),
    o.push(s),
    r.forEach((t) => {
      let n = [],
        r = t.partner_id ? G(t.partner_id) : void 0;
      (n.push(`` + t.steamid),
        n.push(t.name),
        n.push(t.invited ? `YES` : ``),
        n.push(r ? `${r?.name} (${t.partner_id})` : ``),
        n.push(t.game ? `Game: ${t.game}` : ``),
        n.push(t.email_override),
        n.push(`` + (t.guests_registered ? t.guests_registered - 1 : 0)));
      let s = new F(t.steamid);
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
        (n.push(`(guest)`), n.push(t.guest_names[e]), o.push(n));
      }
    }));
  let c =
    `meetsteam_${n}_${re(t.rtime_start)}_at_${me(t.rtime_start)}.csv`.replace(
      /[ <>:"/\\|?*\x00-\x1F]/g,
      `_`,
    );
  U.WriteCSVToFile(o, c);
}
function gr(e, t) {
  let n = `registration_emailed_${e.group_id}_${e.session_id}`,
    r = null;
  return (n in t && (r = t[n]), r);
}
function _r(e) {
  let { inviteInfo: t, regInfo: n, group: r, preRegQuestions: i } = e,
    [a] = vt(t.partner_id),
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
      (0, X.jsx)(`td`, { children: o ? re(o) : `` }),
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
  (n.append(`sessionid`, o()), n.append(`gid`, t));
  let r = `${m.PARTNER_BASE_URL}/meetsteam/ajaxsendinviteemails`;
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
          (e.preventDefault(), e.stopPropagation(), r());
        },
        children: `Show Registration Across Events`,
      }),
      (0, X.jsx)(R, {
        active: n,
        children: (0, X.jsx)(C, {
          children: (0, X.jsx)(k, {
            closeModal: i,
            bAllowFullSize: !0,
            bDisableBackgroundDismiss: !0,
            children:
              a == null
                ? (0, X.jsx)(sr, { rgEventGIDs: t, fnSelectedEvents: o })
                : (0, X.jsxs)(X.Fragment, {
                    children: [
                      (0, X.jsx)(Sr, { rgGidMeetSteamEvents: a }),
                      (0, X.jsx)(T, {
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
    n = ft(),
    { bIsLoading: r, events: i } = I(e),
    { data: a } = An(e),
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
                `${t.localized_session_title[0]}@${pe(n.rtime_start)} ${me(n.rtime_start)}`,
              );
            });
          });
        }),
        a.forEach((e) => {
          e.rgRegistrations.forEach((t) => {
            let n = new F(t.steamid).GetAccountID(),
              r =
                s.get(`${e.gid}_${t.group_id}_${t.session_id}`) ||
                `${t.group_id}:${t.session_id}`;
            o.has(n) ? o.set(n, o.get(n) + `,${r}`) : o.set(n, r);
          });
        }),
        [Array.from(n), e, o]
      );
    }, [t, r, a, i]);
  return ot(o)
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
    o = bt(r),
    s = (0, K.useMemo)(() => {
      if (!o || !n || !i || !a) return null;
      let e = new Map();
      i.forEach((t) => e.set(t.id, t));
      let t = [];
      return (
        n.forEach((n) => {
          let r = G(n.partner_id),
            i = ct(n.partner_id);
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
                      let n = new F(t.steamid);
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
    ? (0, X.jsx)(B, { string: D(`#Loading`) })
    : (0, X.jsxs)(X.Fragment, {
        children: [
          (0, X.jsx)(j, { children: `Registations` }),
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
            : (0, X.jsx)(B, { string: D(`#Loading`), position: `center` }),
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
  return (0, X.jsx)(T, {
    id: `download-csv`,
    onClick: () =>
      ut(
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
    [n, r] = wt(`search`, ``),
    [i, a] = (0, K.useState)(() => n || ``),
    o = (0, K.useCallback)(
      (e) => {
        (a(e), r(e || void 0, !0));
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
    (t > a && r.push({ strText: e.slice(a, t), bMatch: !1 }),
      r.push({ strText: e.slice(t, t + n.length), bMatch: !0 }),
      (a = t + n.length));
  return (a < e.length && r.push({ strText: e.slice(a), bMatch: !1 }), r);
}
function Ar(e) {
  let { text: t } = e,
    { strSearch: n } = Dr(),
    r = (0, K.useMemo)(() => kr(t, n), [t, n]);
  return (0, X.jsx)(X.Fragment, {
    children: r.map((e, t) =>
      e.bMatch
        ? (0, X.jsx)(`span`, { className: cn, children: e.strText }, t)
        : (0, X.jsx)(K.Fragment, { children: e.strText }, t),
    ),
  });
}
function jr(e) {
  let t = F.InitFromClanID(Fe(), m.EUNIVERSE),
    n = Ur(),
    { bShowArchived: r, setShowArchived: i } = vn(),
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
        n = Array.from(et(t, (e) => at(new Date(e.startTime * 1e3))));
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
                  href: `${m.COMMUNITY_BASE_URL}gid/${t.ConvertTo64BitString()}/partnerevents/`,
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
              className: sn,
              children: [
                (0, X.jsx)(w, {
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
                          (e.preventDefault(), o(``));
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
      (n.push(O.GetWithFallback(e.localized_session_title, 0)),
        n.push(O.GetWithFallback(e.localized_session_description, 0)),
        n.push(O.GetWithFallback(e.localized_intended_audience, 0)),
        n.push(O.GetWithFallback(e.localized_sesssion_faq, 0)));
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
      (0, X.jsx)(`div`, { className: fn, children: i }),
      (0, X.jsx)(`div`, {
        className: pn,
        children: r.map((e) => (0, X.jsx)(Pr, { oEvent: e }, e.GID)),
      }),
    ],
  });
}
function Pr(t) {
  let { oEvent: n } = t,
    r = n.GID,
    i = F.InitFromClanID(Fe(), m.EUNIVERSE),
    a = Je(Fe(), r),
    o = a.isSuccess ? a.data : null,
    s = n.GetNameWithFallback(0),
    c = (0, K.useMemo)(() => {
      let e = [];
      return (
        n.jsondata.meet_steam_groups?.forEach((t) => {
          t.sessions.forEach((n, r) => {
            e.push({ group: t, session: n, firstSession: r == 0 });
          });
        }),
        e
      );
    }, [n.jsondata.meet_steam_groups]);
  return (0, X.jsxs)(`div`, {
    className: en,
    children: [
      (0, X.jsxs)(`div`, {
        className: tn,
        children: [
          (0, X.jsxs)(`div`, {
            className: an,
            children: [
              (0, X.jsx)(`div`, {
                className: nn,
                children: (0, X.jsx)(Ar, { text: s }),
              }),
              (0, X.jsx)(`div`, { className: rn, children: re(n?.startTime) }),
            ],
          }),
          (0, X.jsxs)(`div`, {
            className: on,
            children: [
              (0, X.jsx)(`div`, {
                children: (0, X.jsx)(`a`, {
                  href: `${m.COMMUNITY_BASE_URL}gid/${i.ConvertTo64BitString()}/partnerevents/edit/${r}`,
                  children: `Edit`,
                }),
              }),
              (0, X.jsxs)(`div`, {
                children: [
                  `\xA0|\xA0`,
                  (0, X.jsx)(`a`, {
                    href: `${m.STORE_BASE_URL}meetsteam/${r}`,
                    children: `View`,
                  }),
                ],
              }),
              !!(
                n.BIsUnlistedEvent() && n.jsondata.meet_steam_groups?.length > 0
              ) &&
                (0, X.jsxs)(X.Fragment, {
                  children: [
                    (0, X.jsx)(zr, { gid: r }),
                    `\xA0|\xA0`,
                    (0, X.jsx)(`a`, {
                      href: `${m.STORE_BASE_URL}meetsteam/attendance?gid=${r}&accountid=${e.accountid}`,
                      children: `QR Page`,
                    }),
                    `\xA0|\xA0`,
                    (0, X.jsx)(`a`, {
                      href: `${m.STORE_BASE_URL}meetsteam/attendeelist?gid=${r}`,
                      children: `Attendance List`,
                    }),
                    (0, X.jsx)(Fr, { gid: r }),
                    (0, X.jsx)(Lr, { gid: r }),
                    (0, X.jsx)(Ir, { gid: r }),
                    (0, X.jsx)(Rr, { gid: r }),
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
                    c.length > 0
                      ? (0, X.jsx)(
                          Hr,
                          {
                            gid: r,
                            group: c[0].group,
                            session: c[0].session,
                            rgAvailability: o,
                          },
                          c[0].session.id,
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
                          n?.BIsUnlistedEvent() &&
                          n.jsondata.meet_steam_groups?.length > 0
                        ) &&
                        (0, X.jsx)(`div`, {
                          children: `Invite Disabled. Event need to publish into Unlisted State`,
                        }),
                    }),
                  ],
                }),
                c
                  .filter((e, t) => t > 0)
                  .map((e) =>
                    (0, X.jsx)(
                      `tr`,
                      {
                        children: (0, X.jsx)(Hr, {
                          group: e.group,
                          gid: r,
                          session: e.session,
                          rgAvailability: o,
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
    n = hn();
  return Array.from(n.keys()).includes(t)
    ? (0, X.jsxs)(X.Fragment, {
        children: [
          `\xA0|\xA0`,
          (0, X.jsx)(`a`, {
            href: `${m.PARTNER_BASE_URL}meetsteam/survey/${t}`,
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
          (e.preventDefault(), e.stopPropagation(), r());
        },
        children: [
          `Invite via CSV`,
          (0, X.jsx)(A, {
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
          (e.preventDefault(), e.stopPropagation(), r());
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
          (e.preventDefault(), e.stopPropagation(), r());
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
          (e.preventDefault(), e.stopPropagation(), i(!0));
          let r = await Br(n, t);
          o(r);
        },
        children: `Email Self`,
      }),
      (0, X.jsx)(R, {
        active: r,
        children: (0, X.jsxs)(k, {
          bAlertDialog: !0,
          strTitle: `Test Emails`,
          closeModal: () => {
            (i(!1), o(null));
          },
          onOK: () => {},
          children: [
            (0, X.jsx)(`div`, {
              children: `This will temporarily register and then de-register you from the event as a way to test the email sending code.`,
            }),
            a == null && (0, X.jsx)(B, { string: D(`#Loading`) }),
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
  let n = r.Init(Ft),
    i = F.InitFromClanID(Fe(), m.EUNIVERSE);
  (n.Body().set_clan_event_gid(t),
    n.Body().set_steamid(i.ConvertTo64BitString()));
  let a = await J.TestFireEmails(e, n);
  return (console.log(`test fire`, a), a.GetEResult());
}
function Vr(e, t) {
  let n = Qt.default.unix(e),
    r = Qt.default.unix(e).tz(t),
    i = r.utcOffset() - n.utcOffset(),
    a = new Date((e + i * 60) * 1e3),
    o = new Date();
  return `${a.getFullYear() == o.getFullYear() ? ue(a, !1, !1) : oe(a, !1, !1)} ${ne(e + i * 60)} ${r.format(`z`)}`;
}
function Hr(e) {
  let {
      gid: t,
      group: n,
      rgAvailability: r,
      session: i,
      firstSession: a = !0,
    } = e,
    o = O.GetWithFallback(n?.localized_session_title, 0),
    s = O.GetWithFallback(n?.localized_session_description, 0),
    c = O.GetWithFallback(n?.localized_intended_audience, 0),
    l = r?.find((e) => e.group_id == n.group_id && e.session_id == i.id),
    [u, d, f] = S(),
    p = Yt(W(), t, n?.group_id),
    m = Math.min((l?.guest_count / i.max_capacity) * 100, 100),
    h = l?.guest_count > 0 ? `${m}%` : `0%`,
    _ = l?.guest_count >= i.max_capacity,
    v = Intl.DateTimeFormat().resolvedOptions().timeZone,
    ee =
      i.location_type === `in_person`
        ? (i.in_person_time_zone ?? `America/Los_Angeles`)
        : v;
  return (0, X.jsxs)(X.Fragment, {
    children: [
      a && n
        ? (0, X.jsxs)(`td`, {
            children: [
              (0, X.jsx)(Ar, { text: o }),
              (0, X.jsx)(A, { tooltip: s }),
              !!c &&
                (0, X.jsx)(`div`, { children: (0, X.jsx)(Ar, { text: c }) }),
            ],
          })
        : (0, X.jsx)(`td`, {}),
      (0, X.jsx)(`td`, {
        children: (0, X.jsx)(`span`, { children: Vr(i.rtime_start, ee) }),
      }),
      (0, X.jsx)(`td`, { children: ae(i.rtime_end - i.rtime_start) }),
      (0, X.jsxs)(`td`, {
        children: [
          l?.guest_count || 0,
          ` / `,
          i.max_capacity,
          (0, X.jsx)(`br`, {}),
          (0, X.jsx)(`div`, {
            className: ln,
            children: (0, X.jsx)(`div`, {
              className: g(un, _ ? dn : ``),
              style: { width: h },
            }),
          }),
        ],
      }),
      (0, X.jsx)(`td`, {
        children:
          p.isSuccess &&
          (0, X.jsx)(X.Fragment, {
            children: p.data?.filter((e) => e.session_id == i.id).length,
          }),
      }),
      (0, X.jsx)(`td`, {
        children:
          p.isSuccess &&
          (0, X.jsx)(X.Fragment, {
            children: p.data
              ?.filter((e) => e.session_id == i.id)
              .reduce((e, t) => e + t.guests_registered - 1, 0),
          }),
      }),
      (0, X.jsxs)(`td`, {
        children: [
          (0, X.jsx)(T, { onClick: d, children: `Details` }),
          (0, X.jsx)(C, {
            children: (0, X.jsx)(R, {
              active: u,
              children: (0, X.jsx)(mr, {
                gid: t,
                title: o,
                group: n,
                session: i,
                hideModal: f,
              }),
            }),
          }),
        ],
      }),
    ],
  });
}
function Ur() {
  let [e] = (0, K.useState)(() => v(`event_gids`, `application_config`));
  return e;
}
function Wr(e) {
  let { rgEvents: t } = Wt(),
    n = $r(),
    [r, i] = (0, K.useState)(``),
    a = m.PARTNER_BASE_URL + `meetsteam`,
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
    className: $t,
    children: [
      (0, X.jsx)(w, {
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
  return (0, X.jsx)(gt, {
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
    i = ft(),
    { bComplete: a, nCount: o } = Zt(r);
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
  let { conf: t, rgSurveyInterest: r } = e,
    i = N();
  return (0, X.jsxs)(`div`, {
    children: [
      (0, X.jsx)(T, {
        onClick: () => {
          let e = [];
          (e.push([
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
            r.forEach((t) => {
              let r = [],
                a = new F(t.steamid);
              r.push(`` + a.GetAccountID());
              let o = ze(a.GetAccountID()),
                s = t.results.partner_id;
              r.push(`` + s);
              let c = lt(s).map((e) => pt(i, e)?.displayName || `` + e);
              r.push(c.join(`|`));
              let l = t.results.email_override || ``;
              (r.push(`` + l),
                r.push(o?.m_strPlayerName ? o.m_strPlayerName : ``));
              let u = Xn(a.GetAccountID(), s);
              if (
                (r.push(u ? u.realname : ``),
                r.push(t.results.have_you_met_steam ? `yes` : `no`),
                t.results.submit_time)
              ) {
                let e = t.results.submit_time,
                  n = new Date(e * 1e3)
                    .toISOString()
                    .replace(`T`, ` `)
                    .split(`.`)[0];
                r.push(n);
              } else r.push(``);
              (r.push(`` + t.results.attending?.length),
                r.push(t.results.country_code),
                r.push(
                  t.results.preferred_language
                    ? n(t.results.preferred_language)
                    : ``,
                ));
              let d = G(s);
              r.push(d ? d.name : ``);
              let f = Jt(i, s);
              (f
                ? (r.push(`` + Kr(f.strGrossUSD)),
                  r.push(`` + f.nBestAppID),
                  r.push(Ie.Get().GetApp(f.nBestAppID)?.GetName()),
                  r.push(`` + f.nBestAppLongTermSalesRank))
                : (r.push(``), r.push(``), r.push(``), r.push(``)),
                e.push(r));
            }));
          let a = t.name.replace(` `, `_`) + `_conference_interest.csv`;
          U.WriteCSVToFile(e, a);
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
            children: r.map((e) =>
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
  let { partnerID: t, registration: r } = e;
  return (0, X.jsxs)(`tr`, {
    children: [
      (0, X.jsx)(`td`, { children: (0, X.jsx)(Xr, { ...e }) }),
      (0, X.jsx)(`td`, { children: r.have_you_met_steam ? `` : `NO` }),
      (0, X.jsx)(Zr, { nPartnerID: t }),
      (0, X.jsx)(`td`, { children: r.attending.length }),
      (0, X.jsx)(`td`, {
        children:
          r.english_not_good && r.preferred_language
            ? n(r.preferred_language)
            : ``,
      }),
      (0, X.jsx)(`td`, { children: r.country_code }),
      (0, X.jsx)(`td`, { children: re(r.submit_time) }),
    ],
  });
}
function Xr(e) {
  let { strsteamid: t, partnerID: n, registration: r } = e,
    i = Le(t),
    a = Jn(new F(t).GetAccountID(), n),
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
    [n] = vt(t),
    r = qt(t),
    i = dt(t),
    a = N();
  return (0, X.jsxs)(X.Fragment, {
    children: [
      (0, X.jsx)(`td`, { children: n ? n?.name + ` (${t})` : t }),
      (0, X.jsx)(`td`, {
        children: i?.map((e) => pt(a, e)?.displayName || `` + e).join(`,`),
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
    n = Se(t),
    { data: r } = de(n);
  return (0, X.jsx)(fe, {
    id: n,
    children: (0, X.jsx)(`span`, { children: r?.name || t }),
  });
}
function $r() {
  let [e] = (0, K.useState)(() => v(`interest_results`, `application_config`));
  return (0, K.useMemo)(
    () => e.map((e) => ((e.results = JSON.parse(e.jsondata)), e)),
    [e],
  );
}
function ei(e) {
  let { rgSurveyInterest: t } = e,
    r = N();
  ft();
  let i = (0, K.useMemo)(
    () => t.filter((e) => e.results?.suggestion?.trim().length > 0),
    [t],
  );
  return (0, X.jsxs)(gt, {
    title: `Alternative Suggestions (${i.length})`,
    bStartMinimized: !0,
    children: [
      (0, X.jsx)(T, {
        onClick: () => {
          let e = [];
          (e.push([
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
            i.forEach((t) => {
              let i = [],
                a = new F(t.steamid);
              i.push(`` + a.GetAccountID());
              let o = ze(a.GetAccountID()),
                s = t.results.partner_id;
              i.push(`` + s);
              let c = t.results.email_override || ``;
              (i.push(`` + c),
                i.push(o?.m_strPlayerName ? o.m_strPlayerName : ``));
              let l = Xn(a.GetAccountID(), s);
              (i.push(l ? l.realname : ``),
                i.push(`` + t.results.attending?.length),
                i.push(t.results.country_code),
                i.push(
                  t.results.preferred_language
                    ? n(t.results.preferred_language)
                    : ``,
                ));
              let u = G(s);
              i.push(u ? u.name : ``);
              let d = Jt(r, s);
              (d
                ? (i.push(`` + Kr(d.strGrossUSD)),
                  i.push(`` + d.nBestAppID),
                  i.push(`` + d.nBestAppLongTermSalesRank))
                : (i.push(``), i.push(``), i.push(``)),
                i.push(t.results.suggestion),
                e.push(i));
            }),
            U.WriteCSVToFile(e, `suggestsion.csv`));
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
            children: i.map((e) =>
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
    new F(t.steamid),
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
  return P(ai(t, e));
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
        let t = `${m.PARTNER_BASE_URL}meetsteam/ajaxbatchgetuseremails`,
          n = { sessionid: o(), strAccountIDs: e.join(`,`) },
          r = await Y.default.get(t, { params: n, withCredentials: !0 });
        if (!r || r?.status != 200 || r?.data?.success != 1)
          throw `Failed to load app to user email and langs: ${z(r).strErrorMsg}`;
        let i = new Map();
        return (
          r.data.users.forEach((e) => {
            let t = new F(e.steamid);
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
    n = ft(),
    r = Xt(t),
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
          (0, X.jsxs)(T, {
            onClick: () => {
              let e = [];
              (e.push([`User Name`, `account id`, `Email`, `Event Count`]),
                i.forEach((t) => {
                  let n = ze(t.accountid),
                    r = ri(t.accountid);
                  e.push([
                    n?.m_strPlayerName || ``,
                    `` + t.accountid,
                    r?.email_address || ``,
                    t.clan_event_gids?.length.toLocaleString(Oe()),
                  ]);
                }),
                U.WriteCSVToFile(e, `sale_operators.csv`));
            },
            children: [
              `CSV Export`,
              (0, X.jsx)(A, {
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
    : (0, X.jsx)(B, { string: D(`#Loading`), size: `medium` });
}
function li(e) {
  let { organizer: t } = e,
    n = (0, K.useMemo)(
      () =>
        F.InitFromAccountID(t.accountid, m.EUNIVERSE).ConvertTo64BitString(),
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
      (0, X.jsxs)(T, {
        onClick: i,
        children: [`See `, L(n.length), ` Events`],
      }),
      (0, X.jsx)(R, {
        active: r,
        children: (0, X.jsx)(k, {
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
    n = De(t);
  return n
    ? (0, X.jsxs)(`a`, {
        href: `${m.COMMUNITY_BASE_URL}gid/${n.clanSteamID.ConvertTo64BitString()}/partnerevents/edit/${t}`,
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
        contents: (0, X.jsx)(C, { children: (0, X.jsx)(mn, {}) }),
        onClick: t,
      },
    ];
  return (0, X.jsx)(_n, {
    children: (0, X.jsx)(Er, {
      children: (0, X.jsxs)(`div`, {
        className: H,
        children: [
          (0, X.jsxs)(`div`, {
            className: He,
            children: [
              `Meet Steam Admin Dashboard `,
              c(`current_year`, `application_config`),
            ],
          }),
          (0, X.jsx)(`hr`, {}),
          (0, X.jsx)(ke, { tabs: n }),
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
    { data: i } = Re(e.accountid),
    [a, s] = (0, K.useState)(!1),
    [c, l] = (0, K.useState)(!1),
    [u, d] = (0, K.useState)(!1),
    [f, p] = (0, K.useState)(() => JSON.parse(JSON.stringify(r)));
  return n
    ? !i || i.m_bPlayerNamePending
      ? (0, X.jsx)(B, {
          size: `medium`,
          position: `center`,
          string: D(`#Loading`),
        })
      : (0, X.jsxs)(`div`, {
          className: g(H, pi),
          children: [
            (0, X.jsx)(`div`, {
              className: He,
              children: D(`#MeetSteam_MainTitle`),
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
                          se(
                            `#MeetSteam_Intro`,
                            i.m_strPlayerName,
                            (0, X.jsx)(`br`, {}),
                          ),
                        ],
                      }),
                      (0, X.jsx)(`p`, {
                        className: Ke,
                        children: D(`#MeetSteam_Desc1`),
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
                    className: g(V, Ge),
                    children: [
                      (0, X.jsx)(ce, {
                        onClick: async () => {
                          (l(!0), s(!1), d(!1));
                          let e = `${m.PARTNER_BASE_URL}meetsteam/ajaxregisterinterest`,
                            t = new FormData();
                          (t.append(`sessionid`, o()),
                            t.append(`registrationJson`, JSON.stringify(f)));
                          try {
                            let n = await Y.default.post(e, t, {
                              withCredentials: !0,
                            });
                            n.data.success == 1
                              ? d(!0)
                              : (console.error(
                                  `MeetSteamLanding failed ` + n.data.success,
                                ),
                                s(!0));
                          } catch (e) {
                            console.error(`MeetSteamLanding failed caught`, e);
                          }
                          l(!1);
                        },
                        children: D(`#Button_Submit`),
                      }),
                      c &&
                        (0, X.jsx)(B, {
                          size: `medium`,
                          position: `center`,
                          string: D(`#Saving`),
                        }),
                      u && (0, X.jsx)(`div`, { children: D(`#Button_Saved`) }),
                      a &&
                        (0, X.jsx)(`div`, {
                          className: `wizbFzhGtBc-`,
                          children: D(`#Error_ErrorCommunicatingWithNetwork`),
                        }),
                    ],
                  }),
                ],
              }),
            }),
          ],
        })
    : (0, X.jsx)(`div`, { className: pi, children: D(`#MeetSteam_closed`) });
}
function bi(e) {
  let { oRegistration: t, fnSetRegistration: n } = e,
    { rgEvents: r, rgOldEvents: i, selectConference: a } = Wt();
  return (0, X.jsxs)(X.Fragment, {
    children: [
      (0, X.jsx)(`h1`, { children: D(`#MeetSteam_Events_Interest`) }),
      (0, X.jsx)(`p`, {
        children: se(
          `#MeetSteam_Events_title`,
          v(`meet_steam_year`, `application_config`) || `2025`,
        ),
      }),
      (0, X.jsxs)(`p`, {
        children: [
          (0, X.jsx)(`span`, { className: mi, children: `*` }),
          ` `,
          se(`#MeetSteam_Events_desc`),
        ],
      }),
      !!a &&
        (0, X.jsxs)(X.Fragment, {
          children: [
            (0, X.jsx)(`hr`, {}),
            (0, X.jsx)(`p`, { children: D(`#MeetSteam_ConferenceOrg`) }),
            (0, X.jsx)(xi, { ...e, rgConference: [a] }),
            (0, X.jsx)(`br`, {}),
            (0, X.jsx)(`br`, {}),
            (0, X.jsx)(`hr`, {}),
            (0, X.jsx)(`h2`, { children: D(`#MeetSteam_OtherConference`) }),
          ],
        }),
      (0, X.jsx)(xi, { ...e, rgConference: r }),
      (0, X.jsx)(`br`, {}),
      (0, X.jsx)(w, {
        type: `text`,
        value: t.suggestion || ``,
        onChange: (e) => n({ ...t, suggestion: e.currentTarget.value }),
        label: D(`#MeetSteam_others`),
      }),
      i?.length > 0 &&
        (0, X.jsx)(gt, {
          bStartMinimized: !0,
          title: D(`#MeetSteam_PastEvents`, i.length),
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
    tooltip: D(`#MeetSteam_attend_ttip`),
  });
}
function Ci(t) {
  let { oRegistration: n, fnSetRegistration: r } = t,
    i = Re(e.accountid),
    a = ki(n?.partner_id),
    [o, s] = (0, K.useState)(
      () => !!((n.email_override && n.email_override != a) || !a),
    ),
    [c, l, u] = _e(() => [
      !n.have_you_met_steam,
      !!n.english_not_good,
      n.preferred_language,
    ]);
  return i.data
    ? (0, X.jsxs)(`div`, {
        children: [
          (0, X.jsx)(`h1`, { children: D(`#MeetSteam_You`) }),
          (0, X.jsx)(`p`, { children: D(`#MeetSteam_You_Desc`) }),
          (0, X.jsx)(wi, {
            nPartnerID: n.partner_id,
            label: D(`#MeetSteam_You_Company`),
            setPartnerID: (e) => r({ ...n, partner_id: e }),
          }),
          (0, X.jsxs)(`div`, {
            className: hi,
            children: [
              (0, X.jsx)(`div`, {
                className: gi,
                children: (0, X.jsx)(w, {
                  type: `string`,
                  label: D(`#MeetSteam_You_Email`),
                  disabled: !o,
                  value: n.email_override || a || ``,
                  placeholder: D(`#MeetSteam_You_EmailMissing`),
                  mustBeEmail: !0,
                  onChange: (e) =>
                    r({ ...n, email_override: e.currentTarget.value }),
                }),
              }),
              !o &&
                (0, X.jsx)(E, {
                  checked: o,
                  onChange: s,
                  label: D(`#MeetSteam_You_Update`),
                  tooltip: D(`#MeetSteam_You_Update_ttip`),
                }),
            ],
          }),
          (0, X.jsx)(j, { children: D(`#MeetSteam_NeverMet`) }),
          (0, X.jsx)(E, {
            label: D(`#MeetSteam_NeverMetNo`),
            checked: c,
            onChange: (e) => r({ ...n, have_you_met_steam: !e }),
          }),
          (0, X.jsx)(j, { children: D(`#MeetSteam_CapabableEnglish`) }),
          (0, X.jsxs)(`div`, {
            className: vi,
            children: [
              (0, X.jsx)(le, {
                className: _i,
                checked: !l,
                onChange: (e) =>
                  e &&
                  r({
                    ...n,
                    english_not_good: void 0,
                    preferred_language: void 0,
                  }),
                label: D(`#MeetSteam_CapabableEnglish_Yes`),
              }),
              (0, X.jsx)(le, {
                className: _i,
                checked: l,
                onChange: (e) =>
                  e &&
                  r({
                    ...n,
                    english_not_good: !0,
                    preferred_language: x(m.LANGUAGE),
                  }),
                label: D(`#MeetSteam_CapabableEnglish_No`),
              }),
            ],
          }),
          l &&
            (0, X.jsxs)(X.Fragment, {
              children: [
                (0, X.jsx)(`br`, {}),
                (0, X.jsx)(j, { children: D(`#MeetSteam_LanguagePref`) }),
                (0, X.jsx)($e, {
                  selectedLang: u,
                  bAllowUnsetOption: !1,
                  strTooltip: D(`#MeetSteam_LanguagePref_ttip`),
                  fnOnLanguageChanged: (e) =>
                    r({ ...n, preferred_language: e }),
                }),
              ],
            }),
        ],
      })
    : (0, X.jsx)(B, {
        size: `medium`,
        position: `center`,
        string: D(`#Loading`),
      });
}
function wi(t) {
  let { nPartnerID: n, setPartnerID: r, label: i } = t,
    a = it(e.accountid);
  if (!a)
    return (0, X.jsx)(B, {
      size: `small`,
      position: `center`,
      string: D(`#Loading`),
    });
  if (a.length == 1) return null;
  let o = [];
  return (
    a.forEach((e) => o.push({ label: e?.partner_name, data: e.partnerid })),
    (0, X.jsx)(ie, {
      layout: `inline`,
      label: i,
      rgOptions: o,
      selectedOption: n,
      onChange: (e) => {
        r(e.data);
      },
    })
  );
}
function Ti() {
  let [e] = (0, K.useState)(() => v(`registration_open`, `application_config`));
  return e;
}
function Ei() {
  let [e] = (0, K.useState)(() => v(`user_reg`, `application_config`) || {});
  return e;
}
function Di() {
  let [e] = (0, K.useState)(
    () => v(`partner_user_email`, `application_config`) || ``,
  );
  return e;
}
function Oi() {
  let [e] = (0, K.useState)(() =>
    v(`primary_partner_id`, `application_config`),
  );
  return e;
}
function ki(t) {
  let n = Di(),
    r = Oi(),
    i = Jn(e.accountid, t == r ? null : t);
  return t == r ? n : i?.email;
}
var Ai = `LmRMNslicbg-`;
function ji(t) {
  let { data: n } = Re(e.accountid),
    r = Mi(),
    i = Ni(),
    [a, s] = (0, K.useState)(() => i || ``),
    { surveyGID: c } = ge(),
    [l, u] = (0, K.useState)(!1),
    [d, f] = (0, K.useState)(!1),
    [p, h] = (0, K.useState)(!1);
  return !n || n.m_bPlayerNamePending
    ? (0, X.jsx)(B, {
        size: `medium`,
        position: `center`,
        string: D(`#Loading`),
      })
    : (0, X.jsxs)(`div`, {
        className: g(H, Ai),
        children: [
          (0, X.jsx)(`div`, {
            className: He,
            children: D(`#MeetSteam_PostSurvey_Title`, r),
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
                      children: D(`#MeetSteam_PostSurvey_Question`),
                    }),
                    (0, X.jsx)(`textarea`, {
                      rows: 10,
                      onChange: (e) => s(e.currentTarget.value),
                      value: a,
                      autoFocus: !0,
                    }),
                  ],
                }),
                (0, X.jsxs)(`div`, {
                  className: g(V, Ge),
                  children: [
                    (0, X.jsx)(ce, {
                      onClick: async () => {
                        (f(!0), u(!1), h(!1));
                        let e = `${m.PARTNER_BASE_URL}meetsteam/ajaxsubmitsurvey/${c}`,
                          t = new FormData();
                        (t.append(`gid`, c), t.append(`sessionid`, o()));
                        let n = {
                          gid: c,
                          simple_response: a,
                          submit_time: Math.floor(new Date().getTime() / 1e3),
                        };
                        t.append(`surveyjson`, JSON.stringify(n));
                        try {
                          let n = await Y.default.post(e, t, {
                            withCredentials: !0,
                          });
                          n.data.success == 1
                            ? h(!0)
                            : (console.error(
                                `MeetSteamLanding failed ` + n.data.success,
                              ),
                              u(!0));
                        } catch (e) {
                          console.error(`MeetSteamLanding failed caught`, e);
                        }
                        f(!1);
                      },
                      children: D(`#Button_Submit`),
                    }),
                    d &&
                      (0, X.jsx)(B, {
                        size: `medium`,
                        position: `center`,
                        string: D(`#Saving`),
                      }),
                    p && (0, X.jsx)(`div`, { children: D(`#Button_Saved`) }),
                    l &&
                      (0, X.jsx)(`div`, {
                        className: `wizbFzhGtBc-`,
                        children: D(`#Error_ErrorCommunicatingWithNetwork`),
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
    () => v(`survey_event_name`, `application_config`) || ``,
  );
  return e;
}
function Ni() {
  let [e] = (0, K.useState)(() => v(`survey_data`, `application_config`) || ``);
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
            let t = new F(e.steamid);
            if (r.has(t.GetAccountID())) {
              let e = r.get(t.GetAccountID());
              return JSON.parse(e[0].jsondata).partner_id;
            }
            return null;
          })
          .filter(Boolean),
        n.map((e) => new F(e.steamid).GetAccountID()),
      ],
      [r, n],
    ),
    l = bt(s),
    u = _t(c);
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
            a = new F(t.steamid),
            o = { feedback: r.simple_response, accountid: a.GetAccountID() };
          if (n.has(a.GetAccountID())) {
            let t = n.get(a.GetAccountID()),
              r = JSON.parse(t[0].jsondata);
            ((o.partner_id = r.partner_id),
              (o.email = r.email_override),
              (o.name = r.name),
              (o.registrations = ``));
            let i = G(r.partner_id);
            (i && (o.partner_name = i.name),
              t.forEach((t) => {
                let n = e.get(t.gidEvent);
                if (n) {
                  let e = n.jsondata.meet_steam_groups.find(
                    (e) => e.group_id === t.group_id,
                  ).localized_session_title[0];
                  (o.registrations.length > 0 && (o.registrations += `|`),
                    (o.registrations += e));
                }
              }));
          } else {
            let e = ht(a.GetAccountID());
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
        Q.accessor(`feedback`, { header: `Feedback`, size: 500, cell: st }),
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
            (0, X.jsx)(T, {
              id: `download-csv`,
              onClick: () =>
                ut(
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
    : (0, X.jsx)(B, { string: D(`#Loading`) });
}
function Ii(e) {
  return e.getValue()?.length > 0
    ? (0, X.jsx)(tt, { text: e.getValue(), regExp: /\|/ })
    : ``;
}
function Li() {
  let e = Ri();
  return (0, K.useMemo)(() => {
    let t = new Map();
    return (
      e.forEach((e, n) => {
        e.forEach((e) => {
          let r = new F(e.steamid);
          (t.has(r.GetAccountID()) || t.set(r.GetAccountID(), []),
            (e.gidEvent = n),
            t.get(r.GetAccountID()).push(e));
        });
      }),
      t
    );
  }, [e]);
}
function Ri() {
  let [e] = (0, K.useState)(() => {
    let e = new Map(),
      t = v(`registration_by_gid`, `application_config`) || {};
    for (let n in t) {
      let r = t[n];
      e.set(n, r);
    }
    return e;
  });
  return e;
}
function zi() {
  let [e] = (0, K.useState)(() => v(`event_gids`, `application_config`) || []);
  return e;
}
function Bi() {
  let [e] = (0, K.useState)(
    () => v(`survey_results`, `application_config`) || [],
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
      Ee.Init();
    }, []),
    (0, X.jsx)(qe, {
      children: (0, X.jsx)(Te, {
        basename: we() + `meetsteam/`,
        children: (0, X.jsxs)(he, {
          children: [
            (0, X.jsx)(M, {
              exact: !0,
              path: Ce.DiagData(),
              render: (e) =>
                (0, X.jsx)(Be, { ...e, strConfigID: `application_config` }),
            }),
            (0, X.jsx)(M, {
              exact: !0,
              path: $.AdminDashboard(),
              component: fi,
            }),
            (0, X.jsx)(M, {
              exact: !0,
              path: $.YearlySurvery(`:year(\\d+)`),
              component: yi,
            }),
            (0, X.jsx)(M, {
              exact: !0,
              path: $.PostEventSurvey(`:surveyGID(\\d+)`),
              component: ji,
            }),
            (0, X.jsx)(M, {
              exact: !0,
              path: $.PostEventSurveyResults(`:surveyGID(\\d+)`),
              component: Pi,
            }),
            (0, X.jsx)(M, { component: Ve }),
          ],
        }),
      }),
    })
  );
}
export { $ as MeetSteamRoutes, Vi as default };
