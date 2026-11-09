/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { K as e } from "./libraries.js";
import { n as t } from "./playerlinkdetailsdataloader.js";
import { Sm as n, em as r, qp as i } from "./main.js";
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
  let i =
    typeof t == `number`
      ? n.InitFromAccountID(t, r.EUNIVERSE).ConvertTo64BitString()
      : t;
  return {
    queryKey: o(i),
    queryFn: async () => (i ? a(await e.load(i)) : null),
    enabled: !!i,
  };
}
function c(n) {
  let r = i(),
    a = t(r);
  return e(s(a, n));
}
export { c as t };
