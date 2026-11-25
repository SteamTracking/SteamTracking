import { Ma as e, fi as t } from "./chunk~3126832f23.js?contenthash=B40GC_DU";
var n = 1024,
  r = 2048,
  i = 4096,
  a = 8192,
  o = 16384,
  s = 32768,
  c = 65536,
  l = 1073741824,
  u = -2147483648,
  d = `fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb`,
  f = `https://steamloopback.host/clientassets/avatars/`;
function p(t, n, r = `auto`) {
  let i = `.jpg`;
  ((t && t !== `0000000000000000000000000000000000000000`) || (t = d),
    t.length == 44 && ((i = t.substr(-4)), (t = t.substr(0, 40))));
  let a = r == `client` || (r == `auto` && e.IN_STEAMUI),
    o = e.AVATAR_BASE_URL;
  return (
    a
      ? ((o = f), (t = t.toLowerCase()))
      : o ||
        ((o = e.MEDIA_CDN_COMMUNITY_URL + `images/avatars/`),
        (o += t.substr(0, 2) + `/`)),
    (o += t),
    n && n != `small` && (o += `_` + n),
    (o += i),
    o
  );
}
function m(e) {
  return e ? e.startsWith(f) : !1;
}
var h = `061818254b2c99ac49e6626adb128ed1282a392f`,
  g = class {
    m_unAppID;
    m_bInitialized = !1;
    m_strName;
    m_strIconURL;
    m_dtUpdatedFromServer;
    m_eAppType;
    constructor(e) {
      this.m_unAppID = e;
    }
    get appid() {
      return this.m_unAppID;
    }
    get is_initialized() {
      return this.m_bInitialized;
    }
    get is_valid() {
      return this.m_bInitialized && !!this.m_strName;
    }
    get name() {
      return this.m_strName;
    }
    get icon_url_no_default() {
      return this.m_strIconURL && this.BuildAppURL(this.m_strIconURL, h);
    }
    get icon_url() {
      return this.BuildAppURL(this.m_strIconURL, h);
    }
    get time_updated_from_server() {
      return this.m_dtUpdatedFromServer;
    }
    get apptype() {
      return this.m_eAppType;
    }
    BIsApplicationOrTool() {
      return this.apptype == 4 || this.apptype == 2;
    }
    BuildAppURL(t, n) {
      return t
        ? e.MEDIA_CDN_COMMUNITY_URL +
            `images/apps/` +
            this.appid +
            `/` +
            t +
            `.jpg`
        : p(n, `small`, `web`);
    }
    DeserializeFromMessage(e) {
      ((this.m_bInitialized = !0),
        (this.m_strName = e.name()),
        (this.m_strIconURL = e.icon()),
        (this.m_dtUpdatedFromServer = new Date()),
        (this.m_eAppType = e.app_type()));
    }
    DeserializeFromAppOverview(e) {
      e.icon_hash() && e.app_type() != 1073741824
        ? ((this.m_bInitialized = !0),
          (this.m_strName = e.display_name()),
          (this.m_strIconURL = e.icon_hash()),
          (this.m_dtUpdatedFromServer = new Date()),
          (this.m_eAppType = e.app_type()))
        : (this.m_bInitialized = !1);
    }
    DeserializeFromCacheObject(e) {
      try {
        ((this.m_strName = e.strName),
          (this.m_strIconURL = e.strIconURL),
          (this.m_dtUpdatedFromServer = new Date(e.strUpdatedFromServer)),
          (this.m_eAppType = e.eAppType),
          (this.m_bInitialized = !0));
      } catch {}
    }
    SerializeToCacheObject() {
      return (
        t(
          this.m_bInitialized,
          `Attempting to serialize an uninitialized AppInfo object for caching!`,
        ),
        this.m_bInitialized
          ? {
              strName: this.m_strName,
              strIconURL: this.m_strIconURL,
              strUpdatedFromServer: this.m_dtUpdatedFromServer.toJSON(),
              eAppType: this.m_eAppType,
            }
          : null
      );
    }
  };
export {
  c as a,
  n as c,
  o as d,
  l as f,
  d as i,
  a as l,
  m as n,
  s as o,
  r as p,
  p as r,
  u as s,
  g as t,
  i as u,
};
