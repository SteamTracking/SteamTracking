/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { on as e, vt as t } from "./mobx.esm.js";
import { t as n } from "./axios.js";
var r = e(n());
function i(e) {
  if (r.default.isCancel(e))
    return { strErrorMsg: `Action Cancelled:` + e, errorCode: 52 };
  if (
    e.response !== void 0 &&
    e.response.data &&
    typeof e.response.data == `object`
  ) {
    if (`msg` in e.response.data)
      return {
        strErrorMsg: e.response.data.msg,
        errorCode: e.response.data.success,
      };
    if (`err_msg` in e.response.data)
      return {
        strErrorMsg: e.response.data.err_msg,
        errorCode: e.response.data.success,
      };
    if (`message` in e.response.data)
      return {
        strErrorMsg: e.response.data.message,
        errorCode: e.response.data.success,
      };
    if (`success` in e.response.data)
      return {
        strErrorMsg: `error code: ` + e.response.data.success,
        errorCode: e.response.data.success,
      };
  } else if (typeof e.data == `object`) {
    if (`msg` in e.data)
      return { strErrorMsg: e.data.msg, errorCode: e.data.success };
    if (`err_msg` in e.data)
      return { strErrorMsg: e.data.err_msg, errorCode: e.data.success };
    if (`message` in e.data)
      return { strErrorMsg: e.data.message, errorCode: e.data.success };
    if (`success` in e.data)
      return {
        strErrorMsg: `error code: ` + e.data.success,
        errorCode: e.data.success,
      };
  } else if (e.success !== void 0 && e.msg !== void 0)
    return { strErrorMsg: e.msg, errorCode: e.success };
  else if (e.success !== void 0 && e.message !== void 0)
    return { strErrorMsg: e.message, errorCode: e.success };
  else if (e.success !== void 0 && e.err_msg !== void 0)
    return { strErrorMsg: e.err_msg, errorCode: e.success };
  else if (typeof e == `string` && e.length > 1024)
    (console.groupCollapsed(`GetMsgAndErrorCodeFromResponse cannot parse: `),
      console.warn(e),
      console.groupEnd());
  else if (typeof e == `object` && e instanceof t)
    return { strErrorMsg: `` + e.GetErrorMessage(), errorCode: e.GetEResult() };
  else console.warn(`GetMsgAndErrorCodeFromResponse cannot parse: `, e);
  return typeof e == `object` && `status` in e
    ? {
        strErrorMsg:
          `Unknown Error: ` +
          e +
          `
Status Code:` +
          e.status,
        errorCode: 2,
      }
    : { strErrorMsg: `Unknown Error: ` + e, errorCode: 2 };
}
export { i as t };
