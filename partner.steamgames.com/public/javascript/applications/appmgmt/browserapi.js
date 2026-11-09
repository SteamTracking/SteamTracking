/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import {
  M as e,
  Ot as t,
  U as n,
  Xt as r,
  nt as i,
  on as a,
  vt as o,
  xt as s,
} from "./mobx.esm.js";
import { t as c } from "./src.js";
import { a as l, t as u } from "./cookies.client.js";
import { t as d } from "./base64-js.js";
var f = a(d(), 1);
r();
function p(e) {
  try {
    if (!e || typeof e != `string`) return null;
    let t = e.split(`.`);
    if (t.length !== 3) return null;
    let [n, r] = t,
      i = _(n),
      a = _(r);
    return !i || !a ? null : { header: JSON.parse(i), body: JSON.parse(a) };
  } catch (e) {
    return (
      console.error(`Exception while attempting to decode token: "${e}"`), null
    );
  }
}
function m(e) {
  return e ? e.body.exp : 0;
}
function h(e) {
  return e ? e.body.nbf || e.body.iat : 0;
}
function g(e) {
  let t = m(e),
    n = h(e),
    r = 900,
    i = t - n;
  return i < 1350 && (r = i <= 60 ? 0 : 60), m(e) - r < Date.now() / 1e3;
}
function _(e) {
  return atob(e.replace(/-/g, `+`).replace(/_/g, `/`));
}
var v = class {
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
    (this.m_strWebAPIBaseURL = e),
      (this.m_webApiAccessToken = t),
      (this.m_bJsonMode = n),
      (this.m_fnRequestNewAccessToken = r),
      (this.m_bJWTToken = p(t) != null),
      (this.m_ServiceTransport = {
        SendMsg: this.SendMsgAndAwaitResponse.bind(this, { bSendAuth: !0 }),
        SendNotification: this.SendNotification.bind(this, { bSendAuth: !0 }),
        MakeReady: this.MakeReady.bind(this),
      }),
      (this.m_AnonymousServiceTransport = {
        SendMsg: this.SendMsgAndAwaitResponse.bind(this, { bSendAuth: !1 }),
        SendNotification: this.SendNotification.bind(this, { bSendAuth: !1 }),
        MakeReady: this.MakeReady.bind(this),
      });
    let i = u(l);
    i && /[0-9]+/g.test(i) && (this.m_strSpoofedSteamID = i);
  }
  WaitUntilLoggedOn() {
    return Promise.resolve();
  }
  GetServerRTime32() {
    return Number(new Date());
  }
  get steamid() {
    return new c();
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
            g(p(this.m_webApiAccessToken)) &&
              (await this.AttemptTokenRefresh()));
      }
      let l = await this.Send(e, t, n, i);
      if (((c = l.status), c == 200)) {
        if (
          ((a = o.Init(r, 147)),
          l.headers &&
            (l.headers.get(`x-eresult`) &&
              a.Hdr().set_eresult(parseInt(l.headers.get(`x-eresult`))),
            l.headers.get(`x-error_message`) &&
              a.Hdr().set_error_message(l.headers.get(`x-error_message`))),
          this.m_bJsonMode)
        )
          a.SetBodyJSON(await l.json());
        else {
          let e = new s(await l.arrayBuffer());
          a.ReadBodyFromBuffer(r, e);
        }
      }
    } catch {}
    let l = c === 401;
    if (!a) {
      let e = l ? `Unauthorized` : void 0;
      a = this.CreateFailedMsgProtobuf(r, 3, e);
    }
    return (
      l &&
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
    return this.Send(e, t, n, r), !0;
  }
  Send(e, n, r, i) {
    let a = this.CreateWebAPIURL(n),
      o = r.SerializeBody(),
      s = f.fromByteArray(o),
      c = i.eWebAPIKeyRequirement,
      l = i.ePrivilege == 0 && c == 1,
      u = {},
      d = new URLSearchParams();
    if (
      (!e.bSendAuth &&
        c != 1 &&
        console.error(
          `Attempting to invoke service ${n} without auth, but auth is required.`,
        ),
      e.bSendAuth && !l)
    ) {
      let e = `${n} was called over WebAPI with auth`;
      console.warn(e),
        t().ReportError(Error(e), { bIncludeMessageInIdentifier: !0 });
    }
    if (
      (this.m_webApiAccessToken &&
        e.bSendAuth &&
        !l &&
        (d.append(`access_token`, this.m_webApiAccessToken),
        this.m_strSpoofedSteamID &&
          d.append(`spoof_steamid`, this.m_strSpoofedSteamID)),
      i.bConstMethod)
    )
      return (
        d.append(`origin`, self.origin),
        this.m_bJsonMode
          ? d.append(`input_json`, JSON.stringify(r.Body().toObject()))
          : d.append(`input_protobuf_encoded`, s),
        fetch(`${a}?${d.toString()}`, u)
      );
    {
      let e = new FormData();
      return (
        this.m_bJsonMode
          ? e.append(`input_json`, JSON.stringify(r.Body().toObject()))
          : e.append(`input_protobuf_encoded`, s),
        fetch(`${a}?${d.toString()}`, { ...u, method: `POST`, body: e })
      );
    }
  }
  CreateWebAPIURL(e) {
    let t = e.match(/([^.]+)\.(.+)#(\d+)/);
    if (!t || t.length != 4) throw `Invalid service name: ${e}`;
    return `${this.m_strWebAPIBaseURL}I${t[1]}Service/${t[2]}/v${t[3]}`;
  }
  CreateFailedMsgProtobuf(e, t, n) {
    let r = o.Init(e);
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
function y(e, t) {
  return !!e && (e.includes(`all`) || e.includes(t));
}
async function b() {
  try {
    let e = await fetch(`${n.LOGIN_BASE_URL}jwt/ajaxrefresh`, {
      method: `POST`,
      credentials: `include`,
      body: new URLSearchParams({ redir: window.location.href }),
    });
    if (!e.ok) return !1;
    let t = await e.json();
    if (!t.success || !t.login_url) return !1;
    let r = new URLSearchParams();
    for (let [e, n] of Object.entries(t))
      typeof n == `string` && r.append(e, n);
    return (
      await fetch(t.login_url, {
        method: `POST`,
        credentials: `include`,
        body: r,
      })
    ).ok;
  } catch {
    return !1;
  }
}
function x(e) {
  return y(e.rgBrowserAPISites, `partner`);
}
var S = class {
  m_ServiceTransport;
  m_AnonymousServiceTransport;
  m_fallbackInterface;
  m_refreshLoginCookiePromise;
  constructor(e) {
    (this.m_fallbackInterface = e),
      (this.m_ServiceTransport = {
        SendMsg: this.SendMsgAndAwaitResponse.bind(this, { bSendAuth: !0 }),
        SendNotification: this.SendNotification.bind(this, { bSendAuth: !0 }),
        MakeReady: this.MakeReady.bind(this),
      }),
      (this.m_AnonymousServiceTransport = {
        SendMsg: this.SendMsgAndAwaitResponse.bind(this, { bSendAuth: !1 }),
        SendNotification: this.SendNotification.bind(this, { bSendAuth: !1 }),
        MakeReady: this.MakeReady.bind(this),
      });
  }
  async SendMsgAndAwaitResponse(e, t, n, r, i) {
    if (!x(i)) {
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
      (this.m_refreshLoginCookiePromise ??= b().finally(() => {
        this.m_refreshLoginCookiePromise = void 0;
      })),
      this.m_refreshLoginCookiePromise
    );
  }
  async SendMsgOnce(e, t, n, r, i) {
    let a,
      c = 0;
    try {
      let l = await this.Send(e, t, n, i);
      if (((c = l.status), c == 200)) {
        (a = o.Init(r, 147)),
          l.headers &&
            (l.headers.get(`x-eresult`) &&
              a.Hdr().set_eresult(parseInt(l.headers.get(`x-eresult`))),
            l.headers.get(`x-error_message`) &&
              a.Hdr().set_error_message(l.headers.get(`x-error_message`)));
        let e = new s(await l.arrayBuffer());
        a.ReadBodyFromBuffer(r, e);
      }
    } catch {}
    let l = c === 401;
    if (!a) {
      let e = l ? `Unauthorized` : void 0;
      a = this.CreateFailedMsgProtobuf(r, 3, e);
    }
    return { msgResult: a, status: c };
  }
  SendNotification(e, t, n, r) {
    if (!x(r)) {
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
    return this.SendNotificationAndRetryIfUnauthorized(e, t, n, r), !0;
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
        l.append(`input_protobuf_encoded`, f.fromByteArray(a)),
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
    let r = o.Init(e);
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
function C() {
  return [i.PARTNER_BASE_URL];
}
function w(t) {
  let n = e();
  return n && C().includes(n) ? new S(t) : t;
}
export { S as n, v as r, w as t };
