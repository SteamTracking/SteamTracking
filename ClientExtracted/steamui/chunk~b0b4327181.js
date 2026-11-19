/* Third-party software licenses can be found at licenses.txt */
import {
  i as e,
  o as t,
  r as n,
  t as r,
} from "./chunk~f025431ab0.js?contenthash=C8f2gWku";
import {
  An as i,
  Bn as a,
  Di as o,
  F as s,
  Ga as c,
  Hn as l,
  Hr as u,
  Ia as d,
  Jr as f,
  Ka as p,
  Ki as m,
  Ma as h,
  Mr as g,
  Na as _,
  Pn as ee,
  Sa as v,
  Si as te,
  Un as ne,
  Vn as re,
  Xa as ie,
  _i as y,
  _n as ae,
  _t as b,
  ar as x,
  bi as S,
  cn as oe,
  eo as se,
  fi as C,
  ga as ce,
  gi as w,
  hi as T,
  ir as E,
  kr as le,
  mi as D,
  pa as ue,
  pn as O,
  qr as k,
  sr as de,
  tn as A,
  va as fe,
  vi as j,
  wt as pe,
  xi as M,
  yi as N,
  zn as me,
} from "./chunk~3126832f23.js?contenthash=Bx8rJGPC";
import {
  M as he,
  Ss as P,
  Vu as ge,
  ad as _e,
  au as ve,
  bs as ye,
  c as be,
  n as xe,
  o as Se,
  vs as Ce,
  ys as we,
} from "./chunk~6780060d19.js?contenthash=qoFfnAP9";
import { t as Te } from "./chunk~7f38fefeac.js?contenthash=B2NENpWg";
import {
  Cr as Ee,
  En as De,
  Ur as Oe,
  ur as ke,
  wr as F,
} from "./chunk~1fa4b8f2ff.js?contenthash=DQ8gxgDF";
import {
  Ct as Ae,
  Ot as je,
  f as Me,
  g as Ne,
  n as I,
  p as Pe,
} from "./chunk~fac4c69429.js?contenthash=CKwkyCQ9";
import {
  cr as L,
  dr as Fe,
  hr as Ie,
} from "./chunk~6b8ddcaac8.js?contenthash=BqRs3VIz";
import { n as Le } from "./chunk~008c00a198.js?contenthash=NNKy49Vx";
import {
  X as R,
  ct as Re,
  lt as ze,
  st as Be,
  ut as Ve,
} from "./chunk~cbbb6ae37c.js?contenthash=B4MrjhKD";
import { t as He } from "./chunk~9302435e81.js?contenthash=DpC9ZrAj";
import "./chunk~6efc40bd45.js?contenthash=CtXRYpRt";
import { t as Ue } from "./chunk~25a6634263.js?contenthash=Cuq2ajP3";
import { h as We, t as Ge } from "./chunk~ede3e357a2.js?contenthash=DGMGRaFx";
import {
  $ as Ke,
  C as qe,
  Q as Je,
  T as Ye,
  Y as Xe,
  a as Ze,
  et as z,
  h as Qe,
  rt as $e,
} from "./library.js?contenthash=CVZWwsCP";
import {
  c as B,
  d as et,
  f as tt,
  m as nt,
  o as V,
  p as rt,
  t as it,
} from "./chunk~10c934b72c.js?contenthash=IxHE0rXA";
import { t as at } from "./chunk~103fa94b69.js?contenthash=BAq6YOYj";
import {
  E as ot,
  O as st,
  k as ct,
  o as lt,
  r as ut,
  v as dt,
} from "./chunk~f25232ab1e.js?contenthash=jFptedFN";
import {
  a as ft,
  c as pt,
  n as mt,
  r as ht,
  t as gt,
} from "./chunk~70c16cc80c.js?contenthash=NVzsXtAX";
import {
  ct as _t,
  ft as vt,
  lt as yt,
  n as bt,
  ot as xt,
  q as St,
  rt as Ct,
  st as wt,
  ut as Tt,
} from "./chunk~a19d1add1e.js?contenthash=DkmUHNtw";
import { l as Et } from "./chunk~9a3ef4764b.js?contenthash=g05b6BBB";
import { u as Dt } from "./chunk~31ad425656.js?contenthash=hNwbTRKk";
import "./chunk~8681f5c764.js?contenthash=CAkdBbB8";
import {
  a as Ot,
  i as kt,
  r as At,
} from "./chunk~a292304e38.js?contenthash=CdSTH8yM";
import { n as jt, t as Mt } from "./chunk~971d501580.js?contenthash=CxRXdK1L";
import { n as Nt, o as Pt } from "./chunk~5f339e9a5f.js?contenthash=Dj-RoKCb";
import "./chunk~92931c6310.js?contenthash=C5UJ3B2Y";
var H = t(te(), 1),
  Ft = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.impressions || D(e.M()),
        H.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { impressions: { n: 1, c: It, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= j(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return T(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      N(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CProductImpressionsFromClient_Notification`;
    }
  },
  It = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.type || D(e.M()),
        H.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            type: { n: 1, br: y.readEnum, bw: M.writeEnum },
            appid: { n: 2, br: y.readUint32, bw: M.writeUint32 },
            num_impressions: { n: 3, br: y.readUint32, bw: M.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= j(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return T(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      N(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CProductImpressionsFromClient_Notification_Impression`;
    }
  },
  Lt;
(function (e) {
  function t(e, t) {
    return e.SendNotification(
      `ExperimentService.ReportProductImpressionsFromClient#1`,
      x(Ft, t),
      { ePrivilege: 1 },
    );
  }
  e.ReportProductImpressionsFromClient = t;
})((Lt ||= {}));
var U = t(se(), 1),
  W = He(),
  Rt = t(Xe()),
  zt = t(qe()),
  Bt = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.language || D(e.M()),
        H.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            language: { n: 1, br: y.readString, bw: M.writeString },
            type: { n: 2, br: y.readString, bw: M.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= j(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return T(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      N(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamEngine_UpdateTextFilterDictionary_Notification`;
    }
  },
  Vt = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.language || D(e.M()),
        H.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            language: { n: 1, br: y.readString, bw: M.writeString },
            type: { n: 2, br: y.readString, bw: M.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= j(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return T(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      N(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamEngine_GetTextFilterDictionary_Request`;
    }
  },
  Ht = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.dictionary || D(e.M()),
        H.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { dictionary: { n: 1, br: y.readString, bw: M.writeString } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= j(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return T(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      N(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamEngine_GetTextFilterDictionary_Response`;
    }
  },
  Ut = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.language || D(e.M()),
        H.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            language: { n: 1, br: y.readString, bw: M.writeString },
            type: { n: 2, br: y.readString, bw: M.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= j(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return T(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      N(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamEngine_TextFilterDictionaryChanged_Notification`;
    }
  },
  Wt = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.pid || D(e.M()),
        H.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { pid: { n: 1, br: y.readUint32, bw: M.writeUint32 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= j(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return T(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      N(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamEngine_GetGameIDForPID_Request`;
    }
  },
  Gt = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.gameid || D(e.M()),
        H.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            gameid: { n: 1, br: y.readUint64String, bw: M.writeUint64String },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= j(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return T(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      N(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamEngine_GetGameIDForPID_Response`;
    }
  },
  Kt = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.gameid || D(e.M()),
        H.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            gameid: { n: 1, br: y.readUint64String, bw: M.writeUint64String },
            should_handle: { n: 2, br: y.readBool, bw: M.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= j(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return T(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      N(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamEngine_SetOverlayEscapeKeyHandling_Notification`;
    }
  },
  qt = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.search_term || D(e.M()),
        H.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            search_term: { n: 1, br: y.readString, bw: M.writeString },
            max_results: { n: 2, br: y.readUint32, bw: M.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= j(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return T(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      N(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamEngine_SearchAppDataCacheByStoreKeywords_Request`;
    }
  },
  Jt = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appids || D(e.M()),
        H.Message.initialize(this, t, 0, -1, [1], null));
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
              br: y.readUint32,
              pbr: y.readPackedUint32,
              bw: M.writeRepeatedUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= j(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return T(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      N(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamEngine_SearchAppDataCacheByStoreKeywords_Response`;
    }
  },
  Yt;
(function (e) {
  e.UpdateTextFilterDictionaryHandler = {
    name: `SteamEngine.UpdateTextFilterDictionary#1`,
    request: Bt,
  };
  function t(e, t) {
    return (
      (t ||= z().GetDefaultHandlerRegistry()),
      t == null
        ? (console.error(
            `Transport Error: no default registry is available for request`,
          ),
          null)
        : t.RegisterServiceNotificationHandler(
            Yt.UpdateTextFilterDictionaryHandler,
            e,
          )
    );
  }
  e.RegisterForUpdateTextFilterDictionary = t;
  function n(e, t) {
    return (
      (t ||= z().GetDefaultTransport()),
      t == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : t.SendNotification(
            `SteamEngine.UpdateTextFilterDictionary#1`,
            x(Bt, e),
            { ePrivilege: 1, eClientExecutionSite: 2 },
          )
    );
  }
  e.UpdateTextFilterDictionary = n;
  function r(e, t) {
    return (
      (t ||= z().GetDefaultTransport()),
      t == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : t.SendNotification(
            `SteamEngine.UpdateTextFilterDictionary#1`,
            x(Bt, e),
            { ePrivilege: 1, eClientExecutionSite: 2 },
          )
    );
  }
  ((e.SendMsgUpdateTextFilterDictionary = r),
    (e.GetTextFilterDictionaryHandler = {
      name: `SteamEngine.GetTextFilterDictionary#1`,
      request: Vt,
      response: Ht,
    }));
  function i(e, t) {
    return (
      (t ||= z().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`SteamEngine.GetTextFilterDictionary#1`, x(Vt, e), Ht, {
            ePrivilege: 1,
            eClientExecutionSite: 2,
          })
    );
  }
  e.GetTextFilterDictionary = i;
  function a(e, t) {
    return (
      (t ||= z().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`SteamEngine.GetTextFilterDictionary#1`, x(Vt, e), Ht, {
            ePrivilege: 1,
            eClientExecutionSite: 2,
          })
    );
  }
  ((e.SendMsgGetTextFilterDictionary = a),
    (e.NotifyTextFilterDictionaryChangedHandler = {
      name: `SteamEngine.NotifyTextFilterDictionaryChanged#1`,
      request: Ut,
    }));
  function o(e, t) {
    return (
      (t ||= z().GetDefaultHandlerRegistry()),
      t == null
        ? (console.error(
            `Transport Error: no default registry is available for request`,
          ),
          null)
        : t.RegisterServiceNotificationHandler(
            Yt.NotifyTextFilterDictionaryChangedHandler,
            e,
          )
    );
  }
  e.RegisterForNotifyTextFilterDictionaryChanged = o;
  function s(e, t) {
    return (
      (t ||= z().GetDefaultTransport()),
      t == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : t.SendNotification(
            `SteamEngine.NotifyTextFilterDictionaryChanged#1`,
            x(Ut, e),
            { ePrivilege: 1, eClientExecutionSite: 2 },
          )
    );
  }
  e.NotifyTextFilterDictionaryChanged = s;
  function c(e, t) {
    return (
      (t ||= z().GetDefaultTransport()),
      t == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : t.SendNotification(
            `SteamEngine.NotifyTextFilterDictionaryChanged#1`,
            x(Ut, e),
            { ePrivilege: 1, eClientExecutionSite: 2 },
          )
    );
  }
  ((e.SendMsgNotifyTextFilterDictionaryChanged = c),
    (e.GetGameIDForPIDHandler = {
      name: `SteamEngine.GetGameIDForPID#1`,
      request: Wt,
      response: Gt,
    }));
  function l(e, t) {
    return (
      (t ||= z().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`SteamEngine.GetGameIDForPID#1`, x(Wt, e), Gt, {
            ePrivilege: 1,
            eClientExecutionSite: 2,
          })
    );
  }
  e.GetGameIDForPID = l;
  function u(e, t) {
    return (
      (t ||= z().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`SteamEngine.GetGameIDForPID#1`, x(Wt, e), Gt, {
            ePrivilege: 1,
            eClientExecutionSite: 2,
          })
    );
  }
  ((e.SendMsgGetGameIDForPID = u),
    (e.SetOverlayEscapeKeyHandlingHandler = {
      name: `SteamEngine.SetOverlayEscapeKeyHandling#1`,
      request: Kt,
    }));
  function d(e, t) {
    return (
      (t ||= z().GetDefaultHandlerRegistry()),
      t == null
        ? (console.error(
            `Transport Error: no default registry is available for request`,
          ),
          null)
        : t.RegisterServiceNotificationHandler(
            Yt.SetOverlayEscapeKeyHandlingHandler,
            e,
          )
    );
  }
  e.RegisterForSetOverlayEscapeKeyHandling = d;
  function f(e, t) {
    return (
      (t ||= z().GetDefaultTransport()),
      t == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : t.SendNotification(
            `SteamEngine.SetOverlayEscapeKeyHandling#1`,
            x(Kt, e),
            { ePrivilege: 1, eClientExecutionSite: 2 },
          )
    );
  }
  e.SetOverlayEscapeKeyHandling = f;
  function p(e, t) {
    return (
      (t ||= z().GetDefaultTransport()),
      t == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : t.SendNotification(
            `SteamEngine.SetOverlayEscapeKeyHandling#1`,
            x(Kt, e),
            { ePrivilege: 1, eClientExecutionSite: 2 },
          )
    );
  }
  ((e.SendMsgSetOverlayEscapeKeyHandling = p),
    (e.SearchAppDataCacheByStoreKeywordsHandler = {
      name: `SteamEngine.SearchAppDataCacheByStoreKeywords#1`,
      request: qt,
      response: Jt,
    }));
  function m(e, t) {
    return (
      (t ||= z().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(
            `SteamEngine.SearchAppDataCacheByStoreKeywords#1`,
            x(qt, e),
            Jt,
            { ePrivilege: 1, eClientExecutionSite: 2 },
          )
    );
  }
  e.SearchAppDataCacheByStoreKeywords = m;
  function h(e, t) {
    return (
      (t ||= z().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(
            `SteamEngine.SearchAppDataCacheByStoreKeywords#1`,
            x(qt, e),
            Jt,
            { ePrivilege: 1, eClientExecutionSite: 2 },
          )
    );
  }
  e.SendMsgSearchAppDataCacheByStoreKeywords = h;
})((Yt ||= {}));
var Xt = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.auth_key || D(e.M()),
        H.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { auth_key: { n: 1, br: y.readString, bw: M.writeString } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= j(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return T(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      N(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CTransportAuth_Authenticate_Request`;
    }
  },
  Zt = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), H.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CTransportAuth_Authenticate_Response`;
    }
  },
  Qt = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), H.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CTransportAuth_StartShutdown_Notification`;
    }
  },
  $t;
(function (e) {
  e.AuthenticateHandler = {
    name: `TransportAuth.Authenticate#1`,
    request: Xt,
    response: Zt,
  };
  function t(e, t) {
    return (
      (t ||= z().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`TransportAuth.Authenticate#1`, x(Xt, e), Zt, {
            ePrivilege: 1,
            eClientExecutionSite: 3,
          })
    );
  }
  e.Authenticate = t;
  function n(e, t) {
    return (
      (t ||= z().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`TransportAuth.Authenticate#1`, x(Xt, e), Zt, {
            ePrivilege: 1,
            eClientExecutionSite: 3,
          })
    );
  }
  ((e.SendMsgAuthenticate = n),
    (e.NotifyStartShutdownHandler = {
      name: `TransportAuth.NotifyStartShutdown#1`,
      request: Qt,
    }));
  function r(e, t) {
    return (
      (t ||= z().GetDefaultHandlerRegistry()),
      t == null
        ? (console.error(
            `Transport Error: no default registry is available for request`,
          ),
          null)
        : t.RegisterServiceNotificationHandler($t.NotifyStartShutdownHandler, e)
    );
  }
  e.RegisterForNotifyStartShutdown = r;
  function i(e, t) {
    return (
      (t ||= z().GetDefaultTransport()),
      t == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : t.SendNotification(`TransportAuth.NotifyStartShutdown#1`, x(Qt, e), {
            ePrivilege: 1,
            eClientExecutionSite: 3,
          })
    );
  }
  e.NotifyStartShutdown = i;
  function a(e, t) {
    return (
      (t ||= z().GetDefaultTransport()),
      t == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : t.SendNotification(`TransportAuth.NotifyStartShutdown#1`, x(Qt, e), {
            ePrivilege: 1,
            eClientExecutionSite: 3,
          })
    );
  }
  e.SendMsgNotifyStartShutdown = a;
})(($t ||= {}));
var en = class {
  m_socket = null;
  m_sName;
  m_sURL;
  Log = new at(`CWebSocketConnection`, () => this.m_sName);
  m_bDisconnectRequested = !1;
  m_bConnecting = !1;
  m_fnOnMessageHandler;
  m_fnOnCloseHandler;
  m_fnOnReconnectStartHandler;
  m_fnOnReconnectFinishHandler;
  m_nConnectAttemptsMax;
  m_nConnectAttemptTimeoutMs;
  m_bReconnectOnFailure;
  m_nReconnectAttemptTimeoutMs;
  m_nReconnectAttemptsMax;
  constructor(e, t) {
    ((this.m_sName = e),
      (this.m_fnOnMessageHandler = t.fnOnMessageHandler),
      (this.m_fnOnCloseHandler = t.fnOnCloseHandler),
      (this.m_fnOnReconnectStartHandler =
        t.fnOnReconnectStartHandler ?? (() => {})),
      (this.m_fnOnReconnectFinishHandler =
        t.fnOnReconnectFinishHandler ?? (() => {})),
      (this.m_nConnectAttemptsMax = t.nConnectAttemptsMax ?? 8),
      (this.m_nConnectAttemptTimeoutMs = t.nConnectAttemptTimeoutMs ?? 1e3),
      (this.m_bReconnectOnFailure = t.bReconnectOnFailure ?? !1),
      (this.m_nReconnectAttemptsMax = t.nReconnectAttemptsMax ?? 3e4),
      (this.m_nReconnectAttemptTimeoutMs =
        t.nReconnectAttemptTimeoutMs ?? 1e4));
  }
  get name() {
    return this.m_sName;
  }
  async Connect(e) {
    return (
      (this.m_sURL = e),
      this.ConnectWithRetry(
        this.m_sURL,
        this.m_nConnectAttemptsMax,
        this.m_nConnectAttemptTimeoutMs,
      )
    );
  }
  async Reconnect() {
    return this.ConnectWithRetry(
      this.m_sURL,
      this.m_nReconnectAttemptsMax,
      this.m_nReconnectAttemptTimeoutMs,
    );
  }
  GetInterAttemptBackoffMs(e) {
    return v(e, 1, 5) * 1e3;
  }
  async ConnectWithRetry(e, t, n) {
    this.m_bConnecting = !0;
    let r = 0;
    do {
      try {
        let t = await this.ConnectToSocket(e, n);
        if (t.result == 1) return ((this.m_bConnecting = !1), t);
        this.Log.Warning(`connect attempt failed: ${t.result} - ${t.message}`);
      } catch (e) {
        this.Log.Warning(`connect attempt failed: exception ${e.name} - ${e}`);
      }
      let i = this.GetInterAttemptBackoffMs(r);
      (this.Log.Info(`connect retry: attempt:${r}/${t} backoff:${i}`),
        await new Promise((e) => setTimeout(e, i)),
        (this.m_socket = null),
        (r += 1));
    } while (r < t);
    return (
      this.Log.Warning(
        `websocket connect retry: limit exceeeded, bailing - ${this.name}`,
      ),
      (this.m_bConnecting = !1),
      this.BShouldReconnect() && this.StartReconnect(),
      { result: 2, message: `not ready, exceeded retry count` }
    );
  }
  Disconnect() {
    (this.Log.Info(`disconnect requested`),
      (this.m_bDisconnectRequested = !0),
      this.m_socket.close());
  }
  PrepareForShutdown() {
    (this.Log.Info(`shutdown pending`), (this.m_bDisconnectRequested = !0));
  }
  BShouldReconnect() {
    return this.m_bConnecting || !this.m_bReconnectOnFailure
      ? !1
      : !this.m_bDisconnectRequested;
  }
  async StartReconnect() {
    (this.Log.Info(`start reconnect`),
      (this.m_socket = null),
      this.m_fnOnReconnectStartHandler({ connection: this }),
      (await this.Reconnect()).result == 1
        ? (this.Log.Info(`reconnect successful`),
          this.m_fnOnReconnectFinishHandler({ connection: this, eResult: 1 }))
        : (this.Log.Warning(`failed to re-connect to websocket after close`),
          this.m_fnOnReconnectFinishHandler({ connection: this, eResult: 2 }),
          this.m_fnOnCloseHandler({
            connection: this,
            bError: !0,
            bIsExpectedToReconnect: !1,
          })));
  }
  async ConnectToSocket(e, t) {
    if (this.m_socket != null)
      return this.m_socket.readyState == WebSocket.OPEN
        ? { result: 1, message: `ready` }
        : (this.Log.Error(
            `websocket in an unexpected state: ${this.m_socket.readyState}`,
          ),
          { result: 2, message: `websocket in an unexpected state` });
    try {
      this.m_socket = new WebSocket(e);
    } catch {
      return (
        this.Log.Warning(`failed to initialize websocket connection`),
        { result: 35, message: `Failed to initialize websocket connection` }
      );
    }
    return (
      (this.m_socket.binaryType = `arraybuffer`),
      (this.m_socket.onerror = this.OnSocketError),
      (this.m_socket.onmessage = this.OnSocketMessage),
      (this.m_socket.onopen = this.OnSocketOpen),
      (this.m_socket.onclose = this.OnSocketClose),
      (await this.WaitForSocketOpen(this.m_socket, t))
        ? (this.Log.Info(`connection ready`), { result: 1, message: `ready` })
        : (this.Log.Warning(`failed to reach open state`),
          { result: 2, message: `failed to reach open state` })
    );
  }
  async WaitForSocketOpen(e, t) {
    if (e.readyState != WebSocket.CONNECTING)
      return e.readyState == WebSocket.OPEN;
    let n = t / 100;
    for (; e.readyState == WebSocket.CONNECTING && n > 0;)
      (n--, await new Promise((e) => setTimeout(e, 100)));
    return e.readyState == WebSocket.OPEN;
  }
  BCanSendMessages() {
    return this.m_socket != null && this.m_socket.readyState == WebSocket.OPEN;
  }
  OnSocketError(e) {
    this.Log.Warning(`websocket error`);
  }
  OnSocketOpen(e) {
    this.Log.Info(`websocket open`);
  }
  OnSocketClose(e) {
    if (this.m_bDisconnectRequested) {
      (this.Log.Info(`websocket closed`),
        this.m_fnOnCloseHandler({
          connection: this,
          bError: !1,
          bIsExpectedToReconnect: !1,
        }));
      return;
    }
    if (this.m_bConnecting) return;
    this.Log.Warning(`websocket unexpectedly closed`);
    let t = this.BShouldReconnect();
    (this.m_fnOnCloseHandler({
      connection: this,
      bError: !0,
      bIsExpectedToReconnect: t,
    }),
      t && this.StartReconnect());
  }
  async OnSocketMessage(e) {
    this.m_fnOnMessageHandler(e.data);
  }
  SendSerializedMessage(e) {
    try {
      return (this.m_socket.send(e), 1);
    } catch {
      return 2;
    }
  }
};
(O([f], en.prototype, `OnSocketError`, null),
  O([f], en.prototype, `OnSocketOpen`, null),
  O([f], en.prototype, `OnSocketClose`, null),
  O([f], en.prototype, `OnSocketMessage`, null));
var tn = `127.0.0.1`,
  nn = new at(`WebUITransport`),
  rn = class {
    m_iMsgSeq = 1;
    m_mapPendingMethodRequests = new Map();
    m_messageHandlers = new Ye();
    m_mapServiceCallErrorCount = new Map();
    m_mapConnectionDetails = new Map();
    m_fnOnStatusEventHandler;
    m_fnOnReconnectErrorHandler;
    m_bInitialized = !1;
    m_nMaximumMsgSizeBytes = 1024;
    BIsValid() {
      return this.m_bInitialized;
    }
    GetMaximumMsgSizeBytes() {
      return this.m_nMaximumMsgSizeBytes;
    }
    TEST_GetMaximumMsgBodySizeBytes() {
      return (
        this.m_nMaximumMsgSizeBytes - this.TEST_GetMsgHeaderEstimatedSizeBytes()
      );
    }
    TEST_GetMsgHeaderEstimatedSizeBytes() {
      return 128;
    }
    TEST_GetExcessivelyLargeBodySize() {
      return 67108864;
    }
    ReportError(e) {
      nn.Warning(e);
      let t = g();
      t &&
        t.ReportError(Error(e), {
          bIncludeMessageInIdentifier: !0,
          cCallsitesToIgnore: 1,
        });
    }
    async Init() {
      if (!h.IN_CLIENT) return;
      let e = await SteamClient.WebUITransport.GetTransportInfo();
      ((this.m_nMaximumMsgSizeBytes = e.nMaximumMsgSizeBytes),
        this.CreateConnection(1, `steamUI`, e.portSteamUI, e.authKeySteamUI),
        this.CreateConnection(
          2,
          `clientdll`,
          e.portClientdll,
          e.authKeyClientdll,
        ),
        z().SetDefaultTransport(this),
        z().SetDefaultHandlerRegistry(this.m_messageHandlers),
        $t.RegisterForNotifyStartShutdown(this.OnStartShutdown));
    }
    get messageHandlers() {
      return this.m_messageHandlers;
    }
    SetStatusEventHandler(e) {
      this.m_fnOnStatusEventHandler = e;
    }
    SetReconnectErrorHandler(e) {
      this.m_fnOnReconnectErrorHandler = e;
    }
    CreateConnection(e, t, n, r) {
      let i = {
        connection: new en(t, {
          bReconnectOnFailure: !0,
          fnOnMessageHandler: this.OnWebsocketMessage,
          fnOnCloseHandler: this.OnWebsocketClose,
          fnOnReconnectStartHandler: this.OnWebsocketReconnectStart,
          fnOnReconnectFinishHandler: this.OnWebsocketReconnectFinish,
          nConnectAttemptsMax: 8,
          nConnectAttemptTimeoutMs: 1e4,
          nReconnectAttemptsMax: 8,
          nReconnectAttemptTimeoutMs: 1e4,
        }),
        sUrl: `ws://${tn}:${n}/transportsocket/`,
        sAuthKey: r,
        eClientExecutionSite: e,
      };
      this.m_mapConnectionDetails.set(e, i);
    }
    SendMsg(e, t, n, r) {
      return new Promise((i, a) => {
        let o = r.eClientExecutionSite;
        if (o == null || o == 0) {
          (nn.Error(`SendMsg: Invalid client execution site: ${o}`),
            a(`Transport SendMsg: invalid client execution site ${o}`));
          return;
        }
        let s = this.m_mapConnectionDetails.get(o);
        if (s == null) {
          (nn.Error(
            `SendMsg: could not find connection for execution site: ${o}`,
          ),
            a(
              `Transport SendMsg: could not find connection for execution site ${o}`,
            ));
          return;
        }
        let c = s.connection;
        if (!c.BCanSendMessages()) {
          let t = this.m_mapServiceCallErrorCount.get(e) ?? 1;
          this.m_mapServiceCallErrorCount.set(e, t + 1);
          let n = `SendMsg: Attempt to send message but socket wasn't ready: ${c.name} - ${e}`;
          (t == 1 && this.ReportError(n),
            nn.Warning(n + ` error count: ${t}`),
            a(`Transport SendMsg: socket not ready`));
          return;
        }
        let l = this.m_iMsgSeq++;
        (t.SetEMsg(146),
          t.Hdr().set_target_job_name(e),
          t.Hdr().set_jobid_source(`` + l));
        let u = t.Serialize();
        if (u.byteLength >= this.m_nMaximumMsgSizeBytes) {
          nn.Error(
            `SendMsg: message exceeds maximum size: ${u.byteLength} >= ${this.m_nMaximumMsgSizeBytes}`,
          );
          let e = E.Init(n);
          (e.Hdr().set_eresult(2), i(e));
        } else
          c.SendSerializedMessage(u) == 1
            ? this.m_mapPendingMethodRequests.set(l, {
                m_iSeq: l,
                m_sServiceName: e,
                m_responseClass: n,
                m_fnCallback: i,
                m_fnError: a,
              })
            : (nn.Error(`SendMsg: Failed to send message`),
              a(`Transport SendMsg: failed to send message`));
      });
    }
    SendNotification(e, t, n) {
      let r = n.eClientExecutionSite;
      if (r == null || r == 0)
        return (
          nn.Error(`SendNotification: Invalid client execution site: ${r}`), !1
        );
      let i = this.m_mapConnectionDetails.get(r);
      if (i == null)
        return (
          nn.Error(
            `SendNotification: could not find connection for execution site: ${r}`,
          ),
          !1
        );
      let a = i.connection;
      if (!a.BCanSendMessages()) {
        let t = this.m_mapServiceCallErrorCount.get(e) ?? 1;
        this.m_mapServiceCallErrorCount.set(e, t + 1);
        let n = `SendNotification: Attempt to send message but socket wasn't ready: ${a.name} - ${e}`;
        return (
          t == 1 && this.ReportError(n),
          nn.Warning(n + ` error count: ${t}`),
          !1
        );
      }
      return (
        t.SetEMsg(146),
        t.Hdr().set_target_job_name(e),
        a.SendSerializedMessage(t.Serialize()) == 1
      );
    }
    async ConnectToSite(e) {
      let t = await e.connection.Connect(e.sUrl);
      return t.result == 1
        ? (await this.SendAuthMessage(e)).BSuccess()
          ? { result: 1, message: `connected` }
          : { result: 2, message: `client auth failed` }
        : t;
    }
    async MakeReady() {
      let e = [];
      for (let [t, n] of this.m_mapConnectionDetails)
        e.push(this.ConnectToSite(n));
      let t = await Promise.all(e);
      ((this.m_bInitialized = !0), this.DispatchTransportStatusUpdate());
      for (let e of t) if (e.result != 1) return e;
      return { result: 1, message: `ready` };
    }
    GetConnectionDetails(e) {
      for (let [t, n] of this.m_mapConnectionDetails)
        if (n.connection === e) return n;
      return (
        nn.Error(`GetConnectionDetails: failed to identify connection`), null
      );
    }
    DispatchTransportStatusUpdate() {
      if (!this.m_fnOnStatusEventHandler) return;
      let e = !0;
      for (let [t, n] of this.m_mapConnectionDetails)
        n.connection.BCanSendMessages() || (e = !1);
      this.m_fnOnStatusEventHandler({ bConnected: e });
    }
    OnWebsocketReconnectStart(e) {
      this.DispatchTransportStatusUpdate();
    }
    OnWebsocketReconnectFinish(e) {
      if ((this.DispatchTransportStatusUpdate(), e.eResult != 1)) {
        (nn.Warning(
          `OnWebsocketReconnect: Failed to reconnect to steam client`,
        ),
          this.m_fnOnReconnectErrorHandler?.({}));
        return;
      }
      this.FailAllPendingRequests();
      let t = this.GetConnectionDetails(e.connection);
      t && this.SendAuthMessage(t);
    }
    OnWebsocketClose(e) {
      e.bIsExpectedToReconnect || this.FailAllPendingRequests();
    }
    OnWebsocketMessage(e) {
      let t = new de(e),
        n = E.InitHeaderFromPacket(t);
      n.Hdr().jobid_target() &&
      n.Hdr().jobid_target() !== `18446744073709551615`
        ? this.DispatchMethodResponse(n)
        : this.DispatchNotification(n);
    }
    DispatchMethodResponse(e) {
      let t = parseInt(e.Hdr().jobid_target()),
        n = this.m_mapPendingMethodRequests.get(t);
      if (n == null) {
        C(!1, `Transport Error: no pending callback for request`);
        return;
      }
      (C(t == n.m_iSeq, `Transport Error: mistmatched request sequence`),
        this.m_mapPendingMethodRequests.delete(t));
      let r = E.InitFromMsg(n.m_responseClass, e);
      (r.BIsValid() ||
        g()?.ReportError(
          Error(
            `WebUITransport: failed to parse response for ${n.m_sServiceName}`,
          ),
          { bIncludeMessageInIdentifier: !0 },
        ),
        n.m_fnCallback(r));
    }
    DispatchNotification(e) {
      this.m_messageHandlers.DispatchMsgToHandlers(e, (e) => {
        C(!1, `Transport Error: A notification should not generate a response`);
      });
    }
    FailAllPendingRequests() {
      for (let [e, t] of this.m_mapPendingMethodRequests) {
        this.ReportError(
          `FailAllPendingRequests: forcing failure for request: ${t.m_responseClass.name}`,
        );
        let e = E.Init(t.m_responseClass);
        (e.Hdr().set_eresult(2), t.m_fnCallback(e));
      }
      this.m_mapPendingMethodRequests.clear();
    }
    async SendAuthMessage(e) {
      let t = $t.AuthenticateHandler.name,
        n = { eClientExecutionSite: e.eClientExecutionSite },
        r = E.Init(Xt);
      return (
        r.Hdr().set_webui_auth_key(e.sAuthKey),
        await this.SendMsg(t, r, $t.AuthenticateHandler.response, n)
      );
    }
    OnStartShutdown(e) {
      for (let [e, t] of this.m_mapConnectionDetails)
        t.connection.PrepareForShutdown();
      return 1;
    }
  };
(O([f], rn.prototype, `OnWebsocketReconnectStart`, null),
  O([f], rn.prototype, `OnWebsocketReconnectFinish`, null),
  O([f], rn.prototype, `OnWebsocketClose`, null),
  O([f], rn.prototype, `OnWebsocketMessage`, null),
  O([f], rn.prototype, `OnStartShutdown`, null));
var an = new rn();
function on() {
  return h.IN_MOBILE ? i : ae();
}
function sn(e) {
  if (e === ``) return !1;
  try {
    return (RegExp(`\\b(` + e + `)\\b`, `ugi`), !0);
  } catch {
    return (
      console.log(`'${e}' is an invalid expression, removing from text filter`),
      !1
    );
  }
}
var cn = 15,
  ln = 3600,
  un = `(1)`,
  dn = class {
    m_WebUIServiceTransport;
    m_unAccountID;
    m_Transport = null;
    m_Storage = null;
    m_TextFilterPreferences = { eTextFilterSetting: 3, bIgnoreFriends: !1 };
    m_TextFilterWords;
    m_mapPlayerCache = new Map();
    m_strBannedWords = ``;
    m_strProfanityWords = ``;
    m_strCleanWords = ``;
    m_strBannedPattern = ``;
    m_strCleanPattern = ``;
    m_bWordListsComplete = !1;
    m_bHaveCompleteFilter = !1;
    m_regexBannedWords = null;
    m_regexCleanWords = null;
    m_bShownFilterTip = !1;
    m_bInitialized = !1;
    m_bFilterChangedWhileLoading = !1;
    m_bOngoingLoad = !1;
    m_promiseOngoingLoad = null;
    m_fnUnregisterDictionaryChanged = void 0;
    m_rgUnregisterPlayerNotifications = [];
    m_DataAccess;
    constructor(e) {
      c(this);
      let t = new ut();
      ((this.m_TextFilterPreferences = {
        eTextFilterSetting: t.text_filter_setting(),
        bIgnoreFriends: t.text_filter_ignore_friends(),
      }),
        (this.m_TextFilterWords = new ot()),
        (this.m_DataAccess = e));
    }
    async Init(e = 0, t = null, n = null, r = null) {
      ((this.m_bInitialized = !1),
        (this.m_WebUIServiceTransport = an),
        (this.m_unAccountID = e),
        (this.m_Transport = t),
        (this.m_Storage = n),
        (this.m_strBannedWords = ``),
        (this.m_strProfanityWords = ``),
        (this.m_strCleanWords = ``),
        (this.m_bWordListsComplete = !1),
        this.InitSteamEngineLanguages(),
        this.RegisterPlayerNotifications(r),
        await this.LoadFilter(),
        await this.LoadTextFilterPreferences(),
        await this.LoadTextFilterWords(),
        await this.RequestUpdatedSettings(),
        (this.m_nLoadLanguagesRetryDelaySec = cn),
        await this.EnsureFiltersLoaded());
    }
    InitSteamEngineLanguages() {
      this.m_WebUIServiceTransport.BIsValid() &&
        (this.m_fnUnregisterDictionaryChanged?.(),
        (this.m_fnUnregisterDictionaryChanged =
          this.m_WebUIServiceTransport.messageHandlers.RegisterServiceNotificationHandler(
            Yt.NotifyTextFilterDictionaryChangedHandler,
            this.OnTextFilterDictionaryChanged,
          ).unregister),
        this.InitSteamEngineLanguage(h.LANGUAGE),
        h.LANGUAGE !== `english` && this.InitSteamEngineLanguage(`english`));
    }
    OnTextFilterDictionaryChanged(e) {
      return (
        !this.m_bInitialized && !this.m_bOngoingLoad
          ? (this.m_bFilterChangedWhileLoading = !0)
          : ((this.m_nLoadLanguagesRetryDelaySec = cn),
            this.EnsureFiltersLoaded()),
        1
      );
    }
    EnsureFiltersLoaded() {
      return this.m_bOngoingLoad && this.m_promiseOngoingLoad
        ? ((this.m_bFilterChangedWhileLoading = !0), this.m_promiseOngoingLoad)
        : ((this.m_promiseOngoingLoad = this.InitFiltersWithRetry()),
          this.m_promiseOngoingLoad);
    }
    async InitFiltersWithRetry() {
      this.m_bOngoingLoad = !0;
      try {
        do
          ((this.m_bFilterChangedWhileLoading = !1),
            await this.LoadLanguages(),
            this.OnFilterDataChanged(),
            (this.m_bInitialized = !0));
        while (this.m_bFilterChangedWhileLoading);
      } finally {
        ((this.m_bOngoingLoad = !1), (this.m_promiseOngoingLoad = null));
      }
    }
    RegisterPlayerNotifications(e) {
      (this.m_rgUnregisterPlayerNotifications.forEach((e) => e()),
        (this.m_rgUnregisterPlayerNotifications = []),
        e &&
          this.m_rgUnregisterPlayerNotifications.push(
            e.RegisterServiceNotificationHandler(
              st.NotifyCommunityPreferencesChangedHandler,
              (e) => (
                this.UpdateCommunityPreferences(e.Body().preferences()),
                this.OnPlayerSettingsChanged(),
                1
              ),
            ).unregister,
            e.RegisterServiceNotificationHandler(
              st.NotifyTextFilterWordsChangedHandler,
              (e) => (
                this.UpdateTextFilterWords(e.Body().words()),
                this.OnPlayerSettingsChanged(),
                1
              ),
            ).unregister,
          ));
    }
    OnPlayerSettingsChanged() {
      this.m_bInitialized && !this.m_bOngoingLoad && this.OnFilterDataChanged();
    }
    InitSteamEngineLanguage(e) {
      let t = E.Init(Bt);
      (t.Body().set_language(e),
        t.Body().set_type(`profanity`),
        Yt.SendMsgUpdateTextFilterDictionary(t, this.m_WebUIServiceTransport),
        t.Body().set_type(`banned`),
        Yt.SendMsgUpdateTextFilterDictionary(t, this.m_WebUIServiceTransport));
    }
    GetSteamEngineTextFilterDictionary(e, t) {
      let n = E.Init(Vt);
      return (
        n.Body().set_language(e),
        n.Body().set_type(t),
        Yt.SendMsgGetTextFilterDictionary(n, this.m_WebUIServiceTransport)
      );
    }
    GetStorageKey(e) {
      return e + `_` + this.m_unAccountID;
    }
    async LoadTextFilterPreferences() {
      if (this.m_Storage) {
        let e = await this.m_Storage.GetObject(
          this.GetStorageKey(`CTextFilterStore_TextFilterPreferences`),
        );
        e && (this.m_TextFilterPreferences = e);
      }
    }
    SaveTextFilterPreferences() {
      this.m_Storage &&
        this.m_Storage.StoreObject(
          this.GetStorageKey(`CTextFilterStore_TextFilterPreferences`),
          this.m_TextFilterPreferences,
        );
    }
    ObfuscateString(e) {
      try {
        let t = new TextEncoder().encode(un + e);
        return Rt.fromByteArray(t);
      } catch {
        return ``;
      }
    }
    DeobfuscateString(e) {
      try {
        let t = Rt.toByteArray(e),
          n = new TextDecoder().decode(t);
        return n.startsWith(un)
          ? ((n = n.slice(3)), n)
          : (console.log(
              `DeobfuscateString given invalid base64 data, ignoring: ` + e,
            ),
            ``);
      } catch {
        return ``;
      }
    }
    async LoadObfuscatedString(e) {
      if (this.m_Storage) {
        let t = await this.m_Storage.GetString(this.GetStorageKey(e));
        if (t) return this.DeobfuscateString(t);
      }
      return null;
    }
    async SaveObfuscatedString(e, t) {
      this.m_Storage &&
        this.m_Storage.StoreString(
          this.GetStorageKey(e),
          this.ObfuscateString(t),
        );
    }
    async LoadTextFilterWords() {
      let e = await this.LoadObfuscatedString(
        `CTextFilterStore_TextFilterWords`,
      );
      if (e)
        try {
          this.m_TextFilterWords = ot.fromObject(JSON.parse(e));
        } catch {
          (console.warn(`Error parsing cached text filter word list`, e),
            (this.m_TextFilterWords = new ot()));
        }
    }
    SaveTextFilterWords() {
      this.SaveObfuscatedString(
        `CTextFilterStore_TextFilterWords`,
        JSON.stringify(this.m_TextFilterWords.toObject()),
      );
    }
    async LoadFilter() {
      let e = await this.LoadObfuscatedString(
          `CTextFilterStore_strBannedPattern`,
        ),
        t = await this.LoadObfuscatedString(`CTextFilterStore_strCleanPattern`);
      ((this.m_bHaveCompleteFilter = e != null && t != null),
        e != null && t != null && this.BRebuildFilter(e, t));
    }
    SaveFilter() {
      (this.SaveObfuscatedString(
        `CTextFilterStore_strBannedPattern`,
        this.m_strBannedPattern,
      ),
        this.SaveObfuscatedString(
          `CTextFilterStore_strCleanPattern`,
          this.m_strCleanPattern,
        ));
    }
    async RequestUpdatedSettings() {
      let e = new ut();
      if (this.m_unAccountID !== 0)
        try {
          if (this.m_Transport) {
            let t = E.Init(lt);
            e = (await ct.GetCommunityPreferences(this.m_Transport, t))
              .Body()
              .preferences();
          } else {
            let t = { sessionid: ce(), origin: on() },
              n = await zt.default.get(
                h.COMMUNITY_BASE_URL + `textfilter/ajaxgetcommunitypreferences`,
                { params: t, withCredentials: !0 },
              );
            e = ut.fromObject(n.data.preferences);
          }
        } catch {}
      if (
        (this.UpdateCommunityPreferences(e),
        e.text_filter_words_revision() !==
          this.m_TextFilterWords.text_filter_words_revision())
      ) {
        let t = new ot();
        if (e.text_filter_words_revision() !== 0)
          try {
            if (this.m_Transport) {
              let e = E.Init(dt);
              t = (await ct.GetTextFilterWords(this.m_Transport, e))
                .Body()
                .words();
            } else {
              let e = { sessionid: ce(), origin: on() },
                n = await zt.default.get(
                  h.COMMUNITY_BASE_URL +
                    `textfilter/ajaxgettextfiltercustomwords`,
                  { params: e, withCredentials: !0 },
                );
              t = ot.fromObject(n.data.words);
            }
          } catch {}
        this.UpdateTextFilterWords(t);
      }
    }
    UpdateCommunityPreferences(e) {
      let t = !1;
      (e.text_filter_setting() !==
        this.m_TextFilterPreferences?.eTextFilterSetting &&
        ((this.m_TextFilterPreferences.eTextFilterSetting =
          e.text_filter_setting()),
        (t = !0)),
        e.text_filter_ignore_friends() !==
          this.m_TextFilterPreferences.bIgnoreFriends &&
          ((this.m_TextFilterPreferences.bIgnoreFriends =
            e.text_filter_ignore_friends()),
          (t = !0)),
        t && this.SaveTextFilterPreferences());
    }
    get TextFilterPreferences() {
      return this.m_TextFilterPreferences;
    }
    UpdateTextFilterWords(e) {
      ((this.m_TextFilterWords = e), this.SaveTextFilterWords());
    }
    m_nLoadLanguagesRetryTimeout = void 0;
    m_nLoadLanguagesRetryDelaySec = cn;
    async LoadLanguages() {
      ((this.m_strBannedWords = ``),
        (this.m_strProfanityWords = ``),
        (this.m_strCleanWords = ``),
        (this.m_bWordListsComplete = !1),
        (this.m_nLoadLanguagesRetryTimeout &&=
          (window.clearTimeout(this.m_nLoadLanguagesRetryTimeout), void 0)));
      try {
        let e = await this.LoadLanguage(h.LANGUAGE);
        if (
          (h.LANGUAGE !== `english` &&
            (e = (await this.LoadLanguage(`english`)) && e),
          !e)
        )
          throw Error(`clean_public dictionary unavailable`);
        ((this.m_nLoadLanguagesRetryDelaySec = cn),
          (this.m_bWordListsComplete = !0));
      } catch (e) {
        this.m_nLoadLanguagesRetryDelaySec = Math.min(
          this.m_nLoadLanguagesRetryDelaySec * 2,
          ln,
        );
        let t = this.m_nLoadLanguagesRetryDelaySec;
        (console.warn(`LoadLanguages caught`, e, `retry in`, t, `seconds`),
          (this.m_nLoadLanguagesRetryTimeout = window.setTimeout(() => {
            ((this.m_nLoadLanguagesRetryTimeout = void 0),
              this.EnsureFiltersLoaded());
          }, t * 1e3)));
      }
    }
    async LoadLanguage(e) {
      let t = ``,
        n = !1;
      if (this.m_WebUIServiceTransport.BIsValid())
        try {
          {
            let t = await this.GetSteamEngineTextFilterDictionary(e, `banned`);
            this.m_strBannedWords += t.Body().dictionary();
          }
          {
            let t = await this.GetSteamEngineTextFilterDictionary(
              e,
              `profanity`,
            );
            this.m_strProfanityWords += t.Body().dictionary();
          }
          n = !0;
        } catch (e) {
          console.warn(`LoadLanguage caught while loading from cache:`, e);
        }
      if (!n) {
        t = `${h.COMMUNITY_CDN_URL}textfilter/gettextfilterdictionary?type=banned&language=${e}&v=1&origin=${on()}`;
        {
          let e = await zt.default.get(t);
          this.m_strBannedWords += e.data;
        }
        t = `${h.COMMUNITY_CDN_URL}textfilter/gettextfilterdictionary?type=profanity&language=${e}&v=1&origin=${on()}`;
        {
          let e = await zt.default.get(t);
          this.m_strProfanityWords += e.data;
        }
      }
      let r = this.m_WebUIServiceTransport.BIsValid(),
        i = `CTextFilterStore_strCleanPublic_` + e;
      t = `${h.COMMUNITY_CDN_URL}textfilter/gettextfilterdictionary?type=clean_public&language=${e}&v=1&origin=${on()}`;
      try {
        let e = await zt.default.get(t);
        ((this.m_strCleanWords += e.data),
          r && this.SaveObfuscatedString(i, e.data));
      } catch (e) {
        console.warn(`LoadLanguage caught while loading clean list:`, e);
        let t = r ? await this.LoadObfuscatedString(i) : null;
        if (!t) return !1;
        this.m_strCleanWords += t;
      }
      return !0;
    }
    CreatePattern(e) {
      let t = e.filter(function (e) {
        return sn(e);
      });
      return t.length > 0 ? `\\b(` + t.join(`|`) + `)\\b` : ``;
    }
    OnFilterDataChanged() {
      if (!this.m_bWordListsComplete && this.m_bHaveCompleteFilter) return;
      let e = new RegExp(/\s*[\r\n]+\s*/g),
        t = [],
        n = [];
      switch (this.m_TextFilterPreferences.eTextFilterSetting) {
        case 0:
          break;
        case 3:
          break;
        case 2:
          t = t.concat(this.m_strBannedWords.split(e));
          break;
        default:
          t = t.concat(
            this.m_strProfanityWords.split(e),
            this.m_strBannedWords.split(e),
          );
      }
      ((t = t.concat(this.m_TextFilterWords.text_filter_custom_banned_words())),
        (n = this.m_strCleanWords.split(e)),
        (n = n.concat(
          this.m_TextFilterWords.text_filter_custom_clean_words(),
        )));
      let r = this.CreatePattern(t),
        i = this.CreatePattern(n);
      (i != `` && (i = `^(` + i + `)$`),
        this.BRebuildFilter(r, i) &&
          this.m_bWordListsComplete &&
          this.SaveFilter(),
        (this.m_bHaveCompleteFilter = this.m_bWordListsComplete));
    }
    BRebuildFilter(e, t) {
      if (e === this.m_strBannedPattern && t === this.m_strCleanPattern)
        return !1;
      if (
        ((this.m_regexBannedWords = null),
        (this.m_strBannedPattern = e),
        e !== ``)
      )
        try {
          this.m_regexBannedWords = new RegExp(e, `ugi`);
        } catch (e) {
          (console.warn(`Couldn't compile textfilter bannedwords regex`),
            g().ReportError(
              Error(`Couldn't compile textfilter bannedwords regex: ${e}`),
            ),
            (this.m_strBannedPattern = ``));
        }
      if (
        ((this.m_regexCleanWords = null),
        (this.m_strCleanPattern = t),
        t !== ``)
      )
        try {
          this.m_regexCleanWords = new RegExp(t, `ugi`);
        } catch (e) {
          (console.warn(`Couldn't compile textfilter cleanwords regex`),
            g().ReportError(
              Error(`Couldn't compile textfilter cleanwords regex: ${e}`),
            ),
            (this.m_strCleanPattern = ``));
        }
      return !0;
    }
    CreateProfanityReplacement(e) {
      return `♥`.repeat(e);
    }
    BHasFilter() {
      return this.m_regexBannedWords != null;
    }
    BShownFilterTip() {
      return this.m_bShownFilterTip;
    }
    SetFilterTipShown(e) {
      this.m_bShownFilterTip = e;
    }
    FilterText(e, t) {
      if (!this.m_regexBannedWords) return t;
      let n = 0;
      return (
        typeof e == `string` && e !== ``
          ? (n = new Ue(e).GetAccountID())
          : typeof e == `number` && (n = e),
        !t ||
        n == this.m_unAccountID ||
        (e &&
          this.m_TextFilterPreferences.bIgnoreFriends &&
          this.m_DataAccess.BIsFriend(n))
          ? t
          : t.replace(this.m_regexBannedWords, (e) =>
              this.m_regexCleanWords && e.search(this.m_regexCleanWords) == 0
                ? e
                : this.CreateProfanityReplacement(e.length),
            )
      );
    }
  };
(O([p], dn.prototype, `m_TextFilterPreferences`, void 0),
  O([p], dn.prototype, `m_mapPlayerCache`, void 0),
  O([p], dn.prototype, `m_regexBannedWords`, void 0),
  O([p], dn.prototype, `m_regexCleanWords`, void 0),
  O([p], dn.prototype, `m_bInitialized`, void 0),
  O([p], dn.prototype, `m_bFilterChangedWhileLoading`, void 0),
  O([p], dn.prototype, `m_bOngoingLoad`, void 0),
  O([d], dn.prototype, `Init`, null),
  O([f], dn.prototype, `OnTextFilterDictionaryChanged`, null),
  O([d], dn.prototype, `UpdateCommunityPreferences`, null),
  O([d], dn.prototype, `BRebuildFilter`, null));
var fn;
function pn() {
  if (!fn) {
    let e = new Set(),
      t = { sessionid: ce(), origin: on() };
    (zt.default
      .get(h.COMMUNITY_BASE_URL + `textfilter/ajaxgetfriendslist`, {
        params: t,
        withCredentials: !0,
      })
      .then((t) => {
        for (let n of t.data.friendslist?.friends ?? [])
          o(n.efriendrelationship) &&
            e.add(new Ue(n.ulfriendid).GetAccountID());
      }),
      (fn = (t) => e.has(t)));
  }
  return fn;
}
function mn(e, ...t) {
  let n = [],
    r = new RegExp(/(.*?)<(\d+)>(.*?)<\/(\2)>/, `gs`),
    i = 0,
    a;
  for (; (a = r.exec(e));) {
    ((i += a[0].length), n.push(a[1]));
    let e = parseInt(a[2]),
      r = a[3] || ``,
      o = mn(r, ...t),
      s =
        e >= 1 && e <= t.length && t[e - 1]
          ? U.cloneElement(t[e - 1], {}, r ? o : null)
          : r;
    n.push(s);
  }
  return (n.push(e.substr(i)), U.createElement(U.Fragment, null, ...n));
}
var hn = t(Ae(), 1),
  gn = n({
    Button: () => _n,
    Icon: () => yn,
    MinWidth: () => On,
    "Size-1": () => vn,
    "Size-2": () => bn,
    "Size-3": () => xn,
    "Variant-basic": () => Sn,
    "Variant-dark": () => Cn,
    "Variant-ghost": () => Tn,
    "Variant-inverted": () => wn,
    "Variant-outline": () => G,
    "Variant-vibrant": () => En,
    Width: () => Dn,
    default: () => kn,
  }),
  _n = `Yyx5Rkc0C04-`,
  vn = `_-56FHcFNl2U-`,
  yn = `hRuF7XXiT3w-`,
  bn = `j8iZOirRLc8-`,
  xn = `ZTzpqIMdFCM-`,
  Sn = `XSeLQJSkxyo-`,
  Cn = `efbor0Of1bY-`,
  wn = `qOJkwUKt2Zo-`,
  G = `BvwOpySHMzk-`,
  Tn = `oKBOG5g3nvk-`,
  En = `_3PvnjdbEKFQ-`,
  Dn = `_5M7IKs5LW3Y-`,
  On = `n-Q3jnI7IeY-`,
  kn = {
    Button: _n,
    "Size-1": `_-56FHcFNl2U-`,
    Icon: yn,
    "Size-2": `j8iZOirRLc8-`,
    "Size-3": `ZTzpqIMdFCM-`,
    "Variant-basic": `XSeLQJSkxyo-`,
    "Variant-dark": `efbor0Of1bY-`,
    "Variant-inverted": `qOJkwUKt2Zo-`,
    "Variant-outline": `BvwOpySHMzk-`,
    "Variant-ghost": `oKBOG5g3nvk-`,
    "Variant-vibrant": `_3PvnjdbEKFQ-`,
    Width: Dn,
    MinWidth: On,
  },
  An = n({
    ChildContainer: () => Bn,
    LoadingSpinnerAmin: () => Mn,
    "Size-1": () => Nn,
    "Size-2": () => Pn,
    "Size-3": () => Fn,
    "Size-4": () => In,
    "Size-5": () => Ln,
    Spinner: () => jn,
    "Variant-bright": () => zn,
    "Variant-solid": () => Rn,
    default: () => Vn,
  }),
  jn = `ghKPu7ElHI4-`,
  Mn = `THS4EmXO7Qo-`,
  Nn = `_2tFyZDh3n70-`,
  Pn = `y-F5xF-Ar74-`,
  Fn = `Fqhcc7xFmsM-`,
  In = `h9zlfqYx76Q-`,
  Ln = `iTGGFwEa2MQ-`,
  Rn = `_88ugmg-q8D8-`,
  zn = `MKSxe-MWyrs-`,
  Bn = `n-XnuapupJI-`,
  Vn = {
    Spinner: jn,
    LoadingSpinnerAmin: Mn,
    "Size-1": `_2tFyZDh3n70-`,
    "Size-2": `y-F5xF-Ar74-`,
    "Size-3": `Fqhcc7xFmsM-`,
    "Size-4": `h9zlfqYx76Q-`,
    "Size-5": `iTGGFwEa2MQ-`,
    "Variant-solid": `_88ugmg-q8D8-`,
    "Variant-bright": `MKSxe-MWyrs-`,
    ChildContainer: Bn,
  };
function Hn(e) {
  let {
      size: t = `3`,
      loading: n = !0,
      children: r,
      color: i,
      variant: a,
      ...o
    } = e,
    s = kt(`LoadingSpinner`, a);
  return r || !n
    ? (0, W.jsxs)(jt, {
        position: `relative`,
        ...o,
        width: `fit-content`,
        children: [
          (0, W.jsx)(`div`, {
            "data-visibility": !n,
            className: Bn,
            children: r,
          }),
          n &&
            (0, W.jsx)(Mt, {
              position: `absolute`,
              inset: `0`,
              justify: `center`,
              align: `center`,
              children: (0, W.jsx)(Un, { size: t, color: i, variant: s }),
            }),
        ],
      })
    : (0, W.jsx)(Un, { size: t, color: i, variant: s, ...o });
}
function Un(e) {
  let { className: t, color: n, ...r } = Pt(e, Wn);
  return (0, W.jsx)(`div`, {
    "data-accent-color": n,
    className: (0, hn.default)(t, jn),
    ...r,
  });
}
var Wn = [
    ...Nt,
    { prop: `size`, responsive: !0, className: (e) => An[`Size-${e}`] },
    { prop: `variant`, className: (e) => An[`Variant-${e}`] },
  ],
  Gn = U.createContext(!1);
function Kn() {
  return U.useContext(Gn);
}
function qn(e) {
  let {
    snr: t,
    focusable: n,
    navProps: r,
    href: i,
    openInNewWindow: a,
    target: o,
    rel: s,
    ...c
  } = e;
  C(!(a && o), `Link: pass either openInNewWindow or target, not both`);
  let l = ee(),
    u = Kn(),
    d = Jn(i, t),
    f = n ?? r?.focusable ?? !!d,
    p = a ? `_blank` : o;
  !p && u && (p = `_top`);
  let m = s;
  !m && a && (m = `noreferrer noopener`);
  let h = { href: d, target: p, rel: m, ...c };
  return l && (f || r)
    ? (0, W.jsx)(Me, { ...r, focusable: f, ...h })
    : (0, W.jsx)(`a`, { ...h });
}
function Jn(e, t) {
  let n = Fe();
  return !e || !t ? e : L(t === !0 ? n : { ...n, ...t }, e);
}
function Yn(e) {
  let {
      variant: t,
      size: n,
      minWidth: r = `fit-content`,
      color: i,
      loading: a,
      children: o,
      onClick: s,
      icon: c,
      focusable: l,
      navProps: u,
      ...d
    } = e,
    f = ee(),
    p = At(n),
    m = a
      ? (0, W.jsx)(Hn, { size: p, color: i, variant: `bright`, children: o })
      : o,
    h = a ? void 0 : s,
    g = l ?? u?.focusable ?? !!h,
    _ = kt(`Button`, t),
    v = {
      type: `button`,
      ...Pt(
        {
          ...d,
          variant: _,
          size: p,
          minWidth: r,
          color: i,
          className: (0, hn.default)(_n, c && `hRuF7XXiT3w-`),
          onClick: h,
        },
        Qn,
      ),
      children: m,
    };
  return f && (g || u)
    ? (0, W.jsx)(Pe, { ...v, ...(u || {}), focusable: g })
    : (0, W.jsx)(`button`, { ...v });
}
function Xn(e) {
  let {
      variant: t,
      size: n,
      minWidth: r = `fit-content`,
      disabled: i,
      icon: a,
      onClick: o,
      ...s
    } = e,
    c = kt(`Button`, t),
    l = At(n),
    u = Pt(
      {
        onClick: i ? Zn : o,
        "aria-disabled": i,
        ...s,
        variant: c,
        size: l,
        minWidth: r,
        className: (0, hn.default)(_n, a && `hRuF7XXiT3w-`, Ot()),
      },
      Qn,
    );
  return (0, W.jsx)(qn, { ...u });
}
function Zn(e) {
  e.preventDefault();
}
var Qn = [
    ...Nt,
    { prop: `size`, responsive: !0, className: (e) => gn[`Size-${e}`] },
    { prop: `variant`, className: (e) => gn[`Variant-${e}`] },
    { prop: `color`, dataProperty: (e) => [`accent-color`, `${e}`] },
    { prop: `width`, className: Dn, cssProperty: `--width`, responsive: !0 },
    {
      prop: `minWidth`,
      className: On,
      cssProperty: `--min-width`,
      responsive: !0,
    },
  ],
  $n = Yn,
  er = Xn,
  tr = `u-hyk5J5tIY-`,
  nr = `doqBDS-zTtg-`,
  rr = `DHv28C3kLqY-`,
  ir = () =>
    (0, W.jsx)(`div`, {
      className: tr,
      children: (0, W.jsx)(`div`, { className: nr }),
    }),
  ar = () =>
    (0, W.jsx)(`div`, {
      className: tr,
      children: (0, W.jsx)(`div`, { className: rr }),
    }),
  or = class extends Ze {
    GetString(e) {
      return Promise.resolve(localStorage.getItem(e));
    }
    StoreString(e, t) {
      return (localStorage.setItem(e, t), Promise.resolve());
    }
    RemoveObject(e) {
      return (localStorage.removeItem(e), Promise.resolve());
    }
  },
  sr = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.unique_name || D(e.M()),
        H.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            unique_name: { n: 1, br: y.readString, bw: M.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= j(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return T(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      N(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_CreateBroadcastChannel_Request`;
    }
  },
  cr = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_channel_id || D(e.M()),
        H.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            broadcast_channel_id: {
              n: 1,
              br: y.readFixed64String,
              bw: M.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= j(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return T(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      N(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_CreateBroadcastChannel_Response`;
    }
  },
  lr = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.unique_name || D(e.M()),
        H.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            unique_name: { n: 1, br: y.readString, bw: M.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= j(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return T(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      N(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_GetBroadcastChannelID_Request`;
    }
  },
  ur = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_channel_id || D(e.M()),
        H.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            broadcast_channel_id: {
              n: 1,
              br: y.readFixed64String,
              bw: M.writeFixed64String,
            },
            unique_name: { n: 2, br: y.readString, bw: M.writeString },
            steamid: {
              n: 3,
              br: y.readFixed64String,
              bw: M.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= j(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return T(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      N(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_GetBroadcastChannelID_Response`;
    }
  },
  dr = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_channel_id || D(e.M()),
        H.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            broadcast_channel_id: {
              n: 1,
              br: y.readFixed64String,
              bw: M.writeFixed64String,
            },
            name: { n: 2, br: y.readString, bw: M.writeString },
            language: { n: 3, br: y.readString, bw: M.writeString },
            headline: { n: 4, br: y.readString, bw: M.writeString },
            summary: { n: 5, br: y.readString, bw: M.writeString },
            avatar_hash: { n: 6, br: y.readString, bw: M.writeString },
            schedule: { n: 7, br: y.readString, bw: M.writeString },
            rules: { n: 8, br: y.readString, bw: M.writeString },
            panels: { n: 9, br: y.readString, bw: M.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= j(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return T(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      N(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_SetBroadcastChannelProfile_Request`;
    }
  },
  fr = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), H.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_SetBroadcastChannelProfile_Response`;
    }
  },
  pr = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_channel_id || D(e.M()),
        H.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            broadcast_channel_id: {
              n: 1,
              br: y.readFixed64String,
              bw: M.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= j(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return T(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      N(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_GetBroadcastChannelProfile_Request`;
    }
  },
  K = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.unique_name || D(e.M()),
        H.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            unique_name: { n: 1, br: y.readString, bw: M.writeString },
            owner_steamid: {
              n: 2,
              br: y.readFixed64String,
              bw: M.writeFixed64String,
            },
            name: { n: 3, br: y.readString, bw: M.writeString },
            language: { n: 4, br: y.readString, bw: M.writeString },
            headline: { n: 5, br: y.readString, bw: M.writeString },
            summary: { n: 6, br: y.readString, bw: M.writeString },
            schedule: { n: 7, br: y.readString, bw: M.writeString },
            rules: { n: 8, br: y.readString, bw: M.writeString },
            panels: { n: 9, br: y.readString, bw: M.writeString },
            is_partnered: { n: 10, br: y.readBool, bw: M.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= j(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return T(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      N(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_GetBroadcastChannelProfile_Response`;
    }
  },
  mr = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_channel_id || D(e.M()),
        H.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            broadcast_channel_id: {
              n: 1,
              br: y.readFixed64String,
              bw: M.writeFixed64String,
            },
            image_type: { n: 2, br: y.readEnum, bw: M.writeEnum },
            image_index: { n: 3, br: y.readUint32, bw: M.writeUint32 },
            image_width: { n: 4, br: y.readUint32, bw: M.writeUint32 },
            image_height: { n: 5, br: y.readUint32, bw: M.writeUint32 },
            file_size: { n: 6, br: y.readUint32, bw: M.writeUint32 },
            file_extension: { n: 7, br: y.readString, bw: M.writeString },
            file_hash: { n: 8, br: y.readString, bw: M.writeString },
            undo: { n: 9, br: y.readBool, bw: M.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= j(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return T(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      N(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_SetBroadcastChannelImage_Request`;
    }
  },
  hr = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.replace_image_hash || D(e.M()),
        H.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            replace_image_hash: { n: 1, br: y.readString, bw: M.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= j(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return T(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      N(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_SetBroadcastChannelImage_Response`;
    }
  },
  gr = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_channel_id || D(e.M()),
        H.Message.initialize(this, t, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            broadcast_channel_id: {
              n: 1,
              br: y.readFixed64String,
              bw: M.writeFixed64String,
            },
            image_types: {
              n: 2,
              r: !0,
              q: !0,
              br: y.readEnum,
              pbr: y.readPackedEnum,
              bw: M.writeRepeatedEnum,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= j(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return T(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      N(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_GetBroadcastChannelImages_Request`;
    }
  },
  _r = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.images || D(e.M()),
        H.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { images: { n: 1, c: vr, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= j(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return T(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      N(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_GetBroadcastChannelImages_Response`;
    }
  },
  vr = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.image_type || D(e.M()),
        H.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            image_type: { n: 1, br: y.readEnum, bw: M.writeEnum },
            image_path: { n: 2, br: y.readString, bw: M.writeString },
            image_index: { n: 3, br: y.readUint32, bw: M.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= j(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return T(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      N(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_GetBroadcastChannelImages_Response_Images`;
    }
  },
  yr = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_channel_id || D(e.M()),
        H.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            broadcast_channel_id: {
              n: 1,
              br: y.readFixed64String,
              bw: M.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= j(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return T(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      N(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_GetBroadcastChannelLinks_Request`;
    }
  },
  br = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.links || D(e.M()),
        H.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { links: { n: 1, c: xr, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= j(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return T(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      N(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_GetBroadcastChannelLinks_Response`;
    }
  },
  xr = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.link_index || D(e.M()),
        H.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            link_index: { n: 1, br: y.readUint32, bw: M.writeUint32 },
            url: { n: 2, br: y.readString, bw: M.writeString },
            link_description: { n: 3, br: y.readString, bw: M.writeString },
            left: { n: 4, br: y.readUint32, bw: M.writeUint32 },
            top: { n: 5, br: y.readUint32, bw: M.writeUint32 },
            width: { n: 6, br: y.readUint32, bw: M.writeUint32 },
            height: { n: 7, br: y.readUint32, bw: M.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= j(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return T(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      N(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_GetBroadcastChannelLinks_Response_Links`;
    }
  },
  Sr = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_channel_id || D(e.M()),
        H.Message.initialize(this, t, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            broadcast_channel_id: {
              n: 1,
              br: y.readFixed64String,
              bw: M.writeFixed64String,
            },
            links: { n: 2, c: Cr, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= j(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return T(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      N(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_SetBroadcastChannelLinkRegions_Request`;
    }
  },
  Cr = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.link_index || D(e.M()),
        H.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            link_index: { n: 1, br: y.readUint32, bw: M.writeUint32 },
            url: { n: 2, br: y.readString, bw: M.writeString },
            link_description: { n: 3, br: y.readString, bw: M.writeString },
            left: { n: 4, br: y.readUint32, bw: M.writeUint32 },
            top: { n: 5, br: y.readUint32, bw: M.writeUint32 },
            width: { n: 6, br: y.readUint32, bw: M.writeUint32 },
            height: { n: 7, br: y.readUint32, bw: M.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= j(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return T(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      N(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_SetBroadcastChannelLinkRegions_Request_Links`;
    }
  },
  wr = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), H.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_SetBroadcastChannelLinkRegions_Response`;
    }
  },
  Tr = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_channel_id || D(e.M()),
        H.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            broadcast_channel_id: {
              n: 1,
              br: y.readFixed64String,
              bw: M.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= j(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return T(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      N(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_GetBroadcastChannelStatus_Request`;
    }
  },
  Er = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.is_live || D(e.M()),
        H.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            is_live: { n: 1, br: y.readBool, bw: M.writeBool },
            is_disabled: { n: 2, br: y.readBool, bw: M.writeBool },
            appid: { n: 3, br: y.readUint32, bw: M.writeUint32 },
            viewers: { n: 4, br: y.readUint64String, bw: M.writeUint64String },
            views: { n: 5, br: y.readUint64String, bw: M.writeUint64String },
            broadcaster_steamid: {
              n: 6,
              br: y.readFixed64String,
              bw: M.writeFixed64String,
            },
            thumbnail_url: { n: 7, br: y.readString, bw: M.writeString },
            followers: {
              n: 8,
              br: y.readUint64String,
              bw: M.writeUint64String,
            },
            subscribers: {
              n: 9,
              br: y.readUint64String,
              bw: M.writeUint64String,
            },
            unique_name: { n: 10, br: y.readString, bw: M.writeString },
            broadcast_session_id: {
              n: 11,
              br: y.readUint64String,
              bw: M.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= j(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return T(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      N(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_GetBroadcastChannelStatus_Response`;
    }
  },
  Dr = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_channel_id || D(e.M()),
        H.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            broadcast_channel_id: {
              n: 1,
              br: y.readFixed64String,
              bw: M.writeFixed64String,
            },
            unique_name: { n: 2, br: y.readString, bw: M.writeString },
            name: { n: 3, br: y.readString, bw: M.writeString },
            appid: { n: 4, br: y.readUint32, bw: M.writeUint32 },
            viewers: { n: 5, br: y.readUint64String, bw: M.writeUint64String },
            views: { n: 6, br: y.readUint64String, bw: M.writeUint64String },
            thumbnail_url: { n: 7, br: y.readString, bw: M.writeString },
            followers: {
              n: 8,
              br: y.readUint64String,
              bw: M.writeUint64String,
            },
            headline: { n: 9, br: y.readString, bw: M.writeString },
            avatar_url: { n: 10, br: y.readString, bw: M.writeString },
            broadcaster_steamid: {
              n: 11,
              br: y.readFixed64String,
              bw: M.writeFixed64String,
            },
            subscribers: {
              n: 12,
              br: y.readUint64String,
              bw: M.writeUint64String,
            },
            background_url: { n: 13, br: y.readString, bw: M.writeString },
            is_featured: { n: 14, br: y.readBool, bw: M.writeBool },
            is_disabled: { n: 15, br: y.readBool, bw: M.writeBool },
            is_live: { n: 16, br: y.readBool, bw: M.writeBool },
            language: { n: 17, br: y.readString, bw: M.writeString },
            reports: { n: 18, br: y.readUint32, bw: M.writeUint32 },
            is_partnered: { n: 19, br: y.readBool, bw: M.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= j(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return T(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      N(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `GetBroadcastChannelEntry`;
    }
  },
  Or = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), H.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_GetFollowedChannels_Request`;
    }
  },
  kr = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.results || D(e.M()),
        H.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { results: { n: 1, c: Dr, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= j(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return T(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      N(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_GetFollowedChannels_Response`;
    }
  },
  Ar = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), H.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_GetSubscribedChannels_Request`;
    }
  },
  jr = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.results || D(e.M()),
        H.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { results: { n: 1, c: Dr, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= j(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return T(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      N(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_GetSubscribedChannels_Response`;
    }
  },
  Mr = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_channel_id || D(e.M()),
        H.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            broadcast_channel_id: {
              n: 1,
              br: y.readFixed64String,
              bw: M.writeFixed64String,
            },
            undo: { n: 2, br: y.readBool, bw: M.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= j(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return T(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      N(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_FollowBroadcastChannel_Request`;
    }
  },
  Nr = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.is_followed || D(e.M()),
        H.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { is_followed: { n: 1, br: y.readBool, bw: M.writeBool } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= j(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return T(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      N(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_FollowBroadcastChannel_Response`;
    }
  },
  Pr = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_channel_id || D(e.M()),
        H.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            broadcast_channel_id: {
              n: 1,
              br: y.readFixed64String,
              bw: M.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= j(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return T(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      N(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_SubscribeBroadcastChannel_Request`;
    }
  },
  Fr = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.is_subscribed || D(e.M()),
        H.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { is_subscribed: { n: 1, br: y.readBool, bw: M.writeBool } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= j(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return T(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      N(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_SubscribeBroadcastChannel_Response`;
    }
  },
  Ir = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_channel_id || D(e.M()),
        H.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            broadcast_channel_id: {
              n: 1,
              br: y.readFixed64String,
              bw: M.writeFixed64String,
            },
            reason: { n: 2, br: y.readString, bw: M.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= j(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return T(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      N(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_ReportBroadcastChannel_Request`;
    }
  },
  Lr = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), H.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_ReportBroadcastChannel_Response`;
    }
  },
  Rr = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_channel_id || D(e.M()),
        H.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            broadcast_channel_id: {
              n: 1,
              br: y.readFixed64String,
              bw: M.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= j(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return T(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      N(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_GetBroadcastChannelInteraction_Request`;
    }
  },
  zr = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.is_followed || D(e.M()),
        H.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            is_followed: { n: 1, br: y.readBool, bw: M.writeBool },
            is_subscribed: { n: 2, br: y.readBool, bw: M.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= j(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return T(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      N(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_GetBroadcastChannelInteraction_Response`;
    }
  },
  Br = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || D(e.M()),
        H.Message.initialize(this, t, 0, -1, [5], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: y.readUint32, bw: M.writeUint32 },
            name: { n: 2, br: y.readString, bw: M.writeString },
            image: { n: 3, br: y.readString, bw: M.writeString },
            viewers: { n: 4, br: y.readUint64String, bw: M.writeUint64String },
            channels: { n: 5, c: Dr, r: !0, q: !0 },
            release_date: { n: 6, br: y.readString, bw: M.writeString },
            developer: { n: 7, br: y.readString, bw: M.writeString },
            publisher: { n: 8, br: y.readString, bw: M.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= j(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return T(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      N(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_Game`;
    }
  },
  Vr = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || D(e.M()),
        H.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: y.readUint32, bw: M.writeUint32 },
            algorithm: { n: 2, br: y.readEnum, bw: M.writeEnum },
            count: { n: 3, br: y.readUint32, bw: M.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= j(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return T(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      N(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_GetGames_Request`;
    }
  },
  Hr = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.results || D(e.M()),
        H.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { results: { n: 1, c: Br, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= j(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return T(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      N(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_GetGames_Response`;
    }
  },
  Ur = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.algorithm || D(e.M()),
        H.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            algorithm: { n: 1, br: y.readEnum, bw: M.writeEnum },
            count: { n: 2, br: y.readUint32, bw: M.writeUint32 },
            appid: { n: 3, br: y.readUint32, bw: M.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= j(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return T(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      N(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_GetChannels_Request`;
    }
  },
  Wr = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.results || D(e.M()),
        H.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { results: { n: 1, c: Dr, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= j(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return T(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      N(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_GetChannels_Response`;
    }
  },
  Gr = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_channel_id || D(e.M()),
        H.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            broadcast_channel_id: {
              n: 1,
              br: y.readFixed64String,
              bw: M.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= j(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return T(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      N(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_GetBroadcastChannelBroadcasters_Request`;
    }
  },
  Kr = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcasters || D(e.M()),
        H.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { broadcasters: { n: 1, c: qr, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= j(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return T(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      N(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_GetBroadcastChannelBroadcasters_Response`;
    }
  },
  qr = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || D(e.M()),
        H.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: y.readFixed64String,
              bw: M.writeFixed64String,
            },
            name: { n: 2, br: y.readString, bw: M.writeString },
            rtmp_token: { n: 3, br: y.readString, bw: M.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= j(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return T(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      N(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_GetBroadcastChannelBroadcasters_Response_Broadcaster`;
    }
  },
  Jr = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.issuer_steamid || D(e.M()),
        H.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            issuer_steamid: {
              n: 1,
              br: y.readFixed64String,
              bw: M.writeFixed64String,
            },
            chatter_steamid: {
              n: 2,
              br: y.readFixed64String,
              bw: M.writeFixed64String,
            },
            time_expires: { n: 3, br: y.readString, bw: M.writeString },
            permanent: { n: 4, br: y.readBool, bw: M.writeBool },
            name: { n: 5, br: y.readString, bw: M.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= j(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return T(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      N(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_ChatBan`;
    }
  },
  Yr = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_channel_id || D(e.M()),
        H.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            broadcast_channel_id: {
              n: 1,
              br: y.readFixed64String,
              bw: M.writeFixed64String,
            },
            chatter_steamid: {
              n: 2,
              br: y.readFixed64String,
              bw: M.writeFixed64String,
            },
            duration: { n: 3, br: y.readUint32, bw: M.writeUint32 },
            permanent: { n: 4, br: y.readBool, bw: M.writeBool },
            undo: { n: 5, br: y.readBool, bw: M.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= j(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return T(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      N(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_AddChatBan_Request`;
    }
  },
  Xr = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), H.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_AddChatBan_Response`;
    }
  },
  Zr = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_channel_id || D(e.M()),
        H.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            broadcast_channel_id: {
              n: 1,
              br: y.readFixed64String,
              bw: M.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= j(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return T(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      N(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_GetChatBans_Request`;
    }
  },
  Qr = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.results || D(e.M()),
        H.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { results: { n: 1, c: Jr, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= j(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return T(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      N(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_GetChatBans_Response`;
    }
  },
  $r = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_channel_id || D(e.M()),
        H.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            broadcast_channel_id: {
              n: 1,
              br: y.readFixed64String,
              bw: M.writeFixed64String,
            },
            moderator_steamid: {
              n: 2,
              br: y.readFixed64String,
              bw: M.writeFixed64String,
            },
            undo: { n: 3, br: y.readBool, bw: M.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= j(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return T(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      N(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_AddChatModerator_Request`;
    }
  },
  ei = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), H.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_AddChatModerator_Response`;
    }
  },
  ti = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_channel_id || D(e.M()),
        H.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            broadcast_channel_id: {
              n: 1,
              br: y.readFixed64String,
              bw: M.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= j(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return T(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      N(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_GetChatModerators_Request`;
    }
  },
  ni = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || D(e.M()),
        H.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: y.readFixed64String,
              bw: M.writeFixed64String,
            },
            name: { n: 2, br: y.readString, bw: M.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= j(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return T(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      N(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_ChatModerator`;
    }
  },
  ri = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.results || D(e.M()),
        H.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { results: { n: 1, c: ni, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= j(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return T(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      N(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_GetChatModerators_Response`;
    }
  },
  ii = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_channel_id || D(e.M()),
        H.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            broadcast_channel_id: {
              n: 1,
              br: y.readFixed64String,
              bw: M.writeFixed64String,
            },
            word: { n: 2, br: y.readString, bw: M.writeString },
            undo: { n: 3, br: y.readBool, bw: M.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= j(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return T(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      N(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_AddWordBan_Request`;
    }
  },
  ai = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), H.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_AddWordBan_Response`;
    }
  },
  oi = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_channel_id || D(e.M()),
        H.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            broadcast_channel_id: {
              n: 1,
              br: y.readFixed64String,
              bw: M.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= j(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return T(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      N(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_GetWordBans_Request`;
    }
  },
  si = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.results || D(e.M()),
        H.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            results: {
              n: 1,
              r: !0,
              q: !0,
              br: y.readString,
              bw: M.writeRepeatedString,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= j(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return T(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      N(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_GetWordBans_Response`;
    }
  },
  ci = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_channel_id || D(e.M()),
        H.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            broadcast_channel_id: {
              n: 1,
              br: y.readFixed64String,
              bw: M.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= j(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return T(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      N(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_JoinChat_Request`;
    }
  },
  li = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.chat_id || D(e.M()),
        H.Message.initialize(this, t, 0, -1, [3], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            chat_id: {
              n: 1,
              br: y.readFixed64String,
              bw: M.writeFixed64String,
            },
            view_url_template: { n: 2, br: y.readString, bw: M.writeString },
            flair_group_ids: {
              n: 3,
              r: !0,
              q: !0,
              br: y.readUint64String,
              pbr: y.readPackedUint64String,
              bw: M.writeRepeatedUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= j(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return T(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      N(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_JoinChat_Response`;
    }
  },
  ui = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.term || D(e.M()),
        H.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { term: { n: 1, br: y.readString, bw: M.writeString } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= j(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return T(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      N(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_Search_Request`;
    }
  },
  di = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.results || D(e.M()),
        H.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { results: { n: 1, c: Dr, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= j(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return T(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      N(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_Search_Response`;
    }
  },
  fi = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), H.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_GetSteamTVUserSettings_Request`;
    }
  },
  pi = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.stream_live_email || D(e.M()),
        H.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            stream_live_email: { n: 1, br: y.readBool, bw: M.writeBool },
            stream_live_notification: { n: 2, br: y.readBool, bw: M.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= j(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return T(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      N(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_GetSteamTVUserSettings_Response`;
    }
  },
  mi = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.stream_live_email || D(e.M()),
        H.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            stream_live_email: { n: 1, br: y.readBool, bw: M.writeBool },
            stream_live_notification: { n: 2, br: y.readBool, bw: M.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= j(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return T(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      N(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_SetSteamTVUserSettings_Request`;
    }
  },
  hi = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), H.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_SetSteamTVUserSettings_Response`;
    }
  },
  gi = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), H.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_GetMyBroadcastChannels_Request`;
    }
  },
  _i = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.results || D(e.M()),
        H.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { results: { n: 1, c: Dr, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= j(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return T(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      N(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_GetMyBroadcastChannels_Response`;
    }
  },
  vi = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcasts || D(e.M()),
        H.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { broadcasts: { n: 1, c: Dr, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= j(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return T(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      N(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_HomePageTemplate_Takeover`;
    }
  },
  yi = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcasts || D(e.M()),
        H.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            broadcasts: { n: 1, c: Dr, r: !0, q: !0 },
            appid: { n: 2, br: y.readUint32, bw: M.writeUint32 },
            title: { n: 3, br: y.readString, bw: M.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= j(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return T(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      N(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_HomePageTemplate_SingleGame`;
    }
  },
  bi = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || D(e.M()),
        H.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: y.readUint32, bw: M.writeUint32 },
            game_name: { n: 2, br: y.readString, bw: M.writeString },
            broadcast: { n: 3, c: Dr },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= j(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return T(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      N(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `GameListEntry`;
    }
  },
  xi = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.entries || D(e.M()),
        H.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            entries: { n: 1, c: bi, r: !0, q: !0 },
            title: { n: 2, br: y.readString, bw: M.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= j(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return T(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      N(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_HomePageTemplate_GameList`;
    }
  },
  Si = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcasts || D(e.M()),
        H.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            broadcasts: { n: 1, c: Dr, r: !0, q: !0 },
            title: { n: 2, br: y.readString, bw: M.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= j(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return T(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      N(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_HomePageTemplate_QuickExplore`;
    }
  },
  Ci = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcasts || D(e.M()),
        H.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            broadcasts: { n: 1, c: Dr, r: !0, q: !0 },
            title: { n: 2, br: y.readString, bw: M.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= j(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return T(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      N(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_HomePageTemplate_ConveyorBelt`;
    }
  },
  wi = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast || D(e.M()),
        H.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            broadcast: { n: 1, c: Dr },
            title: { n: 2, br: y.readString, bw: M.writeString },
            chat_group_id: {
              n: 3,
              br: y.readUint64String,
              bw: M.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= j(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return T(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      N(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_HomePageTemplate_WatchParty`;
    }
  },
  Ti = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast || D(e.M()),
        H.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            broadcast: { n: 1, c: Dr },
            title: { n: 2, br: y.readString, bw: M.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= j(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return T(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      N(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_HomePageTemplate_Developer`;
    }
  },
  Ei = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.title || D(e.M()),
        H.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { title: { n: 1, br: y.readString, bw: M.writeString } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= j(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return T(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      N(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_HomePageTemplate_Event`;
    }
  },
  Di = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.template_type || D(e.M()),
        H.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            template_type: { n: 1, br: y.readEnum, bw: M.writeEnum },
            takeover: { n: 2, c: vi },
            single_game: { n: 3, c: yi },
            game_list: { n: 4, c: xi },
            quick_explore: { n: 5, c: Si },
            conveyor_belt: { n: 6, c: Ci },
            watch_party: { n: 7, c: wi },
            developer: { n: 8, c: Ti },
            event: { n: 9, c: Ei },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= j(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return T(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      N(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_HomePageContentRow`;
    }
  },
  Oi = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), H.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_GetHomePageContents_Request`;
    }
  },
  ki = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.rows || D(e.M()),
        H.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { rows: { n: 1, c: Di, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= j(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return T(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      N(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_GetHomePageContents_Response`;
    }
  },
  Ai = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_channel_id || D(e.M()),
        H.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            broadcast_channel_id: {
              n: 1,
              br: y.readFixed64String,
              bw: M.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= j(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return T(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      N(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_GetBroadcastChannelClips_Request`;
    }
  },
  ji = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_clip_id || D(e.M()),
        H.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            broadcast_clip_id: {
              n: 1,
              br: y.readUint64String,
              bw: M.writeUint64String,
            },
            channel_id: {
              n: 2,
              br: y.readUint64String,
              bw: M.writeUint64String,
            },
            app_id: { n: 3, br: y.readUint32, bw: M.writeUint32 },
            broadcaster_steamid: {
              n: 4,
              br: y.readFixed64String,
              bw: M.writeFixed64String,
            },
            creator_steamid: {
              n: 5,
              br: y.readFixed64String,
              bw: M.writeFixed64String,
            },
            video_description: { n: 6, br: y.readString, bw: M.writeString },
            live_time: { n: 7, br: y.readUint32, bw: M.writeUint32 },
            length_ms: { n: 8, br: y.readUint32, bw: M.writeUint32 },
            thumbnail_path: { n: 9, br: y.readString, bw: M.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= j(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return T(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      N(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_BroadcastClipInfo`;
    }
  },
  Mi = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.clips || D(e.M()),
        H.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            clips: { n: 1, c: ji, r: !0, q: !0 },
            thumbnail_host: { n: 2, br: y.readString, bw: M.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= j(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return T(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      N(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_GetBroadcastChannelClips_Response`;
    }
  },
  Ni = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.cheer_type || D(e.M()),
        H.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            cheer_type: { n: 1, br: y.readUint32, bw: M.writeUint32 },
            cheer_amount: { n: 2, br: y.readUint32, bw: M.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= j(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return T(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      N(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_AppCheer_SingleCheerType`;
    }
  },
  Pi = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.app_id || D(e.M()),
        H.Message.initialize(this, t, 0, -1, [3], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            app_id: { n: 1, br: y.readUint32, bw: M.writeUint32 },
            cheer_target_id: {
              n: 2,
              br: y.readFixed64String,
              bw: M.writeFixed64String,
            },
            cheers: { n: 3, c: Ni, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= j(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return T(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      N(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_AppCheer_Request`;
    }
  },
  Fi = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.aggregation_delay_ms || D(e.M()),
        H.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            aggregation_delay_ms: { n: 1, br: y.readUint32, bw: M.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= j(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return T(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      N(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_AppCheer_Response`;
    }
  },
  Ii;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(`SteamTV.CreateBroadcastChannel#1`, x(sr, t, n), cr, {
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
    });
  }
  e.CreateBroadcastChannel = t;
  function n(e, t, n) {
    return e.SendMsg(`SteamTV.GetBroadcastChannelID#1`, x(lr, t, n), ur, {
      bConstMethod: !0,
      ePrivilege: 0,
    });
  }
  e.GetBroadcastChannelID = n;
  function r(e, t, n) {
    return e.SendMsg(`SteamTV.SetBroadcastChannelProfile#1`, x(dr, t, n), fr, {
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
    });
  }
  e.SetBroadcastChannelProfile = r;
  function i(e, t, n) {
    return e.SendMsg(`SteamTV.GetBroadcastChannelProfile#1`, x(pr, t, n), K, {
      bConstMethod: !0,
      ePrivilege: 0,
    });
  }
  e.GetBroadcastChannelProfile = i;
  function a(e, t, n) {
    return e.SendMsg(`SteamTV.SetBroadcastChannelImage#1`, x(mr, t, n), hr, {
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
    });
  }
  e.SetBroadcastChannelImage = a;
  function o(e, t, n) {
    return e.SendMsg(`SteamTV.GetBroadcastChannelImages#1`, x(gr, t, n), _r, {
      bConstMethod: !0,
      ePrivilege: 0,
    });
  }
  e.GetBroadcastChannelImages = o;
  function s(e, t, n) {
    return e.SendMsg(
      `SteamTV.SetBroadcastChannelLinkRegions#1`,
      x(Sr, t, n),
      wr,
      { ePrivilege: 1, eWebAPIKeyRequirement: 2 },
    );
  }
  e.SetBroadcastChannelLinkRegions = s;
  function c(e, t, n) {
    return e.SendMsg(`SteamTV.GetBroadcastChannelLinks#1`, x(yr, t, n), br, {
      bConstMethod: !0,
      ePrivilege: 0,
    });
  }
  e.GetBroadcastChannelLinks = c;
  function l(e, t, n) {
    return e.SendMsg(
      `SteamTV.GetBroadcastChannelBroadcasters#1`,
      x(Gr, t, n),
      Kr,
      { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
    );
  }
  e.GetBroadcastChannelBroadcasters = l;
  function u(e, t, n) {
    return e.SendMsg(`SteamTV.GetFollowedChannels#1`, x(Or, t, n), kr, {
      bConstMethod: !0,
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
    });
  }
  e.GetFollowedChannels = u;
  function d(e, t, n) {
    return e.SendMsg(`SteamTV.GetSubscribedChannels#1`, x(Ar, t, n), jr, {
      bConstMethod: !0,
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
    });
  }
  e.GetSubscribedChannels = d;
  function f(e, t, n) {
    return e.SendMsg(`SteamTV.GetBroadcastChannelStatus#1`, x(Tr, t, n), Er, {
      bConstMethod: !0,
      ePrivilege: 0,
    });
  }
  e.GetBroadcastChannelStatus = f;
  function p(e, t, n) {
    return e.SendMsg(`SteamTV.FollowBroadcastChannel#1`, x(Mr, t, n), Nr, {
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
    });
  }
  e.FollowBroadcastChannel = p;
  function m(e, t, n) {
    return e.SendMsg(`SteamTV.SubscribeBroadcastChannel#1`, x(Pr, t, n), Fr, {
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
    });
  }
  e.SubscribeBroadcastChannel = m;
  function h(e, t, n) {
    return e.SendMsg(`SteamTV.GetBroadcastChannelClips#1`, x(Ai, t, n), Mi, {
      bConstMethod: !0,
      ePrivilege: 0,
    });
  }
  e.GetBroadcastChannelClips = h;
  function g(e, t, n) {
    return e.SendMsg(`SteamTV.ReportBroadcastChannel#1`, x(Ir, t, n), Lr, {
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
    });
  }
  e.ReportBroadcastChannel = g;
  function _(e, t, n) {
    return e.SendMsg(
      `SteamTV.GetBroadcastChannelInteraction#1`,
      x(Rr, t, n),
      zr,
      { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
    );
  }
  e.GetBroadcastChannelInteraction = _;
  function ee(e, t, n) {
    return e.SendMsg(`SteamTV.GetGames#1`, x(Vr, t, n), Hr, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
    });
  }
  e.GetGames = ee;
  function v(e, t, n) {
    return e.SendMsg(`SteamTV.GetChannels#1`, x(Ur, t, n), Wr, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
    });
  }
  e.GetChannels = v;
  function te(e, t, n) {
    return e.SendMsg(`SteamTV.AddChatBan#1`, x(Yr, t, n), Xr, {
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
      rgBrowserAPISites: [`store`, `community`],
    });
  }
  e.AddChatBan = te;
  function ne(e, t, n) {
    return e.SendMsg(`SteamTV.GetChatBans#1`, x(Zr, t, n), Qr, {
      bConstMethod: !0,
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
    });
  }
  e.GetChatBans = ne;
  function re(e, t, n) {
    return e.SendMsg(`SteamTV.AddChatModerator#1`, x($r, t, n), ei, {
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
      rgBrowserAPISites: [`store`, `community`],
    });
  }
  e.AddChatModerator = re;
  function ie(e, t, n) {
    return e.SendMsg(`SteamTV.GetChatModerators#1`, x(ti, t, n), ri, {
      bConstMethod: !0,
      ePrivilege: 0,
      rgBrowserAPISites: [`store`, `community`],
    });
  }
  e.GetChatModerators = ie;
  function y(e, t, n) {
    return e.SendMsg(`SteamTV.AddWordBan#1`, x(ii, t, n), ai, {
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
    });
  }
  e.AddWordBan = y;
  function ae(e, t, n) {
    return e.SendMsg(`SteamTV.GetWordBans#1`, x(oi, t, n), si, {
      bConstMethod: !0,
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
    });
  }
  e.GetWordBans = ae;
  function b(e, t, n) {
    return e.SendMsg(`SteamTV.JoinChat#1`, x(ci, t, n), li, {
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
      rgBrowserAPISites: [`store`, `community`],
    });
  }
  e.JoinChat = b;
  function S(e, t, n) {
    return e.SendMsg(`SteamTV.Search#1`, x(ui, t, n), di, {
      bConstMethod: !0,
      ePrivilege: 0,
    });
  }
  e.Search = S;
  function oe(e, t, n) {
    return e.SendMsg(`SteamTV.GetSteamTVUserSettings#1`, x(fi, t, n), pi, {
      bConstMethod: !0,
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
    });
  }
  e.GetSteamTVUserSettings = oe;
  function se(e, t, n) {
    return e.SendMsg(`SteamTV.SetSteamTVUserSettings#1`, x(mi, t, n), hi, {
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
    });
  }
  e.SetSteamTVUserSettings = se;
  function C(e, t, n) {
    return e.SendMsg(`SteamTV.GetMyBroadcastChannels#1`, x(gi, t, n), _i, {
      bConstMethod: !0,
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
    });
  }
  e.GetMyBroadcastChannels = C;
  function ce(e, t, n) {
    return e.SendMsg(`SteamTV.GetHomePageContents#1`, x(Oi, t, n), ki, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
    });
  }
  e.GetHomePageContents = ce;
  function w(e, t, n) {
    return e.SendMsg(`SteamTV.AppCheer#1`, x(Pi, t, n), Fi, {
      ePrivilege: 0,
      eWebAPIKeyRequirement: 1,
    });
  }
  e.AppCheer = w;
})((Ii ||= {}));
var Li = 4,
  Ri = 500,
  zi = 10,
  Bi = class e {
    m_mapChats = new Map();
    m_cmInterface;
    SetCMInterface(e) {
      this.m_cmInterface = e;
    }
    GetCMInterface() {
      return this.m_cmInterface;
    }
    GetChat(e, t) {
      return this.m_mapChats.get(e) || this.m_mapChats.get(t);
    }
    GetOrCreateChat(e, t) {
      let n = this.GetChat(e, t);
      return (n || ((n = new Vi()), this.m_mapChats.set(e || t, n)), n);
    }
    static s_Singleton;
    static Get() {
      return ((e.s_Singleton ||= new e()), e.s_Singleton);
    }
    constructor() {
      c(this);
    }
  };
O([p], Bi.prototype, `m_mapChats`, void 0);
var Vi = class {
  m_ulBroadcastChannelID = ``;
  m_ulChatID = ``;
  m_strFlairGroupID = ``;
  m_bAutoScroll = !0;
  m_ulBroadcastID = ``;
  m_ulBroadcastSteamID = ``;
  m_tsFirstRequest = null;
  m_nFromFirstRequestMS = 0;
  m_nNextChatTS = 0;
  m_cConsecutiveErrors = 0;
  m_nNudgeFactorMS = 0;
  m_nLastSleepMS = 0;
  m_bReconnecting = !1;
  m_strChatURL = ``;
  m_unInstanceID = Math.floor(Math.random() * 4294967296);
  m_strUserSteamID = ``;
  m_regexUserEmoticons;
  m_chatScheduledFunc;
  m_steamInterface;
  m_textFilterStore;
  m_bHasAddedWelcomeChat = !1;
  m_mapMutedUsers = {};
  m_mapChannelModeratorUsers = new Map();
  m_mapBroadcastModeratorUsers = new Map();
  m_nRateLimitSeconds = 0;
  m_bRateLimited = !1;
  m_rgChatMessages = [];
  m_rgAnnouncements = [];
  m_latestAnnouncement = null;
  constructor() {
    (c(this), (this.m_steamInterface = this.CreateSteamInterface()));
  }
  InitTextFilter() {
    this.m_textFilterStore = new dn({ BIsFriend: pn() });
    let e = 0;
    (_.steamid !== `` && (e = new Ue(_.steamid).GetAccountID()),
      this.m_textFilterStore.Init(e, null, new or()));
  }
  get TextFilterStore() {
    return this.m_textFilterStore;
  }
  GetBroadcastSteamID() {
    return this.m_ulBroadcastSteamID;
  }
  GetUserSteamID() {
    return this.m_strUserSteamID;
  }
  CreateSteamInterface() {
    return (
      (Qe() ?? Bi.Get().GetCMInterface()) ||
      gt(new ht(h.WEBAPI_BASE_URL, _.webapi_token))
    );
  }
  StartForSteamID(e, t) {
    ((this.m_steamInterface = this.CreateSteamInterface()),
      (this.m_ulBroadcastSteamID = e),
      (this.m_ulBroadcastID = t),
      this.InitTextFilter(),
      this.RequestChatInfo());
  }
  StartForChannel(e) {
    ((this.m_steamInterface = this.CreateSteamInterface()),
      (this.m_ulBroadcastChannelID = e),
      (this.m_strUserSteamID = _.steamid),
      this.InitTextFilter(),
      this.JoinChannelChat());
  }
  Stop() {
    this.m_chatScheduledFunc && this.m_chatScheduledFunc.Cancel();
  }
  async SendMessage(e) {
    let t = e.trim();
    if (t.length != 0)
      try {
        let e = E.Init(tt);
        e.SetBodyFields({
          chat_id: this.m_ulChatID,
          message: t,
          instance_id: this.m_unInstanceID.toString(),
        });
        let n = await B.PostChatMessage(
            this.m_steamInterface.GetServiceTransport(),
            e,
          ),
          r = {
            result: n.GetEResult(),
            cooldown_time_seconds: n.Body().cooldown_time_seconds(),
            in_game: n.Body().in_game(),
            persona_name: n.Body().persona_name(),
          };
        if (r && r.result && r.result != 1) {
          let e = ``;
          ((e =
            r.result == 17
              ? b(`#BroadcastChat_YouMuted`)
              : r.result == 84
                ? b(`#BroadcastChat_Cooldown`, r.cooldown_time_seconds ?? 0)
                : b(`#BroadcastChat_FailedToSendMsg`, t)),
            this.m_rgChatMessages.push({
              type: V.Error,
              msg: e,
              client_ts: Number(new Date()),
              instance_id: this.m_unInstanceID,
              in_game: r.in_game,
              persona_name: r.persona_name,
              steamid: ``,
            }));
          return;
        }
        ((this.m_nRateLimitSeconds ||= r.cooldown_time_seconds ?? 0),
          this.m_nRateLimitSeconds &&
            ((this.m_bRateLimited = !0),
            setTimeout(
              () => (this.m_bRateLimited = !1),
              this.m_nRateLimitSeconds * 1e3,
            )));
      } catch {
        this.m_rgChatMessages.push({
          type: V.Error,
          msg: b(`#BroadcastChat_FailedToSendMsg`, t),
          client_ts: Number(new Date()),
          instance_id: this.m_unInstanceID,
          in_game: !1,
          persona_name: ``,
          steamid: ``,
        });
      }
  }
  async RequestChatInfo(e) {
    ((this.m_cConsecutiveErrors = 0), (this.m_bReconnecting = !1));
    try {
      let t = {
          steamid: this.m_ulBroadcastSteamID,
          broadcastid: this.m_ulBroadcastID,
          sessionid: ce(),
          notoken: 1,
        },
        n = await zt.default.get(`${h.CHAT_BASE_URL}broadcast/getchatinfo`, {
          params: t,
          withCredentials: !0,
          cancelToken: e?.token,
        });
      (e && e.token.reason) ||
        ie(() => {
          let e = n.data;
          ((this.m_strChatURL = e.view_url_template ?? ``),
            (this.m_ulChatID = e.chat_id ?? ``),
            (this.m_strFlairGroupID = e.flair_group_ids?.[0] ?? ``),
            e.blocked && console.log(`User is blocked from chat`),
            e.steamid && (this.m_strUserSteamID = e.steamid),
            e.emoticons && this.SetOwnedEmoticons(e.emoticons),
            (this.m_bHasAddedWelcomeChat ||=
              (this.m_rgChatMessages.push({
                type: V.Notification,
                msg: b(`#BroadcastChat_DefaultMessage`),
                client_ts: Number(new Date()),
                instance_id: this.m_unInstanceID,
                in_game: !1,
                persona_name: ``,
                steamid: ``,
              }),
              !0)),
            this.m_mapBroadcastModeratorUsers.clear(),
            e.moderators_steamid &&
              e.moderators_steamid.forEach((e) =>
                this.m_mapBroadcastModeratorUsers.set(e, !0),
              ),
            (this.m_chatScheduledFunc = new oe()),
            this.m_chatScheduledFunc.Schedule(0, this.RequestLoop));
        });
    } catch (e) {
      (console.error(e), console.log(`Failed to get chat info!`));
    }
  }
  async JoinChannelChat() {
    try {
      let e = E.Init(ci);
      e.SetBodyFields({ broadcast_channel_id: this.m_ulBroadcastChannelID });
      let t = await Ii.JoinChat(this.m_steamInterface.GetServiceTransport(), e),
        n = t.Body().view_url_template(),
        r = t.Body().chat_id();
      if (!r || !n) {
        console.log(`Failed to join channel chat`);
        return;
      }
      ((this.m_strChatURL = n),
        (this.m_ulChatID = r),
        (this.m_strFlairGroupID =
          t.Body().flair_group_ids() && t.Body().flair_group_ids()[0]),
        this.FetchChatModerators(),
        (this.m_rgChatMessages = []),
        this.m_rgChatMessages.push({
          type: V.Notification,
          msg: b(`#BroadcastChat_DefaultMessage`),
          client_ts: Number(new Date()),
          instance_id: this.m_unInstanceID,
          in_game: !1,
          persona_name: ``,
          steamid: ``,
        }),
        (this.m_bHasAddedWelcomeChat = !0),
        (this.m_chatScheduledFunc = new oe()),
        this.m_chatScheduledFunc.Schedule(0, this.RequestLoop));
    } catch (e) {
      (console.error(e), console.log(`Failed to join chat!`));
    }
  }
  async FetchChatModerators() {
    let e = E.Init(ti);
    e.SetBodyFields({ broadcast_channel_id: this.m_ulBroadcastChannelID });
    let t = (
        await Ii.GetChatModerators(
          this.m_steamInterface.GetServiceTransport(),
          e,
        )
      )
        .Body()
        .results(),
      n = new Map();
    (t.forEach((e) => {
      let t = e.steamid();
      t && n.set(t, !0);
    }),
      (this.m_mapChannelModeratorUsers = n));
  }
  ReplaceChatAnnouncementIfAny(e) {
    e.announcements?.length > 0
      ? ((this.m_rgAnnouncements = e.announcements.reverse()),
        (this.m_latestAnnouncement &&
          JSON.stringify(this.m_latestAnnouncement) ==
            JSON.stringify(
              this.m_rgAnnouncements[this.m_rgAnnouncements.length - 1],
            )) ||
          (this.m_latestAnnouncement =
            this.m_rgAnnouncements[this.m_rgAnnouncements.length - 1]))
      : this.m_rgAnnouncements.length > 0 &&
        ((this.m_rgAnnouncements = []), (this.m_latestAnnouncement = null));
  }
  async RequestLoop() {
    let e = {},
      t = this.m_strChatURL.replace(`{0}`, this.m_nNextChatTS.toString());
    t == this.m_strChatURL &&
      this.m_nNextChatTS > 0 &&
      (e.t = this.m_nNextChatTS);
    try {
      let n = (await zt.default.get(t, { params: e })).data;
      this.m_cConsecutiveErrors = 0;
      let r = n.messages
        .map((e) => ({ ...e, type: V.Chat, client_ts: Number(new Date()) }))
        .filter((e) => !this.IsUserMutedLocally(e.steamid));
      (this.m_rgChatMessages.push(...r), this.ReplaceChatAnnouncementIfAny(n));
      let i = this.m_bAutoScroll ? 150 : 300;
      if (
        (this.m_rgChatMessages.length > i &&
          this.m_rgChatMessages.splice(0, this.m_rgChatMessages.length - i),
        n.muted)
      )
        for (let e of n.muted) {
          let t =
            e.muted == this.m_strUserSteamID
              ? b(`#BroadcastChat_YouMuted`, e.persona_name)
              : b(`#BroadcastChat_UserMuted`, e.persona_name);
          this.m_rgChatMessages.push({
            type: V.Notification,
            msg: t,
            client_ts: Number(new Date()),
            instance_id: this.m_unInstanceID,
            in_game: !1,
            persona_name: ``,
            steamid: ``,
          });
        }
      if (n.remove_msgs)
        for (let e of n.remove_msgs) this.RemoveUserMessagesLocal(e.steamid);
      let a = 0;
      if (
        this.m_tsFirstRequest == null ||
        this.m_nNextChatTS == 0 ||
        n.initial_delay
      ) {
        if (n.initial_delay === `undefined`) {
          console.log(
            `Need initial_delay to know when to request first chat message`,
          );
          return;
        }
        ((this.m_tsFirstRequest = performance.now() + n.initial_delay),
          (this.m_nFromFirstRequestMS = 0),
          (this.m_nNextChatTS = n.next_request),
          (a = n.initial_delay));
      } else {
        if (n.next_request < this.m_nNextChatTS) {
          console.log(`Next request in past`);
          return;
        }
        ((this.m_nFromFirstRequestMS += n.next_request - this.m_nNextChatTS),
          (this.m_nNextChatTS = n.next_request),
          (a =
            this.m_tsFirstRequest +
            this.m_nFromFirstRequestMS -
            performance.now() +
            this.m_nNudgeFactorMS));
      }
      ((this.m_bReconnecting &&= !1),
        (this.m_nLastSleepMS = a),
        a < 0 && (a = 0),
        this.m_chatScheduledFunc?.Schedule(a, this.RequestLoop));
    } catch {
      if (
        (console.log(
          `Failed to get chat messages. Previous sleep set to: ` +
            this.m_nLastSleepMS +
            ` firstReq: ` +
            this.m_tsFirstRequest +
            ` firstFromRequest: ` +
            this.m_nFromFirstRequestMS +
            ` nudge: ` +
            this.m_nNudgeFactorMS,
        ),
        this.m_cConsecutiveErrors++,
        (this.m_nNudgeFactorMS += zi),
        this.m_cConsecutiveErrors >= Li)
      ) {
        if (this.m_tsFirstRequest == null) {
          this.m_rgChatMessages.push({
            type: V.Error,
            msg: b(`#BroadcastChat_UnableToJoinChat`),
            client_ts: Number(new Date()),
            instance_id: this.m_unInstanceID,
            in_game: !1,
            persona_name: ``,
            steamid: ``,
          });
          return;
        }
        ((this.m_cConsecutiveErrors = 0),
          (this.m_bReconnecting = !0),
          this.SyncChat());
      }
      this.m_chatScheduledFunc?.Schedule(Ri, this.RequestLoop);
    }
  }
  GetUserEmoticons() {
    return this.m_regexUserEmoticons;
  }
  SetOwnedEmoticons(e) {
    let t = [];
    for (let n = 0; n < e.length; n++) {
      let r = e[n];
      r.length >= 2 && r[0] == `:`
        ? t.push(r.substr(1, r.length - 2))
        : t.push(r);
    }
    let n = `:(` + t.join(`|`) + `):`;
    this.m_regexUserEmoticons = new RegExp(n, `g`);
  }
  async UpdateBroadcastChatModerator(e, t, n) {
    {
      let r = new FormData();
      (r.append(`broadcaststeamid`, this.m_ulBroadcastSteamID),
        r.append(`moderatorsteamid`, e),
        r.append(`bAdd`, t ? `1` : `0`),
        r.append(`sessionid`, ce()));
      try {
        (await zt.default.post(
          `${h.CHAT_BASE_URL}broadcast/ajaxupdatechannelmod`,
          r,
        ),
          this.m_mapBroadcastModeratorUsers.set(e, t));
        let i = b(
          t
            ? `#BroadcastChat_AddedModerator`
            : `#BroadcastChat_RemovedModerator`,
          n,
        );
        this.m_rgChatMessages.push({ type: V.Notification, msg: i });
      } catch {
        let e = b(
          t
            ? `#BroadcastChat_AddModeratorFailed`
            : `#BroadcastChat_RemoveModeratorFailed`,
          n,
        );
        this.m_rgChatMessages.push({ type: V.Error, msg: e });
      }
    }
  }
  async UpdateUserChatBan(e, t, n, r, i, a) {
    let o = this.m_ulBroadcastSteamID,
      s = this.m_strUserSteamID;
    if (this.m_ulBroadcastChannelID) {
      let t = E.Init(Yr);
      (t.SetBodyFields({
        broadcast_channel_id: this.m_ulBroadcastChannelID,
        chatter_steamid: e,
        duration: n * 3600,
        permanent: r,
        undo: a,
      }),
        await Ii.AddChatBan(this.m_steamInterface.GetServiceTransport(), t));
    } else {
      let a = new FormData();
      (a.append(`broadcaststeamid`, o),
        a.append(`issuersteamid`, s),
        a.append(`chattersteamid`, e),
        a.append(`bantype`, t),
        a.append(`duration`, n.toString()),
        a.append(`perm`, r ? `1` : `0`),
        a.append(`sessionid`, ce()));
      try {
        (await zt.default.post(
          `${h.CHAT_BASE_URL}broadcast/ajaxupdateusermute`,
          a,
        ),
          t == 0
            ? delete this.m_mapMutedUsers[e]
            : (this.m_mapMutedUsers[e] = i));
      } catch {
        console.log(`Failed to update mute for ` + i);
      }
    }
  }
  async MuteUserForSession(e, t) {
    if (e == this.m_strUserSteamID || this.m_ulBroadcastSteamID == e) return;
    let n = this.m_ulBroadcastSteamID == this.m_strUserSteamID;
    if (!this.m_mapMutedUsers[e]) {
      this.m_mapMutedUsers[e] = t;
      try {
        let t = E.Init(et);
        (t.SetBodyFields({
          chat_id: this.m_ulChatID,
          user_steamid: e,
          muted: !0,
        }),
          await B.MuteBroadcastChatUser(
            this.m_steamInterface.GetServiceTransport(),
            t,
          ));
      } catch {
        n &&
          (this.m_rgChatMessages.push({
            type: V.Error,
            msg: b(`#BroadcastChat_UserMuteFailed`, t),
            client_ts: Number(new Date()),
            instance_id: this.m_unInstanceID,
            in_game: !1,
            persona_name: ``,
            steamid: ``,
          }),
          delete this.m_mapMutedUsers[e]);
      }
    }
    n ||
      this.m_rgChatMessages.push({
        type: V.Notification,
        msg: b(`#BroadcastChat_UserMutedLocal`, t),
        client_ts: Number(new Date()),
        instance_id: this.m_unInstanceID,
        in_game: !1,
        persona_name: ``,
        steamid: ``,
      });
  }
  async UnmuteUserForSession(e, t) {
    if (e != this.m_strUserSteamID) {
      if (
        (this.m_mapMutedUsers[e] && delete this.m_mapMutedUsers[e],
        this.m_ulBroadcastSteamID == this.m_strUserSteamID)
      )
        try {
          let n = E.Init(et);
          (n.SetBodyFields({
            chat_id: this.m_ulChatID,
            user_steamid: e,
            muted: !1,
          }),
            await B.MuteBroadcastChatUser(
              this.m_steamInterface.GetServiceTransport(),
              n,
            ),
            this.m_rgChatMessages.push({
              type: V.Notification,
              msg: b(`#BroadcastChat_UserUnmutedLocal`, t),
              client_ts: Number(new Date()),
              instance_id: this.m_unInstanceID,
              in_game: !1,
              persona_name: ``,
              steamid: ``,
            }));
        } catch {
          this.m_rgChatMessages.push({
            type: V.Error,
            msg: b(`#BroadcastChat_UserUnmuteFailed`, t),
            client_ts: Number(new Date()),
            instance_id: this.m_unInstanceID,
            in_game: !1,
            persona_name: ``,
            steamid: ``,
          });
        }
      else
        this.m_rgChatMessages.push({
          type: V.Notification,
          msg: b(`#BroadcastChat_UserUnmutedLocal`, t),
          client_ts: Number(new Date()),
          instance_id: this.m_unInstanceID,
          in_game: !1,
          persona_name: ``,
          steamid: ``,
        });
    }
  }
  RemoveUserMessagesLocal(e) {
    this.m_rgChatMessages = this.m_rgChatMessages.filter(
      (t) => t.steamid !== e,
    );
  }
  async RemoveUserMessagesServer(e, t) {
    if (e != this.m_strUserSteamID)
      try {
        let t = E.Init(rt);
        (t.SetBodyFields({ chat_id: this.m_ulChatID, user_steamid: e }),
          await B.RemoveUserChatText(
            this.m_steamInterface.GetServiceTransport(),
            t,
          ));
      } catch {
        this.m_rgChatMessages.push({
          type: V.Error,
          msg: b(`#BroadcastChat_RemoveMessagesFailed`, t),
          client_ts: Number(new Date()),
          instance_id: this.m_unInstanceID,
          in_game: !1,
          persona_name: ``,
          steamid: ``,
        });
      }
  }
  async UpdateChatMessageFlair(e) {
    let t = E.Init(nt);
    (t.SetBodyFields({
      chat_id: this.m_ulChatID,
      flair: `^${this.m_strFlairGroupID}^:${e}:`,
    }),
      await B.UpdateChatMessageFlair(
        this.m_steamInterface.GetServiceTransport(),
        t,
      ));
  }
  IsUserMutedLocally(e) {
    return !!this.m_mapMutedUsers[e];
  }
  BIsUserBroadcastModerator(e) {
    return this.m_mapBroadcastModeratorUsers.has(e);
  }
  IsUserBroadcaster(e) {
    return e === this.m_ulBroadcastSteamID;
  }
  SyncChat() {
    ((this.m_tsFirstRequest = null),
      (this.m_nFromFirstRequestMS = 0),
      (this.m_nNextChatTS = 0),
      (this.m_rgChatMessages = []));
  }
};
(O([p], Vi.prototype, `m_mapChannelModeratorUsers`, void 0),
  O([p], Vi.prototype, `m_mapBroadcastModeratorUsers`, void 0),
  O([p], Vi.prototype, `m_nRateLimitSeconds`, void 0),
  O([p], Vi.prototype, `m_bRateLimited`, void 0),
  O([p], Vi.prototype, `m_rgChatMessages`, void 0),
  O([p], Vi.prototype, `m_latestAnnouncement`, void 0),
  O([f], Vi.prototype, `FetchChatModerators`, null),
  O([f], Vi.prototype, `RequestLoop`, null),
  O([f], Vi.prototype, `MuteUserForSession`, null));
var Hi = r((t, n, r) => {
  (function (e, r) {
    typeof t == `object` && n !== void 0
      ? (n.exports = r())
      : typeof define == `function` && define.amd
        ? define(r)
        : (e.moment = r());
  })(r, function () {
    var t;
    function r() {
      return t.apply(null, arguments);
    }
    function i(e) {
      t = e;
    }
    function a(e) {
      return (
        e instanceof Array ||
        Object.prototype.toString.call(e) === `[object Array]`
      );
    }
    function o(e) {
      return (
        e != null && Object.prototype.toString.call(e) === `[object Object]`
      );
    }
    function s(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }
    function c(e) {
      if (Object.getOwnPropertyNames)
        return Object.getOwnPropertyNames(e).length === 0;
      for (var t in e) if (s(e, t)) return !1;
      return !0;
    }
    function l(e) {
      return e === void 0;
    }
    function u(e) {
      return (
        typeof e == `number` ||
        Object.prototype.toString.call(e) === `[object Number]`
      );
    }
    function d(e) {
      return (
        e instanceof Date ||
        Object.prototype.toString.call(e) === `[object Date]`
      );
    }
    function f(e, t) {
      var n = [],
        r,
        i = e.length;
      for (r = 0; r < i; ++r) n.push(t(e[r], r));
      return n;
    }
    function p(e, t) {
      for (var n in t) s(t, n) && (e[n] = t[n]);
      return (
        s(t, `toString`) && (e.toString = t.toString),
        s(t, `valueOf`) && (e.valueOf = t.valueOf),
        e
      );
    }
    function m(e, t, n, r) {
      return pr(e, t, n, r, !0).utc();
    }
    function h() {
      return {
        empty: !1,
        unusedTokens: [],
        unusedInput: [],
        overflow: -2,
        charsLeftOver: 0,
        nullInput: !1,
        invalidEra: null,
        invalidMonth: null,
        invalidOffset: null,
        invalidFormat: !1,
        userInvalidated: !1,
        iso: !1,
        parsedDateParts: [],
        era: null,
        meridiem: null,
        rfc2822: !1,
        weekdayMismatch: !1,
      };
    }
    function g(e) {
      return ((e._pf ??= h()), e._pf);
    }
    var _ = Array.prototype.some
      ? Array.prototype.some
      : function (e) {
          for (var t = Object(this), n = t.length >>> 0, r = 0; r < n; r++)
            if (r in t && e.call(this, t[r], r, t)) return !0;
          return !1;
        };
    function ee(e) {
      var t = null,
        n = !1,
        r = e._d && !isNaN(e._d.getTime());
      if (
        (r &&
          ((t = g(e)),
          (n = _.call(t.parsedDateParts, function (e) {
            return e != null;
          })),
          (r =
            t.overflow < 0 &&
            !t.empty &&
            !t.invalidEra &&
            !t.invalidMonth &&
            !t.invalidOffset &&
            !t.invalidWeekday &&
            !t.weekdayMismatch &&
            !t.nullInput &&
            !t.invalidFormat &&
            !t.userInvalidated &&
            (!t.meridiem || (t.meridiem && n))),
          e._strict &&
            (r =
              r &&
              t.charsLeftOver === 0 &&
              t.unusedTokens.length === 0 &&
              t.bigHour === void 0)),
        Object.isFrozen == null || !Object.isFrozen(e))
      )
        e._isValid = r;
      else return r;
      return e._isValid;
    }
    function v(e) {
      var t = m(NaN);
      return (e == null ? (g(t).userInvalidated = !0) : p(g(t), e), t);
    }
    var te = (r.momentProperties = []),
      ne = !1;
    function re(e, t) {
      var n,
        r,
        i,
        a = te.length;
      if (
        (l(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject),
        l(t._i) || (e._i = t._i),
        l(t._f) || (e._f = t._f),
        l(t._l) || (e._l = t._l),
        l(t._strict) || (e._strict = t._strict),
        l(t._tzm) || (e._tzm = t._tzm),
        l(t._isUTC) || (e._isUTC = t._isUTC),
        l(t._offset) || (e._offset = t._offset),
        l(t._pf) || (e._pf = g(t)),
        l(t._locale) || (e._locale = t._locale),
        a > 0)
      )
        for (n = 0; n < a; n++) ((r = te[n]), (i = t[r]), l(i) || (e[r] = i));
      return e;
    }
    function ie(e) {
      (re(this, e),
        (this._d = new Date(e._d == null ? NaN : e._d.getTime())),
        this.isValid() || (this._d = new Date(NaN)),
        ne === !1 && ((ne = !0), r.updateOffset(this), (ne = !1)));
    }
    function y(e) {
      return e instanceof ie || (e != null && e._isAMomentObject != null);
    }
    function ae(e) {
      r.suppressDeprecationWarnings === !1 &&
        typeof console < `u` &&
        console.warn &&
        console.warn(`Deprecation warning: ` + e);
    }
    function b(e, t) {
      var n = !0;
      return p(function () {
        if (
          (r.deprecationHandler != null && r.deprecationHandler(null, e), n)
        ) {
          var i = [],
            a,
            o,
            c,
            l = arguments.length;
          for (o = 0; o < l; o++) {
            if (((a = ``), typeof arguments[o] == `object`)) {
              for (c in ((a +=
                `
[` +
                o +
                `] `),
              arguments[0]))
                s(arguments[0], c) && (a += c + `: ` + arguments[0][c] + `, `);
              a = a.slice(0, -2);
            } else a = arguments[o];
            i.push(a);
          }
          (ae(
            e +
              `
Arguments: ` +
              Array.prototype.slice.call(i).join(``) +
              `
` +
              Error().stack,
          ),
            (n = !1));
        }
        return t.apply(this, arguments);
      }, t);
    }
    var x = {};
    function S(e, t) {
      (r.deprecationHandler != null && r.deprecationHandler(e, t),
        x[e] ||
          (ae(
            t +
              `
` +
              Error().stack,
          ),
          (x[e] = !0)));
    }
    ((r.suppressDeprecationWarnings = !1), (r.deprecationHandler = null));
    function oe(e) {
      return (
        (typeof Function < `u` && e instanceof Function) ||
        Object.prototype.toString.call(e) === `[object Function]`
      );
    }
    var se = {
      D: `date`,
      dates: `date`,
      date: `date`,
      d: `day`,
      days: `day`,
      day: `day`,
      e: `weekday`,
      weekdays: `weekday`,
      weekday: `weekday`,
      E: `isoWeekday`,
      isoweekdays: `isoWeekday`,
      isoweekday: `isoWeekday`,
      DDD: `dayOfYear`,
      dayofyears: `dayOfYear`,
      dayofyear: `dayOfYear`,
      h: `hour`,
      hours: `hour`,
      hour: `hour`,
      ms: `millisecond`,
      milliseconds: `millisecond`,
      millisecond: `millisecond`,
      m: `minute`,
      minutes: `minute`,
      minute: `minute`,
      M: `month`,
      months: `month`,
      month: `month`,
      Q: `quarter`,
      quarters: `quarter`,
      quarter: `quarter`,
      s: `second`,
      seconds: `second`,
      second: `second`,
      gg: `weekYear`,
      weekyears: `weekYear`,
      weekyear: `weekYear`,
      GG: `isoWeekYear`,
      isoweekyears: `isoWeekYear`,
      isoweekyear: `isoWeekYear`,
      w: `week`,
      weeks: `week`,
      week: `week`,
      W: `isoWeek`,
      isoweeks: `isoWeek`,
      isoweek: `isoWeek`,
      y: `year`,
      years: `year`,
      year: `year`,
    };
    function C(e) {
      return typeof e == `string` ? se[e] || se[e.toLowerCase()] : void 0;
    }
    function ce(e) {
      var t = {},
        n,
        r;
      for (r in e) s(e, r) && ((n = C(r)), n && (t[n] = e[r]));
      return t;
    }
    var w = {
      date: 9,
      day: 11,
      weekday: 11,
      isoWeekday: 11,
      dayOfYear: 4,
      hour: 13,
      millisecond: 16,
      minute: 14,
      month: 8,
      quarter: 7,
      second: 15,
      weekYear: 1,
      isoWeekYear: 1,
      week: 5,
      isoWeek: 5,
      year: 1,
    };
    function T(e) {
      var t = [],
        n;
      for (n in e) s(e, n) && t.push({ unit: n, priority: w[n] });
      return (
        t.sort(function (e, t) {
          return e.priority - t.priority;
        }),
        t
      );
    }
    function E(e, t, n) {
      var r = `` + Math.abs(e),
        i = t - r.length;
      return (
        (e >= 0 ? (n ? `+` : ``) : `-`) +
        (10 ** Math.max(0, i)).toString().substr(1) +
        r
      );
    }
    var le =
        /(\[[^\[]*\])|(\\e)|(\\)?(eHHmm|[Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
      D = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
      ue = {},
      O = {};
    function k(e, t, n, r) {
      var i = r;
      (typeof r == `string` &&
        (i = function () {
          return this[r]();
        }),
        e && (O[e] = i),
        t &&
          (O[t[0]] = function () {
            return E(i.apply(this, arguments), t[1], t[2]);
          }),
        n &&
          (O[n] = function () {
            return this.localeData().ordinal(i.apply(this, arguments), e);
          }));
    }
    function de(e) {
      return e.match(/\[[\s\S]/)
        ? e.replace(/^\[|\]$/g, ``)
        : e.replace(/\\/g, ``);
    }
    function A(e) {
      for (var t = e.match(le), n = 0, r = t.length; n < r; n++)
        O[t[n]] ? (t[n] = O[t[n]]) : (t[n] = de(t[n]));
      return function (n) {
        for (var i = ``, a = 0; a < r; a++)
          i += oe(t[a]) ? t[a].call(n, e) : t[a];
        return i;
      };
    }
    function fe(e, t) {
      if (!e.isValid()) return e.localeData().invalidDate();
      t = j(t, e.localeData());
      var n = `$` + t;
      return (s(ue, n) || (ue[n] = A(t)), ue[n](e));
    }
    function j(e, t) {
      var n = 5;
      function r(e) {
        return t.longDateFormat(e) || e;
      }
      for (D.lastIndex = 0; n >= 0 && D.test(e);)
        ((e = e.replace(D, r)), (D.lastIndex = 0), --n);
      return e;
    }
    var pe = /\d/,
      M = /\d\d/,
      N = /\d{3}/,
      me = /\d{4}/,
      he = /[+-]?\d{6}/,
      P = /\d\d?/,
      ge = /\d\d\d\d?/,
      _e = /\d\d\d\d\d\d?/,
      ve = /\d{1,3}/,
      ye = /\d{1,4}/,
      be = /[+-]?\d{1,6}/,
      xe = /\d+/,
      Se = /[+-]?\d+/,
      Ce = /Z|[+-]\d\d:?\d\d/gi,
      we = /Z|[+-]\d\d(?::?\d\d)?/gi,
      Te = /[+-]?\d+(\.\d{1,3})?/,
      Ee =
        /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,
      De = /^[1-9]\d?/,
      Oe = /^([1-9]\d|\d)/,
      ke = {};
    function F(e, t, n) {
      ke[e] = oe(t)
        ? t
        : function (e, r) {
            return e && n ? n : t;
          };
    }
    function Ae(e, t) {
      return s(ke, e) ? ke[e](t._strict, t._locale) : new RegExp(je(e));
    }
    function je(e) {
      return Me(
        e
          .replace(`\\`, ``)
          .replace(
            /\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,
            function (e, t, n, r, i) {
              return t || n || r || i;
            },
          ),
      );
    }
    function Me(e) {
      return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, `\\$&`);
    }
    function Ne(e) {
      return e < 0 ? Math.ceil(e) || 0 : Math.floor(e);
    }
    function I(e) {
      var t = +e,
        n = 0;
      return (t !== 0 && isFinite(t) && (n = Ne(t)), n);
    }
    var Pe = {};
    function L(e, t) {
      var n,
        r = t,
        i;
      for (
        typeof e == `string` && (e = [e]),
          u(t) &&
            (r = function (e, n) {
              n[t] = I(e);
            }),
          i = e.length,
          n = 0;
        n < i;
        n++
      )
        Pe[e[n]] = r;
    }
    function Fe(e, t) {
      L(e, function (e, n, r, i) {
        ((r._w = r._w || {}), t(e, r._w, r, i));
      });
    }
    function Ie(e, t, n) {
      t != null && s(Pe, e) && Pe[e](t, n._a, n, e);
    }
    function Le(e) {
      return (e % 4 == 0 && e % 100 != 0) || e % 400 == 0;
    }
    var R = 0,
      Re = 1,
      ze = 2,
      Be = 3,
      Ve = 4,
      He = 5,
      Ue = 6,
      We = 7,
      Ge = 8;
    (k(`Y`, 0, 0, function () {
      var e = this.year();
      return e <= 9999 ? E(e, 4) : `+` + e;
    }),
      k(0, [`YY`, 2], 0, function () {
        return this.year() % 100;
      }),
      k(0, [`YYYY`, 4], 0, `year`),
      k(0, [`YYYYY`, 5], 0, `year`),
      k(0, [`YYYYYY`, 6, !0], 0, `year`),
      F(`Y`, Se),
      F(`YY`, P, M),
      F(`YYYY`, ye, me),
      F(`YYYYY`, be, he),
      F(`YYYYYY`, be, he),
      L([`YYYYY`, `YYYYYY`], R),
      L(`YYYY`, function (e, t) {
        t[R] = e.length === 2 ? r.parseTwoDigitYear(e) : I(e);
      }),
      L(`YY`, function (e, t) {
        t[R] = r.parseTwoDigitYear(e);
      }),
      L(`Y`, function (e, t) {
        t[R] = parseInt(e, 10);
      }));
    function Ke(e) {
      return Le(e) ? 366 : 365;
    }
    r.parseTwoDigitYear = function (e) {
      return I(e) + (I(e) > 68 ? 1900 : 2e3);
    };
    var qe = Ye(`FullYear`, !0);
    function Je() {
      return Le(this.year());
    }
    function Ye(e, t) {
      return function (n) {
        return n == null
          ? Xe(this, e)
          : (Ze(this, e, n), r.updateOffset(this, t), this);
      };
    }
    function Xe(e, t) {
      if (!e.isValid()) return NaN;
      var n = e._d,
        r = e._isUTC;
      switch (t) {
        case `Milliseconds`:
          return r ? n.getUTCMilliseconds() : n.getMilliseconds();
        case `Seconds`:
          return r ? n.getUTCSeconds() : n.getSeconds();
        case `Minutes`:
          return r ? n.getUTCMinutes() : n.getMinutes();
        case `Hours`:
          return r ? n.getUTCHours() : n.getHours();
        case `Date`:
          return r ? n.getUTCDate() : n.getDate();
        case `Day`:
          return r ? n.getUTCDay() : n.getDay();
        case `Month`:
          return r ? n.getUTCMonth() : n.getMonth();
        case `FullYear`:
          return r ? n.getUTCFullYear() : n.getFullYear();
        default:
          return NaN;
      }
    }
    function Ze(e, t, n) {
      var r, i, a, o, s;
      if (e.isValid() && !isNaN(n)) {
        switch (((r = e._d), (i = e._isUTC), t)) {
          case `Milliseconds`:
            i ? r.setUTCMilliseconds(n) : r.setMilliseconds(n);
            return;
          case `Seconds`:
            i ? r.setUTCSeconds(n) : r.setSeconds(n);
            return;
          case `Minutes`:
            i ? r.setUTCMinutes(n) : r.setMinutes(n);
            return;
          case `Hours`:
            i ? r.setUTCHours(n) : r.setHours(n);
            return;
          case `Date`:
            i ? r.setUTCDate(n) : r.setDate(n);
            return;
          case `FullYear`:
            break;
          default:
            return;
        }
        ((a = n),
          (o = e.month()),
          (s = e.date()),
          (s = s === 29 && o === 1 && !Le(a) ? 28 : s),
          i ? r.setUTCFullYear(a, o, s) : r.setFullYear(a, o, s));
      }
    }
    function z(e) {
      return ((e = C(e)), oe(this[e]) ? this[e]() : this);
    }
    function Qe(e, t) {
      if (typeof e == `object`) {
        e = ce(e);
        var n = T(e),
          r,
          i = n.length;
        for (r = 0; r < i; r++) this[n[r].unit](e[n[r].unit]);
      } else if (((e = C(e)), oe(this[e]))) return this[e](t);
      return this;
    }
    function $e(e, t) {
      return ((e % t) + t) % t;
    }
    var B = Array.prototype.indexOf
      ? Array.prototype.indexOf
      : function (e) {
          for (var t = 0; t < this.length; ++t) if (this[t] === e) return t;
          return -1;
        };
    function et(e, t) {
      if (isNaN(e) || isNaN(t)) return NaN;
      var n = $e(t, 12);
      return (
        (e += (t - n) / 12), n === 1 ? (Le(e) ? 29 : 28) : 31 - ((n % 7) % 2)
      );
    }
    (k(`M`, [`MM`, 2], `Mo`, function () {
      return this.month() + 1;
    }),
      k(`MMM`, 0, 0, function (e) {
        return this.localeData().monthsShort(this, e);
      }),
      k(`MMMM`, 0, 0, function (e) {
        return this.localeData().months(this, e);
      }),
      F(`M`, P, De),
      F(`MM`, P, M),
      F(`MMM`, function (e, t) {
        return t.monthsShortRegex(e);
      }),
      F(`MMMM`, function (e, t) {
        return t.monthsRegex(e);
      }),
      L([`M`, `MM`], function (e, t) {
        t[Re] = I(e) - 1;
      }),
      L([`MMM`, `MMMM`], function (e, t, n, r) {
        var i = n._locale.monthsParse(e, r, n._strict);
        i == null ? (g(n).invalidMonth = e) : (t[Re] = i);
      }));
    var tt =
        `January_February_March_April_May_June_July_August_September_October_November_December`.split(
          `_`,
        ),
      nt = `Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec`.split(`_`),
      V = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
      rt = Ee,
      it = Ee,
      at = [
        `monthsParse`,
        `longMonthsParse`,
        `shortMonthsParse`,
        `monthsRegex`,
        `monthsShortRegex`,
        `monthsStrictRegex`,
        `monthsShortStrictRegex`,
      ];
    function ot(e, t) {
      for (var n = 0, r; n < at.length; n++)
        ((r = at[n]), s(t, r) || delete e[`_` + r]);
    }
    function st(e, t) {
      return e
        ? a(this._months)
          ? this._months[e.month()]
          : this._months[
              (this._months.isFormat || V).test(t) ? `format` : `standalone`
            ][e.month()]
        : a(this._months)
          ? this._months
          : this._months.standalone;
    }
    function ct(e, t) {
      return e
        ? a(this._monthsShort)
          ? this._monthsShort[e.month()]
          : this._monthsShort[V.test(t) ? `format` : `standalone`][e.month()]
        : a(this._monthsShort)
          ? this._monthsShort
          : this._monthsShort.standalone;
    }
    function lt(e, t, n) {
      var r,
        i,
        a,
        o = e.toLocaleLowerCase();
      if (!this._monthsParse)
        for (
          this._monthsParse = [],
            this._longMonthsParse = [],
            this._shortMonthsParse = [],
            r = 0;
          r < 12;
          ++r
        )
          ((a = m([2e3, r])),
            (this._shortMonthsParse[r] = this.monthsShort(
              a,
              ``,
            ).toLocaleLowerCase()),
            (this._longMonthsParse[r] = this.months(
              a,
              ``,
            ).toLocaleLowerCase()));
      return n
        ? t === `MMM`
          ? ((i = B.call(this._shortMonthsParse, o)), i === -1 ? null : i)
          : ((i = B.call(this._longMonthsParse, o)), i === -1 ? null : i)
        : t === `MMM`
          ? ((i = B.call(this._shortMonthsParse, o)),
            i === -1
              ? ((i = B.call(this._longMonthsParse, o)), i === -1 ? null : i)
              : i)
          : ((i = B.call(this._longMonthsParse, o)),
            i === -1
              ? ((i = B.call(this._shortMonthsParse, o)), i === -1 ? null : i)
              : i);
    }
    function ut(e, t, n) {
      var r, i, a;
      if (this._monthsParseExact) return lt.call(this, e, t, n);
      for (
        this._monthsParse ||
          ((this._monthsParse = []),
          (this._longMonthsParse = []),
          (this._shortMonthsParse = [])),
          r = 0;
        r < 12;
        r++
      )
        if (
          ((i = m([2e3, r])),
          n &&
            !this._longMonthsParse[r] &&
            ((this._longMonthsParse[r] = RegExp(
              `^` + this.months(i, ``).replace(`.`, ``) + `$`,
              `i`,
            )),
            (this._shortMonthsParse[r] = RegExp(
              `^` + this.monthsShort(i, ``).replace(`.`, ``) + `$`,
              `i`,
            ))),
          !n &&
            !this._monthsParse[r] &&
            ((a = `^` + this.months(i, ``) + `|^` + this.monthsShort(i, ``)),
            (this._monthsParse[r] = new RegExp(a.replace(`.`, ``), `i`))),
          (n && t === `MMMM` && this._longMonthsParse[r].test(e)) ||
            (n && t === `MMM` && this._shortMonthsParse[r].test(e)) ||
            (!n && this._monthsParse[r].test(e)))
        )
          return r;
    }
    function dt(e, t) {
      if (!e.isValid()) return e;
      if (typeof t == `string`) {
        if (/^\d+$/.test(t)) t = I(t);
        else if (((t = e.localeData().monthsParse(t)), !u(t))) return e;
      }
      var n = t,
        r = e.date();
      return (
        (r = r < 29 ? r : Math.min(r, et(e.year(), n))),
        e._isUTC ? e._d.setUTCMonth(n, r) : e._d.setMonth(n, r),
        e
      );
    }
    function ft(e) {
      return e == null
        ? Xe(this, `Month`)
        : (dt(this, e), r.updateOffset(this, !0), this);
    }
    function pt() {
      return et(this.year(), this.month());
    }
    function mt(e) {
      return this._monthsParseExact
        ? (s(this, `_monthsRegex`) || gt.call(this),
          e ? this._monthsShortStrictRegex : this._monthsShortRegex)
        : (s(this, `_monthsShortRegex`) || (this._monthsShortRegex = rt),
          this._monthsShortStrictRegex && e
            ? this._monthsShortStrictRegex
            : this._monthsShortRegex);
    }
    function ht(e) {
      return this._monthsParseExact
        ? (s(this, `_monthsRegex`) || gt.call(this),
          e ? this._monthsStrictRegex : this._monthsRegex)
        : (s(this, `_monthsRegex`) || (this._monthsRegex = it),
          this._monthsStrictRegex && e
            ? this._monthsStrictRegex
            : this._monthsRegex);
    }
    function gt() {
      function e(e, t) {
        return t.length - e.length;
      }
      for (var t = [], n = [], r = [], i = 0, a, o, s; i < 12; i++)
        ((a = m([2e3, i])),
          (o = Me(this.monthsShort(a, ``))),
          (s = Me(this.months(a, ``))),
          t.push(o),
          n.push(s),
          r.push(s),
          r.push(o));
      (t.sort(e),
        n.sort(e),
        r.sort(e),
        (this._monthsRegex = RegExp(`^(` + r.join(`|`) + `)`, `i`)),
        (this._monthsShortRegex = this._monthsRegex),
        (this._monthsStrictRegex = RegExp(`^(` + n.join(`|`) + `)`, `i`)),
        (this._monthsShortStrictRegex = RegExp(`^(` + t.join(`|`) + `)`, `i`)));
    }
    (k(`d`, 0, `do`, `day`),
      k(`dd`, 0, 0, function (e) {
        return this.localeData().weekdaysMin(this, e);
      }),
      k(`ddd`, 0, 0, function (e) {
        return this.localeData().weekdaysShort(this, e);
      }),
      k(`dddd`, 0, 0, function (e) {
        return this.localeData().weekdays(this, e);
      }),
      k(`e`, 0, 0, `weekday`),
      k(`E`, 0, 0, `isoWeekday`),
      k(`eHHmm`, 0, 0, function () {
        return `` + this.weekday() + E(this.hours(), 2) + E(this.minutes(), 2);
      }),
      F(`d`, P),
      F(`e`, P),
      F(`E`, P),
      F(`eHHmm`, _e),
      F(`dd`, function (e, t) {
        return t.weekdaysMinRegex(e);
      }),
      F(`ddd`, function (e, t) {
        return t.weekdaysShortRegex(e);
      }),
      F(`dddd`, function (e, t) {
        return t.weekdaysRegex(e);
      }),
      Fe([`dd`, `ddd`, `dddd`], function (e, t, n, r) {
        var i = n._locale.weekdaysParse(e, r, n._strict);
        i == null ? (g(n).invalidWeekday = e) : (t.d = i);
      }),
      Fe([`d`, `e`, `E`], function (e, t, n, r) {
        t[r] = I(e);
      }),
      Fe(`eHHmm`, function (e, t, n) {
        var r = e.length - 4;
        ((t.e = I(e.substr(0, r))),
          (n._a[Be] = I(e.substr(r, 2))),
          (n._a[Ve] = I(e.substr(r + 2))));
      }));
    function _t(e, t) {
      return typeof e == `string`
        ? isNaN(e)
          ? ((e = t.weekdaysParse(e)), typeof e == `number` ? e : null)
          : parseInt(e, 10)
        : e;
    }
    function vt(e, t) {
      return typeof e == `string`
        ? t.weekdaysParse(e) % 7 || 7
        : isNaN(e)
          ? null
          : e;
    }
    function yt(e, t) {
      return e.slice(t, 7).concat(e.slice(0, t));
    }
    var bt = `Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday`.split(
        `_`,
      ),
      xt = `Sun_Mon_Tue_Wed_Thu_Fri_Sat`.split(`_`),
      St = `Su_Mo_Tu_We_Th_Fr_Sa`.split(`_`),
      Ct = Ee,
      wt = Ee,
      Tt = Ee,
      Et = [
        `weekdaysParse`,
        `fullWeekdaysParse`,
        `shortWeekdaysParse`,
        `minWeekdaysParse`,
        `weekdaysRegex`,
        `weekdaysShortRegex`,
        `weekdaysMinRegex`,
        `weekdaysStrictRegex`,
        `weekdaysShortStrictRegex`,
        `weekdaysMinStrictRegex`,
      ];
    function Dt(e, t) {
      for (var n = 0, r; n < Et.length; n++)
        ((r = Et[n]), s(t, r) || delete e[`_` + r]);
    }
    function Ot(e, t) {
      var n = a(this._weekdays)
        ? this._weekdays
        : this._weekdays[
            e && e !== !0 && this._weekdays.isFormat.test(t)
              ? `format`
              : `standalone`
          ];
      return e === !0 ? yt(n, this._week.dow) : e ? n[e.day()] : n;
    }
    function kt(e) {
      return e === !0
        ? yt(this._weekdaysShort, this._week.dow)
        : e
          ? this._weekdaysShort[e.day()]
          : this._weekdaysShort;
    }
    function At(e) {
      return e === !0
        ? yt(this._weekdaysMin, this._week.dow)
        : e
          ? this._weekdaysMin[e.day()]
          : this._weekdaysMin;
    }
    function jt(e, t, n) {
      var r,
        i,
        a,
        o = e.toLocaleLowerCase();
      if (!this._weekdaysParse)
        for (
          this._weekdaysParse = [],
            this._shortWeekdaysParse = [],
            this._minWeekdaysParse = [],
            r = 0;
          r < 7;
          ++r
        )
          ((a = m([2e3, 1]).day(r)),
            (this._minWeekdaysParse[r] = this.weekdaysMin(
              a,
              ``,
            ).toLocaleLowerCase()),
            (this._shortWeekdaysParse[r] = this.weekdaysShort(
              a,
              ``,
            ).toLocaleLowerCase()),
            (this._weekdaysParse[r] = this.weekdays(
              a,
              ``,
            ).toLocaleLowerCase()));
      return n
        ? t === `dddd`
          ? ((i = B.call(this._weekdaysParse, o)), i === -1 ? null : i)
          : t === `ddd`
            ? ((i = B.call(this._shortWeekdaysParse, o)), i === -1 ? null : i)
            : ((i = B.call(this._minWeekdaysParse, o)), i === -1 ? null : i)
        : t === `dddd`
          ? ((i = B.call(this._weekdaysParse, o)),
            i !== -1 || ((i = B.call(this._shortWeekdaysParse, o)), i !== -1)
              ? i
              : ((i = B.call(this._minWeekdaysParse, o)), i === -1 ? null : i))
          : t === `ddd`
            ? ((i = B.call(this._shortWeekdaysParse, o)),
              i !== -1 || ((i = B.call(this._weekdaysParse, o)), i !== -1)
                ? i
                : ((i = B.call(this._minWeekdaysParse, o)),
                  i === -1 ? null : i))
            : ((i = B.call(this._minWeekdaysParse, o)),
              i !== -1 || ((i = B.call(this._weekdaysParse, o)), i !== -1)
                ? i
                : ((i = B.call(this._shortWeekdaysParse, o)),
                  i === -1 ? null : i));
    }
    function Mt(e, t, n) {
      var r, i, a;
      if (this._weekdaysParseExact) return jt.call(this, e, t, n);
      for (
        this._weekdaysParse ||
          ((this._weekdaysParse = []),
          (this._minWeekdaysParse = []),
          (this._shortWeekdaysParse = []),
          (this._fullWeekdaysParse = [])),
          r = 0;
        r < 7;
        r++
      )
        if (
          ((i = m([2e3, 1]).day(r)),
          n &&
            !this._fullWeekdaysParse[r] &&
            ((this._fullWeekdaysParse[r] = RegExp(
              `^` + this.weekdays(i, ``).replace(`.`, `\\.?`) + `$`,
              `i`,
            )),
            (this._shortWeekdaysParse[r] = RegExp(
              `^` + this.weekdaysShort(i, ``).replace(`.`, `\\.?`) + `$`,
              `i`,
            )),
            (this._minWeekdaysParse[r] = RegExp(
              `^` + this.weekdaysMin(i, ``).replace(`.`, `\\.?`) + `$`,
              `i`,
            ))),
          this._weekdaysParse[r] ||
            ((a =
              `^` +
              this.weekdays(i, ``) +
              `|^` +
              this.weekdaysShort(i, ``) +
              `|^` +
              this.weekdaysMin(i, ``)),
            (this._weekdaysParse[r] = new RegExp(a.replace(`.`, ``), `i`))),
          (n && t === `dddd` && this._fullWeekdaysParse[r].test(e)) ||
            (n && t === `ddd` && this._shortWeekdaysParse[r].test(e)) ||
            (n && t === `dd` && this._minWeekdaysParse[r].test(e)) ||
            (!n && this._weekdaysParse[r].test(e)))
        )
          return r;
    }
    function Nt(e) {
      if (!this.isValid()) return e == null ? NaN : this;
      var t = Xe(this, `Day`);
      return e == null
        ? t
        : ((e = _t(e, this.localeData())), this.add(e - t, `d`));
    }
    function Pt(e) {
      if (!this.isValid()) return e == null ? NaN : this;
      var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
      return e == null ? t : this.add(e - t, `d`);
    }
    function H(e) {
      if (!this.isValid()) return e == null ? NaN : this;
      if (e != null) {
        var t = vt(e, this.localeData());
        return this.day(this.day() % 7 ? t : t - 7);
      }
      return this.day() || 7;
    }
    function Ft(e) {
      return this._weekdaysParseExact
        ? (s(this, `_weekdaysRegex`) || U.call(this),
          e ? this._weekdaysStrictRegex : this._weekdaysRegex)
        : (s(this, `_weekdaysRegex`) || (this._weekdaysRegex = Ct),
          this._weekdaysStrictRegex && e
            ? this._weekdaysStrictRegex
            : this._weekdaysRegex);
    }
    function It(e) {
      return this._weekdaysParseExact
        ? (s(this, `_weekdaysRegex`) || U.call(this),
          e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
        : (s(this, `_weekdaysShortRegex`) || (this._weekdaysShortRegex = wt),
          this._weekdaysShortStrictRegex && e
            ? this._weekdaysShortStrictRegex
            : this._weekdaysShortRegex);
    }
    function Lt(e) {
      return this._weekdaysParseExact
        ? (s(this, `_weekdaysRegex`) || U.call(this),
          e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
        : (s(this, `_weekdaysMinRegex`) || (this._weekdaysMinRegex = Tt),
          this._weekdaysMinStrictRegex && e
            ? this._weekdaysMinStrictRegex
            : this._weekdaysMinRegex);
    }
    function U() {
      function e(e, t) {
        return t.length - e.length;
      }
      for (var t = [], n = [], r = [], i = [], a = 0, o, s, c, l; a < 7; a++)
        ((o = m([2e3, 1]).day(a)),
          (s = Me(this.weekdaysMin(o, ``))),
          (c = Me(this.weekdaysShort(o, ``))),
          (l = Me(this.weekdays(o, ``))),
          t.push(s),
          n.push(c),
          r.push(l),
          i.push(s),
          i.push(c),
          i.push(l));
      (t.sort(e),
        n.sort(e),
        r.sort(e),
        i.sort(e),
        (this._weekdaysRegex = RegExp(`^(` + i.join(`|`) + `)`, `i`)),
        (this._weekdaysShortRegex = this._weekdaysRegex),
        (this._weekdaysMinRegex = this._weekdaysRegex),
        (this._weekdaysStrictRegex = RegExp(`^(` + r.join(`|`) + `)`, `i`)),
        (this._weekdaysShortStrictRegex = RegExp(
          `^(` + n.join(`|`) + `)`,
          `i`,
        )),
        (this._weekdaysMinStrictRegex = RegExp(`^(` + t.join(`|`) + `)`, `i`)));
    }
    function W(e) {
      var t, n;
      for (n in (ot(this, e), Dt(this, e), e))
        s(e, n) && ((t = e[n]), oe(t) ? (this[n] = t) : (this[`_` + n] = t));
      ((this._config = e),
        (this._dayOfMonthOrdinalParseLenient = RegExp(
          (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) +
            `|\\d{1,2}`,
        )));
    }
    function Rt(e, t) {
      var n = p({}, e),
        r;
      for (r in t)
        s(t, r) &&
          (o(e[r]) && o(t[r])
            ? ((n[r] = {}), p(n[r], e[r]), p(n[r], t[r]))
            : t[r] == null
              ? delete n[r]
              : (n[r] = t[r]));
      for (r in e) s(e, r) && !s(t, r) && o(e[r]) && (n[r] = p({}, n[r]));
      return n;
    }
    function zt(e) {
      e != null && this.set(e);
    }
    var Bt = Object.keys
        ? Object.keys
        : function (e) {
            var t,
              n = [];
            for (t in e) s(e, t) && n.push(t);
            return n;
          },
      Vt = {
        sameDay: `[Today at] LT`,
        nextDay: `[Tomorrow at] LT`,
        nextWeek: `dddd [at] LT`,
        lastDay: `[Yesterday at] LT`,
        lastWeek: `[Last] dddd [at] LT`,
        sameElse: `L`,
      };
    function Ht(e, t, n) {
      var r = this._calendar[e] || this._calendar.sameElse;
      return oe(r) ? r.call(t, n) : r;
    }
    var Ut = {
      LTS: `h:mm:ss A`,
      LT: `h:mm A`,
      L: `MM/DD/YYYY`,
      LL: `MMMM D, YYYY`,
      LLL: `MMMM D, YYYY h:mm A`,
      LLLL: `dddd, MMMM D, YYYY h:mm A`,
    };
    function Wt(e) {
      var t = this._longDateFormat[e],
        n = this._longDateFormat[e.toUpperCase()],
        r = this._longDateFormatCache;
      return t || !n
        ? t
        : r && r[e] && r[e].formatUpper === n
          ? r[e].format
          : ((t = n
              .match(le)
              .map(function (e) {
                return e === `MMMM` || e === `MM` || e === `DD` || e === `dddd`
                  ? e.slice(1)
                  : e;
              })
              .join(``)),
            (r ||= this._longDateFormatCache = {}),
            (r[e] = { formatUpper: n, format: t }),
            t);
    }
    var Gt = `Invalid date`;
    function Kt() {
      return this._invalidDate;
    }
    var qt = `%d`,
      Jt = /\d{1,2}/;
    function Yt(e) {
      return this._ordinal.replace(`%d`, e);
    }
    var Xt = {
      future: `in %s`,
      past: `%s ago`,
      s: `a few seconds`,
      ss: `%d seconds`,
      m: `a minute`,
      mm: `%d minutes`,
      h: `an hour`,
      hh: `%d hours`,
      d: `a day`,
      dd: `%d days`,
      w: `a week`,
      ww: `%d weeks`,
      M: `a month`,
      MM: `%d months`,
      y: `a year`,
      yy: `%d years`,
    };
    function Zt(e, t, n, r) {
      var i = this._relativeTime[n];
      return oe(i) ? i(e, t, n, r) : i.replace(/%d/i, e);
    }
    function Qt(e, t, n, r) {
      return this.postformat(Zt.call(this, e, t, n, r));
    }
    function $t(e, t) {
      var n = this._relativeTime[e > 0 ? `future` : `past`];
      return oe(n) ? n(t) : n.replace(/%s/i, t);
    }
    function en(e, t) {
      return this.postformat($t.call(this, e, t));
    }
    function tn(e, t, n, r, i, a, o) {
      var s;
      return (
        e < 100 && e >= 0
          ? ((s = new Date(e + 400, t, n, r, i, a, o)),
            isFinite(s.getFullYear()) && s.setFullYear(e))
          : (s = new Date(e, t, n, r, i, a, o)),
        s
      );
    }
    function nn(e) {
      var t, n;
      return (
        e < 100 && e >= 0
          ? ((n = Array.prototype.slice.call(arguments)),
            (n[0] = e + 400),
            (t = new Date(Date.UTC.apply(null, n))),
            isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e))
          : (t = new Date(Date.UTC.apply(null, arguments))),
        t
      );
    }
    function rn(e, t, n) {
      var r = 7 + t - n;
      return -((7 + nn(e, 0, r).getUTCDay() - t) % 7) + r - 1;
    }
    function an(e, t, n, r, i) {
      var a = (7 + n - r) % 7,
        o = rn(e, r, i),
        s = 1 + 7 * (t - 1) + a + o,
        c,
        l;
      return (
        s <= 0
          ? ((c = e - 1), (l = Ke(c) + s))
          : s > Ke(e)
            ? ((c = e + 1), (l = s - Ke(e)))
            : ((c = e), (l = s)),
        { year: c, dayOfYear: l }
      );
    }
    function on(e, t, n, r) {
      var i = rn(e, n, r),
        a = Math.floor((t - i - 1) / 7) + 1,
        o,
        s;
      return (
        a < 1
          ? ((s = e - 1), (o = a + ln(s, n, r)))
          : a > ln(e, n, r)
            ? ((o = a - ln(e, n, r)), (s = e + 1))
            : ((s = e), (o = a)),
        { week: o, year: s }
      );
    }
    function sn(e, t, n) {
      return on(e.year(), e.dayOfYear(), t, n);
    }
    function cn(e, t, n, r, i) {
      return on(e, Math.round((nn(e, t, n) - nn(e, 0, 1)) / 864e5) + 1, r, i);
    }
    function ln(e, t, n) {
      var r = rn(e, t, n),
        i = rn(e + 1, t, n);
      return (Ke(e) - r + i) / 7;
    }
    (k(`w`, [`ww`, 2], `wo`, `week`),
      k(`W`, [`WW`, 2], `Wo`, `isoWeek`),
      F(`w`, P, De),
      F(`ww`, P, M),
      F(`W`, P, De),
      F(`WW`, P, M),
      Fe([`w`, `ww`, `W`, `WW`], function (e, t, n, r) {
        t[r.substr(0, 1)] = I(e);
      }));
    function un(e) {
      return sn(e, this._week.dow, this._week.doy).week;
    }
    var dn = { dow: 0, doy: 6 };
    function fn() {
      return this._week.dow;
    }
    function pn() {
      return this._week.doy;
    }
    function mn(e) {
      var t = this.localeData().week(this);
      return e == null ? t : this.add((e - t) * 7, `d`);
    }
    function hn(e) {
      var t = sn(this, 1, 4).week;
      return e == null ? t : this.add((e - t) * 7, `d`);
    }
    function gn() {
      return this.hours() % 12 || 12;
    }
    function _n() {
      return this.hours() || 24;
    }
    (k(`H`, [`HH`, 2], 0, `hour`),
      k(`h`, [`hh`, 2], 0, gn),
      k(`k`, [`kk`, 2], 0, _n),
      k(`hmm`, 0, 0, function () {
        return `` + gn.apply(this) + E(this.minutes(), 2);
      }),
      k(`hmmss`, 0, 0, function () {
        return (
          `` + gn.apply(this) + E(this.minutes(), 2) + E(this.seconds(), 2)
        );
      }),
      k(`Hmm`, 0, 0, function () {
        return `` + this.hours() + E(this.minutes(), 2);
      }),
      k(`Hmmss`, 0, 0, function () {
        return `` + this.hours() + E(this.minutes(), 2) + E(this.seconds(), 2);
      }));
    function vn(e, t) {
      k(e, 0, 0, function () {
        return this.localeData().meridiem(this.hours(), this.minutes(), t);
      });
    }
    (vn(`a`, !0), vn(`A`, !1));
    function yn(e, t) {
      return t._meridiemParse;
    }
    (F(`a`, yn),
      F(`A`, yn),
      F(`H`, P, Oe),
      F(`h`, P, De),
      F(`k`, P, De),
      F(`HH`, P, M),
      F(`hh`, P, M),
      F(`kk`, P, M),
      F(`hmm`, ge),
      F(`hmmss`, _e),
      F(`Hmm`, ge),
      F(`Hmmss`, _e),
      L([`H`, `HH`], Be),
      L([`k`, `kk`], function (e, t, n) {
        var r = I(e);
        t[Be] = r === 24 ? 0 : r;
      }),
      L([`a`, `A`], function (e, t, n) {
        ((n._isPm = n._locale.isPM(e)), (n._meridiem = e));
      }),
      L([`h`, `hh`], function (e, t, n) {
        ((t[Be] = I(e)), (g(n).bigHour = !0));
      }),
      L(`hmm`, function (e, t, n) {
        var r = e.length - 2;
        ((t[Be] = I(e.substr(0, r))),
          (t[Ve] = I(e.substr(r))),
          (g(n).bigHour = !0));
      }),
      L(`hmmss`, function (e, t, n) {
        var r = e.length - 4,
          i = e.length - 2;
        ((t[Be] = I(e.substr(0, r))),
          (t[Ve] = I(e.substr(r, 2))),
          (t[He] = I(e.substr(i))),
          (g(n).bigHour = !0));
      }),
      L(`Hmm`, function (e, t, n) {
        var r = e.length - 2;
        ((t[Be] = I(e.substr(0, r))), (t[Ve] = I(e.substr(r))));
      }),
      L(`Hmmss`, function (e, t, n) {
        var r = e.length - 4,
          i = e.length - 2;
        ((t[Be] = I(e.substr(0, r))),
          (t[Ve] = I(e.substr(r, 2))),
          (t[He] = I(e.substr(i))));
      }));
    function bn(e) {
      return (e + ``).toLowerCase().charAt(0) === `p`;
    }
    var xn = /[ap]\.?m?\.?/i,
      Sn = Ye(`Hours`, !0);
    function Cn(e, t, n) {
      return e > 11 ? (n ? `pm` : `PM`) : n ? `am` : `AM`;
    }
    var wn = {
        calendar: Vt,
        longDateFormat: Ut,
        invalidDate: Gt,
        ordinal: qt,
        dayOfMonthOrdinalParse: Jt,
        relativeTime: Xt,
        months: tt,
        monthsShort: nt,
        week: dn,
        weekdays: bt,
        weekdaysMin: St,
        weekdaysShort: xt,
        meridiemParse: xn,
      },
      G = {},
      Tn = {},
      En;
    function Dn(e, t) {
      var n,
        r = Math.min(e.length, t.length);
      for (n = 0; n < r; n += 1) if (e[n] !== t[n]) return n;
      return r;
    }
    function On(e) {
      return e && e.toLowerCase().replace(`_`, `-`);
    }
    function kn(e) {
      for (var t = 0, n, r, i, a; t < e.length;) {
        for (
          a = On(e[t]).split(`-`),
            n = a.length,
            r = On(e[t + 1]),
            r = r ? r.split(`-`) : null;
          n > 0;
        ) {
          if (((i = jn(a.slice(0, n).join(`-`))), i)) return i;
          if (r && r.length >= n && Dn(a, r) >= n - 1) break;
          n--;
        }
        t++;
      }
      return En;
    }
    function An(e) {
      return typeof e == `string` && /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(e);
    }
    function jn(t) {
      var r = null,
        i,
        a;
      if (s(G, t)) return G[t];
      if (((a = On(t)), s(G, a))) return G[a];
      if (n !== void 0 && n && n.exports && An(a))
        try {
          ((r = En._abbr), (i = e), i(`./locale/` + a), Mn(r));
        } catch {
          G[a] = null;
        }
      if (s(G, a)) return G[a];
    }
    function Mn(e, t) {
      var n;
      return (
        e &&
          ((n = l(t) ? Fn(e) : Nn(e, t)),
          n
            ? (En = n)
            : typeof console < `u` &&
              console.warn &&
              console.warn(
                `Locale ` + e + ` not found. Did you forget to load it?`,
              )),
        En._abbr
      );
    }
    function Nn(e, t) {
      if (t !== null) {
        var n,
          r = wn;
        if (((t.abbr = e), G[e] != null))
          (S(
            `defineLocaleOverride`,
            `use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info.`,
          ),
            (r = G[e]._config));
        else if (t.parentLocale != null) {
          if (G[t.parentLocale] != null) r = G[t.parentLocale]._config;
          else if (((n = jn(t.parentLocale)), n != null)) r = n._config;
          else
            return (
              Tn[t.parentLocale] || (Tn[t.parentLocale] = []),
              Tn[t.parentLocale].push({ name: e, config: t }),
              null
            );
        }
        return (
          (G[e] = new zt(Rt(r, t))),
          Tn[e] &&
            Tn[e].forEach(function (e) {
              Nn(e.name, e.config);
            }),
          Mn(e),
          G[e]
        );
      }
      return (delete G[e], null);
    }
    function Pn(e, t) {
      var n,
        r = jn(e),
        i = wn;
      return (
        r != null && (e = r._abbr),
        t == null
          ? G[e] != null &&
            (G[e].parentLocale == null
              ? G[e] != null && delete G[e]
              : ((G[e] = G[e].parentLocale), e === Mn() && Mn(e)))
          : (G[e] != null && G[e].parentLocale != null
              ? G[e].set(Rt(G[e]._config, t))
              : (r != null && (i = r._config),
                (t = Rt(i, t)),
                r ?? (t.abbr = e),
                (n = new zt(t)),
                (n.parentLocale = G[e]),
                (G[e] = n)),
            Mn(e)),
        G[e]
      );
    }
    function Fn(e) {
      var t;
      if ((e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e))
        return En;
      if (!a(e)) {
        if (((t = jn(e)), t)) return t;
        e = [e];
      }
      return kn(e);
    }
    function In() {
      return Bt(G);
    }
    function Ln(e) {
      var t,
        n = e._a;
      return (
        n &&
          g(e).overflow === -2 &&
          ((t =
            n[Re] < 0 || n[Re] > 11
              ? Re
              : n[ze] < 1 || n[ze] > et(n[R], n[Re])
                ? ze
                : n[Be] < 0 ||
                    n[Be] > 24 ||
                    (n[Be] === 24 &&
                      (n[Ve] !== 0 || n[He] !== 0 || n[Ue] !== 0))
                  ? Be
                  : n[Ve] < 0 || n[Ve] > 59
                    ? Ve
                    : n[He] < 0 || n[He] > 59
                      ? He
                      : n[Ue] < 0 || n[Ue] > 999
                        ? Ue
                        : -1),
          g(e)._overflowDayOfYear && (t < R || t > ze) && (t = ze),
          g(e)._overflowWeeks && t === -1 && (t = We),
          g(e)._overflowWeekday && t === -1 && (t = Ge),
          (g(e).overflow = t)),
        e
      );
    }
    var Rn =
        /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
      zn =
        /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
      Bn = /Z|[+-]\d\d(?::?\d\d)?/,
      Vn = [
        [`YYYYYY-MM-DD`, /[+-]\d{6}-\d\d-\d\d/],
        [`YYYY-MM-DD`, /\d{4}-\d\d-\d\d/],
        [`GGGG-[W]WW-E`, /\d{4}-W\d\d-\d/],
        [`GGGG-[W]WW`, /\d{4}-W\d\d/, !1],
        [`YYYY-DDD`, /\d{4}-\d{3}/],
        [`YYYY-MM`, /\d{4}-\d\d/, !1],
        [`YYYYYYMMDD`, /[+-]\d{10}/],
        [`YYYYMMDD`, /\d{8}/],
        [`GGGG[W]WWE`, /\d{4}W\d{3}/],
        [`GGGG[W]WW`, /\d{4}W\d{2}/, !1],
        [`YYYYDDD`, /\d{7}/],
        [`YYYYMM`, /\d{6}/, !1],
        [`YYYY`, /\d{4}/, !1],
      ],
      Hn = [
        [`HH:mm:ss.SSSS`, /\d\d:\d\d:\d\d\.\d+/],
        [`HH:mm:ss,SSSS`, /\d\d:\d\d:\d\d,\d+/],
        [`HH:mm:ss`, /\d\d:\d\d:\d\d/],
        [`HH:mm`, /\d\d:\d\d/],
        [`HHmmss.SSSS`, /\d\d\d\d\d\d\.\d+/],
        [`HHmmss,SSSS`, /\d\d\d\d\d\d,\d+/],
        [`HHmmss`, /\d\d\d\d\d\d/],
        [`HHmm`, /\d\d\d\d/],
        [`HH`, /\d\d/],
      ],
      Un = /^\/?Date\((-?\d+)/i,
      Wn =
        /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,
      Gn = {
        UT: 0,
        GMT: 0,
        EDT: -240,
        EST: -300,
        CDT: -300,
        CST: -360,
        MDT: -360,
        MST: -420,
        PDT: -420,
        PST: -480,
      };
    function Kn(e) {
      var t,
        n,
        r = e._i,
        i = Rn.exec(r) || zn.exec(r),
        a,
        o,
        s,
        c,
        l = Vn.length,
        u = Hn.length;
      if (i) {
        for (g(e).iso = !0, t = 0, n = l; t < n; t++)
          if (Vn[t][1].exec(i[1])) {
            ((o = Vn[t][0]), (a = Vn[t][2] !== !1));
            break;
          }
        if (o == null) {
          e._isValid = !1;
          return;
        }
        if (i[3]) {
          for (t = 0, n = u; t < n; t++)
            if (Hn[t][1].exec(i[3])) {
              s = (i[2] || ` `) + Hn[t][0];
              break;
            }
          if (s == null) {
            e._isValid = !1;
            return;
          }
        }
        if (!a && s != null) {
          e._isValid = !1;
          return;
        }
        if (i[4]) {
          if (Bn.exec(i[4])) c = `Z`;
          else {
            e._isValid = !1;
            return;
          }
        }
        ((e._f = o + (s || ``) + (c || ``)), or(e));
      } else e._isValid = !1;
    }
    function qn(e, t, n, r, i, a) {
      var o = [
        Jn(e),
        nt.indexOf(t),
        parseInt(n, 10),
        parseInt(r, 10),
        parseInt(i, 10),
      ];
      return (a && o.push(parseInt(a, 10)), o);
    }
    function Jn(e) {
      var t = parseInt(e, 10);
      return t <= 49 ? 2e3 + t : t <= 999 ? 1900 + t : t;
    }
    function Yn(e) {
      return e
        .replace(/\([^()]*\)|[\n\t]/g, ` `)
        .replace(/(\s\s+)/g, ` `)
        .replace(/^\s\s*/, ``)
        .replace(/\s\s*$/, ``);
    }
    function Xn(e, t, n) {
      return e && xt.indexOf(e) !== new Date(t[0], t[1], t[2]).getDay()
        ? ((g(n).weekdayMismatch = !0), (n._isValid = !1), !1)
        : !0;
    }
    function Zn(e, t, n) {
      if (e) return Gn[e];
      if (t) return 0;
      var r = parseInt(n, 10),
        i = r % 100;
      return ((r - i) / 100) * 60 + i;
    }
    function Qn(e) {
      var t = Wn.exec(Yn(e._i)),
        n;
      if (t) {
        if (((n = qn(t[4], t[3], t[2], t[5], t[6], t[7])), !Xn(t[1], n, e)))
          return;
        ((e._a = n),
          (e._tzm = Zn(t[8], t[9], t[10])),
          (e._d = nn.apply(null, e._a)),
          e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm),
          (g(e).rfc2822 = !0));
      } else e._isValid = !1;
    }
    function $n(e) {
      var t = Un.exec(e._i);
      if (t !== null) e._d = new Date(+t[1]);
      else {
        if ((Kn(e), e._isValid === !1)) delete e._isValid;
        else return;
        if ((Qn(e), e._isValid === !1)) delete e._isValid;
        else return;
        e._strict ? (e._isValid = !1) : r.createFromInputFallback(e);
      }
    }
    r.createFromInputFallback = b(
      `value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.`,
      function (e) {
        e._d = new Date(e._i + (e._useUTC ? ` UTC` : ``));
      },
    );
    function er(e, t, n) {
      return e ?? t ?? n;
    }
    function tr(e, t, n) {
      var i = Object.prototype.hasOwnProperty.call(
          e,
          `_isDefaultDatePartsForWeek`,
        ),
        a = e._isDefaultDatePartsForWeek;
      e._isDefaultDatePartsForWeek = !!n;
      try {
        return r._getDefaultDateParts(e, t, n);
      } finally {
        i
          ? (e._isDefaultDatePartsForWeek = a)
          : delete e._isDefaultDatePartsForWeek;
      }
    }
    function nr(e) {
      var t = e._defaultDatePartsNow;
      return t
        ? ((t.hasValue ||= ((t.value = r.now()), !0)), t.value)
        : r.now();
    }
    function rr(e, t, n) {
      var r = n || e._isDefaultDatePartsForWeek,
        i = r ? K(t) : new Date(t);
      return r
        ? [i.year(), i.month(), i.date()]
        : e._useUTC
          ? [i.getUTCFullYear(), i.getUTCMonth(), i.getUTCDate()]
          : [i.getFullYear(), i.getMonth(), i.getDate()];
    }
    r._getDefaultDateParts = rr;
    function ir(e) {
      var t,
        n,
        r = [],
        i,
        a,
        o,
        s,
        c;
      if (!e._d) {
        for (
          (e._a[R] == null || e._a[Re] == null || e._a[ze] == null) &&
            ((i = nr(e)), (a = tr(e, i))),
            e._w && e._a[ze] == null && e._a[Re] == null && ar(e, tr(e, i, !0)),
            e._dayOfYear != null &&
              ((s = e._a[R] == null ? a[R] : e._a[R]),
              (e._dayOfYear > Ke(s) || e._dayOfYear === 0) &&
                (g(e)._overflowDayOfYear = !0),
              (n = nn(s, 0, e._dayOfYear)),
              (e._a[Re] = n.getUTCMonth()),
              (e._a[ze] = n.getUTCDate())),
            c = e._a[R] == null || e._a[Re] == null || e._a[ze] == null,
            t = 0;
          t < 3 && e._a[t] == null;
          ++t
        )
          e._a[t] = r[t] = a[t];
        for (; t < 7; t++)
          e._a[t] = r[t] = e._a[t] == null ? +(t === 2) : e._a[t];
        (e._a[Be] === 24 &&
          e._a[Ve] === 0 &&
          e._a[He] === 0 &&
          e._a[Ue] === 0 &&
          ((e._nextDay = !0), (e._a[Be] = 0)),
          (e._d = (e._useUTC ? nn : tn).apply(null, r)),
          (o = e._useUTC ? e._d.getUTCDay() : e._d.getDay()),
          e._tzm != null && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm),
          e._nextDay && (e._a[Be] = 24),
          e._w &&
            e._w.d !== void 0 &&
            !c &&
            e._w.d !== o &&
            (g(e).weekdayMismatch = !0));
      }
    }
    function ar(e, t) {
      var n = e._w,
        r,
        i,
        a,
        o,
        s,
        c,
        l,
        u;
      (n.GG != null || n.W != null || n.E != null
        ? ((o = 1),
          (s = 4),
          (r = er(n.GG, e._a[R], cn(t[R], t[Re], t[ze], 1, 4).year)),
          (i = er(n.W, 1)),
          (a = er(n.E, 1)),
          (a < 1 || a > 7) && (l = !0))
        : ((o = e._locale._week.dow),
          (s = e._locale._week.doy),
          (u = cn(t[R], t[Re], t[ze], o, s)),
          (r = er(n.gg, e._a[R], u.year)),
          (i = er(n.w, u.week)),
          n.d == null
            ? n.e == null
              ? (a = o)
              : ((a = n.e + o), (n.e < 0 || n.e > 6) && (l = !0))
            : ((a = n.d), (a < 0 || a > 6) && (l = !0))),
        i < 1 || i > ln(r, o, s)
          ? (g(e)._overflowWeeks = !0)
          : l == null
            ? ((c = an(r, i, a, o, s)),
              (e._a[R] = c.year),
              (e._dayOfYear = c.dayOfYear))
            : (g(e)._overflowWeekday = !0));
    }
    ((r.ISO_8601 = function () {}), (r.RFC_2822 = function () {}));
    function or(e) {
      if (e._f === r.ISO_8601) Kn(e);
      else if (e._f === r.RFC_2822) Qn(e);
      else {
        ((e._a = []), (g(e).empty = !0));
        var t = `` + e._i,
          n,
          i,
          a,
          o,
          s,
          c = t.length,
          l = 0,
          u,
          d;
        for (
          a = j(e._f, e._locale).match(le) || [], d = a.length, n = 0;
          n < d;
          n++
        )
          ((o = a[n]),
            (i = (t.match(Ae(o, e)) || [])[0]),
            i &&
              ((s = t.substr(0, t.indexOf(i))),
              s.length > 0 && g(e).unusedInput.push(s),
              (t = t.slice(t.indexOf(i) + i.length)),
              (l += i.length)),
            O[o]
              ? (i ? (g(e).empty = !1) : g(e).unusedTokens.push(o), Ie(o, i, e))
              : e._strict && !i && g(e).unusedTokens.push(o));
        ((g(e).charsLeftOver = c - l),
          t.length > 0 && g(e).unusedInput.push(t),
          e._a[Be] <= 12 &&
            g(e).bigHour === !0 &&
            e._a[Be] > 0 &&
            (g(e).bigHour = void 0),
          (g(e).parsedDateParts = e._a.slice(0)),
          (g(e).meridiem = e._meridiem),
          (e._a[Be] = sr(e._locale, e._a[Be], e._meridiem)),
          (u = g(e).era),
          u !== null && (e._a[R] = e._locale.erasConvertYear(u, e._a[R])),
          ir(e),
          Ln(e));
      }
    }
    function sr(e, t, n) {
      var r;
      return n == null
        ? t
        : e.meridiemHour == null
          ? (e.isPM == null ||
              ((r = e.isPM(n)),
              r && t < 12 && (t += 12),
              !r && t === 12 && (t = 0)),
            t)
          : e.meridiemHour(t, n);
    }
    function cr(e) {
      var t,
        n,
        r,
        i,
        a,
        o,
        s = !1,
        c = {},
        l = e._f.length;
      if (l === 0) ((g(e).invalidFormat = !0), (e._d = new Date(NaN)));
      else {
        for (i = 0; i < l; i++)
          ((a = 0),
            (o = !1),
            (t = re({}, e)),
            e._useUTC != null && (t._useUTC = e._useUTC),
            (t._defaultDatePartsNow = c),
            (t._f = e._f[i]),
            or(t),
            ee(t) && (o = !0),
            (a += g(t).charsLeftOver),
            (a += g(t).unusedTokens.length * 10),
            (g(t).score = a),
            s
              ? a < r && ((r = a), (n = t))
              : (r == null || a < r || o) && ((r = a), (n = t), o && (s = !0)));
        p(e, n || t);
      }
    }
    function lr(e) {
      if (!e._d) {
        var t = ce(e._i),
          n = t.day === void 0 ? t.date : t.day;
        ((e._a = f(
          [t.year, t.month, n, t.hour, t.minute, t.second, t.millisecond],
          function (e) {
            return e && parseInt(e, 10);
          },
        )),
          ir(e));
      }
    }
    function ur(e) {
      var t = new ie(Ln(dr(e)));
      return ((t._nextDay &&= (t.add(1, `d`), void 0)), t);
    }
    function dr(e) {
      var t = e._i,
        n = e._f;
      return (
        (e._locale = e._locale || Fn(e._l)),
        t === null || (n === void 0 && t === ``)
          ? v({ nullInput: !0 })
          : (typeof t == `string` && (e._i = t = e._locale.preparse(t)),
            y(t)
              ? new ie(Ln(t))
              : (d(t) ? (e._d = t) : a(n) ? cr(e) : n ? or(e) : fr(e),
                ee(e) || (e._d = null),
                e))
      );
    }
    function fr(e) {
      var t = e._i;
      l(t)
        ? (e._d = new Date(r.now()))
        : d(t)
          ? (e._d = new Date(t.valueOf()))
          : typeof t == `string`
            ? $n(e)
            : a(t)
              ? ((e._a = f(t.slice(0), function (e) {
                  return parseInt(e, 10);
                })),
                ir(e))
              : o(t)
                ? lr(e)
                : u(t)
                  ? (e._d = new Date(t))
                  : r.createFromInputFallback(e);
    }
    function pr(e, t, n, r, i) {
      var s = {};
      return (
        (t === !0 || t === !1) && ((r = t), (t = void 0)),
        (n === !0 || n === !1) && ((r = n), (n = void 0)),
        ((o(e) && c(e)) || (a(e) && e.length === 0)) && (e = void 0),
        (s._isAMomentObject = !0),
        (s._useUTC = s._isUTC = i),
        (s._l = n),
        (s._i = e),
        (s._f = t),
        (s._strict = r),
        ur(s)
      );
    }
    function K(e, t, n, r) {
      return pr(e, t, n, r, !1);
    }
    var mr = b(
        `moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/`,
        function () {
          var e = K.apply(null, arguments);
          return this.isValid() && e.isValid() ? (e < this ? this : e) : v();
        },
      ),
      hr = b(
        `moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/`,
        function () {
          var e = K.apply(null, arguments);
          return this.isValid() && e.isValid() ? (e > this ? this : e) : v();
        },
      );
    function gr(e, t) {
      var n, r;
      if ((t.length === 1 && a(t[0]) && (t = t[0]), !t.length)) return K();
      for (r = 0; r < t.length; ++r)
        if (y(t[r])) {
          n = t[r];
          break;
        }
      if (!n) return v();
      for (++r; r < t.length; ++r)
        y(t[r]) && (!t[r].isValid() || t[r][e](n)) && (n = t[r]);
      return n;
    }
    function _r() {
      return gr(`isBefore`, [].slice.call(arguments, 0));
    }
    function vr() {
      return gr(`isAfter`, [].slice.call(arguments, 0));
    }
    var yr = function () {
        return Date.now ? Date.now() : +new Date();
      },
      br = [
        `year`,
        `quarter`,
        `month`,
        `week`,
        `day`,
        `hour`,
        `minute`,
        `second`,
        `millisecond`,
      ];
    function xr(e) {
      var t,
        n = !1,
        r,
        i = br.length;
      for (t in e)
        if (s(e, t) && (B.call(br, t) === -1 || (e[t] != null && isNaN(e[t]))))
          return !1;
      for (r = 0; r < i; ++r)
        if (e[br[r]]) {
          if (n) return !1;
          parseFloat(e[br[r]]) !== I(e[br[r]]) && (n = !0);
        }
      return !0;
    }
    function Sr() {
      return this._isValid;
    }
    function Cr() {
      return Kr(NaN);
    }
    function wr(e) {
      var t = ce(e),
        n = t.year || 0,
        r = t.quarter || 0,
        i = t.month || 0,
        a = t.week || t.isoWeek || 0,
        o = t.day || 0,
        s = t.hour || 0,
        c = t.minute || 0,
        l = t.second || 0,
        u = t.millisecond || 0;
      ((this._isValid = xr(t)),
        (this._milliseconds = +u + l * 1e3 + c * 6e4 + s * 1e3 * 60 * 60),
        (this._days = +o + a * 7),
        (this._months = +i + r * 3 + n * 12),
        (this._data = {}),
        (this._locale = Fn()),
        this._bubble());
    }
    function Tr(e) {
      return e instanceof wr;
    }
    function Er(e) {
      return e < 0 ? Math.round(-1 * e) * -1 : Math.round(e);
    }
    function Dr(e, t, n) {
      for (
        var r = Math.min(e.length, t.length),
          i = Math.abs(e.length - t.length),
          a = 0,
          o = 0;
        o < r;
        o++
      )
        I(e[o]) !== I(t[o]) && a++;
      return a + i;
    }
    function Or(e, t) {
      k(e, 0, 0, function () {
        var e = this.utcOffset(),
          n = `+`;
        return (
          e < 0 && ((e = -e), (n = `-`)),
          n + E(~~(e / 60), 2) + t + E(~~e % 60, 2)
        );
      });
    }
    (Or(`Z`, `:`),
      Or(`ZZ`, ``),
      F(`Z`, we),
      F(`ZZ`, we),
      L([`Z`, `ZZ`], function (e, t, n) {
        var r = Ar(we, e);
        ((n._useUTC = !0),
          (n._tzm = r),
          r === null && (g(n).invalidOffset = e));
      }));
    var kr = /([\+\-]|\d\d)/gi;
    function Ar(e, t) {
      var n = (t || ``).match(e),
        r,
        i,
        a;
      return n === null ||
        ((r = n[n.length - 1] || []),
        (i = (r + ``).match(kr) || [`-`, 0, 0]),
        (a = +(i[1] * 60) + I(i[2])),
        I(i[2]) > 59 || (i[0] === `+` ? a > 840 : a > 720))
        ? null
        : a === 0
          ? 0
          : i[0] === `+`
            ? a
            : -a;
    }
    function jr(e, t) {
      var n, i;
      return t._isUTC
        ? ((n = t.clone()),
          (i = (y(e) || d(e) ? e.valueOf() : K(e).valueOf()) - n.valueOf()),
          n._d.setTime(n._d.valueOf() + i),
          r.updateOffset(n, !1),
          n)
        : K(e).local();
    }
    function Mr(e) {
      return -Math.round(e._d.getTimezoneOffset());
    }
    r.updateOffset = function () {};
    function Nr(e, t, n) {
      var i = this._offset || 0,
        a;
      if (!this.isValid()) return e == null ? NaN : this;
      if (e != null) {
        if (typeof e == `string`) {
          if (((e = Ar(we, e)), e === null)) return this;
        } else Math.abs(e) < 16 && !n && (e *= 60);
        return (
          !this._isUTC && t && (a = Mr(this)),
          (this._offset = e),
          (this._isUTC = !0),
          a != null && this.add(a, `m`),
          i !== e &&
            (!t || this._changeInProgress
              ? Zr(this, Kr(e - i, `m`), 1, !1)
              : (this._changeInProgress ||=
                  ((this._changeInProgress = !0),
                  r.updateOffset(this, !0),
                  null))),
          this
        );
      }
      return this._isUTC ? i : Mr(this);
    }
    function Pr(e, t) {
      return e == null
        ? -this.utcOffset()
        : (typeof e != `string` && (e = -e), this.utcOffset(e, t), this);
    }
    function Fr(e) {
      return this.utcOffset(0, e);
    }
    function Ir(e) {
      return (
        this._isUTC &&
          (this.utcOffset(0, e),
          (this._isUTC = !1),
          e && this.subtract(Mr(this), `m`)),
        this
      );
    }
    function Lr() {
      if (this._tzm != null) this.utcOffset(this._tzm, !1, !0);
      else if (typeof this._i == `string`) {
        var e = Ar(Ce, this._i);
        e == null ? this.utcOffset(0, !0) : this.utcOffset(e);
      }
      return this;
    }
    function Rr(e) {
      return this.isValid()
        ? ((e = e ? K(e).utcOffset() : 0), (this.utcOffset() - e) % 60 == 0)
        : !1;
    }
    function zr() {
      return (
        this.utcOffset() > this.clone().month(0).utcOffset() ||
        this.utcOffset() > this.clone().month(5).utcOffset()
      );
    }
    function Br() {
      if (!l(this._isDSTShifted)) return this._isDSTShifted;
      var e = {},
        t;
      return (
        re(e, this),
        (e = dr(e)),
        e._a
          ? ((t = e._isUTC ? m(e._a) : K(e._a)),
            (this._isDSTShifted = this.isValid() && Dr(e._a, t.toArray()) > 0))
          : (this._isDSTShifted = !1),
        this._isDSTShifted
      );
    }
    function Vr() {
      return this.isValid() ? !this._isUTC : !1;
    }
    function Hr() {
      return this.isValid() ? this._isUTC : !1;
    }
    function Ur() {
      return this.isValid() ? this._isUTC && this._offset === 0 : !1;
    }
    var Wr = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,
      Gr =
        /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
    function Kr(e, t) {
      var n = e,
        r = null,
        i,
        a,
        o;
      return (
        Tr(e)
          ? (n = { ms: e._milliseconds, d: e._days, M: e._months })
          : u(e) || !isNaN(+e)
            ? ((n = {}), t ? (n[t] = +e) : (n.milliseconds = +e))
            : (r = Wr.exec(e))
              ? ((i = r[1] === `-` ? -1 : 1),
                (n = {
                  y: 0,
                  d: I(r[ze]) * i,
                  h: I(r[Be]) * i,
                  m: I(r[Ve]) * i,
                  s: I(r[He]) * i,
                  ms: I(Er(r[Ue] * 1e3)) * i,
                }))
              : (r = Gr.exec(e))
                ? ((i = r[1] === `-` ? -1 : 1),
                  (n = {
                    y: qr(r[2], i),
                    M: qr(r[3], i),
                    w: qr(r[4], i),
                    d: qr(r[5], i),
                    h: qr(r[6], i),
                    m: qr(r[7], i),
                    s: qr(r[8], i),
                  }))
                : n == null
                  ? (n = {})
                  : typeof n == `object` &&
                    (`from` in n || `to` in n) &&
                    ((o = Yr(K(n.from), K(n.to))),
                    (n = {}),
                    (n.ms = o.milliseconds),
                    (n.M = o.months)),
        (a = new wr(n)),
        Tr(e) && s(e, `_locale`) && (a._locale = e._locale),
        Tr(e) && s(e, `_isValid`) && (a._isValid = e._isValid),
        a
      );
    }
    ((Kr.fn = wr.prototype), (Kr.invalid = Cr));
    function qr(e, t) {
      var n = e && parseFloat(e.replace(`,`, `.`));
      return (isNaN(n) ? 0 : n) * t;
    }
    function Jr(e, t) {
      var n = {};
      return (
        (n.months = t.month() - e.month() + (t.year() - e.year()) * 12),
        e.clone().add(n.months, `M`).isAfter(t) && --n.months,
        (n.milliseconds = +t - e.clone().add(n.months, `M`)),
        n
      );
    }
    function Yr(e, t) {
      var n;
      return e.isValid() && t.isValid()
        ? ((t = jr(t, e)),
          e.isBefore(t)
            ? (n = Jr(e, t))
            : ((n = Jr(t, e)),
              (n.milliseconds = -n.milliseconds),
              (n.months = -n.months)),
          n)
        : { milliseconds: 0, months: 0 };
    }
    function Xr(e, t) {
      return function (n, r) {
        var i, a;
        return (
          r !== null &&
            !isNaN(+r) &&
            (S(
              t,
              `moment().` +
                t +
                `(period, number) is deprecated. Please use moment().` +
                t +
                `(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info.`,
            ),
            (a = n),
            (n = r),
            (r = a)),
          (i = Kr(n, r)),
          Zr(this, i, e),
          this
        );
      };
    }
    function Zr(e, t, n, i) {
      var a = t._milliseconds,
        o = Er(t._days),
        s = Er(t._months);
      e.isValid() &&
        ((i ??= !0),
        s && dt(e, Xe(e, `Month`) + s * n),
        o && Ze(e, `Date`, Xe(e, `Date`) + o * n),
        a && e._d.setTime(e._d.valueOf() + a * n),
        i && r.updateOffset(e, o || s));
    }
    var Qr = Xr(1, `add`),
      $r = Xr(-1, `subtract`);
    function ei(e) {
      return typeof e == `string` || e instanceof String;
    }
    function ti(e) {
      return y(e) || d(e) || ei(e) || u(e) || ri(e) || ni(e) || e == null;
    }
    function ni(e) {
      var t = o(e) && !c(e),
        n = !1,
        r = [
          `years`,
          `year`,
          `y`,
          `months`,
          `month`,
          `M`,
          `days`,
          `day`,
          `d`,
          `dates`,
          `date`,
          `D`,
          `hours`,
          `hour`,
          `h`,
          `minutes`,
          `minute`,
          `m`,
          `seconds`,
          `second`,
          `s`,
          `milliseconds`,
          `millisecond`,
          `ms`,
        ],
        i,
        a,
        l = r.length;
      for (i = 0; i < l; i += 1) ((a = r[i]), (n ||= s(e, a)));
      return t && n;
    }
    function ri(e) {
      var t = a(e),
        n = !1;
      return (
        t &&
          (n =
            e.filter(function (t) {
              return !u(t) && ei(e);
            }).length === 0),
        t && n
      );
    }
    function ii(e) {
      for (
        var t = o(e) && !c(e),
          n = !1,
          r = [
            `sameDay`,
            `nextDay`,
            `lastDay`,
            `nextWeek`,
            `lastWeek`,
            `sameElse`,
          ],
          i = 0,
          a;
        i < r.length;
        i += 1
      )
        ((a = r[i]), (n ||= s(e, a)));
      return t && n;
    }
    function ai(e, t) {
      var n = e.diff(t, `days`, !0);
      return n < -6
        ? `sameElse`
        : n < -1
          ? `lastWeek`
          : n < 0
            ? `lastDay`
            : n < 1
              ? `sameDay`
              : n < 2
                ? `nextDay`
                : n < 7
                  ? `nextWeek`
                  : `sameElse`;
    }
    function oi(e, t) {
      arguments.length === 1 &&
        (arguments[0]
          ? ti(arguments[0])
            ? ((e = arguments[0]), (t = void 0))
            : ii(arguments[0]) && ((t = arguments[0]), (e = void 0))
          : ((e = void 0), (t = void 0)));
      var n = e || K(),
        i = jr(n, this).startOf(`day`),
        a = r.calendarFormat(this, i) || `sameElse`,
        o = t && (oe(t[a]) ? t[a].call(this, n) : t[a]);
      return this.format(o || this.localeData().calendar(a, this, K(n)));
    }
    function si() {
      return new ie(this);
    }
    function ci(e, t) {
      var n = y(e) ? e : K(e);
      return this.isValid() && n.isValid()
        ? ((t = C(t) || `millisecond`),
          t === `millisecond`
            ? this.valueOf() > n.valueOf()
            : n.valueOf() < this.clone().startOf(t).valueOf())
        : !1;
    }
    function li(e, t) {
      var n = y(e) ? e : K(e);
      return this.isValid() && n.isValid()
        ? ((t = C(t) || `millisecond`),
          t === `millisecond`
            ? this.valueOf() < n.valueOf()
            : this.clone().endOf(t).valueOf() < n.valueOf())
        : !1;
    }
    function ui(e, t, n, r) {
      var i = y(e) ? e : K(e),
        a = y(t) ? t : K(t);
      return this.isValid() && i.isValid() && a.isValid()
        ? ((r ||= `()`),
          (r[0] === `(` ? this.isAfter(i, n) : !this.isBefore(i, n)) &&
            (r[1] === `)` ? this.isBefore(a, n) : !this.isAfter(a, n)))
        : !1;
    }
    function di(e, t) {
      var n = y(e) ? e : K(e),
        r;
      return this.isValid() && n.isValid()
        ? ((t = C(t) || `millisecond`),
          t === `millisecond`
            ? this.valueOf() === n.valueOf()
            : ((r = n.valueOf()),
              this.clone().startOf(t).valueOf() <= r &&
                r <= this.clone().endOf(t).valueOf()))
        : !1;
    }
    function fi(e, t) {
      return this.isSame(e, t) || this.isAfter(e, t);
    }
    function pi(e, t) {
      return this.isSame(e, t) || this.isBefore(e, t);
    }
    function mi(e, t, n) {
      var r, i, a;
      if (!this.isValid() || ((r = jr(e, this)), !r.isValid())) return NaN;
      switch (((i = (r.utcOffset() - this.utcOffset()) * 6e4), (t = C(t)), t)) {
        case `year`:
          a = hi(this, r) / 12;
          break;
        case `month`:
          a = hi(this, r);
          break;
        case `quarter`:
          a = hi(this, r) / 3;
          break;
        case `second`:
          a = (this - r) / 1e3;
          break;
        case `minute`:
          a = (this - r) / 6e4;
          break;
        case `hour`:
          a = (this - r) / 36e5;
          break;
        case `day`:
          a = (this - r - i) / 864e5;
          break;
        case `week`:
          a = (this - r - i) / 6048e5;
          break;
        default:
          a = this - r;
      }
      return n ? a : Ne(a);
    }
    function hi(e, t) {
      if (e.date() < t.date()) return -hi(t, e);
      var n = (t.year() - e.year()) * 12 + (t.month() - e.month()),
        r = e.clone().add(n, `months`),
        i,
        a;
      return (
        t - r < 0
          ? ((i = e.clone().add(n - 1, `months`)), (a = (t - r) / (r - i)))
          : ((i = e.clone().add(n + 1, `months`)), (a = (t - r) / (i - r))),
        -(n + a) || 0
      );
    }
    ((r.defaultFormat = `YYYY-MM-DDTHH:mm:ssZ`),
      (r.defaultFormatUtc = `YYYY-MM-DDTHH:mm:ss[Z]`));
    function gi() {
      return this.clone()
        .locale(`en`)
        .format(`ddd MMM DD YYYY HH:mm:ss [GMT]ZZ`);
    }
    function _i(e) {
      if (!this.isValid()) return null;
      var t = e !== !0,
        n = t ? this.clone().utc() : this;
      return n.year() < 0 || n.year() > 9999
        ? fe(
            n,
            t
              ? `YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]`
              : `YYYYYY-MM-DD[T]HH:mm:ss.SSSZ`,
          )
        : oe(Date.prototype.toISOString)
          ? t
            ? this.toDate().toISOString()
            : new Date(this.valueOf() + this.utcOffset() * 60 * 1e3)
                .toISOString()
                .replace(`Z`, fe(n, `Z`))
          : fe(
              n,
              t ? `YYYY-MM-DD[T]HH:mm:ss.SSS[Z]` : `YYYY-MM-DD[T]HH:mm:ss.SSSZ`,
            );
    }
    function vi() {
      if (!this.isValid()) return `moment.invalid(/* ` + this._i + ` */)`;
      var e = `moment`,
        t = ``,
        n,
        r,
        i,
        a;
      return (
        this.isLocal() ||
          ((e = this.utcOffset() === 0 ? `moment.utc` : `moment.parseZone`),
          (t = `Z`)),
        (n = `[` + e + `("]`),
        (r = 0 <= this.year() && this.year() <= 9999 ? `YYYY` : `YYYYYY`),
        (i = `-MM-DD[T]HH:mm:ss.SSS`),
        (a = t + `[")]`),
        this.format(n + r + i + a)
      );
    }
    function yi(e) {
      e ||= this.isUtc() ? r.defaultFormatUtc : r.defaultFormat;
      var t = fe(this, e);
      return this.localeData().postformat(t);
    }
    function bi(e, t) {
      return this.isValid() && ((y(e) && e.isValid()) || K(e).isValid())
        ? Kr({ to: this, from: e }).locale(this.locale()).humanize(!t)
        : this.localeData().invalidDate();
    }
    function xi(e) {
      return this.from(K(), e);
    }
    function Si(e, t) {
      return this.isValid() && ((y(e) && e.isValid()) || K(e).isValid())
        ? Kr({ from: this, to: e }).locale(this.locale()).humanize(!t)
        : this.localeData().invalidDate();
    }
    function Ci(e) {
      return this.to(K(), e);
    }
    function wi(e) {
      var t;
      return e === void 0
        ? this._locale._abbr
        : ((t = Fn(e)), t != null && (this._locale = t), this);
    }
    var Ti = b(
      `moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.`,
      function (e) {
        return e === void 0 ? this.localeData() : this.locale(e);
      },
    );
    function Ei() {
      return this._locale;
    }
    var Di = 1e3,
      Oi = 60 * Di,
      ki = 60 * Oi,
      Ai = 3506328 * ki;
    function ji(e, t) {
      return ((e % t) + t) % t;
    }
    function Mi(e, t, n) {
      return e < 100 && e >= 0
        ? new Date(e + 400, t, n) - Ai
        : new Date(e, t, n).valueOf();
    }
    function Ni(e, t, n) {
      return e < 100 && e >= 0
        ? Date.UTC(e + 400, t, n) - Ai
        : Date.UTC(e, t, n);
    }
    function Pi(e) {
      var t, n;
      if (((e = C(e)), e === void 0 || e === `millisecond` || !this.isValid()))
        return this;
      switch (((n = this._isUTC ? Ni : Mi), e)) {
        case `year`:
          t = n(this.year(), 0, 1);
          break;
        case `quarter`:
          t = n(this.year(), this.month() - (this.month() % 3), 1);
          break;
        case `month`:
          t = n(this.year(), this.month(), 1);
          break;
        case `week`:
          t = n(this.year(), this.month(), this.date() - this.weekday());
          break;
        case `isoWeek`:
          t = n(
            this.year(),
            this.month(),
            this.date() - (this.isoWeekday() - 1),
          );
          break;
        case `day`:
        case `date`:
          t = n(this.year(), this.month(), this.date());
          break;
        case `hour`:
          ((t = this._d.valueOf()),
            (t -= ji(t + (this._isUTC ? 0 : this.utcOffset() * Oi), ki)));
          break;
        case `minute`:
          ((t = this._d.valueOf()), (t -= ji(t, Oi)));
          break;
        case `second`:
          ((t = this._d.valueOf()), (t -= ji(t, Di)));
      }
      return (this._d.setTime(t), r.updateOffset(this, !0), this);
    }
    function Fi(e) {
      var t, n;
      if (((e = C(e)), e === void 0 || e === `millisecond` || !this.isValid()))
        return this;
      switch (((n = this._isUTC ? Ni : Mi), e)) {
        case `year`:
          t = n(this.year() + 1, 0, 1) - 1;
          break;
        case `quarter`:
          t = n(this.year(), this.month() - (this.month() % 3) + 3, 1) - 1;
          break;
        case `month`:
          t = n(this.year(), this.month() + 1, 1) - 1;
          break;
        case `week`:
          t =
            n(this.year(), this.month(), this.date() - this.weekday() + 7) - 1;
          break;
        case `isoWeek`:
          t =
            n(
              this.year(),
              this.month(),
              this.date() - (this.isoWeekday() - 1) + 7,
            ) - 1;
          break;
        case `day`:
        case `date`:
          t = n(this.year(), this.month(), this.date() + 1) - 1;
          break;
        case `hour`:
          ((t = this._d.valueOf()),
            (t +=
              ki - ji(t + (this._isUTC ? 0 : this.utcOffset() * Oi), ki) - 1));
          break;
        case `minute`:
          ((t = this._d.valueOf()), (t += Oi - ji(t, Oi) - 1));
          break;
        case `second`:
          ((t = this._d.valueOf()), (t += Di - ji(t, Di) - 1));
      }
      return (this._d.setTime(t), r.updateOffset(this, !0), this);
    }
    function Ii() {
      return this._d.valueOf() - (this._offset || 0) * 6e4;
    }
    function Li() {
      return Math.floor(this.valueOf() / 1e3);
    }
    function Ri() {
      return new Date(this.valueOf());
    }
    function zi() {
      var e = this;
      return [
        e.year(),
        e.month(),
        e.date(),
        e.hour(),
        e.minute(),
        e.second(),
        e.millisecond(),
      ];
    }
    function Bi() {
      var e = this;
      return {
        years: e.year(),
        months: e.month(),
        date: e.date(),
        hours: e.hours(),
        minutes: e.minutes(),
        seconds: e.seconds(),
        milliseconds: e.milliseconds(),
      };
    }
    function Vi() {
      return this.isValid() ? this.toISOString() : null;
    }
    function Hi() {
      return ee(this);
    }
    function Ui() {
      return p({}, g(this));
    }
    function Wi() {
      return g(this).overflow;
    }
    function Gi() {
      return {
        input: this._i,
        format: this._f,
        locale: this._locale,
        isUTC: this._isUTC,
        strict: this._strict,
      };
    }
    (k(`N`, 0, 0, `eraAbbr`),
      k(`NN`, 0, 0, `eraAbbr`),
      k(`NNN`, 0, 0, `eraAbbr`),
      k(`NNNN`, 0, 0, `eraName`),
      k(`NNNNN`, 0, 0, `eraNarrow`),
      k(`y`, [`y`, 1], `yo`, `eraYear`),
      k(`y`, [`yy`, 2], 0, `eraYear`),
      k(`y`, [`yyy`, 3], 0, `eraYear`),
      k(`y`, [`yyyy`, 4], 0, `eraYear`),
      F(`N`, na),
      F(`NN`, na),
      F(`NNN`, na),
      F(`NNNN`, ra),
      F(`NNNNN`, ia),
      L([`N`, `NN`, `NNN`, `NNNN`, `NNNNN`], function (e, t, n, r) {
        var i = n._locale.erasParse(e, r, n._strict);
        i ? (g(n).era = i) : (g(n).invalidEra = e);
      }),
      F(`y`, xe),
      F(`yy`, xe),
      F(`yyy`, xe),
      F(`yyyy`, xe),
      F(`yo`, aa),
      L([`y`, `yy`, `yyy`, `yyyy`], R),
      L([`yo`], function (e, t, n, r) {
        var i;
        (n._locale._eraYearOrdinalRegex &&
          (i = e.match(n._locale._eraYearOrdinalRegex)),
          (t[R] = n._locale.eraYearOrdinalParse
            ? n._locale.eraYearOrdinalParse(e, i)
            : parseInt(e, 10)));
      }));
    function Ki(e, t) {
      var n,
        i,
        a,
        o = this._eras || Fn(`en`)._eras;
      for (n = 0, i = o.length; n < i; ++n)
        switch (
          (typeof o[n].since == `string` &&
            ((a = r(o[n].since).startOf(`day`)), (o[n].since = a.valueOf())),
          typeof o[n].until)
        ) {
          case `undefined`:
            o[n].until = 1 / 0;
            break;
          case `string`:
            ((a = r(o[n].until).startOf(`day`).valueOf()),
              (o[n].until = a.valueOf()));
        }
      return o;
    }
    function qi(e, t, n) {
      var r,
        i,
        a = this.eras(),
        o,
        s,
        c;
      for (e = e.toUpperCase(), r = 0, i = a.length; r < i; ++r)
        if (
          ((o = a[r].name.toUpperCase()),
          (s = a[r].abbr.toUpperCase()),
          (c = a[r].narrow.toUpperCase()),
          n)
        )
          switch (t) {
            case `N`:
            case `NN`:
            case `NNN`:
              if (s === e) return a[r];
              break;
            case `NNNN`:
              if (o === e) return a[r];
              break;
            case `NNNNN`:
              if (c === e) return a[r];
          }
        else if ([o, s, c].indexOf(e) >= 0) return a[r];
    }
    function Ji(e, t) {
      var n = e.since <= e.until ? 1 : -1;
      return t === void 0
        ? r(e.since).year()
        : r(e.since).year() + (t - e.offset) * n;
    }
    function Yi() {
      var e,
        t,
        n,
        r = this.localeData().eras();
      for (e = 0, t = r.length; e < t; ++e)
        if (
          ((n = this.clone().startOf(`day`).valueOf()),
          (r[e].since <= n && n <= r[e].until) ||
            (r[e].until <= n && n <= r[e].since))
        )
          return r[e].name;
      return ``;
    }
    function Xi() {
      var e,
        t,
        n,
        r = this.localeData().eras();
      for (e = 0, t = r.length; e < t; ++e)
        if (
          ((n = this.clone().startOf(`day`).valueOf()),
          (r[e].since <= n && n <= r[e].until) ||
            (r[e].until <= n && n <= r[e].since))
        )
          return r[e].narrow;
      return ``;
    }
    function Zi() {
      var e,
        t,
        n,
        r = this.localeData().eras();
      for (e = 0, t = r.length; e < t; ++e)
        if (
          ((n = this.clone().startOf(`day`).valueOf()),
          (r[e].since <= n && n <= r[e].until) ||
            (r[e].until <= n && n <= r[e].since))
        )
          return r[e].abbr;
      return ``;
    }
    function Qi() {
      var e,
        t,
        n,
        i,
        a = this.localeData().eras();
      for (e = 0, t = a.length; e < t; ++e)
        if (
          ((n = a[e].since <= a[e].until ? 1 : -1),
          (i = this.clone().startOf(`day`).valueOf()),
          (a[e].since <= i && i <= a[e].until) ||
            (a[e].until <= i && i <= a[e].since))
        )
          return (this.year() - r(a[e].since).year()) * n + a[e].offset;
      return this.year();
    }
    function $i(e) {
      return (
        s(this, `_erasNameRegex`) || oa.call(this),
        e ? this._erasNameRegex : this._erasRegex
      );
    }
    function ea(e) {
      return (
        s(this, `_erasAbbrRegex`) || oa.call(this),
        e ? this._erasAbbrRegex : this._erasRegex
      );
    }
    function ta(e) {
      return (
        s(this, `_erasNarrowRegex`) || oa.call(this),
        e ? this._erasNarrowRegex : this._erasRegex
      );
    }
    function na(e, t) {
      return t.erasAbbrRegex(e);
    }
    function ra(e, t) {
      return t.erasNameRegex(e);
    }
    function ia(e, t) {
      return t.erasNarrowRegex(e);
    }
    function aa(e, t) {
      return t._eraYearOrdinalRegex || xe;
    }
    function oa() {
      var e = [],
        t = [],
        n = [],
        r = [],
        i,
        a,
        o,
        s,
        c,
        l = this.eras();
      for (i = 0, a = l.length; i < a; ++i)
        ((o = Me(l[i].name)),
          (s = Me(l[i].abbr)),
          (c = Me(l[i].narrow)),
          t.push(o),
          e.push(s),
          n.push(c),
          r.push(o),
          r.push(s),
          r.push(c));
      ((this._erasRegex = RegExp(`^(` + r.join(`|`) + `)`, `i`)),
        (this._erasNameRegex = RegExp(`^(` + t.join(`|`) + `)`, `i`)),
        (this._erasAbbrRegex = RegExp(`^(` + e.join(`|`) + `)`, `i`)),
        (this._erasNarrowRegex = RegExp(`^(` + n.join(`|`) + `)`, `i`)));
    }
    (k(0, [`gg`, 2], 0, function () {
      return this.weekYear() % 100;
    }),
      k(0, [`GG`, 2], 0, function () {
        return this.isoWeekYear() % 100;
      }));
    function sa(e, t) {
      k(0, [e, e.length], 0, t);
    }
    (sa(`gggg`, `weekYear`),
      sa(`ggggg`, `weekYear`),
      sa(`GGGG`, `isoWeekYear`),
      sa(`GGGGG`, `isoWeekYear`),
      F(`G`, Se),
      F(`g`, Se),
      F(`GG`, P, M),
      F(`gg`, P, M),
      F(`GGGG`, ye, me),
      F(`gggg`, ye, me),
      F(`GGGGG`, be, he),
      F(`ggggg`, be, he),
      Fe([`gggg`, `ggggg`, `GGGG`, `GGGGG`], function (e, t, n, r) {
        t[r.substr(0, 2)] = I(e);
      }),
      Fe([`gg`, `GG`], function (e, t, n, i) {
        t[i] = r.parseTwoDigitYear(e);
      }));
    function ca(e) {
      return ma.call(
        this,
        e,
        this.week(),
        this.weekday() + this.localeData()._week.dow,
        this.localeData()._week.dow,
        this.localeData()._week.doy,
      );
    }
    function la(e) {
      return ma.call(this, e, this.isoWeek(), this.isoWeekday(), 1, 4);
    }
    function ua() {
      return ln(this.year(), 1, 4);
    }
    function da() {
      return ln(this.isoWeekYear(), 1, 4);
    }
    function fa() {
      var e = this.localeData()._week;
      return ln(this.year(), e.dow, e.doy);
    }
    function pa() {
      var e = this.localeData()._week;
      return ln(this.weekYear(), e.dow, e.doy);
    }
    function ma(e, t, n, r, i) {
      var a;
      return e == null
        ? sn(this, r, i).year
        : ((a = ln(e, r, i)), t > a && (t = a), ha.call(this, e, t, n, r, i));
    }
    function ha(e, t, n, r, i) {
      var a = an(e, t, n, r, i),
        o = nn(a.year, 0, a.dayOfYear);
      return (
        this.year(o.getUTCFullYear()),
        this.month(o.getUTCMonth()),
        this.date(o.getUTCDate()),
        this
      );
    }
    (k(`Q`, 0, `Qo`, `quarter`),
      F(`Q`, pe),
      L(`Q`, function (e, t) {
        t[Re] = (I(e) - 1) * 3;
      }));
    function ga(e) {
      return e == null
        ? Math.ceil((this.month() + 1) / 3)
        : this.month((e - 1) * 3 + (this.month() % 3));
    }
    (k(`D`, [`DD`, 2], `Do`, `date`),
      F(`D`, P, De),
      F(`DD`, P, M),
      F(`Do`, function (e, t) {
        return e
          ? t._dayOfMonthOrdinalParse || t._ordinalParse
          : t._dayOfMonthOrdinalParseLenient;
      }),
      L([`D`, `DD`], ze),
      L(`Do`, function (e, t) {
        t[ze] = I(e.match(P)[0]);
      }));
    var _a = Ye(`Date`, !0);
    (k(`DDD`, [`DDDD`, 3], `DDDo`, `dayOfYear`),
      F(`DDD`, ve),
      F(`DDDD`, N),
      L([`DDD`, `DDDD`], function (e, t, n) {
        n._dayOfYear = I(e);
      }));
    function va(e) {
      var t =
        Math.round(
          (this.clone().startOf(`day`) - this.clone().startOf(`year`)) / 864e5,
        ) + 1;
      return e == null ? t : this.add(e - t, `d`);
    }
    (k(`m`, [`mm`, 2], 0, `minute`),
      F(`m`, P, Oe),
      F(`mm`, P, M),
      L([`m`, `mm`], Ve));
    var ya = Ye(`Minutes`, !1);
    (k(`s`, [`ss`, 2], 0, `second`),
      F(`s`, P, Oe),
      F(`ss`, P, M),
      L([`s`, `ss`], He));
    var ba = Ye(`Seconds`, !1);
    (k(`S`, 0, 0, function () {
      return ~~(this.millisecond() / 100);
    }),
      k(0, [`SS`, 2], 0, function () {
        return ~~(this.millisecond() / 10);
      }),
      k(0, [`SSS`, 3], 0, `millisecond`),
      k(0, [`SSSS`, 4], 0, function () {
        return this.millisecond() * 10;
      }),
      k(0, [`SSSSS`, 5], 0, function () {
        return this.millisecond() * 100;
      }),
      k(0, [`SSSSSS`, 6], 0, function () {
        return this.millisecond() * 1e3;
      }),
      k(0, [`SSSSSSS`, 7], 0, function () {
        return this.millisecond() * 1e4;
      }),
      k(0, [`SSSSSSSS`, 8], 0, function () {
        return this.millisecond() * 1e5;
      }),
      k(0, [`SSSSSSSSS`, 9], 0, function () {
        return this.millisecond() * 1e6;
      }),
      F(`S`, ve, pe),
      F(`SS`, ve, M),
      F(`SSS`, ve, N));
    for (var xa = `SSSS`, Sa; xa.length <= 9; xa += `S`) F(xa, xe);
    function Ca(e, t) {
      t[Ue] = I((`0.` + e) * 1e3);
    }
    for (xa = `S`; xa.length <= 9; xa += `S`) L(xa, Ca);
    ((Sa = Ye(`Milliseconds`, !1)),
      k(`z`, 0, 0, `zoneAbbr`),
      k(`zz`, 0, 0, `zoneName`));
    function wa() {
      return this._isUTC ? `UTC` : ``;
    }
    function Ta() {
      return this._isUTC ? `Coordinated Universal Time` : ``;
    }
    var q = ie.prototype;
    ((q.add = Qr),
      (q.calendar = oi),
      (q.clone = si),
      (q.diff = mi),
      (q.endOf = Fi),
      (q.format = yi),
      (q.from = bi),
      (q.fromNow = xi),
      (q.to = Si),
      (q.toNow = Ci),
      (q.get = z),
      (q.invalidAt = Wi),
      (q.isAfter = ci),
      (q.isBefore = li),
      (q.isBetween = ui),
      (q.isSame = di),
      (q.isSameOrAfter = fi),
      (q.isSameOrBefore = pi),
      (q.isValid = Hi),
      (q.lang = Ti),
      (q.locale = wi),
      (q.localeData = Ei),
      (q.max = hr),
      (q.min = mr),
      (q.parsingFlags = Ui),
      (q.set = Qe),
      (q.startOf = Pi),
      (q.subtract = $r),
      (q.toArray = zi),
      (q.toObject = Bi),
      (q.toDate = Ri),
      (q.toISOString = _i),
      (q.inspect = vi),
      typeof Symbol < `u` &&
        Symbol.for != null &&
        (q[Symbol.for(`nodejs.util.inspect.custom`)] = function () {
          return `Moment<` + this.format() + `>`;
        }),
      (q.toJSON = Vi),
      (q.toString = gi),
      (q.unix = Li),
      (q.valueOf = Ii),
      (q.creationData = Gi),
      (q.eraName = Yi),
      (q.eraNarrow = Xi),
      (q.eraAbbr = Zi),
      (q.eraYear = Qi),
      (q.year = qe),
      (q.isLeapYear = Je),
      (q.weekYear = ca),
      (q.isoWeekYear = la),
      (q.quarter = q.quarters = ga),
      (q.month = ft),
      (q.daysInMonth = pt),
      (q.week = q.weeks = mn),
      (q.isoWeek = q.isoWeeks = hn),
      (q.weeksInYear = fa),
      (q.weeksInWeekYear = pa),
      (q.isoWeeksInYear = ua),
      (q.isoWeeksInISOWeekYear = da),
      (q.date = _a),
      (q.day = q.days = Nt),
      (q.weekday = Pt),
      (q.isoWeekday = H),
      (q.dayOfYear = va),
      (q.hour = q.hours = Sn),
      (q.minute = q.minutes = ya),
      (q.second = q.seconds = ba),
      (q.millisecond = q.milliseconds = Sa),
      (q.utcOffset = Nr),
      (q.utc = Fr),
      (q.local = Ir),
      (q.parseZone = Lr),
      (q.hasAlignedHourOffset = Rr),
      (q.isDST = zr),
      (q.isLocal = Vr),
      (q.isUtcOffset = Hr),
      (q.isUtc = Ur),
      (q.isUTC = Ur),
      (q.zoneAbbr = wa),
      (q.zoneName = Ta),
      (q.dates = b(`dates accessor is deprecated. Use date instead.`, _a)),
      (q.months = b(`months accessor is deprecated. Use month instead`, ft)),
      (q.years = b(`years accessor is deprecated. Use year instead`, qe)),
      (q.zone = b(
        `moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/`,
        Pr,
      )),
      (q.isDSTShifted = b(
        `isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information`,
        Br,
      )));
    function Ea(e) {
      return K(e * 1e3);
    }
    function Da() {
      return K.apply(null, arguments).parseZone();
    }
    function Oa(e) {
      return e;
    }
    var J = zt.prototype;
    ((J.calendar = Ht),
      (J.longDateFormat = Wt),
      (J.invalidDate = Kt),
      (J.ordinal = Yt),
      (J.preparse = Oa),
      (J.postformat = Oa),
      (J.relativeTime = Qt),
      (J.pastFuture = en),
      (J.set = W),
      (J.eras = Ki),
      (J.erasParse = qi),
      (J.erasConvertYear = Ji),
      (J.erasAbbrRegex = ea),
      (J.erasNameRegex = $i),
      (J.erasNarrowRegex = ta),
      (J.months = st),
      (J.monthsShort = ct),
      (J.monthsParse = ut),
      (J.monthsRegex = ht),
      (J.monthsShortRegex = mt),
      (J.week = un),
      (J.firstDayOfYear = pn),
      (J.firstDayOfWeek = fn),
      (J.weekdays = Ot),
      (J.weekdaysMin = At),
      (J.weekdaysShort = kt),
      (J.weekdaysParse = Mt),
      (J.weekdaysRegex = Ft),
      (J.weekdaysShortRegex = It),
      (J.weekdaysMinRegex = Lt),
      (J.isPM = bn),
      (J.meridiem = Cn));
    function ka(e, t, n, r) {
      var i = Fn(),
        a = m().set(r, t);
      return i[n](a, e);
    }
    function Aa(e, t, n) {
      if ((u(e) && ((t = e), (e = void 0)), (e ||= ``), t != null))
        return ka(e, t, n, `month`);
      var r,
        i = [];
      for (r = 0; r < 12; r++) i[r] = ka(e, r, n, `month`);
      return i;
    }
    function ja(e, t, n, r) {
      typeof e == `boolean`
        ? (u(t) && ((n = t), (t = void 0)), (t ||= ``))
        : ((t = e),
          (n = t),
          (e = !1),
          u(t) && ((n = t), (t = void 0)),
          (t ||= ``));
      var i = Fn(),
        a = e ? i._week.dow : 0,
        o,
        s = [];
      if (n != null) return ka(t, (n + a) % 7, r, `day`);
      for (o = 0; o < 7; o++) s[o] = ka(t, (o + a) % 7, r, `day`);
      return s;
    }
    function Ma(e, t) {
      return Aa(e, t, `months`);
    }
    function Na(e, t) {
      return Aa(e, t, `monthsShort`);
    }
    function Pa(e, t, n) {
      return ja(e, t, n, `weekdays`);
    }
    function Fa(e, t, n) {
      return ja(e, t, n, `weekdaysShort`);
    }
    function Ia(e, t, n) {
      return ja(e, t, n, `weekdaysMin`);
    }
    (Mn(`en`, {
      eras: [
        {
          since: `0001-01-01`,
          until: 1 / 0,
          offset: 1,
          name: `Anno Domini`,
          narrow: `AD`,
          abbr: `AD`,
        },
        {
          since: `0000-12-31`,
          until: -1 / 0,
          offset: 1,
          name: `Before Christ`,
          narrow: `BC`,
          abbr: `BC`,
        },
      ],
      dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
      ordinal: function (e) {
        var t = e % 10;
        return (
          e +
          (I((e % 100) / 10) === 1
            ? `th`
            : t === 1
              ? `st`
              : t === 2
                ? `nd`
                : t === 3
                  ? `rd`
                  : `th`)
        );
      },
    }),
      (r.lang = b(`moment.lang is deprecated. Use moment.locale instead.`, Mn)),
      (r.langData = b(
        `moment.langData is deprecated. Use moment.localeData instead.`,
        Fn,
      )));
    var La = Math.abs;
    function Ra() {
      var e = this._data;
      return (
        (this._milliseconds = La(this._milliseconds)),
        (this._days = La(this._days)),
        (this._months = La(this._months)),
        (e.milliseconds = La(e.milliseconds)),
        (e.seconds = La(e.seconds)),
        (e.minutes = La(e.minutes)),
        (e.hours = La(e.hours)),
        (e.months = La(e.months)),
        (e.years = La(e.years)),
        this
      );
    }
    function za(e, t, n, r) {
      var i = Kr(t, n);
      return (
        (e._milliseconds += r * i._milliseconds),
        (e._days += r * i._days),
        (e._months += r * i._months),
        e._bubble()
      );
    }
    function Ba(e, t) {
      return za(this, e, t, 1);
    }
    function Va(e, t) {
      return za(this, e, t, -1);
    }
    function Ha(e) {
      return e < 0 ? Math.floor(e) : Math.ceil(e);
    }
    function Y() {
      var e = this._milliseconds,
        t = this._days,
        n = this._months,
        r = this._data,
        i,
        a,
        o,
        s,
        c;
      return (
        (e >= 0 && t >= 0 && n >= 0) ||
          (e <= 0 && t <= 0 && n <= 0) ||
          ((e += Ha(Ua(n) + t) * 864e5), (t = 0), (n = 0)),
        (r.milliseconds = e % 1e3),
        (i = Ne(e / 1e3)),
        (r.seconds = i % 60),
        (a = Ne(i / 60)),
        (r.minutes = a % 60),
        (o = Ne(a / 60)),
        (r.hours = o % 24),
        (t += Ne(o / 24)),
        (c = Ne(X(t))),
        (n += c),
        (t -= Ha(Ua(c))),
        (s = Ne(n / 12)),
        (n %= 12),
        (r.days = t),
        (r.months = n),
        (r.years = s),
        this
      );
    }
    function X(e) {
      return (e * 4800) / 146097;
    }
    function Ua(e) {
      return (e * 146097) / 4800;
    }
    function Wa(e) {
      if (!this.isValid()) return NaN;
      var t,
        n,
        r = this._milliseconds;
      if (((e = C(e)), e === `month` || e === `quarter` || e === `year`))
        switch (((t = this._days + r / 864e5), (n = this._months + X(t)), e)) {
          case `month`:
            return n;
          case `quarter`:
            return n / 3;
          case `year`:
            return n / 12;
        }
      else
        switch (((t = this._days + Math.round(Ua(this._months))), e)) {
          case `week`:
            return t / 7 + r / 6048e5;
          case `day`:
            return t + r / 864e5;
          case `hour`:
            return t * 24 + r / 36e5;
          case `minute`:
            return t * 1440 + r / 6e4;
          case `second`:
            return t * 86400 + r / 1e3;
          case `millisecond`:
            return Math.floor(t * 864e5) + r;
          default:
            throw Error(`Unknown unit ` + e);
        }
    }
    function Ga(e) {
      return function () {
        return this.as(e);
      };
    }
    var Ka = Ga(`ms`),
      qa = Ga(`s`),
      Ja = Ga(`m`),
      Ya = Ga(`h`),
      Xa = Ga(`d`),
      Za = Ga(`w`),
      Qa = Ga(`M`),
      $a = Ga(`Q`),
      eo = Ga(`y`),
      to = Ka;
    function no() {
      return Kr(this);
    }
    function ro(e) {
      return ((e = C(e)), this.isValid() ? this[e + `s`]() : NaN);
    }
    function io(e) {
      return function () {
        return this.isValid() ? this._data[e] : NaN;
      };
    }
    var ao = io(`milliseconds`),
      oo = io(`seconds`),
      so = io(`minutes`),
      co = io(`hours`),
      lo = io(`days`),
      uo = io(`months`),
      fo = io(`years`);
    function po() {
      return Ne(this.days() / 7);
    }
    var mo = Math.round,
      ho = { ss: 44, s: 45, m: 45, h: 22, d: 26, w: null, M: 11 };
    function go(e, t, n, r, i) {
      return Zt.call(i, t || 1, !!n, e, r);
    }
    function _o(e, t, n, r) {
      var i = Kr(e).abs(),
        a = mo(i.as(`s`)),
        o = mo(i.as(`m`)),
        s = mo(i.as(`h`)),
        c = mo(i.as(`d`)),
        l = mo(i.as(`M`)),
        u = mo(i.as(`w`)),
        d = mo(i.as(`y`)),
        f =
          (a <= n.ss && [`s`, a]) ||
          (a < n.s && [`ss`, a]) ||
          (o <= 1 && [`m`]) ||
          (o < n.m && [`mm`, o]) ||
          (s <= 1 && [`h`]) ||
          (s < n.h && [`hh`, s]) ||
          (c <= 1 && [`d`]) ||
          (c < n.d && [`dd`, c]);
      return (
        n.w != null && (f = f || (u <= 1 && [`w`]) || (u < n.w && [`ww`, u])),
        (f = f ||
          (l <= 1 && [`M`]) ||
          (l < n.M && [`MM`, l]) ||
          (d <= 1 && [`y`]) || [`yy`, d]),
        (f[2] = t),
        (f[3] = +e > 0),
        (f[4] = r),
        go.apply(null, f)
      );
    }
    function vo(e) {
      return e === void 0 ? mo : typeof e == `function` && ((mo = e), !0);
    }
    function yo(e, t) {
      return ho[e] === void 0
        ? !1
        : t === void 0
          ? ho[e]
          : ((ho[e] = t), e === `s` && (ho.ss = t - 1), !0);
    }
    function bo(e, t) {
      if (!this.isValid()) return this.localeData().invalidDate();
      var n = !1,
        r = ho,
        i,
        a;
      return (
        typeof e == `object` && ((t = e), (e = !1)),
        typeof e == `boolean` && (n = e),
        typeof t == `object` &&
          ((r = p(p({}, ho), t || {})),
          t.s != null && t.ss == null && (r.ss = t.s - 1)),
        (i = this.localeData()),
        (a = _o(this, !n, r, i)),
        n && (a = $t.call(i, +this, a)),
        i.postformat(a)
      );
    }
    var xo = Math.abs;
    function So(e) {
      return (e > 0) - (e < 0) || +e;
    }
    function Co() {
      if (!this.isValid()) return this.localeData().invalidDate();
      var e = xo(this._milliseconds) / 1e3,
        t = xo(this._days),
        n = xo(this._months),
        r,
        i,
        a,
        o,
        s = this.asSeconds(),
        c,
        l,
        u,
        d;
      return s
        ? ((r = Ne(e / 60)),
          (i = Ne(r / 60)),
          (e %= 60),
          (r %= 60),
          (a = Ne(n / 12)),
          (n %= 12),
          (o = e ? e.toFixed(3).replace(/\.?0+$/, ``) : ``),
          (c = s < 0 ? `-` : ``),
          (l = So(this._months) === So(s) ? `` : `-`),
          (u = So(this._days) === So(s) ? `` : `-`),
          (d = So(this._milliseconds) === So(s) ? `` : `-`),
          c +
            `P` +
            (a ? l + a + `Y` : ``) +
            (n ? l + n + `M` : ``) +
            (t ? u + t + `D` : ``) +
            (i || r || e ? `T` : ``) +
            (i ? d + i + `H` : ``) +
            (r ? d + r + `M` : ``) +
            (e ? d + o + `S` : ``))
        : `P0D`;
    }
    var Z = wr.prototype;
    return (
      (Z.isValid = Sr),
      (Z.abs = Ra),
      (Z.add = Ba),
      (Z.subtract = Va),
      (Z.as = Wa),
      (Z.asMilliseconds = Ka),
      (Z.asSeconds = qa),
      (Z.asMinutes = Ja),
      (Z.asHours = Ya),
      (Z.asDays = Xa),
      (Z.asWeeks = Za),
      (Z.asMonths = Qa),
      (Z.asQuarters = $a),
      (Z.asYears = eo),
      (Z.valueOf = to),
      (Z._bubble = Y),
      (Z.clone = no),
      (Z.get = ro),
      (Z.milliseconds = ao),
      (Z.seconds = oo),
      (Z.minutes = so),
      (Z.hours = co),
      (Z.days = lo),
      (Z.weeks = po),
      (Z.months = uo),
      (Z.years = fo),
      (Z.humanize = bo),
      (Z.toISOString = Co),
      (Z.toString = Co),
      (Z.toJSON = Co),
      (Z.locale = wi),
      (Z.localeData = Ei),
      (Z.toIsoString = b(
        `toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)`,
        Co,
      )),
      (Z.lang = Ti),
      k(`X`, 0, 0, `unix`),
      k(`x`, 0, 0, `valueOf`),
      F(`x`, Se),
      F(`X`, Te),
      L(`X`, function (e, t, n) {
        n._d = new Date(parseFloat(e) * 1e3);
      }),
      L(`x`, function (e, t, n) {
        n._d = new Date(I(e));
      }),
      (r.version = `2.31.0`),
      i(K),
      (r.fn = q),
      (r.min = _r),
      (r.max = vr),
      (r.now = yr),
      (r.utc = m),
      (r.unix = Ea),
      (r.months = Ma),
      (r.isDate = d),
      (r.locale = Mn),
      (r.invalid = v),
      (r.duration = Kr),
      (r.isMoment = y),
      (r.weekdays = Pa),
      (r.parseZone = Da),
      (r.localeData = Fn),
      (r.isDuration = Tr),
      (r.monthsShort = Na),
      (r.weekdaysMin = Ia),
      (r.defineLocale = Nn),
      (r.updateLocale = Pn),
      (r.locales = In),
      (r.weekdaysShort = Fa),
      (r.normalizeUnits = C),
      (r.relativeTimeRounding = vo),
      (r.relativeTimeThreshold = yo),
      (r.calendarFormat = ai),
      (r.prototype = q),
      (r.HTML5_FMT = {
        DATETIME_LOCAL: `YYYY-MM-DDTHH:mm`,
        DATETIME_LOCAL_SECONDS: `YYYY-MM-DDTHH:mm:ss`,
        DATETIME_LOCAL_MS: `YYYY-MM-DDTHH:mm:ss.SSS`,
        DATE: `YYYY-MM-DD`,
        TIME: `HH:mm`,
        TIME_SECONDS: `HH:mm:ss`,
        TIME_MS: `HH:mm:ss.SSS`,
        WEEK: `GGGG-[W]WW`,
        MONTH: `YYYY-MM`,
      }),
      r
    );
  });
});
Hi();
var Ui = new (class {
  bIncludeFeaturedAsGameSource = !0;
  get nOverrideDateNow() {
    return ze();
  }
  set nOverrideDateNow(e) {
    Ve(e);
  }
  get bRequireAllEventsLoadedInTimeBlock() {
    return !1;
  }
  get bIncludeCurators() {
    return !0;
  }
  GetTimeNowWithOverride() {
    return Re();
  }
  GetTimeNowWithOverrideAsDate() {
    return Be();
  }
  BHasTimeOverride() {
    return !!ze();
  }
  ParseDevOverrides(e) {
    e &&
      e.length != 0 &&
      new URLSearchParams(e[0] == `?` ? e.substring(1) : e).has(`t`);
  }
})();
(Ie(`g_EventCalendarDevFeatures`, Ui), Math.floor(new Date().getTime() / 1e3));
var Wi = class e {
  constructor() {
    c(this);
  }
  m_mapBroadcasterSteamIDToEvents = new Map();
  m_mapBroadcasterSteamIDData = new Map();
  static GetBBCodeParam(e, t, n = ``) {
    let r = RegExp(`\\W${t}\\W*=\\W*\\"(.*?)\\"`, `gmi`).exec(e);
    return r ? r[1] : n;
  }
  static ParseCalendarEventPresentersFromText(t) {
    let n = /\[\W*speaker(\W[\s\S]*?)\]([\s\S]*?)\[\W*\/speaker\W*\]/gi,
      r = [];
    for (;;) {
      let i = n.exec(t);
      if (i === null) break;
      let a = i[1],
        o = i[2],
        s = e.GetBBCodeParam(a, `steamid`),
        c = {
          steamID: s ? new Ue(s) : void 0,
          name: e.GetBBCodeParam(a, `name`),
          title: e.GetBBCodeParam(a, `title`),
          company: e.GetBBCodeParam(a, `company`),
          photo: e.GetBBCodeParam(a, `photo`),
          bio: o,
        };
      r.push(c);
    }
    return r;
  }
  static ParseEventModelPresenters(t, n) {
    let r = t.GetDescriptionWithFallback(n) ?? ``;
    return e.ParseCalendarEventPresentersFromText(r);
  }
  static ParseEventAppReferencesFromText(e) {
    let t = /\/\/store\.steampowered\.com\/app\/(\d+)/gi,
      n = new Set();
    for (;;) {
      let r = t.exec(e);
      if (r === null) break;
      let i = r[1];
      n.add(Number(i));
    }
    return n;
  }
  static ParseEventModelAppReferences(t, n) {
    let r = t.GetDescriptionWithFallback(n) ?? ``,
      i = e.ParseEventAppReferencesFromText(r);
    if (t.jsondata?.referenced_appids)
      for (let e of t.jsondata.referenced_appids) i.add(e);
    return i;
  }
  async BuildBroadcasterSteamIDToActiveEventMap(e) {
    let t = Ui.GetTimeNowWithOverride(),
      n = e.GetCalendarItemsInTimeRange(t - 3600, t);
    for (let e of n.rgCalendarItems)
      Et.QueueLoadPartnerEvent(e.clanid, e.unique_id);
    let r = n.rgCalendarItems.map((e) =>
        Et.LoadPartnerEventFromClanEventGIDAndClanSteamID(
          Ue.InitFromClanID(e.clanid, h.EUNIVERSE),
          e.unique_id,
          0,
        ),
      ),
      i = await Promise.all(r),
      a = new Map();
    for (let e of i)
      if (e && !(e.endTime && e.endTime < t))
        for (let t of e.GetBroadcastWhitelistAsSteamIDs()) {
          let n = a.get(t);
          n ? n.push(e) : a.set(t, [e]);
        }
    return a;
  }
  IsBroadcasterAlreadyBound(e, t) {
    let n = this.m_mapBroadcasterSteamIDToEvents.get(e) ?? [],
      r = n.length;
    if ((t ? t.length : 0) != r) return !1;
    for (let e = 0; e < r; e++) if (n[e] != t[e].GID) return !1;
    return !0;
  }
  static BuildSteamIDToPresenterMapFromEventList(t, n) {
    let r = new Map();
    for (let i of t) {
      if (!i) continue;
      let t = e.ParseEventModelPresenters(i, n);
      for (let e of t) e.steamID && r.set(e.steamID.ConvertTo64BitString(), e);
    }
    return r;
  }
  RemoveCachedDataIfNotInMap(e) {
    let t = [];
    (this.m_mapBroadcasterSteamIDToEvents.forEach((n, r) => {
      e.has(r) || t.push(r);
    }),
      t.forEach((e) => {
        (this.m_mapBroadcasterSteamIDData.delete(e),
          this.m_mapBroadcasterSteamIDToEvents.delete(e));
      }));
  }
  static BuildAppIDRefsForEventList(t, n) {
    let r = new Set();
    for (let i of t)
      e.ParseEventModelAppReferences(i, n).forEach((e) => r.add(e));
    return Array.from(r);
  }
  UpdateCachedDataFromEvents(t, n) {
    t.forEach((t, r) => {
      if (this.IsBroadcasterAlreadyBound(r, t)) return;
      let i = {
        m_mapPresenters: e.BuildSteamIDToPresenterMapFromEventList(t, n),
        m_rgAppIDs: e.BuildAppIDRefsForEventList(t, n),
      };
      (this.m_mapBroadcasterSteamIDData.set(r, i),
        this.m_mapBroadcasterSteamIDToEvents.set(
          r,
          t.map((e) => e.GID ?? ``),
        ));
    });
  }
  async SynchronizeEventsWithBroadcasts(e, t) {
    let n = await this.BuildBroadcasterSteamIDToActiveEventMap(e);
    (this.RemoveCachedDataIfNotInMap(n), this.UpdateCachedDataFromEvents(n, t));
  }
  GetPresenterMapForBroadcasterSteamID(e) {
    return this.m_mapBroadcasterSteamIDData.get(e)?.m_mapPresenters;
  }
  GetAppIDListForBroadcasterSteamID(e) {
    return this.m_mapBroadcasterSteamIDData.get(e)?.m_rgAppIDs;
  }
};
O([p], Wi.prototype, `m_mapBroadcasterSteamIDData`, void 0);
var Gi = new Wi(),
  Ki = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.account_name || D(e.M()),
        H.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            account_name: { n: 1, br: y.readString, bw: M.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= j(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return T(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      N(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAuthentication_GetPasswordRSAPublicKey_Request`;
    }
  },
  qi = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.publickey_mod || D(e.M()),
        H.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            publickey_mod: { n: 1, br: y.readString, bw: M.writeString },
            publickey_exp: { n: 2, br: y.readString, bw: M.writeString },
            timestamp: {
              n: 3,
              br: y.readUint64String,
              bw: M.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= j(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return T(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      N(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAuthentication_GetPasswordRSAPublicKey_Response`;
    }
  },
  Ji = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.device_friendly_name || D(e.M()),
        H.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            device_friendly_name: { n: 1, br: y.readString, bw: M.writeString },
            platform_type: { n: 2, br: y.readEnum, bw: M.writeEnum },
            os_type: { n: 3, br: y.readInt32, bw: M.writeInt32 },
            gaming_device_type: { n: 4, br: y.readUint32, bw: M.writeUint32 },
            client_count: { n: 5, br: y.readUint32, bw: M.writeUint32 },
            machine_id: { n: 6, br: y.readBytes, bw: M.writeBytes },
            app_type: { n: 7, br: y.readEnum, bw: M.writeEnum },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= j(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return T(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      N(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAuthentication_DeviceDetails`;
    }
  },
  Yi = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.confirmation_type || D(e.M()),
        H.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            confirmation_type: { n: 1, br: y.readEnum, bw: M.writeEnum },
            associated_message: { n: 2, br: y.readString, bw: M.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= j(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return T(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      N(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAuthentication_AllowedConfirmation`;
    }
  },
  Xi = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.device_friendly_name || D(e.M()),
        H.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            device_friendly_name: { n: 1, br: y.readString, bw: M.writeString },
            platform_type: { n: 2, br: y.readEnum, bw: M.writeEnum },
            device_details: { n: 3, c: Ji },
            website_id: {
              n: 4,
              d: `Unknown`,
              br: y.readString,
              bw: M.writeString,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= j(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return T(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      N(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAuthentication_BeginAuthSessionViaQR_Request`;
    }
  },
  Zi = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.client_id || D(e.M()),
        H.Message.initialize(this, t, 0, -1, [5], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            client_id: {
              n: 1,
              br: y.readUint64String,
              bw: M.writeUint64String,
            },
            challenge_url: { n: 2, br: y.readString, bw: M.writeString },
            request_id: { n: 3, br: y.readBytes, bw: M.writeBytes },
            interval: { n: 4, br: y.readFloat, bw: M.writeFloat },
            allowed_confirmations: { n: 5, c: Yi, r: !0, q: !0 },
            version: { n: 6, br: y.readInt32, bw: M.writeInt32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= j(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return T(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      N(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAuthentication_BeginAuthSessionViaQR_Response`;
    }
  },
  Qi = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.device_friendly_name || D(e.M()),
        H.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            device_friendly_name: { n: 1, br: y.readString, bw: M.writeString },
            account_name: { n: 2, br: y.readString, bw: M.writeString },
            encrypted_password: { n: 3, br: y.readString, bw: M.writeString },
            encryption_timestamp: {
              n: 4,
              br: y.readUint64String,
              bw: M.writeUint64String,
            },
            remember_login: { n: 5, br: y.readBool, bw: M.writeBool },
            platform_type: { n: 6, br: y.readEnum, bw: M.writeEnum },
            persistence: { n: 7, d: 1, br: y.readEnum, bw: M.writeEnum },
            website_id: {
              n: 8,
              d: `Unknown`,
              br: y.readString,
              bw: M.writeString,
            },
            device_details: { n: 9, c: Ji },
            guard_data: { n: 10, br: y.readString, bw: M.writeString },
            language: { n: 11, br: y.readUint32, bw: M.writeUint32 },
            qos_level: { n: 12, d: 2, br: y.readInt32, bw: M.writeInt32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= j(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return T(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      N(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAuthentication_BeginAuthSessionViaCredentials_Request`;
    }
  },
  $i = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.client_id || D(e.M()),
        H.Message.initialize(this, t, 0, -1, [4], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            client_id: {
              n: 1,
              br: y.readUint64String,
              bw: M.writeUint64String,
            },
            request_id: { n: 2, br: y.readBytes, bw: M.writeBytes },
            interval: { n: 3, br: y.readFloat, bw: M.writeFloat },
            allowed_confirmations: { n: 4, c: Yi, r: !0, q: !0 },
            steamid: { n: 5, br: y.readUint64String, bw: M.writeUint64String },
            weak_token: { n: 6, br: y.readString, bw: M.writeString },
            agreement_session_url: {
              n: 7,
              br: y.readString,
              bw: M.writeString,
            },
            extended_error_message: {
              n: 8,
              br: y.readString,
              bw: M.writeString,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= j(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return T(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      N(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAuthentication_BeginAuthSessionViaCredentials_Response`;
    }
  },
  ea = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.client_id || D(e.M()),
        H.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            client_id: {
              n: 1,
              br: y.readUint64String,
              bw: M.writeUint64String,
            },
            request_id: { n: 2, br: y.readBytes, bw: M.writeBytes },
            token_to_revoke: {
              n: 3,
              br: y.readFixed64String,
              bw: M.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= j(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return T(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      N(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAuthentication_PollAuthSessionStatus_Request`;
    }
  },
  ta = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.new_client_id || D(e.M()),
        H.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            new_client_id: {
              n: 1,
              br: y.readUint64String,
              bw: M.writeUint64String,
            },
            new_challenge_url: { n: 2, br: y.readString, bw: M.writeString },
            refresh_token: { n: 3, br: y.readString, bw: M.writeString },
            access_token: { n: 4, br: y.readString, bw: M.writeString },
            had_remote_interaction: { n: 5, br: y.readBool, bw: M.writeBool },
            account_name: { n: 6, br: y.readString, bw: M.writeString },
            new_guard_data: { n: 7, br: y.readString, bw: M.writeString },
            agreement_session_url: {
              n: 8,
              br: y.readString,
              bw: M.writeString,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= j(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return T(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      N(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAuthentication_PollAuthSessionStatus_Response`;
    }
  },
  na = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.client_id || D(e.M()),
        H.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            client_id: {
              n: 1,
              br: y.readUint64String,
              bw: M.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= j(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return T(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      N(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAuthentication_GetAuthSessionInfo_Request`;
    }
  },
  ra = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.ip || D(e.M()),
        H.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            ip: { n: 1, br: y.readString, bw: M.writeString },
            geoloc: { n: 2, br: y.readString, bw: M.writeString },
            city: { n: 3, br: y.readString, bw: M.writeString },
            state: { n: 4, br: y.readString, bw: M.writeString },
            country: { n: 5, br: y.readString, bw: M.writeString },
            platform_type: { n: 6, br: y.readEnum, bw: M.writeEnum },
            device_friendly_name: { n: 7, br: y.readString, bw: M.writeString },
            version: { n: 8, br: y.readInt32, bw: M.writeInt32 },
            login_history: { n: 9, br: y.readEnum, bw: M.writeEnum },
            requestor_location_mismatch: {
              n: 10,
              br: y.readBool,
              bw: M.writeBool,
            },
            high_usage_login: { n: 11, br: y.readBool, bw: M.writeBool },
            requested_persistence: { n: 12, br: y.readEnum, bw: M.writeEnum },
            device_trust: { n: 13, br: y.readInt32, bw: M.writeInt32 },
            app_type: { n: 14, br: y.readEnum, bw: M.writeEnum },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= j(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return T(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      N(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAuthentication_GetAuthSessionInfo_Response`;
    }
  },
  ia = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.client_id || D(e.M()),
        H.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            client_id: {
              n: 1,
              br: y.readUint64String,
              bw: M.writeUint64String,
            },
            language: { n: 2, br: y.readUint32, bw: M.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= j(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return T(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      N(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAuthentication_GetAuthSessionRiskInfo_Request`;
    }
  },
  aa = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.location_confirmer || D(e.M()),
        H.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            location_confirmer: { n: 1, br: y.readString, bw: M.writeString },
            location_requestor: { n: 2, br: y.readString, bw: M.writeString },
            location_other: { n: 3, br: y.readString, bw: M.writeString },
            platform_type: { n: 4, br: y.readEnum, bw: M.writeEnum },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= j(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return T(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      N(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAuthentication_GetAuthSessionRiskInfo_Response`;
    }
  },
  oa = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.client_id || D(e.M()),
        H.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            client_id: {
              n: 1,
              br: y.readUint64String,
              bw: M.writeUint64String,
            },
            results: { n: 2, c: sa },
            selected_action: { n: 3, br: y.readString, bw: M.writeString },
            did_confirm_login: { n: 4, br: y.readBool, bw: M.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= j(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return T(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      N(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAuthentication_NotifyRiskQuizResults_Notification`;
    }
  },
  sa = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.platform || D(e.M()),
        H.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            platform: { n: 1, br: y.readBool, bw: M.writeBool },
            location: { n: 2, br: y.readBool, bw: M.writeBool },
            action: { n: 3, br: y.readBool, bw: M.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= j(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return T(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      N(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAuthentication_NotifyRiskQuizResults_Notification_RiskQuizResults`;
    }
  },
  ca = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), H.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAuthentication_GetAuthSessionsForAccount_Request`;
    }
  },
  la = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.client_ids || D(e.M()),
        H.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            client_ids: {
              n: 1,
              r: !0,
              q: !0,
              br: y.readUint64String,
              pbr: y.readPackedUint64String,
              bw: M.writeRepeatedUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= j(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return T(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      N(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAuthentication_GetAuthSessionsForAccount_Response`;
    }
  },
  ua = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.version || D(e.M()),
        H.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            version: { n: 1, br: y.readInt32, bw: M.writeInt32 },
            client_id: {
              n: 2,
              br: y.readUint64String,
              bw: M.writeUint64String,
            },
            steamid: {
              n: 3,
              br: y.readFixed64String,
              bw: M.writeFixed64String,
            },
            signature: { n: 4, br: y.readBytes, bw: M.writeBytes },
            confirm: { n: 5, d: !1, br: y.readBool, bw: M.writeBool },
            persistence: { n: 6, d: 1, br: y.readEnum, bw: M.writeEnum },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= j(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return T(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      N(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAuthentication_UpdateAuthSessionWithMobileConfirmation_Request`;
    }
  },
  da = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), H.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAuthentication_UpdateAuthSessionWithMobileConfirmation_Response`;
    }
  },
  fa = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.client_id || D(e.M()),
        H.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            client_id: {
              n: 1,
              br: y.readUint64String,
              bw: M.writeUint64String,
            },
            steamid: {
              n: 2,
              br: y.readFixed64String,
              bw: M.writeFixed64String,
            },
            code: { n: 3, br: y.readString, bw: M.writeString },
            code_type: { n: 4, br: y.readEnum, bw: M.writeEnum },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= j(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return T(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      N(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAuthentication_UpdateAuthSessionWithSteamGuardCode_Request`;
    }
  },
  pa = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.agreement_session_url || D(e.M()),
        H.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            agreement_session_url: {
              n: 7,
              br: y.readString,
              bw: M.writeString,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= j(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return T(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      N(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAuthentication_UpdateAuthSessionWithSteamGuardCode_Response`;
    }
  },
  ma = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.refresh_token || D(e.M()),
        H.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            refresh_token: { n: 1, br: y.readString, bw: M.writeString },
            steamid: {
              n: 2,
              br: y.readFixed64String,
              bw: M.writeFixed64String,
            },
            renewal_type: { n: 3, br: y.readEnum, bw: M.writeEnum },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= j(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return T(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      N(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAuthentication_AccessToken_GenerateForApp_Request`;
    }
  },
  ha = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.access_token || D(e.M()),
        H.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            access_token: { n: 1, br: y.readString, bw: M.writeString },
            refresh_token: { n: 2, br: y.readString, bw: M.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= j(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return T(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      N(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAuthentication_AccessToken_GenerateForApp_Response`;
    }
  },
  ga = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.include_revoked || D(e.M()),
        H.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            include_revoked: { n: 1, d: !1, br: y.readBool, bw: M.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= j(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return T(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      N(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAuthentication_RefreshToken_Enumerate_Request`;
    }
  },
  _a = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.refresh_tokens || D(e.M()),
        H.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            refresh_tokens: { n: 1, c: ya, r: !0, q: !0 },
            requesting_token: {
              n: 2,
              br: y.readFixed64String,
              bw: M.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= j(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return T(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      N(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAuthentication_RefreshToken_Enumerate_Response`;
    }
  },
  va = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.time || D(e.M()),
        H.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            time: { n: 1, br: y.readUint32, bw: M.writeUint32 },
            ip: { n: 2, c: u },
            locale: { n: 3, br: y.readString, bw: M.writeString },
            country: { n: 4, br: y.readString, bw: M.writeString },
            state: { n: 5, br: y.readString, bw: M.writeString },
            city: { n: 6, br: y.readString, bw: M.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= j(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return T(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      N(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAuthentication_RefreshToken_Enumerate_Response_TokenUsageEvent`;
    }
  },
  ya = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.token_id || D(e.M()),
        H.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            token_id: {
              n: 1,
              br: y.readFixed64String,
              bw: M.writeFixed64String,
            },
            token_description: { n: 2, br: y.readString, bw: M.writeString },
            time_updated: { n: 3, br: y.readUint32, bw: M.writeUint32 },
            platform_type: { n: 4, br: y.readEnum, bw: M.writeEnum },
            logged_in: { n: 5, br: y.readBool, bw: M.writeBool },
            os_platform: { n: 6, br: y.readUint32, bw: M.writeUint32 },
            auth_type: { n: 7, br: y.readUint32, bw: M.writeUint32 },
            gaming_device_type: { n: 8, br: y.readUint32, bw: M.writeUint32 },
            first_seen: { n: 9, c: va },
            last_seen: { n: 10, c: va },
            os_type: { n: 11, br: y.readInt32, bw: M.writeInt32 },
            authentication_type: { n: 12, br: y.readEnum, bw: M.writeEnum },
            effective_token_state: { n: 13, br: y.readEnum, bw: M.writeEnum },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= j(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return T(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      N(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAuthentication_RefreshToken_Enumerate_Response_RefreshTokenDescription`;
    }
  },
  ba = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.token || D(e.M()),
        H.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            token: { n: 1, br: y.readString, bw: M.writeString },
            revoke_action: { n: 2, d: 1, br: y.readEnum, bw: M.writeEnum },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= j(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return T(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      N(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAuthentication_Token_Revoke_Request`;
    }
  },
  xa = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), H.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAuthentication_Token_Revoke_Response`;
    }
  },
  Sa = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.token_id || D(e.M()),
        H.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            token_id: {
              n: 1,
              br: y.readFixed64String,
              bw: M.writeFixed64String,
            },
            steamid: {
              n: 2,
              br: y.readFixed64String,
              bw: M.writeFixed64String,
            },
            revoke_action: { n: 3, d: 1, br: y.readEnum, bw: M.writeEnum },
            signature: { n: 4, br: y.readBytes, bw: M.writeBytes },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= j(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return T(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      N(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAuthentication_RefreshToken_Revoke_Request`;
    }
  },
  Ca = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), H.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAuthentication_RefreshToken_Revoke_Response`;
    }
  },
  wa = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.token_id || D(e.M()),
        H.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            token_id: {
              n: 1,
              br: y.readFixed64String,
              bw: M.writeFixed64String,
            },
            token_description: { n: 2, br: y.readString, bw: M.writeString },
            time_updated: { n: 3, br: y.readUint32, bw: M.writeUint32 },
            platform_type: { n: 4, br: y.readEnum, bw: M.writeEnum },
            token_state: { n: 5, br: y.readEnum, bw: M.writeEnum },
            owner_steamid: {
              n: 6,
              br: y.readFixed64String,
              bw: M.writeFixed64String,
            },
            os_platform: { n: 7, br: y.readUint32, bw: M.writeUint32 },
            os_type: { n: 8, br: y.readInt32, bw: M.writeInt32 },
            auth_type: { n: 9, br: y.readUint32, bw: M.writeUint32 },
            gaming_device_type: { n: 10, br: y.readUint32, bw: M.writeUint32 },
            first_seen: { n: 11, c: Ta },
            last_seen: { n: 12, c: Ta },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= j(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return T(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      N(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSupportRefreshTokenDescription`;
    }
  },
  Ta = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.time || D(e.M()),
        H.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            time: { n: 1, br: y.readUint32, bw: M.writeUint32 },
            ip: { n: 2, c: u },
            country: { n: 3, br: y.readString, bw: M.writeString },
            state: { n: 4, br: y.readString, bw: M.writeString },
            city: { n: 5, br: y.readString, bw: M.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= j(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return T(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      N(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSupportRefreshTokenDescription_TokenUsageEvent`;
    }
  },
  q = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.action || D(e.M()),
        H.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            action: { n: 1, br: y.readInt32, bw: M.writeInt32 },
            time: { n: 2, br: y.readUint32, bw: M.writeUint32 },
            ip: { n: 3, c: u },
            actor: { n: 4, br: y.readFixed64String, bw: M.writeFixed64String },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= j(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return T(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      N(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSupportRefreshTokenAudit`;
    }
  },
  Ea = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || D(e.M()),
        H.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: y.readFixed64String,
              bw: M.writeFixed64String,
            },
            include_revoked_tokens: { n: 2, br: y.readBool, bw: M.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= j(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return T(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      N(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAuthenticationSupport_QueryRefreshTokensByAccount_Request`;
    }
  },
  Da = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.refresh_tokens || D(e.M()),
        H.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            refresh_tokens: { n: 1, c: wa, r: !0, q: !0 },
            last_token_reset: { n: 2, br: y.readInt32, bw: M.writeInt32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= j(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return T(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      N(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAuthenticationSupport_QueryRefreshTokensByAccount_Response`;
    }
  },
  Oa = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.token_id || D(e.M()),
        H.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            token_id: {
              n: 1,
              br: y.readFixed64String,
              bw: M.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= j(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return T(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      N(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAuthenticationSupport_QueryRefreshTokenByID_Request`;
    }
  },
  J = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.refresh_tokens || D(e.M()),
        H.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { refresh_tokens: { n: 1, c: wa, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= j(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return T(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      N(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAuthenticationSupport_QueryRefreshTokenByID_Response`;
    }
  },
  ka = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.token_id || D(e.M()),
        H.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            token_id: {
              n: 1,
              br: y.readFixed64String,
              bw: M.writeFixed64String,
            },
            steamid: {
              n: 2,
              br: y.readFixed64String,
              bw: M.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= j(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return T(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      N(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAuthenticationSupport_RevokeToken_Request`;
    }
  },
  Aa = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), H.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAuthenticationSupport_RevokeToken_Response`;
    }
  },
  ja = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.token_id || D(e.M()),
        H.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            token_id: {
              n: 1,
              br: y.readFixed64String,
              bw: M.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= j(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return T(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      N(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAuthenticationSupport_GetTokenHistory_Request`;
    }
  },
  Ma = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.history || D(e.M()),
        H.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { history: { n: 1, c: q, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= j(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return T(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      N(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAuthenticationSupport_GetTokenHistory_Response`;
    }
  },
  Na = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || D(e.M()),
        H.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: y.readFixed64String,
              bw: M.writeFixed64String,
            },
            token_id: {
              n: 2,
              br: y.readFixed64String,
              bw: M.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= j(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return T(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      N(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAuthenticationSupport_MarkTokenCompromised_Request`;
    }
  },
  Pa = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), H.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAuthenticationSupport_MarkTokenCompromised_Response`;
    }
  },
  Fa = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || D(e.M()),
        H.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: y.readUint32, bw: M.writeUint32 },
            minutes_remaining: { n: 2, br: y.readUint32, bw: M.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= j(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return T(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      N(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCloudGaming_TimeRemaining`;
    }
  },
  Ia = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.platform || D(e.M()),
        H.Message.initialize(this, t, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            platform: { n: 1, br: y.readString, bw: M.writeString },
            appid_list: {
              n: 2,
              r: !0,
              q: !0,
              br: y.readUint32,
              pbr: y.readPackedUint32,
              bw: M.writeRepeatedUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= j(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return T(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      N(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCloudGaming_GetTimeRemaining_Request`;
    }
  },
  La = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.entries || D(e.M()),
        H.Message.initialize(this, t, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { entries: { n: 2, c: Fa, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= j(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return T(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      N(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCloudGaming_GetTimeRemaining_Response`;
    }
  },
  Ra;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(
      `Authentication.GetPasswordRSAPublicKey#1`,
      x(Ki, t, n),
      qi,
      {
        bConstMethod: !0,
        ePrivilege: 0,
        eWebAPIKeyRequirement: 1,
        rgBrowserAPISites: [`all`],
      },
    );
  }
  e.GetPasswordRSAPublicKey = t;
  function n(e, t, n) {
    return e.SendMsg(
      `Authentication.BeginAuthSessionViaQR#1`,
      x(Xi, t, n),
      Zi,
      { ePrivilege: 0, eWebAPIKeyRequirement: 1, rgBrowserAPISites: [`all`] },
    );
  }
  e.BeginAuthSessionViaQR = n;
  function r(e, t, n) {
    return e.SendMsg(
      `Authentication.BeginAuthSessionViaCredentials#1`,
      x(Qi, t, n),
      $i,
      { ePrivilege: 0, eWebAPIKeyRequirement: 1, rgBrowserAPISites: [`all`] },
    );
  }
  e.BeginAuthSessionViaCredentials = r;
  function i(e, t, n) {
    return e.SendMsg(
      `Authentication.PollAuthSessionStatus#1`,
      x(ea, t, n),
      ta,
      { ePrivilege: 0, eWebAPIKeyRequirement: 1, rgBrowserAPISites: [`all`] },
    );
  }
  e.PollAuthSessionStatus = i;
  function a(e, t, n) {
    return e.SendMsg(`Authentication.GetAuthSessionInfo#1`, x(na, t, n), ra, {
      ePrivilege: 1,
    });
  }
  e.GetAuthSessionInfo = a;
  function o(e, t, n) {
    return e.SendMsg(
      `Authentication.GetAuthSessionRiskInfo#1`,
      x(ia, t, n),
      aa,
      { ePrivilege: 1 },
    );
  }
  e.GetAuthSessionRiskInfo = o;
  function s(e, t) {
    return e.SendNotification(
      `Authentication.NotifyRiskQuizResults#1`,
      x(oa, t),
      { ePrivilege: 1 },
    );
  }
  e.NotifyRiskQuizResults = s;
  function c(e, t, n) {
    return e.SendMsg(
      `Authentication.UpdateAuthSessionWithMobileConfirmation#1`,
      x(ua, t, n),
      da,
      { ePrivilege: 1 },
    );
  }
  e.UpdateAuthSessionWithMobileConfirmation = c;
  function l(e, t, n) {
    return e.SendMsg(
      `Authentication.UpdateAuthSessionWithSteamGuardCode#1`,
      x(fa, t, n),
      pa,
      { ePrivilege: 0, eWebAPIKeyRequirement: 1, rgBrowserAPISites: [`all`] },
    );
  }
  e.UpdateAuthSessionWithSteamGuardCode = l;
  function u(e, t, n) {
    return e.SendMsg(
      `Authentication.GenerateAccessTokenForApp#1`,
      x(ma, t, n),
      ha,
      { ePrivilege: 1, eWebAPIKeyRequirement: 1 },
    );
  }
  e.GenerateAccessTokenForApp = u;
  function d(e, t, n) {
    return e.SendMsg(`Authentication.EnumerateTokens#1`, x(ga, t, n), _a, {
      ePrivilege: 1,
    });
  }
  e.EnumerateTokens = d;
  function f(e, t, n) {
    return e.SendMsg(
      `Authentication.GetAuthSessionsForAccount#1`,
      x(ca, t, n),
      la,
      { bConstMethod: !0, ePrivilege: 1 },
    );
  }
  e.GetAuthSessionsForAccount = f;
  function p(e, t, n) {
    return e.SendMsg(`Authentication.RevokeToken#1`, x(ba, t, n), xa, {
      ePrivilege: 0,
      eWebAPIKeyRequirement: 1,
    });
  }
  e.RevokeToken = p;
  function m(e, t, n) {
    return e.SendMsg(`Authentication.RevokeRefreshToken#1`, x(Sa, t, n), Ca, {
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
    });
  }
  e.RevokeRefreshToken = m;
})((Ra ||= {}));
var za;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(
      `AuthenticationSupport.QueryRefreshTokensByAccount#1`,
      x(Ea, t, n),
      Da,
      { bConstMethod: !0, ePrivilege: 5 },
    );
  }
  e.QueryRefreshTokensByAccount = t;
  function n(e, t, n) {
    return e.SendMsg(
      `AuthenticationSupport.QueryRefreshTokenByID#1`,
      x(Oa, t, n),
      J,
      { bConstMethod: !0, ePrivilege: 5 },
    );
  }
  e.QueryRefreshTokenByID = n;
  function r(e, t, n) {
    return e.SendMsg(`AuthenticationSupport.RevokeToken#1`, x(ka, t, n), Aa, {
      ePrivilege: 5,
    });
  }
  e.RevokeToken = r;
  function i(e, t, n) {
    return e.SendMsg(
      `AuthenticationSupport.GetTokenHistory#1`,
      x(ja, t, n),
      Ma,
      { bConstMethod: !0, ePrivilege: 5 },
    );
  }
  e.GetTokenHistory = i;
  function a(e, t, n) {
    return e.SendMsg(
      `AuthenticationSupport.MarkTokenCompromised#1`,
      x(Na, t, n),
      Pa,
      { ePrivilege: 5 },
    );
  }
  e.MarkTokenCompromised = a;
})((za ||= {}));
var Ba;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(`CloudGaming.GetTimeRemaining#1`, x(Ia, t, n), La, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  e.GetTimeRemaining = t;
})((Ba ||= {}));
var Va,
  Ha = !0;
function Y(e, t, n) {
  e != null &&
    (typeof e == `number`
      ? this.fromNumber(e, t, n)
      : t == null && typeof e != `string`
        ? this.fromString(e, 256)
        : this.fromString(e, t));
}
function X() {
  return new Y(null);
}
function Ua(e, t, n, r, i, a) {
  for (; --a >= 0;) {
    var o = t * this[e++] + n[r] + i;
    ((i = Math.floor(o / 67108864)), (n[r++] = o & 67108863));
  }
  return i;
}
function Wa(e, t, n, r, i, a) {
  for (var o = t & 32767, s = t >> 15; --a >= 0;) {
    var c = this[e] & 32767,
      l = this[e++] >> 15,
      u = s * c + l * o;
    ((c = o * c + ((u & 32767) << 15) + n[r] + (i & 1073741823)),
      (i = (c >>> 30) + (u >>> 15) + s * l + (i >>> 30)),
      (n[r++] = c & 1073741823));
  }
  return i;
}
function Ga(e, t, n, r, i, a) {
  for (var o = t & 16383, s = t >> 14; --a >= 0;) {
    var c = this[e] & 16383,
      l = this[e++] >> 14,
      u = s * c + l * o;
    ((c = o * c + ((u & 16383) << 14) + n[r] + i),
      (i = (c >> 28) + (u >> 14) + s * l),
      (n[r++] = c & 268435455));
  }
  return i;
}
(Ha && navigator.appName == `Microsoft Internet Explorer`
  ? ((Y.prototype.am = Wa), (Va = 30))
  : Ha && navigator.appName != `Netscape`
    ? ((Y.prototype.am = Ua), (Va = 26))
    : ((Y.prototype.am = Ga), (Va = 28)),
  (Y.prototype.DB = Va),
  (Y.prototype.DM = (1 << Va) - 1),
  (Y.prototype.DV = 1 << Va));
var Ka = 52;
((Y.prototype.FV = 2 ** Ka),
  (Y.prototype.F1 = Ka - Va),
  (Y.prototype.F2 = 2 * Va - Ka));
for (
  var qa = `0123456789abcdefghijklmnopqrstuvwxyz`, Ja = [], Ya = 48, Xa = 0;
  Xa <= 9;
  ++Xa
)
  Ja[Ya++] = Xa;
for (Ya = 97, Xa = 10; Xa < 36; ++Xa) Ja[Ya++] = Xa;
for (Ya = 65, Xa = 10; Xa < 36; ++Xa) Ja[Ya++] = Xa;
function Za(e) {
  return qa.charAt(e);
}
function Qa(e, t) {
  return Ja[e.charCodeAt(t)] ?? -1;
}
function $a(e) {
  for (var t = this.t - 1; t >= 0; --t) e[t] = this[t];
  ((e.t = this.t), (e.s = this.s));
}
function eo(e) {
  ((this.t = 1),
    (this.s = e < 0 ? -1 : 0),
    e > 0 ? (this[0] = e) : e < -1 ? (this[0] = e + DV) : (this.t = 0));
}
function to(e) {
  var t = X();
  return (t.fromInt(e), t);
}
function no(e, t) {
  var n;
  if (t == 16) n = 4;
  else if (t == 8) n = 3;
  else if (t == 256) n = 8;
  else if (t == 2) n = 1;
  else if (t == 32) n = 5;
  else if (t == 4) n = 2;
  else {
    this.fromRadix(e, t);
    return;
  }
  ((this.t = 0), (this.s = 0));
  for (var r = e.length, i = !1, a = 0; --r >= 0;) {
    var o = n == 8 ? e[r] & 255 : Qa(e, r);
    o < 0
      ? e.charAt(r) == `-` && (i = !0)
      : ((i = !1),
        a == 0
          ? (this[this.t++] = o)
          : a + n > this.DB
            ? ((this[this.t - 1] |= (o & ((1 << (this.DB - a)) - 1)) << a),
              (this[this.t++] = o >> (this.DB - a)))
            : (this[this.t - 1] |= o << a),
        (a += n),
        a >= this.DB && (a -= this.DB));
  }
  (n == 8 &&
    e[0] & 128 &&
    ((this.s = -1),
    a > 0 && (this[this.t - 1] |= ((1 << (this.DB - a)) - 1) << a)),
    this.clamp(),
    i && Y.ZERO.subTo(this, this));
}
function ro() {
  for (var e = this.s & this.DM; this.t > 0 && this[this.t - 1] == e;) --this.t;
}
function io(e) {
  if (this.s < 0) return `-` + this.negate().toString(e);
  var t;
  if (e == 16) t = 4;
  else if (e == 8) t = 3;
  else if (e == 2) t = 1;
  else if (e == 32) t = 5;
  else if (e == 4) t = 2;
  else return this.toRadix(e);
  var n = (1 << t) - 1,
    r,
    i = !1,
    a = ``,
    o = this.t,
    s = this.DB - ((o * this.DB) % t);
  if (o-- > 0)
    for (
      s < this.DB && (r = this[o] >> s) > 0 && ((i = !0), (a = Za(r)));
      o >= 0;
    )
      (s < t
        ? ((r = (this[o] & ((1 << s) - 1)) << (t - s)),
          (r |= this[--o] >> (s += this.DB - t)))
        : ((r = (this[o] >> (s -= t)) & n), s <= 0 && ((s += this.DB), --o)),
        r > 0 && (i = !0),
        i && (a += Za(r)));
  return i ? a : `0`;
}
function ao() {
  var e = X();
  return (Y.ZERO.subTo(this, e), e);
}
function oo() {
  return this.s < 0 ? this.negate() : this;
}
function so(e) {
  var t = this.s - e.s;
  if (t != 0) return t;
  var n = this.t;
  if (((t = n - e.t), t != 0)) return t;
  for (; --n >= 0;) if ((t = this[n] - e[n]) != 0) return t;
  return 0;
}
function co(e) {
  var t = 1,
    n;
  return (
    (n = e >>> 16) != 0 && ((e = n), (t += 16)),
    (n = e >> 8) != 0 && ((e = n), (t += 8)),
    (n = e >> 4) != 0 && ((e = n), (t += 4)),
    (n = e >> 2) != 0 && ((e = n), (t += 2)),
    (n = e >> 1) != 0 && ((e = n), (t += 1)),
    t
  );
}
function lo() {
  return this.t <= 0
    ? 0
    : this.DB * (this.t - 1) + co(this[this.t - 1] ^ (this.s & this.DM));
}
function uo(e, t) {
  for (var n = this.t - 1; n >= 0; --n) t[n + e] = this[n];
  for (n = e - 1; n >= 0; --n) t[n] = 0;
  ((t.t = this.t + e), (t.s = this.s));
}
function fo(e, t) {
  for (var n = e; n < this.t; ++n) t[n - e] = this[n];
  ((t.t = Math.max(this.t - e, 0)), (t.s = this.s));
}
function po(e, t) {
  for (
    var n = e % this.DB,
      r = this.DB - n,
      i = (1 << r) - 1,
      a = Math.floor(e / this.DB),
      o = (this.s << n) & this.DM,
      s = this.t - 1;
    s >= 0;
    --s
  )
    ((t[s + a + 1] = (this[s] >> r) | o), (o = (this[s] & i) << n));
  for (s = a - 1; s >= 0; --s) t[s] = 0;
  ((t[a] = o), (t.t = this.t + a + 1), (t.s = this.s), t.clamp());
}
function mo(e, t) {
  t.s = this.s;
  var n = Math.floor(e / this.DB);
  if (n >= this.t) t.t = 0;
  else {
    var r = e % this.DB,
      i = this.DB - r,
      a = (1 << r) - 1;
    t[0] = this[n] >> r;
    for (var o = n + 1; o < this.t; ++o)
      ((t[o - n - 1] |= (this[o] & a) << i), (t[o - n] = this[o] >> r));
    (r > 0 && (t[this.t - n - 1] |= (this.s & a) << i),
      (t.t = this.t - n),
      t.clamp());
  }
}
function ho(e, t) {
  for (var n = 0, r = 0, i = Math.min(e.t, this.t); n < i;)
    ((r += this[n] - e[n]), (t[n++] = r & this.DM), (r >>= this.DB));
  if (e.t < this.t) {
    for (r -= e.s; n < this.t;)
      ((r += this[n]), (t[n++] = r & this.DM), (r >>= this.DB));
    r += this.s;
  } else {
    for (r += this.s; n < e.t;)
      ((r -= e[n]), (t[n++] = r & this.DM), (r >>= this.DB));
    r -= e.s;
  }
  ((t.s = r < 0 ? -1 : 0),
    r < -1 ? (t[n++] = this.DV + r) : r > 0 && (t[n++] = r),
    (t.t = n),
    t.clamp());
}
function go(e, t) {
  var n = this.abs(),
    r = e.abs(),
    i = n.t;
  for (t.t = i + r.t; --i >= 0;) t[i] = 0;
  for (i = 0; i < r.t; ++i) t[i + n.t] = n.am(0, r[i], t, i, 0, n.t);
  ((t.s = 0), t.clamp(), this.s != e.s && Y.ZERO.subTo(t, t));
}
function _o(e) {
  for (var t = this.abs(), n = (e.t = 2 * t.t); --n >= 0;) e[n] = 0;
  for (n = 0; n < t.t - 1; ++n) {
    var r = t.am(n, t[n], e, 2 * n, 0, 1);
    (e[n + t.t] += t.am(n + 1, 2 * t[n], e, 2 * n + 1, r, t.t - n - 1)) >=
      t.DV && ((e[n + t.t] -= t.DV), (e[n + t.t + 1] = 1));
  }
  (e.t > 0 && (e[e.t - 1] += t.am(n, t[n], e, 2 * n, 0, 1)),
    (e.s = 0),
    e.clamp());
}
function vo(e, t, n) {
  var r = e.abs();
  if (!(r.t <= 0)) {
    var i = this.abs();
    if (i.t < r.t) (t?.fromInt(0), n != null && this.copyTo(n));
    else {
      n ??= X();
      var a = X(),
        o = this.s,
        s = e.s,
        c = this.DB - co(r[r.t - 1]);
      c > 0 ? (r.lShiftTo(c, a), i.lShiftTo(c, n)) : (r.copyTo(a), i.copyTo(n));
      var l = a.t,
        u = a[l - 1];
      if (u != 0) {
        var d = u * (1 << this.F1) + (l > 1 ? a[l - 2] >> this.F2 : 0),
          f = this.FV / d,
          p = (1 << this.F1) / d,
          m = 1 << this.F2,
          h = n.t,
          g = h - l,
          _ = t ?? X();
        for (
          a.dlShiftTo(g, _),
            n.compareTo(_) >= 0 && ((n[n.t++] = 1), n.subTo(_, n)),
            Y.ONE.dlShiftTo(l, _),
            _.subTo(a, a);
          a.t < l;
        )
          a[a.t++] = 0;
        for (; --g >= 0;) {
          var ee =
            n[--h] == u ? this.DM : Math.floor(n[h] * f + (n[h - 1] + m) * p);
          if ((n[h] += a.am(0, ee, n, g, 0, l)) < ee)
            for (a.dlShiftTo(g, _), n.subTo(_, n); n[h] < --ee;) n.subTo(_, n);
        }
        (t != null && (n.drShiftTo(l, t), o != s && Y.ZERO.subTo(t, t)),
          (n.t = l),
          n.clamp(),
          c > 0 && n.rShiftTo(c, n),
          o < 0 && Y.ZERO.subTo(n, n));
      }
    }
  }
}
function yo(e) {
  var t = X();
  return (
    this.abs().divRemTo(e, null, t),
    this.s < 0 && t.compareTo(Y.ZERO) > 0 && e.subTo(t, t),
    t
  );
}
function bo(e) {
  this.m = e;
}
function xo(e) {
  return e.s < 0 || e.compareTo(this.m) >= 0 ? e.mod(this.m) : e;
}
function So(e) {
  return e;
}
function Co(e) {
  e.divRemTo(this.m, null, e);
}
function Z(e, t, n) {
  (e.multiplyTo(t, n), this.reduce(n));
}
function wo(e, t) {
  (e.squareTo(t), this.reduce(t));
}
((bo.prototype.convert = xo),
  (bo.prototype.revert = So),
  (bo.prototype.reduce = Co),
  (bo.prototype.mulTo = Z),
  (bo.prototype.sqrTo = wo));
function To() {
  if (this.t < 1) return 0;
  var e = this[0];
  if (!(e & 1)) return 0;
  var t = e & 3;
  return (
    (t = (t * (2 - (e & 15) * t)) & 15),
    (t = (t * (2 - (e & 255) * t)) & 255),
    (t = (t * (2 - (((e & 65535) * t) & 65535))) & 65535),
    (t = (t * (2 - ((e * t) % this.DV))) % this.DV),
    t > 0 ? this.DV - t : -t
  );
}
function Eo(e) {
  ((this.m = e),
    (this.mp = e.invDigit()),
    (this.mpl = this.mp & 32767),
    (this.mph = this.mp >> 15),
    (this.um = (1 << (e.DB - 15)) - 1),
    (this.mt2 = 2 * e.t));
}
function Do(e) {
  var t = X();
  return (
    e.abs().dlShiftTo(this.m.t, t),
    t.divRemTo(this.m, null, t),
    e.s < 0 && t.compareTo(Y.ZERO) > 0 && this.m.subTo(t, t),
    t
  );
}
function Oo(e) {
  var t = X();
  return (e.copyTo(t), this.reduce(t), t);
}
function ko(e) {
  for (; e.t <= this.mt2;) e[e.t++] = 0;
  for (var t = 0; t < this.m.t; ++t) {
    var n = e[t] & 32767,
      r =
        (n * this.mpl +
          (((n * this.mph + (e[t] >> 15) * this.mpl) & this.um) << 15)) &
        e.DM;
    for (
      n = t + this.m.t, e[n] += this.m.am(0, r, e, t, 0, this.m.t);
      e[n] >= e.DV;
    )
      ((e[n] -= e.DV), e[++n]++);
  }
  (e.clamp(),
    e.drShiftTo(this.m.t, e),
    e.compareTo(this.m) >= 0 && e.subTo(this.m, e));
}
function Ao(e, t) {
  (e.squareTo(t), this.reduce(t));
}
function jo(e, t, n) {
  (e.multiplyTo(t, n), this.reduce(n));
}
((Eo.prototype.convert = Do),
  (Eo.prototype.revert = Oo),
  (Eo.prototype.reduce = ko),
  (Eo.prototype.mulTo = jo),
  (Eo.prototype.sqrTo = Ao));
function Mo() {
  return (this.t > 0 ? this[0] & 1 : this.s) == 0;
}
function No(e, t) {
  if (e > 4294967295 || e < 1) return Y.ONE;
  var n = X(),
    r = X(),
    i = t.convert(this),
    a = co(e) - 1;
  for (i.copyTo(n); --a >= 0;)
    if ((t.sqrTo(n, r), (e & (1 << a)) > 0)) t.mulTo(r, i, n);
    else {
      var o = n;
      ((n = r), (r = o));
    }
  return t.revert(n);
}
function Po(e, t) {
  var n = e < 256 || t.isEven() ? new bo(t) : new Eo(t);
  return this.exp(e, n);
}
((Y.prototype.copyTo = $a),
  (Y.prototype.fromInt = eo),
  (Y.prototype.fromString = no),
  (Y.prototype.clamp = ro),
  (Y.prototype.dlShiftTo = uo),
  (Y.prototype.drShiftTo = fo),
  (Y.prototype.lShiftTo = po),
  (Y.prototype.rShiftTo = mo),
  (Y.prototype.subTo = ho),
  (Y.prototype.multiplyTo = go),
  (Y.prototype.squareTo = _o),
  (Y.prototype.divRemTo = vo),
  (Y.prototype.invDigit = To),
  (Y.prototype.isEven = Mo),
  (Y.prototype.exp = No),
  (Y.prototype.toString = io),
  (Y.prototype.negate = ao),
  (Y.prototype.abs = oo),
  (Y.prototype.compareTo = so),
  (Y.prototype.bitLength = lo),
  (Y.prototype.mod = yo),
  (Y.prototype.modPowInt = Po),
  (Y.ZERO = to(0)),
  (Y.ONE = to(1)));
function Fo() {
  var e = X();
  return (this.copyTo(e), e);
}
function Io() {
  if (this.s < 0) {
    if (this.t == 1) return this[0] - this.DV;
    if (this.t == 0) return -1;
  } else if (this.t == 1) return this[0];
  else if (this.t == 0) return 0;
  return ((this[1] & ((1 << (32 - this.DB)) - 1)) << this.DB) | this[0];
}
function Lo() {
  return this.t == 0 ? this.s : (this[0] << 24) >> 24;
}
function Ro() {
  return this.t == 0 ? this.s : (this[0] << 16) >> 16;
}
function zo(e) {
  return Math.floor((Math.LN2 * this.DB) / Math.log(e));
}
function Bo() {
  return this.s < 0 ? -1 : this.t <= 0 || (this.t == 1 && this[0] <= 0) ? 0 : 1;
}
function Vo(e) {
  if (((e ??= 10), this.signum() == 0 || e < 2 || e > 36)) return `0`;
  var t = this.chunkSize(e),
    n = e ** +t,
    r = to(n),
    i = X(),
    a = X(),
    o = ``;
  for (this.divRemTo(r, i, a); i.signum() > 0;)
    ((o = (n + a.intValue()).toString(e).substr(1) + o), i.divRemTo(r, i, a));
  return a.intValue().toString(e) + o;
}
function Ho(e, t) {
  (this.fromInt(0), (t ??= 10));
  for (
    var n = this.chunkSize(t), r = t ** +n, i = !1, a = 0, o = 0, s = 0;
    s < e.length;
    ++s
  ) {
    var c = Qa(e, s);
    c < 0
      ? e.charAt(s) == `-` && this.signum() == 0 && (i = !0)
      : ((o = t * o + c),
        ++a >= n &&
          (this.dMultiply(r), this.dAddOffset(o, 0), (a = 0), (o = 0)));
  }
  (a > 0 && (this.dMultiply(t ** +a), this.dAddOffset(o, 0)),
    i && Y.ZERO.subTo(this, this));
}
function Uo(e, t, n) {
  if (typeof t == `number`) {
    if (e < 2) this.fromInt(1);
    else
      for (
        this.fromNumber(e, n),
          this.testBit(e - 1) ||
            this.bitwiseTo(Y.ONE.shiftLeft(e - 1), Zo, this),
          this.isEven() && this.dAddOffset(1, 0);
        !this.isProbablePrime(t);
      )
        (this.dAddOffset(2, 0),
          this.bitLength() > e && this.subTo(Y.ONE.shiftLeft(e - 1), this));
  } else {
    var r = [],
      i = e & 7;
    ((r.length = (e >> 3) + 1),
      t.nextBytes(r),
      i > 0 ? (r[0] &= (1 << i) - 1) : (r[0] = 0),
      this.fromString(r, 256));
  }
}
function Wo() {
  var e = this.t,
    t = [];
  t[0] = this.s;
  var n = this.DB - ((e * this.DB) % 8),
    r,
    i = 0;
  if (e-- > 0)
    for (
      n < this.DB &&
      (r = this[e] >> n) != (this.s & this.DM) >> n &&
      (t[i++] = r | (this.s << (this.DB - n)));
      e >= 0;
    )
      (n < 8
        ? ((r = (this[e] & ((1 << n) - 1)) << (8 - n)),
          (r |= this[--e] >> (n += this.DB - 8)))
        : ((r = (this[e] >> (n -= 8)) & 255), n <= 0 && ((n += this.DB), --e)),
        r & 128 && (r |= -256),
        i == 0 && (this.s & 128) != (r & 128) && ++i,
        (i > 0 || r != this.s) && (t[i++] = r));
  return t;
}
function Go(e) {
  return this.compareTo(e) == 0;
}
function Ko(e) {
  return this.compareTo(e) < 0 ? this : e;
}
function qo(e) {
  return this.compareTo(e) > 0 ? this : e;
}
function Jo(e, t, n) {
  var r,
    i,
    a = Math.min(e.t, this.t);
  for (r = 0; r < a; ++r) n[r] = t(this[r], e[r]);
  if (e.t < this.t) {
    for (i = e.s & this.DM, r = a; r < this.t; ++r) n[r] = t(this[r], i);
    n.t = this.t;
  } else {
    for (i = this.s & this.DM, r = a; r < e.t; ++r) n[r] = t(i, e[r]);
    n.t = e.t;
  }
  ((n.s = t(this.s, e.s)), n.clamp());
}
function Yo(e, t) {
  return e & t;
}
function Xo(e) {
  var t = X();
  return (this.bitwiseTo(e, Yo, t), t);
}
function Zo(e, t) {
  return e | t;
}
function Qo(e) {
  var t = X();
  return (this.bitwiseTo(e, Zo, t), t);
}
function $o(e, t) {
  return e ^ t;
}
function es(e) {
  var t = X();
  return (this.bitwiseTo(e, $o, t), t);
}
function ts(e, t) {
  return e & ~t;
}
function ns(e) {
  var t = X();
  return (this.bitwiseTo(e, ts, t), t);
}
function rs() {
  for (var e = X(), t = 0; t < this.t; ++t) e[t] = this.DM & ~this[t];
  return ((e.t = this.t), (e.s = ~this.s), e);
}
function is(e) {
  var t = X();
  return (e < 0 ? this.rShiftTo(-e, t) : this.lShiftTo(e, t), t);
}
function as(e) {
  var t = X();
  return (e < 0 ? this.lShiftTo(-e, t) : this.rShiftTo(e, t), t);
}
function os(e) {
  if (e == 0) return -1;
  var t = 0;
  return (
    e & 65535 || ((e >>= 16), (t += 16)),
    e & 255 || ((e >>= 8), (t += 8)),
    e & 15 || ((e >>= 4), (t += 4)),
    e & 3 || ((e >>= 2), (t += 2)),
    e & 1 || ++t,
    t
  );
}
function ss() {
  for (var e = 0; e < this.t; ++e)
    if (this[e] != 0) return e * this.DB + os(this[e]);
  return this.s < 0 ? this.t * this.DB : -1;
}
function cs(e) {
  for (var t = 0; e != 0;) ((e &= e - 1), ++t);
  return t;
}
function ls() {
  for (var e = 0, t = this.s & this.DM, n = 0; n < this.t; ++n)
    e += cs(this[n] ^ t);
  return e;
}
function us(e) {
  var t = Math.floor(e / this.DB);
  return t >= this.t ? this.s != 0 : !!(this[t] & (1 << (e % this.DB)));
}
function ds(e, t) {
  var n = Y.ONE.shiftLeft(e);
  return (this.bitwiseTo(n, t, n), n);
}
function fs(e) {
  return this.changeBit(e, Zo);
}
function ps(e) {
  return this.changeBit(e, ts);
}
function ms(e) {
  return this.changeBit(e, $o);
}
function hs(e, t) {
  for (var n = 0, r = 0, i = Math.min(e.t, this.t); n < i;)
    ((r += this[n] + e[n]), (t[n++] = r & this.DM), (r >>= this.DB));
  if (e.t < this.t) {
    for (r += e.s; n < this.t;)
      ((r += this[n]), (t[n++] = r & this.DM), (r >>= this.DB));
    r += this.s;
  } else {
    for (r += this.s; n < e.t;)
      ((r += e[n]), (t[n++] = r & this.DM), (r >>= this.DB));
    r += e.s;
  }
  ((t.s = r < 0 ? -1 : 0),
    r > 0 ? (t[n++] = r) : r < -1 && (t[n++] = this.DV + r),
    (t.t = n),
    t.clamp());
}
function gs(e) {
  var t = X();
  return (this.addTo(e, t), t);
}
function _s(e) {
  var t = X();
  return (this.subTo(e, t), t);
}
function vs(e) {
  var t = X();
  return (this.multiplyTo(e, t), t);
}
function ys(e) {
  var t = X();
  return (this.divRemTo(e, t, null), t);
}
function bs(e) {
  var t = X();
  return (this.divRemTo(e, null, t), t);
}
function xs(e) {
  var t = X(),
    n = X();
  return (this.divRemTo(e, t, n), [t, n]);
}
function Ss(e) {
  ((this[this.t] = this.am(0, e - 1, this, 0, 0, this.t)),
    ++this.t,
    this.clamp());
}
function Cs(e, t) {
  for (; this.t <= t;) this[this.t++] = 0;
  for (this[t] += e; this[t] >= this.DV;)
    ((this[t] -= this.DV), ++t >= this.t && (this[this.t++] = 0), ++this[t]);
}
function ws() {}
function Ts(e) {
  return e;
}
function Es(e, t, n) {
  e.multiplyTo(t, n);
}
function Ds(e, t) {
  e.squareTo(t);
}
((ws.prototype.convert = Ts),
  (ws.prototype.revert = Ts),
  (ws.prototype.mulTo = Es),
  (ws.prototype.sqrTo = Ds));
function Os(e) {
  return this.exp(e, new ws());
}
function ks(e, t, n) {
  var r = Math.min(this.t + e.t, t);
  for (n.s = 0, n.t = r; r > 0;) n[--r] = 0;
  for (var i = n.t - this.t; r < i; ++r)
    n[r + this.t] = this.am(0, e[r], n, r, 0, this.t);
  for (i = Math.min(e.t, t); r < i; ++r) this.am(0, e[r], n, r, 0, t - r);
  n.clamp();
}
function As(e, t, n) {
  --t;
  var r = (n.t = this.t + e.t - t);
  for (n.s = 0; --r >= 0;) n[r] = 0;
  for (r = Math.max(t - this.t, 0); r < e.t; ++r)
    n[this.t + r - t] = this.am(t - r, e[r], n, 0, 0, this.t + r - t);
  (n.clamp(), n.drShiftTo(1, n));
}
function js(e) {
  ((this.r2 = X()),
    (this.q3 = X()),
    Y.ONE.dlShiftTo(2 * e.t, this.r2),
    (this.mu = this.r2.divide(e)),
    (this.m = e));
}
function Ms(e) {
  if (e.s < 0 || e.t > 2 * this.m.t) return e.mod(this.m);
  if (e.compareTo(this.m) < 0) return e;
  var t = X();
  return (e.copyTo(t), this.reduce(t), t);
}
function Ns(e) {
  return e;
}
function Ps(e) {
  for (
    e.drShiftTo(this.m.t - 1, this.r2),
      e.t > this.m.t + 1 && ((e.t = this.m.t + 1), e.clamp()),
      this.mu.multiplyUpperTo(this.r2, this.m.t + 1, this.q3),
      this.m.multiplyLowerTo(this.q3, this.m.t + 1, this.r2);
    e.compareTo(this.r2) < 0;
  )
    e.dAddOffset(1, this.m.t + 1);
  for (e.subTo(this.r2, e); e.compareTo(this.m) >= 0;) e.subTo(this.m, e);
}
function Fs(e, t) {
  (e.squareTo(t), this.reduce(t));
}
function Is(e, t, n) {
  (e.multiplyTo(t, n), this.reduce(n));
}
((js.prototype.convert = Ms),
  (js.prototype.revert = Ns),
  (js.prototype.reduce = Ps),
  (js.prototype.mulTo = Is),
  (js.prototype.sqrTo = Fs));
function Ls(e, t) {
  var n = e.bitLength(),
    r,
    i = to(1),
    a;
  if (n <= 0) return i;
  ((r = n < 18 ? 1 : n < 48 ? 3 : n < 144 ? 4 : n < 768 ? 5 : 6),
    (a = n < 8 ? new bo(t) : t.isEven() ? new js(t) : new Eo(t)));
  var o = [],
    s = 3,
    c = r - 1,
    l = (1 << r) - 1;
  if (((o[1] = a.convert(this)), r > 1)) {
    var u = X();
    for (a.sqrTo(o[1], u); s <= l;)
      ((o[s] = X()), a.mulTo(u, o[s - 2], o[s]), (s += 2));
  }
  var d = e.t - 1,
    f,
    p = !0,
    m = X(),
    h;
  for (n = co(e[d]) - 1; d >= 0;) {
    for (
      n >= c
        ? (f = (e[d] >> (n - c)) & l)
        : ((f = (e[d] & ((1 << (n + 1)) - 1)) << (c - n)),
          d > 0 && (f |= e[d - 1] >> (this.DB + n - c))),
        s = r;
      !(f & 1);
    )
      ((f >>= 1), --s);
    if (((n -= s) < 0 && ((n += this.DB), --d), p)) (o[f].copyTo(i), (p = !1));
    else {
      for (; s > 1;) (a.sqrTo(i, m), a.sqrTo(m, i), (s -= 2));
      (s > 0 ? a.sqrTo(i, m) : ((h = i), (i = m), (m = h)),
        a.mulTo(m, o[f], i));
    }
    for (; d >= 0 && !(e[d] & (1 << n));)
      (a.sqrTo(i, m),
        (h = i),
        (i = m),
        (m = h),
        --n < 0 && ((n = this.DB - 1), --d));
  }
  return a.revert(i);
}
function Rs(e) {
  var t = this.s < 0 ? this.negate() : this.clone(),
    n = e.s < 0 ? e.negate() : e.clone();
  if (t.compareTo(n) < 0) {
    var r = t;
    ((t = n), (n = r));
  }
  var i = t.getLowestSetBit(),
    a = n.getLowestSetBit();
  if (a < 0) return t;
  for (
    i < a && (a = i), a > 0 && (t.rShiftTo(a, t), n.rShiftTo(a, n));
    t.signum() > 0;
  )
    ((i = t.getLowestSetBit()) > 0 && t.rShiftTo(i, t),
      (i = n.getLowestSetBit()) > 0 && n.rShiftTo(i, n),
      t.compareTo(n) >= 0
        ? (t.subTo(n, t), t.rShiftTo(1, t))
        : (n.subTo(t, n), n.rShiftTo(1, n)));
  return (a > 0 && n.lShiftTo(a, n), n);
}
function zs(e) {
  if (e <= 0) return 0;
  var t = this.DV % e,
    n = this.s < 0 ? e - 1 : 0;
  if (this.t > 0) {
    if (t == 0) n = this[0] % e;
    else for (var r = this.t - 1; r >= 0; --r) n = (t * n + this[r]) % e;
  }
  return n;
}
function Bs(e) {
  var t = e.isEven();
  if ((this.isEven() && t) || e.signum() == 0) return Y.ZERO;
  for (
    var n = e.clone(),
      r = this.clone(),
      i = to(1),
      a = to(0),
      o = to(0),
      s = to(1);
    n.signum() != 0;
  ) {
    for (; n.isEven();)
      (n.rShiftTo(1, n),
        t
          ? ((i.isEven() && a.isEven()) || (i.addTo(this, i), a.subTo(e, a)),
            i.rShiftTo(1, i))
          : a.isEven() || a.subTo(e, a),
        a.rShiftTo(1, a));
    for (; r.isEven();)
      (r.rShiftTo(1, r),
        t
          ? ((o.isEven() && s.isEven()) || (o.addTo(this, o), s.subTo(e, s)),
            o.rShiftTo(1, o))
          : s.isEven() || s.subTo(e, s),
        s.rShiftTo(1, s));
    n.compareTo(r) >= 0
      ? (n.subTo(r, n), t && i.subTo(o, i), a.subTo(s, a))
      : (r.subTo(n, r), t && o.subTo(i, o), s.subTo(a, s));
  }
  if (r.compareTo(Y.ONE) != 0) return Y.ZERO;
  if (s.compareTo(e) >= 0) return s.subtract(e);
  if (s.signum() < 0) s.addTo(e, s);
  else return s;
  return s.signum() < 0 ? s.add(e) : s;
}
var Vs = [
    2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71,
    73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151,
    157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233,
    239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317,
    331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419,
    421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503,
    509,
  ],
  Hs = (1 << 26) / Vs[Vs.length - 1];
function Us(e) {
  var t,
    n = this.abs();
  if (n.t == 1 && n[0] <= Vs[Vs.length - 1]) {
    for (t = 0; t < Vs.length; ++t) if (n[0] == Vs[t]) return !0;
    return !1;
  }
  if (n.isEven()) return !1;
  for (t = 1; t < Vs.length;) {
    for (var r = Vs[t], i = t + 1; i < Vs.length && r < Hs;) r *= Vs[i++];
    for (r = n.modInt(r); t < i;) if (r % Vs[t++] == 0) return !1;
  }
  return n.millerRabin(e);
}
function Ws(e) {
  var t = this.subtract(Y.ONE),
    n = t.getLowestSetBit();
  if (n <= 0) return !1;
  var r = t.shiftRight(n);
  ((e = (e + 1) >> 1), e > Vs.length && (e = Vs.length));
  for (var i = X(), a = 0; a < e; ++a) {
    i.fromInt(Vs[a]);
    var o = i.modPow(r, this);
    if (o.compareTo(Y.ONE) != 0 && o.compareTo(t) != 0) {
      for (var s = 1; s++ < n && o.compareTo(t) != 0;)
        if (((o = o.modPowInt(2, this)), o.compareTo(Y.ONE) == 0)) return !1;
      if (o.compareTo(t) != 0) return !1;
    }
  }
  return !0;
}
((Y.prototype.chunkSize = zo),
  (Y.prototype.toRadix = Vo),
  (Y.prototype.fromRadix = Ho),
  (Y.prototype.fromNumber = Uo),
  (Y.prototype.bitwiseTo = Jo),
  (Y.prototype.changeBit = ds),
  (Y.prototype.addTo = hs),
  (Y.prototype.dMultiply = Ss),
  (Y.prototype.dAddOffset = Cs),
  (Y.prototype.multiplyLowerTo = ks),
  (Y.prototype.multiplyUpperTo = As),
  (Y.prototype.modInt = zs),
  (Y.prototype.millerRabin = Ws),
  (Y.prototype.clone = Fo),
  (Y.prototype.intValue = Io),
  (Y.prototype.byteValue = Lo),
  (Y.prototype.shortValue = Ro),
  (Y.prototype.signum = Bo),
  (Y.prototype.toByteArray = Wo),
  (Y.prototype.equals = Go),
  (Y.prototype.min = Ko),
  (Y.prototype.max = qo),
  (Y.prototype.and = Xo),
  (Y.prototype.or = Qo),
  (Y.prototype.xor = es),
  (Y.prototype.andNot = ns),
  (Y.prototype.not = rs),
  (Y.prototype.shiftLeft = is),
  (Y.prototype.shiftRight = as),
  (Y.prototype.getLowestSetBit = ss),
  (Y.prototype.bitCount = ls),
  (Y.prototype.testBit = us),
  (Y.prototype.setBit = fs),
  (Y.prototype.clearBit = ps),
  (Y.prototype.flipBit = ms),
  (Y.prototype.add = gs),
  (Y.prototype.subtract = _s),
  (Y.prototype.multiply = vs),
  (Y.prototype.divide = ys),
  (Y.prototype.remainder = bs),
  (Y.prototype.divideAndRemainder = xs),
  (Y.prototype.modPow = Ls),
  (Y.prototype.modInverse = Bs),
  (Y.prototype.pow = Os),
  (Y.prototype.gcd = Rs),
  (Y.prototype.isProbablePrime = Us));
var Gs = function (e, t) {
    ((this.modulus = new Y(e, 16)), (this.encryptionExponent = new Y(t, 16)));
  },
  Ks = {
    base64: `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=`,
    encode: function (e) {
      if (!e) return !1;
      var t = ``,
        n,
        r,
        i,
        a,
        o,
        s,
        c,
        l = 0;
      do
        ((n = e.charCodeAt(l++)),
          (r = e.charCodeAt(l++)),
          (i = e.charCodeAt(l++)),
          (a = n >> 2),
          (o = ((n & 3) << 4) | (r >> 4)),
          (s = ((r & 15) << 2) | (i >> 6)),
          (c = i & 63),
          isNaN(r) ? (s = c = 64) : isNaN(i) && (c = 64),
          (t +=
            this.base64.charAt(a) +
            this.base64.charAt(o) +
            this.base64.charAt(s) +
            this.base64.charAt(c)));
      while (l < e.length);
      return t;
    },
    decode: function (e) {
      if (!e) return !1;
      e = e.replace(/[^A-Za-z0-9\+\/\=]/g, ``);
      var t = ``,
        n,
        r,
        i,
        a,
        o = 0;
      do
        ((n = this.base64.indexOf(e.charAt(o++))),
          (r = this.base64.indexOf(e.charAt(o++))),
          (i = this.base64.indexOf(e.charAt(o++))),
          (a = this.base64.indexOf(e.charAt(o++))),
          (t += String.fromCharCode((n << 2) | (r >> 4))),
          i != 64 && (t += String.fromCharCode(((r & 15) << 4) | (i >> 2))),
          a != 64 && (t += String.fromCharCode(((i & 3) << 6) | a)));
      while (o < e.length);
      return t;
    },
  },
  qs = {
    hex: `0123456789abcdef`,
    encode: function (e) {
      if (!e) return !1;
      var t = ``,
        n,
        r = 0;
      do
        ((n = e.charCodeAt(r++)),
          (t += this.hex.charAt((n >> 4) & 15) + this.hex.charAt(n & 15)));
      while (r < e.length);
      return t;
    },
    decode: function (e) {
      if (!e) return !1;
      e = e.replace(/[^0-9abcdef]/g, ``);
      var t = ``,
        n = 0;
      do
        t += String.fromCharCode(
          ((this.hex.indexOf(e.charAt(n++)) << 4) & 240) |
            (this.hex.indexOf(e.charAt(n++)) & 15),
        );
      while (n < e.length);
      return t;
    },
  },
  Js = {
    getPublicKey: function (e, t) {
      return new Gs(e, t);
    },
    encrypt: function (e, t) {
      return !t ||
        ((e = this.pkcs1pad2(e, (t.modulus.bitLength() + 7) >> 3)), !e) ||
        ((e = e.modPowInt(t.encryptionExponent, t.modulus)), !e)
        ? !1
        : ((e = e.toString(16)),
          (e.length & 1) == 1 && (e = `0` + e),
          Ks.encode(qs.decode(e)));
    },
    pkcs1pad2: function (e, t) {
      if (t < e.length + 11) return null;
      for (var n = [], r = e.length - 1; r >= 0 && t > 0;)
        n[--t] = e.charCodeAt(r--);
      for (n[--t] = 0; t > 2;) n[--t] = Math.floor(Math.random() * 254) + 1;
      return ((n[--t] = 2), (n[--t] = 0), new Y(n));
    },
  },
  Ys = new at(`Login`),
  Xs = Ys.Info,
  Zs = Ys.Debug,
  Qs = Ys.Warning,
  Q = Ys.Error;
function $s(e, t) {
  let n = Js.getPublicKey(t.publickey_mod, t.publickey_exp),
    r = Js.encrypt(e, n);
  return r === !1 ? null : r;
}
var $ = (function (e) {
  return (
    (e[(e.None = 0)] = `None`),
    (e[(e.Generic = 1)] = `Generic`),
    (e[(e.Expired = 2)] = `Expired`),
    (e[(e.Network = 3)] = `Network`),
    (e[(e.MoveAuthenticator = 4)] = `MoveAuthenticator`),
    (e[(e.RateLimitExceeded = 5)] = `RateLimitExceeded`),
    (e[(e.AnonymousLogin = 6)] = `AnonymousLogin`),
    e
  );
})({});
function ec(e) {
  let {
    shared_secret: t,
    identity_secret: n,
    secret_1: r,
    status: i,
    uri: a,
    server_time: o,
    ...s
  } = e;
  return {
    shared_secret: Rt.fromByteArray(t),
    identity_secret: Rt.fromByteArray(n),
    secret_1: Rt.fromByteArray(r),
    ...s,
  };
}
var tc = (function (e) {
  return (
    (e[(e.k_Success = 0)] = `k_Success`),
    (e[(e.k_PrimaryDomainFail = 1)] = `k_PrimaryDomainFail`),
    (e[(e.k_SecondaryDomainFail = 2)] = `k_SecondaryDomainFail`),
    e
  );
})({});
function nc(e, t) {
  let n = Object.keys(e);
  return (
    n.length === Object.keys(t).length && n.every((n) => Object.is(e[n], t[n]))
  );
}
var rc = class {
  m_setListeners = new Set();
  m_snapshot;
  m_bNotifyPending = !1;
  m_transport;
  m_strClientID;
  m_msPollInterval;
  m_activeTimerID;
  m_rgRequestID;
  m_strTokenToRevoke;
  m_strChallengeURLValue = void 0;
  get m_strChallengeURL() {
    return this.m_strChallengeURLValue;
  }
  set m_strChallengeURL(e) {
    ((this.m_strChallengeURLValue = e), this.NotifyChanged());
  }
  m_onShowAgreement;
  m_bRemoteInteractionValue = !1;
  get m_bRemoteInteraction() {
    return this.m_bRemoteInteractionValue;
  }
  set m_bRemoteInteraction(e) {
    ((this.m_bRemoteInteractionValue = e), this.NotifyChanged());
  }
  m_onCompleteCallback;
  m_eFailureStateValue = 0;
  get m_eFailureState() {
    return this.m_eFailureStateValue;
  }
  set m_eFailureState(e) {
    ((this.m_eFailureStateValue = e), this.NotifyChanged());
  }
  m_strExtendedErrorMessageValue = ``;
  get m_strExtendedErrorMessage() {
    return this.m_strExtendedErrorMessageValue;
  }
  set m_strExtendedErrorMessage(e) {
    ((this.m_strExtendedErrorMessageValue = e), this.NotifyChanged());
  }
  m_onDeviceDetailsCallback;
  constructor(e, t, n, r) {
    ((this.m_transport = e),
      (this.m_onCompleteCallback = t),
      (this.m_onDeviceDetailsCallback = n),
      (this.m_onShowAgreement = r));
  }
  Subscribe(e) {
    return (
      this.m_setListeners.add(e),
      () => {
        this.m_setListeners.delete(e);
      }
    );
  }
  GetSnapshot() {
    let e = this.BuildSnapshot();
    return (
      (this.m_snapshot && nc(this.m_snapshot, e)) || (this.m_snapshot = e),
      this.m_snapshot
    );
  }
  NotifyChanged() {
    this.m_bNotifyPending ||
      ((this.m_bNotifyPending = !0),
      queueMicrotask(() => {
        this.m_bNotifyPending = !1;
        for (let e of this.m_setListeners) e();
      }));
  }
  StartPolling(e = !0) {
    (this.m_activeTimerID != null && this.StopPolling(),
      e
        ? this.PollForUpdate()
        : (this.m_activeTimerID = window.setTimeout(
            this.PollForUpdate,
            this.m_msPollInterval,
          )));
  }
  StopPolling() {
    (window.clearTimeout(this.m_activeTimerID),
      (this.m_activeTimerID = void 0));
  }
  async PollForUpdate() {
    try {
      let e = E.Init(ea);
      (e.SetEMsg(le),
        e.Body().set_client_id(this.m_strClientID),
        e.Body().set_request_id(this.m_rgRequestID),
        this.m_strTokenToRevoke &&
          e.Body().set_token_to_revoke(this.m_strTokenToRevoke));
      let t = await Ra.PollAuthSessionStatus(this.m_transport, e),
        n = t.GetEResult();
      if (n !== 1) {
        if (n === 2) {
          let e = t.Hdr().transport_error();
          if (
            (Q(
              `Failed to poll auth session. Result ${n}. Transport Error: ${e}`,
            ),
            e === 2 || e === 3)
          )
            return (this.m_transport.MakeReady(), this.StartPolling(!1), 1);
        }
        if (n === 9 || n === 27) this.m_eFailureState = 2;
        else if (n === 84) this.m_eFailureState = 5;
        else if (n == 118) {
          let e = t.Body().agreement_session_url();
          if (
            (C(!!e, `Missing agreement session URL for result`, n),
            this.m_onShowAgreement)
          )
            this.m_onShowAgreement(e);
          else {
            let t = location.href;
            window.location.href = `${e}&redir=${encodeURIComponent(t)}`;
          }
          return (this.m_onCompleteCallback({ bSuccess: !1 }), n);
        } else
          (Q(`Failed to poll auth session. Result: ${n}`),
            (this.m_eFailureState = 1));
        return (this.m_onCompleteCallback({ bSuccess: !1 }), n);
      }
      let {
        new_challenge_url: r,
        new_client_id: i,
        refresh_token: a,
        access_token: o,
        account_name: s,
        had_remote_interaction: c,
        new_guard_data: l,
      } = t.Body().toObject();
      return (
        (this.m_bRemoteInteraction = !!c),
        a
          ? (C(
              !!o && !!s,
              `Missing access token or account name with refresh token`,
            ),
            this.m_onCompleteCallback({
              bSuccess: !0,
              strRefreshToken: a,
              strAccessToken: o,
              strAccountName: s,
              strNewGuardData: l,
            }),
            n)
          : (r && (this.m_strChallengeURL = r),
            i && (this.m_strClientID = i),
            this.StartPolling(!1),
            n)
      );
    } catch (e) {
      return (
        Q(`Failed to poll auth session. ${e}`),
        (this.m_eFailureState = 1),
        this.m_onCompleteCallback({ bSuccess: !1 }),
        2
      );
    }
  }
  SetTokenToRevoke(e) {
    this.m_strTokenToRevoke = e;
  }
  GetFailureState() {
    return this.m_eFailureState;
  }
  GetExtendedErrorMessage() {
    return this.m_strExtendedErrorMessage;
  }
  BHadRemoteInteraction() {
    return this.m_bRemoteInteraction;
  }
  async GetDeviceDetails() {
    let e = await this.m_onDeviceDetailsCallback();
    return Ji.fromObject(e);
  }
};
(O([f], rc.prototype, `Subscribe`, null),
  O([f], rc.prototype, `GetSnapshot`, null),
  O([f], rc.prototype, `PollForUpdate`, null),
  O([f], rc.prototype, `SetTokenToRevoke`, null));
function ic(e) {
  let t = new FormData();
  (t.append(`nonce`, e), t.append(`sessionid`, ft(pt) ?? ``));
  let n = new URL(location.href),
    r = new URLSearchParams(n.search);
  (r.has(`need_password`) &&
    (r.delete(`need_password`), (n.search = r.toString())),
    t.append(`redir`, n.toString()));
  let i = `${a.LOGIN_BASE_URL}jwt/finalizelogin`;
  return zt.default.post(i, t, { withCredentials: !0 }).then(
    (e) => {
      let { data: t } = e;
      if (
        !t ||
        !t.transfer_info ||
        !t.steamID ||
        !Array.isArray(t.transfer_info)
      )
        return (Q(`Result of finalizelogin does not match expectations!`), 1);
      let { transfer_info: n, steamID: r, primary_domain: i } = t;
      return Promise.all(
        n.map(({ url: e, params: t }) => oc(e, { ...t, steamID: r })),
      ).then(
        (e) => ac(e, i),
        () => 2,
      );
    },
    () => (Q(`Failed to finalize login. Initial call failed.`), 1),
  );
}
function ac(e, t) {
  let n = 0;
  return (
    e.forEach((e) => {
      e.bSuccess ||
        (t && e.domain.toLowerCase() === t.toLowerCase()
          ? (n = 1)
          : n == 0 && (n = 2));
    }),
    n
  );
}
async function oc(e, t) {
  let n = new URL(e),
    r = !0;
  try {
    let i = new FormData();
    Object.keys(t).forEach((e) => i.append(e, t[e]));
    let a = await zt.default.post(e, i, { withCredentials: !0, timeout: 1e4 });
    a.status === 200
      ? a.data.result !== 1 &&
        (Q(`Transfer login to ${n.host} failed with result: ${a.data.result}`),
        (r = !1))
      : (Q(`Transfer login to ${n.host} failed with status code: ${a.status}`),
        (r = !1));
  } catch (e) {
    (Q(`Transfer login to ${n.host} failed: "${e}"`), (r = !1));
  }
  return { bSuccess: r, domain: n.host };
}
var sc = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.time || D(e.M()),
        H.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            time: { n: 1, br: y.readUint32, bw: M.writeUint32 },
            usage_type: { n: 2, br: y.readEnum, bw: M.writeEnum },
            confirmation_type: { n: 3, br: y.readInt32, bw: M.writeInt32 },
            confirmation_action: { n: 4, br: y.readInt32, bw: M.writeInt32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= j(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return T(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      N(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CTwoFactor_UsageEvent`;
    }
  },
  cc = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.sender_time || D(e.M()),
        H.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            sender_time: {
              n: 1,
              br: y.readUint64String,
              bw: M.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= j(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return T(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      N(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CTwoFactor_Time_Request`;
    }
  },
  lc = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.server_time || D(e.M()),
        H.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            server_time: {
              n: 1,
              br: y.readUint64String,
              bw: M.writeUint64String,
            },
            skew_tolerance_seconds: {
              n: 2,
              br: y.readUint64String,
              bw: M.writeUint64String,
            },
            large_time_jink: {
              n: 3,
              br: y.readUint64String,
              bw: M.writeUint64String,
            },
            probe_frequency_seconds: {
              n: 4,
              br: y.readUint32,
              bw: M.writeUint32,
            },
            adjusted_time_probe_frequency_seconds: {
              n: 5,
              br: y.readUint32,
              bw: M.writeUint32,
            },
            hint_probe_frequency_seconds: {
              n: 6,
              br: y.readUint32,
              bw: M.writeUint32,
            },
            sync_timeout: { n: 7, br: y.readUint32, bw: M.writeUint32 },
            try_again_seconds: { n: 8, br: y.readUint32, bw: M.writeUint32 },
            max_attempts: { n: 9, br: y.readUint32, bw: M.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= j(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return T(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      N(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CTwoFactor_Time_Response`;
    }
  },
  uc = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || D(e.M()),
        H.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: y.readFixed64String,
              bw: M.writeFixed64String,
            },
            include: { n: 2, br: y.readEnum, bw: M.writeEnum },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= j(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return T(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      N(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CTwoFactor_Status_Request`;
    }
  },
  dc = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.state || D(e.M()),
        H.Message.initialize(this, t, 0, -1, [16], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            state: { n: 1, br: y.readUint32, bw: M.writeUint32 },
            inactivation_reason: { n: 2, br: y.readUint32, bw: M.writeUint32 },
            authenticator_type: { n: 3, br: y.readUint32, bw: M.writeUint32 },
            authenticator_allowed: { n: 4, br: y.readBool, bw: M.writeBool },
            steamguard_scheme: { n: 5, br: y.readUint32, bw: M.writeUint32 },
            token_gid: { n: 6, br: y.readString, bw: M.writeString },
            email_validated: { n: 7, br: y.readBool, bw: M.writeBool },
            device_identifier: { n: 8, br: y.readString, bw: M.writeString },
            time_created: { n: 9, br: y.readUint32, bw: M.writeUint32 },
            revocation_attempts_remaining: {
              n: 10,
              br: y.readUint32,
              bw: M.writeUint32,
            },
            classified_agent: { n: 11, br: y.readString, bw: M.writeString },
            allow_external_authenticator: {
              n: 12,
              br: y.readBool,
              bw: M.writeBool,
            },
            time_transferred: { n: 13, br: y.readUint32, bw: M.writeUint32 },
            version: { n: 14, br: y.readUint32, bw: M.writeUint32 },
            last_seen_auth_token_id: {
              n: 15,
              br: y.readFixed64String,
              bw: M.writeFixed64String,
            },
            usages: { n: 16, c: sc, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= j(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return T(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      N(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CTwoFactor_Status_Response`;
    }
  },
  fc = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || D(e.M()),
        H.Message.initialize(this, t, 0, -1, [7], null));
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
              br: y.readFixed64String,
              bw: M.writeFixed64String,
            },
            authenticator_time: {
              n: 2,
              br: y.readUint64String,
              bw: M.writeUint64String,
            },
            serial_number: {
              n: 3,
              br: y.readFixed64String,
              bw: M.writeFixed64String,
            },
            authenticator_type: { n: 4, br: y.readUint32, bw: M.writeUint32 },
            device_identifier: { n: 5, br: y.readString, bw: M.writeString },
            http_headers: {
              n: 7,
              r: !0,
              q: !0,
              br: y.readString,
              bw: M.writeRepeatedString,
            },
            version: { n: 8, d: 1, br: y.readUint32, bw: M.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= j(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return T(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      N(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CTwoFactor_AddAuthenticator_Request`;
    }
  },
  pc = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.shared_secret || D(e.M()),
        H.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            shared_secret: { n: 1, br: y.readBytes, bw: M.writeBytes },
            serial_number: {
              n: 2,
              br: y.readFixed64String,
              bw: M.writeFixed64String,
            },
            revocation_code: { n: 3, br: y.readString, bw: M.writeString },
            uri: { n: 4, br: y.readString, bw: M.writeString },
            server_time: {
              n: 5,
              br: y.readUint64String,
              bw: M.writeUint64String,
            },
            account_name: { n: 6, br: y.readString, bw: M.writeString },
            token_gid: { n: 7, br: y.readString, bw: M.writeString },
            identity_secret: { n: 8, br: y.readBytes, bw: M.writeBytes },
            secret_1: { n: 9, br: y.readBytes, bw: M.writeBytes },
            status: { n: 10, br: y.readInt32, bw: M.writeInt32 },
            phone_number_hint: { n: 11, br: y.readString, bw: M.writeString },
            confirm_type: { n: 12, br: y.readInt32, bw: M.writeInt32 },
            next_step: { n: 13, br: y.readEnum, bw: M.writeEnum },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= j(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return T(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      N(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CTwoFactor_AddAuthenticator_Response`;
    }
  },
  mc = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || D(e.M()),
        H.Message.initialize(this, t, 0, -1, [5], null));
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
              br: y.readFixed64String,
              bw: M.writeFixed64String,
            },
            authenticator_code: { n: 2, br: y.readString, bw: M.writeString },
            authenticator_time: {
              n: 3,
              br: y.readUint64String,
              bw: M.writeUint64String,
            },
            activation_code: { n: 4, br: y.readString, bw: M.writeString },
            http_headers: {
              n: 5,
              r: !0,
              q: !0,
              br: y.readString,
              bw: M.writeRepeatedString,
            },
            validate_sms_code: { n: 6, br: y.readBool, bw: M.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= j(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return T(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      N(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CTwoFactor_FinalizeAddAuthenticator_Request`;
    }
  },
  hc = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.success || D(e.M()),
        H.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            success: { n: 1, br: y.readBool, bw: M.writeBool },
            server_time: {
              n: 3,
              br: y.readUint64String,
              bw: M.writeUint64String,
            },
            status: { n: 4, br: y.readInt32, bw: M.writeInt32 },
            next_step: { n: 5, br: y.readEnum, bw: M.writeEnum },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= j(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return T(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      N(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CTwoFactor_FinalizeAddAuthenticator_Response`;
    }
  },
  gc = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.revocation_code || D(e.M()),
        H.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            revocation_code: { n: 2, br: y.readString, bw: M.writeString },
            revocation_reason: { n: 5, br: y.readUint32, bw: M.writeUint32 },
            steamguard_scheme: { n: 6, br: y.readUint32, bw: M.writeUint32 },
            remove_all_steamguard_cookies: {
              n: 7,
              br: y.readBool,
              bw: M.writeBool,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= j(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return T(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      N(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CTwoFactor_RemoveAuthenticator_Request`;
    }
  },
  _c = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.success || D(e.M()),
        H.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            success: { n: 1, br: y.readBool, bw: M.writeBool },
            server_time: {
              n: 3,
              br: y.readUint64String,
              bw: M.writeUint64String,
            },
            revocation_attempts_remaining: {
              n: 5,
              br: y.readUint32,
              bw: M.writeUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= j(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return T(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      N(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CTwoFactor_RemoveAuthenticator_Response`;
    }
  },
  vc = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), H.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CTwoFactor_RemoveAuthenticatorViaChallengeStart_Request`;
    }
  },
  yc = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.success || D(e.M()),
        H.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { success: { n: 1, br: y.readBool, bw: M.writeBool } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= j(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return T(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      N(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CTwoFactor_RemoveAuthenticatorViaChallengeStart_Response`;
    }
  },
  bc = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.sms_code || D(e.M()),
        H.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            sms_code: { n: 1, br: y.readString, bw: M.writeString },
            generate_new_token: { n: 2, br: y.readBool, bw: M.writeBool },
            version: { n: 3, d: 1, br: y.readUint32, bw: M.writeUint32 },
            caller_version: { n: 4, br: y.readUint32, bw: M.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= j(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return T(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      N(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Request`;
    }
  },
  xc = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.shared_secret || D(e.M()),
        H.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            shared_secret: { n: 1, br: y.readBytes, bw: M.writeBytes },
            serial_number: {
              n: 2,
              br: y.readFixed64String,
              bw: M.writeFixed64String,
            },
            revocation_code: { n: 3, br: y.readString, bw: M.writeString },
            uri: { n: 4, br: y.readString, bw: M.writeString },
            server_time: {
              n: 5,
              br: y.readUint64String,
              bw: M.writeUint64String,
            },
            account_name: { n: 6, br: y.readString, bw: M.writeString },
            token_gid: { n: 7, br: y.readString, bw: M.writeString },
            identity_secret: { n: 8, br: y.readBytes, bw: M.writeBytes },
            secret_1: { n: 9, br: y.readBytes, bw: M.writeBytes },
            status: { n: 10, br: y.readInt32, bw: M.writeInt32 },
            steamguard_scheme: { n: 11, br: y.readUint32, bw: M.writeUint32 },
            steamid: {
              n: 12,
              br: y.readFixed64String,
              bw: M.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= j(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return T(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      N(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CRemoveAuthenticatorViaChallengeContinue_Replacement_Token`;
    }
  },
  Sc = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.success || D(e.M()),
        H.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            success: { n: 1, br: y.readBool, bw: M.writeBool },
            replacement_token: { n: 2, c: xc },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= j(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return T(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      N(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Response`;
    }
  },
  Cc = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || D(e.M()),
        H.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: y.readFixed64String,
              bw: M.writeFixed64String,
            },
            version: { n: 2, br: y.readUint32, bw: M.writeUint32 },
            signature: { n: 3, br: y.readBytes, bw: M.writeBytes },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= j(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return T(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      N(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CTwoFactor_UpdateTokenVersion_Request`;
    }
  },
  wc = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), H.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CTwoFactor_UpdateTokenVersion_Response`;
    }
  },
  Tc;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(`TwoFactor.QueryTime#1`, x(cc, t, n), lc, {
      ePrivilege: 0,
      eWebAPIKeyRequirement: 1,
      rgBrowserAPISites: [`help`],
    });
  }
  e.QueryTime = t;
  function n(e, t, n) {
    return e.SendMsg(`TwoFactor.QueryStatus#1`, x(uc, t, n), dc, {
      ePrivilege: 1,
    });
  }
  e.QueryStatus = n;
  function r(e, t, n) {
    return e.SendMsg(`TwoFactor.AddAuthenticator#1`, x(fc, t, n), pc, {
      ePrivilege: 1,
    });
  }
  e.AddAuthenticator = r;
  function i(e, t, n) {
    return e.SendMsg(`TwoFactor.FinalizeAddAuthenticator#1`, x(mc, t, n), hc, {
      ePrivilege: 1,
    });
  }
  e.FinalizeAddAuthenticator = i;
  function a(e, t, n) {
    return e.SendMsg(`TwoFactor.UpdateTokenVersion#1`, x(Cc, t, n), wc, {
      ePrivilege: 0,
      eWebAPIKeyRequirement: 1,
    });
  }
  e.UpdateTokenVersion = a;
  function o(e, t, n) {
    return e.SendMsg(`TwoFactor.RemoveAuthenticator#1`, x(gc, t, n), _c, {
      ePrivilege: 9,
    });
  }
  e.RemoveAuthenticator = o;
  function s(e, t, n) {
    return e.SendMsg(
      `TwoFactor.RemoveAuthenticatorViaChallengeStart#1`,
      x(vc, t, n),
      yc,
      { ePrivilege: 9 },
    );
  }
  e.RemoveAuthenticatorViaChallengeStart = s;
  function c(e, t, n) {
    return e.SendMsg(
      `TwoFactor.RemoveAuthenticatorViaChallengeContinue#1`,
      x(bc, t, n),
      Sc,
      { ePrivilege: 9 },
    );
  }
  e.RemoveAuthenticatorViaChallengeContinue = c;
})((Tc ||= {}));
var Ec = class extends rc {
  m_eStatusValue = 0;
  get m_eStatus() {
    return this.m_eStatusValue;
  }
  set m_eStatus(e) {
    ((this.m_eStatusValue = e), this.NotifyChanged());
  }
  m_steamid;
  m_strAccountName;
  m_strConfirmationAssociatedMessage = ``;
  m_bUsingCodeOverride = !1;
  m_strWeakAuthToken = ``;
  m_weakAuthWebInterface;
  m_onGetMachineAuth;
  m_replacementAuthenticator;
  m_strErrorReferenceValue = ``;
  get m_strErrorReference() {
    return this.m_strErrorReferenceValue;
  }
  set m_strErrorReference(e) {
    ((this.m_strErrorReferenceValue = e), this.NotifyChanged());
  }
  m_onLoginComplete;
  constructor(e) {
    (super(
      e.transport,
      (e) => this.onAuthComplete(e),
      e.onDeviceDetails,
      e.onShowAgreement,
    ),
      (this.m_onLoginComplete = e.onComplete),
      (this.m_onGetMachineAuth = e.onGetMachineAuth));
  }
  BuildSnapshot() {
    return {
      strAccountName: this.GetAccountName(),
      steamid: this.GetSteamID(),
      eFailureState: this.GetFailureState(),
      strExtendedErrorMessage: this.GetExtendedErrorMessage(),
      strErrorReference: this.GetErrorReference(),
      strConfirmationAssociatedMessage: this.GetConfirmationAssociatedMessage(),
      eStatus: this.GetStatus(),
      bCanGoBack: this.BCanGoBack(),
      replacementAuthenticator: this.GetReplacementAuthenticator(),
    };
  }
  async Start(e, t, n) {
    if (this.m_eStatus !== 0 && this.m_eStatus !== 2)
      return (
        Q(
          `Cannot start an already started auth session. Create a new session instance.`,
        ),
        29
      );
    let r = e.replace(/[^\x00-\x7F]/g, ``),
      i = t.replace(/[^\x00-\x7F]/g, ``).slice(0, 64);
    if (!r.length || !i.length) return 8;
    if (
      ((this.m_eStatus = 1), (this.m_bUsingCodeOverride = !1), e == `anonymous`)
    )
      return (this.SetFailureState($.AnonymousLogin, Pc.EResult(12)), 12);
    try {
      let t = await Dc(this.m_transport, r);
      if (!t)
        return (
          Q(`Cannot start auth session without a valid RSA key`),
          this.SetFailureState($.Network, Pc.EResult(20)),
          20
        );
      let o = $s(i, t),
        s = E.Init(Qi);
      (s.SetEMsg(le),
        s.Body().set_account_name(r),
        s.Body().set_encrypted_password(o ?? void 0),
        s.Body().set_encryption_timestamp(t.timestamp),
        s.Body().set_remember_login(!!n),
        s.Body().set_persistence(+!!n));
      let c = l();
      c && s.Body().set_website_id(c.WEBSITE_ID);
      try {
        s.Body().set_device_details(await this.GetDeviceDetails());
      } catch (e) {
        (Q(`Failed to GetDeviceDetails`), Q(e));
      }
      if (
        (s.Body().set_language(m(a.LANGUAGE)), this.m_onGetMachineAuth != null)
      ) {
        let e = await this.m_onGetMachineAuth(r);
        e.eresult == 1 && s.Body().set_guard_data(e.data);
      }
      await this.m_transport.MakeReady();
      let u = await Ra.BeginAuthSessionViaCredentials(this.m_transport, s);
      u.DEBUG_LogToConsole();
      let d = u.GetEResult(),
        f = u.Hdr().transport_error();
      if (d !== 1)
        switch (d) {
          case 5:
            return ((this.m_eStatus = 2), d);
          case 20:
          case 3:
            return (this.SetFailureState($.Network, Pc.EResult(20)), d);
          case 84:
            return (
              this.SetFailureState($.RateLimitExceeded, Pc.EResult(d)), d
            );
          case 118: {
            let e = u.Body().agreement_session_url();
            if (
              (C(!!e, `Missing agreement session URL for result`, d),
              this.m_onShowAgreement)
            )
              this.m_onShowAgreement(e);
            else {
              let t = location.href;
              window.location.href = `${e}&redir=${encodeURIComponent(t)}`;
            }
            return (
              this.m_onCompleteCallback({ bSuccess: !1 }),
              (this.m_eStatus = 0),
              d
            );
          }
          default:
            return (
              Q(`Failed to start auth session. Result: ${d} Transport: ${f}`),
              this.SetFailureState(
                $.Generic,
                Pc.EResult(d),
                u.Body().extended_error_message(),
              ),
              this.m_onCompleteCallback({ bSuccess: !1 }),
              d
            );
        }
      this.m_strAccountName = e;
      let {
        client_id: p,
        request_id: h,
        interval: g,
        allowed_confirmations: _ = [],
        steamid: ee,
        weak_token: v,
      } = u.Body().toObject();
      if (
        (C(
          g !== void 0 && !!p && !!ee,
          `Missing poll interval, client ID, or steamid for result`,
          d,
        ),
        (this.m_msPollInterval = g * 1e3),
        (this.m_strClientID = p),
        (this.m_rgRequestID = h),
        (this.m_steamid = ee),
        (this.m_strWeakAuthToken = v ?? ``),
        _.find(({ confirmation_type: e }) => e === 6))
      ) {
        let e = new FormData();
        (e.append(`clientid`, p), e.append(`steamid`, ee));
        let t = `${a.LOGIN_BASE_URL}jwt/checkdevice/${this.m_steamid}`;
        try {
          if (
            (
              await zt.default.post(t, e, {
                headers: { "Content-Type": `multipart/form-data` },
                withCredentials: !0,
              })
            ).data.result == 1
          )
            return ((this.m_eStatus = 4), this.StartPolling(!0), 1);
        } catch (e) {
          if (
            (Xs(`checkdevice ajax to ${t} failed: ${e.message}`),
            e instanceof zt.AxiosError)
          ) {
            let t = e;
            return t.response
              ? (this.SetFailureState(
                  $.Network,
                  Pc.AjaxFailureWithCode(t.response.status),
                ),
                20)
              : (this.SetFailureState($.Network, Pc.AjaxFailureNoCode()), 20);
          }
          return (this.SetFailureState($.Network, Pc.EResult(79)), 79);
        }
      }
      let te = kc(
          _.map(
            ({ confirmation_type: e }) => (
              C(
                e !== void 0,
                `Missing confirmation type in allowed confirmations`,
              ),
              e
            ),
          ),
        ),
        ne = _.find(({ confirmation_type: e }) => e === te);
      switch (
        (ne &&
          ne.associated_message &&
          (this.m_strConfirmationAssociatedMessage = ne.associated_message),
        te)
      ) {
        case 1:
          return ((this.m_eStatus = 13), this.StartPolling(), d);
        case 2:
          this.m_eStatus = 3;
          break;
        case 5:
          ((this.m_eStatus = 4), this.StartPolling(!1));
          break;
        case 3:
          ((this.m_eStatus = 5), this.StartPolling(!1));
          break;
        case 4:
          ((this.m_eStatus = 6), this.StartPolling(!1));
      }
      return d;
    } catch (e) {
      return (
        Q(`Failed to start auth session. Exception: ${JSON.stringify(e)}`),
        Xs(e),
        this.SetFailureState($.Generic, Pc.FailedToStart()),
        this.m_onCompleteCallback({ bSuccess: !1 }),
        2
      );
    }
  }
  Stop() {
    (this.StopPolling(), (this.m_eStatus = 16));
  }
  GetStatus() {
    return this.m_eStatus;
  }
  GetConfirmationAssociatedMessage() {
    return this.m_strConfirmationAssociatedMessage;
  }
  GetAccountName() {
    return this.m_strAccountName;
  }
  GetSteamID() {
    return this.m_steamid;
  }
  GetReplacementAuthenticator() {
    return this.m_replacementAuthenticator;
  }
  GetErrorReference() {
    return this.m_strErrorReference;
  }
  async SendSteamGuardCode(e, t = !0) {
    if (e.length == 0) {
      switch (this.m_eStatus) {
        case 10:
          this.m_eStatus = 3;
          break;
        case 11:
          this.m_eStatus = 5;
          break;
        case 5:
        case 3:
          break;
        default:
          throw Error(`Attempted to clear code in invalid state`);
      }
      return Promise.resolve(1);
    }
    try {
      await this.m_transport.MakeReady();
      let n = this.m_eStatus === 3 || this.m_eStatus === 10,
        r = E.Init(fa);
      (r.SetEMsg(le),
        r.Body().set_client_id(this.m_strClientID),
        r.Body().set_steamid(this.m_steamid),
        r.Body().set_code(e),
        r.Body().set_code_type(n ? 2 : 3));
      let i = await Ra.UpdateAuthSessionWithSteamGuardCode(this.m_transport, r),
        a = i.GetEResult();
      if (a !== 1) {
        if (!t)
          return (
            Q(
              `Failed to automatically update session with local SG info. Result ${a}. Transport ${i.Hdr().transport_error()}`,
            ),
            a
          );
        switch (a) {
          case 65:
          case 88:
            return ((this.m_eStatus = n ? 10 : 11), a);
          case 27:
            return (
              this.SetFailureState($.Expired, Pc.EResult(a)),
              this.m_onCompleteCallback({ bSuccess: !1 }),
              a
            );
          case 84:
            return (
              this.SetFailureState($.RateLimitExceeded, Pc.EResult(a)),
              this.m_onCompleteCallback({ bSuccess: !1 }),
              a
            );
          case 118: {
            let e = i.Body().agreement_session_url();
            if (
              (C(!!e, `Missing agreement session URL for result`, a),
              this.m_onShowAgreement)
            )
              this.m_onShowAgreement(e);
            else {
              let t = location.href;
              window.location.href = `${e}&redir=${encodeURIComponent(t)}`;
            }
            return (
              this.m_onCompleteCallback({ bSuccess: !1 }),
              (this.m_eStatus = 0),
              a
            );
          }
          default:
            return (
              Q(`Failed to update auth session with SG code. Result: ${a}`),
              this.SetFailureState($.Generic, Pc.EResult(a)),
              this.m_onCompleteCallback({ bSuccess: !1 }),
              a
            );
        }
      }
      return ((this.m_eStatus = 13), this.StartPolling(), a);
    } catch (e) {
      return (
        Q(`Failed to update auth session with SG code. ${e}`),
        this.SetFailureState($.Generic, Pc.FailedToAddCode()),
        this.m_onCompleteCallback({ bSuccess: !1 }),
        2
      );
    }
  }
  UseCodeOverride() {
    switch (this.m_eStatus) {
      case 6:
        ((this.m_bUsingCodeOverride = !0), (this.m_eStatus = 5));
        return;
      case 4:
        ((this.m_bUsingCodeOverride = !0), (this.m_eStatus = 3));
        return;
      default:
        Q(
          `Don't know how to UseCodeOverride from login session status ${this.m_eStatus}`,
        );
        return;
    }
  }
  CantAccessCode() {
    this.m_eStatus = 7;
  }
  async StartMoveAuthenticator() {
    this.m_weakAuthWebInterface = new ht(
      a.WEBAPI_BASE_URL,
      this.m_strWeakAuthToken,
    );
    try {
      let e = E.Init(vc),
        t = await Tc.RemoveAuthenticatorViaChallengeStart(
          this.m_weakAuthWebInterface.GetServiceTransport(),
          e,
        );
      t.GetEResult() == 1
        ? (this.m_eStatus = 8)
        : (t.DEBUG_LogToConsole(),
          Q(
            `An unexpected error occured while adding an authenticator`,
            t.GetEResult(),
          ),
          this.SetFailureState(
            $.MoveAuthenticator,
            Pc.EResult(t.GetEResult()),
          ));
    } catch (e) {
      (Q(`An unexpected error occured while moving an authenticator`, e),
        this.SetFailureState($.MoveAuthenticator, Pc.EResult(2)));
    }
  }
  async ResendMoveCode() {
    C(
      !!this.m_weakAuthWebInterface,
      `Resending move code before StartMoveAuthenticator`,
    );
    let e = E.Init(vc),
      t = await Tc.RemoveAuthenticatorViaChallengeStart(
        this.m_weakAuthWebInterface.GetServiceTransport(),
        e,
      );
    (t.GetEResult() != 1 &&
      (t.DEBUG_LogToConsole(),
      Q(
        `An unexpected error occured while adding an authenticator`,
        t.GetEResult(),
      )),
      (this.m_eStatus = 8));
  }
  async FinishMoveAuthenticator(e) {
    C(
      !!this.m_weakAuthWebInterface,
      `Finishing authenticator move before StartMoveAuthenticator`,
    );
    let t = E.Init(bc);
    (t.Body().set_sms_code(e),
      t.Body().set_generate_new_token(!0),
      t.Body().set_version(2));
    let n = await Tc.RemoveAuthenticatorViaChallengeContinue(
      this.m_weakAuthWebInterface.GetServiceTransport(),
      t,
    );
    if (n.GetEResult() == 94) this.m_eStatus = 12;
    else if (!n.Body().success())
      (n.DEBUG_LogToConsole(),
        Q(
          `Error when calling RemoveAuthenticatorViaChallengeContinue`,
          n.GetEResult(),
        ),
        this.SetFailureState($.MoveAuthenticator, Pc.EResult(n.GetEResult())));
    else {
      n.DEBUG_LogToConsole();
      let e = n.Body().replacement_token();
      (C(!!e, `Missing replacement token on successful authenticator move`),
        (this.m_replacementAuthenticator = ec(e.toObject())),
        (this.m_eStatus = 9),
        (this.m_bUsingCodeOverride = !1));
    }
  }
  FinishMoveRecovery() {
    this.m_eStatus = 5;
  }
  BCanGoBack() {
    switch (this.m_eStatus) {
      case 5:
      case 11:
      case 3:
      case 10:
      case 6:
      case 4:
      case 7:
      case 8:
      case 12:
        return !0;
      default:
        return !1;
    }
  }
  GoBack() {
    switch (this.m_eStatus) {
      case 6:
      case 4:
        this.m_eStatus = 0;
        break;
      case 5:
      case 11:
        this.m_eStatus = this.m_bUsingCodeOverride ? 6 : 0;
        break;
      case 7:
      case 8:
      case 12:
        this.m_eStatus = (this.m_bUsingCodeOverride, 5);
        break;
      case 3:
      case 10:
        this.m_eStatus = this.m_bUsingCodeOverride ? 4 : 0;
        break;
      default:
        Q(
          `Don't know how to GoBack from login session status ${this.m_eStatus}`,
        );
        return;
    }
  }
  SetFailureState(e, t, n = ``) {
    ((this.m_eStatus = 15),
      (this.m_eFailureState = e),
      (this.m_strErrorReference = t),
      (this.m_strExtendedErrorMessage = n));
  }
  onAuthComplete = (e) => {
    this.m_eStatus = e.bSuccess ? 14 : 15;
    let t;
    (e.bSuccess
      ? (C(
          !!this.m_strAccountName && !!this.m_steamid,
          `Missing account name or steamid on auth success`,
        ),
        (t = {
          ...e,
          strAccountName: this.m_strAccountName,
          steamid: this.m_steamid,
        }))
      : (t = { bSuccess: !1 }),
      this.m_onLoginComplete && this.m_onLoginComplete(t));
  };
  SetOnLoginComplete(e) {
    this.m_onLoginComplete = e;
  }
};
(O([f], Ec.prototype, `Start`, null),
  O([f], Ec.prototype, `SendSteamGuardCode`, null),
  O([f], Ec.prototype, `UseCodeOverride`, null),
  O([f], Ec.prototype, `CantAccessCode`, null),
  O([f], Ec.prototype, `StartMoveAuthenticator`, null),
  O([f], Ec.prototype, `ResendMoveCode`, null),
  O([f], Ec.prototype, `FinishMoveAuthenticator`, null),
  O([f], Ec.prototype, `FinishMoveRecovery`, null),
  O([f], Ec.prototype, `GoBack`, null),
  O([f], Ec.prototype, `SetOnLoginComplete`, null));
async function Dc(e, t) {
  let n = E.Init(Ki);
  (n.Body().set_account_name(t), n.SetEMsg(le));
  try {
    await e.MakeReady();
    let t = await Ra.GetPasswordRSAPublicKey(e, n);
    if ((t.DEBUG_LogToConsole(), t.GetEResult() !== 1))
      return (Q(`Failed to get RSA key with EResult: ${t.GetEResult()}`), null);
    let {
      publickey_exp: r,
      publickey_mod: i,
      timestamp: a,
    } = t.Body().toObject();
    return !r || !i || !a
      ? (Q(
          `Missing expected field in RSA Key: ${JSON.stringify({ publickey_exp: r, publickey_mod: i, timestamp: a })}`,
        ),
        null)
      : { publickey_exp: r, publickey_mod: i, timestamp: a };
  } catch (e) {
    return (Q(`Failed to get RSA key: ${JSON.stringify(e)}`), null);
  }
}
var Oc = [4, 3, 2, 1, 0, 5].reduce((e, t, n) => ((e[t] = n), e), {});
function kc(e) {
  let t = e[0] || 0;
  return (e.length > 1 && (t = e.sort((e, t) => Oc[e] - Oc[t])[0]), t);
}
function Ac(e) {
  let [t, n] = (0, U.useState)(() => new Ec(e));
  return (
    (0, U.useEffect)(() => {
      t?.SetOnLoginComplete(e.onComplete);
    }, [t, e.onComplete]),
    {
      ...(0, U.useSyncExternalStore)(t.Subscribe, t.GetSnapshot, t.GetSnapshot),
      start: t.Start,
      addCode: t.SendSteamGuardCode,
      useCodeOverride: t.UseCodeOverride,
      cantAccessCode: t.CantAccessCode,
      startMoveAuthenticator: t.StartMoveAuthenticator,
      resendMoveCode: t.ResendMoveCode,
      finishMoveAuthenticator: t.FinishMoveAuthenticator,
      finishMoveRecovery: t.FinishMoveRecovery,
      reset: () => n(new Ec(e)),
      goBack: t.GoBack,
      setTokenToRevoke: t.SetTokenToRevoke,
    }
  );
}
function jc(e) {
  return e ? 7 : 5;
}
function Mc(e, t) {
  return /[23456789BCDFGHJKMNPQRTVWXY]*/g.test(e) && e.length <= jc(t);
}
function Nc(e, t) {
  return Mc(e, t) && e.length === jc(t);
}
var Pc = {
    EResult: (e) => `e${e}`,
    FailedToStart: () => `c-fts`,
    FailedToAddCode: () => `c-ftac`,
    AjaxFailureNoCode: () => `af`,
    AjaxFailureWithCode: (e) => `af-${e}`,
  },
  Fc = class extends rc {
    m_eStatusValue = 0;
    get m_eStatus() {
      return this.m_eStatusValue;
    }
    set m_eStatus(e) {
      ((this.m_eStatusValue = e), this.NotifyChanged());
    }
    m_bPreloaded = !1;
    constructor(e) {
      (super(
        e.transport,
        (t) => {
          ((this.m_eStatus = t.bSuccess ? 3 : 4), e.onComplete(t));
        },
        e.onDeviceDetails,
      ),
        e.preloaded &&
          ((this.m_eStatusValue = 2),
          (this.m_strClientID = e.preloaded.strClientID),
          (this.m_strChallengeURL = e.preloaded.strChallengeURL),
          (this.m_msPollInterval = e.preloaded.msPollInterval),
          (this.m_rgRequestID = e.preloaded.rgRequestID),
          (this.m_bPreloaded = !0)));
    }
    BuildSnapshot() {
      return {
        strChallengeURL: this.GetChallengeURL(),
        strClientID: this.GetClientID(),
        eFailureState: this.GetFailureState(),
        eStatus: this.GetStatus(),
        bHadRemoteInteraction: this.BHadRemoteInteraction(),
      };
    }
    async Start() {
      if (this.m_bPreloaded && (this.m_eStatus === 2 || this.m_eStatus === 5))
        return (
          (this.m_eStatus = 2),
          this.m_transport.MakeReady(),
          this.StartPolling(!1),
          1
        );
      if (this.m_eStatus !== 0)
        return (
          console.error(
            `Cannot start an already started auth session. Create a new session instance.`,
          ),
          2
        );
      this.m_eStatus = 1;
      try {
        await this.m_transport.MakeReady();
        let e = E.Init(Xi);
        e.SetEMsg(le);
        try {
          e.Body().set_device_details(await this.GetDeviceDetails());
        } catch (e) {
          (console.error(`Failed to GetDeviceDetails`), console.log(e));
        }
        let t = l();
        t && e.Body().set_website_id(t.WEBSITE_ID);
        let n = await Ra.BeginAuthSessionViaQR(this.m_transport, e),
          r = n.GetEResult(),
          i = n.Hdr().transport_error();
        if (r !== 1)
          return (
            console.error(
              `Failed to start auth session. Result: ${r} Transport: ${i}`,
            ),
            (this.m_eFailureState = $.Generic),
            this.m_onCompleteCallback({ bSuccess: !1 }),
            r
          );
        let {
          client_id: a,
          challenge_url: o,
          interval: s,
          request_id: c,
        } = n.Body().toObject();
        return (
          C(s !== void 0, `Missing poll interval for QR auth session`),
          (this.m_strClientID = a),
          (this.m_strChallengeURL = o),
          (this.m_msPollInterval = s * 1e3),
          (this.m_rgRequestID = c),
          (this.m_eStatus = 2),
          this.StartPolling(!1),
          r
        );
      } catch (e) {
        return (
          console.error(`Failed to start auth session: ${JSON.stringify(e)}`),
          (this.m_eFailureState = $.Generic),
          this.m_onCompleteCallback({ bSuccess: !1 }),
          2
        );
      }
    }
    Stop() {
      (this.StopPolling(), (this.m_eStatus = 5));
    }
    GetChallengeURL() {
      return this.m_strChallengeURL;
    }
    GetClientID() {
      return this.m_strClientID;
    }
    GetStatus() {
      return this.m_eStatus;
    }
  };
function Ic(e) {
  let [t, n] = (0, U.useState)(() => new Fc(e));
  return (
    (0, U.useEffect)(
      () => (
        t.Start(),
        () => {
          t.Stop();
        }
      ),
      [t],
    ),
    {
      ...(0, U.useSyncExternalStore)(t.Subscribe, t.GetSnapshot, t.GetSnapshot),
      reset: () => n(new Fc({ ...e, preloaded: void 0 })),
      setTokenToRevoke: t.SetTokenToRevoke,
    }
  );
}
function Lc(e) {
  switch (e) {
    case 4:
      return `dev`;
    case 2:
      return `beta`;
    case 1:
      return `public`;
    default:
      return `unknown`;
  }
}
async function Rc() {
  let [e, t, n, r] = await Promise.all([
    SteamClient.System.GetOSType(),
    SteamClient.System.GetSystemInfo(),
    SteamClient?.Auth?.GetLocalHostname?.() ?? ``,
    SteamClient?.Auth?.GetMachineID?.() ?? void 0,
  ]);
  return {
    os_type: e,
    device_friendly_name: n,
    machine_id: r,
    platform_type: 1,
    gaming_device_type: t.eGamingDeviceType,
  };
}
async function zc() {
  return { device_friendly_name: window.navigator.userAgent, platform_type: 2 };
}
var Bc = `Login_RememberMeSetting`;
function Vc(e) {
  let { onSuccess: t, secureComputer: n = !0, isProbablySharedPC: r = !1 } = e,
    i = (0, U.useCallback)(
      (e) => {
        if (e.bSuccess) {
          let {
            strRefreshToken: n,
            strAccessToken: r,
            strAccountName: i,
            strNewGuardData: a,
          } = e;
          t({
            strRefreshToken: n,
            strAccessToken: r,
            strAccountName: i,
            strNewGuardData: a,
          });
        }
      },
      [t],
    ),
    a = Ac({
      transport: e.transport,
      onComplete: i,
      onDeviceDetails: e.onDeviceDetails,
      onGetMachineAuth: e.onGetMachineAuth,
      onShowAgreement: e.onShowAgreement,
    }),
    [o, s] = (0, U.useState)(0),
    [c, l] = (0, U.useState)(
      e.refreshInfo?.account_name ?? e.defaultAccountName ?? ``,
    ),
    [u, d] = (0, U.useState)(``),
    [f, p] = (0, U.useState)(n && !r);
  (0, U.useLayoutEffect)(() => {
    typeof localStorage < `u` && localStorage.getItem(Bc) == `0` && p(!1);
  }, []);
  let m = a.eStatus !== 0 && a.eStatus !== 1 && a.eStatus !== 2;
  return (
    (0, U.useEffect)(() => {
      e.refreshInfo?.login_token_id &&
        a.setTokenToRevoke(e.refreshInfo.login_token_id);
    }, [e.refreshInfo, a]),
    {
      password: a,
      onComplete: i,
      eQRStatus: o,
      onQRStatusChange: s,
      strAccountName: c,
      onAccountNameChange: l,
      strPassword: u,
      onPasswordChange: d,
      bRememberMe: f,
      onRememberMeChange: (e) => {
        (p(e), localStorage?.setItem(Bc, e ? `1` : `0`));
      },
      onPasswordSubmit: () =>
        !c || !u ? Promise.resolve(8) : a.start(c, u, f),
      bInPasswordFlow: m,
      onTryOffline: () => {
        (Xs(`Logging in offline with username ${c}`),
          SteamClient.User.SetLoginCredentials(c, u, f),
          SteamClient.User.StartOffline(!0));
      },
    }
  );
}
function Hc(e, t = ``) {
  let n = { title: ``, description: `` };
  switch (e) {
    case $.None:
      return { title: ``, description: `` };
    case $.Expired:
      n = {
        title: A.Localize(`#Login_Error_Expired_Title`),
        description: A.Localize(`#Login_Error_Expired_Description`),
      };
      break;
    case $.Network:
      n = {
        title: A.Localize(`#Login_Error_Network_Title`),
        description: A.Localize(`#Login_Error_Network_Description`),
      };
      break;
    case $.MoveAuthenticator:
      n = {
        title: A.Localize(`#Error_Generic`),
        description: A.Localize(`#Login_Error_MoveAuthenticator_Description`),
      };
      break;
    case $.RateLimitExceeded:
      n = {
        title: A.Localize(`#Login_Error_RateLimit_Title`),
        description: A.Localize(`#Login_Error_RateLimit_Description`),
      };
      break;
    case $.AnonymousLogin:
      n = {
        title: A.Localize(`#Login_Error_Anonymous_Title`),
        description: A.Localize(`#Login_Error_Anonymous_Description`),
      };
      break;
    case $.Generic:
    default:
      n = {
        title: A.Localize(`#Error_Generic`),
        description: A.Localize(`#Login_Error_Default_Description`),
      };
  }
  return (t && (n.description = t), n);
}
var Uc = `ZhRwp4aSW-8-`,
  Wc = `QV15rhpdkBI-`,
  Gc = `StondD-Afl4-`,
  Kc = `zENCcMUG1lQ-`,
  qc = `_3M1tVbU6uAM-`,
  Jc = `rQS7qJ7cGq8-`,
  Yc = `WlYK7flUyzk-`,
  Xc = `p0lt1P2vwbI-`,
  Zc = `Lw5H9Bgq0ww-`,
  Qc = `HD-XkY2oIS0-`,
  $c = `t972389vN-Y-`,
  el = `_5U7-qgmzcvo-`,
  tl = `-HdQ6mrZKtA-`,
  nl = `Tr28R97XrnU-`,
  rl = `_17vA1ePJ-dw-`,
  il = `hYiUBswjB8E-`,
  al = `l-m0O8YsKvg-`,
  ol = `WNU0cJCzPqA-`,
  sl = `sljnSz9B7VM-`,
  cl = `KE-CI3fCrt4-`,
  ll = `F2-23fRyFdg-`,
  ul = `_9ehBJOSNpjY-`,
  dl = `H2e67uoFTZo-`,
  fl = `_0O9XQ4NvNgg-`,
  pl = `SJJMt5-Nlqc-`,
  ml = `_5HbDhenxKKA-`,
  hl = `JRre8-r--eY-`,
  gl = `-wYn7tUZ-Qc-`,
  _l = `Y0ZBzWFxTiU-`,
  vl = `_7xRNYgociu0-`,
  yl = `Rq9MD5lNpxw-`,
  bl = `aDxXoSR2-2M-`,
  xl = `A44IVG2oXaA-`,
  Sl = `DJzHz8vrR58-`,
  Cl = `_6uA-qQnXgqs-`,
  wl = `zS2JKIAoqLs-`,
  Tl = `g2m1tomZf5Y-`,
  El = `DSy9L5eaj5o-`,
  Dl = `riI5q82cESo-`,
  Ol = `gjs7dr1G9B4-`,
  kl = `_8tHxNur8iVQ-`,
  Al = `QDXFvQ1VRGs-`,
  jl = `iI4-KPYmClQ-`,
  Ml = `FCVI1-X5QXI-`,
  Nl = `_-7t7WL8ib4U-`,
  Pl = `_4cSRMvOczro-`,
  Fl = `urTXd9G8cNM-`,
  Il = `tk1GT5on9gQ-`,
  Ll = `EUZmbwRThEY-`,
  Rl = `koI0X-poWGo-`,
  zl = `ik9s3tnOv3M-`,
  Bl = `e5FVer86lmY-`,
  Vl = `O8iS-RxIxMc-`,
  Hl = `EWu0dHs0CgM-`,
  Ul = `G3u-Es6yEe8-`,
  Wl = `nr0J1UoEl8s-`,
  Gl = `_19NDBszdpt8-`,
  Kl = `_4p53BqicMtw-`,
  ql = `LJXTU0Fs0Mc-`,
  Jl = `NoRFObwpjo0-`,
  Yl = `u95III-ojfU-`,
  Xl = `dfnWU-vLcuI-`,
  Zl = `-iy7zxvavFA-`,
  Ql = `_0wUoYmLYupw-`,
  $l = `V6VD9IECTcA-`,
  eu = `eDuVIFYKU84-`,
  tu = `sH-b0kW7QCY-`,
  nu = `z8NjGLKg3z0-`,
  ru = `_4pLGekYMMsE-`,
  iu = `X1k4Ip6MIC8-`,
  au = `qeijEUL7oHU-`,
  ou = `SoYZJobaqlk-`,
  su = `KQdWHvm1kCY-`;
function cu(e) {
  let {
    length: t,
    value: n,
    onChange: r,
    onPaste: i,
    tone: a,
    autoFocus: o,
    disabled: s,
    loading: c,
    backupCode: l,
    allowCharacter: u,
  } = e;
  (0, U.useEffect)(() => {
    o && h();
  }, []);
  let d = (0, U.useRef)([]),
    f = () => r(d.current.map((e) => e.value)),
    p = (e) => {
      let t = e.target.value;
      if (t && u && !u(t)) return;
      let n = e.target.nextElementSibling;
      (e.target.value && n && n.focus(), f());
    },
    m = (e) => {
      d.current.findIndex((e) => !!e.value) === -1
        ? d.current[0]?.select()
        : e.target.select();
    },
    h = () => {
      let e = d.current.find((e) => !e.value);
      e ? e.focus() : d.current[d.current.length - 1].focus();
    },
    g = (e) => {
      let t = e.target;
      if (e.key === `Backspace` || e.key === `Delete`) {
        let n =
          e.key === `Backspace`
            ? t.previousElementSibling
            : t.nextElementSibling;
        t.value === `` &&
          n &&
          ((n.value = ``), n.focus(), e.preventDefault(), f());
      } else if (
        e.key === `ArrowLeft` ||
        e.key === `ArrowRight` ||
        e.key === `ArrowUp` ||
        e.key === `ArrowDown`
      ) {
        let n =
          e.key === `ArrowLeft` || e.key === `ArrowUp`
            ? t.previousElementSibling
            : t.nextElementSibling;
        n && (n.focus(), e.preventDefault());
      }
    },
    _ = (e) => {
      let t = e.clipboardData.getData(`Text`),
        n = e.target,
        r = 0;
      for (; n && r < t.length;)
        (n.focus(), (n.value = t.charAt(r)), (n = n.nextElementSibling), r++);
      (f(), e.preventDefault(), i && i());
    },
    ee = [];
  for (let e = 0; e < t; e++)
    ee.push(
      (0, W.jsx)(
        Ne,
        {
          noFocusRing: !0,
          type: `text`,
          maxLength: 1,
          ref: (t) => {
            t && (d.current[e] = t);
          },
          onChange: p,
          onFocus: m,
          onClick: (e) => e.stopPropagation(),
          onKeyDown: g,
          onPaste: _,
          value: n[e] ? n[e][0] : ``,
          autoComplete: `none`,
          autoFocus: e === 0 && o,
          disabled: s || c,
          className: su,
        },
        e,
      ),
    );
  return (0, W.jsxs)(he, {
    className: (0, hn.default)(
      ou,
      a === `danger` && `faQ-XEuPsJg-`,
      s && `mIAxC7mq9-I-`,
      l && `eQsO7wBQCBc-`,
    ),
    onClick: h,
    children: [
      c &&
        (0, W.jsx)(`div`, {
          className: `_4vkP-m3oW-0-`,
          children: (0, W.jsx)(yd, { size: `small` }),
        }),
      ee,
    ],
  });
}
function lu() {
  let e = `svgid_` + (0, U.useId)().replace(/[^A-Za-z0-9_-]/g, ``);
  return [e, `url(#${e})`];
}
function uu(e) {
  let [t, n] = lu();
  return (0, W.jsxs)(`svg`, {
    xmlns: `http://www.w3.org/2000/svg`,
    viewBox: `0 0 15 23`,
    fill: `none`,
    ...e,
    children: [
      (0, W.jsx)(`g`, {
        clipPath: n,
        children: (0, W.jsx)(`path`, {
          fill: `currentColor`,
          fillRule: `evenodd`,
          clipRule: `evenodd`,
          d: `M6.9955 11.5L15 3.4955L11.5045 -1.52793e-07L0.00450275 11.5L11.5045 23L15 19.5045L6.9955 11.5Z`,
        }),
      }),
      (0, W.jsx)(`defs`, {
        children: (0, W.jsx)(`clipPath`, {
          id: t,
          children: (0, W.jsx)(`rect`, {
            fill: `currentColor`,
            width: `15`,
            height: `23`,
          }),
        }),
      }),
    ],
  });
}
function du(e) {
  let { color: t = `#fff`, ...n } = e;
  return (0, W.jsx)(`svg`, {
    version: `1.1`,
    xmlns: `http://www.w3.org/2000/svg`,
    className: `SVGIcon_Button SVGIcon_Check`,
    x: `0px`,
    y: `0px`,
    width: `256px`,
    height: `256px`,
    viewBox: `0 0 256 256`,
    strokeWidth: `24`,
    stroke: t,
    strokeLinecap: `round`,
    strokeLinejoin: `round`,
    strokeMiterlimit: `10`,
    ...n,
    children: (0, W.jsx)(`polyline`, {
      fill: `none`,
      points: `49.5,147.75 95,210.75 206.5,45.25 `,
    }),
  });
}
var fu = new URL(`images/login_mobile_auth.png`, import.meta.url).href,
  pu = r((e, t) => {
    t.exports = {
      MODE_NUMBER: 1,
      MODE_ALPHA_NUM: 2,
      MODE_8BIT_BYTE: 4,
      MODE_KANJI: 8,
    };
  }),
  mu = r((e, t) => {
    var n = pu();
    function r(e) {
      ((this.mode = n.MODE_8BIT_BYTE), (this.data = e));
    }
    ((r.prototype = {
      getLength: function (e) {
        return this.data.length;
      },
      write: function (e) {
        for (var t = 0; t < this.data.length; t++)
          e.put(this.data.charCodeAt(t), 8);
      },
    }),
      (t.exports = r));
  }),
  hu = r((e, t) => {
    t.exports = { L: 1, M: 0, Q: 3, H: 2 };
  }),
  gu = r((e, t) => {
    var n = hu();
    function r(e, t) {
      ((this.totalCount = e), (this.dataCount = t));
    }
    ((r.RS_BLOCK_TABLE = [
      [1, 26, 19],
      [1, 26, 16],
      [1, 26, 13],
      [1, 26, 9],
      [1, 44, 34],
      [1, 44, 28],
      [1, 44, 22],
      [1, 44, 16],
      [1, 70, 55],
      [1, 70, 44],
      [2, 35, 17],
      [2, 35, 13],
      [1, 100, 80],
      [2, 50, 32],
      [2, 50, 24],
      [4, 25, 9],
      [1, 134, 108],
      [2, 67, 43],
      [2, 33, 15, 2, 34, 16],
      [2, 33, 11, 2, 34, 12],
      [2, 86, 68],
      [4, 43, 27],
      [4, 43, 19],
      [4, 43, 15],
      [2, 98, 78],
      [4, 49, 31],
      [2, 32, 14, 4, 33, 15],
      [4, 39, 13, 1, 40, 14],
      [2, 121, 97],
      [2, 60, 38, 2, 61, 39],
      [4, 40, 18, 2, 41, 19],
      [4, 40, 14, 2, 41, 15],
      [2, 146, 116],
      [3, 58, 36, 2, 59, 37],
      [4, 36, 16, 4, 37, 17],
      [4, 36, 12, 4, 37, 13],
      [2, 86, 68, 2, 87, 69],
      [4, 69, 43, 1, 70, 44],
      [6, 43, 19, 2, 44, 20],
      [6, 43, 15, 2, 44, 16],
      [4, 101, 81],
      [1, 80, 50, 4, 81, 51],
      [4, 50, 22, 4, 51, 23],
      [3, 36, 12, 8, 37, 13],
      [2, 116, 92, 2, 117, 93],
      [6, 58, 36, 2, 59, 37],
      [4, 46, 20, 6, 47, 21],
      [7, 42, 14, 4, 43, 15],
      [4, 133, 107],
      [8, 59, 37, 1, 60, 38],
      [8, 44, 20, 4, 45, 21],
      [12, 33, 11, 4, 34, 12],
      [3, 145, 115, 1, 146, 116],
      [4, 64, 40, 5, 65, 41],
      [11, 36, 16, 5, 37, 17],
      [11, 36, 12, 5, 37, 13],
      [5, 109, 87, 1, 110, 88],
      [5, 65, 41, 5, 66, 42],
      [5, 54, 24, 7, 55, 25],
      [11, 36, 12],
      [5, 122, 98, 1, 123, 99],
      [7, 73, 45, 3, 74, 46],
      [15, 43, 19, 2, 44, 20],
      [3, 45, 15, 13, 46, 16],
      [1, 135, 107, 5, 136, 108],
      [10, 74, 46, 1, 75, 47],
      [1, 50, 22, 15, 51, 23],
      [2, 42, 14, 17, 43, 15],
      [5, 150, 120, 1, 151, 121],
      [9, 69, 43, 4, 70, 44],
      [17, 50, 22, 1, 51, 23],
      [2, 42, 14, 19, 43, 15],
      [3, 141, 113, 4, 142, 114],
      [3, 70, 44, 11, 71, 45],
      [17, 47, 21, 4, 48, 22],
      [9, 39, 13, 16, 40, 14],
      [3, 135, 107, 5, 136, 108],
      [3, 67, 41, 13, 68, 42],
      [15, 54, 24, 5, 55, 25],
      [15, 43, 15, 10, 44, 16],
      [4, 144, 116, 4, 145, 117],
      [17, 68, 42],
      [17, 50, 22, 6, 51, 23],
      [19, 46, 16, 6, 47, 17],
      [2, 139, 111, 7, 140, 112],
      [17, 74, 46],
      [7, 54, 24, 16, 55, 25],
      [34, 37, 13],
      [4, 151, 121, 5, 152, 122],
      [4, 75, 47, 14, 76, 48],
      [11, 54, 24, 14, 55, 25],
      [16, 45, 15, 14, 46, 16],
      [6, 147, 117, 4, 148, 118],
      [6, 73, 45, 14, 74, 46],
      [11, 54, 24, 16, 55, 25],
      [30, 46, 16, 2, 47, 17],
      [8, 132, 106, 4, 133, 107],
      [8, 75, 47, 13, 76, 48],
      [7, 54, 24, 22, 55, 25],
      [22, 45, 15, 13, 46, 16],
      [10, 142, 114, 2, 143, 115],
      [19, 74, 46, 4, 75, 47],
      [28, 50, 22, 6, 51, 23],
      [33, 46, 16, 4, 47, 17],
      [8, 152, 122, 4, 153, 123],
      [22, 73, 45, 3, 74, 46],
      [8, 53, 23, 26, 54, 24],
      [12, 45, 15, 28, 46, 16],
      [3, 147, 117, 10, 148, 118],
      [3, 73, 45, 23, 74, 46],
      [4, 54, 24, 31, 55, 25],
      [11, 45, 15, 31, 46, 16],
      [7, 146, 116, 7, 147, 117],
      [21, 73, 45, 7, 74, 46],
      [1, 53, 23, 37, 54, 24],
      [19, 45, 15, 26, 46, 16],
      [5, 145, 115, 10, 146, 116],
      [19, 75, 47, 10, 76, 48],
      [15, 54, 24, 25, 55, 25],
      [23, 45, 15, 25, 46, 16],
      [13, 145, 115, 3, 146, 116],
      [2, 74, 46, 29, 75, 47],
      [42, 54, 24, 1, 55, 25],
      [23, 45, 15, 28, 46, 16],
      [17, 145, 115],
      [10, 74, 46, 23, 75, 47],
      [10, 54, 24, 35, 55, 25],
      [19, 45, 15, 35, 46, 16],
      [17, 145, 115, 1, 146, 116],
      [14, 74, 46, 21, 75, 47],
      [29, 54, 24, 19, 55, 25],
      [11, 45, 15, 46, 46, 16],
      [13, 145, 115, 6, 146, 116],
      [14, 74, 46, 23, 75, 47],
      [44, 54, 24, 7, 55, 25],
      [59, 46, 16, 1, 47, 17],
      [12, 151, 121, 7, 152, 122],
      [12, 75, 47, 26, 76, 48],
      [39, 54, 24, 14, 55, 25],
      [22, 45, 15, 41, 46, 16],
      [6, 151, 121, 14, 152, 122],
      [6, 75, 47, 34, 76, 48],
      [46, 54, 24, 10, 55, 25],
      [2, 45, 15, 64, 46, 16],
      [17, 152, 122, 4, 153, 123],
      [29, 74, 46, 14, 75, 47],
      [49, 54, 24, 10, 55, 25],
      [24, 45, 15, 46, 46, 16],
      [4, 152, 122, 18, 153, 123],
      [13, 74, 46, 32, 75, 47],
      [48, 54, 24, 14, 55, 25],
      [42, 45, 15, 32, 46, 16],
      [20, 147, 117, 4, 148, 118],
      [40, 75, 47, 7, 76, 48],
      [43, 54, 24, 22, 55, 25],
      [10, 45, 15, 67, 46, 16],
      [19, 148, 118, 6, 149, 119],
      [18, 75, 47, 31, 76, 48],
      [34, 54, 24, 34, 55, 25],
      [20, 45, 15, 61, 46, 16],
    ]),
      (r.getRSBlocks = function (e, t) {
        var n = r.getRsBlockTable(e, t);
        if (n == null)
          throw Error(
            `bad rs block @ typeNumber:` + e + `/errorCorrectLevel:` + t,
          );
        for (var i = n.length / 3, a = [], o = 0; o < i; o++)
          for (
            var s = n[o * 3 + 0], c = n[o * 3 + 1], l = n[o * 3 + 2], u = 0;
            u < s;
            u++
          )
            a.push(new r(c, l));
        return a;
      }),
      (r.getRsBlockTable = function (e, t) {
        switch (t) {
          case n.L:
            return r.RS_BLOCK_TABLE[(e - 1) * 4 + 0];
          case n.M:
            return r.RS_BLOCK_TABLE[(e - 1) * 4 + 1];
          case n.Q:
            return r.RS_BLOCK_TABLE[(e - 1) * 4 + 2];
          case n.H:
            return r.RS_BLOCK_TABLE[(e - 1) * 4 + 3];
          default:
            return;
        }
      }),
      (t.exports = r));
  }),
  _u = r((e, t) => {
    function n() {
      ((this.buffer = []), (this.length = 0));
    }
    ((n.prototype = {
      get: function (e) {
        var t = Math.floor(e / 8);
        return ((this.buffer[t] >>> (7 - (e % 8))) & 1) == 1;
      },
      put: function (e, t) {
        for (var n = 0; n < t; n++) this.putBit(((e >>> (t - n - 1)) & 1) == 1);
      },
      getLengthInBits: function () {
        return this.length;
      },
      putBit: function (e) {
        var t = Math.floor(this.length / 8);
        (this.buffer.length <= t && this.buffer.push(0),
          e && (this.buffer[t] |= 128 >>> (this.length % 8)),
          this.length++);
      },
    }),
      (t.exports = n));
  }),
  vu = r((e, t) => {
    for (
      var n = {
          glog: function (e) {
            if (e < 1) throw Error(`glog(` + e + `)`);
            return n.LOG_TABLE[e];
          },
          gexp: function (e) {
            for (; e < 0;) e += 255;
            for (; e >= 256;) e -= 255;
            return n.EXP_TABLE[e];
          },
          EXP_TABLE: Array(256),
          LOG_TABLE: Array(256),
        },
        r = 0;
      r < 8;
      r++
    )
      n.EXP_TABLE[r] = 1 << r;
    for (var r = 8; r < 256; r++)
      n.EXP_TABLE[r] =
        n.EXP_TABLE[r - 4] ^
        n.EXP_TABLE[r - 5] ^
        n.EXP_TABLE[r - 6] ^
        n.EXP_TABLE[r - 8];
    for (var r = 0; r < 255; r++) n.LOG_TABLE[n.EXP_TABLE[r]] = r;
    t.exports = n;
  }),
  yu = r((e, t) => {
    var n = vu();
    function r(e, t) {
      if (e.length == null) throw Error(e.length + `/` + t);
      for (var n = 0; n < e.length && e[n] == 0;) n++;
      this.num = Array(e.length - n + t);
      for (var r = 0; r < e.length - n; r++) this.num[r] = e[r + n];
    }
    ((r.prototype = {
      get: function (e) {
        return this.num[e];
      },
      getLength: function () {
        return this.num.length;
      },
      multiply: function (e) {
        for (
          var t = Array(this.getLength() + e.getLength() - 1), i = 0;
          i < this.getLength();
          i++
        )
          for (var a = 0; a < e.getLength(); a++)
            t[i + a] ^= n.gexp(n.glog(this.get(i)) + n.glog(e.get(a)));
        return new r(t, 0);
      },
      mod: function (e) {
        if (this.getLength() - e.getLength() < 0) return this;
        for (
          var t = n.glog(this.get(0)) - n.glog(e.get(0)),
            i = Array(this.getLength()),
            a = 0;
          a < this.getLength();
          a++
        )
          i[a] = this.get(a);
        for (var a = 0; a < e.getLength(); a++)
          i[a] ^= n.gexp(n.glog(e.get(a)) + t);
        return new r(i, 0).mod(e);
      },
    }),
      (t.exports = r));
  }),
  bu = r((e, t) => {
    var n = pu(),
      r = yu(),
      i = vu(),
      a = {
        PATTERN000: 0,
        PATTERN001: 1,
        PATTERN010: 2,
        PATTERN011: 3,
        PATTERN100: 4,
        PATTERN101: 5,
        PATTERN110: 6,
        PATTERN111: 7,
      },
      o = {
        PATTERN_POSITION_TABLE: [
          [],
          [6, 18],
          [6, 22],
          [6, 26],
          [6, 30],
          [6, 34],
          [6, 22, 38],
          [6, 24, 42],
          [6, 26, 46],
          [6, 28, 50],
          [6, 30, 54],
          [6, 32, 58],
          [6, 34, 62],
          [6, 26, 46, 66],
          [6, 26, 48, 70],
          [6, 26, 50, 74],
          [6, 30, 54, 78],
          [6, 30, 56, 82],
          [6, 30, 58, 86],
          [6, 34, 62, 90],
          [6, 28, 50, 72, 94],
          [6, 26, 50, 74, 98],
          [6, 30, 54, 78, 102],
          [6, 28, 54, 80, 106],
          [6, 32, 58, 84, 110],
          [6, 30, 58, 86, 114],
          [6, 34, 62, 90, 118],
          [6, 26, 50, 74, 98, 122],
          [6, 30, 54, 78, 102, 126],
          [6, 26, 52, 78, 104, 130],
          [6, 30, 56, 82, 108, 134],
          [6, 34, 60, 86, 112, 138],
          [6, 30, 58, 86, 114, 142],
          [6, 34, 62, 90, 118, 146],
          [6, 30, 54, 78, 102, 126, 150],
          [6, 24, 50, 76, 102, 128, 154],
          [6, 28, 54, 80, 106, 132, 158],
          [6, 32, 58, 84, 110, 136, 162],
          [6, 26, 54, 82, 110, 138, 166],
          [6, 30, 58, 86, 114, 142, 170],
        ],
        G15: 1335,
        G18: 7973,
        G15_MASK: 21522,
        getBCHTypeInfo: function (e) {
          for (var t = e << 10; o.getBCHDigit(t) - o.getBCHDigit(o.G15) >= 0;)
            t ^= o.G15 << (o.getBCHDigit(t) - o.getBCHDigit(o.G15));
          return ((e << 10) | t) ^ o.G15_MASK;
        },
        getBCHTypeNumber: function (e) {
          for (var t = e << 12; o.getBCHDigit(t) - o.getBCHDigit(o.G18) >= 0;)
            t ^= o.G18 << (o.getBCHDigit(t) - o.getBCHDigit(o.G18));
          return (e << 12) | t;
        },
        getBCHDigit: function (e) {
          for (var t = 0; e != 0;) (t++, (e >>>= 1));
          return t;
        },
        getPatternPosition: function (e) {
          return o.PATTERN_POSITION_TABLE[e - 1];
        },
        getMask: function (e, t, n) {
          switch (e) {
            case a.PATTERN000:
              return (t + n) % 2 == 0;
            case a.PATTERN001:
              return t % 2 == 0;
            case a.PATTERN010:
              return n % 3 == 0;
            case a.PATTERN011:
              return (t + n) % 3 == 0;
            case a.PATTERN100:
              return (Math.floor(t / 2) + Math.floor(n / 3)) % 2 == 0;
            case a.PATTERN101:
              return ((t * n) % 2) + ((t * n) % 3) == 0;
            case a.PATTERN110:
              return (((t * n) % 2) + ((t * n) % 3)) % 2 == 0;
            case a.PATTERN111:
              return (((t * n) % 3) + ((t + n) % 2)) % 2 == 0;
            default:
              throw Error(`bad maskPattern:` + e);
          }
        },
        getErrorCorrectPolynomial: function (e) {
          for (var t = new r([1], 0), n = 0; n < e; n++)
            t = t.multiply(new r([1, i.gexp(n)], 0));
          return t;
        },
        getLengthInBits: function (e, t) {
          if (1 <= t && t < 10)
            switch (e) {
              case n.MODE_NUMBER:
                return 10;
              case n.MODE_ALPHA_NUM:
                return 9;
              case n.MODE_8BIT_BYTE:
                return 8;
              case n.MODE_KANJI:
                return 8;
              default:
                throw Error(`mode:` + e);
            }
          else if (t < 27)
            switch (e) {
              case n.MODE_NUMBER:
                return 12;
              case n.MODE_ALPHA_NUM:
                return 11;
              case n.MODE_8BIT_BYTE:
                return 16;
              case n.MODE_KANJI:
                return 10;
              default:
                throw Error(`mode:` + e);
            }
          else if (t < 41)
            switch (e) {
              case n.MODE_NUMBER:
                return 14;
              case n.MODE_ALPHA_NUM:
                return 13;
              case n.MODE_8BIT_BYTE:
                return 16;
              case n.MODE_KANJI:
                return 12;
              default:
                throw Error(`mode:` + e);
            }
          else throw Error(`type:` + t);
        },
        getLostPoint: function (e) {
          for (var t = e.getModuleCount(), n = 0, r = 0; r < t; r++)
            for (var i = 0; i < t; i++) {
              for (var a = 0, o = e.isDark(r, i), s = -1; s <= 1; s++)
                if (!(r + s < 0 || t <= r + s))
                  for (var c = -1; c <= 1; c++)
                    i + c < 0 ||
                      t <= i + c ||
                      ((s != 0 || c != 0) &&
                        o == e.isDark(r + s, i + c) &&
                        a++);
              a > 5 && (n += 3 + a - 5);
            }
          for (var r = 0; r < t - 1; r++)
            for (var i = 0; i < t - 1; i++) {
              var l = 0;
              (e.isDark(r, i) && l++,
                e.isDark(r + 1, i) && l++,
                e.isDark(r, i + 1) && l++,
                e.isDark(r + 1, i + 1) && l++,
                (l == 0 || l == 4) && (n += 3));
            }
          for (var r = 0; r < t; r++)
            for (var i = 0; i < t - 6; i++)
              e.isDark(r, i) &&
                !e.isDark(r, i + 1) &&
                e.isDark(r, i + 2) &&
                e.isDark(r, i + 3) &&
                e.isDark(r, i + 4) &&
                !e.isDark(r, i + 5) &&
                e.isDark(r, i + 6) &&
                (n += 40);
          for (var i = 0; i < t; i++)
            for (var r = 0; r < t - 6; r++)
              e.isDark(r, i) &&
                !e.isDark(r + 1, i) &&
                e.isDark(r + 2, i) &&
                e.isDark(r + 3, i) &&
                e.isDark(r + 4, i) &&
                !e.isDark(r + 5, i) &&
                e.isDark(r + 6, i) &&
                (n += 40);
          for (var u = 0, i = 0; i < t; i++)
            for (var r = 0; r < t; r++) e.isDark(r, i) && u++;
          var d = Math.abs((100 * u) / t / t - 50) / 5;
          return ((n += d * 10), n);
        },
      };
    t.exports = o;
  }),
  xu = r((e, t) => {
    var n = mu(),
      r = gu(),
      i = _u(),
      a = bu(),
      o = yu();
    function s(e, t) {
      ((this.typeNumber = e),
        (this.errorCorrectLevel = t),
        (this.modules = null),
        (this.moduleCount = 0),
        (this.dataCache = null),
        (this.dataList = []));
    }
    var c = s.prototype;
    ((c.addData = function (e) {
      var t = new n(e);
      (this.dataList.push(t), (this.dataCache = null));
    }),
      (c.isDark = function (e, t) {
        if (e < 0 || this.moduleCount <= e || t < 0 || this.moduleCount <= t)
          throw Error(e + `,` + t);
        return this.modules[e][t];
      }),
      (c.getModuleCount = function () {
        return this.moduleCount;
      }),
      (c.make = function () {
        if (this.typeNumber < 1) {
          var e = 1;
          for (e = 1; e < 40; e++) {
            for (
              var t = r.getRSBlocks(e, this.errorCorrectLevel),
                n = new i(),
                o = 0,
                s = 0;
              s < t.length;
              s++
            )
              o += t[s].dataCount;
            for (var s = 0; s < this.dataList.length; s++) {
              var c = this.dataList[s];
              (n.put(c.mode, 4),
                n.put(c.getLength(), a.getLengthInBits(c.mode, e)),
                c.write(n));
            }
            if (n.getLengthInBits() <= o * 8) break;
          }
          this.typeNumber = e;
        }
        this.makeImpl(!1, this.getBestMaskPattern());
      }),
      (c.makeImpl = function (e, t) {
        ((this.moduleCount = this.typeNumber * 4 + 17),
          (this.modules = Array(this.moduleCount)));
        for (var n = 0; n < this.moduleCount; n++) {
          this.modules[n] = Array(this.moduleCount);
          for (var r = 0; r < this.moduleCount; r++) this.modules[n][r] = null;
        }
        (this.setupPositionProbePattern(0, 0),
          this.setupPositionProbePattern(this.moduleCount - 7, 0),
          this.setupPositionProbePattern(0, this.moduleCount - 7),
          this.setupPositionAdjustPattern(),
          this.setupTimingPattern(),
          this.setupTypeInfo(e, t),
          this.typeNumber >= 7 && this.setupTypeNumber(e),
          (this.dataCache ??= s.createData(
            this.typeNumber,
            this.errorCorrectLevel,
            this.dataList,
          )),
          this.mapData(this.dataCache, t));
      }),
      (c.setupPositionProbePattern = function (e, t) {
        for (var n = -1; n <= 7; n++)
          if (!(e + n <= -1 || this.moduleCount <= e + n))
            for (var r = -1; r <= 7; r++)
              t + r <= -1 ||
                this.moduleCount <= t + r ||
                ((0 <= n && n <= 6 && (r == 0 || r == 6)) ||
                (0 <= r && r <= 6 && (n == 0 || n == 6)) ||
                (2 <= n && n <= 4 && 2 <= r && r <= 4)
                  ? (this.modules[e + n][t + r] = !0)
                  : (this.modules[e + n][t + r] = !1));
      }),
      (c.getBestMaskPattern = function () {
        for (var e = 0, t = 0, n = 0; n < 8; n++) {
          this.makeImpl(!0, n);
          var r = a.getLostPoint(this);
          (n == 0 || e > r) && ((e = r), (t = n));
        }
        return t;
      }),
      (c.createMovieClip = function (e, t, n) {
        var r = e.createEmptyMovieClip(t, n),
          i = 1;
        this.make();
        for (var a = 0; a < this.modules.length; a++)
          for (var o = a * i, s = 0; s < this.modules[a].length; s++) {
            var c = s * i;
            this.modules[a][s] &&
              (r.beginFill(0, 100),
              r.moveTo(c, o),
              r.lineTo(c + i, o),
              r.lineTo(c + i, o + i),
              r.lineTo(c, o + i),
              r.endFill());
          }
        return r;
      }),
      (c.setupTimingPattern = function () {
        for (var e = 8; e < this.moduleCount - 8; e++)
          this.modules[e][6] ?? (this.modules[e][6] = e % 2 == 0);
        for (var t = 8; t < this.moduleCount - 8; t++)
          this.modules[6][t] ?? (this.modules[6][t] = t % 2 == 0);
      }),
      (c.setupPositionAdjustPattern = function () {
        for (
          var e = a.getPatternPosition(this.typeNumber), t = 0;
          t < e.length;
          t++
        )
          for (var n = 0; n < e.length; n++) {
            var r = e[t],
              i = e[n];
            if (this.modules[r][i] == null)
              for (var o = -2; o <= 2; o++)
                for (var s = -2; s <= 2; s++)
                  o == -2 || o == 2 || s == -2 || s == 2 || (o == 0 && s == 0)
                    ? (this.modules[r + o][i + s] = !0)
                    : (this.modules[r + o][i + s] = !1);
          }
      }),
      (c.setupTypeNumber = function (e) {
        for (var t = a.getBCHTypeNumber(this.typeNumber), n = 0; n < 18; n++) {
          var r = !e && ((t >> n) & 1) == 1;
          this.modules[Math.floor(n / 3)][(n % 3) + this.moduleCount - 8 - 3] =
            r;
        }
        for (var n = 0; n < 18; n++) {
          var r = !e && ((t >> n) & 1) == 1;
          this.modules[(n % 3) + this.moduleCount - 8 - 3][Math.floor(n / 3)] =
            r;
        }
      }),
      (c.setupTypeInfo = function (e, t) {
        for (
          var n = (this.errorCorrectLevel << 3) | t,
            r = a.getBCHTypeInfo(n),
            i = 0;
          i < 15;
          i++
        ) {
          var o = !e && ((r >> i) & 1) == 1;
          i < 6
            ? (this.modules[i][8] = o)
            : i < 8
              ? (this.modules[i + 1][8] = o)
              : (this.modules[this.moduleCount - 15 + i][8] = o);
        }
        for (var i = 0; i < 15; i++) {
          var o = !e && ((r >> i) & 1) == 1;
          i < 8
            ? (this.modules[8][this.moduleCount - i - 1] = o)
            : i < 9
              ? (this.modules[8][15 - i - 1 + 1] = o)
              : (this.modules[8][15 - i - 1] = o);
        }
        this.modules[this.moduleCount - 8][8] = !e;
      }),
      (c.mapData = function (e, t) {
        for (
          var n = -1,
            r = this.moduleCount - 1,
            i = 7,
            o = 0,
            s = this.moduleCount - 1;
          s > 0;
          s -= 2
        )
          for (s == 6 && s--; ;) {
            for (var c = 0; c < 2; c++)
              if (this.modules[r][s - c] == null) {
                var l = !1;
                (o < e.length && (l = ((e[o] >>> i) & 1) == 1),
                  a.getMask(t, r, s - c) && (l = !l),
                  (this.modules[r][s - c] = l),
                  i--,
                  i == -1 && (o++, (i = 7)));
              }
            if (((r += n), r < 0 || this.moduleCount <= r)) {
              ((r -= n), (n = -n));
              break;
            }
          }
      }),
      (s.PAD0 = 236),
      (s.PAD1 = 17),
      (s.createData = function (e, t, n) {
        for (
          var o = r.getRSBlocks(e, t), c = new i(), l = 0;
          l < n.length;
          l++
        ) {
          var u = n[l];
          (c.put(u.mode, 4),
            c.put(u.getLength(), a.getLengthInBits(u.mode, e)),
            u.write(c));
        }
        for (var d = 0, l = 0; l < o.length; l++) d += o[l].dataCount;
        if (c.getLengthInBits() > d * 8)
          throw Error(
            `code length overflow. (` + c.getLengthInBits() + `>` + d * 8 + `)`,
          );
        for (
          c.getLengthInBits() + 4 <= d * 8 && c.put(0, 4);
          c.getLengthInBits() % 8 != 0;
        )
          c.putBit(!1);
        for (
          ;
          !(
            c.getLengthInBits() >= d * 8 ||
            (c.put(s.PAD0, 8), c.getLengthInBits() >= d * 8)
          );
        )
          c.put(s.PAD1, 8);
        return s.createBytes(c, o);
      }),
      (s.createBytes = function (e, t) {
        for (
          var n = 0,
            r = 0,
            i = 0,
            s = Array(t.length),
            c = Array(t.length),
            l = 0;
          l < t.length;
          l++
        ) {
          var u = t[l].dataCount,
            d = t[l].totalCount - u;
          ((r = Math.max(r, u)), (i = Math.max(i, d)), (s[l] = Array(u)));
          for (var f = 0; f < s[l].length; f++) s[l][f] = 255 & e.buffer[f + n];
          n += u;
          var p = a.getErrorCorrectPolynomial(d),
            m = new o(s[l], p.getLength() - 1).mod(p);
          c[l] = Array(p.getLength() - 1);
          for (var f = 0; f < c[l].length; f++) {
            var h = f + m.getLength() - c[l].length;
            c[l][f] = h >= 0 ? m.get(h) : 0;
          }
        }
        for (var g = 0, f = 0; f < t.length; f++) g += t[f].totalCount;
        for (var _ = Array(g), ee = 0, f = 0; f < r; f++)
          for (var l = 0; l < t.length; l++)
            f < s[l].length && (_[ee++] = s[l][f]);
        for (var f = 0; f < i; f++)
          for (var l = 0; l < t.length; l++)
            f < c[l].length && (_[ee++] = c[l][f]);
        return _;
      }),
      (t.exports = s));
  }),
  Su = r((e, t) => {
    var n = xu(),
      r = hu(),
      i = function (e, t) {
        t ||= {};
        var i = new n(t.typeNumber || -1, t.errorCorrectLevel || r.H);
        return (i.addData(e), i.make(), i);
      };
    ((i.ErrorCorrectLevel = r), (t.exports = i));
  }),
  Cu = `RuVnOcF9yRI-`,
  wu = `QhysrBJX1dU-`,
  Tu = t(Su(), 1),
  Eu = (function (e) {
    return (
      (e[(e.L = 1)] = `L`),
      (e[(e.M = 0)] = `M`),
      (e[(e.Q = 3)] = `Q`),
      (e[(e.H = 2)] = `H`),
      e
    );
  })({});
function Du(e, t, n) {
  let r = e.length,
    i = e[0].length,
    a = (r + 2) * i,
    o = new Uint8Array(40 + a),
    s = 0;
  ((o[s++] = 71),
    (o[s++] = 73),
    (o[s++] = 70),
    (o[s++] = 56),
    (o[s++] = 57),
    (o[s++] = 97),
    (o[s++] = r),
    (o[s++] = 0),
    (o[s++] = i),
    (o[s++] = 0),
    C(
      t != `transparent` || n != `transparent`,
      `Trying to use transparent for both colors in QR`,
    ),
    (o[s++] = 161),
    (o[s++] = 0),
    (o[s++] = 0),
    t == `transparent`
      ? ((o[s++] = 0), (o[s++] = 0), (o[s++] = 0))
      : ((o[s++] = t[0]), (o[s++] = t[1]), (o[s++] = t[2])),
    n == `transparent`
      ? ((o[s++] = 0), (o[s++] = 0), (o[s++] = 0))
      : ((o[s++] = n[0]), (o[s++] = n[1]), (o[s++] = n[2])),
    (o[s++] = 255),
    (o[s++] = 255),
    (o[s++] = 255),
    (o[s++] = 255),
    (o[s++] = 255),
    (o[s++] = 255),
    (t == `transparent` || n == `transparent`) &&
      ((o[s++] = 33),
      (o[s++] = 249),
      (o[s++] = 4),
      (o[s++] = 1),
      (o[s++] = 0),
      (o[s++] = 0),
      (o[s++] = t == `transparent` ? 0 : 1),
      (o[s++] = 0)),
    (o[s++] = 44),
    (o[s++] = 0),
    (o[s++] = 0),
    (o[s++] = 0),
    (o[s++] = 0),
    (o[s++] = r),
    (o[s++] = 0),
    (o[s++] = i),
    (o[s++] = 0),
    (o[s++] = 0),
    (o[s++] = 7));
  for (let t = 0; t < e.length; t++) {
    ((o[s++] = r + 1), (o[s++] = 128));
    for (let n = 0; n < e.length; n++) o[s++] = +!e[t][n];
  }
  return ((o[s++] = 1), (o[s++] = 129), (o[s++] = 0), (o[s++] = 59), o);
}
function Ou(
  e,
  {
    activeBitColor: t = [33, 35, 40],
    inactiveBitColor: n = [255, 255, 255],
    borderWidth: r = 3,
  } = {},
  i = {},
) {
  let a = (0, Tu.default)(e, i).modules;
  if (!a) return null;
  let o = [];
  for (let e = 0; e < r; e++) o.push(Array(a.length + r * 2).fill(!1));
  for (let e = 0; e < a.length; e++)
    o.push([
      ...Array.from({ length: r }, () => !1),
      ...a[e],
      ...Array.from({ length: r }, () => !1),
    ]);
  for (let e = 0; e < r; e++) o.push(Array(a.length + r * 2).fill(!1));
  return Du(o, t, n);
}
function ku(e) {
  let {
      quality: t = 0,
      children: n,
      className: r,
      activeBitColor: i = [33, 35, 40],
      inactiveBitColor: a = [255, 255, 255],
      borderWidth: o = 3,
      typeNumber: s = 6,
    } = e,
    c = Au(n, {
      typeNumber: s,
      errorCorrectLevel: t,
      activeBitColor: i,
      inactiveBitColor: a,
      borderWidth: o,
    });
  if (!c) return null;
  let l = `rgb(${a[0]}, ${a[1]}, ${a[2]})`;
  return (0, W.jsx)(`div`, {
    className: (0, hn.default)(Cu, r),
    style: { "--qr-bright-color": l },
    children: (0, W.jsx)(`img`, { className: wu, src: c, alt: `` }),
  });
}
function Au(e, t) {
  let {
    typeNumber: n,
    errorCorrectLevel: r,
    activeBitColor: i,
    inactiveBitColor: a,
    borderWidth: o,
  } = t;
  return (0, U.useMemo)(() => {
    let t = Ou(
      e,
      { activeBitColor: i, inactiveBitColor: a, borderWidth: o },
      { typeNumber: n, errorCorrectLevel: r },
    );
    return t ? `data:image/gif;base64,${(0, Rt.fromByteArray)(t)}` : null;
  }, [e, n, r, i, a, o]);
}
var ju = `WrkY9vjgO-o-`,
  Mu = `S5cukRF3668-`,
  Nu = `_-8GxbX7BdEU-`;
function Pu(e) {
  let {
      transport: t,
      onComplete: n,
      onStatusChange: r,
      platform: i,
      styling: o = `default`,
      activeBitValue: s = 255,
      preloadedSession: c,
    } = e,
    {
      eStatus: l,
      strChallengeURL: u,
      strClientID: d,
      bHadRemoteInteraction: f,
      reset: p,
      setTokenToRevoke: m,
    } = Ic({
      transport: t,
      onComplete: n,
      onDeviceDetails: a.IN_STEAMUI ? Rc : zc,
      preloaded: c,
    });
  (0, U.useEffect)(() => r && r(l), [r, l]);
  let h = l === 2 && u ? u : a.STORE_BASE_URL,
    g = l === 0 || l === 1 || f,
    _ = l === 4,
    ee = l === 3,
    v = ee
      ? (0, W.jsx)(zu, {})
      : _
        ? (0, W.jsx)(Lu, { reset: p })
        : g
          ? (0, W.jsx)(Iu, { size: `small` })
          : null,
    te = g || _ || ee;
  (0, U.useEffect)(() => {
    e.refreshInfo?.login_token_id && m(e.refreshInfo.login_token_id);
  }, [e.refreshInfo, m]);
  let ne = a.EUNIVERSE !== 1,
    re = `rgb(${s}, ${s}, ${s})`;
  return (0, W.jsx)(`div`, {
    className: Mu,
    children: (0, W.jsxs)(`div`, {
      style: { position: `relative` },
      children: [
        (0, W.jsx)(ku, {
          borderWidth: 0,
          activeBitColor: [21, 23, 28],
          inactiveBitColor: ne ? [s, 0, s] : [s, s, s],
          quality: Fu(h),
          className: (0, hn.default)(
            ju,
            o == `deck` && `LfwdeqflbQQ-`,
            o == `vr` && `DlrZAVV1kSM-`,
            te && `AME4jRbjhDs-`,
            ne && `FFV7o6c8MVE-`,
          ),
          children: h,
        }),
        te &&
          (0, W.jsx)(`div`, {
            className: `rAodxgQ4uTs-`,
            children: (0, W.jsx)(`div`, {
              className: `TxzArhnTYjU-`,
              style: { "--qr-bright-color": re },
              children: v,
            }),
          }),
      ],
    }),
  });
}
function Fu(e) {
  return e.length <= 90 ? Eu.Q : void 0;
}
function Iu(e) {
  let { size: t } = e;
  return (0, W.jsx)(`div`, {
    className: (0, hn.default)(
      Nu,
      t == `small` && `UmXCdAcOnc0-`,
      (t == `medium` || !t) && `dkcbyneVVOc-`,
      t == `large` && `y6M90bbs5Os-`,
    ),
  });
}
function Lu(e) {
  return (0, W.jsx)($n, {
    color: `dull`,
    variant: `ghost`,
    onClick: e.reset,
    children: (0, W.jsx)(Ru, {}),
  });
}
function Ru(e) {
  return (0, W.jsxs)(`svg`, {
    version: `1.1`,
    id: `Layer_2`,
    xmlns: `http://www.w3.org/2000/svg`,
    style: { width: `40px`, height: `40px`, cursor: `pointer` },
    x: `0px`,
    y: `0px`,
    width: `256px`,
    height: `256px`,
    viewBox: `0 0 256 256`,
    children: [
      (0, W.jsx)(`path`, {
        fill: `none`,
        stroke: `#fff`,
        strokeWidth: `30`,
        strokeLinecap: `round`,
        strokeMiterlimit: `10`,
        d: `M229.809,147.639 c-9.178,47.863-51.27,84.027-101.809,84.027c-57.253,0-103.667-46.412-103.667-103.666S70.747,24.334,128,24.334 c34.107,0,64.368,16.472,83.261,41.895`,
      }),
      (0, W.jsx)(`polygon`, {
        points: `147.639,108.361 245.755,10.166 245.834,108.361`,
        fill: `#fff`,
      }),
    ],
  });
}
function zu() {
  return (0, W.jsx)(`svg`, {
    version: `1.1`,
    id: `base`,
    xmlns: `http://www.w3.org/2000/svg`,
    style: { width: `45px`, height: `45px` },
    x: `0px`,
    y: `0px`,
    width: `256px`,
    height: `256px`,
    viewBox: `0 0 256 256`,
    children: (0, W.jsx)(`polyline`, {
      fill: `none`,
      stroke: `#fff`,
      strokeWidth: `24`,
      strokeLinecap: `round`,
      strokeLinejoin: `round`,
      strokeMiterlimit: `10`,
      points: `49.5,147.75 95,210.75 206.5,45.25 `,
    }),
  });
}
var Bu = (0, U.createContext)(!1),
  Vu = () => (0, U.useContext)(Bu);
function Hu() {
  return (0, W.jsx)(`div`, {
    className: Uc,
    children: (0, W.jsx)(xd, {
      reset: () => window.location.reload(),
      failure: $.Generic,
    }),
  });
}
function Uu(e) {
  Gd(e.redirectUrl);
  let t = (t) => {
    let { strRefreshToken: n } = t;
    ic(n).then(
      (t) => e.onComplete(t),
      () => e.onComplete(tc.k_PrimaryDomainFail),
    );
  };
  return (0, W.jsx)(Wu, {
    ...e,
    creationRedirectUrl: e.redirectUrl,
    onSuccess: t,
    embedded: e.theme === `modal`,
  });
}
function Wu(e) {
  let { embedded: t, children: n, ...r } = e;
  return (0, W.jsx)(Oe, {
    children: (0, W.jsx)(Bu.Provider, {
      value: t ?? !1,
      children: (0, W.jsxs)(`div`, {
        className: Uc,
        children: [(0, W.jsx)(Yu, { ...r }), n],
      }),
    }),
  });
}
function Gu(e) {
  if (Ke()) return null;
  let { variant: t } = e;
  return typeof t == `function`
    ? (0, W.jsx)(Nd, { onClick: t, children: A.Localize(`#Login_Help_SignIn`) })
    : (0, W.jsx)(Nd, {
        href: `${a.HELP_BASE_URL}wizard/HelpWithLogin?redir=${encodeURIComponent(location.href)}`,
        children: A.Localize(`#Login_Help_SignIn`),
      });
}
function Ku(e) {
  let { variant: t, redirectUrl: n } = e;
  if (typeof t == `function`)
    return (0, W.jsx)(Nd, {
      inline: !0,
      onClick: t,
      children: A.Localize(`#Login_CreateAccount`),
    });
  {
    let e = n ? `?redir=${encodeURIComponent(n)}` : ``;
    switch (t ?? `normal`) {
      default:
      case `normal`:
        return (0, W.jsx)(Nd, {
          inline: !0,
          href: `${a.STORE_BASE_URL}join/${e}`,
          children: A.Localize(`#Login_CreateAccount`),
        });
      case `partner`:
        return (0, W.jsx)(Nd, {
          inline: !0,
          href: `${a.PARTNER_BASE_URL}${e}`,
          children: A.Localize(`#Login_CreateSteamworksAccount`),
        });
      case `none`:
        return null;
    }
  }
}
function qu(e) {
  let { launcherType: t, variant: n, redirectUrl: r } = e;
  if (t === 8 || n == `none`) return null;
  let i = t !== void 0,
    a;
  switch (n ?? `normal`) {
    default:
    case `normal`:
      a = `#Login_NoSteamAccount`;
      break;
    case `partner`:
      a = `#Login_NoSteamworksAccount`;
  }
  return (0, W.jsxs)(`div`, {
    className: (0, hn.default)(Ql, i && `Kv7QdVcb2UI-`),
    children: [
      (0, W.jsx)(`span`, { className: $l, children: A.Localize(a) }),
      (0, W.jsx)(Ku, { variant: n, redirectUrl: r }),
    ],
  });
}
function Ju() {
  let e =
    window?.location &&
    new URLSearchParams(window.location.search).getAll(`need_password`).pop();
  return e !== void 0 && e !== `false` && e !== `0`;
}
function Yu(e) {
  let {
      transport: t,
      onSuccess: n,
      platform: r,
      autoFocus: i,
      refreshInfo: o,
      renderSuccess: s = () => (0, W.jsx)(Wd, {}),
      lastResult: c,
      joinLinkVariant: l,
      defaultAccountName: u,
      secureComputer: d = !0,
      isProbablySharedPC: f = !1,
      onShowAgreement: p,
      creationRedirectUrl: m,
      preloadedQRSession: h,
    } = e,
    g = a.IN_STEAMUI ? Rc : zc,
    _ = a.IN_STEAMUI ? (e) => SteamClient.Auth.GetSteamGuardData(e) : null,
    ee = Ju(),
    v = Vc({
      transport: t,
      platform: r,
      onSuccess: n,
      refreshInfo: o,
      onDeviceDetails: g,
      onGetMachineAuth: _,
      defaultAccountName: u,
      secureComputer: d,
      isProbablySharedPC: f,
      onShowAgreement: p,
    }),
    te = Vu(),
    ne = (0, U.useId)();
  if (c != null && c != 1)
    return (0, W.jsx)(`div`, {
      className: Uc,
      children: (0, W.jsx)(xd, {
        reset: () => window.location.reload(),
        failure: $.Generic,
        errorReference: c.toString(),
        extendedErrorMessage: v.password.strExtendedErrorMessage,
      }),
    });
  let ie = a.EREALM !== ue.k_ESteamRealmChina;
  if (!v.bInPasswordFlow) {
    let n = (0, W.jsxs)(`div`, {
      className: (0, hn.default)(Wc, te && `rvRWTXNBcK4-`),
      children: [
        (0, W.jsx)(Qu, {
          strAccountName: v.strAccountName,
          onAccountNameChange: v.onAccountNameChange,
          strPassword: v.strPassword,
          onPasswordChange: v.onPasswordChange,
          bRememberMe: v.bRememberMe,
          onRememberMeChange: v.onRememberMeChange,
          onSubmit: v.onPasswordSubmit,
          status: v.password.eStatus,
          autoFocus: i,
          secureComputer: d,
          refreshInfo: e.refreshInfo,
        }),
        ie &&
          (0, W.jsx)(ed, {
            transport: t,
            onQRStatusChange: v.onQRStatusChange,
            onComplete: v.onComplete,
            platform: r,
            refreshInfo: o,
            preloadedQRSession: h,
          }),
      ],
    });
    if (te) {
      let t = a.IN_STEAMUI,
        r = re()?.LAUNCHER_TYPE;
      return (0, W.jsxs)(Fd, {
        className: (0, hn.default)(Yl, t && `Kv7QdVcb2UI-`),
        children: [
          !t && !1,
          !e.refreshInfo &&
            (0, W.jsx)(Bd, {
              realm: a.EREALM,
              launcherType: r,
              className: `_19NDBszdpt8-`,
              onBack: e.onBack,
            }),
          (0, W.jsx)(Xu, { refreshInfo: o }),
          n,
          (0, W.jsxs)(`div`, {
            className: (0, hn.default)(Zl, t && `Kv7QdVcb2UI-`),
            children: [
              (0, W.jsx)(Gu, { variant: e.helpLinkVariant }),
              (0, W.jsx)(qu, { launcherType: r, variant: l, redirectUrl: m }),
            ],
          }),
        ],
      });
    }
    let s = (0, W.jsxs)(`div`, {
      style: {
        display: `flex`,
        flexDirection: `column`,
        gap: `8px`,
        margin: `8px 16px`,
      },
      children: [
        !1,
        (0, W.jsx)(`h2`, {
          className: Ul,
          id: ne,
          children: e.refreshInfo
            ? A.Localize(`#Login_RefreshSignIn`)
            : A.Localize(`#Login_SignInTitle`),
        }),
        (0, W.jsx)(Xu, { refreshInfo: e.refreshInfo }),
      ],
    });
    return (0, W.jsxs)(zd, {
      title: s,
      titleId: ne,
      children: [ee && (0, W.jsx)(Zu, {}), n],
    });
  }
  let y = v.password.eStatus;
  switch (y) {
    case 13:
      return e.renderLoading
        ? (0, W.jsx)(W.Fragment, { children: e.renderLoading() })
        : (0, W.jsx)(vd, {});
    case 5:
    case 11:
    case 3:
    case 10:
      return (
        C(
          !!v.password.strAccountName,
          `Missing account name in login session for status`,
          y,
        ),
        (0, W.jsx)(Cd, {
          type: y === 5 || y === 11 ? `mobile` : `email`,
          onSubmitCode: v.password.addCode,
          status: y,
          associatedLabel: v.password.strConfirmationAssociatedMessage,
          accountName: v.password.strAccountName,
          onBack: v.password.goBack,
          onCodeHelp: e.onCodeHelp,
        })
      );
    case 6:
    case 4:
      return (
        C(
          !!v.password.strAccountName,
          `Missing account name in login session for status`,
          y,
        ),
        (0, W.jsx)(Md, {
          type: y === 6 ? `mobile` : `email`,
          accountName: v.password.strAccountName,
          onUseCodeOverride: v.password.useCodeOverride,
          onCodeHelp: e.onCodeHelp,
        })
      );
    case 16:
      return (0, W.jsx)(Sd, { reset: v.password.reset });
    case 15:
      return (0, W.jsx)(xd, {
        reset: v.password.reset,
        failure: v.password.eFailureState,
        onRequestOffline: v.onTryOffline,
        errorReference: v.password.strErrorReference,
        extendedErrorMessage: v.password.strExtendedErrorMessage,
      });
    case 14:
      return (0, W.jsx)(zd, { compact: !0, children: s() });
    default:
      return (
        Q(`Unknown Phase: ${y}`),
        (0, W.jsx)(xd, {
          reset: v.password.reset,
          failure: $.Generic,
          onRequestOffline: v.onTryOffline,
          errorReference: v.password.strErrorReference,
          extendedErrorMessage: v.password.strExtendedErrorMessage,
        })
      );
  }
}
function Xu(e) {
  if (!e.refreshInfo) return null;
  let t;
  switch (e.refreshInfo?.reason ?? 2) {
    case 2:
    case 7:
    default:
      t = `#Login_RefreshReason_Generic`;
      break;
    case 6:
      t = `#Login_RefreshReason_LoggedInElsewhere`;
      break;
    case 34:
      t = `#Login_RefreshReason_LogonSessionReplaced`;
      break;
    case 5:
      t = `#Login_RefreshReason_InvalidPassword`;
      break;
    case 26:
      t = `#Login_RefreshReason_Revoked`;
      break;
    case 27:
      t = `#Login_RefreshReason_Expired`;
      break;
    case 49:
      t = `#Login_RefreshReason_PasswordRequiredToKickSession`;
      break;
    case 43:
      t = `#Login_RefreshReason_AccountDisabled`;
      break;
    case 69:
      t = `#Login_RefreshReason_ParentalControlRestricted`;
      break;
    case 84:
      t = `#Login_RefreshReason_RateLimitExceeded`;
  }
  return (0, W.jsxs)(`div`, {
    className: Xl,
    children: [
      (0, W.jsx)(`div`, {
        className: Bl,
        children: A.Localize(`#Login_RefreshSignIn`),
      }),
      (0, W.jsx)(`div`, { className: Vl, children: A.Localize(t) }),
    ],
  });
}
function Zu() {
  return (0, W.jsx)(`div`, {
    className: Xc,
    children: A.Localize(`#Login_ConfirmCredentials`),
  });
}
function Qu(e) {
  let {
      onSubmit: t,
      status: n,
      autoFocus: r,
      refreshInfo: i,
      strAccountName: o,
      onAccountNameChange: s,
      strPassword: c,
      onPasswordChange: l,
      bRememberMe: u,
      onRememberMeChange: d,
      secureComputer: f = !0,
    } = e,
    [p, m] = (0, U.useState)(!1),
    h = Vu(),
    g = qd(),
    _ = () => {
      t().then(() => {
        g() && m(!1);
      });
    },
    ee = n === 1 || n === 13,
    v = n === 2 && !p,
    te = v
      ? (0, W.jsx)(_d, { children: A.Localize(`#Login_CheckCredentials`) })
      : (0, W.jsx)(_d, { children: `\xA0` }),
    ne = r && !o,
    re = r && !!o,
    ie = !!e.refreshInfo,
    y = (0, U.useId)(),
    ae = (0, U.useId)();
  return (0, W.jsxs)(Pd, {
    onSubmit: _,
    className: cl,
    children: [
      (0, W.jsx)(od, {
        tone: v ? `danger` : void 0,
        label: (0, W.jsx)(sd, {
          highlight: !0,
          inputId: y,
          children: A.Localize(`#Login_SignIn_WithAccountName`),
        }),
        value: o,
        onChange: (e) => {
          (m(!0), s(e));
        },
        autoFocus: ne,
        disabled: ie,
        id: y,
      }),
      (0, W.jsx)(od, {
        tone: v ? `danger` : void 0,
        label: (0, W.jsx)(sd, {
          inputId: ae,
          children: A.Localize(`#Login_Password`),
        }),
        value: c,
        onChange: (e) => {
          (m(!0), l(e));
        },
        type: `password`,
        autoFocus: re,
        id: ae,
      }),
      f
        ? (0, W.jsx)(ud, {
            label: A.Localize(`#Login_RememberMe_Short`),
            title: A.Localize(`#Login_RememberMe_Tooltip`),
            value: u,
            onChange: d,
          })
        : (0, W.jsx)(`div`, {
            className: Hl,
            children: A.Localize(`#Login_InsecureComputer`),
          }),
      (0, W.jsx)(fd, { loading: ee, refreshLogin: ie }),
      te,
      !h &&
        (0, W.jsx)(Nd, {
          href: `${a.HELP_BASE_URL}wizard/HelpWithLogin?redir=${encodeURIComponent(location.href)}`,
          align: `center`,
          children: A.Localize(`#Login_Help_SignIn`),
        }),
    ],
  });
}
var $u = 700;
function ed(e) {
  let t = ge(),
    [n, r] = (0, U.useState)(!1);
  return (
    (0, U.useLayoutEffect)(() => {
      r(t.ownerWindow.screen.width < $u);
    }, [t.ownerWindow]),
    je(t.ownerWindow, `resize`, () => {
      r(t.ownerWindow.screen.width < $u);
    }),
    (0, W.jsx)(`div`, {
      className: Zc,
      children: n ? (0, W.jsx)(rd, { ...e }) : (0, W.jsx)(nd, { ...e }),
    })
  );
}
function td(e) {
  let t =
    a.STORE_BASE_URL +
    `join/?guest=1&purchaseType=gift&checkout=1&redir=` +
    encodeURIComponent(e.redirectURL);
  return (0, W.jsx)(`div`, {
    className: Kc,
    children: (0, W.jsx)(zd, {
      compact: !0,
      children: (0, W.jsxs)(`div`, {
        className: Gc,
        children: [
          (0, W.jsx)(`div`, {
            className: Jc,
            children: mn(
              A.Localize(`#Login_Guest`),
              (0, W.jsx)(`a`, {
                href: `${t}`,
                style: { textDecoration: `underline` },
              }),
            ),
          }),
          (0, W.jsx)(`a`, {
            className: Yc,
            href: `${t}`,
            children: (0, W.jsx)(`button`, {
              className: vl,
              children: A.Localize(`#Login_GuestContinue`),
            }),
          }),
        ],
      }),
    }),
  });
}
function nd(e) {
  return (0, W.jsx)(ad, { ...e });
}
function rd(e) {
  let [t, n] = (0, U.useState)(!1);
  return t
    ? (0, W.jsx)(ad, { ...e, bShowHideButton: !0, setShowQR: n })
    : (0, W.jsx)(id, { setShowQR: n });
}
function id(e) {
  return (0, W.jsxs)(`div`, {
    className: Qc,
    children: [
      (0, W.jsx)(`div`, {
        className: $c,
        children: A.Localize(`#Login_MobileFlow_New`),
      }),
      (0, W.jsx)(`div`, {
        className: el,
        children: (0, W.jsx)(`div`, {
          className: el,
          children: A.Localize(`#Login_MobileFlow_SignIn_ScanQR`),
        }),
      }),
      (0, W.jsx)(`button`, {
        type: `button`,
        className: tl,
        onClick: () => e.setShowQR(!0),
        children: A.Localize(`#Login_MobileFlow_ShowMeQR_Button`),
      }),
      (0, W.jsx)(`a`, {
        href: `${a.STORE_BASE_URL}mobile`,
        className: nl,
        children: A.Localize(`#Login_JoinBeta_Button`),
      }),
    ],
  });
}
function ad(e) {
  let {
    onQRStatusChange: t,
    transport: n,
    onComplete: r,
    platform: i,
    refreshInfo: o,
    preloadedQRSession: s,
    bShowHideButton: c = !1,
    setShowQR: l,
  } = e;
  return (0, W.jsxs)(`div`, {
    className: rl,
    children: [
      (0, W.jsx)(sd, {
        highlight: !0,
        children: A.Localize(`#Login_SignIn_OrWithQRCode`),
      }),
      (0, W.jsx)(`div`, {
        className: il,
        children: (0, W.jsx)(Pu, {
          onStatusChange: t,
          transport: n,
          onComplete: r,
          platform: i,
          refreshInfo: o,
          preloadedSession: s,
        }),
      }),
      c &&
        l &&
        (0, W.jsx)(`button`, {
          type: `button`,
          className: `X1WW6U5nVKQ-`,
          onClick: () => l(!1),
          children: A.Localize(`#Button_Hide`),
        }),
      (0, W.jsx)(`div`, {
        className: al,
        children: mn(
          A.Localize(`#Login_UseMobileAppForQR_Inline`),
          (0, W.jsx)(Nd, {
            href: `${a.STORE_BASE_URL}mobile`,
            align: `center`,
          }),
        ),
      }),
    ],
  });
}
function od(e) {
  let { label: t, error: n, tone: r, autoFocus: i, id: a, ...o } = e,
    s = r ?? (n ? `danger` : void 0);
  return (0, W.jsxs)(`div`, {
    className: ol,
    children: [
      typeof t == `string` ? (0, W.jsx)(sd, { inputId: a, children: t }) : t,
      n && (0, W.jsx)(ld, { type: `error`, children: n }),
      (0, W.jsx)(cd, { autoFocus: i, tone: s, id: a, ...o }),
    ],
  });
}
function sd(e) {
  let { children: t, inputId: n, highlight: r } = e;
  return (0, W.jsx)(`label`, {
    className: (0, hn.default)(ll, r && `jAjiX6ujKzY-`),
    htmlFor: n,
    children: t,
  });
}
function cd(e) {
  let {
    value: t,
    onChange: n,
    type: r = `text`,
    tone: i,
    className: a,
    autoFocus: o,
    disabled: s,
    id: c,
  } = e;
  return (0, W.jsx)(`input`, {
    value: t,
    type: r,
    autoFocus: o,
    onChange: (e) => n(e.target.value),
    className: (0, hn.default)(sl, i === `danger` && `kbZo38RXgJ0-`, a),
    disabled: s,
    id: c,
  });
}
function ld(e) {
  let { children: t, type: n } = e;
  return (0, W.jsx)(`div`, {
    className: (0, hn.default)(void 0, n === `error` && void 0),
    children: t,
  });
}
function ud(e) {
  let { label: t, title: n, onChange: r, value: i } = e,
    a = () => {
      r && r(!i);
    },
    o = (0, U.useId)();
  return (0, W.jsxs)(`div`, {
    role: `presentation`,
    className: ul,
    title: n,
    onClick: a,
    onKeyPress: (e) => {
      e.key == ` ` && (a(), e.preventDefault());
    },
    children: [
      (0, W.jsx)(dd, { labelledBy: o, value: i }),
      (0, W.jsx)(`label`, { id: o, className: dl, children: t }),
    ],
  });
}
function dd(e) {
  let { value: t, labelledBy: n } = e;
  return (0, W.jsx)(`div`, {
    tabIndex: 0,
    className: fl,
    "aria-labelledby": n,
    role: `checkbox`,
    "aria-checked": t,
    children:
      t &&
      (0, W.jsx)(`div`, {
        className: `GHsuNp6HqyY-`,
        children: (0, W.jsx)(du, { strokeWidth: 35 }),
      }),
  });
}
function fd(e) {
  let { refreshLogin: t, ...n } = e;
  return t &&
    `SteamClient` in globalThis &&
    `User` in SteamClient &&
    `StartShutdown` in SteamClient.User
    ? (0, W.jsx)(md, {})
    : (0, W.jsx)(pd, { ...n });
}
function pd(e) {
  return (0, W.jsx)(`div`, {
    className: ml,
    children: (0, W.jsx)(hd, { ...e, children: A.Localize(`#Login_SignIn`) }),
  });
}
function md() {
  return (0, W.jsxs)(`div`, {
    className: pl,
    children: [
      (0, W.jsx)(`button`, {
        className: yl,
        type: `submit`,
        children: A.Localize(`#Login_SignIn`),
      }),
      (0, W.jsx)(`button`, {
        className: hl,
        onClick: () => SteamClient.User.StartShutdown(!0),
        children: A.Localize(`#Login_ExitSteam`),
      }),
    ],
  });
}
function hd(e) {
  return (0, W.jsx)(gd, { type: `submit`, ...e });
}
function gd(e) {
  let { className: t, loading: n, disabled: r, children: i, ...a } = e,
    o = r || n;
  return (0, W.jsxs)(`button`, {
    className: (0, hn.default)(yl, n && `QAA-fChDQFA-`, t),
    disabled: o,
    ...a,
    children: [
      i,
      n &&
        (0, W.jsx)(`div`, {
          className: `_7C2-lQ9GWRA-`,
          children: (0, W.jsx)(yd, { size: `small` }),
        }),
    ],
  });
}
function _d(e) {
  let t = e.children || `\xA0`;
  return (0, W.jsx)(`div`, { className: xl, children: t });
}
function vd() {
  return (0, W.jsx)(zd, {
    compact: !0,
    children: (0, W.jsxs)(Fd, {
      alignItems: `center`,
      className: (0, hn.default)(au, a.IN_STEAMUI && `ZV64fnc7PdA-`),
      children: [
        (0, W.jsx)(Je, { size: `xlarge` }),
        (0, W.jsx)(`div`, {
          className: (0, hn.default)(El),
          children: A.Localize(
            a.IN_STEAMUI
              ? `#Login_ConnectingToSteam`
              : `#Login_LoadingAccountInfo`,
          ),
        }),
      ],
    }),
  });
}
function yd(e) {
  let { size: t } = e;
  return (0, W.jsx)(`div`, {
    className: (0, hn.default)(
      iu,
      t == `small` && `-GciojHJFJo-`,
      (t == `medium` || !t) && `aNnjBlEgXeE-`,
      t == `large` && `SkijseWcXzM-`,
    ),
  });
}
function bd(e) {
  return (0, W.jsx)(`div`, {
    className: ru,
    children: (0, W.jsx)(`button`, {
      className: gl,
      onClick: e.onRequestOffline,
      children: A.Localize(`#Login_GoOffline_Button`),
    }),
  });
}
function xd(e) {
  let {
      reset: t,
      failure: n,
      onRequestOffline: r,
      errorReference: i,
      extendedErrorMessage: o,
    } = e,
    { title: s, description: c } = Hc(n, o),
    l = a.IN_STEAMUI && n == $.Network;
  return (0, W.jsxs)(zd, {
    compact: !0,
    children: [
      (0, W.jsxs)(Fd, {
        alignItems: `center`,
        gap: 12,
        children: [
          (0, W.jsx)(`div`, { className: eu, children: s }),
          (0, W.jsx)(`div`, { className: tu, children: c }),
          l &&
            (0, W.jsx)(`div`, {
              className: `sH-b0kW7QCY-`,
              children: A.Localize(`#Login_GoOffline_Description`),
            }),
          (0, W.jsxs)(Id, {
            className: nu,
            children: [
              (0, W.jsx)(gd, {
                className: _l,
                onClick: t,
                children: A.Localize(`#Button_Retry`),
              }),
              l && r && (0, W.jsx)(bd, { onRequestOffline: r }),
            ],
          }),
        ],
      }),
      i &&
        (0, W.jsx)(`div`, {
          className: `La0SBF0lXr0-`,
          children: A.Localize(`#Login_Error_Reference`, i),
        }),
    ],
  });
}
function Sd(e) {
  let { reset: t } = e;
  return (0, W.jsx)(xd, { reset: t, failure: $.Generic });
}
function Cd(e) {
  let {
      type: t,
      onSubmitCode: n,
      status: r,
      accountName: i,
      associatedLabel: a,
      onBack: o,
    } = e,
    [s, c] = (0, U.useState)([]),
    [l, u] = (0, U.useState)(!1),
    [d, f] = (0, U.useState)(!1),
    [p, m] = (0, U.useState)(!1),
    [h, g] = (0, U.useState)(0),
    _ = t === `mobile`,
    ee = s.join(``),
    v = Nc(ee, p),
    te = (e) => {
      (f(!0),
        n(e).then(() => {
          (u(!1), f(!1));
        }));
    },
    ne = (e) => {
      (l || u(!0), c(e));
      let t = e.join(``);
      Nc(t, p) && te(t);
    },
    re = () => {
      v && te(ee);
    },
    ie = () => {
      (m(!p), c([]), n(``), g(h + 1));
    },
    y = !l && (r === 11 || r === 10),
    ae,
    b;
  return (
    p
      ? t === `mobile`
        ? ((b = (0, W.jsx)(Td, {})), (ae = `#Login_UseMobileCode`))
        : ((b = (0, W.jsx)(Td, {})), (ae = `#Login_UseEmailCode`))
      : ((b =
          t === `mobile`
            ? (0, W.jsx)(Ed, {})
            : (0, W.jsx)(Dd, { emailAddress: a })),
        (ae = `#Login_UseBackupCode`)),
    (0, W.jsx)(zd, {
      title: (0, W.jsx)(Bd, {}),
      compact: !0,
      children: (0, W.jsx)(Pd, {
        onSubmit: re,
        children: (0, W.jsxs)(Fd, {
          alignItems: `center`,
          gap: 14,
          children: [
            (0, W.jsx)(Od, { type: t, accountName: i }),
            (0, W.jsxs)(`div`, {
              className: kl,
              children: [
                (0, W.jsxs)(Fd, {
                  alignItems: `center`,
                  gap: 2,
                  children: [
                    y &&
                      (0, W.jsx)(_d, {
                        children: A.Localize(`#Login_IncorrectSteamGuard`),
                      }),
                    (0, W.jsx)(
                      Ld,
                      {
                        value: s,
                        onChange: ne,
                        tone: y ? `danger` : void 0,
                        loading: d,
                        backupCode: p,
                      },
                      h,
                    ),
                  ],
                }),
                b,
              ],
            }),
            _ &&
              (0, W.jsx)(Nd, {
                onClick: ie,
                align: `center`,
                children: A.Localize(ae),
              }),
            (0, W.jsx)(wd, { type: t, onCodeHelp: e.onCodeHelp }),
          ],
        }),
      }),
    })
  );
}
function wd(e) {
  if (Ke()) return null;
  let t, n;
  return (
    e.type === `mobile`
      ? ((t = `${a.HELP_BASE_URL}wizard/HelpWithLoginInfo?lost=8&issueid=402`),
        (n = A.Localize(`#Login_Help_AccessMobileApp`)))
      : ((t = `${a.HELP_BASE_URL}wizard/HelpWithSteamGuardCode`),
        (n = A.Localize(`#Login_Help_AccessEmail`))),
    e.onCodeHelp
      ? (0, W.jsx)(Nd, {
          onClick: () => e.onCodeHelp(t),
          align: `center`,
          children: n,
        })
      : (0, W.jsx)(Nd, { href: t, align: `center`, children: n })
  );
}
function Td() {
  return (0, W.jsx)(Id, {
    justifyContent: `space-evenly`,
    alignItems: `center`,
    className: Pl,
    children: (0, W.jsxs)(Fd, {
      children: [
        (0, W.jsx)(`div`, {
          className: Ll,
          children: A.Localize(`#Login_EnterBackupCode`),
        }),
        (0, W.jsx)(`div`, {
          className: wl,
          children: A.Localize(`#Login_EnterBackupCodeDescription`),
        }),
      ],
    }),
  });
}
function Ed() {
  return (0, W.jsxs)(Id, {
    justifyContent: `space-evenly`,
    alignItems: `center`,
    className: Fl,
    children: [
      (0, W.jsx)(`div`, {
        className: Ll,
        children: A.Localize(`#Login_EnterMobileCode`),
      }),
      (0, W.jsx)(Ad, { className: Al }),
    ],
  });
}
function Dd(e) {
  return (0, W.jsxs)(Id, {
    justifyContent: `space-evenly`,
    alignItems: `center`,
    className: Il,
    children: [
      (0, W.jsx)(Rd, {
        align: `center`,
        spacing: 6,
        children: (0, W.jsx)(`div`, {
          className: Rl,
          children: A.LocalizeReact(
            `#Login_EnterEmailCode`,
            (0, W.jsx)(`span`, { className: zl, children: e.emailAddress }),
          ),
        }),
      }),
      (0, W.jsx)(jd, { className: jl }),
    ],
  });
}
function Od(e) {
  let { accountName: t, type: n } = e,
    r =
      n === `mobile`
        ? A.Localize(`#Login_MobileProtectingAccount`)
        : A.Localize(`#Login_EmailProtectingAccount`),
    i = Vu();
  return (0, W.jsxs)(`div`, {
    className: Cl,
    children: [
      (0, W.jsx)(`div`, {
        className: wl,
        children: A.LocalizeReact(
          `#Login_ActiveAccountName`,
          (0, W.jsx)(`span`, { className: Tl, children: t }),
        ),
      }),
      !i && (0, W.jsx)(`div`, { className: `DSy9L5eaj5o-`, children: r }),
    ],
  });
}
function kd() {
  return (0, W.jsx)(Fd, {
    alignItems: `center`,
    children: (0, W.jsxs)(`div`, {
      className: Dl,
      children: [
        (0, W.jsx)(`img`, { src: me(fu), alt: `` }),
        (0, W.jsx)(`div`, {
          className: Ol,
          children: mn(A.Localize(`#Login_AwaitingMobileConfirmation`)),
        }),
      ],
    }),
  });
}
function Ad(e) {
  return (0, W.jsxs)(`svg`, {
    viewBox: `0 0 33 49`,
    fill: `currentColor`,
    className: e.className,
    children: [
      (0, W.jsx)(`path`, {
        fill: `currentColor`,
        fillRule: `evenodd`,
        clipRule: `evenodd`,
        d: `M28 47.1106C29.1046 47.1106 30 46.2151 30 45.1106L30 3.72705C30 2.62248 29.1046 1.72705 28 1.72705L5 1.72705C3.89544 1.72705 3 2.62248 3 3.72705L3 45.1106C3 46.2151 3.89543 47.1106 5 47.1106L28 47.1106ZM5.68119 5.82741L27.3188 5.82741L27.3188 42.7772H5.68119L5.68119 5.82741ZM20.9999 44.944C20.9999 45.3429 20.6766 45.6662 20.2777 45.6662L12.7221 45.6662C12.3233 45.6662 11.9999 45.3429 11.9999 44.944C11.9999 44.5451 12.3233 44.2218 12.7221 44.2218H20.2777C20.6766 44.2218 20.9999 44.5451 20.9999 44.944ZM17.2778 4.44406C17.6767 4.44406 18 4.12071 18 3.72184C18 3.32296 17.6767 2.99962 17.2778 2.99962L15.7222 2.99962C15.3233 2.99962 15 3.32296 15 3.72184C15 4.12071 15.3233 4.44406 15.7222 4.44406L17.2778 4.44406Z`,
      }),
      (0, W.jsx)(`path`, {
        fill: `currentColor`,
        d: `M22.2456 22.4164C22.2456 21.6666 22.8127 21.0002 23.6228 21.0002C24.3519 21.0002 25 21.6666 25 22.4164C25 23.1661 24.3519 23.8325 23.6228 23.8325C22.8937 23.8325 22.2456 23.1661 22.2456 22.4164Z`,
      }),
      (0, W.jsx)(`path`, {
        fill: `currentColor`,
        d: `M18.6812 22.4164C18.6812 21.6666 19.2483 21.0002 20.0584 21.0002C20.8685 21.0002 21.5166 21.6666 21.4355 22.4164C21.4355 23.1661 20.8685 23.8325 20.0584 23.8325C19.3293 23.8325 18.6812 23.1661 18.6812 22.4164Z`,
      }),
      (0, W.jsx)(`path`, {
        fill: `currentColor`,
        d: `M15.1977 22.4164C15.1977 21.6666 15.7648 21.0002 16.5749 21.0002C17.304 21.0002 17.9521 21.6666 17.9521 22.4164C17.9521 23.1661 17.385 23.8325 16.5749 23.8325C15.8458 23.8325 15.1977 23.1661 15.1977 22.4164Z`,
      }),
      (0, W.jsx)(`path`, {
        fill: `currentColor`,
        d: `M11.7143 22.4164C11.7143 21.6666 12.2814 21.0002 13.0915 21.0002C13.8206 21.0002 14.4686 21.6666 14.4686 22.4164C14.4686 23.1661 13.9016 23.8325 13.0915 23.8325C12.3624 23.8325 11.7143 23.1661 11.7143 22.4164Z`,
      }),
      (0, W.jsx)(`path`, {
        fill: `currentColor`,
        d: `M8.14983 22.4164C8.14983 21.6666 8.7169 21.0002 9.527 21.0002C10.3371 21.0002 10.9852 21.6666 10.9042 22.4164C10.9042 23.1661 10.3371 23.8325 9.527 23.8325C8.79791 23.8325 8.14983 23.1661 8.14983 22.4164Z`,
      }),
    ],
  });
}
function jd(e) {
  return (0, W.jsx)(`svg`, {
    viewBox: `0 0 58 56`,
    fill: `none`,
    className: e.className,
    children: (0, W.jsx)(`path`, {
      d: `M57.9352 24.5887C57.8463 24.233 57.8463 23.8774 57.6684 23.5217C57.4017 22.8993 57.046 22.4547 56.5125 22.0101L49.577 16.4083V10.9844C49.577 8.85041 47.8876 7.16098 45.7536 7.16098H38.1956L31.5269 1.73706C30.1042 0.581137 28.0591 0.581137 26.6364 1.73706L19.9677 7.16098H12.4097C10.2757 7.16098 8.58631 8.93932 8.58631 10.9844V16.4083L1.56188 22.0101C1.02838 22.3658 0.672713 22.8993 0.405962 23.5217V23.6106C0.228128 24.1441 0.050293 24.5887 0.050293 25.1222V52.1529C0.050293 53.2199 0.494878 54.1091 1.1173 54.8204C1.82863 55.5318 2.80672 55.8874 3.7848 55.8874H54.0228C55.0898 55.8874 55.979 55.4428 56.6903 54.8204C57.4017 54.1091 57.7573 53.131 57.7573 52.1529V25.1222C57.9352 24.8554 57.9352 24.7665 57.9352 24.5887ZM49.577 19.7872L54.7342 23.9663L49.577 28.9456V19.7872ZM28.148 3.60431C28.4148 3.42648 28.6815 3.24864 28.9483 3.24864C29.3039 3.24864 29.5707 3.33756 29.7485 3.60431L34.0165 7.07207H23.9689L28.148 3.60431ZM10.9871 10.9844C10.9871 10.2731 11.5206 9.73958 12.2319 9.73958H45.6646C46.376 9.73958 46.9095 10.362 46.9095 10.9844V31.4353L46.8206 31.5242L40.2407 37.9262H17.6558L11.076 31.5242L10.9871 31.4353V10.9844ZM8.40848 19.7872V28.9456L3.34022 23.9663L8.40848 19.7872ZM2.62888 51.6194V26.9005L15.2551 39.26L2.62888 51.6194ZM4.49614 53.3088L17.6558 40.5048H40.2407L53.4004 53.3088H4.49614ZM55.3566 51.6194L42.6415 39.1711L55.2677 26.8116V51.6194H55.3566ZM29.0372 35.3476C30.5488 35.3476 31.9715 35.0809 33.3941 34.5474C34.0165 34.2806 34.3722 33.4804 34.1055 32.858C33.8387 32.2355 33.0385 31.8799 32.416 32.1466C31.349 32.5912 30.1931 32.769 29.0372 32.769C27.3478 32.769 25.7473 32.3245 24.4135 31.5242C21.746 29.9237 20.0566 27.0784 20.0566 23.7884C20.0566 18.8091 24.0579 14.8078 29.0372 14.8078C34.0165 14.8078 38.0178 18.8091 38.0178 23.7884V24.4109C38.0178 25.4779 37.2175 26.367 36.0616 26.367C34.9946 26.367 34.1055 25.4779 34.1055 24.4109V23.7884C34.1055 20.9431 31.7936 18.6313 28.9483 18.6313C26.1029 18.6313 23.7911 20.9431 23.7911 23.7884C23.7911 26.6338 26.1029 28.9456 28.9483 28.9456C30.3709 28.9456 31.7047 28.3232 32.5939 27.434C33.3941 28.4121 34.639 28.9456 35.9727 28.9456C38.4624 28.9456 40.5075 26.9894 40.5075 24.4109V23.7884C40.5075 17.3864 35.2614 12.2292 28.9483 12.2292C22.6352 12.2292 17.3891 17.4753 17.3891 23.7884C17.3891 26.7227 18.545 29.4791 20.3233 31.5242C22.5463 33.925 25.5694 35.3476 29.0372 35.3476ZM29.0372 26.367C27.6145 26.367 26.4586 25.2111 26.4586 23.7884C26.4586 22.3658 27.6145 21.2098 29.0372 21.2098C30.4599 21.2098 31.6158 22.3658 31.6158 23.7884C31.5269 25.2111 30.371 26.367 29.0372 26.367Z`,
      fill: `#1A99FF`,
    }),
  });
}
function Md(e) {
  let { type: t, accountName: n, onUseCodeOverride: r } = e,
    i = Vu(),
    o = (0, W.jsx)(wd, { type: `mobile`, onCodeHelp: e.onCodeHelp }),
    s = i
      ? (0, W.jsx)(`div`, {
          style: { paddingBottom: `20px` },
          children: (0, W.jsx)(Nd, {
            align: `center`,
            onClick: r,
            children: A.Localize(`#Login_EnterCodeInstead`),
          }),
        })
      : (0, W.jsx)(`div`, {
          className: Nl,
          children: (0, W.jsx)(Nd, {
            align: `center`,
            onClick: r,
            children: A.Localize(`#Login_EnterCodeInstead`),
          }),
        });
  return (0, W.jsx)(zd, {
    title: (0, W.jsx)(Bd, {}),
    compact: !0,
    children: (0, W.jsxs)(Fd, {
      gap: a.IN_STEAMUI ? 24 : 40,
      children: [
        (0, W.jsx)(Od, { type: t, accountName: n }),
        (0, W.jsx)(kd, {}),
        (0, W.jsxs)(`div`, { className: Ml, children: [s, o] }),
      ],
    }),
  });
}
function Nd(e) {
  let { children: t, align: n, inline: r } = e,
    i = (0, hn.default)(bl, n === `center` && `p1pxbjr1kTM-`);
  if (`href` in e) {
    let n = a.IN_STEAMUI ? `steam://openurl_external/${e.href}` : e.href;
    return (0, W.jsx)(`a`, { className: i, href: n, children: t });
  }
  return (0, W.jsx)(r ? `span` : `div`, {
    className: i,
    onClick: e.onClick,
    children: t,
  });
}
function Pd(e) {
  let { onSubmit: t, children: n, className: r } = e;
  return (0, W.jsx)(`form`, {
    onSubmit: (e) => (e.preventDefault(), t(), !1),
    className: r,
    children: n,
  });
}
function Fd(e) {
  let {
      alignItems: t,
      justifyContent: n,
      gap: r,
      className: i,
      ariaLabelledBy: a,
      children: o,
    } = e,
    s = (0, hn.default)(
      Sl,
      t === `center` && `mQfJWqZo0U8-`,
      n === `center` && `h53Pyn--gk4-`,
      i,
    ),
    c = r ? { gap: typeof r == `number` ? `${r}px` : r } : void 0;
  return (0, W.jsx)(`section`, {
    className: s,
    style: c,
    "aria-labelledby": a,
    children: o,
  });
}
function Id(e) {
  let { children: t, justifyContent: n, alignItems: r, className: i } = e;
  return (0, W.jsx)(`div`, {
    style: {
      display: `flex`,
      flexDirection: `row`,
      justifyContent: n,
      alignItems: r,
    },
    className: i,
    children: t,
  });
}
function Ld(e) {
  let { onChange: t, backupCode: n = !1, ...r } = e;
  return (0, W.jsx)(cu, {
    length: jc(n),
    backupCode: n,
    onChange: (e) => {
      ((e = e.map((e) => e.toUpperCase())), Mc(e.join(``).trim(), n) && t(e));
    },
    autoFocus: !0,
    ...r,
    allowCharacter: (e) => /\w/g.test(e),
  });
}
function Rd(e) {
  let { children: t, spacing: n = 0, align: r } = e;
  return (0, W.jsx)(Fd, {
    alignItems: r,
    children: U.Children.map(t, (e, t) =>
      e
        ? (0, W.jsx)(`div`, {
            style: t > 0 ? { paddingTop: `${n}px` } : void 0,
            children: e,
          })
        : null,
    )?.filter(Boolean),
  });
}
function zd(e) {
  let { title: t, titleId: n, children: r, compact: i } = e,
    o = Vu(),
    s = (0, U.useId)();
  return (0, W.jsxs)(Fd, {
    gap: a.IN_STEAMUI ? 0 : 32,
    className: (0, hn.default)(
      qc,
      o && `rvRWTXNBcK4-`,
      i && `L35Fcv9fbYo-`,
      a.IN_STEAMUI && `IN_CLIENT`,
    ),
    ariaLabelledBy: n ?? s,
    children: [
      typeof t == `string`
        ? (0, W.jsx)(`div`, { className: Ul, id: n ?? s, children: t })
        : t,
      (0, W.jsx)(`div`, { className: Wl, children: r }),
    ],
  });
}
function Bd(e) {
  let {
    realm: t = a.EREALM,
    launcherType: n = re()?.LAUNCHER_TYPE,
    className: r = Gl,
  } = e;
  return n === 8
    ? (0, W.jsx)(`div`, { className: r })
    : (0, W.jsxs)(`div`, {
        className: Kl,
        children: [
          (0, W.jsx)(Vd, { onBack: e.onBack }),
          t === ue.k_ESteamRealmChina
            ? (0, W.jsx)(Ud, { className: r })
            : (0, W.jsx)(Hd, { className: r }),
          ` `,
        ],
      });
}
function Vd(e) {
  return e.onBack
    ? (0, W.jsx)(`button`, {
        type: `button`,
        className: ql,
        onClick: e.onBack,
        "aria-label": A.Localize(`#Button_Back`),
        children: (0, W.jsx)(uu, { className: Jl }),
      })
    : null;
}
function Hd(e) {
  return (0, W.jsxs)(`svg`, {
    viewBox: `0 0 153 46`,
    fill: `none`,
    xmlns: `http://www.w3.org/2000/svg`,
    className: e.className,
    children: [
      (0, W.jsx)(`path`, {
        d: `M22.9891 0C10.8429 0 0.93833 9.30396 0 21.1548L12.3547 26.2486C13.3973 25.5209 14.6484 25.1051 16.0037 25.1051C16.108 25.1051 16.2644 25.1051 16.3687 25.1051L21.8944 17.2045C21.8944 17.1525 21.8944 17.1525 21.8944 17.1006C21.8944 12.3186 25.8041 8.42034 30.6 8.42034C35.3959 8.42034 39.3056 12.3186 39.3056 17.1006C39.3056 21.8825 35.3959 25.7808 30.6 25.7808C30.5479 25.7808 30.4436 25.7808 30.3915 25.7808L22.5721 31.3424C22.5721 31.4463 22.5721 31.5503 22.5721 31.6542C22.5721 35.2407 19.6528 38.1514 16.0559 38.1514C12.876 38.1514 10.2695 35.9164 9.64395 32.9017L0.781942 29.2633C3.5448 38.9311 12.4068 46 22.9891 46C35.7087 46 46.0303 35.7085 46.0303 23.026C46.0303 10.2915 35.7087 0 22.9891 0Z`,
        fill: `#E0E1E6`,
      }),
      (0, W.jsx)(`path`, {
        d: `M14.44 34.8766L11.625 33.7331C12.1463 34.7726 12.9804 35.6562 14.1272 36.124C16.6294 37.1636 19.4966 35.9681 20.5391 33.4732C21.0604 32.2777 21.0604 30.9263 20.5391 29.7308C20.0178 28.5353 19.0795 27.5997 17.8805 27.08C16.6816 26.5602 15.3783 26.6122 14.2836 27.028L17.2029 28.2235C19.0274 29.0031 19.9136 31.0822 19.1316 32.9014C18.4018 34.7726 16.2645 35.6562 14.44 34.8766Z`,
        fill: `#E0E1E6`,
      }),
      (0, W.jsx)(`path`, {
        d: `M36.3857 17.0488C36.3857 13.8782 33.7793 11.2793 30.5994 11.2793C27.4195 11.2793 24.813 13.8782 24.813 17.0488C24.813 20.2194 27.4195 22.8703 30.5994 22.8703C33.7793 22.8703 36.3857 20.2714 36.3857 17.0488ZM26.2205 17.0488C26.2205 14.6578 28.1493 12.6827 30.5994 12.6827C32.9973 12.6827 34.9782 14.6058 34.9782 17.0488C34.9782 19.4397 33.0495 21.3629 30.5994 21.3629C28.2014 21.4149 26.2205 19.4397 26.2205 17.0488Z`,
        fill: `#E0E1E6`,
      }),
      (0, W.jsx)(`path`, {
        d: `M70.6879 15.7489L69.1241 18.4517C67.9251 17.6201 66.3091 17.1003 64.9016 17.1003C63.2856 17.1003 62.2951 17.776 62.2951 18.9715C62.2951 20.4269 64.0675 20.7387 66.674 21.6743C69.489 22.6619 71.105 23.8574 71.105 26.4043C71.105 29.9387 68.3421 31.9139 64.3282 31.9139C62.3994 31.9139 60.0014 31.3941 58.229 30.3026L59.3759 27.2879C60.8355 28.0675 62.6079 28.5353 64.1718 28.5353C66.3091 28.5353 67.2995 27.7557 67.2995 26.6122C67.2995 25.3127 65.7878 24.8969 63.2856 24.0653C60.4706 23.1297 58.5418 21.8822 58.5418 19.0235C58.5418 15.8009 61.1483 13.9297 64.8494 13.9297C67.4038 14.0336 69.489 14.8653 70.6879 15.7489Z`,
        fill: `#E0E1E6`,
      }),
      (0, W.jsx)(`path`, {
        d: `M82.7305 17.4643V31.6542H79.0815V17.4643H73.8164V14.3457H87.9956V17.4643H82.7305Z`,
        fill: `#E0E1E6`,
      }),
      (0, W.jsx)(`path`, {
        d: `M95.6574 17.4124V21.3107H102.643V24.4293H95.6574V28.4836H103.737V31.6022H92.0083V14.3457H103.737V17.4643H95.6574V17.4124Z`,
        fill: `#E0E1E6`,
      }),
      (0, W.jsx)(`path`, {
        d: `M111.87 28.2756L110.723 31.6542H106.917L113.434 14.3457H117.083L123.755 31.6542H119.793L118.594 28.2756H111.87ZM115.258 18.4519L112.912 25.3649H117.708L115.258 18.4519Z`,
        fill: `#E0E1E6`,
      }),
      (0, W.jsx)(`path`, {
        d: `M142.47 21.0508L137.726 31.1864H135.693L131.001 21.1547V31.7062H127.509V14.3457H131.001L136.84 26.8723L142.47 14.3457H145.963V31.6542H142.47V21.0508Z`,
        fill: `#E0E1E6`,
      }),
      (0, W.jsx)(`path`, {
        d: `M153 16.5288C153 18.0361 151.905 18.9197 150.602 18.9197C149.299 18.9197 148.204 17.9841 148.204 16.5288C148.204 15.0214 149.351 14.1378 150.602 14.1378C151.853 14.0858 153 15.0214 153 16.5288ZM148.569 16.5288C148.569 17.7762 149.455 18.5559 150.55 18.5559C151.645 18.5559 152.531 17.7762 152.531 16.5288C152.531 15.2813 151.645 14.5016 150.55 14.5016C149.455 14.5016 148.569 15.2813 148.569 16.5288ZM150.602 15.2813C151.228 15.2813 151.436 15.5932 151.436 15.957C151.436 16.2689 151.228 16.4768 151.019 16.6327L151.593 17.6723H151.123L150.654 16.7367H150.133V17.6723H149.768V15.2813H150.602ZM150.185 16.3728H150.602C150.863 16.3728 151.019 16.2169 151.019 16.009C151.019 15.8011 150.915 15.6451 150.602 15.6451H150.185V16.3728Z`,
        fill: `#E0E1E6`,
      }),
    ],
  });
}
function Ud(e) {
  return (0, W.jsxs)(`svg`, {
    viewBox: `0 0 232.73 46.07`,
    xmlns: `http://www.w3.org/2000/svg`,
    className: e.className,
    fill: `#E0E1E6`,
    children: [
      (0, W.jsxs)(`g`, {
        stroke: `null`,
        id: `svg_2`,
        children: [
          (0, W.jsx)(`path`, {
            stroke: `null`,
            id: `svg_3`,
            d: `m21.73862,4.25158c-10.07896,0 -18.33997,7.77507 -19.12529,17.65445l10.28722,4.25199c0.87209,-0.59441 1.92641,-0.94585 3.05883,-0.94585c0.09979,0 0.20392,0.00434 0.30371,0.00868l4.57306,-6.62964c0,-0.03037 0,-0.06074 0,-0.09545c0,-3.99167 3.2454,-7.23707 7.23707,-7.23707c3.99167,0 7.23707,3.2454 7.23707,7.23707c0,3.99167 -3.2454,7.23707 -7.23707,7.23707c-0.0564,0 -0.10847,0 -0.16487,-0.00434l-6.52551,4.65984c0.00434,0.08678 0.00868,0.16921 0.00868,0.25599c0,2.99809 -2.43839,5.43214 -5.43214,5.43214c-2.62929,0 -4.82905,-1.87869 -5.32801,-4.36046l-7.35855,-3.04148c2.27785,8.05709 9.67979,13.96216 18.4658,13.96216c10.59961,0 19.19471,-8.5951 19.19471,-19.19471c0,-10.59527 -8.5951,-19.19037 -19.19471,-19.19037`,
          }),
          (0, W.jsx)(`path`, {
            stroke: `null`,
            id: `svg_4`,
            d: `m14.64039,33.37339l-2.35595,-0.97622c0.41652,0.86775 1.1411,1.59667 2.09996,2.00017c2.07393,0.86341 4.46459,-0.12149 5.33235,-2.19542c0.41652,-1.00226 0.42086,-2.11298 0.00434,-3.11957c-0.41652,-1.00659 -1.1975,-1.79191 -2.19976,-2.21277c-0.99792,-0.41652 -2.06525,-0.39917 -3.00677,-0.04773l2.43405,1.00659c1.53159,0.6378 2.25182,2.395 1.61836,3.92659c-0.6378,1.53592 -2.395,2.25616 -3.92659,1.61836`,
          }),
          (0, W.jsx)(`path`, {
            stroke: `null`,
            id: `svg_5`,
            d: `m32.89793,18.49576c0,-2.65966 -2.16505,-4.82471 -4.82471,-4.82471c-2.65966,0 -4.82471,2.16505 -4.82471,4.82471c0,2.65966 2.16505,4.82037 4.82471,4.82037c2.65966,0.00434 4.82471,-2.16071 4.82471,-4.82037m-8.4389,-0.00434c0,-2.00017 1.6227,-3.62287 3.62287,-3.62287c2.00017,0 3.62287,1.6227 3.62287,3.62287c0,2.00017 -1.6227,3.62287 -3.62287,3.62287c-2.00017,0 -3.62287,-1.6227 -3.62287,-3.62287`,
          }),
        ],
      }),
      (0, W.jsx)(`path`, {
        stroke: `null`,
        id: `svg_6`,
        d: `m46.71333,8.08293c0,2.23529 -1.67014,3.62707 -3.5849,3.62707c-1.91476,0 -3.60177,-1.39178 -3.60177,-3.62707c0,-2.23529 1.68701,-3.6102 3.60177,-3.6102c1.91476,-0.00844 3.5849,1.37491 3.5849,3.6102m-6.64682,0c0,1.90632 1.39178,3.1041 3.05349,3.1041c1.66171,0 3.04505,-1.19778 3.04505,-3.1041c0,-1.91476 -1.38335,-3.09566 -3.04505,-3.09566c-1.65327,0 -3.05349,1.18934 -3.05349,3.09566m3.09566,-1.84728c0.95316,0 1.23152,0.49767 1.23152,1.01221c0,0.48923 -0.29523,0.8182 -0.64106,0.9869l0.83507,1.57736l-0.63263,0l-0.71698,-1.40865l-0.76759,0l0,1.40865l-0.52297,0l0,-3.56803l1.21465,0l0,-0.00844zm-0.69167,1.67858l0.65793,0c0.43019,0 0.70011,-0.27836 0.70011,-0.61576c0,-0.3374 -0.17714,-0.56515 -0.69167,-0.56515l-0.66637,0l0,1.18091z`,
      }),
      (0, W.jsxs)(`g`, {
        id: `svg_7`,
        children: [
          (0, W.jsx)(`path`, {
            id: `svg_8`,
            d: `m77.46999,20.31667c-2.27,6.12 -7.24,10.13 -13.11,12.2c-0.54,-1.12 -1.7,-2.9 -2.65,-3.76c3.6,-1.03 6.95,-3.06 9.14,-5.63l-7.24,0l0,-3.89l10.05,0l0.79,-0.12l3.02,1.2zm-15.02,20.43c1.7,-1.57 3.39,-4.01 4.47,-6l4.22,2.11c-1.2,2.03 -2.73,4.55 -4.34,6.29l-4.35,-2.4zm8.57,-29.9l-8.23,0l0,-4.26l8.23,0l0,-2.28l5.01,0l0,2.28l10.42,0l0,-2.28l5.01,0l0,2.28l8.15,0l0,4.26l-8.15,0l0,2.15l-5.01,0l0,-2.15l-10.42,0l0,2.15l-5.01,0l0,-2.15zm-2.57,19.85l24.53,0l0,4.1l-24.53,0l0,-4.1zm28.71,-9.8c-1.86,1.45 -3.85,2.81 -5.59,3.81c2.52,1.24 5.46,2.19 8.48,2.77c-1.03,0.95 -2.4,2.9 -3.1,4.14c-5.29,-1.41 -10.05,-4.14 -13.44,-7.82l0,1.99c0,2.03 -0.33,2.94 -1.78,3.52c-1.32,0.54 -3.14,0.58 -5.46,0.58c-0.25,-1.2 -0.87,-2.69 -1.41,-3.76c1.37,0.08 2.85,0.08 3.27,0.08c0.46,-0.04 0.62,-0.12 0.62,-0.58l0,-5.83c1.41,-0.62 2.85,-1.45 4.26,-2.32l-14.23,0l0,-3.72l19.28,0l0.99,-0.25l2.98,2.52c-1.9,1.49 -4.18,3.06 -6.58,4.38c0.7,0.79 1.57,1.53 2.52,2.23c1.78,-1.28 3.97,-3.06 5.25,-4.38l3.94,2.64zm-19.11,14.89c0.7,1.99 1.24,4.63 1.28,6.29l-4.88,0.75c0.04,-1.66 -0.37,-4.34 -0.95,-6.41l4.55,-0.63zm8.65,-0.54c1.16,1.86 2.27,4.3 2.61,6l-4.51,1.41c-0.29,-1.65 -1.28,-4.22 -2.36,-6.12l4.26,-1.29zm8.39,-0.54c1.86,1.82 4.05,4.38 5.09,6.21l-4.43,2.07c-0.91,-1.78 -2.98,-4.47 -4.8,-6.37l4.14,-1.91z`,
          }),
          (0, W.jsx)(`path`, {
            id: `svg_9`,
            d: `m110.14999,23.78667c-1.57,-1.12 -4.84,-2.9 -7.16,-4.09l2.61,-3.64c2.23,0.91 5.58,2.56 7.32,3.64l-2.77,4.09zm-5.79,15.14c2.03,-3.06 4.92,-8.07 7.16,-12.74l3.72,3.19c-1.94,4.22 -4.34,8.81 -6.58,12.74l-4.3,-3.19zm8.02,-26.02c-1.49,-1.28 -4.67,-3.14 -6.95,-4.38l2.73,-3.56c2.23,1.03 5.46,2.73 7.07,3.93l-2.85,4.01zm7.62,2.15c-0.91,1.32 -1.86,2.48 -2.81,3.52c-0.91,-0.87 -2.85,-2.36 -3.93,-3.02c2.98,-2.69 5.63,-6.99 7.07,-11.34l4.72,1.28c-0.41,0.99 -0.83,2.03 -1.32,3.06l18.08,0l0,4.22l-20.31,0c-0.46,0.74 -0.91,1.45 -1.41,2.15l17.95,0l0,3.97l-18.04,0l0,-3.84zm17.33,6.17c-0.08,10.05 -0.04,17.13 1.41,17.13c0.5,0 0.66,-2.23 0.7,-5.29c0.83,1.08 1.99,2.32 2.9,3.06c-0.33,4.67 -1.12,6.83 -3.97,6.87c-4.96,-0.04 -5.63,-6.87 -5.79,-17.5l-16.59,0l0,-4.3l19.28,0l0,0.04l2.06,0l0,-0.01z`,
          }),
          (0, W.jsx)(`path`, {
            id: `svg_10`,
            d: `m182.70999,29.24667l-16.26,0l0,13.65l-5.13,0l0,-13.65l-16.09,0l0,-5.01l16.09,0l0,-12.53l-13.94,0l0,-4.88l32.93,0l0,4.88l-13.86,0l0,12.53l16.26,0l0,5.01zm-28.3,-16.21c1.37,2.65 2.85,6.12 3.31,8.44l-4.8,1.49c-0.41,-2.19 -1.7,-5.83 -3.02,-8.6l4.51,-1.33zm15.35,8.6c1.32,-2.4 2.81,-6.04 3.6,-8.73l5.25,1.32c-1.49,3.19 -3.19,6.54 -4.55,8.65l-4.3,-1.24z`,
          }),
          (0, W.jsx)(`path`, {
            id: `svg_11`,
            d: `m212.48999,8.06667c3.81,3.56 8.73,8.65 10.88,12.12l-4.18,3.02c-0.54,-0.91 -1.28,-1.99 -2.15,-3.14c-21.97,1.08 -24.9,1.16 -27.09,1.9c-0.25,-0.99 -1.03,-3.43 -1.61,-4.72c1.08,-0.29 2.07,-1.08 3.43,-2.4c1.45,-1.28 5.96,-6.29 8.77,-11.25l4.96,2.11c-2.61,3.85 -5.87,7.53 -9.02,10.55l16.96,-0.54c-1.61,-1.82 -3.27,-3.56 -4.8,-5.09l3.85,-2.56zm-21.18,16.63l27.88,0l0,18.12l-5.29,0l0,-2.07l-17.54,0l0,2.11l-5.05,0l0,-18.16zm5.04,4.72l0,6.62l17.54,0l0,-6.62l-17.54,0z`,
          }),
        ],
      }),
      (0, W.jsxs)(`g`, {
        id: `svg_12`,
        children: [
          (0, W.jsx)(`path`, {
            id: `svg_13`,
            d: `m224.05999,2.64667l-1.2,0l0,-0.43l2.92,0l0,0.43l-1.21,0l0,3.52l-0.52,0l0,-3.52l0.01,0z`,
          }),
          (0, W.jsx)(`path`, {
            id: `svg_14`,
            d: `m229.54999,4.42667c-0.03,-0.55 -0.06,-1.21 -0.06,-1.71l-0.02,0c-0.13,0.46 -0.3,0.96 -0.5,1.5l-0.7,1.92l-0.39,0l-0.64,-1.88c-0.19,-0.56 -0.35,-1.07 -0.46,-1.54l-0.01,0c-0.01,0.49 -0.04,1.15 -0.08,1.75l-0.11,1.69l-0.49,0l0.28,-3.95l0.65,0l0.67,1.91c0.16,0.49 0.3,0.92 0.4,1.33l0.02,0c0.1,-0.4 0.24,-0.83 0.42,-1.33l0.7,-1.91l0.65,0l0.25,3.95l-0.5,0l-0.08,-1.73z`,
          }),
        ],
      }),
    ],
  });
}
function Wd() {
  return (0, W.jsx)(Fd, {
    alignItems: `center`,
    justifyContent: `center`,
    children: (0, W.jsx)(Je, {}),
  });
}
function Gd(e) {
  let t = (0, U.useRef)(e);
  ((t.current = e),
    (0, U.useEffect)(() => {
      new URLSearchParams(location.search).get(`need_password`) ||
        (t.current &&
          Kd(t.current).catch((e) => {
            Qs(`PerformRefresh exception`, e);
          }));
    }, [t]));
}
async function Kd(e) {
  let t = new FormData();
  t.append(`redir`, e);
  let n = `${a.LOGIN_BASE_URL}jwt/ajaxrefresh`,
    r = await zt.default.post(n, t, { timeout: 1e4, withCredentials: !0 });
  if (r.status !== 200 || !r?.data?.success) return !1;
  let { success: i, login_url: o, error: s, ...c } = r.data,
    l = new FormData();
  Object.entries(c).forEach(([e, t]) => l.append(e, t));
  let u = await zt.default.post(o, l),
    d = u.status === 200 && u.data.result === 1;
  return (d && window.location.assign(e), d);
}
function qd() {
  let e = (0, U.useRef)(!0);
  return (
    (0, U.useEffect)(
      () => () => {
        e.current = !1;
      },
      [e],
    ),
    (0, U.useCallback)(() => e.current, [e])
  );
}
function Jd(e) {
  return (0, W.jsx)(F, {
    onEscKeypress: e.closeModal,
    bDisableBackgroundDismiss: !0,
    children: (0, W.jsx)(Xd, {
      redirectURL: e.redirectURL,
      guestOption: e.guestOption,
    }),
  });
}
function Yd() {
  Ee(
    (0, W.jsx)(Jd, { ownerWin: window, redirectURL: window.location.href }),
    window,
    { strTitle: b(`#Login_SignInTitle`) },
  );
}
function Xd(e) {
  let { redirectURL: t, guestOption: n } = e,
    [r] = (0, U.useState)(
      new mt(new ht(h.WEBAPI_BASE_URL)).GetAnonymousServiceTransport(),
    ),
    [i, a] = (0, U.useState)(!1);
  return (0, W.jsx)(`div`, {
    children: i
      ? (0, W.jsx)(Hu, {})
      : (0, W.jsx)(Uu, {
          autoFocus: !0,
          transport: r,
          platform: 2,
          onComplete: (e) => {
            e == tc.k_PrimaryDomainFail ? a(!0) : window.location.assign(t);
          },
          redirectUrl: t,
          theme: `modal`,
          children: n && (0, W.jsx)(td, { redirectURL: t }),
        }),
  });
}
var Zd = `Utigx2dvTSs-`,
  Qd = `IPiWi3ba7Oc-`,
  $d = `Tt1HS5eK4UQ-`,
  ef = `_2NN20ePjOoE-`,
  tf = `Q5sAYcjkGuw-`,
  nf = `JhPLxwFuvY8-`,
  rf = `-zOT4HlZFNc-`,
  af = `NFc5gI--APM-`,
  of = `gMm9gxp-VwY-`,
  sf = `rkM3vZ-l-i0-`,
  cf = `_9JbCPa5peFE-`,
  lf = `jhZ68t8aO0U-`,
  uf = `cF6FbGIaOso-`,
  df = `uWbWS4Xl7nU-`,
  ff = `_0bHpv5DDjVk-`,
  pf = `GJr1kPqad-w-`,
  mf = `_8whJ5F1f7no-`,
  hf = `ngi9yWTTH6Q-`,
  gf = `O0WGKKnt-b0-`,
  _f = `n4yzVjIUqg0-`,
  vf = `gB1ggcMqZ4U-`,
  yf = `h1DcT5FSiVw-`,
  bf = class e {
    constructor() {
      c(this);
    }
    giveaway_id = void 0;
    seconds_until_drawing = void 0;
    rtime_start = void 0;
    rtime_end = void 0;
    closed = void 0;
    winner_count = void 0;
    BIsValid() {
      return this.giveaway_id !== void 0 && this.giveaway_id !== null;
    }
    BStarted() {
      return this.BIsValid()
        ? (this.seconds_until_drawing !== void 0 &&
            this.seconds_until_drawing >= 0) ||
            (this.winner_count !== void 0 && this.winner_count > 0)
        : !1;
    }
    clone() {
      let t = new e();
      return (
        (t.giveaway_id = this.giveaway_id),
        (t.seconds_until_drawing = this.seconds_until_drawing),
        (t.rtime_start = this.rtime_start),
        (t.rtime_end = this.rtime_end),
        (t.closed = this.closed),
        (t.winner_count = this.winner_count),
        t
      );
    }
  };
(O([p], bf.prototype, `giveaway_id`, void 0),
  O([p], bf.prototype, `seconds_until_drawing`, void 0),
  O([p], bf.prototype, `rtime_start`, void 0),
  O([p], bf.prototype, `rtime_end`, void 0),
  O([p], bf.prototype, `closed`, void 0),
  O([p], bf.prototype, `winner_count`, void 0));
var xf = class e {
  constructor() {
    c(this);
  }
  m_mapGiveawayIDToNextDrawInfo = new Map();
  m_mapGiveawayIDAndInstanceToNextDrawInfo = new Map();
  m_bLoadedFromConfig = !1;
  m_mapNextDrawChangeCallback = new Map();
  GetKey(e, t) {
    return e + `_` + t;
  }
  GetInfoByInstance(e, t) {
    return this.m_mapGiveawayIDAndInstanceToNextDrawInfo.get(this.GetKey(e, t));
  }
  GetNextDrawChangeCallback(e) {
    let t = this.m_mapNextDrawChangeCallback.get(e);
    return (
      t || ((t = new k()), this.m_mapNextDrawChangeCallback.set(e, t)), t
    );
  }
  CopyToGiveaway(e, t) {
    (t.closed != e.closed && (t.closed = e.closed),
      t.giveaway_id != e.giveaway_id && (t.giveaway_id = e.giveaway_id),
      t.rtime_start != e.rtime_start && (t.rtime_start = e.rtime_start),
      t.rtime_end != e.rtime_end && (t.rtime_end = e.rtime_end),
      t.winner_count != e.winner_count && (t.winner_count = e.winner_count),
      t.seconds_until_drawing != e.seconds_until_drawing &&
        (t.seconds_until_drawing = e.seconds_until_drawing));
  }
  async ReloadGiveaway(e, t) {
    if (!e) return null;
    let n = h.STORE_BASE_URL + `prizes/nextdraw/` + e,
      r = { origin: self.origin },
      i = await zt.default.get(n, { params: r }),
      a = ie(() => {
        let n = this.m_mapGiveawayIDToNextDrawInfo.get(e);
        if (
          (n || ((n = new bf()), this.m_mapGiveawayIDToNextDrawInfo.set(e, n)),
          this.CopyToGiveaway(i.data, n),
          t !== void 0)
        ) {
          let n = this.GetKey(e, t),
            r = this.m_mapGiveawayIDAndInstanceToNextDrawInfo.get(n);
          (r ||
            ((r = new bf()),
            this.m_mapGiveawayIDAndInstanceToNextDrawInfo.set(n, r)),
            this.CopyToGiveaway(i.data, r));
        }
        return n;
      });
    return (this.GetNextDrawChangeCallback(e).Dispatch(a), a);
  }
  static s_Singleton;
  static Get() {
    return (
      e.s_Singleton || ((e.s_Singleton = new e()), e.s_Singleton.Init()),
      e.s_Singleton
    );
  }
  Init() {
    if (!this.m_bLoadedFromConfig) {
      let e = fe(`giveawaynextdraw`, `application_config`);
      if (e && e.giveaway_id) {
        let t = new bf();
        (this.CopyToGiveaway(e, t),
          this.m_mapGiveawayIDToNextDrawInfo.set(e.giveaway_id, t));
      }
      this.m_bLoadedFromConfig = !0;
    }
  }
};
(O([p], xf.prototype, `m_mapGiveawayIDToNextDrawInfo`, void 0),
  O([d], xf.prototype, `CopyToGiveaway`, null));
var Sf = class e {
  m_intervalID;
  m_intervalCountDownID;
  static s_GlobalInstance = 0;
  m_myInstanceNumber = 0;
  constructor() {
    ((this.m_myInstanceNumber = e.s_GlobalInstance), (e.s_GlobalInstance += 1));
  }
  ClearRefreshInterval() {
    this.m_intervalID &&= (window.clearInterval(this.m_intervalID), void 0);
  }
  ClearCountDown() {
    this.m_intervalCountDownID &&=
      (window.clearInterval(this.m_intervalCountDownID), void 0);
  }
  SetupRefreshDataInterval(e, t) {
    if ((this.ClearRefreshInterval(), !e.closed)) {
      let n =
        e.seconds_until_drawing !== void 0 &&
        e.seconds_until_drawing <= 0 &&
        e.winner_count == 0
          ? 6e4
          : 5e3;
      this.m_intervalID = window.setInterval(t, n);
    }
  }
  SetupCountDown(e, t) {
    e !== void 0 &&
      e > 0 &&
      (this.m_intervalCountDownID = window.setInterval(t, 1e3));
  }
};
(O([f], Sf.prototype, `ClearRefreshInterval`, null),
  O([f], Sf.prototype, `ClearCountDown`, null),
  O([f], Sf.prototype, `SetupRefreshDataInterval`, null),
  O([f], Sf.prototype, `SetupCountDown`, null));
function Cf(e, t) {
  let n = xf.Get().GetInfoByInstance(e, t.m_myInstanceNumber);
  n &&
    n.seconds_until_drawing !== void 0 &&
    (--n.seconds_until_drawing,
    n.seconds_until_drawing == 0 && t.ClearCountDown());
}
function wf(e, t) {
  let n = xf.Get().GetInfoByInstance(e, t.m_myInstanceNumber);
  n &&
    n.BIsValid() &&
    n.seconds_until_drawing !== void 0 &&
    n.seconds_until_drawing <= 0 &&
    !n.closed &&
    (t.ClearCountDown(),
    xf
      .Get()
      .ReloadGiveaway(e, t.m_myInstanceNumber)
      .then((n) => {
        n && t.SetupCountDown(n.seconds_until_drawing, () => Cf(e, t));
      }));
}
function Tf(e) {
  let [t] = (0, U.useState)(new Sf()),
    n = s();
  (0, U.useEffect)(
    () => (
      xf
        .Get()
        .ReloadGiveaway(e, t.m_myInstanceNumber)
        .then((r) => {
          r &&
            (t.SetupRefreshDataInterval(r, () => wf(e, t)),
            t.SetupCountDown(r.seconds_until_drawing, () => Cf(e, t)),
            n());
        }),
      () => {
        (t.ClearRefreshInterval(), t.ClearCountDown());
      }
    ),
    [t, e, n],
  );
  let r = xf.Get().GetInfoByInstance(e, t.m_myInstanceNumber),
    [i, a, o] = $e(() => [
      r?.winner_count,
      r?.closed,
      r?.seconds_until_drawing,
    ]);
  return !r || r.giveaway_id == null || !r.BStarted() || i === void 0
    ? { bLoadingGiveawayInfo: !0 }
    : {
        bLoadingGiveawayInfo: !1,
        winner_count: i,
        closed: a ?? !1,
        seconds_until_drawing: o ?? -1,
      };
}
var Ef = `saleaction/creategiveawayregistration`;
async function Df(e) {
  let t =
    a.STORE_BASE_URL +
    `saleaction/giveawayregistration?name=` +
    encodeURIComponent(e);
  return await kf(
    `GetUserGiveawayRegistration`,
    e,
    t,
    await fetch(t, { credentials: `include` }),
  );
}
async function Of(e) {
  let t = a.STORE_BASE_URL + Ef;
  return await kf(
    `UpdateUserGiveawayRegistration`,
    e,
    t,
    await fetch(t, {
      method: `POST`,
      credentials: `include`,
      headers: { "content-type": `application/json` },
      body: JSON.stringify({ name: e }),
    }),
  );
}
async function kf(e, t, n, r) {
  if (!r.ok) throw Error(n + ` answered ` + r.status);
  let i = await r.json();
  if (i?.success == 1 && i.registration) return i.registration;
  throw Error(e + ` on ` + t + ` answered ` + i?.success);
}
var Af = { registered: !1 };
function jf(e, t) {
  return [`sale`, `giveawayregistration`, e, t];
}
function Mf(e, t) {
  return { queryKey: jf(e, t), queryFn: () => Df(e), enabled: !!e, retry: !1 };
}
function Nf(e) {
  let { data: t, isError: n } = Ge(Mf(e, ne.accountid));
  return n ? Af : t;
}
function Pf() {
  let e = We(),
    { mutateAsync: t } = Le({
      mutationFn: Of,
      onSuccess: (t, n) => e.setQueryData(jf(n, ne.accountid), t),
    });
  return {
    fnCreateRegistration: (0, U.useCallback)(
      async (e) => {
        try {
          return await t(e);
        } catch (t) {
          return (
            console.error(`Registering for giveaway ` + e + ` failed`, t), Af
          );
        }
      },
      [t],
    ),
  };
}
var Ff = `aE9NemwHX3U-`,
  If = `-LW3HYdhtwg-`,
  Lf = `UfXKJfvB2aU-`,
  Rf = `NjuVylscv-c-`,
  zf = `fQEvRYMgKZ8-`,
  Bf = `Jz1BUHL6vfU-`,
  Vf = `qUAIeS1LipI-`,
  Hf = `hCW7GiiXdrk-`,
  Uf = `gmY72gO6Jbk-`;
function Wf(e) {
  let { latestAnnouncement: t } = e;
  return t?.type == `giveaway_draw`
    ? (0, W.jsx)(Gf, { latestWinner: t })
    : null;
}
function Gf(e) {
  let {
      latestWinner: t,
      className: n,
      strActionButton: r,
      strActionClassname: i,
    } = e,
    a = t.winners_info ?? [],
    o = a.length > 0 ? a[0].accountid : 0,
    [s, c] = U.useState(o),
    l = Dt(`${R.GetBaseURL()}4/080b1f163b02a9810fa78f0b32b9396fab012aef.gif`),
    u = Dt(`${R.GetBaseURL()}4/56521811317a8298a7aff4a914be964b67dd0325.png`);
  C(!!t.giveaway_gid, `Giveaway draw announcement is missing its giveaway`, t);
  let d = Tf(t.giveaway_gid),
    f = d.bLoadingGiveawayInfo || d.closed ? null : d.seconds_until_drawing,
    p = o === _.accountid;
  U.useEffect(() => {
    s != o && setTimeout(() => c(o), 1500);
  }, [o, s]);
  let m =
    a.length > 0 && a[0].persona
      ? a[0].persona
      : b(`#GA2022_UnknownPersonaName`);
  return (0, W.jsx)(ke, {
    href: `https://store.steampowered.com/sale/thegameawardssteamdeckdrop2022`,
    className: n,
    children: (0, W.jsxs)(`div`, {
      className: Te({ [Ff]: !0, [If]: s === o }),
      children: [
        (0, W.jsx)(`div`, {
          className: Rf,
          children: (0, W.jsx)(`img`, { className: zf, src: l }),
        }),
        (0, W.jsxs)(`div`, {
          className: Lf,
          children: [
            s !== o &&
              (0, W.jsx)(`div`, {
                className: Te(`l-AUoGdZDTw-`),
                children: pe(
                  `#GA2022_Congrats_Deck_Unknown`,
                  (0, W.jsx)(`br`, {}),
                ),
              }),
            s === o &&
              (0, W.jsx)(`div`, {
                className: Te(`l-AUoGdZDTw-`, `-LW3HYdhtwg-`),
                children: pe(
                  p
                    ? `#GA2022_Congrats_Deck_Me`
                    : `#GA2022_Congrats_Deck_OTher`,
                  m,
                  (0, W.jsx)(`br`, {}),
                ),
              }),
            !!(f && f > 0) &&
              (0, W.jsx)(`div`, {
                className: `B7DECy1bqvs-`,
                children: pe(`#GA2022_Congrats_NextDraw`, f),
              }),
          ],
        }),
        (0, W.jsx)(`img`, { className: Bf, src: u }),
        !!r &&
          (0, W.jsx)(`div`, {
            className: i,
            children: p ? b(`#GA2022_YouWonNextSteps`) : r,
          }),
      ],
    }),
  });
}
function Kf(e, t) {
  let [n, r] = $e(() => [
      t?.steamid,
      t?.steamid ? it.GetBroadcast(t.steamid)?.m_ulBroadcastID : void 0,
    ]),
    [i, a] = U.useState(null);
  U.useEffect(() => {
    let e = null;
    return (
      n &&
        ((e = Bi.Get().GetOrCreateChat(r ?? ``, n)),
        e.StartForSteamID(n, r ?? ``),
        a(e)),
      () => {
        e && (e.Stop(), a(null));
      }
    );
  }, [n, r]);
  let o = $e(() => i?.m_latestAnnouncement || null);
  if (o?.type == `giveaway_draw`) {
    let t = o;
    if (t.giveaway_gid == e) return t;
  }
  return null;
}
function qf(e) {
  let { gidGiveaway: t, stream: n } = e,
    r = Kf(t, n),
    i = Nf(`GameAwardDrop2022`),
    a = null,
    o = Hf;
  return (
    _.logged_in
      ? i?.registered
        ? ((a = b(`#GA2022_AlreadyRegistered`)), (o = Uf))
        : (a = b(`#GA2022_RegisterToWin`))
      : (a = b(`#GA2022_RegisterLoginToWin`)),
    r
      ? (0, W.jsx)(Gf, {
          latestWinner: r,
          className: Vf,
          strActionButton: a,
          strActionClassname: o,
        })
      : null
  );
}
var Jf = RegExp(`ː([^ː]*)ː`, `g`),
  Yf = RegExp(
    `^https?://(?:[^/?#]+?\\.)?(?:valvesoftware|steamcommunity|steampowered)\\.com(?:/?#|$)`,
    `i`,
  );
function Xf(e, t, n) {
  return n
    ? `presenter`
    : t.GetBroadcastSteamID() === e
      ? `broadcaster`
      : t.BIsUserBroadcastModerator(e)
        ? `moderator`
        : ``;
}
var Zf = (e) => {
    let { userType: t, msg: n, presenterInfo: r } = e;
    if (t === `presenter` && r)
      return (0, W.jsx)(`span`, {
        children: (0, W.jsx)(bt, {
          name: r.name ?? ``,
          title: r.title,
          photo: r.photo,
          company: r.company ?? ``,
          bioString: r.bio,
          children: (0, W.jsx)(`a`, {
            className: Te(tf, void 0),
            href: h.COMMUNITY_BASE_URL + `profiles/` + n.steamid,
            target: `_blank`,
            rel: `noopener noreferrer`,
            children: n.persona_name,
          }),
        }),
      });
    {
      let e;
      return (
        (t === `broadcaster` || t === `moderator`) && (e = void 0),
        (0, W.jsx)(`span`, {
          children: (0, W.jsx)(`a`, {
            className: Te(tf, e),
            href: h.COMMUNITY_BASE_URL + `profiles/` + n.steamid,
            "data-miniprofile": `s` + n.steamid,
            target: `_blank`,
            rel: `noopener noreferrer`,
            children: n.persona_name,
          }),
        })
      );
    }
  },
  Qf = (e) => {
    switch (e.userType) {
      case `presenter`:
        return (0, W.jsx)(I, {
          toolTipContent: b(`#BroadcastChat_Role_Presenter_ttip`),
          children: (0, W.jsx)(`span`, {
            className: gf,
            children: (0, W.jsx)(we, {}),
          }),
        });
      case `moderator`:
        return (0, W.jsx)(I, {
          toolTipContent: b(`#BroadcastChat_Role_Moderatorr_ttip`),
          children: (0, W.jsx)(`span`, {
            className: gf,
            children: (0, W.jsx)(ye, {}),
          }),
        });
      case `broadcaster`:
        return (0, W.jsx)(I, {
          toolTipContent: b(`#BroadcastChat_Role_Broadcaster_ttip`),
          children: (0, W.jsx)(`span`, {
            className: gf,
            children: (0, W.jsx)(Ce, {}),
          }),
        });
      default:
        return null;
    }
  },
  $f = class extends U.Component {
    constructor(e) {
      (super(e), c(this));
    }
    m_chat = void 0;
    messagesContainer = U.createRef();
    componentDidMount() {
      this.StartChat();
    }
    componentDidUpdate(e) {
      (this.m_chat &&
        this.m_chat.m_bAutoScroll &&
        this.ScrollToNewestMessages(),
        (this.props.steamID !== e.steamID ||
          this.props.broadcastID !== e.broadcastID ||
          this.props.broadcastChannelID !== e.broadcastChannelID) &&
          this.StartChat());
    }
    componentWillUnmount() {
      this.m_chat && this.m_chat.Stop();
    }
    StartChat() {
      this.m_chat && this.m_chat.Stop();
      let e = Bi.Get().GetOrCreateChat(
        this.props.broadcastChannelID ?? ``,
        this.props.steamID ?? ``,
      );
      if (((this.m_chat = e), this.props.broadcastChannelID))
        e.StartForChannel(this.props.broadcastChannelID);
      else if (
        this.props.steamID &&
        this.props.steamID &&
        (this.props.broadcastID || this.props.globalChat)
      ) {
        let t = this.props.broadcastID || `0`;
        (e.StartForSteamID(this.props.steamID, t),
          this.ScrollToNewestMessages());
      }
    }
    IsTrustedDomain(e) {
      return !!e.match(Yf);
    }
    AddLinksEmoticons(e, t) {
      t && this.m_chat?.GetUserEmoticons();
      let n = e.split(Jf),
        r = [];
      for (let e = 0; e < n.length; e += 1)
        e % 2 == 1
          ? r.push((0, W.jsx)(Ct, { emoticon: n[e], large: !0 }, e))
          : r.push(n[e]);
      return r;
    }
    HandleScroll(e) {
      let t = this.props.bInvertLayout
        ? e.currentTarget.scrollTop < 6
        : e.currentTarget.scrollTop + e.currentTarget.clientHeight >=
          e.currentTarget.scrollHeight - 6;
      this.m_chat && (this.m_chat.m_bAutoScroll = t);
    }
    ScrollToNewestMessages() {
      this.messagesContainer &&
        this.messagesContainer.current &&
        (this.messagesContainer.current.scrollTop = this.props.bInvertLayout
          ? 0
          : this.messagesContainer.current.scrollHeight);
    }
    OnContextMenu(e, t) {
      let n = this.m_chat;
      if (!n || t.type !== V.Chat) return null;
      let r = [],
        i = n.IsUserBroadcaster(n.GetUserSteamID()),
        a = n.BIsUserBroadcastModerator(n.GetUserSteamID());
      return (
        (_ && _.is_support) || i || a
          ? r.push(
              (0, W.jsx)(
                be,
                {
                  onSelected: () =>
                    n.RemoveUserMessagesServer(t.steamid, t.persona_name),
                  children: b(`#BroadcastChat_RemoveMessages`),
                },
                `remove`,
              ),
              (0, W.jsx)(
                be,
                {
                  onSelected: () =>
                    n.UpdateUserChatBan(t.steamid, 1, 12, !1, t.persona_name),
                  children: b(`#BroadcastChat_half_Mute`),
                },
                `updatebanh`,
              ),
              (0, W.jsx)(
                be,
                {
                  onSelected: () =>
                    n.UpdateUserChatBan(t.steamid, 1, 24, !1, t.persona_name),
                  children: b(`#BroadcastChat_day_Mute`),
                },
                `updateband`,
              ),
              (0, W.jsx)(
                be,
                {
                  onSelected: () =>
                    n.UpdateUserChatBan(t.steamid, 1, 168, !1, t.persona_name),
                  children: b(`#BroadcastChat_week_Mute`),
                },
                `updatebanw`,
              ),
              (0, W.jsx)(
                be,
                {
                  onSelected: () =>
                    n.UpdateUserChatBan(t.steamid, 1, 0, !0, t.persona_name),
                  children: b(`#BroadcastChat_perm_Mute`),
                },
                `updatebanp`,
              ),
              (0, W.jsx)(
                be,
                {
                  onSelected: () =>
                    n.UpdateUserChatBan(
                      t.steamid,
                      0,
                      0,
                      !1,
                      t.persona_name,
                      !0,
                    ),
                  children: b(`#BroadcastChat_Unmute`),
                },
                `removeban`,
              ),
            )
          : n.IsUserMutedLocally(t.steamid)
            ? r.push(
                (0, W.jsx)(
                  be,
                  {
                    onSelected: () =>
                      n.UnmuteUserForSession(t.steamid, t.persona_name),
                    children: b(`#BroadcastChat_UnmuteLocal`),
                  },
                  `unmuteuser`,
                ),
              )
            : r.push(
                (0, W.jsx)(
                  be,
                  {
                    onSelected: () =>
                      n.MuteUserForSession(t.steamid, t.persona_name),
                    children: b(`#BroadcastChat_MuteLocal`),
                  },
                  `muteuser`,
                ),
              ),
        ((_ && _.is_support) || n.IsUserBroadcaster(n.GetUserSteamID())) &&
          t.steamid &&
          (n.BIsUserBroadcastModerator(t.steamid)
            ? r.push(
                (0, W.jsx)(
                  be,
                  {
                    onSelected: () =>
                      n.UpdateBroadcastChatModerator(
                        t.steamid,
                        !1,
                        t.persona_name,
                      ),
                    children: b(`#BroadcastChat_Remove_Moderator`),
                  },
                  `removemod`,
                ),
              )
            : r.push(
                (0, W.jsx)(
                  be,
                  {
                    onSelected: () =>
                      n.UpdateBroadcastChatModerator(
                        t.steamid,
                        !0,
                        t.persona_name,
                      ),
                    children: b(`#BroadcastChat_Add_Moderator`),
                  },
                  `addmod`,
                ),
              )),
        r.length
          ? xe(
              (0, W.jsxs)(Se, {
                children: [
                  (0, W.jsxs)(`div`, {
                    className: mf,
                    children: [
                      b(`#BroadcastChat_User`),
                      (0, W.jsx)(`br`, {}),
                      (0, W.jsx)(`span`, {
                        className: hf,
                        children: t.persona_name,
                      }),
                    ],
                  }),
                  r,
                ],
              }),
              e,
            )
          : null
      );
    }
    GetTypeClassName(e) {
      return e.type === V.Notification ? af : e.type === V.Error ? of : ef;
    }
    FormatMessage(e, t) {
      if (e.type === V.Chat) {
        let n = t ? t.FilterText(e.steamid, e.msg) : e.msg;
        return this.AddLinksEmoticons(n, !1);
      }
      return e.msg;
    }
    RenderUserChatLine(e, t, n, r) {
      let i = r?.get(t.steamid),
        a = t.type === V.Chat ? Xf(t.steamid, e, i) : ``;
      return (0, W.jsxs)(
        `div`,
        {
          className: this.GetTypeClassName(t),
          onContextMenu: (e) => this.OnContextMenu(e, t),
          children: [
            t.type === V.Chat && (0, W.jsx)(Qf, { userType: a }),
            t.flair &&
              (0, W.jsx)(`span`, {
                className: `xDmEH9mDo3o-`,
                children: this.AddLinksEmoticons(t.flair, !1),
              }),
            t.type === V.Chat &&
              (0, W.jsx)(Zf, { userType: a, msg: t, presenterInfo: i }),
            t.type === V.Chat &&
              e.GetBroadcastSteamID() === t.steamid &&
              (0, W.jsx)(`span`, {
                className: `NFc5gI--APM- JhPLxwFuvY8-`,
                children: ` (${b(`#BroadcastChat_Broadcaster`)})`,
              }),
            t.type === V.Chat &&
              e.m_mapChannelModeratorUsers.get(t.steamid) &&
              (0, W.jsx)(`span`, {
                className: `NFc5gI--APM- JhPLxwFuvY8-`,
                children: ` (${b(`#BroadcastChat_Moderator`)})`,
              }),
            (0, W.jsxs)(`span`, {
              className: `${nf} ${this.AddLinksEmoticons(t.msg, !1).filter((e) => e && typeof e == `string`).length ? `` : rf}`,
              children: [
                t.type === V.Chat ? ` : ` : ``,
                this.FormatMessage(t, e.TextFilterStore),
              ],
            }),
          ],
        },
        t.instance_id + `_` + t.client_ts + `_` + n,
      );
    }
    render() {
      let {
          hidden: e,
          bPartnerMemberOnlyChat: t,
          bInvertLayout: n,
          onSignIn: r,
        } = this.props,
        i = this.m_chat,
        a = i ? i.m_rgChatMessages : [],
        o = n ? a.reverse() : a,
        s = this.m_chat
          ? Gi.GetPresenterMapForBroadcasterSteamID(
              this.m_chat.GetBroadcastSteamID(),
            )
          : void 0,
        c = this.m_chat ? this.m_chat.m_latestAnnouncement : null;
      return (0, W.jsxs)(`div`, {
        className: Te(Qd, `ChatPanel`),
        style: e ? { display: `none` } : void 0,
        children: [
          (0, W.jsx)(Wf, { latestAnnouncement: c }),
          n &&
            !!this.m_chat &&
            (0, W.jsx)(ep, {
              oChat: this.m_chat,
              emoticonStore: this.props.emoticonStore,
              bPartnerMemberOnlyChat: t,
              onSignIn: r,
            }),
          (0, W.jsx)(ir, {}),
          (0, W.jsx)(`div`, {
            className: Te(`${$d} ${vt}`, `ChatMessages`),
            onScroll: this.HandleScroll,
            ref: this.messagesContainer,
            children: i && o.map((e, t) => this.RenderUserChatLine(i, e, t, s)),
          }),
          (0, W.jsx)(ar, {}),
          !n &&
            !!this.m_chat &&
            (0, W.jsx)(ep, {
              oChat: this.m_chat,
              emoticonStore: this.props.emoticonStore,
              bPartnerMemberOnlyChat: t,
              onSignIn: r,
            }),
        ],
      });
    }
  };
(O([p], $f.prototype, `m_chat`, void 0),
  O([f], $f.prototype, `StartChat`, null),
  O([f], $f.prototype, `HandleScroll`, null),
  O([f], $f.prototype, `OnContextMenu`, null),
  O([f], $f.prototype, `RenderUserChatLine`, null),
  ($f = O([_e], $f)));
function ep(e) {
  let {
    oChat: t,
    emoticonStore: n,
    bPartnerMemberOnlyChat: r,
    onSignIn: i,
  } = e;
  return r && (!_?.logged_in || !_?.is_partner_member)
    ? (0, W.jsx)(ap, {})
    : _?.logged_in
      ? (0, W.jsx)(tp, { oChat: t, emoticonStore: n })
      : i
        ? (0, W.jsx)(ip, { onSignIn: i })
        : null;
}
function tp(e) {
  let { oChat: t, emoticonStore: n } = e,
    [r, i] = U.useState(``),
    a = U.useRef(null),
    o = $e(() => t.m_bRateLimited),
    s = U.useCallback(
      (e) => {
        !e.shiftKey &&
          e.charCode === 13 &&
          (t.m_bRateLimited || (t.SendMessage(r), i(``)), e.preventDefault());
      },
      [t, r],
    ),
    c = U.useCallback(
      (e, t = !1) => {
        (i(r + `\u02D0${e}\u02D0`), a?.current && a.current.focus());
      },
      [r, a],
    ),
    l = () => {
      (t.SendMessage(r), i(``));
    },
    u = o || r.trim().length == 0,
    d = Te(yt, r.length == 0 && `_4X5-n9MaD8g-`);
  return (0, W.jsx)(`div`, {
    className: Te(void 0, `ChatEntryCtn`),
    children: (0, W.jsxs)(`div`, {
      className: Te(Zd, `ChatEntry`),
      children: [
        (0, W.jsxs)(`form`, {
          className: `${_t}`,
          children: [
            (0, W.jsx)(`textarea`, {
              className: Tt,
              placeholder: b(`#BroadcastChat_EnterResponse`),
              onKeyPress: s,
              onChange: (e) => i(e.target.value),
              value: r,
              ref: a,
            }),
            o &&
              (0, W.jsx)(rp, {
                nSeconds: t.m_nRateLimitSeconds,
                bRateLimited: t.m_bRateLimited,
              }),
            (0, W.jsx)(`button`, {
              className: d,
              title: b(`#ChatEntryButton_Submit`),
              disabled: u,
              onClick: l,
              children: (0, W.jsx)(ve, {}),
            }),
          ],
        }),
        (0, W.jsx)(`div`, {
          style: { height: `50px` },
          className: `${xt}`,
          children: (0, W.jsxs)(`div`, {
            className: wt,
            children: [
              (0, W.jsx)(St, {
                disabled: !1,
                OnEmoticonSelected: c,
                rtLastAckedNewEmoticons: Number.MAX_VALUE,
                emoticonStore: n,
              }),
              (0, W.jsx)(np, { ...e, textInputRef: a }),
            ],
          }),
        }),
      ],
    }),
  });
}
function np(e) {
  let { oChat: t, emoticonStore: n, textInputRef: r } = e;
  return t.m_strFlairGroupID &&
    n.flair_list &&
    n.GetFlairListByGroupID(t.m_strFlairGroupID)?.length
    ? (0, W.jsx)(St, {
        disabled: !1,
        OnEmoticonSelected: (e) => {
          (t.UpdateChatMessageFlair(e), r?.current && r.current.focus());
        },
        rtLastAckedNewEmoticons: Number.MAX_VALUE,
        emoticonStore: n,
        strFlairGroupID: t.m_strFlairGroupID,
        title: b(`#ChatEntryButton_Flair`),
        buttonIcon: (0, W.jsx)(P, {}),
      })
    : null;
}
var rp = class extends U.Component {
  render() {
    return (0, W.jsx)(`div`, {
      className: cf,
      children: (0, W.jsxs)(`div`, {
        className: lf,
        children: [
          (0, W.jsx)(`div`, {
            className: `${df} ${uf}`,
            style: { animationDuration: `${this.props.nSeconds || 0}s` },
          }),
          (0, W.jsx)(`div`, {
            className: `${ff} ${uf}`,
            style: { animationDuration: `${this.props.nSeconds || 0}s` },
          }),
          (0, W.jsx)(`div`, {
            className: pf,
            style: { animationDuration: `${this.props.nSeconds || 0}s` },
          }),
        ],
      }),
    });
  }
};
function ip(e) {
  return (0, W.jsx)(`div`, {
    className: _f,
    children: (0, W.jsx)(De, {
      onClick: e.onSignIn,
      className: Te(yf),
      children: b(`#BroadcastChat_Login`),
    }),
  });
}
function ap(e) {
  return (0, W.jsxs)(`div`, {
    className: _f,
    children: [
      (0, W.jsx)(`div`, {
        className: vf,
        children: b(`#Broadcast_PartnerChat_Login`),
      }),
      !_.logged_in &&
        !h.IN_STEAMUI &&
        (0, W.jsx)(De, {
          onClick: Yd,
          className: Te(`h1DcT5FSiVw-`),
          children: b(`#Login_SignIn`),
        }),
    ],
  });
}
export {
  Gi as A,
  Hn as B,
  Ic as C,
  $ as D,
  jc as E,
  ir as F,
  Yt as G,
  dn as H,
  $n as I,
  Ft as K,
  er as L,
  Hi as M,
  or as N,
  Xs as O,
  ar as P,
  Yn as R,
  Vc as S,
  Nc as T,
  an as U,
  mn as V,
  qt as W,
  cu as _,
  sf as a,
  Hc as b,
  Id as c,
  Ad as d,
  Wu as f,
  ku as g,
  Eu as h,
  Nf as i,
  Ui as j,
  Zs as k,
  Pd as l,
  Pu as m,
  qf as n,
  kd as o,
  Bd as p,
  Lt as q,
  Pf as r,
  Fd as s,
  $f as t,
  jd as u,
  Uc as v,
  Mc as w,
  Lc as x,
  Rc as y,
  qn as z,
};
