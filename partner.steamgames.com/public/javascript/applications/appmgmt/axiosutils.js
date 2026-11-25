/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { G as e, Pt as t } from "./chunk~de7f2df91c.js";
import { t as n } from "./chunk~f4e4ed5c17.js";
var r = t(n());
function i(t) {
  if (r.default.isCancel(t))
    return { strErrorMsg: `Action Cancelled:` + t, errorCode: 52 };
  if (t == null) return { strErrorMsg: `Unknown Error: ` + t, errorCode: 2 };
  if (
    t.response !== void 0 &&
    t.response.data &&
    typeof t.response.data == `object`
  ) {
    if (`msg` in t.response.data)
      return {
        strErrorMsg: t.response.data.msg,
        errorCode: t.response.data.success,
      };
    if (`err_msg` in t.response.data)
      return {
        strErrorMsg: t.response.data.err_msg,
        errorCode: t.response.data.success,
      };
    if (`message` in t.response.data)
      return {
        strErrorMsg: t.response.data.message,
        errorCode: t.response.data.success,
      };
    if (`success` in t.response.data)
      return {
        strErrorMsg: `error code: ` + t.response.data.success,
        errorCode: t.response.data.success,
      };
  } else if (typeof t.data == `object` && t.data) {
    if (`msg` in t.data)
      return { strErrorMsg: t.data.msg, errorCode: t.data.success };
    if (`err_msg` in t.data)
      return { strErrorMsg: t.data.err_msg, errorCode: t.data.success };
    if (`message` in t.data)
      return { strErrorMsg: t.data.message, errorCode: t.data.success };
    if (`success` in t.data)
      return {
        strErrorMsg: `error code: ` + t.data.success,
        errorCode: t.data.success,
      };
  } else if (t.success !== void 0 && t.msg !== void 0)
    return { strErrorMsg: t.msg, errorCode: t.success };
  else if (t.success !== void 0 && t.message !== void 0)
    return { strErrorMsg: t.message, errorCode: t.success };
  else if (t.success !== void 0 && t.err_msg !== void 0)
    return { strErrorMsg: t.err_msg, errorCode: t.success };
  else if (typeof t == `string` && t.length > 1024)
    (console.groupCollapsed(`GetMsgAndErrorCodeFromResponse cannot parse: `),
      console.warn(t),
      console.groupEnd());
  else if (typeof t == `object` && t instanceof e)
    return { strErrorMsg: `` + t.GetErrorMessage(), errorCode: t.GetEResult() };
  else console.warn(`GetMsgAndErrorCodeFromResponse cannot parse: `, t);
  return typeof t == `object` && `status` in t
    ? {
        strErrorMsg:
          `Unknown Error: ` +
          t +
          `
Status Code:` +
          t.status,
        errorCode: 2,
      }
    : { strErrorMsg: `Unknown Error: ` + t, errorCode: 2 };
}
export { i as t };
