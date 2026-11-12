/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import {
  A as e,
  At as t,
  Q as n,
  X as r,
  rt as i,
  sn as a,
} from "./chunk~de7f2df91c.js";
import { It as o } from "./chunk~25a6634263.js";
import { t as s } from "./chunk~f4e4ed5c17.js";
import { t as c } from "./chunk~c55709d290.js";
var l = a(s()),
  u = a(t());
function d() {
  return i.EUNIVERSE == 2 ? 12 : 1;
}
var f = class e {
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
  async InternalFindPartnerByName(e) {
    let t = [];
    try {
      let n = i.PARTNER_BASE_URL + `pub/ajaxfindpublishers`,
        a = { sessionid: r(), searchtext: e, origin: self.origin },
        o = await l.default.get(n, { params: a });
      o?.status == 200 && o?.data?.success == 1
        ? o.data.publishers.forEach((e) => {
            let n = {
              partnerid: e.publisherid,
              name: e.publishername,
              partner_url:
                i.PARTNER_BASE_URL + `pub/publisher/${e.publisherid}/`,
              contacts: e.contacts,
            };
            (this.m_mapOptInToPartners.set(e.publisherid, n), t.push(n));
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
    return t;
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
    return ((e.s_Singleton ||= new e()), e.s_Singleton);
  }
  constructor() {
    let e = JSON.parse(JSON.stringify(n(`partner_info`, `application_config`)));
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
e([o], f.prototype, `FindPartnerByName`, null);
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
