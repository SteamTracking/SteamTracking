import { _, _, _, _, _, _ } from "./mobx.esm.js";
import { _ } from "./src.js";
import { _ } from "./axios.js";
import { _ } from "./axiosutils.js";
var _ = _(_()),
  _ = _(_());
function _() {
  return _.EUNIVERSE == 2 ? 12 : 1;
}
var _ = class _ {
  m_mapOptInToPartners = new Map();
  m_mapPromises = new Map();
  GetPartnerInfo(_) {
    return this.m_mapOptInToPartners.get(_);
  }
  BHasPartnerInfoLoad(_) {
    return this.m_mapOptInToPartners.has(_);
  }
  async FindPartnerByName(_) {
    return (
      this.m_mapPromises.has(_) ||
        this.m_mapPromises.set(_, this.InternalFindPartnerByName(_)),
      this.m_mapPromises.get(_)
    );
  }
  async InternalFindPartnerByName(_) {
    let _ = [];
    try {
      let _ = _.PARTNER_BASE_URL + `pub/ajaxfindpublishers`,
        _ = {
          sessionid: _(),
          searchtext: _,
          origin: self.origin,
        },
        _ = await _.default.get(_, {
          params: _,
        });
      _?.status == 200 && _?.data?.success == 1
        ? _.data.publishers.forEach((_) => {
            let _ = {
              partnerid: _.publisherid,
              name: _.publishername,
              partner_url:
                _.PARTNER_BASE_URL + `pub/publisher/${_.publisherid}/`,
              contacts: _.contacts,
            };
            this.m_mapOptInToPartners.set(_.publisherid, _), _.push(_);
          })
        : console.log(
            `CPartnerInfoStore.FindPartnerByName failed with status ${_?.status} eresult ${_?.data?.success} and msg ${_?.data?.msg}`,
          );
    } catch (_) {
      let _ = _(_);
      console.error(
        `CPartnerInfoStore.FindPartnerByName failed add: ` + _.strErrorMsg,
        _,
      );
    }
    return _;
  }
  async LoadPartnerInfo(_) {
    return (
      this.m_mapOptInToPartners.has(_) ||
        (await this.FindPartnerByName(`` + _),
        this.BHasPartnerInfoLoad(_) || this.m_mapOptInToPartners.set(_, null)),
      this.m_mapOptInToPartners.get(_)
    );
  }
  async LoadMultiplePartnerInfo(_) {
    if (!_ || _.length == 0) return [];
    let _ = _.filter((_) => !this.m_mapOptInToPartners.has(_));
    return (
      _.length > 0 && (await this.FindPartnerByName(`` + _.join(`,`))),
      _.map((_) => this.m_mapOptInToPartners.get(_)).filter(Boolean)
    );
  }
  static s_Singleton;
  static Get() {
    return (_.s_Singleton ||= new _()), _.s_Singleton;
  }
  constructor() {
    let _ = JSON.parse(JSON.stringify(_(`partner_info`, `application_config`)));
    this.ValidateStoreDefault(_) &&
      _.forEach((_) => this.m_mapOptInToPartners.set(_.partnerid, _));
  }
  ValidateStoreDefault(_) {
    let _ = _;
    return _ && Array.isArray(_) && _.length > 0 && typeof _[0] == `object`
      ? typeof _[0].partnerid == `number` && typeof _[0].name == `string`
      : !1;
  }
};
_([_], _.prototype, `FindPartnerByName`, null);
function _(_) {
  let [_, _] = (0, _.useState)(!1);
  return (
    (0, _.useEffect)(() => {
      !_ &&
        _?.length > 0 &&
        _.Get()
          .LoadMultiplePartnerInfo(_)
          .then(() => _(!0));
    }, [_, _]),
    _
  );
}
function _(_) {
  let [_, _] = _.useState(() => _.Get().GetPartnerInfo(_));
  return (
    _.useEffect(() => {
      !_.Get().BHasPartnerInfoLoad(_) && _ > 0
        ? _.Get()
            .LoadPartnerInfo(_)
            .then((_) => _(_))
        : _.Get().BHasPartnerInfoLoad(_) &&
          _?.partnerid != _ &&
          _(_.Get().GetPartnerInfo(_));
    }, [_, _]),
    [_]
  );
}
function _() {
  return {
    fnFindPartnerByName: _.Get().FindPartnerByName,
  };
}
function _(_) {
  return _.Get().GetPartnerInfo(_);
}
function _(_) {
  return _.Get().LoadPartnerInfo(_);
}
export { _, _, _, _, _, _ };
