/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import {
  Gt as e,
  Ht as t,
  Jt as n,
  Kt as r,
  Ut as i,
  Wt as a,
  Xt as o,
  Yt as s,
  on as c,
  qt as l,
  yt as u,
} from "./mobx.esm.js";
var d = c(o(), 1),
  f = class o extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        o.prototype.version || t(o.M()),
        d.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (o.sm_m ||= {
          proto: o,
          fields: {
            version: { n: 1, br: e.readEnum, bw: s.writeEnum },
            preference_state: { n: 2, br: e.readEnum, bw: s.writeEnum },
            content_customization: { n: 3, c: p },
            valve_analytics: { n: 4, c: m },
            third_party_analytics: { n: 5, c: h },
            third_party_content: { n: 6, c: g },
            utm_enabled: { n: 7, d: !0, br: e.readBool, bw: s.writeBool },
          },
        }),
        o.sm_m
      );
    }
    static MBF() {
      return (o.sm_mbf ||= r(o.M())), o.sm_mbf;
    }
    toObject(e = !1) {
      return o.toObject(e, this);
    }
    static toObject(e, t) {
      return n(o.M(), e, t);
    }
    static fromObject(e) {
      return a(o.M(), e);
    }
    static deserializeBinary(e) {
      let t = new d.BinaryReader(e),
        n = new o();
      return o.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return i(o.MBF(), e, t);
    }
    serializeBinary() {
      var e = new d.BinaryWriter();
      return o.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      l(o.M(), e, t);
    }
    serializeBase64String() {
      var e = new d.BinaryWriter();
      return o.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CAccountPrivacyCookiePreferences`;
    }
  },
  p = class o extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        o.prototype.recentapps || t(o.M()),
        d.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (o.sm_m ||= {
          proto: o,
          fields: { recentapps: { n: 1, br: e.readBool, bw: s.writeBool } },
        }),
        o.sm_m
      );
    }
    static MBF() {
      return (o.sm_mbf ||= r(o.M())), o.sm_mbf;
    }
    toObject(e = !1) {
      return o.toObject(e, this);
    }
    static toObject(e, t) {
      return n(o.M(), e, t);
    }
    static fromObject(e) {
      return a(o.M(), e);
    }
    static deserializeBinary(e) {
      let t = new d.BinaryReader(e),
        n = new o();
      return o.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return i(o.MBF(), e, t);
    }
    serializeBinary() {
      var e = new d.BinaryWriter();
      return o.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      l(o.M(), e, t);
    }
    serializeBase64String() {
      var e = new d.BinaryWriter();
      return o.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CAccountPrivacyCookiePreferences_ContentCustomization`;
    }
  },
  m = class o extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        o.prototype.product_impressions_tracking || t(o.M()),
        d.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (o.sm_m ||= {
          proto: o,
          fields: {
            product_impressions_tracking: {
              n: 1,
              br: e.readBool,
              bw: s.writeBool,
            },
          },
        }),
        o.sm_m
      );
    }
    static MBF() {
      return (o.sm_mbf ||= r(o.M())), o.sm_mbf;
    }
    toObject(e = !1) {
      return o.toObject(e, this);
    }
    static toObject(e, t) {
      return n(o.M(), e, t);
    }
    static fromObject(e) {
      return a(o.M(), e);
    }
    static deserializeBinary(e) {
      let t = new d.BinaryReader(e),
        n = new o();
      return o.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return i(o.MBF(), e, t);
    }
    serializeBinary() {
      var e = new d.BinaryWriter();
      return o.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      l(o.M(), e, t);
    }
    serializeBase64String() {
      var e = new d.BinaryWriter();
      return o.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CAccountPrivacyCookiePreferences_ValveAnalytics`;
    }
  },
  h = class o extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        o.prototype.google_analytics || t(o.M()),
        d.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (o.sm_m ||= {
          proto: o,
          fields: {
            google_analytics: { n: 1, br: e.readBool, bw: s.writeBool },
          },
        }),
        o.sm_m
      );
    }
    static MBF() {
      return (o.sm_mbf ||= r(o.M())), o.sm_mbf;
    }
    toObject(e = !1) {
      return o.toObject(e, this);
    }
    static toObject(e, t) {
      return n(o.M(), e, t);
    }
    static fromObject(e) {
      return a(o.M(), e);
    }
    static deserializeBinary(e) {
      let t = new d.BinaryReader(e),
        n = new o();
      return o.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return i(o.MBF(), e, t);
    }
    serializeBinary() {
      var e = new d.BinaryWriter();
      return o.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      l(o.M(), e, t);
    }
    serializeBase64String() {
      var e = new d.BinaryWriter();
      return o.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CAccountPrivacyCookiePreferences_ThirdPartyAnalytics`;
    }
  },
  g = class o extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        o.prototype.youtube || t(o.M()),
        d.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (o.sm_m ||= {
          proto: o,
          fields: {
            youtube: { n: 1, br: e.readBool, bw: s.writeBool },
            vimeo: { n: 2, br: e.readBool, bw: s.writeBool },
            sketchfab: { n: 3, br: e.readBool, bw: s.writeBool },
            twitter: { n: 4, br: e.readBool, bw: s.writeBool },
          },
        }),
        o.sm_m
      );
    }
    static MBF() {
      return (o.sm_mbf ||= r(o.M())), o.sm_mbf;
    }
    toObject(e = !1) {
      return o.toObject(e, this);
    }
    static toObject(e, t) {
      return n(o.M(), e, t);
    }
    static fromObject(e) {
      return a(o.M(), e);
    }
    static deserializeBinary(e) {
      let t = new d.BinaryReader(e),
        n = new o();
      return o.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return i(o.MBF(), e, t);
    }
    serializeBinary() {
      var e = new d.BinaryWriter();
      return o.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      l(o.M(), e, t);
    }
    serializeBase64String() {
      var e = new d.BinaryWriter();
      return o.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CAccountPrivacyCookiePreferences_ThirdPartyContent`;
    }
  },
  _ = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), d.Message.initialize(this, e, 0, -1, void 0, null);
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
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CAccountPrivacy_GetCookiePreferences_Request`;
    }
  },
  v = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      super(),
        e.prototype.preferences || t(e.M()),
        d.Message.initialize(this, n, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= { proto: e, fields: { preferences: { n: 1, c: f } } }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= r(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return n(e.M(), t, r);
    }
    static fromObject(t) {
      return a(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return i(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      l(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CAccountPrivacy_GetCookiePreferences_Response`;
    }
  },
  y;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(`AccountPrivacy.GetCookiePreferences#1`, u(_, t, n), v, {
      bConstMethod: !0,
      ePrivilege: 1,
      rgBrowserAPISites: [`partner`, `help`, `community`],
    });
  }
  e.GetCookiePreferences = t;
})((y ||= {}));
var b = {
    name: `cookieSettings`,
    options: {
      secure: !0,
      httpOnly: !1,
      path: `/`,
      sameSite: `none`,
      maxAge: 31536e6,
    },
    preferenceControls: { isTechnicallyNecessary: !0 },
  },
  x = {
    name: `sessionid`,
    options: { secure: !0, path: `/`, sameSite: `none` },
    preferenceControls: { isTechnicallyNecessary: !0 },
  },
  S = {
    name: `shoppingCartGID`,
    options: { path: `/`, secure: !0, maxAge: 6048e5 },
    preferenceControls: { isTechnicallyNecessary: !0 },
  },
  C = {
    name: `steamLoginSpoofSteamID`,
    options: { path: `/`, secure: !0 },
    preferenceControls: { isTechnicallyNecessary: !0 },
  };
function w(e) {
  if (!(`document` in globalThis) || !document.cookie) return;
  let t = document.cookie.match(`(^|; )` + e.name + `=([^;]*)`);
  if (t && t[2]) return decodeURIComponent(t[2]);
}
export { C as a, S as i, b as n, y as o, x as r, w as t };
