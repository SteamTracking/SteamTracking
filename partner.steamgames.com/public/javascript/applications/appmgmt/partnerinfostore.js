/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import {
  Y as e,
  Z as t,
  k as n,
  kt as r,
  nt as i,
  on as a,
} from "./mobx.esm.js";
import { Rt as o } from "./src.js";
import { t as s } from "./axios.js";
import { t as c } from "./axiosutils.js";
var l = a(s()),
  u = a(r());
function d() {
  return i.EUNIVERSE == 2 ? 12 : 1;
}
var f = class n {
  m_mapOptInToPartners = new Map();
  m_mapPromises = new Map();
  GetPartnerInfo(e) {
    return this.m_mapOptInToPartners.get(e);
  }
  BHasPartnerInfoLoad(e) {
    return this.m_mapOptInToPartners.has(e);
  }
  async FindPartnerByName(e) {
    return (
      this.m_mapPromises.has(e) ||
        this.m_mapPromises.set(e, this.InternalFindPartnerByName(e)),
      this.m_mapPromises.get(e)
    );
  }
  async InternalFindPartnerByName(t) {
    let n = [];
    try {
      let r = i.PARTNER_BASE_URL + `pub/ajaxfindpublishers`,
        a = { sessionid: e(), searchtext: t, origin: self.origin },
        o = await l.default.get(r, { params: a });
      o?.status == 200 && o?.data?.success == 1
        ? o.data.publishers.forEach((e) => {
            let t = {
              partnerid: e.publisherid,
              name: e.publishername,
              partner_url:
                i.PARTNER_BASE_URL + `pub/publisher/${e.publisherid}/`,
              contacts: e.contacts,
            };
            this.m_mapOptInToPartners.set(e.publisherid, t), n.push(t);
          })
        : console.log(
            `CPartnerInfoStore.FindPartnerByName failed with status ${o?.status} eresult ${o?.data?.success} and msg ${o?.data?.msg}`,
          );
    } catch (e) {
      let t = c(e);
      console.error(
        `CPartnerInfoStore.FindPartnerByName failed add: ` + t.strErrorMsg,
        t,
      );
    }
    return n;
  }
  async LoadPartnerInfo(e) {
    return (
      this.m_mapOptInToPartners.has(e) ||
        (await this.FindPartnerByName(`` + e),
        this.BHasPartnerInfoLoad(e) || this.m_mapOptInToPartners.set(e, null)),
      this.m_mapOptInToPartners.get(e)
    );
  }
  async LoadMultiplePartnerInfo(e) {
    if (!e || e.length == 0) return [];
    let t = e.filter((e) => !this.m_mapOptInToPartners.has(e));
    return (
      t.length > 0 && (await this.FindPartnerByName(`` + t.join(`,`))),
      e.map((e) => this.m_mapOptInToPartners.get(e)).filter(Boolean)
    );
  }
  static s_Singleton;
  static Get() {
    return (n.s_Singleton ||= new n()), n.s_Singleton;
  }
  constructor() {
    let e = JSON.parse(JSON.stringify(t(`partner_info`, `application_config`)));
    this.ValidateStoreDefault(e) &&
      e.forEach((e) => this.m_mapOptInToPartners.set(e.partnerid, e));
  }
  ValidateStoreDefault(e) {
    let t = e;
    return t && Array.isArray(t) && t.length > 0 && typeof t[0] == `object`
      ? typeof t[0].partnerid == `number` && typeof t[0].name == `string`
      : !1;
  }
};
n([o], f.prototype, `FindPartnerByName`, null);
function p(e) {
  let [t, n] = (0, u.useState)(!1);
  return (
    (0, u.useEffect)(() => {
      !t &&
        e?.length > 0 &&
        f
          .Get()
          .LoadMultiplePartnerInfo(e)
          .then(() => n(!0));
    }, [e, t]),
    t
  );
}
function m(e) {
  let [t, n] = u.useState(() => f.Get().GetPartnerInfo(e));
  return (
    u.useEffect(() => {
      !f.Get().BHasPartnerInfoLoad(e) && e > 0
        ? f
            .Get()
            .LoadPartnerInfo(e)
            .then((e) => n(e))
        : f.Get().BHasPartnerInfoLoad(e) &&
          t?.partnerid != e &&
          n(f.Get().GetPartnerInfo(e));
    }, [e, t]),
    [t]
  );
}
function h() {
  return { fnFindPartnerByName: f.Get().FindPartnerByName };
}
function g(e) {
  return f.Get().GetPartnerInfo(e);
}
function _(e) {
  return f.Get().LoadPartnerInfo(e);
}
export { m as a, h as i, _ as n, p as o, d as r, g as t };
