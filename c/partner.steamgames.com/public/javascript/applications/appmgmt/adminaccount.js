import { _, _, _ } from "./mobx.esm.js";
import { _ } from "./useQuery.js";
import { _ } from "./axios.js";
import { _, _ } from "./browserapi.js";
var _ = class _ {
  m_steamInterface;
  GetPromotionTransport() {
    return this.m_steamInterface;
  }
  static s_Singleton;
  static Get() {
    return (
      _.s_Singleton || ((_.s_Singleton = new _()), _.s_Singleton.Init()),
      _.s_Singleton
    );
  }
  Init() {
    let _ = _(`promotion_operation_token`, `application_config`);
    this.m_steamInterface = _(new _(_.WEBAPI_BASE_URL, _));
  }
};
function _() {
  return _.Get().GetPromotionTransport().GetServiceTransport();
}
var _ = _(_());
function _() {
  let _ = _({
    queryKey: [`useValveAccounts`],
    queryFn: async () => {
      let _ = `${_.PARTNER_BASE_URL}actions/ajaxgetadminusers`,
        _ = await _.default.get(_);
      return _?.status == 200 && _.data?.success == 1
        ? _.data.admins
        : (console.error(`ValveAccounts:`, _?.status), []);
    },
  });
  return _.isLoading ? null : _.data;
}
function _(_) {
  return _()?.find((_) => _._ == _);
}
function _(_, _) {
  return _.getQueryData([`useValveAccounts`])?.find((_) => _._ === _);
}
