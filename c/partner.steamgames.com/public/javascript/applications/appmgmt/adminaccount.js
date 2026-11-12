import { _, _, _ } from "./chunk~de7f2df91c.js";
import { _ } from "./chunk~ede3e357a2.js";
import { _ } from "./chunk~f4e4ed5c17.js";
import { _, _ } from "./chunk~70c16cc80c.js";
var _ = class _ {
  m_steamInterface;
  GetPromotionTransport() {
    return this.m_steamInterface;
  }
  static s_Singleton;
  static Get() {
    return ((_.s_Singleton ||= new _()), _.s_Singleton);
  }
  constructor() {
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
