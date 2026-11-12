/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { Q as e, rt as t, sn as n } from "./chunk~de7f2df91c.js";
import { t as r } from "./chunk~ede3e357a2.js";
import { t as i } from "./chunk~f4e4ed5c17.js";
import { r as a, t as o } from "./chunk~70c16cc80c.js";
var s = class n {
  m_steamInterface;
  GetPromotionTransport() {
    return this.m_steamInterface;
  }
  static s_Singleton;
  static Get() {
    return ((n.s_Singleton ||= new n()), n.s_Singleton);
  }
  constructor() {
    let n = e(`promotion_operation_token`, `application_config`);
    this.m_steamInterface = o(new a(t.WEBAPI_BASE_URL, n));
  }
};
function c() {
  return s.Get().GetPromotionTransport().GetServiceTransport();
}
var l = n(i());
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
