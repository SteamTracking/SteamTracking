/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import {
  Ct as e,
  G as t,
  J as n,
  K as r,
  Pt as i,
  St as a,
  _t as o,
  a as s,
  bt as c,
  g as l,
  gt as u,
  k as d,
  tt as f,
  vt as p,
  wt as m,
  xt as h,
  yt as g,
} from "./chunk~de7f2df91c.js";
import { t as _ } from "./chunk~25a6634263.js";
import { t as v } from "./chunk~4571d27d07.js";
var y = i(m(), 1),
  b = class t extends y.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.version || u(t.M()),
        y.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            version: { n: 1, br: g.readEnum, bw: e.writeEnum },
            preference_state: { n: 2, br: g.readEnum, bw: e.writeEnum },
            content_customization: { n: 3, c: x },
            valve_analytics: { n: 4, c: S },
            third_party_analytics: { n: 5, c: C },
            third_party_content: { n: 6, c: w },
            utm_enabled: { n: 7, d: !0, br: g.readBool, bw: e.writeBool },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= c(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return a(t.M(), e, n);
    }
    static fromObject(e) {
      return p(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new y.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return o(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new y.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      h(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new y.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CAccountPrivacyCookiePreferences`;
    }
  },
  x = class t extends y.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.recentapps || u(t.M()),
        y.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: { recentapps: { n: 1, br: g.readBool, bw: e.writeBool } },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= c(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return a(t.M(), e, n);
    }
    static fromObject(e) {
      return p(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new y.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return o(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new y.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      h(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new y.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CAccountPrivacyCookiePreferences_ContentCustomization`;
    }
  },
  S = class t extends y.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.product_impressions_tracking || u(t.M()),
        y.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            product_impressions_tracking: {
              n: 1,
              br: g.readBool,
              bw: e.writeBool,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= c(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return a(t.M(), e, n);
    }
    static fromObject(e) {
      return p(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new y.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return o(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new y.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      h(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new y.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CAccountPrivacyCookiePreferences_ValveAnalytics`;
    }
  },
  C = class t extends y.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.google_analytics || u(t.M()),
        y.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            google_analytics: { n: 1, br: g.readBool, bw: e.writeBool },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= c(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return a(t.M(), e, n);
    }
    static fromObject(e) {
      return p(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new y.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return o(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new y.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      h(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new y.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CAccountPrivacyCookiePreferences_ThirdPartyAnalytics`;
    }
  },
  w = class t extends y.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.youtube || u(t.M()),
        y.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            youtube: { n: 1, br: g.readBool, bw: e.writeBool },
            vimeo: { n: 2, br: g.readBool, bw: e.writeBool },
            sketchfab: { n: 3, br: g.readBool, bw: e.writeBool },
            twitter: { n: 4, br: g.readBool, bw: e.writeBool },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= c(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return a(t.M(), e, n);
    }
    static fromObject(e) {
      return p(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new y.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return o(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new y.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      h(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new y.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CAccountPrivacyCookiePreferences_ThirdPartyContent`;
    }
  },
  T = class e extends y.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), y.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new y.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new y.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new y.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAccountPrivacy_GetCookiePreferences_Request`;
    }
  },
  E = class e extends y.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.preferences || u(e.M()),
        y.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= { proto: e, fields: { preferences: { n: 1, c: b } } }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= c(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return p(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new y.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return o(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new y.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new y.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAccountPrivacy_GetCookiePreferences_Response`;
    }
  },
  D;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(`AccountPrivacy.GetCookiePreferences#1`, r(T, t, n), E, {
      bConstMethod: !0,
      ePrivilege: 1,
      rgBrowserAPISites: [`all`],
    });
  }
  e.GetCookiePreferences = t;
})((D ||= {}));
var O = {
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
  k = {
    name: `sessionid`,
    options: { secure: !0, path: `/`, sameSite: `none` },
    preferenceControls: { isTechnicallyNecessary: !0 },
  },
  A = {
    name: `shoppingCartGID`,
    options: { path: `/`, secure: !0, maxAge: 6048e5 },
    preferenceControls: { isTechnicallyNecessary: !0 },
  },
  j = {
    name: `steamLoginSpoofSteamID`,
    options: { path: `/`, secure: !0 },
    preferenceControls: { isTechnicallyNecessary: !0 },
  };
function M(e) {
  if (!(`document` in globalThis) || !document.cookie) return;
  let t = document.cookie.match(`(^|; )` + e.name + `=([^;]*)`);
  if (t && t[2]) return decodeURIComponent(t[2]);
}
var N = i(v(), 1);
function P(e) {
  try {
    if (!e || typeof e != `string`) return null;
    let t = e.split(`.`);
    if (t.length !== 3) return null;
    let [n, r] = t,
      i = R(n),
      a = R(r);
    return !i || !a ? null : { header: JSON.parse(i), body: JSON.parse(a) };
  } catch (e) {
    return (
      console.error(`Exception while attempting to decode token: "${e}"`), null
    );
  }
}
function F(e) {
  return e ? e.body.exp : 0;
}
function I(e) {
  return e ? e.body.nbf || e.body.iat : 0;
}
function L(e) {
  let t = F(e),
    n = I(e),
    r = 900,
    i = t - n;
  return (i < 1350 && (r = i <= 60 ? 0 : 60), F(e) - r < Date.now() / 1e3);
}
function R(e) {
  return atob(e.replace(/-/g, `+`).replace(/_/g, `/`));
}
var z = class {
  m_ServiceTransport;
  m_AnonymousServiceTransport;
  m_strWebAPIBaseURL;
  m_webApiAccessToken = ``;
  m_bJsonMode = !1;
  m_bJWTToken = !1;
  m_fnRequestNewAccessToken;
  m_refreshAccessTokenPromise;
  m_dtLastExpireCheck = 0;
  m_strSpoofedSteamID = ``;
  constructor(e, t = ``, n = !1, r) {
    ((this.m_strWebAPIBaseURL = e),
      (this.m_webApiAccessToken = t),
      (this.m_bJsonMode = n),
      (this.m_fnRequestNewAccessToken = r),
      (this.m_bJWTToken = P(t) != null),
      (this.m_ServiceTransport = {
        SendMsg: this.SendMsgAndAwaitResponse.bind(this, { bSendAuth: !0 }),
        SendNotification: this.SendNotification.bind(this, { bSendAuth: !0 }),
        MakeReady: this.MakeReady.bind(this),
      }),
      (this.m_AnonymousServiceTransport = {
        SendMsg: this.SendMsgAndAwaitResponse.bind(this, { bSendAuth: !1 }),
        SendNotification: this.SendNotification.bind(this, { bSendAuth: !1 }),
        MakeReady: this.MakeReady.bind(this),
      }));
    let i = M(j);
    i && /[0-9]+/g.test(i) && (this.m_strSpoofedSteamID = i);
  }
  WaitUntilLoggedOn() {
    return Promise.resolve();
  }
  GetServerRTime32() {
    return Number(new Date());
  }
  get steamid() {
    return new _();
  }
  RTime32ToDate(e) {
    return new Date(e * 1e3);
  }
  MakeReady() {
    return Promise.resolve({ result: 1, message: `ready` });
  }
  GetServiceTransport() {
    return this.m_ServiceTransport;
  }
  GetWebAPIAccessToken() {
    return this.m_webApiAccessToken;
  }
  GetAnonymousServiceTransport() {
    return this.m_AnonymousServiceTransport;
  }
  async SendMsgAndAwaitResponse(e, r, i, a, o) {
    let s,
      c = 0;
    try {
      if (this.m_bJWTToken && e.bSendAuth && this.m_webApiAccessToken) {
        let e = Date.now() / 1e3;
        this.m_refreshAccessTokenPromise
          ? await this.m_refreshAccessTokenPromise
          : (window.bForceTokenRefresh ||
              (this.m_fnRequestNewAccessToken &&
                e - this.m_dtLastExpireCheck > 60)) &&
            ((this.m_dtLastExpireCheck = e),
            L(P(this.m_webApiAccessToken)) &&
              (await this.AttemptTokenRefresh()));
      }
      let l = await this.Send(e, r, i, o);
      if (((c = l.status), c == 200)) {
        if (
          ((s = t.Init(a, 147)),
          l.headers &&
            (l.headers.get(`x-eresult`) &&
              s.Hdr().set_eresult(parseInt(l.headers.get(`x-eresult`))),
            l.headers.get(`x-error_message`) &&
              s.Hdr().set_error_message(l.headers.get(`x-error_message`))),
          this.m_bJsonMode)
        )
          s.SetBodyJSON(await l.json());
        else {
          let e = new n(await l.arrayBuffer());
          s.ReadBodyFromBuffer(a, e);
        }
      }
    } catch {}
    let l = c === 401;
    if (!s) {
      let e = l ? `Unauthorized` : void 0,
        t = c === 429 ? 84 : 2;
      s = this.CreateFailedMsgProtobuf(a, 3, t, e);
    }
    return (
      l &&
        !this.m_refreshAccessTokenPromise &&
        this.m_bJWTToken &&
        e.bSendAuth &&
        this.m_fnRequestNewAccessToken &&
        this.m_webApiAccessToken &&
        (await this.AttemptTokenRefresh()),
      s
    );
  }
  SendNotification(e, t, n, r) {
    return (this.Send(e, t, n, r), !0);
  }
  Send(e, t, n, r) {
    let i = this.CreateWebAPIURL(t),
      a = n.SerializeBody(),
      o = N.fromByteArray(a),
      s = r.eWebAPIKeyRequirement,
      c = r.ePrivilege == 0 && s == 1,
      l = {},
      u = new URLSearchParams();
    if (
      (!e.bSendAuth &&
        s != 1 &&
        console.error(
          `Attempting to invoke service ${t} without auth, but auth is required.`,
        ),
      e.bSendAuth && !c)
    ) {
      let e = `${t} was called over WebAPI with auth`;
      (console.warn(e),
        f().ReportError(Error(e), { bIncludeMessageInIdentifier: !0 }));
    }
    if (
      (this.m_webApiAccessToken &&
        e.bSendAuth &&
        !c &&
        (u.append(`access_token`, this.m_webApiAccessToken),
        this.m_strSpoofedSteamID &&
          u.append(`spoof_steamid`, this.m_strSpoofedSteamID)),
      r.bConstMethod)
    )
      return (
        typeof self < `u` && self.origin && u.append(`origin`, self.origin),
        this.m_bJsonMode
          ? u.append(`input_json`, JSON.stringify(n.Body().toObject()))
          : u.append(`input_protobuf_encoded`, o),
        fetch(`${i}?${u.toString()}`, l)
      );
    {
      let e = new FormData();
      return (
        this.m_bJsonMode
          ? e.append(`input_json`, JSON.stringify(n.Body().toObject()))
          : e.append(`input_protobuf_encoded`, o),
        fetch(`${i}?${u.toString()}`, { ...l, method: `POST`, body: e })
      );
    }
  }
  CreateWebAPIURL(e) {
    let t = e.match(/([^.]+)\.(.+)#(\d+)/);
    if (!t || t.length != 4) throw `Invalid service name: ${e}`;
    return `${this.m_strWebAPIBaseURL}I${t[1]}Service/${t[2]}/v${t[3]}`;
  }
  CreateFailedMsgProtobuf(e, n, r, i) {
    let a = t.Init(e);
    return (
      a.Hdr().set_eresult(r),
      a.Hdr().set_transport_error(n),
      i && a.Hdr().set_error_message(i),
      a
    );
  }
  async AttemptTokenRefresh() {
    if (this.m_fnRequestNewAccessToken)
      try {
        this.m_refreshAccessTokenPromise = this.m_fnRequestNewAccessToken(
          this.m_webApiAccessToken,
        ).catch(
          (e) => (console.error(`Failed to refresh access token: ${e}`), ``),
        );
        let e = await this.m_refreshAccessTokenPromise;
        e && (this.m_webApiAccessToken = e);
      } catch (e) {
        console.error(`Failed to refresh access token: ${e}`);
      } finally {
        this.m_refreshAccessTokenPromise = void 0;
      }
  }
};
function B(e, t) {
  return !!e && (e.includes(`all`) || e.includes(t));
}
async function V() {
  try {
    let e = await fetch(`${l.LOGIN_BASE_URL}jwt/ajaxrefresh`, {
      method: `POST`,
      credentials: `include`,
      body: new URLSearchParams({ redir: window.location.href }),
    });
    if (!e.ok) return !1;
    let t = await e.json();
    if (!t.success || !t.login_url) return !1;
    let n = new URLSearchParams();
    for (let [e, r] of Object.entries(t))
      typeof r == `string` && n.append(e, r);
    return (
      await fetch(t.login_url, {
        method: `POST`,
        credentials: `include`,
        body: n,
      })
    ).ok;
  } catch {
    return !1;
  }
}
var H = class {
  m_ServiceTransport;
  m_AnonymousServiceTransport;
  m_fallbackInterface;
  m_strSiteName;
  m_refreshLoginCookiePromise;
  constructor(e, t = `partner`) {
    ((this.m_fallbackInterface = e),
      (this.m_strSiteName = t),
      (this.m_ServiceTransport = {
        SendMsg: this.SendMsgAndAwaitResponse.bind(this, { bSendAuth: !0 }),
        SendNotification: this.SendNotification.bind(this, { bSendAuth: !0 }),
        MakeReady: this.MakeReady.bind(this),
      }),
      (this.m_AnonymousServiceTransport = {
        SendMsg: this.SendMsgAndAwaitResponse.bind(this, { bSendAuth: !1 }),
        SendNotification: this.SendNotification.bind(this, { bSendAuth: !1 }),
        MakeReady: this.MakeReady.bind(this),
      }));
  }
  async SendMsgAndAwaitResponse(e, t, n, r, i) {
    if (!this.BCanSendMessageViaBrowserAPI(i)) {
      if (this.m_fallbackInterface)
        return e.bSendAuth
          ? this.m_fallbackInterface?.GetServiceTransport().SendMsg(t, n, r, i)
          : this.m_fallbackInterface
              ?.GetAnonymousServiceTransport()
              .SendMsg(t, n, r, i);
      console.error(`No browserapi version of`, t, `and no fallback`);
    }
    let a = await this.SendMsgOnce(e, t, n, r, i);
    return a.status !== 401 ||
      !e.bSendAuth ||
      !(await this.BEnsureLoginCookieRefreshed())
      ? a.msgResult
      : (await this.SendMsgOnce(e, t, n, r, i)).msgResult;
  }
  BCanSendMessageViaBrowserAPI(e) {
    return B(e.rgBrowserAPISites, this.m_strSiteName);
  }
  BEnsureLoginCookieRefreshed() {
    return (
      (this.m_refreshLoginCookiePromise ??= V().finally(() => {
        this.m_refreshLoginCookiePromise = void 0;
      })),
      this.m_refreshLoginCookiePromise
    );
  }
  async SendMsgOnce(e, r, i, a, o) {
    let s,
      c = 0;
    try {
      let l = await this.Send(e, r, i, o);
      if (((c = l.status), c == 200)) {
        ((s = t.Init(a, 147)),
          l.headers &&
            (l.headers.get(`x-eresult`) &&
              s.Hdr().set_eresult(parseInt(l.headers.get(`x-eresult`))),
            l.headers.get(`x-error_message`) &&
              s.Hdr().set_error_message(l.headers.get(`x-error_message`))));
        let e = new n(await l.arrayBuffer());
        s.ReadBodyFromBuffer(a, e);
      }
    } catch {}
    let l = c === 401;
    if (!s) {
      let e = l ? `Unauthorized` : void 0;
      s = this.CreateFailedMsgProtobuf(a, 3, e);
    }
    return { msgResult: s, status: c };
  }
  SendNotification(e, t, n, r) {
    if (!this.BCanSendMessageViaBrowserAPI(r)) {
      if (this.m_fallbackInterface)
        return e.bSendAuth
          ? this.m_fallbackInterface
              ?.GetServiceTransport()
              .SendNotification(t, n, r)
          : this.m_fallbackInterface
              ?.GetAnonymousServiceTransport()
              .SendNotification(t, n, r);
      console.error(`No browserapi version of`, t, `and no fallback`);
    }
    return (this.SendNotificationAndRetryIfUnauthorized(e, t, n, r), !0);
  }
  async SendNotificationAndRetryIfUnauthorized(e, t, n, r) {
    (await this.Send(e, t, n, r)).status === 401 &&
      e.bSendAuth &&
      (await this.BEnsureLoginCookieRefreshed()) &&
      (await this.Send(e, t, n, r));
  }
  Send(e, t, n, r) {
    let i = this.CreateBrowserAPIURL(t),
      a = n.SerializeBody(),
      o = r.eWebAPIKeyRequirement,
      s = r.ePrivilege == 0 && o == 1,
      c = {
        credentials: `omit`,
        headers: { Accept: `application/octet-stream` },
      },
      l = new URLSearchParams();
    if (
      (!e.bSendAuth &&
        o != 1 &&
        console.error(
          `Attempting to invoke service ${t} without auth, but auth is required.`,
        ),
      e.bSendAuth && !s && (c.credentials = `same-origin`),
      r.bConstMethod)
    )
      return (
        l.append(`input_protobuf_encoded`, N.fromByteArray(a)),
        fetch(`${i}?${l.toString()}`, c)
      );
    {
      let e = new Uint8Array(a.buffer, a.byteOffset, a.byteLength);
      return fetch(i, {
        ...c,
        method: `POST`,
        headers: { ...c.headers, "Content-Type": `application/octet-stream` },
        body: e,
      });
    }
  }
  CreateBrowserAPIURL(e) {
    let t = e.match(/([^.]+)\.(.+)#(\d+)/);
    if (!t || t.length != 4) throw `Invalid service name: ${e}`;
    return `/um/${t[1]}/${t[2]}/`;
  }
  CreateFailedMsgProtobuf(e, n, r) {
    let i = t.Init(e);
    return (
      i.Hdr().set_eresult(2),
      i.Hdr().set_transport_error(n),
      r && i.Hdr().set_error_message(r),
      i
    );
  }
  MakeReady() {
    return Promise.resolve({ result: 1, message: `ready` });
  }
  GetServiceTransport() {
    return this.m_ServiceTransport;
  }
  GetAnonymousServiceTransport() {
    return this.m_AnonymousServiceTransport;
  }
  WaitUntilLoggedOn() {
    return Promise.resolve();
  }
  GetServerRTime32() {
    return Number(new Date());
  }
  RTime32ToDate(e) {
    return new Date(e * 1e3);
  }
};
function U(e) {
  let t = s();
  return t && t === d.STORE_CHECKOUT_BASE_URL ? new H(e, `checkout`) : new H(e);
}
export { O as a, D as c, M as i, H as n, k as o, z as r, A as s, U as t };
