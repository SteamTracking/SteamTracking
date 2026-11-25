import { o as e } from "./chunk~f025431ab0.js?contenthash=C8f2gWku";
import {
  Bn as t,
  Si as n,
  _i as r,
  _n as i,
  ar as a,
  bi as o,
  gi as s,
  hi as c,
  ir as l,
  mi as u,
  sr as d,
  vi as f,
  xi as p,
  yi as m,
} from "./chunk~3126832f23.js?contenthash=B40GC_DU";
import { t as h } from "./chunk~25a6634263.js?contenthash=DFHxRlLQ";
import { C as g, Y as _ } from "./library.js?contenthash=t9xy63v9";
var v = e(g());
function y(e) {
  if (v.default.isCancel(e))
    return { strErrorMsg: `Action Cancelled:` + e, errorCode: 52 };
  if (e == null) return { strErrorMsg: `Unknown Error: ` + e, errorCode: 2 };
  if (
    e.response !== void 0 &&
    e.response.data &&
    typeof e.response.data == `object`
  ) {
    if (`msg` in e.response.data)
      return {
        strErrorMsg: e.response.data.msg,
        errorCode: e.response.data.success,
      };
    if (`err_msg` in e.response.data)
      return {
        strErrorMsg: e.response.data.err_msg,
        errorCode: e.response.data.success,
      };
    if (`message` in e.response.data)
      return {
        strErrorMsg: e.response.data.message,
        errorCode: e.response.data.success,
      };
    if (`success` in e.response.data)
      return {
        strErrorMsg: `error code: ` + e.response.data.success,
        errorCode: e.response.data.success,
      };
  } else if (typeof e.data == `object` && e.data) {
    if (`msg` in e.data)
      return { strErrorMsg: e.data.msg, errorCode: e.data.success };
    if (`err_msg` in e.data)
      return { strErrorMsg: e.data.err_msg, errorCode: e.data.success };
    if (`message` in e.data)
      return { strErrorMsg: e.data.message, errorCode: e.data.success };
    if (`success` in e.data)
      return {
        strErrorMsg: `error code: ` + e.data.success,
        errorCode: e.data.success,
      };
  } else if (e.success !== void 0 && e.msg !== void 0)
    return { strErrorMsg: e.msg, errorCode: e.success };
  else if (e.success !== void 0 && e.message !== void 0)
    return { strErrorMsg: e.message, errorCode: e.success };
  else if (e.success !== void 0 && e.err_msg !== void 0)
    return { strErrorMsg: e.err_msg, errorCode: e.success };
  else if (typeof e == `string` && e.length > 1024)
    (console.groupCollapsed(`GetMsgAndErrorCodeFromResponse cannot parse: `),
      console.warn(e),
      console.groupEnd());
  else if (typeof e == `object` && e instanceof l)
    return { strErrorMsg: `` + e.GetErrorMessage(), errorCode: e.GetEResult() };
  else console.warn(`GetMsgAndErrorCodeFromResponse cannot parse: `, e);
  return typeof e == `object` && `status` in e
    ? {
        strErrorMsg:
          `Unknown Error: ` +
          e +
          `
Status Code:` +
          e.status,
        errorCode: 2,
      }
    : { strErrorMsg: `Unknown Error: ` + e, errorCode: 2 };
}
var b = e(_(), 1),
  x = e(n(), 1);
function S(e) {
  try {
    if (!e || typeof e != `string`) return null;
    let t = e.split(`.`);
    if (t.length !== 3) return null;
    let [n, r] = t,
      i = E(n),
      a = E(r);
    return !i || !a ? null : { header: JSON.parse(i), body: JSON.parse(a) };
  } catch (e) {
    return (
      console.error(`Exception while attempting to decode token: "${e}"`), null
    );
  }
}
function C(e) {
  return e ? e.body.exp : 0;
}
function w(e) {
  return e ? e.body.nbf || e.body.iat : 0;
}
function T(e) {
  let t = C(e),
    n = w(e),
    r = 900,
    i = t - n;
  return (i < 1350 && (r = i <= 60 ? 0 : 60), C(e) - r < Date.now() / 1e3);
}
function E(e) {
  return atob(e.replace(/-/g, `+`).replace(/_/g, `/`));
}
var D = class e extends x.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.version || u(e.M()),
        x.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            version: { n: 1, br: r.readEnum, bw: p.writeEnum },
            preference_state: { n: 2, br: r.readEnum, bw: p.writeEnum },
            content_customization: { n: 3, c: O },
            valve_analytics: { n: 4, c: k },
            third_party_analytics: { n: 5, c: A },
            third_party_content: { n: 6, c: j },
            utm_enabled: { n: 7, d: !0, br: r.readBool, bw: p.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= f(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return s(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new x.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return c(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new x.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      m(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new x.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAccountPrivacyCookiePreferences`;
    }
  },
  O = class e extends x.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.recentapps || u(e.M()),
        x.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { recentapps: { n: 1, br: r.readBool, bw: p.writeBool } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= f(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return s(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new x.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return c(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new x.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      m(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new x.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAccountPrivacyCookiePreferences_ContentCustomization`;
    }
  },
  k = class e extends x.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.product_impressions_tracking || u(e.M()),
        x.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            product_impressions_tracking: {
              n: 1,
              br: r.readBool,
              bw: p.writeBool,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= f(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return s(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new x.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return c(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new x.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      m(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new x.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAccountPrivacyCookiePreferences_ValveAnalytics`;
    }
  },
  A = class e extends x.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.google_analytics || u(e.M()),
        x.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            google_analytics: { n: 1, br: r.readBool, bw: p.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= f(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return s(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new x.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return c(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new x.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      m(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new x.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAccountPrivacyCookiePreferences_ThirdPartyAnalytics`;
    }
  },
  j = class e extends x.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.youtube || u(e.M()),
        x.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            youtube: { n: 1, br: r.readBool, bw: p.writeBool },
            vimeo: { n: 2, br: r.readBool, bw: p.writeBool },
            sketchfab: { n: 3, br: r.readBool, bw: p.writeBool },
            twitter: { n: 4, br: r.readBool, bw: p.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= f(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return s(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new x.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return c(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new x.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      m(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new x.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAccountPrivacyCookiePreferences_ThirdPartyContent`;
    }
  },
  M = class e extends x.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), x.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new x.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new x.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new x.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAccountPrivacy_GetCookiePreferences_Request`;
    }
  },
  N = class e extends x.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.preferences || u(e.M()),
        x.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= { proto: e, fields: { preferences: { n: 1, c: D } } }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= f(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return s(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new x.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return c(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new x.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      m(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new x.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAccountPrivacy_GetCookiePreferences_Response`;
    }
  },
  P;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(`AccountPrivacy.GetCookiePreferences#1`, a(M, t, n), N, {
      bConstMethod: !0,
      ePrivilege: 1,
      rgBrowserAPISites: [`partner`, `help`, `community`],
    });
  }
  e.GetCookiePreferences = t;
})((P ||= {}));
function F(e) {
  if (e.preferenceControls.isTechnicallyNecessary) return !0;
  let t = U();
  if (!t) return !1;
  switch (t.preference_state) {
    case 1:
    case 0:
      return !0;
    case 2:
    case 4:
      return !1;
  }
  return (
    `IsAllowed` in e.preferenceControls && e.preferenceControls.IsAllowed(t)
  );
}
var I = {
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
  L = {
    name: `sessionid`,
    options: { secure: !0, path: `/`, sameSite: `none` },
    preferenceControls: { isTechnicallyNecessary: !0 },
  },
  R = {
    name: `shoppingCartGID`,
    options: { path: `/`, secure: !0, maxAge: 6048e5 },
    preferenceControls: { isTechnicallyNecessary: !0 },
  },
  z = {
    name: `steamLoginSpoofSteamID`,
    options: { path: `/`, secure: !0 },
    preferenceControls: { isTechnicallyNecessary: !0 },
  };
function B(e) {
  if (!(`document` in globalThis) || !document.cookie) return;
  let t = document.cookie.match(`(^|; )` + e.name + `=([^;]*)`);
  if (t && t[2]) return decodeURIComponent(t[2]);
}
function V(e, t) {
  if (!(`document` in globalThis) || !F(e)) return;
  let n = e.options?.path ?? `/`,
    r = ``;
  (e.options?.expires
    ? (r += `;expires=` + e.options.expires.toUTCString())
    : e.options?.maxAge &&
      (r += `;max-age=` + Math.floor(e.options.maxAge / 1e3)),
    e.options?.secure && (r += `;secure`),
    (document.cookie =
      encodeURIComponent(e.name) +
      `=` +
      encodeURIComponent(t) +
      r +
      `;path=` +
      n));
}
function H(e) {
  return V({ ...e, options: { ...e.options, expires: new Date(0) } }, ``);
}
function U() {
  return window.SSR?.renderContext?.cookiePrefs;
}
var W = class {
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
      (this.m_bJWTToken = S(t) != null),
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
    let i = B(z);
    i && /[0-9]+/g.test(i) && (this.m_strSpoofedSteamID = i);
  }
  WaitUntilLoggedOn() {
    return Promise.resolve();
  }
  GetServerRTime32() {
    return Number(new Date());
  }
  get steamid() {
    return new h();
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
  async SendMsgAndAwaitResponse(e, t, n, r, i) {
    let a,
      o = 0;
    try {
      if (this.m_bJWTToken && e.bSendAuth && this.m_webApiAccessToken) {
        let e = Date.now() / 1e3;
        this.m_refreshAccessTokenPromise
          ? await this.m_refreshAccessTokenPromise
          : (window.bForceTokenRefresh ||
              (this.m_fnRequestNewAccessToken &&
                e - this.m_dtLastExpireCheck > 60)) &&
            ((this.m_dtLastExpireCheck = e),
            T(S(this.m_webApiAccessToken)) &&
              (await this.AttemptTokenRefresh()));
      }
      let s = await this.Send(e, t, n, i);
      if (((o = s.status), o == 200)) {
        if (
          ((a = l.Init(r, 147)),
          s.headers &&
            (s.headers.get(`x-eresult`) &&
              a.Hdr().set_eresult(parseInt(s.headers.get(`x-eresult`))),
            s.headers.get(`x-error_message`) &&
              a.Hdr().set_error_message(s.headers.get(`x-error_message`))),
          this.m_bJsonMode)
        )
          a.SetBodyJSON(await s.json());
        else {
          let e = new d(await s.arrayBuffer());
          a.ReadBodyFromBuffer(r, e);
        }
      }
    } catch {}
    let s = o === 401;
    if (!a) {
      let e = s ? `Unauthorized` : void 0;
      a = this.CreateFailedMsgProtobuf(r, 3, e);
    }
    return (
      s &&
        !this.m_refreshAccessTokenPromise &&
        this.m_bJWTToken &&
        e.bSendAuth &&
        this.m_fnRequestNewAccessToken &&
        this.m_webApiAccessToken &&
        (await this.AttemptTokenRefresh()),
      a
    );
  }
  SendNotification(e, t, n, r) {
    return (this.Send(e, t, n, r), !0);
  }
  Send(e, t, n, r) {
    let i = this.CreateWebAPIURL(t),
      a = n.SerializeBody(),
      o = b.fromByteArray(a),
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
      e.bSendAuth,
      this.m_webApiAccessToken &&
        e.bSendAuth &&
        !c &&
        (u.append(`access_token`, this.m_webApiAccessToken),
        this.m_strSpoofedSteamID &&
          u.append(`spoof_steamid`, this.m_strSpoofedSteamID)),
      r.bConstMethod)
    )
      return (
        u.append(`origin`, self.origin),
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
  CreateFailedMsgProtobuf(e, t, n) {
    let r = l.Init(e);
    return (
      r.Hdr().set_eresult(2),
      r.Hdr().set_transport_error(t),
      n && r.Hdr().set_error_message(n),
      r
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
function G(e, t) {
  return !!e && (e.includes(`all`) || e.includes(t));
}
async function K() {
  try {
    let e = await fetch(`${t.LOGIN_BASE_URL}jwt/ajaxrefresh`, {
      method: `POST`,
      credentials: `include`,
      body: new URLSearchParams({ redir: window.location.href }),
    });
    if (!e.ok) return !1;
    let n = await e.json();
    if (!n.success || !n.login_url) return !1;
    let r = new URLSearchParams();
    for (let [e, t] of Object.entries(n))
      typeof t == `string` && r.append(e, t);
    return (
      await fetch(n.login_url, {
        method: `POST`,
        credentials: `include`,
        body: r,
      })
    ).ok;
  } catch {
    return !1;
  }
}
function q(e) {
  return G(e.rgBrowserAPISites, `steamui`);
}
var J = class {
  m_ServiceTransport;
  m_AnonymousServiceTransport;
  m_fallbackInterface;
  m_refreshLoginCookiePromise;
  constructor(e) {
    ((this.m_fallbackInterface = e),
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
    if (!q(i)) {
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
  BEnsureLoginCookieRefreshed() {
    return (
      (this.m_refreshLoginCookiePromise ??= K().finally(() => {
        this.m_refreshLoginCookiePromise = void 0;
      })),
      this.m_refreshLoginCookiePromise
    );
  }
  async SendMsgOnce(e, t, n, r, i) {
    let a,
      o = 0;
    try {
      let s = await this.Send(e, t, n, i);
      if (((o = s.status), o == 200)) {
        ((a = l.Init(r, 147)),
          s.headers &&
            (s.headers.get(`x-eresult`) &&
              a.Hdr().set_eresult(parseInt(s.headers.get(`x-eresult`))),
            s.headers.get(`x-error_message`) &&
              a.Hdr().set_error_message(s.headers.get(`x-error_message`))));
        let e = new d(await s.arrayBuffer());
        a.ReadBodyFromBuffer(r, e);
      }
    } catch {}
    let s = o === 401;
    if (!a) {
      let e = s ? `Unauthorized` : void 0;
      a = this.CreateFailedMsgProtobuf(r, 3, e);
    }
    return { msgResult: a, status: o };
  }
  SendNotification(e, t, n, r) {
    if (!q(r)) {
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
        l.append(`input_protobuf_encoded`, b.fromByteArray(a)),
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
  CreateFailedMsgProtobuf(e, t, n) {
    let r = l.Init(e);
    return (
      r.Hdr().set_eresult(2),
      r.Hdr().set_transport_error(t),
      n && r.Hdr().set_error_message(n),
      r
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
function Y() {
  return [];
}
function X(e) {
  let t = i();
  return t && Y().includes(t) ? new J(e) : e;
}
export {
  B as a,
  L as c,
  y as d,
  H as i,
  R as l,
  J as n,
  V as o,
  W as r,
  I as s,
  X as t,
  P as u,
};
