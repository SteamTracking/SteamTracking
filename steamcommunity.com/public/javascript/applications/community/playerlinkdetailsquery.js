/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { K as e } from "./chunk~01cfc309bf.js";
import { n as t } from "./chunk~cc40f6af5e.js";
import { Em as n, Zp as r, im as i } from "./main.js";
function a(e) {
  return (
    delete e?.private_data?.account_name,
    delete e?.public_data?.account_flags,
    delete e?.public_data?.ban_expires_time,
    delete e?.public_data?.privacy_state,
    e?.public_data?.profile_state !== 1 && delete e?.private_data,
    e
  );
}
function o(e) {
  return [`PlayerLinkDetails`, e];
}
function s(e, t) {
  let r =
    typeof t == `number`
      ? n.InitFromAccountID(t, i.EUNIVERSE).ConvertTo64BitString()
      : t;
  return {
    queryKey: o(r),
    queryFn: async () => (r ? a(await e.load(r)) : null),
    enabled: !!r,
  };
}
function c(n) {
  let i = r(),
    a = t(i);
  return e(s(a, n));
}
export { c as t };
