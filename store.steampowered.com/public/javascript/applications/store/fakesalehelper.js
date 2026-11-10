/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { S as e, h as t, w as n, x as r } from "./partnerevent.js";
import { Ly as i, Ub as a } from "./main.js";
function o(e, r, o, c) {
  let l = new n();
  return (
    (l.type = r),
    (l.clanSteamID = new i(e, a.EUNIVERSE, 7, 0)),
    (l.GID = `fakeevent_` + s++),
    (l.visibility_state = t.k_EEventStateUnlisted),
    (l.visibilityStartTime = c - 1),
    (l.jsondata.bSaleEnabled = !0),
    (l.jsondata.sale_vanity_id_valve_approved_for_sale_subpath = !0),
    (l.jsondata.sale_vanity_id = o),
    (l.jsondata.sale_header_offset = 0),
    (l.jsondata.sale_header_disable_top_margin = !1),
    l
  );
}
var s = 1234;
function c(e, t) {
  return {
    unique_id: s++,
    capsules: [],
    events: [],
    links: [],
    section_type: e,
    localized_label: [],
    default_label: t,
  };
}
var l = `socialcontent_`;
function u() {
  return {
    platforms: [
      { label: r.Steam, checked: !0 },
      { label: r.Facebook, checked: !0 },
      { label: r.Twitter, checked: !0 },
      { label: r.Reddit, checked: !0 },
    ],
    doorsEnabled: !1,
    content_options: [
      {
        unique_id: l + Math.floor(Math.random() * 1e6),
        door: void 0,
        twitter_card: e.SummaryLargeImage,
        localized_option_fields: {
          localized_header: [],
          title: [],
          description: [],
          image: [],
        },
      },
    ],
  };
}
export { o as n, u as r, c as t };
