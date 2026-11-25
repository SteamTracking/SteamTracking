/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./chunk~f025431ab0.js";
import { Ft as t, G as n, Pt as r, at as i } from "./chunk~01cfc309bf.js";
import { t as a } from "./chunk~75db1bf948.js";
import {
  $ as o,
  Ah as s,
  B as c,
  F as l,
  Fh as u,
  Gm as d,
  I as f,
  Ih as p,
  L as m,
  Mh as h,
  Nh as g,
  Nt as _,
  Ph as v,
  Pt as y,
  U as b,
  W as x,
  Xp as S,
  jh as C,
  kh as w,
  mm as T,
  nh as E,
  th as D,
  zt as O,
} from "./main.js";
var k = e(t(), 1),
  A = class e extends k.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.quicktext_id || w(e.M()),
        k.Message.initialize(this, t, 0, -1, [6, 10, 11], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            quicktext_id: { n: 1, br: h.readUint32, bw: p.writeUint32 },
            requires_update: { n: 2, br: h.readBool, bw: p.writeBool },
            title: { n: 3, br: h.readString, bw: p.writeString },
            hidden: { n: 4, br: h.readBool, bw: p.writeBool },
            approved: { n: 5, br: h.readBool, bw: p.writeBool },
            help_request_types: {
              n: 6,
              r: !0,
              q: !0,
              br: h.readUint32,
              pbr: h.readPackedUint32,
              bw: p.writeRepeatedUint32,
            },
            content: { n: 7, c: j },
            button_text: { n: 8, br: h.readString, bw: p.writeString },
            replacement: { n: 9, br: h.readBool, bw: p.writeBool },
            payment_methods: {
              n: 10,
              r: !0,
              q: !0,
              br: h.readUint32,
              pbr: h.readPackedUint32,
              bw: p.writeRepeatedUint32,
            },
            appids: {
              n: 11,
              r: !0,
              q: !0,
              br: h.readUint32,
              pbr: h.readPackedUint32,
              bw: p.writeRepeatedUint32,
            },
            escalation_level: { n: 12, br: h.readEnum, bw: p.writeEnum },
            partner_only: { n: 13, br: h.readBool, bw: p.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= g(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return u(e.M(), t, n);
    }
    static fromObject(t) {
      return C(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new k.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return s(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new k.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      v(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new k.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSupportData_QuickText`;
    }
  },
  j = class e extends k.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.content || w(e.M()),
        k.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            content: { n: 1, br: h.readString, bw: p.writeString },
            major_revision: { n: 2, br: h.readUint32, bw: p.writeUint32 },
            minor_revision: { n: 3, br: h.readUint32, bw: p.writeUint32 },
            author: { n: 4, br: h.readUint32, bw: p.writeUint32 },
            last_update: { n: 5, br: h.readUint32, bw: p.writeUint32 },
            language: { n: 6, br: h.readInt32, bw: p.writeInt32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= g(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return u(e.M(), t, n);
    }
    static fromObject(t) {
      return C(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new k.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return s(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new k.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      v(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new k.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSupportData_QuickTextContent`;
    }
  },
  M = class e extends k.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.quicktext_id || w(e.M()),
        k.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            quicktext_id: { n: 1, br: h.readUint32, bw: p.writeUint32 },
            language: { n: 2, br: h.readString, bw: p.writeString },
            from_sql: { n: 3, br: h.readBool, bw: p.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= g(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return u(e.M(), t, n);
    }
    static fromObject(t) {
      return C(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new k.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return s(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new k.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      v(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new k.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSupportAgents_GetQuickText_Request`;
    }
  },
  N = class e extends k.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.quicktext || w(e.M()),
        k.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            quicktext: { n: 1, c: A },
            english_reference: { n: 2, c: j },
            localization_url: { n: 3, br: h.readString, bw: p.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= g(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return u(e.M(), t, n);
    }
    static fromObject(t) {
      return C(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new k.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return s(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new k.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      v(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new k.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSupportAgents_GetQuickText_Response`;
    }
  },
  P = class e extends k.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || w(e.M()),
        k.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: h.readUint32, bw: p.writeUint32 },
            log_type: { n: 2, br: h.readString, bw: p.writeString },
            version_string: { n: 3, br: h.readString, bw: p.writeString },
            log_contents: { n: 4, br: h.readString, bw: p.writeString },
            request_id: {
              n: 5,
              br: h.readUint64String,
              bw: p.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= g(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return u(e.M(), t, n);
    }
    static fromObject(t) {
      return C(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new k.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return s(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new k.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      v(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new k.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CHelpRequestLogs_UploadUserApplicationLog_Request`;
    }
  },
  F = class e extends k.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.id || w(e.M()),
        k.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            id: { n: 1, br: h.readUint64String, bw: p.writeUint64String },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= g(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return u(e.M(), t, n);
    }
    static fromObject(t) {
      return C(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new k.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return s(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new k.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      v(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new k.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CHelpRequestLogs_UploadUserApplicationLog_Response`;
    }
  },
  I = class e extends k.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || w(e.M()),
        k.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { appid: { n: 1, br: h.readUint32, bw: p.writeUint32 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= g(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return u(e.M(), t, n);
    }
    static fromObject(t) {
      return C(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new k.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return s(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new k.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      v(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new k.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CHelpRequestLogs_GetApplicationLogDemand_Request`;
    }
  },
  L = class e extends k.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.request_id || w(e.M()),
        k.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: h.readUint64String,
              bw: p.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= g(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return u(e.M(), t, n);
    }
    static fromObject(t) {
      return C(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new k.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return s(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new k.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      v(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new k.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CHelpRequestLogs_GetApplicationLogDemand_Response`;
    }
  },
  R;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(`SupportAgents.GetQuickText#1`, E(M, t, n), N, {
      bConstMethod: !0,
      ePrivilege: 5,
      rgBrowserAPISites: [`community`],
    });
  }
  e.GetQuickText = t;
})((R ||= {}));
var z;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(
      `HelpRequestLogs.UploadUserApplicationLog#1`,
      E(P, t, n),
      F,
      { ePrivilege: 1 },
    );
  }
  e.UploadUserApplicationLog = t;
  function n(e, t, n) {
    return e.SendMsg(
      `HelpRequestLogs.GetApplicationLogDemand#1`,
      E(I, t, n),
      L,
      { ePrivilege: 1 },
    );
  }
  e.GetApplicationLogDemand = n;
})((z ||= {}));
function B(e, t) {
  let r = S();
  return n({
    queryKey: [`get_quick_text`, e, t],
    queryFn: async () => {
      if (e == null || t === void 0) return null;
      let n = D.Init(M);
      (n.Body().set_quicktext_id(e), n.Body().set_language(d(t)));
      let i = await R.GetQuickText(r, n);
      if (i.GetEResult() !== 1)
        throw Error(`useQuickText failed with EResult ` + i.GetEResult());
      return i.Body().toObject();
    },
    enabled: e != null && t !== void 0,
  });
}
function V(e) {
  return n({
    queryKey: [`get_primary_language_for_user`, e],
    queryFn: async () => {
      if (e === `0` || !e) throw Error(`Invalid steamid`);
      let t = await (
        await fetch(
          `${T.COMMUNITY_BASE_URL}profiles/${e}/ajaxlanguagepreferences`,
        )
      ).json();
      if (t.success === 1) return t.preferences;
      throw Error(`Failed GetPrimaryLanguageForUser. EResult: ` + t.success);
    },
    enabled: !!e && e !== `0`,
  });
}
function H(e) {
  let t = V(e ?? ``);
  if (t.isLoading) return;
  let n = t.data;
  return n?.pref_primary_language !== void 0 && n.pref_primary_language !== -1
    ? n.pref_primary_language
    : n?.last_logon_langauge !== void 0 && n.last_logon_langauge !== -1
      ? n.last_logon_langauge
      : 0;
}
function U(e, t) {
  let n = B(e, H(e === null ? void 0 : t));
  return (
    n.data?.quicktext?.content?.content ?? n.data?.english_reference?.content
  );
}
var W = e(r(), 1),
  G = i();
function K(e) {
  let [t, n] = (0, W.useState)(null),
    [r, i] = (0, W.useState)([]),
    [s, u] = (0, W.useState)(!1),
    [d, p] = (0, W.useState)(!1),
    h = e.reasons;
  for (let e of r) h = h[e].children;
  let g = t === null ? null : x(t),
    v = t === null ? null : b(t),
    S = () => {
      t === null
        ? r.length === 0
          ? e.onSelect(null)
          : i(r.slice(0, -1))
        : n(null);
    };
  return (0, G.jsxs)(`div`, {
    children: [
      t === null &&
        (0, G.jsxs)(G.Fragment, {
          children: [
            (0, G.jsx)(`div`, {
              className: `oBBLRDyMwQ0-`,
              children: h.map((t, a) =>
                l(t)
                  ? (0, G.jsx)(
                      y,
                      {
                        href: t.url,
                        width: `100%`,
                        color: `dull`,
                        children: o.Localize(t.strLocToken),
                      },
                      t.url,
                    )
                  : (0, G.jsx)(
                      _,
                      {
                        onClick: () => {
                          if (f(t)) {
                            let e = [...r];
                            (e.push(a), i(e));
                          } else if (m(t))
                            x(t.value) || b(t.value)
                              ? n(t.value)
                              : e.onSelect(t.value);
                          else throw Error(`This should be unreachable.`);
                        },
                        width: `100%`,
                        color: `dull`,
                        children: (0, G.jsxs)(O, {
                          justify: `between`,
                          align: `center`,
                          width: `100%`,
                          children: [
                            (0, G.jsx)(`span`, {
                              children: f(t)
                                ? o.Localize(t.strLocToken)
                                : c(t.value),
                            }),
                            f(t) && (0, G.jsx)(`span`, { children: `▶` }),
                          ],
                        }),
                      },
                      a,
                    ),
              ),
            }),
            (0, G.jsx)(a, { onClick: S, children: `Back` }),
          ],
        }),
      t !== null &&
        (0, G.jsxs)(`div`, {
          className: `oBBLRDyMwQ0-`,
          children: [
            (0, G.jsx)(`div`, { className: `h39kXDS8c6A-`, children: c(t) }),
            g !== null &&
              (0, G.jsxs)(`label`, {
                children: [
                  (0, G.jsx)(`input`, {
                    type: `checkbox`,
                    checked: s,
                    onChange: (e) => u(e.target.checked),
                  }),
                  ` Targeted at women`,
                ],
              }),
            v !== null &&
              (0, G.jsxs)(`label`, {
                children: [
                  (0, G.jsx)(`input`, {
                    type: `checkbox`,
                    checked: d,
                    onChange: (e) => p(e.target.checked),
                  }),
                  ` Deepfake`,
                ],
              }),
            (0, G.jsxs)(`div`, {
              className: void 0,
              children: [
                (0, G.jsx)(a, { onClick: S, children: `Back` }),
                (0, G.jsx)(a, {
                  onClick: () => {
                    let n = t;
                    n !== null &&
                      (s && x(n) !== null && (n = x(n)),
                      d && b(n) !== null && (n = b(n)),
                      e.onSelect(n));
                  },
                  children: `Continue`,
                }),
              ],
            }),
          ],
        }),
    ],
  });
}
export { U as n, K as t };
