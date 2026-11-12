/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { qb as e } from "./main.js";
function t(t, r) {
  return t?.public_data?.profile_url
    ? `${e.COMMUNITY_BASE_URL}id/${t.public_data.profile_url}`
    : n(t?.public_data?.steamid || r);
}
function n(t) {
  return t ? `${e.COMMUNITY_BASE_URL}profiles/${t}` : ``;
}
export { n, t };
