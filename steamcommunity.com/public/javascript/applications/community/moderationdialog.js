/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./chunk~f025431ab0.js";
import { Ft as t, It as n, K as r, ot as i } from "./chunk~01cfc309bf.js";
import { n as a } from "./chunk~cfd048ddd7.js";
import { m as o, o as s, p as c } from "./chunk~1e67c3e4e4.js";
import { t as l } from "./chunk~eefd71512b.js";
import { i as u, n as d, r as f, t as p } from "./chunk~0f9e58b0a5.js";
import { t as m } from "./chunk~62cf132e0e.js";
import { r as h, t as g } from "./chunk~75db1bf948.js";
import { t as _ } from "./chunk~37e5316e27.js";
import {
  B as v,
  Bh as y,
  Du as b,
  Fh as x,
  Gh as S,
  Gt as C,
  Ih as w,
  It as T,
  K as E,
  Lh as D,
  Mc as O,
  Nh as k,
  Ou as A,
  Ph as j,
  Q as M,
  Qo as N,
  Rh as P,
  Rt as F,
  Tu as I,
  Xi as L,
  Xm as R,
  Zo as z,
  _a as B,
  bc as V,
  hu as H,
  oh as ee,
  q as te,
  rg as ne,
  sh as U,
  tm as re,
  y as ie,
  ym as W,
  ys as ae,
  zh as G,
  zu as K,
} from "./main.js";
var q = e(n(), 1),
  oe = class e extends q.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.quicktext_id || k(e.M()),
        q.Message.initialize(this, t, 0, -1, [6, 10, 11], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            quicktext_id: { n: 1, br: w.readUint32, bw: y.writeUint32 },
            requires_update: { n: 2, br: w.readBool, bw: y.writeBool },
            title: { n: 3, br: w.readString, bw: y.writeString },
            hidden: { n: 4, br: w.readBool, bw: y.writeBool },
            approved: { n: 5, br: w.readBool, bw: y.writeBool },
            help_request_types: {
              n: 6,
              r: !0,
              q: !0,
              br: w.readUint32,
              pbr: w.readPackedUint32,
              bw: y.writeRepeatedUint32,
            },
            content: { n: 7, c: J },
            button_text: { n: 8, br: w.readString, bw: y.writeString },
            replacement: { n: 9, br: w.readBool, bw: y.writeBool },
            payment_methods: {
              n: 10,
              r: !0,
              q: !0,
              br: w.readUint32,
              pbr: w.readPackedUint32,
              bw: y.writeRepeatedUint32,
            },
            appids: {
              n: 11,
              r: !0,
              q: !0,
              br: w.readUint32,
              pbr: w.readPackedUint32,
              bw: y.writeRepeatedUint32,
            },
            escalation_level: { n: 12, br: w.readEnum, bw: y.writeEnum },
            partner_only: { n: 13, br: w.readBool, bw: y.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= D(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return G(e.M(), t, n);
    }
    static fromObject(t) {
      return x(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return j(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      P(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSupportData_QuickText`;
    }
  },
  J = class e extends q.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.content || k(e.M()),
        q.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            content: { n: 1, br: w.readString, bw: y.writeString },
            major_revision: { n: 2, br: w.readUint32, bw: y.writeUint32 },
            minor_revision: { n: 3, br: w.readUint32, bw: y.writeUint32 },
            author: { n: 4, br: w.readUint32, bw: y.writeUint32 },
            last_update: { n: 5, br: w.readUint32, bw: y.writeUint32 },
            language: { n: 6, br: w.readInt32, bw: y.writeInt32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= D(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return G(e.M(), t, n);
    }
    static fromObject(t) {
      return x(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return j(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      P(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSupportData_QuickTextContent`;
    }
  },
  Y = class e extends q.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.quicktext_id || k(e.M()),
        q.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            quicktext_id: { n: 1, br: w.readUint32, bw: y.writeUint32 },
            language: { n: 2, br: w.readString, bw: y.writeString },
            from_sql: { n: 3, br: w.readBool, bw: y.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= D(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return G(e.M(), t, n);
    }
    static fromObject(t) {
      return x(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return j(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      P(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSupportAgents_GetQuickText_Request`;
    }
  },
  se = class e extends q.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.quicktext || k(e.M()),
        q.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            quicktext: { n: 1, c: oe },
            english_reference: { n: 2, c: J },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= D(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return G(e.M(), t, n);
    }
    static fromObject(t) {
      return x(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return j(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      P(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSupportAgents_GetQuickText_Response`;
    }
  },
  ce = class e extends q.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || k(e.M()),
        q.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: w.readUint32, bw: y.writeUint32 },
            log_type: { n: 2, br: w.readString, bw: y.writeString },
            version_string: { n: 3, br: w.readString, bw: y.writeString },
            log_contents: { n: 4, br: w.readString, bw: y.writeString },
            request_id: {
              n: 5,
              br: w.readUint64String,
              bw: y.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= D(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return G(e.M(), t, n);
    }
    static fromObject(t) {
      return x(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return j(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      P(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CHelpRequestLogs_UploadUserApplicationLog_Request`;
    }
  },
  le = class e extends q.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.id || k(e.M()),
        q.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            id: { n: 1, br: w.readUint64String, bw: y.writeUint64String },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= D(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return G(e.M(), t, n);
    }
    static fromObject(t) {
      return x(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return j(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      P(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CHelpRequestLogs_UploadUserApplicationLog_Response`;
    }
  },
  ue = class e extends q.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || k(e.M()),
        q.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { appid: { n: 1, br: w.readUint32, bw: y.writeUint32 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= D(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return G(e.M(), t, n);
    }
    static fromObject(t) {
      return x(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return j(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      P(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CHelpRequestLogs_GetApplicationLogDemand_Request`;
    }
  },
  de = class e extends q.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.request_id || k(e.M()),
        q.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            request_id: {
              n: 1,
              br: w.readUint64String,
              bw: y.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= D(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return G(e.M(), t, n);
    }
    static fromObject(t) {
      return x(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return j(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      P(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CHelpRequestLogs_GetApplicationLogDemand_Response`;
    }
  },
  X;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(`SupportAgents.GetQuickText#1`, U(Y, t, n), se, {
      bConstMethod: !0,
      ePrivilege: 5,
      rgBrowserAPISites: [`community`],
    });
  }
  e.GetQuickText = t;
})((X ||= {}));
var fe;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(
      `HelpRequestLogs.UploadUserApplicationLog#1`,
      U(ce, t, n),
      le,
      { ePrivilege: 1 },
    );
  }
  e.UploadUserApplicationLog = t;
  function n(e, t, n) {
    return e.SendMsg(
      `HelpRequestLogs.GetApplicationLogDemand#1`,
      U(ue, t, n),
      de,
      { ePrivilege: 1 },
    );
  }
  e.GetApplicationLogDemand = n;
})((fe ||= {}));
var Z = e(t(), 1),
  Q = i(),
  pe = { 1: [62, 20, 28, 25, 22], 2: [35, 3, 20, 21, 22] };
function me(e) {
  let [t, n] = (0, Z.useState)(null),
    [r, i] = (0, Z.useState)(`main`),
    [a, o] = (0, Z.useState)(!1),
    [s, c] = (0, Z.useState)(!1),
    [u, d] = (0, Z.useState)(null),
    [f, p] = (0, Z.useState)(null),
    [_, y] = (0, Z.useState)(null),
    [x, S] = (0, Z.useState)(!1),
    [C, w] = (0, Z.useState)(!1),
    [T, D] = (0, Z.useState)(0),
    [O, k] = (0, Z.useState)(``),
    A =
      !!e.rtContentCreatedAt &&
      Date.now() / 1e3 - e.rtContentCreatedAt > 2592e3,
    j = (e.subject.subject_type ? pe[e.subject.subject_type] : void 0) ?? [],
    N = a || s || u || f || _ || x || C,
    P = ge(e.authorSteamID),
    L = 0;
  if (P.isSuccess) {
    let e = P.data;
    e.pref_primary_language !== void 0 && e.pref_primary_language !== -1
      ? (L = e.pref_primary_language)
      : e.last_logon_langauge !== void 0 &&
        e.last_logon_langauge !== -1 &&
        (L = e.last_logon_langauge);
  }
  let R = he(E(t), L);
  (0, Z.useEffect)(() => {
    k(
      R.data?.quicktext?.content?.content ??
        R.data?.english_reference?.content ??
        ``,
    );
  }, [R.data, P.data]);
  let z = async () => {
      ne(t !== null, `eReason must be non-null to sanction`);
      let n = [];
      (a && n.push({ sanction: 1 }),
        s && n.push({ sanction: 8 }),
        u && n.push({ sanction: 3, days: u }),
        f && n.push({ sanction: 2, days: f }),
        _ && n.push({ sanction: 5, days: _ }),
        x && n.push({ sanction: 4, days: -1 }),
        C && n.push({ sanction: 7 }),
        T === 1
          ? n.push({ sanction: 12, escalate_to: 1 })
          : T === 10 && n.push({ sanction: 12, escalate_to: 10 }),
        await e.sanctionMutation.mutateAsync({
          sanctions: n,
          message: O.trim(),
          reason: t,
        }),
        e.onSanction());
    },
    V = (e) => {
      (n(e), i(`main`));
    },
    H = (e) => {
      e ? (w(!0), y(7), n(16)) : (w(!1), y(-1));
    };
  return (0, Q.jsxs)(Q.Fragment, {
    children: [
      r === `reason` && (0, Q.jsx)(m, { reasons: te, onSelect: V }),
      r === `main` &&
        (0, Q.jsxs)(b, {
          children: [
            (0, Q.jsxs)(b, {
              className: `gDpRvQSyEhc-`,
              children: [
                e.sanctionMutation.isError &&
                  (0, Q.jsxs)(`div`, {
                    className: I(`_0Aus5xkg4rs-`, `WfjrnpAtOos-`),
                    children: [
                      (0, Q.jsx)(B, {}),
                      ` Error: `,
                      e.sanctionMutation.error.message,
                    ],
                  }),
                (0, Q.jsx)(`label`, { htmlFor: `reason`, children: `Reason:` }),
                (0, Q.jsx)(`button`, {
                  id: `reason`,
                  className: void 0,
                  onClick: () => i(`reason`),
                  children:
                    t === null
                      ? M.Localize(`#commentsanctiondialog_selectreason`)
                      : v(t),
                }),
                j.length > 0 &&
                  (0, Q.jsx)(`div`, {
                    className: `M5MEiztLFqg-`,
                    children: j.map((e) =>
                      (0, Q.jsx)(
                        F,
                        {
                          onClick: () => n(t === e ? null : e),
                          size: `1`,
                          variant: t === e ? `basic` : `dark`,
                          children: v(e),
                        },
                        e,
                      ),
                    ),
                  }),
                (0, Q.jsxs)(`label`, {
                  className: `_0Aus5xkg4rs-`,
                  children: [
                    (0, Q.jsx)(`input`, {
                      type: `checkbox`,
                      checked: a,
                      onChange: (e) => o(e.target.checked),
                    }),
                    ` Delete`,
                  ],
                }),
                (0, Q.jsxs)(`label`, {
                  className: `_0Aus5xkg4rs-`,
                  children: [
                    (0, Q.jsx)(`input`, {
                      type: `checkbox`,
                      checked: s,
                      onChange: (e) => c(e.target.checked),
                    }),
                    ` Issue Warning`,
                  ],
                }),
                A &&
                  !!u &&
                  (0, Q.jsxs)(`div`, {
                    className: I(`_0Aus5xkg4rs-`, `WfjrnpAtOos-`),
                    children: [
                      (0, Q.jsx)(B, {}),
                      ` Content is older than 30 days. Are you sure you want to ban?`,
                    ],
                  }),
                e.clanSteamID &&
                  (0, Q.jsxs)(Q.Fragment, {
                    children: [
                      (0, Q.jsx)(`label`, {
                        htmlFor: `hubban`,
                        children: `Ban from hub:`,
                      }),
                      (0, Q.jsxs)(`select`, {
                        id: `hubban`,
                        onChange: (e) =>
                          d(
                            e.target.value === `0`
                              ? null
                              : parseInt(e.target.value),
                          ),
                        value: u ?? 0,
                        children: [
                          (0, Q.jsx)(`option`, {
                            value: `0`,
                            children: `Do not ban`,
                          }),
                          (0, Q.jsx)(`option`, {
                            value: `1`,
                            children: `1 day`,
                          }),
                          (0, Q.jsx)(`option`, {
                            value: `3`,
                            children: `3 days`,
                          }),
                          (0, Q.jsx)(`option`, {
                            value: `7`,
                            children: `7 days`,
                          }),
                          (0, Q.jsx)(`option`, {
                            value: `14`,
                            children: `14 days`,
                          }),
                          (0, Q.jsx)(`option`, {
                            value: `30`,
                            children: `30 days`,
                          }),
                          (0, Q.jsx)(`option`, {
                            value: `90`,
                            children: `3 months`,
                          }),
                          (0, Q.jsx)(`option`, {
                            value: `365`,
                            children: `1 year`,
                          }),
                          (0, Q.jsx)(`option`, {
                            value: `-1`,
                            children: `Permanent`,
                          }),
                        ],
                      }),
                      !1,
                    ],
                  }),
                A &&
                  !!f &&
                  (0, Q.jsxs)(`div`, {
                    className: I(`_0Aus5xkg4rs-`, `WfjrnpAtOos-`),
                    children: [
                      (0, Q.jsx)(B, {}),
                      ` Content is older than 30 days. Are you sure you want to ban?`,
                    ],
                  }),
                (0, Q.jsx)(`label`, {
                  htmlFor: `communityban`,
                  children: `Ban from community:`,
                }),
                (0, Q.jsxs)(`select`, {
                  id: `communityban`,
                  onChange: (e) =>
                    p(e.target.value === `0` ? null : parseInt(e.target.value)),
                  value: f ?? 0,
                  children: [
                    (0, Q.jsx)(`option`, {
                      value: `0`,
                      children: `Do not ban`,
                    }),
                    (0, Q.jsx)(`option`, { value: `1`, children: `1 day` }),
                    (0, Q.jsx)(`option`, { value: `3`, children: `3 days` }),
                    (0, Q.jsx)(`option`, { value: `7`, children: `7 days` }),
                    (0, Q.jsx)(`option`, { value: `14`, children: `14 days` }),
                    (0, Q.jsx)(`option`, { value: `30`, children: `30 days` }),
                    (0, Q.jsx)(`option`, { value: `90`, children: `3 months` }),
                    (0, Q.jsx)(`option`, { value: `365`, children: `1 year` }),
                    (0, Q.jsx)(`option`, {
                      value: `-1`,
                      children: `Permanent`,
                    }),
                  ],
                }),
                !1,
                (0, Q.jsx)(`label`, {
                  htmlFor: `deletecomments`,
                  children: `Delete comments since:`,
                }),
                (0, Q.jsxs)(`select`, {
                  id: `deletecomments`,
                  disabled: C,
                  onChange: (e) =>
                    y(
                      e.target.value === `-1` ? null : parseInt(e.target.value),
                    ),
                  value: _ ?? -1,
                  children: [
                    (0, Q.jsx)(`option`, {
                      value: `-1`,
                      children: `Do not delete`,
                    }),
                    (0, Q.jsx)(`option`, { value: `1`, children: `1 day` }),
                    (0, Q.jsx)(`option`, { value: `7`, children: `7 days` }),
                    (0, Q.jsx)(`option`, { value: `14`, children: `14 days` }),
                    (0, Q.jsx)(`option`, { value: `30`, children: `30 days` }),
                    (0, Q.jsx)(`option`, {
                      value: `0`,
                      children: `All comments`,
                    }),
                  ],
                }),
                (0, Q.jsxs)(`span`, {
                  className: `_0Aus5xkg4rs-`,
                  children: [
                    (0, Q.jsx)(`input`, {
                      type: `checkbox`,
                      checked: x,
                      onChange: (e) => S(e.target.checked),
                    }),
                    `\xA0Permanent trade ban`,
                  ],
                }),
                !1,
                (0, Q.jsxs)(`span`, {
                  className: `_0Aus5xkg4rs-`,
                  children: [
                    (0, Q.jsx)(`input`, {
                      type: `checkbox`,
                      checked: C,
                      onChange: (e) => H(e.target.checked),
                    }),
                    `\xA0Mark as suspicious`,
                  ],
                }),
                (0, Q.jsx)(`label`, {
                  htmlFor: `escalateto`,
                  children: `Escalate to`,
                }),
                (0, Q.jsxs)(`select`, {
                  id: `escalateto`,
                  onChange: (e) => D(parseInt(e.target.value)),
                  value: T,
                  children: [
                    (0, Q.jsx)(`option`, {
                      value: 0,
                      children: `Do not escalate`,
                    }),
                    (0, Q.jsx)(`option`, { value: 1, children: `Supervisor` }),
                    (0, Q.jsx)(`option`, { value: 10, children: `Valve` }),
                  ],
                }),
                (0, Q.jsx)(`textarea`, {
                  className: I(`_0Aus5xkg4rs-`, `Obo5tCs0Dgo-`),
                  placeholder: `Message to send (required)`,
                  value: O,
                  onChange: (e) => k(e.target.value),
                }),
              ],
            }),
            (0, Q.jsxs)(b, {
              className: `iummRPlc5UA-`,
              children: [
                e.sanctionMutation.isPending &&
                  (0, Q.jsx)(l, { size: `small` }),
                !e.sanctionMutation.isPending &&
                  (0, Q.jsxs)(Q.Fragment, {
                    children: [
                      (0, Q.jsx)(h, {
                        onClick: e.onCancel,
                        children: `Cancel`,
                      }),
                      (0, Q.jsx)(g, {
                        onClick: z,
                        disabled: t === null || !N || O.trim().length === 0,
                        children: `Sanction`,
                      }),
                    ],
                  }),
              ],
            }),
          ],
        }),
    ],
  });
}
function he(e, t) {
  let n = re();
  return r({
    queryKey: [`get_quick_text`, e, t],
    queryFn: async () => {
      if (e == null || t === void 0) return null;
      let r = ee.Init(Y);
      (r.Body().set_quicktext_id(e), r.Body().set_language(R(t)));
      let i = await X.GetQuickText(n, r);
      if (i.GetEResult() !== 1)
        throw Error(`useQuickText failed with EResult ` + i.GetEResult());
      return i.Body().toObject();
    },
    enabled: e !== void 0,
  });
}
function ge(e) {
  return r({
    queryKey: [`get_primary_language_for_user`, e],
    queryFn: async () => {
      if (e === `0` || !e) throw Error(`Invalid steamid`);
      let t = await (
        await fetch(
          `${W.COMMUNITY_BASE_URL}profiles/${e}/ajaxlanguagepreferences`,
        )
      ).json();
      if (t.success === 1) return t.preferences;
      throw Error(`Failed GetPrimaryLanguageForUser. EResult: ` + t.success);
    },
  });
}
var _e = `qJiMpgjUBmw-`,
  ve = `TMrWHSfHqDs-`,
  ye = `RxrRIG6Jn9o-`;
function be(e) {
  let { subject: t } = e,
    [n, r] = (0, Z.useState)(!1),
    i = t && (t.unresolved_report_count > 0 || t.unresolved_dispute_count > 0),
    o = (0, Q.jsx)(a, {
      onClick: () => r(!0),
      children: (0, Q.jsxs)(C, {
        direction: `row`,
        justify: `between`,
        align: `baseline`,
        gap: `1`,
        children: [
          i &&
            (0, Q.jsx)(`img`, {
              className: `tPmeaVOVhvg-`,
              src: `${W.COMMUNITY_BASE_URL}public/images/skin_1/notification_icon_flag.png`,
            }),
          M.Localize(`#commentsanctiondialog_moderate`),
          t &&
            t.required_moderator_level === 10 &&
            (0, Q.jsx)(`span`, {
              className: `_2T5Cy4opNNw-`,
              children: `(VO)`,
            }),
          t &&
            t.required_moderator_level === 1 &&
            (0, Q.jsx)(`span`, {
              className: `WUCJ-cE1nNQ-`,
              children: `(Supervisor)`,
            }),
        ],
      }),
    });
  return (0, Q.jsxs)(Q.Fragment, {
    children: [
      n && (0, Q.jsx)(xe, { onClose: () => r(!1), ...e }),
      t &&
        (0, Q.jsx)(ae, {
          toolTipContent: (0, Q.jsx)($, { subject: t }),
          direction: `bottom`,
          nDelayShowMS: 0,
          children: o,
        }),
      !t && o,
    ],
  });
}
function $(e) {
  let { subject: t } = e,
    n = (0, Z.useMemo)(() => {
      let e = S(t?.reports ?? [], (e) => e.report_reason);
      return (e.sort((e, t) => e[1] - t[1]), e);
    }, [t.reports]);
  return n.length === 0
    ? null
    : (0, Q.jsxs)(Q.Fragment, {
        children: [
          (0, Q.jsx)(`div`, { children: M.Localize(`#reasonlist_title`) }),
          n.map(([e, t]) =>
            (0, Q.jsx)(
              `div`,
              { children: M.Localize(`#reasonlist_reasonwithcount`, v(e), t) },
              e,
            ),
          ),
        ],
      });
}
function xe(e) {
  let {
      sanctionMutation: t,
      acquitMutation: n,
      subject: r,
      eSubjectType: i,
      gidComment: a,
      clanSteamID: o,
      authorSteamID: s,
      onClose: c,
    } = e,
    l = r?.reported_content_id,
    [m, h] = (0, Z.useState)(`main`),
    g = [
      {
        name: `Reports`,
        key: `reports`,
        contents: (0, Q.jsx)(A, { children: (0, Q.jsx)(u, { subject: r }) }),
      },
      {
        name: `History`,
        key: `history`,
        contents: (0, Q.jsx)(A, {
          children: (0, Q.jsx)(f, { reportedContentID: l }),
        }),
      },
      {
        name: `Details`,
        key: `details`,
        contents: (0, Q.jsx)(A, { children: e.children }),
      },
    ],
    v = () => {
      (e.onClose(),
        window.location.href.split(`#`).length === 1 &&
          a !== `0` &&
          (window.location.href += `#c` + a),
        window.location.reload());
    },
    y = 0,
    b = 0;
  if (r)
    for (let e of r.reports)
      (e.time_resolved && !e.time_disputed && y++,
        e.time_dispute_resolved && b++);
  let x =
      !!r?.reported_content_id && !r.owner_dispute_time && r.resolved === 14,
    S = r !== void 0 && !!r.owner_dispute_time;
  return (0, Q.jsx)(ie, {
    onlyPopoutIfNeeded: !0,
    popupHeight: 340,
    popupWidth: 640,
    strTitle: `Moderate subject`,
    children: (0, Q.jsx)(L, {
      bAllowFullSize: !0,
      title: `Moderate`,
      "aria-describedby": `moderate`,
      onCancel: e.onClose,
      className: void 0,
      children: (0, Q.jsx)(z, {
        children: (0, Q.jsx)(N, {
          children: (0, Q.jsxs)(`div`, {
            className: _e,
            children: [
              m === `main` &&
                (0, Q.jsxs)(`div`, {
                  className: `Wgs3U5MVZxE-`,
                  children: [
                    (0, Q.jsxs)(`div`, {
                      className: void 0,
                      children: [
                        (0, Q.jsxs)(T, {
                          as: `div`,
                          size: `3`,
                          contrast: `description`,
                          children: [
                            r?.unresolved_report_count ?? 0,
                            ` unresolved / `,
                            y,
                            ` resolved / `,
                            r?.unresolved_dispute_count ?? 0,
                            ` disputed / `,
                            b,
                            ` disputes resolved`,
                          ],
                        }),
                        (0, Q.jsx)(_, { tabs: g, bDisableRouting: !0 }),
                      ],
                    }),
                    (0, Q.jsxs)(`div`, {
                      className: `XevVgxU7JM8-`,
                      children: [
                        (0, Q.jsx)(`button`, {
                          onClick: () => h(`sanction`),
                          children: (0, Q.jsxs)(C, {
                            direction: `row`,
                            justify: `center`,
                            align: `center`,
                            children: [
                              (0, Q.jsx)(H, { className: `Pk8e-JCMLtM-` }),
                              ` Sanction`,
                            ],
                          }),
                        }),
                        (0, Q.jsx)(we, {
                          subject: r,
                          acquitMutation: n,
                          onClose: c,
                        }),
                        (0, Q.jsx)(Te, { subject: r, onClose: c }),
                        p(r) &&
                          (0, Q.jsx)(K, {
                            disabled: !l,
                            onClick: () => h(`escalate`),
                            children: M.Localize(
                              `#moderation_escalation_escalate`,
                            ),
                          }),
                        !S &&
                          (0, Q.jsx)(`button`, {
                            disabled: !x,
                            onClick: () => h(`ownerdispute`),
                            children: `Owner Dispute`,
                          }),
                        S &&
                          (0, Q.jsxs)(`span`, {
                            children: [
                              (0, Q.jsx)(`a`, {
                                href: `${W.HELP_BASE_URL}ticketmaster/ticket/${r.owner_dispute_details}`,
                                children: (0, Q.jsx)(T, {
                                  size: `2`,
                                  children: M.Localize(
                                    `#moderation_already_owner_disputed`,
                                  ),
                                }),
                              }),
                              (0, Q.jsx)(`button`, {
                                disabled: !l,
                                onClick: () => h(`editownerdisputedetails`),
                                className: `VDTUVdDNhUU-`,
                                children: (0, Q.jsx)(O, {}),
                              }),
                            ],
                          }),
                      ],
                    }),
                  ],
                }),
              m === `escalate` &&
                !!l &&
                (0, Q.jsx)(d, {
                  reportedContentID: l,
                  eCurrentLevel: r?.required_moderator_level,
                  onClose: () => h(`main`),
                }),
              m === `sanction` &&
                (0, Q.jsx)(me, {
                  subject: r ?? { subject_type: i },
                  clanSteamID: o,
                  authorSteamID: s,
                  sanctionMutation: t,
                  onSanction: v,
                  onCancel: () => h(`main`),
                }),
              m === `ownerdispute` &&
                !!l &&
                (0, Q.jsx)(Ce, {
                  reportedContentID: l,
                  onClose: () => h(`main`),
                }),
              m === `editownerdisputedetails` &&
                !!l &&
                (0, Q.jsx)(Se, {
                  reportedContentID: l,
                  onClose: () => h(`main`),
                  currentDetails: r?.owner_dispute_details ?? ``,
                }),
            ],
          }),
        }),
      }),
    }),
  });
}
function Se(e) {
  let { reportedContentID: t, onClose: n, currentDetails: r } = e,
    [i, a] = (0, Z.useState)(r),
    s = o(t, i);
  return (0, Q.jsxs)(Q.Fragment, {
    children: [
      (0, Q.jsxs)(`label`, {
        children: [
          (0, Q.jsx)(T, {
            size: `2`,
            children: M.Localize(`#moderation_editownerdisputedetails_label`),
          }),
          (0, Q.jsx)(`input`, {
            type: `text`,
            value: i,
            onChange: (e) => a(e.target.value),
          }),
        ],
      }),
      (0, Q.jsxs)(C, {
        justify: `between`,
        direction: `row`,
        children: [
          (0, Q.jsx)(K, {
            onClick: async () => {
              (await s.mutateAsync(), n());
            },
            children: M.Localize(`#moderation_editownerdisputedetails_save`),
          }),
          (0, Q.jsx)(F, {
            onClick: n,
            loading: s.isPending,
            children: M.Localize(`#moderation_ownerdispute_cancel`),
          }),
        ],
      }),
    ],
  });
}
function Ce(e) {
  let { reportedContentID: t, onClose: n } = e,
    [r, i] = (0, Z.useState)(``),
    a = s(t, r);
  return (0, Q.jsxs)(b, {
    className: ve,
    children: [
      (0, Q.jsx)(T, {
        as: `div`,
        size: `2`,
        children: M.Localize(`#moderation_ownerdispute_description`),
      }),
      (0, Q.jsxs)(`label`, {
        children: [
          (0, Q.jsx)(T, {
            size: `2`,
            children: M.Localize(`#moderation_ownerdispute_ticketmastercode`),
          }),
          ` `,
          (0, Q.jsx)(`input`, {
            type: `text`,
            value: r,
            onChange: (e) => i(e.target.value),
          }),
        ],
      }),
      (0, Q.jsxs)(C, {
        justify: `between`,
        direction: `row`,
        children: [
          (0, Q.jsx)(K, {
            onClick: async () => {
              (await a.mutateAsync(), n());
            },
            children: M.Localize(`#moderation_ownerdispute_dispute`),
          }),
          (0, Q.jsx)(K, {
            onClick: n,
            children: M.Localize(`#moderation_ownerdispute_cancel`),
          }),
        ],
      }),
    ],
  });
}
function we(e) {
  let { acquitMutation: t, onClose: n, subject: r } = e,
    i = r && (r.unresolved_report_count > 0 || r.unresolved_dispute_count > 0);
  return (0, Q.jsx)(`button`, {
    onClick: async () => {
      (await t.mutateAsync(void 0), n());
    },
    disabled: !i,
    children: (0, Q.jsxs)(C, {
      direction: `row`,
      justify: `center`,
      align: `center`,
      children: [
        (0, Q.jsx)(V, { className: ye }),
        ` `,
        M.Localize(`#moderation_actions_acquit`),
      ],
    }),
  });
}
function Te(e) {
  let { subject: t, onClose: n } = e,
    r =
      !!t?.reported_content_id &&
      t.resolved !== 0 &&
      (t.unresolved_dispute_count > 0 || t.unresolved_report_count > 0),
    i = c();
  return (0, Q.jsx)(`button`, {
    onClick: async () => {
      t?.reported_content_id &&
        (await i.mutateAsync({ reportedContentID: t.reported_content_id }),
        n());
    },
    disabled: !r,
    children: M.Localize(`#moderation_actions_sustain`),
  });
}
export { be as t };
