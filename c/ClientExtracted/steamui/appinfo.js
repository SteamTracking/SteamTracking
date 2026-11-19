import { _, _ } from "./chunk~3126832f23.js?contenthash=Bx8rJGPC";
var _ = 1024,
  _ = 2048,
  _ = 4096,
  _ = 8192,
  _ = 16384,
  _ = 32768,
  _ = 65536,
  _ = 1073741824,
  _ = -2147483648,
  _ = `fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb`,
  _ = `https://steamloopback.host/clientassets/avatars/`;
function _(_, _, _ = `auto`) {
  let _ = `.jpg`;
  ((_ && _ !== `0000000000000000000000000000000000000000`) || (_ = _),
    _.length == 44 && ((_ = _.substr(-4)), (_ = _.substr(0, 40))));
  let _ = _ == `client` || (_ == `auto` && _.IN_STEAMUI),
    _ = _.AVATAR_BASE_URL;
  return (
    _
      ? ((_ = _), (_ = _.toLowerCase()))
      : _ ||
        ((_ = _.MEDIA_CDN_COMMUNITY_URL + `images/avatars/`),
        (_ += _.substr(0, 2) + `/`)),
    (_ += _),
    _ && _ != `small` && (_ += `_` + _),
    (_ += _),
    _
  );
}
function _(_) {
  return _ ? _.startsWith(_) : !1;
}
var _ = `061818254b2c99ac49e6626adb128ed1282a392f`,
  _ = class {
    m_unAppID;
    m_bInitialized = !1;
    m_strName;
    m_strIconURL;
    m_dtUpdatedFromServer;
    m_eAppType;
    constructor(_) {
      this.m_unAppID = _;
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
      return this.m_strIconURL && this.BuildAppURL(this.m_strIconURL, _);
    }
    get icon_url() {
      return this.BuildAppURL(this.m_strIconURL, _);
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
    BuildAppURL(_, _) {
      return _
        ? _.MEDIA_CDN_COMMUNITY_URL +
            `images/apps/` +
            this.appid +
            `/` +
            _ +
            `.jpg`
        : _(_, `small`, `web`);
    }
    DeserializeFromMessage(_) {
      ((this.m_bInitialized = !0),
        (this.m_strName = _.name()),
        (this.m_strIconURL = _.icon()),
        (this.m_dtUpdatedFromServer = new Date()),
        (this.m_eAppType = _.app_type()));
    }
    DeserializeFromAppOverview(_) {
      _.icon_hash() && _.app_type() != 1073741824
        ? ((this.m_bInitialized = !0),
          (this.m_strName = _.display_name()),
          (this.m_strIconURL = _.icon_hash()),
          (this.m_dtUpdatedFromServer = new Date()),
          (this.m_eAppType = _.app_type()))
        : (this.m_bInitialized = !1);
    }
    DeserializeFromCacheObject(_) {
      try {
        ((this.m_strName = _.strName),
          (this.m_strIconURL = _.strIconURL),
          (this.m_dtUpdatedFromServer = new Date(_.strUpdatedFromServer)),
          (this.m_eAppType = _.eAppType),
          (this.m_bInitialized = !0));
      } catch {}
    }
    SerializeToCacheObject() {
      return (
        _(
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
