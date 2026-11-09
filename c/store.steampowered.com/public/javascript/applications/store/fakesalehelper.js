import { _, _, _, _ } from "./partnerevent.js";
import { _, _ } from "./main.js";
function _(_, _, _, _) {
  let _ = new _();
  return (
    (_.type = _),
    (_.clanSteamID = new _(_, _.EUNIVERSE, 7, 0)),
    (_.GID = `fakeevent_` + _++),
    (_.visibility_state = _.k_EEventStateUnlisted),
    (_.visibilityStartTime = _ - 1),
    (_.jsondata.bSaleEnabled = !0),
    (_.jsondata.sale_vanity_id_valve_approved_for_sale_subpath = !0),
    (_.jsondata.sale_vanity_id = _),
    (_.jsondata.sale_header_offset = 0),
    (_.jsondata.sale_header_disable_top_margin = !1),
    _
  );
}
var _ = 1234;
function _(_, _) {
  return {
    unique_id: _++,
    capsules: [],
    events: [],
    links: [],
    section_type: _,
    localized_label: [],
    default_label: _,
  };
}
var _ = `socialcontent_`;
function _() {
  return {
    platforms: [
      {
        label: _.Steam,
        checked: !0,
      },
      {
        label: _.Facebook,
        checked: !0,
      },
      {
        label: _.Twitter,
        checked: !0,
      },
      {
        label: _.Reddit,
        checked: !0,
      },
    ],
    doorsEnabled: !1,
    content_options: [
      {
        unique_id: _ + Math.floor(Math.random() * 1e6),
        door: void 0,
        twitter_card: _.SummaryLargeImage,
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
export { _, _, _ };
