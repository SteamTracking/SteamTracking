/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { Pt as e, k as t, w as n } from "./chunk~de7f2df91c.js";
import { t as r } from "./chunk~ede3e357a2.js";
import { r as i, t as a } from "./chunk~70c16cc80c.js";
import { t as o } from "./chunk~f4e4ed5c17.js";
var s = class e {
  m_steamInterface;
  GetPromotionTransport() {
    return this.m_steamInterface;
  }
  static s_Singleton;
  static Get() {
    return ((e.s_Singleton ||= new e()), e.s_Singleton);
  }
  constructor() {
    let e = n(`promotion_operation_token`, `application_config`);
    this.m_steamInterface = a(new i(t.WEBAPI_BASE_URL, e));
  }
};
function c() {
  return s.Get().GetPromotionTransport().GetServiceTransport();
}
var l = e(o());
function u() {
  let e = r({
    queryKey: [`useValveAccounts`],
    queryFn: async () => {
      let e = `${t.PARTNER_BASE_URL}actions/ajaxgetadminusers`,
        n = await l.default.get(e);
      return n?.status == 200 && n.data?.success == 1
        ? n.data.admins
        : (console.error(`ValveAccounts:`, n?.status), []);
    },
  });
  return e.isLoading ? null : e.data;
}
function d(e) {
  return u()?.find((t) => t.id == e);
}
function f(e, t) {
  return e.getQueryData([`useValveAccounts`])?.find((e) => e.id === t);
}
export { c as a, s as i, d as n, u as r, f as t };
