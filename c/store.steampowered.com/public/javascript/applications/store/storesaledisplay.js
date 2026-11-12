import { _ } from "./chunk~f025431ab0.js";
import { _, _ } from "./chunk~01cfc309bf.js";
import { _, _ } from "./chunk~2185942436.js";
import { _ } from "./chunk~f57d770d64.js";
import { _ } from "./chunk~06d7f063bc.js";
import { _, _ } from "./chunk~3135e25ddf.js";
import { _ } from "./chunk~eefd71512b.js";
import { _ } from "./chunk~fc8a9e4879.js";
import { _, _, _, _, _, _, _, _ } from "./main.js";
var _ = _(_()),
  _ = _();
function _(_) {
  let { eventModel: _ } = _;
  return (0, _.jsx)(_, {
    bSalePage: !0,
    children: (0, _.jsx)(_, {
      ..._,
      overrideEventModel: _,
    }),
  });
}
function _(_) {
  let { promotionName: _, language: _, overrideEventModel: _ } = _,
    [_, _] = _.useState(
      _ ?? _.GetClanEventFromAnnouncementGID(_.ANNOUNCEMENT_GID),
    );
  _.useEffect(() => {
    if (!_ && _?.AnnouncementGID != _.ANNOUNCEMENT_GID) {
      let _ = new _(_.CLANSTEAMID);
      _.LoadPartnerEventFromAnnoucementGIDAndClanSteamID(
        _,
        _.ANNOUNCEMENT_GID,
        null,
      ).then(_);
    }
  }, [_, _]);
  let _ = _() ?? _,
    _ = _();
  if ((_(1500), !_))
    return (0, _.jsx)(`div`, {
      className: _,
      style: {
        height: `500px`,
      },
      children: (0, _.jsx)(_, {
        size: `medium`,
        string: _(`#Loading`),
      }),
    });
  let _ =
    (_.visibility_state !== _.k_EEventStateVisible &&
      _.visibility_state !== _.k_EEventStateUnlisted) ||
    _;
  return (0, _.jsx)(_, {
    eventModel: _,
    children: (0, _.jsx)(_, {
      children: (0, _.jsx)(_, {
        curator_clanid: _?.clanSteamID?.GetAccountID(),
        children: (0, _.jsx)(_, {
          promotionName: _,
          language: _,
          eventModel: _,
          bIsPreview: _,
        }),
      }),
    }),
  });
}
function _(_) {
  let { eventModel: _, children: _ } = _,
    _ = _.GetContentHubType() == `adultonly`;
  return (0, _.jsx)(_, {
    eAdultOnlyMediaBehavior: _ ? `allowed` : `masked`,
    children: _,
  });
}
export { _ as default };
