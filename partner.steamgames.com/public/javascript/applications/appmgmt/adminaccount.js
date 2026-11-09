/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { Z as e, nt as t, on as n } from "./mobx.esm.js";
import { t as r } from "./useQuery.js";
import { t as i } from "./axios.js";
import { r as a, t as o } from "./browserapi.js";
var s = class n {
  m_steamInterface;
  GetPromotionTransport() {
    return this.m_steamInterface;
  }
  static s_Singleton;
  static Get() {
    return (
      n.s_Singleton || ((n.s_Singleton = new n()), n.s_Singleton.Init()),
      n.s_Singleton
    );
  }
  Init() {
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
