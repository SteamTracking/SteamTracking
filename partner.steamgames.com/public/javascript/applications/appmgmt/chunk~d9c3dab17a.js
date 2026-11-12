/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import {
  Gt as e,
  Jt as t,
  Kt as n,
  Ut as r,
  Wt as i,
  Xt as a,
  Yt as o,
  Zt as s,
  bt as c,
  qt as l,
  sn as u,
} from "./chunk~de7f2df91c.js";
var d = u(s(), 1),
  f = class s extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        s.prototype.version || r(s.M()),
        d.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (s.sm_m ||= {
          proto: s,
          fields: {
            version: { n: 1, br: n.readEnum, bw: a.writeEnum },
            preference_state: { n: 2, br: n.readEnum, bw: a.writeEnum },
            content_customization: { n: 3, c: p },
            valve_analytics: { n: 4, c: m },
            third_party_analytics: { n: 5, c: h },
            third_party_content: { n: 6, c: g },
            utm_enabled: { n: 7, d: !0, br: n.readBool, bw: a.writeBool },
          },
        }),
        s.sm_m
      );
    }
    static MBF() {
      return ((s.sm_mbf ||= l(s.M())), s.sm_mbf);
    }
    toObject(e = !1) {
      return s.toObject(e, this);
    }
    static toObject(e, t) {
      return o(s.M(), e, t);
    }
    static fromObject(t) {
      return e(s.M(), t);
    }
    static deserializeBinary(e) {
      let t = new d.BinaryReader(e),
        n = new s();
      return s.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return i(s.MBF(), e, t);
    }
    serializeBinary() {
      var e = new d.BinaryWriter();
      return (s.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      t(s.M(), e, n);
    }
    serializeBase64String() {
      var e = new d.BinaryWriter();
      return (s.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CAccountPrivacyCookiePreferences`;
    }
  },
  p = class s extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        s.prototype.recentapps || r(s.M()),
        d.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (s.sm_m ||= {
          proto: s,
          fields: { recentapps: { n: 1, br: n.readBool, bw: a.writeBool } },
        }),
        s.sm_m
      );
    }
    static MBF() {
      return ((s.sm_mbf ||= l(s.M())), s.sm_mbf);
    }
    toObject(e = !1) {
      return s.toObject(e, this);
    }
    static toObject(e, t) {
      return o(s.M(), e, t);
    }
    static fromObject(t) {
      return e(s.M(), t);
    }
    static deserializeBinary(e) {
      let t = new d.BinaryReader(e),
        n = new s();
      return s.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return i(s.MBF(), e, t);
    }
    serializeBinary() {
      var e = new d.BinaryWriter();
      return (s.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      t(s.M(), e, n);
    }
    serializeBase64String() {
      var e = new d.BinaryWriter();
      return (s.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CAccountPrivacyCookiePreferences_ContentCustomization`;
    }
  },
  m = class s extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        s.prototype.product_impressions_tracking || r(s.M()),
        d.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (s.sm_m ||= {
          proto: s,
          fields: {
            product_impressions_tracking: {
              n: 1,
              br: n.readBool,
              bw: a.writeBool,
            },
          },
        }),
        s.sm_m
      );
    }
    static MBF() {
      return ((s.sm_mbf ||= l(s.M())), s.sm_mbf);
    }
    toObject(e = !1) {
      return s.toObject(e, this);
    }
    static toObject(e, t) {
      return o(s.M(), e, t);
    }
    static fromObject(t) {
      return e(s.M(), t);
    }
    static deserializeBinary(e) {
      let t = new d.BinaryReader(e),
        n = new s();
      return s.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return i(s.MBF(), e, t);
    }
    serializeBinary() {
      var e = new d.BinaryWriter();
      return (s.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      t(s.M(), e, n);
    }
    serializeBase64String() {
      var e = new d.BinaryWriter();
      return (s.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CAccountPrivacyCookiePreferences_ValveAnalytics`;
    }
  },
  h = class s extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        s.prototype.google_analytics || r(s.M()),
        d.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (s.sm_m ||= {
          proto: s,
          fields: {
            google_analytics: { n: 1, br: n.readBool, bw: a.writeBool },
          },
        }),
        s.sm_m
      );
    }
    static MBF() {
      return ((s.sm_mbf ||= l(s.M())), s.sm_mbf);
    }
    toObject(e = !1) {
      return s.toObject(e, this);
    }
    static toObject(e, t) {
      return o(s.M(), e, t);
    }
    static fromObject(t) {
      return e(s.M(), t);
    }
    static deserializeBinary(e) {
      let t = new d.BinaryReader(e),
        n = new s();
      return s.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return i(s.MBF(), e, t);
    }
    serializeBinary() {
      var e = new d.BinaryWriter();
      return (s.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      t(s.M(), e, n);
    }
    serializeBase64String() {
      var e = new d.BinaryWriter();
      return (s.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CAccountPrivacyCookiePreferences_ThirdPartyAnalytics`;
    }
  },
  g = class s extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        s.prototype.youtube || r(s.M()),
        d.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (s.sm_m ||= {
          proto: s,
          fields: {
            youtube: { n: 1, br: n.readBool, bw: a.writeBool },
            vimeo: { n: 2, br: n.readBool, bw: a.writeBool },
            sketchfab: { n: 3, br: n.readBool, bw: a.writeBool },
            twitter: { n: 4, br: n.readBool, bw: a.writeBool },
          },
        }),
        s.sm_m
      );
    }
    static MBF() {
      return ((s.sm_mbf ||= l(s.M())), s.sm_mbf);
    }
    toObject(e = !1) {
      return s.toObject(e, this);
    }
    static toObject(e, t) {
      return o(s.M(), e, t);
    }
    static fromObject(t) {
      return e(s.M(), t);
    }
    static deserializeBinary(e) {
      let t = new d.BinaryReader(e),
        n = new s();
      return s.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return i(s.MBF(), e, t);
    }
    serializeBinary() {
      var e = new d.BinaryWriter();
      return (s.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      t(s.M(), e, n);
    }
    serializeBase64String() {
      var e = new d.BinaryWriter();
      return (s.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CAccountPrivacyCookiePreferences_ThirdPartyContent`;
    }
  },
  _ = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), d.Message.initialize(this, e, 0, -1, void 0, null));
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
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAccountPrivacy_GetCookiePreferences_Request`;
    }
  },
  v = class n extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        n.prototype.preferences || r(n.M()),
        d.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (n.sm_m ||= { proto: n, fields: { preferences: { n: 1, c: f } } }),
        n.sm_m
      );
    }
    static MBF() {
      return ((n.sm_mbf ||= l(n.M())), n.sm_mbf);
    }
    toObject(e = !1) {
      return n.toObject(e, this);
    }
    static toObject(e, t) {
      return o(n.M(), e, t);
    }
    static fromObject(t) {
      return e(n.M(), t);
    }
    static deserializeBinary(e) {
      let t = new d.BinaryReader(e),
        r = new n();
      return n.deserializeBinaryFromReader(r, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return i(n.MBF(), e, t);
    }
    serializeBinary() {
      var e = new d.BinaryWriter();
      return (n.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      t(n.M(), e, r);
    }
    serializeBase64String() {
      var e = new d.BinaryWriter();
      return (n.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CAccountPrivacy_GetCookiePreferences_Response`;
    }
  },
  y;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(`AccountPrivacy.GetCookiePreferences#1`, c(_, t, n), v, {
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
